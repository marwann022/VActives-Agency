// Local production-file server: mirrors Vercel routes/headers, never sends mail.
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { resolve, extname } from 'node:path'
const config = JSON.parse(await readFile('vercel.json', 'utf8'))
const root = resolve('dist')
createServer(async (req, res) => {
  // Loopback tests use HTTP. WebKit otherwise upgrades local assets to HTTPS,
  // where this test server has no TLS. Keep every other production directive.
  for (const header of config.headers[0].headers) {
    res.setHeader(header.key, header.key.toLowerCase() === 'content-security-policy'
      ? header.value.replace(/;\s*upgrade-insecure-requests/g, '') : header.value)
  }
  const path = new URL(req.url, 'http://localhost').pathname
  if (path === '/start-hiring') { res.writeHead(308, { Location: '/#hire' }); res.end(); return }
  let file = path === '/' ? '/index.html' : ['/services', '/contact'].includes(path) ? `${path}/index.html` : path
  let status = 200
  let buffer
  try {
    const target = resolve(root, `.${file}`)
    if (!target.startsWith(`${root}/`)) throw new Error('Invalid path')
    buffer = await readFile(target)
  } catch { file = '/404.html'; status = 404; buffer = await readFile(`${root}/404.html`) }
  const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.webp': 'image/webp', '.xml': 'application/xml', '.txt': 'text/plain' }
  res.writeHead(status, { 'Content-Type': mime[extname(file)] || 'application/octet-stream' })
  res.end(buffer)
}).listen(4175, '127.0.0.1')
