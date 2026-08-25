<template>
  <div class="bg-bg-main border border-border p-5 md:p-6 rounded-sm shadow-md space-y-4 select-none relative overflow-hidden">
    <!-- Top Brief Header & Badge -->
    <div class="flex items-center justify-between border-b border-border pb-3">
      <div class="flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span class="text-xs uppercase font-mono tracking-wider font-semibold text-muted">
          CLIENT BRIEF #084
        </span>
      </div>
      <ScreeningIndicator status="matched" label="ACTIVE SEARCH" />
    </div>

    <!-- Brief Title & Meta -->
    <div class="space-y-1.5">
      <h3 class="font-display text-body-lg font-bold text-main">
        Executive Assistant &amp; Operations Specialist
      </h3>
      <p class="text-xs text-secondary leading-body">
        High-growth US e-commerce agency seeking a dedicated full-time remote EA for executive calendar management, SOP creation, and team coordination.
      </p>
    </div>

    <!-- Structured Requirement Tags -->
    <div class="grid grid-cols-2 gap-3 pt-1 text-xs">
      <div class="bg-bg-surface border border-border p-2.5 rounded-xs space-y-0.5">
        <span class="text-[11px] font-mono text-muted uppercase block">Timezone</span>
        <span class="font-semibold text-main">EST / PST Overlap</span>
      </div>
      <div class="bg-bg-surface border border-border p-2.5 rounded-xs space-y-0.5">
        <span class="text-[11px] font-mono text-muted uppercase block">Schedule</span>
        <span class="font-semibold text-main">Full-Time (40h/wk)</span>
      </div>
    </div>

    <!-- Footer Status -->
    <div class="pt-2 flex items-center justify-between text-xs text-muted font-mono border-t border-border/60">
      <span>PRIORITY: HIGH</span>
      <span class="text-primary font-medium">&bull; 4 CANDIDATES MATCHED</span>
    </div>
  </div>
</template>

<script setup>
import ScreeningIndicator from './ScreeningIndicator.vue'
</script>
