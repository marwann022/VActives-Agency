<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-xs border transition-colors duration-normal ease-standard',
      statusClasses[status] || statusClasses.screened
    ]"
  >
    <span :class="['w-1.5 h-1.5 rounded-full', dotClasses[status] || dotClasses.screened]"></span>
    <slot>{{ label }}</slot>
  </span>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: 'screened',
    validator: (s) => ['screened', 'shortlist', 'matched', 'ready'].includes(s)
  }
})

const statusClasses = {
  screened: 'bg-bg-surface text-secondary border-border',
  shortlist: 'bg-primary-soft text-primary border-primary/30',
  matched: 'bg-slate-100 text-main border-border-strong',
  ready: 'bg-green-50 text-green-700 border-green-200'
}

const dotClasses = {
  screened: 'bg-slate-400',
  shortlist: 'bg-primary',
  matched: 'bg-main',
  ready: 'bg-green-500'
}
</script>
