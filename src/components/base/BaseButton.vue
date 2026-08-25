<template>
  <component
    :is="isComponent"
    :to="to"
    :href="href"
    :target="target"
    :rel="isExternalLink ? 'noopener noreferrer' : undefined"
    :type="isButton ? type : undefined"
    :disabled="isButton ? disabled : undefined"
    :aria-disabled="disabled ? 'true' : undefined"
    :class="[
      'group inline-flex items-center justify-center font-medium transition-all text-center select-none gap-2',
      'duration-normal ease-standard',
      'rounded-sm focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2',
      variantClasses[variant] || variantClasses.primary,
      sizeClasses[size] || sizeClasses.md,
      disabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : 'hover:-translate-y-[1px] active:translate-y-[0px]'
    ]"
  >
    <slot />
    <span
      v-if="showArrow"
      class="inline-block transition-transform duration-normal ease-standard group-hover:translate-x-1"
      aria-hidden="true"
    >
      &rarr;
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'ghost'].includes(v)
  },
  size: {
    type: String,
    default: 'md',
    validator: (s) => ['sm', 'md', 'lg'].includes(s)
  },
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
  },
  type: {
    type: String,
    default: 'button'
  }
})

const isButton = computed(() => !props.to && !props.href)
const isExternalLink = computed(() => props.href && (props.target === '_blank' || props.href.startsWith('http')))

const isComponent = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})

const variantClasses = {
  primary: 'bg-primary text-inverse hover:bg-primary-hover border border-transparent shadow-sm',
  secondary: 'bg-bg-surface text-main border border-border hover:border-border-strong hover:bg-slate-100/80 shadow-sm',
  ghost: 'bg-transparent text-main hover:bg-bg-surface border border-transparent'
}

const sizeClasses = {
  sm: 'text-sm py-1.5 px-3 min-h-[36px]',
  md: 'text-body py-2.5 px-5 min-h-[44px]',
  lg: 'text-body-lg py-3 px-6 min-h-[52px]'
}
</script>
