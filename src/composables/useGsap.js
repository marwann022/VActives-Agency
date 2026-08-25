import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger once globally
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Composable providing scoped GSAP context tied to Vue lifecycle.
 * Automatically cleans up animations and ScrollTriggers on component unmount.
 * 
 * @param {Function} [animationCallback] - Optional setup callback receiving (ctx, gsap, ScrollTrigger)
 * @param {import('vue').Ref<HTMLElement | null> | HTMLElement} [scopeRef] - Optional element scope
 */
export function useGsap(animationCallback, scopeRef) {
  let ctx = null
  const isReady = ref(false)

  onMounted(() => {
    const scope = scopeRef && 'value' in scopeRef ? scopeRef.value : scopeRef

    ctx = gsap.context(() => {
      if (animationCallback) {
        animationCallback(ctx, gsap, ScrollTrigger)
      }
      isReady.value = true
    }, scope || undefined)
  })

  onUnmounted(() => {
    if (ctx) {
      ctx.revert() // Reverts all GSAP animations and kills associated ScrollTriggers
    }
  })

  return {
    gsap,
    ScrollTrigger,
    ctx,
    isReady
  }
}
