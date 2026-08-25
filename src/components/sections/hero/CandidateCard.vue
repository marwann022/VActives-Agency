<template>
  <div
    class="bg-bg-surface border border-border p-5 rounded-sm shadow-md space-y-3 select-none transition-shadow duration-normal ease-standard hover:shadow-lg relative"
  >
    <!-- Header: Candidate Initials & Role Fit Match -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 text-primary font-display font-bold text-sm flex items-center justify-center">
          {{ candidate.initials }}
        </div>
        <div>
          <h4 class="font-display text-body font-bold text-main">
            {{ candidate.name }}
          </h4>
          <span class="text-xs text-muted block">{{ candidate.title }}</span>
        </div>
      </div>
      <ScreeningIndicator :status="candidate.status" :label="candidate.matchTag" />
    </div>

    <!-- Metrics Row -->
    <div class="grid grid-cols-3 gap-2 py-2 border-y border-border/60 text-center">
      <div>
        <span class="text-[10px] font-mono text-muted block uppercase">Match Score</span>
        <span class="font-display font-bold text-sm text-primary">{{ candidate.matchScore }}</span>
      </div>
      <div>
        <span class="text-[10px] font-mono text-muted block uppercase">Experience</span>
        <span class="font-display font-semibold text-sm text-main">{{ candidate.experience }}</span>
      </div>
      <div>
        <span class="text-[10px] font-mono text-muted block uppercase">Availability</span>
        <span class="font-display font-semibold text-sm text-main">{{ candidate.availability }}</span>
      </div>
    </div>

    <!-- Candidate Skill Badges -->
    <div class="flex flex-wrap gap-1.5 pt-1">
      <span
        v-for="skill in candidate.skills"
        :key="skill"
        class="text-[11px] bg-bg-main border border-border px-2 py-0.5 rounded-xs font-mono text-secondary"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<script setup>
import ScreeningIndicator from './ScreeningIndicator.vue'

defineProps({
  candidate: {
    type: Object,
    required: true
  }
})
</script>
