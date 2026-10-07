<template>
  <div class="min-h-screen bg-bg-main text-main flex flex-col justify-between selection:bg-primary/20 selection:text-primary">
    <a href="#main-content" class="skip-link">Skip to content</a>
    <!-- Global Sticky/Fixed Header -->
    <SiteHeader />

    <main id="main-content" tabindex="-1" class="flex-grow pt-[86px] max-[900px]:pt-[72px]">
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

<style>
.skip-link{position:fixed;top:8px;left:8px;z-index:9999;padding:12px 18px;background:#fff;color:#102c26;border:2px solid #08745d;transform:translateY(-160%)}
.skip-link:focus{transform:translateY(0)}
</style>
