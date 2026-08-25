import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable to reactively detect if the user prefers reduced motion.
 * @returns {{ isReducedMotion: import('vue').Ref<boolean> }}
 */
export function useReducedMotion() {
  const isReducedMotion = ref(false)
  let mediaQuery = null

  const onChange = (event) => {
    isReducedMotion.value = event.matches
  }

  onMounted(() => {
    if (typeof window !== 'undefined' && 'matchMedia' in window) {
      mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      isReducedMotion.value = mediaQuery.matches

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', onChange)
      } else {
        mediaQuery.addListener(onChange)
      }
    }
  })

  onUnmounted(() => {
    if (mediaQuery) {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', onChange)
      } else {
        mediaQuery.removeListener(onChange)
      }
    }
  })

  return {
    isReducedMotion
  }
}
