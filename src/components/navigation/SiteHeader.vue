<template>
  <header ref="headerRef" class="site-header" :class="{ 'site-header--scrolled': isScrolled, 'site-header--hidden': isHidden }">
    <span ref="progressRef" class="scroll-progress" aria-hidden="true"></span>
    <BaseContainer class="header-inner">
      <router-link to="/" class="brand-link" aria-label="VActives Home"><BrandLogo compact /></router-link>
      <nav class="desktop-nav" aria-label="Main navigation">
        <router-link to="/" :class="{ 'nav-item--active': activeNav === 'home' }" :aria-current="activeNav === 'home' ? 'page' : undefined">Home</router-link>
        <router-link to="/services" :class="{ 'nav-item--active': activeNav === 'services' }" :aria-current="activeNav === 'services' ? 'page' : undefined">Services &amp; Pricing</router-link>
        <router-link :to="{ path: '/', hash: '#contact' }" :class="{ 'nav-item--active': activeNav === 'contact' }" :aria-current="activeNav === 'contact' ? 'location' : undefined">Contact</router-link>
      </nav>
      <BaseButton class="header-cta" to="/start-hiring" size="sm" show-arrow>Start Hiring</BaseButton>
      <button class="menu-button" type="button" :aria-expanded="isMobileMenuOpen" aria-label="Toggle navigation menu" @click="isMobileMenuOpen = !isMobileMenuOpen"><IconX v-if="isMobileMenuOpen" :size="25" /><IconMenu2 v-else :size="25" /></button>
    </BaseContainer>
    <MobileMenu :is-open="isMobileMenuOpen" :active-nav="activeNav" @close="isMobileMenuOpen = false" />
  </header>
</template>

<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'
import { IconMenu2, IconX } from '@tabler/icons-vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BrandLogo from '@/components/brand/BrandLogo.vue'
import MobileMenu from '@/components/navigation/MobileMenu.vue'
import { isReducedMotionActive } from '@/utils/motion/reveal'

const headerRef = ref(null)
const progressRef = ref(null)
const isScrolled = ref(false)
const isHidden = ref(false)
const isMobileMenuOpen = ref(false)
const activeNav = ref('home')
const route = useRoute()
let lastY = 0
let rafId = 0

function updateHeader() {
  const y = window.scrollY
  const directionDown = y > lastY
  isScrolled.value = y > 18
  isHidden.value = !isReducedMotionActive() && directionDown && y > 240 && !isMobileMenuOpen.value
  const max = document.documentElement.scrollHeight - window.innerHeight
  if (progressRef.value) progressRef.value.style.transform = `scaleX(${max > 0 ? y / max : 0})`
  if (route.path === '/services') activeNav.value = 'services'
  else if (route.path === '/') {
    const contactSection = document.querySelector('#contact')
    activeNav.value = contactSection && contactSection.getBoundingClientRect().top <= window.innerHeight * .62 ? 'contact' : 'home'
  } else activeNav.value = ''
  lastY = y
  rafId = 0
}
function handleScroll() { if (!rafId) rafId = window.requestAnimationFrame(updateHeader) }

onMounted(() => {
  gsap.fromTo(headerRef.value, { opacity: 0, y: -22 }, { opacity: 1, y: 0, duration: isReducedMotionActive() ? 0 : .55, ease: 'power3.out' })
  window.addEventListener('scroll', handleScroll, { passive: true })
  updateHeader()
})
watch(() => [route.path, route.hash], async () => { await nextTick(); updateHeader() })
onUnmounted(() => { window.removeEventListener('scroll', handleScroll); if (rafId) cancelAnimationFrame(rafId) })
</script>

<style scoped>
.site-header{position:fixed;inset:0 0 auto;z-index:var(--z-header);height:82px;background:rgba(255,255,255,.96);border-bottom:1px solid rgba(232,222,208,.62);transition:transform .48s cubic-bezier(.22,1,.36,1),height .3s ease,box-shadow .3s ease}.site-header--scrolled{height:70px;box-shadow:0 8px 28px rgba(16,44,38,.07)}.site-header--hidden{transform:translateY(-105%)}.header-inner{height:100%;display:flex;align-items:center;gap:30px}.brand-link{display:flex;align-items:center;border-radius:6px}.desktop-nav{display:flex;align-items:center;gap:28px;margin-left:auto}.desktop-nav a{position:relative;padding:9px 0;font-size:13px;font-weight:700;color:#60736e;transition:color .25s ease}.desktop-nav a::after{content:"";position:absolute;left:0;right:0;bottom:3px;height:2px;border-radius:999px;background:#08735b;transform:scaleX(0);transform-origin:right;transition:transform .3s ease}.desktop-nav a:hover,.desktop-nav a:focus-visible,.desktop-nav a.nav-item--active{color:#102c26}.desktop-nav a:hover::after,.desktop-nav a:focus-visible::after,.desktop-nav a.nav-item--active::after{transform:scaleX(1);transform-origin:left}.header-cta{margin-left:4px}.menu-button{display:none;margin-left:auto;width:44px;height:44px;border:0;background:transparent;color:#102c26;align-items:center;justify-content:center}.scroll-progress{position:absolute;left:0;right:0;bottom:-1px;height:2px;background:#08735b;transform:scaleX(0);transform-origin:left;will-change:transform}
@media(max-width:900px){.desktop-nav,.header-cta{display:none}.menu-button{display:flex}.site-header{height:72px}}
.site-header{height:86px}
@media(max-width:900px){.site-header{height:72px}}
</style>
