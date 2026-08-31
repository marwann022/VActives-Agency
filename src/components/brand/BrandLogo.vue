<template>
  <span class="brand-logo" :class="compact ? 'brand-logo--compact' : ''">
    <img class="brand-logo__image" src="/assets/vactives-logo-original.png" alt="VActives" />
  </span>
</template>

<script setup>
defineProps({ compact: { type: Boolean, default: false } })
</script>

<style scoped>
.brand-logo { position: relative; display: inline-block; width: 190px; height: 52px; overflow: hidden; flex: 0 0 auto; }
.brand-logo__image { position: absolute; width: 212px; max-width: none; height: auto; left: -10px; top: -35px; }
.brand-logo--compact { width: 112px; height: 42px; }
.brand-logo--compact .brand-logo__image { width: 126px; left: -6px; top: -21px; }
@media (max-width: 640px) {
  .brand-logo { width: 150px; height: 43px; }
  .brand-logo__image { width: 168px; left: -8px; top: -28px; }
}
</style>
