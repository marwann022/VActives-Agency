<template>
  <component
    :is="as"
    class="w-full mx-auto px-gutter-mobile md:px-gutter-tablet lg:px-gutter-laptop xl:px-gutter-desktop"
    :class="[fluid ? 'max-w-full' : 'max-w-container']"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  as: {
    type: String,
    default: 'div'
  },
  fluid: {
    type: Boolean,
    default: false
  }
})
</script>
