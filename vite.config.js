import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { renderHead } from './src/data/seo.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), {
    name: 'vactives-seo',
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url, 'http://localhost')
        if (['/services', '/contact'].includes(url.pathname)) req.url = `${url.pathname}/index.html${url.search}`
        next()
      })
    },
    transformIndexHtml(html) {
      return html.replace('<!--seo-head-->', `<!--seo-start-->${renderHead('/').replace(/<(title|meta|link|script)(?=[ >])/g, '<$1 data-seo')}<!--seo-end-->`)
    }
  }],
  ssr: { noExternal: ['gsap'] },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
