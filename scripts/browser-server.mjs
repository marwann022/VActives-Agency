import { spawnSync } from 'node:child_process'
// This public testing key is only used for the local test build. API and widget
// are intercepted in browser tests; no credentials or production mail are used.
const result = spawnSync('npm', ['run', 'build'], { stdio: 'inherit', env: { ...process.env, VITE_TURNSTILE_SITE_KEY: '1x00000000000000000000AA', VITE_ENABLE_REFERRALS: 'false' } })
if (result.status !== 0) process.exit(result.status || 1)
await import('./test-server.mjs')
