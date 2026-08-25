import { createApp } from 'vue'
import '@fontsource-variable/plus-jakarta-sans'
import App from './App.vue'
import router from './router'
import './styles/globals.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
