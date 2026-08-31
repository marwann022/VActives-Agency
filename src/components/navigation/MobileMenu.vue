<template>
  <Teleport to="body">
    <Transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
      :css="false"
    >
      <div
        v-if="isOpen"
        id="mobile-menu"
        class="fixed inset-0 z-[var(--z-modal)] bg-bg-dark text-text-inverse flex flex-col justify-between p-[var(--page-gutter-mobile)] md:p-[var(--page-gutter-tablet)] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <!-- Header Row inside Mobile Menu -->
        <div class="flex items-center justify-between border-b border-border-dark pb-4">
          <span class="font-display text-h4 font-bold tracking-tight text-text-inverse">
            VACTIVES
          </span>
          <button
            type="button"
            class="p-2 text-text-muted hover:text-text-inverse transition-colors duration-normal ease-standard focus-visible:outline-2 focus-visible:outline-primary rounded-xs"
            aria-label="Close menu"
            @click="closeMenu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Editorial Numbered Navigation Items -->
        <div class="my-auto py-8 space-y-6">
          <nav class="space-y-4">
            <div
              v-for="(item, index) in navItems"
              :key="item.path"
              class="mobile-nav-item border-b border-border-dark/40 pb-4"
              :class="{ 'mobile-nav-item--active': activeNav === item.id }"
            >
              <router-link
                :to="item.path"
                class="group flex items-baseline gap-4 py-2"
                :aria-current="activeNav === item.id ? (item.id === 'contact' ? 'location' : 'page') : undefined"
                @click="closeMenu"
              >
                <span class="font-mono text-xs text-text-muted group-hover:text-primary transition-colors">
                  0{{ index + 1 }}
                </span>
                <span class="font-display text-h3 font-bold tracking-tight text-text-inverse group-hover:text-primary transition-colors">
                  {{ item.name }}
                </span>
                <span v-if="activeNav === item.id" class="active-dot ml-auto" aria-hidden="true"></span>
              </router-link>
            </div>
          </nav>

          <!-- CTA Button inside Mobile Menu -->
          <div class="mobile-nav-cta pt-4">
            <BaseButton
              variant="primary"
              size="lg"
              to="/start-hiring"
              show-arrow
              class="w-full justify-center"
              @click="closeMenu"
            >
              Start Hiring
            </BaseButton>
          </div>
        </div>

        <!-- Footer Row inside Mobile Menu -->
        <div class="border-t border-border-dark/40 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-text-muted gap-2">
          <span>&copy; {{ new Date().getFullYear() }} VActives Agency</span>
          <span class="font-mono">USA &middot; UK &middot; CANADA &middot; AUSTRALIA</span>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'
import BaseButton from '@/components/base/BaseButton.vue'
import { isReducedMotionActive } from '@/utils/motion/reveal'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  activeNav: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close'])
const route = useRoute()

const navItems = [
  { id: 'home', name: 'Home', path: '/' },
  { id: 'services', name: 'Services & Pricing', path: '/services' },
  { id: 'contact', name: 'Contact', path: '/#contact' }
]

function closeMenu() {
  emit('close')
}

// Lock body scrolling when mobile menu is open
watch(
  () => props.isOpen,
  (open) => {
    if (typeof document !== 'undefined') {
      if (open) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  }
)

// Auto-close on route change
watch(
  () => route.path,
  () => {
    if (props.isOpen) {
      closeMenu()
    }
  }
)

// Keyboard Escape key handler
function onKeydown(event) {
  if (event.key === 'Escape' && props.isOpen) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})

// Transition Lifecycle GSAP Animations
function onBeforeEnter(el) {
  if (isReducedMotionActive()) {
    gsap.set(el, { opacity: 0 })
    return
  }
  gsap.set(el, { opacity: 0, y: -20 })
  gsap.set(el.querySelectorAll('.mobile-nav-item'), { opacity: 0, y: 15 })
  gsap.set(el.querySelector('.mobile-nav-cta'), { opacity: 0, y: 15 })
}

function onEnter(el, done) {
  if (isReducedMotionActive()) {
    gsap.to(el, { opacity: 1, duration: 0.2, onComplete: done })
    return
  }

  const tl = gsap.timeline({ onComplete: done })
  tl.to(el, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' })
    .to(
      el.querySelectorAll('.mobile-nav-item'),
      { opacity: 1, y: 0, duration: 0.3, stagger: 0.08, ease: 'power2.out' },
      '-=0.15'
    )
    .to(
      el.querySelector('.mobile-nav-cta'),
      { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
      '-=0.15'
    )
}

function onLeave(el, done) {
  if (isReducedMotionActive()) {
    gsap.to(el, { opacity: 0, duration: 0.15, onComplete: done })
    return
  }
  gsap.to(el, { opacity: 0, y: -10, duration: 0.25, ease: 'power2.in', onComplete: done })
}
</script>

<style scoped>
.mobile-nav-item--active .font-display,.mobile-nav-item--active .font-mono{color:#a7e85b}.active-dot{width:9px;height:9px;flex:0 0 auto;border-radius:999px;background:#a7e85b;box-shadow:0 0 0 5px rgba(167,232,91,.12)}
</style>
