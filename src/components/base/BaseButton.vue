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
    <IconArrowRight
      v-if="showArrow"
      :size="18"
      :stroke-width="2"
      class="transition-transform duration-normal ease-standard group-hover:translate-x-1"
      aria-hidden="true"
    />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { IconArrowRight } from '@tabler/icons-vue'

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
  primary: 'bg-primary text-inverse hover:bg-primary-hover border border-transparent shadow-md',
  secondary: 'bg-white text-main border border-border-strong hover:border-primary hover:text-primary shadow-sm',
  ghost: 'bg-transparent text-main hover:bg-bg-surface border border-transparent'
}

const sizeClasses = {
  sm: 'text-sm py-1.5 px-3 min-h-[36px]',
  md: 'text-body py-2.5 px-5 min-h-[44px]',
  lg: 'text-[1rem] font-semibold py-3.5 px-7 min-h-[56px] rounded-pill'
}
</script>
