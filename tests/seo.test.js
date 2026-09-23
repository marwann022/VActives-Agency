import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { pageSeo, siteUrl } from '../src/data/seo.js'
test('all three built pages contain crawlable content and unique metadata', async () => {
  const titles = new Set()
  for (const path of Object.keys(pageSeo)) {
    const html = await readFile(`dist${path === '/' ? '' : path}/index.html`, 'utf8')
    assert.equal((html.match(/<title\b/g) || []).length, 1)
    assert.equal((html.match(/<h1\b/g) || []).length, 1)
    assert.ok(html.includes(`href="${siteUrl}${path}"`))
    assert.ok(html.includes('application/ld+json'))
    assert.ok(!html.includes('vite.svg'))
    assert.ok(html.includes('id="overlays"'))
    const icon = html.match(/rel="icon"[^>]*href="([^"]+)"/)[1]
    assert.ok((await readFile(`dist${icon}`)).length > 0)
    titles.add(html.match(/<title[^>]*>(.*?)<\/title>/)[1])
  }
  assert.equal(titles.size, 3)
  assert.match(await readFile('dist/404.html', 'utf8'), /noindex,follow/)
  assert.match(await readFile('dist/robots.txt', 'utf8'), /sitemap.xml/)
})
