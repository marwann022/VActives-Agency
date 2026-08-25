<template>
  <footer class="bg-bg-dark text-text-inverse border-t border-border-dark pt-16 pb-12">
    <BaseContainer class="space-y-16">
      <!-- Top Call-To-Action Block -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div class="lg:col-span-8 space-y-4">
          <p class="text-xs uppercase tracking-wider font-semibold text-text-muted">
            START HIRING TODAY
          </p>
          <h2 class="font-display text-h1 font-bold tracking-tight text-text-inverse leading-heading max-w-2xl">
            Ready to build your remote team?
          </h2>
          <p class="font-body text-body-lg text-text-muted max-w-xl">
            VActives connects growing businesses with screened remote professionals across sales, operations, administration, and customer support.
          </p>
        </div>
        <div class="lg:col-span-4 lg:text-right">
          <BaseButton
            variant="primary"
            size="lg"
            to="/start-hiring"
            show-arrow
          >
            Start Hiring
          </BaseButton>
        </div>
      </div>

      <!-- Structural Divider Line -->
      <div class="w-full h-px bg-border-dark/60"></div>

      <!-- Footer Columns Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Column 1: Brand Wordmark & positioning statement -->
        <div class="space-y-3">
          <span class="font-display text-h4 font-bold tracking-tight text-text-inverse block">
            VACTIVES
          </span>
          <p class="text-xs text-text-muted leading-body max-w-xs">
            Virtual recruitment agency connecting global companies with elite remote talent across sales, operations, and support roles.
          </p>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="space-y-3">
          <h3 class="text-xs uppercase tracking-wider font-semibold text-text-muted">
            NAVIGATION
          </h3>
          <ul class="space-y-2 text-sm text-text-muted">
            <li>
              <router-link to="/" class="hover:text-text-inverse transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-xs">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="hover:text-text-inverse transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-xs">
                Services &amp; Pricing
              </router-link>
            </li>
            <li>
              <router-link to="/start-hiring" class="hover:text-text-inverse transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded-xs">
                Start Hiring
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Column 3: Contact & Market Placeholders (Non-clickable text placeholders until client details provided) -->
        <div class="space-y-3">
          <h3 class="text-xs uppercase tracking-wider font-semibold text-text-muted">
            CONTACT &amp; MARKETS
          </h3>
          <ul class="space-y-2 text-sm text-text-muted">
            <li>[Contact Details TBD]</li>
            <li>[Official Social Channels TBD]</li>
            <li class="font-mono text-xs text-text-muted pt-1">USA &middot; UK &middot; CANADA &middot; AUSTRALIA</li>
          </ul>
        </div>
      </div>

      <!-- Lower Copyright & Legal Row -->
      <div class="border-t border-border-dark/40 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted gap-4">
        <p>&copy; {{ currentYear }} VActives Agency. All rights reserved.</p>
        <div class="flex items-center space-x-6">
          <span class="text-text-muted hover:text-text-inverse transition-colors cursor-pointer" @click.prevent>
            Privacy Policy
          </span>
          <span class="text-text-muted hover:text-text-inverse transition-colors cursor-pointer" @click.prevent>
            Terms of Use
          </span>
        </div>
      </div>
    </BaseContainer>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseButton from '@/components/base/BaseButton.vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
