import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'
import { makeRouter } from './router'

export async function render(path) {
  const app = createSSRApp(App)
  const router = makeRouter()
  app.use(router)
  await router.push(path)
  await router.isReady()
  const context = {}
  const html = await renderToString(app, context)
  return { html, overlays: context.teleports?.['#overlays'] || '' }
}
