import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import { updateHead } from '@/data/seo'
import Home from '@/pages/Home.vue'
import Services from '@/pages/Services.vue'
import Contact from '@/pages/Contact.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/start-hiring',
    redirect: { path: '/', hash: '#hire' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

export function makeRouter() {
const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 86, behavior: 'smooth' }
    return { top: 0 }
  }
})
if (!import.meta.env.SSR) router.afterEach((to) => updateHead(to.path))
return router
}
