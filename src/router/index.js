import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Services from '@/pages/Services.vue'
import StartHiring from '@/pages/StartHiring.vue'
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
    name: 'StartHiring',
    component: StartHiring
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: 86, behavior: 'smooth' }
    return { top: 0 }
  }
})

export default router
