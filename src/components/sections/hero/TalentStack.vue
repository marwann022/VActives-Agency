<template>
  <div ref="stackWrapperRef" class="relative w-full py-4">
    <!-- Visual Header Label -->
    <div class="flex items-center justify-between mb-4 px-1">
      <span class="text-xs uppercase font-mono tracking-wider font-semibold text-muted">
        THE TALENT STACK &bull; RECRUITMENT DOSSIER
      </span>
      <span ref="stageBadgeRef" class="text-xs font-mono font-medium px-2 py-0.5 rounded-xs bg-primary-soft text-primary border border-primary/20">
        {{ currentStageText }}
      </span>
    </div>

    <!-- Stack Cards Container -->
    <div ref="stackContainerRef" class="relative min-h-[520px] sm:min-h-[560px]">
      <!-- 1. Hiring Brief Card (Anchored Layer) -->
      <div
        ref="briefRef"
        class="brief-card relative z-30 transition-transform duration-normal ease-standard"
      >
        <HiringBriefCard />
      </div>

      <!-- 2. Candidate Card 01: S. Miller (Top Shortlist Candidate) -->
      <div
        ref="card1Ref"
        class="candidate-card-1 absolute top-20 left-0 right-0 z-20 transition-all duration-normal ease-standard"
      >
        <CandidateCard :candidate="candidate1" />
      </div>

      <!-- 3. Candidate Card 02: A. Vance (Second Shortlist Candidate) -->
      <div
        ref="card2Ref"
        class="candidate-card-2 absolute top-36 left-0 right-0 z-10 transition-all duration-normal ease-standard"
      >
        <CandidateCard :candidate="candidate2" />
      </div>

      <!-- 4. Candidate Card 03: D. Chen (Evaluating Candidate) -->
      <div
        ref="card3Ref"
        class="candidate-card-3 absolute top-52 left-0 right-0 z-0 transition-all duration-normal ease-standard"
      >
        <CandidateCard :candidate="candidate3" />
      </div>
    </div>

    <!-- Final Resolved State Callout (State 6 Target) -->
    <div
      ref="finalStateRef"
      class="mt-4 p-4 bg-bg-main border border-primary/30 rounded-sm text-center shadow-sm opacity-90 transition-all duration-normal"
    >
      <div class="flex items-center justify-center gap-2 text-xs font-mono text-primary font-semibold">
        <span class="w-2 h-2 rounded-full bg-green-500"></span>
        STATUS: 3 VERIFIED CANDIDATES READY FOR INTERVIEW
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import HiringBriefCard from './HiringBriefCard.vue'
import CandidateCard from './CandidateCard.vue'
import { useGsap } from '@/composables/useGsap'
import { isReducedMotionActive } from '@/utils/motion/reveal'

const stackWrapperRef = ref(null)
const stackContainerRef = ref(null)
const briefRef = ref(null)
const card1Ref = ref(null)
const card2Ref = ref(null)
const card3Ref = ref(null)
const finalStateRef = ref(null)
const stageBadgeRef = ref(null)

const currentStageText = ref('STATE 1: HIRING BRIEF')

const candidate1 = reactive({
  initials: 'SM',
  name: 'S. Miller',
  title: 'Executive Assistant & Ops Specialist',
  matchScore: '98%',
  experience: '6 Years',
  availability: 'Immediate',
  status: 'ready',
  matchTag: 'SHORTLISTED #1',
  skills: ['Calendar Mgmt', 'SOP Creation', 'Slack/Asana', 'Zapier']
})

const candidate2 = reactive({
  initials: 'AV',
  name: 'A. Vance',
  title: 'Sales & Operations VA',
  matchScore: '96%',
  experience: '5 Years',
  availability: '1 Week',
  status: 'shortlist',
  matchTag: 'SHORTLISTED #2',
  skills: ['CRM Management', 'Lead Qualification', 'Outreach', 'HubSpot']
})

const candidate3 = reactive({
  initials: 'DC',
  name: 'D. Chen',
  title: 'Customer Support Lead',
  matchScore: '94%',
  experience: '4 Years',
  availability: 'Immediate',
  status: 'screened',
  matchTag: 'EVALUATING',
  skills: ['Zendesk', 'Intercom', 'Email & Chat', 'Resolution Rate 99%']
})

// Desktop GSAP Timeline Sequence (6 States)
useGsap((ctx, gsap, ScrollTrigger) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024
  const isReduced = isReducedMotionActive()

  if (isReduced || isMobile) {
    // Mobile / Reduced Motion: Set static stacked layout
    gsap.set(briefRef.value, { y: 0, rotation: 0 })
    gsap.set(card1Ref.value, { y: 30, rotation: 1 })
    gsap.set(card2Ref.value, { y: 60, rotation: -1 })
    gsap.set(card3Ref.value, { y: 90, opacity: 0.85 })
    return
  }

  // Initial Desktop Offset Position before scroll
  gsap.set(briefRef.value, { y: 0, rotation: 0, scale: 1 })
  gsap.set(card1Ref.value, { y: 35, rotation: 1.5, scale: 0.98, opacity: 0.95 })
  gsap.set(card2Ref.value, { y: 70, rotation: -1.5, scale: 0.96, opacity: 0.9 })
  gsap.set(card3Ref.value, { y: 105, rotation: 1, scale: 0.94, opacity: 0.8 })

  // Find parent section trigger
  const heroSection = stackWrapperRef.value.closest('section') || stackWrapperRef.value

  // Pinned GSAP ScrollTrigger Sequence
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection,
      start: 'top top+=80',
      end: '+=1200',
      pin: true,
      scrub: 0.8,
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress
        if (progress < 0.15) {
          currentStageText.value = 'STATE 1: HIRING BRIEF'
        } else if (progress < 0.35) {
          currentStageText.value = 'STATE 2: TALENT SOURCING'
        } else if (progress < 0.55) {
          currentStageText.value = 'STATE 3: SCREENING'
        } else if (progress < 0.75) {
          currentStageText.value = 'STATE 4: FILTERING'
        } else if (progress < 0.90) {
          currentStageText.value = 'STATE 5: SHORTLIST'
        } else {
          currentStageText.value = 'STATE 6: READY TO HIRE'
        }
      }
    }
  })

  // State 1 -> State 2 (Sourcing: Cards expand out from behind brief)
  tl.to(card1Ref.value, { y: 80, x: 12, rotation: 2, opacity: 1, scale: 1, duration: 1 }, 'state2')
    .to(card2Ref.value, { y: 160, x: -12, rotation: -2, opacity: 1, scale: 0.99, duration: 1 }, 'state2')
    .to(card3Ref.value, { y: 240, x: 8, rotation: 1, opacity: 0.9, scale: 0.98, duration: 1 }, 'state2')

  // State 3 (Screening: Brief slides slightly up, cards highlight screening data)
  tl.to(briefRef.value, { y: -20, scale: 0.98, duration: 1 }, 'state3')
    .to(card1Ref.value, { y: 60, scale: 1.02, duration: 1 }, 'state3')
    .to(card2Ref.value, { y: 150, duration: 1 }, 'state3')

  // State 4 (Filtering: Card 3 slides back/fades down, top candidates remain prominent)
  tl.to(card3Ref.value, { y: 280, opacity: 0.3, scale: 0.92, duration: 1 }, 'state4')
    .to(card1Ref.value, { y: 40, x: 0, rotation: 0, duration: 1 }, 'state4')
    .to(card2Ref.value, { y: 130, x: 0, rotation: 0, duration: 1 }, 'state4')

  // State 5 & 6 (Shortlist & Ready to Hire: Converge into clean focus)
  tl.to(card1Ref.value, { y: 30, scale: 1, opacity: 1, duration: 1 }, 'state5')
    .to(card2Ref.value, { y: 120, scale: 0.98, opacity: 0.9, duration: 1 }, 'state5')
    .to(finalStateRef.value, { scale: 1.02, borderColor: 'var(--color-primary)', duration: 0.8 }, 'state6')
})
</script>
