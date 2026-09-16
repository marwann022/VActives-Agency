<template>
  <div class="min-h-screen bg-bg-main text-main flex flex-col justify-between selection:bg-primary/20 selection:text-primary">
    <!-- Global Sticky/Fixed Header -->
    <SiteHeader />

    <main class="flex-grow pt-[86px] max-[900px]:pt-[72px]">
      <router-view />
    </main>

    <!-- Global Editorial Footer -->
    <SiteFooter />

    <!-- Global Go to Top Button -->
    <ScrollToTop />
  </div>
</template>

<script setup>
import SiteHeader from '@/components/navigation/SiteHeader.vue'
import SiteFooter from '@/components/navigation/SiteFooter.vue'
import ScrollToTop from '@/components/navigation/ScrollToTop.vue'
</script>
