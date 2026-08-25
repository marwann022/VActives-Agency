import { gsap } from 'gsap'

/**
 * Checks if the browser currently prefers reduced motion.
 * @returns {boolean}
 */
export function isReducedMotionActive() {
  if (typeof window === 'undefined' || !('matchMedia' in window)) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Fade & Lift reveal animation helper.
 * @param {HTMLElement | string | Array<HTMLElement>} target
 * @param {object} [options]
 */
export function fadeInUp(target, options = {}) {
  if (isReducedMotionActive()) {
    return gsap.set(target, { opacity: 1, y: 0 })
  }

  return gsap.fromTo(
    target,
    { opacity: 0, y: options.y ?? 24 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration ?? 0.65,
      ease: options.ease ?? 'power2.out',
      delay: options.delay ?? 0,
      scrollTrigger: options.scrollTrigger ?? null,
      onComplete: options.onComplete ?? null
    }
  )
}

/**
 * Stagger reveal animation helper for grouped elements.
 * @param {HTMLElement[] | string} targets
 * @param {object} [options]
 */
export function staggerReveal(targets, options = {}) {
  if (isReducedMotionActive()) {
    return gsap.set(targets, { opacity: 1, y: 0 })
  }

  return gsap.fromTo(
    targets,
    { opacity: 0, y: options.y ?? 20 },
    {
      opacity: 1,
      y: 0,
      duration: options.duration ?? 0.5,
      stagger: options.stagger ?? 0.1,
      ease: options.ease ?? 'power2.out',
      delay: options.delay ?? 0,
      scrollTrigger: options.scrollTrigger ?? null
    }
  )
}

/**
 * Mask / Clip reveal animation helper for headlines or images.
 * Uses clip-path for high performance.
 * @param {HTMLElement | string} target
 * @param {object} [options]
 */
export function clipReveal(target, options = {}) {
  if (isReducedMotionActive()) {
    return gsap.set(target, { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 })
  }

  return gsap.fromTo(
    target,
    { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      duration: options.duration ?? 0.75,
      ease: options.ease ?? 'power3.out',
      delay: options.delay ?? 0,
      scrollTrigger: options.scrollTrigger ?? null
    }
  )
}

/**
 * Line reveal animation helper for editorial dividers.
 * @param {HTMLElement | string} target
 * @param {object} [options]
 */
export function lineReveal(target, options = {}) {
  if (isReducedMotionActive()) {
    return gsap.set(target, { scaleX: 1, opacity: 1 })
  }

  return gsap.fromTo(
    target,
    { scaleX: 0, transformOrigin: options.origin ?? 'left center', opacity: 0.5 },
    {
      scaleX: 1,
      opacity: 1,
      duration: options.duration ?? 0.6,
      ease: options.ease ?? 'power2.out',
      delay: options.delay ?? 0,
      scrollTrigger: options.scrollTrigger ?? null
    }
  )
}
