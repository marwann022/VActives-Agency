<template>
  <div class="min-h-screen bg-bg-main text-main flex flex-col justify-between selection:bg-primary/20 selection:text-primary">
    <!-- Global Sticky/Fixed Header -->
    <SiteHeader />

    <!-- Main Content Area with Top Offset for Fixed Header -->
    <main class="flex-grow pt-20">
      <router-view />
    </main>

    <!-- Global Editorial Footer -->
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from '@/components/navigation/SiteHeader.vue'
import SiteFooter from '@/components/navigation/SiteFooter.vue'
</script>
