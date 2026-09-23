import { createSSRApp, createApp } from 'vue'
import '@fontsource-variable/plus-jakarta-sans'
import App from './App.vue'
import { makeRouter } from './router'
import './styles/globals.css'

const app = (document.querySelector('#app').hasChildNodes() ? createSSRApp : createApp)(App)
const router = makeRouter()

app.use(router)

router.isReady().then(() => app.mount('#app'))
