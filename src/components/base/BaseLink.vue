<template>
  <component
    :is="isComponent"
    :to="to"
    :href="href"
    :target="target"
    :rel="isExternalLink ? 'noopener noreferrer' : undefined"
    :aria-disabled="disabled ? 'true' : undefined"
    :class="[
      'group relative inline-flex items-center gap-1.5 text-primary hover:text-primary-hover font-medium transition-colors',
      'duration-normal ease-standard',
      'focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded-xs',
      disabled ? 'opacity-50 pointer-events-none cursor-not-allowed text-muted' : ''
    ]"
  >
    <span class="relative py-0.5">
      <slot />
      <span
        class="absolute left-0 bottom-0 w-full h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-normal ease-standard origin-left"
        aria-hidden="true"
      ></span>
    </span>
    <span
      v-if="showArrow"
      class="inline-block transition-transform duration-normal ease-standard group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      &rarr;
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  to: {
    type: [String, Object],
    default: null
  },
  href: {
    type: String,
    default: null
  },
  target: {
    type: String,
    default: null
  },
  showArrow: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const isExternalLink = computed(() => props.href && (props.target === '_blank' || props.href.startsWith('http')))

const isComponent = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})
</script>
