import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { render } from '../dist/server/entry-server.js'
import { pageSeo, renderHead, siteUrl } from '../src/data/seo.js'

const template = await readFile('dist/index.html', 'utf8')
for (const path of [...Object.keys(pageSeo), '/404']) {
  const body = await render(path)
  const head = renderHead(path).replace(/<(title|meta|link|script)(?=[ >])/g, '<$1 data-seo')
  const html = template.replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, () => `<!--seo-start-->${head}<!--seo-end-->`).replace('<div id="app"></div>', () => `<div id="app">${body.html}</div>`).replace('<div id="overlays"></div>', () => `<div id="overlays">${body.overlays}</div>`)
  const directory = path === '/' || path === '/404' ? 'dist' : `dist${path}`
  await mkdir(directory, { recursive: true })
  await writeFile(`${directory}/${path === '/404' ? '404' : 'index'}.html`, html)
}
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(pageSeo).map(path => `<url><loc>${siteUrl}${path}</loc></url>`).join('')}</urlset>\n`)
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${siteUrl}/sitemap.xml\n`)
// This directory is only a build-time renderer, never a public server bundle.
await rm('dist/server', { recursive: true, force: true })
console.log('Prerendered Home, Services, Contact and 404; generated sitemap and robots.txt.')
