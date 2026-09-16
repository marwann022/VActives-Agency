<template>
  <Transition name="scroll-top">
    <button
      v-if="isVisible"
      type="button"
      class="scroll-top-btn"
      :class="{ 'is-scrolling': isScrolling }"
      aria-label="Scroll to top of page"
      title="Back to top"
      @click="scrollToTop"
    >
      <!-- Circular Progress Ring -->
      <svg class="progress-ring" viewBox="0 0 48 48" aria-hidden="true">
        <circle
          class="progress-ring__track"
          cx="24"
          cy="24"
          r="21"
          fill="none"
          stroke-width="2.5"
        />
        <circle
          class="progress-ring__indicator"
          cx="24"
          cy="24"
          r="21"
          fill="none"
          stroke-width="2.5"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
        />
      </svg>

      <!-- Arrow Icon -->
      <div class="scroll-top-btn__icon">
        <IconArrowUp :size="20" stroke-width="2.5" aria-hidden="true" />
      </div>

      <!-- Tooltip label on hover -->
      <span class="scroll-top-btn__tooltip" aria-hidden="true">Top</span>
    </button>
  </Transition>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { IconArrowUp } from '@tabler/icons-vue'

const isVisible = ref(false)
const scrollProgress = ref(0)
const isScrolling = ref(false)
let scrollTimeout = null
let rafId = 0

const radius = 21
const circumference = 2 * Math.PI * radius

const dashOffset = computed(() => {
  return circumference - (scrollProgress.value / 100) * circumference
})

function updateScrollState() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const docHeight = document.documentElement.scrollHeight - window.innerHeight

  isVisible.value = scrollTop > 260

  if (docHeight > 0) {
    const progress = Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100)
    scrollProgress.value = progress
  } else {
    scrollProgress.value = 0
  }

  isScrolling.value = true
  clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(() => {
    isScrolling.value = false
  }, 400)

  rafId = 0
}

function handleScroll() {
  if (!rafId) {
    rafId = window.requestAnimationFrame(updateScrollState)
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  updateScrollState()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  if (rafId) window.cancelAnimationFrame(rafId)
  clearTimeout(scrollTimeout)
})
</script>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: #084c3e;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 80;
  padding: 0;
  box-shadow: 0 10px 24px -4px rgba(8, 76, 62, 0.4), 0 4px 10px rgba(0, 0, 0, 0.12);
  transition: transform 0.25s cubic-bezier(0.2, 0, 0, 1),
              box-shadow 0.25s ease,
              background-color 0.25s ease;
  user-select: none;
  touch-action: manipulation;
}

.scroll-top-btn:hover {
  transform: translateY(-4px) scale(1.04);
  background: #0a5949;
  box-shadow: 0 14px 30px -4px rgba(8, 76, 62, 0.55), 0 6px 14px rgba(0, 0, 0, 0.16);
}

.scroll-top-btn:active {
  transform: translateY(-1px) scale(0.96);
  box-shadow: 0 6px 16px -2px rgba(8, 76, 62, 0.4);
}

.scroll-top-btn:focus-visible {
  outline: 2px solid #b9ed75;
  outline-offset: 3px;
}

/* SVG Progress Ring */
.progress-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  pointer-events: none;
}

.progress-ring__track {
  stroke: rgba(255, 255, 255, 0.16);
}

.progress-ring__indicator {
  stroke: #b9ed75;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.12s ease-out;
}

/* Icon */
.scroll-top-btn__icon {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;
}

.scroll-top-btn:hover .scroll-top-btn__icon {
  transform: translateY(-2px);
}

/* Tooltip */
.scroll-top-btn__tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: #082f28;
  color: #b9ed75;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 4px 8px;
  border-radius: 6px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
  white-space: nowrap;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.scroll-top-btn:hover .scroll-top-btn__tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Entrance / Exit transition */
.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.scroll-top-enter-from,
.scroll-top-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.85);
}

/* Mobile adjustments */
@media (max-width: 640px) {
  .scroll-top-btn {
    bottom: 20px;
    right: 20px;
    width: 44px;
    height: 44px;
  }
  .scroll-top-btn__tooltip {
    display: none;
  }
}
</style>
