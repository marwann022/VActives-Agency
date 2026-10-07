import { execFileSync } from 'node:child_process'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import assert from 'node:assert/strict'

const tracked = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' }).split('\0').filter(Boolean)
assert.ok(!tracked.some(p => /(^|\/)\.env(?:\.|$)/.test(p) && !p.endsWith('.env.example')), 'An environment file is tracked')
assert.ok(!tracked.some(p => p.startsWith('.vercel/')), 'Vercel local configuration is tracked')
// Heuristics, not a replacement for provider-aware scanning/rotation.
const patterns = [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, /\bre_[A-Za-z0-9]{24,}\b/, /\bAKIA[A-Z0-9]{16}\b/, /\bgh[pousr]_[A-Za-z0-9]{30,}\b/]
const walk = dir => readdirSync(dir).flatMap(name => { const p = `${dir}/${name}`; return statSync(p).isDirectory() ? walk(p) : [p] })
const published = walk('dist')
assert.ok(!published.some(p => /\.(map|env)$/.test(p) || p.includes('/server/')), 'Private build artifact is published')
const files = [...tracked, ...published].filter(p => /\.(?:js|mjs|vue|json|html|ya?ml|md|txt)$/.test(p) && p !== 'package-lock.json')
for (const file of files) {
  const text = readFileSync(file, 'utf8')
  assert.ok(!patterns.some(pattern => pattern.test(text)), `Potential secret in ${file} (value redacted)`)
}
for (const file of published.filter(p => /\.(js|html)$/.test(p))) {
  assert.ok(!/RESEND_API_KEY|TURNSTILE_SECRET_KEY|api\.resend\.com/.test(readFileSync(file, 'utf8')), `Server-only code leaked into ${file}`)
}
console.log('Tracked-file and public-build secret/artifact checks passed (heuristic; not a full history audit).')
