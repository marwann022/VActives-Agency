<template>
  <div :class="[align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-3xl', 'space-y-3']">
    <p
      v-if="eyebrow"
      class="text-xs uppercase tracking-wider font-semibold text-muted"
    >
      {{ eyebrow }}
    </p>

    <component
      :is="as"
      class="font-display text-h2 font-bold tracking-tight text-main leading-heading"
    >
      {{ title }}
    </component>

    <p
      v-if="description"
      class="font-body text-body-lg text-secondary leading-body"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: null
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: null
  },
  align: {
    type: String,
    default: 'left',
    validator: (a) => ['left', 'center'].includes(a)
  },
  as: {
    type: String,
    default: 'h2',
    validator: (tag) => ['h1', 'h2', 'h3', 'h4'].includes(tag)
  }
})
</script>
