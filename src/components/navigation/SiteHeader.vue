<template>
  <header
    ref="headerRef"
    :class="[
      'fixed top-0 left-0 right-0 z-[var(--z-header)] transition-all duration-normal ease-standard',
      isScrolled
        ? 'py-3 bg-bg-main border-b border-border shadow-sm'
        : 'py-5 bg-bg-main border-b border-border/40'
    ]"
  >
    <BaseContainer class="flex items-center justify-between">
      <router-link
        to="/"
        class="group flex items-center focus-visible:outline-2 focus-visible:outline-primary rounded-xs"
        aria-label="VActives Home"
      >
        <BrandLogo compact />
        <span class="hidden lg:inline-flex ml-4 pl-4 border-l border-border text-[10px] uppercase tracking-[.12em] text-muted font-semibold">
          Virtual Recruitment Agency
        </span>
      </router-link>

      <!-- Desktop Navigation Items (Home, Services — Start Hiring is rendered as dedicated CTA button) -->
      <nav class="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
        <router-link
          v-for="item in navLinks"
          :key="item.path"
          :to="item.path"
          v-slot="{ isActive }"
          class="focus-visible:outline-2 focus-visible:outline-primary rounded-xs"
        >
          <span
            :class="[
              'relative py-1 text-sm font-medium transition-colors duration-normal ease-standard',
              isActive ? 'text-main font-semibold' : 'text-secondary hover:text-main'
            ]"
          >
            {{ item.name }}
            <span
              :class="[
                'absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform duration-normal ease-standard origin-left',
                isActive ? 'scale-x-100' : 'scale-x-0'
              ]"
              aria-hidden="true"
            ></span>
          </span>
        </router-link>
      </nav>

      <!-- Right Desktop CTA & Mobile Toggle -->
      <div class="flex items-center space-x-4">
        <!-- Desktop Primary CTA -->
        <div class="hidden md:block">
          <BaseButton
            variant="primary"
            size="sm"
            to="/start-hiring"
            show-arrow
          >
            Start Hiring
          </BaseButton>
        </div>

        <!-- Mobile Menu Hamburger Trigger -->
        <button
          type="button"
          class="md:hidden p-2 text-main hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-xs min-h-[44px] min-w-[44px] flex items-center justify-center"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          @click="toggleMobileMenu"
        >
          <IconX v-if="isMobileMenuOpen" :size="24" :stroke-width="2" aria-hidden="true" />
          <IconMenu2 v-else :size="24" :stroke-width="2" aria-hidden="true" />
        </button>
      </div>
    </BaseContainer>

    <!-- Mobile Navigation Overlay -->
    <MobileMenu
      :is-open="isMobileMenuOpen"
      @close="isMobileMenuOpen = false"
    />
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { IconMenu2, IconX } from '@tabler/icons-vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BrandLogo from '@/components/brand/BrandLogo.vue'
import MobileMenu from '@/components/navigation/MobileMenu.vue'
import { useGsap } from '@/composables/useGsap'
import { isReducedMotionActive } from '@/utils/motion/reveal'

const headerRef = ref(null)
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' }
]

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Lightweight Passive Scroll Handler
function handleScroll() {
  if (typeof window !== 'undefined') {
    isScrolled.value = window.scrollY > 20
  }
}

// Header Entrance GSAP Animation
useGsap((ctx, gsap) => {
  if (headerRef.value && !isReducedMotionActive()) {
    gsap.fromTo(
      headerRef.value,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
    )
  }
}, headerRef)

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>
