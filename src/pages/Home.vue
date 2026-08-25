<template>
  <BaseContainer class="py-12 space-y-16">
    <!-- Minimal Home Foundation Header -->
    <div class="space-y-3">
      <h1 class="font-display text-h1 font-bold text-main">VActives</h1>
      <p class="font-body text-body text-secondary max-w-xl">
        Home page foundation shell test. Scroll down to test the fixed header background transition and footer alignment.
      </p>
    </div>

    <!-- ====================================================================
         TEMPORARY SCROLL TESTING SPACERS — FOR VERIFYING HEADER & FOOTER
         ==================================================================== -->
    <div class="space-y-12">
      <div class="p-8 border border-border/60 bg-bg-surface rounded-md space-y-2">
        <p class="text-xs font-mono text-muted uppercase">[Temporary Development Scroll Spacer 1]</p>
        <p class="text-sm text-secondary">Testing header scroll state (scrollY > 20px). Header becomes compact with solid background.</p>
      </div>

      <div class="p-8 border border-border/60 bg-bg-surface rounded-md space-y-2">
        <p class="text-xs font-mono text-muted uppercase">[Temporary Development Scroll Spacer 2]</p>
        <p class="text-sm text-secondary">Testing page height and responsive container gutter padding.</p>
      </div>

      <div class="p-8 border border-border/60 bg-bg-surface rounded-md space-y-2">
        <p class="text-xs font-mono text-muted uppercase">[Temporary Development Scroll Spacer 3]</p>
        <p class="text-sm text-secondary">Testing dark editorial footer placement and call-to-action layout.</p>
      </div>
    </div>
  </BaseContainer>
</template>

<script setup>
import BaseContainer from '@/components/base/BaseContainer.vue'
</script>
