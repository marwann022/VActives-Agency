<template>
  <section ref="sectionRef" class="journey-story" aria-labelledby="journey-title">
    <BaseContainer>
      <header class="journey-story__intro">
        <span>Our hiring journey</span>
        <h2 id="journey-title">From a clear brief to<br />a confident hire.</h2>
        <p>
          Every step is designed to remove uncertainty, protect your time, and introduce only the people worth meeting.
        </p>
      </header>

      <div class="journey-story__list">
        <article
          v-for="(step, index) in steps"
          :key="step.word"
          :ref="el => setRowRef(el, index)"
          class="journey-story__row"
          :class="{ 'journey-story__row--reverse': index % 2 === 1 }"
        >
          <div class="journey-story__copy">
            <div class="journey-story__word" aria-hidden="true">{{ step.word }}</div>
            <span class="journey-story__kicker">Step 0{{ index + 1 }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
            <div class="journey-story__detail">
              <span>{{ step.detailLabel }}</span>
              <strong>{{ step.detail }}</strong>
            </div>
          </div>

          <figure class="journey-story__visual">
            <img :src="step.image" :alt="step.alt" loading="lazy" />
          </figure>
        </article>
      </div>
    </BaseContainer>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import { useGsap } from '@/composables/useGsap'
import { isReducedMotionActive } from '@/utils/motion/reveal'

const sectionRef = ref(null)
const rowRefs = []

const steps = [
  {
    word: 'ONE',
    title: 'Understand the Brief',
    description: 'We learn the business goal, daily tasks, tools, schedule, budget, and the outcomes your new hire must improve.',
    detailLabel: 'The result',
    detail: 'A clear role scorecard',
    image: '/assets/journey-01-brief.png',
    alt: 'A 3D hiring brief clipboard and pen'
  },
  {
    word: 'TWO',
    title: 'Source Top Talent',
    description: 'We search targeted talent channels and activate relevant candidate pools instead of relying on generic applications.',
    detailLabel: 'The result',
    detail: 'A focused candidate pool',
    image: '/assets/journey-02-source.png',
    alt: 'A 3D magnifying glass selecting a remote professional from a candidate group'
  },
  {
    word: 'THREE',
    title: 'Screen Carefully',
    description: 'We evaluate communication, relevant experience, reliability, availability, tool readiness, and practical role performance.',
    detailLabel: 'The result',
    detail: 'Evidence before interviews',
    image: '/assets/journey-03-screen.png',
    alt: 'A 3D screening checklist and candidate assessment card'
  },
  {
    word: 'FOUR',
    title: 'Shortlist the Best',
    description: 'We present only the strongest matches with the context you need to compare fit and make interviews more productive.',
    detailLabel: 'The result',
    detail: 'A shortlist worth your time',
    image: '/assets/journey-04-shortlist.png',
    alt: 'Three 3D shortlisted candidate profile cards'
  },
  {
    word: 'FIVE',
    title: 'Ready to Hire',
    description: 'You interview the strongest candidates, choose the right fit, and move into onboarding with clarity and confidence.',
    detailLabel: 'The result',
    detail: 'A confident hiring decision',
    image: '/assets/journey-05-hire.png',
    alt: 'A business owner and remote professional celebrating a successful hire'
  }
]

function setRowRef(el, index) {
  if (el) rowRefs[index] = el
}

useGsap((ctx, gsap) => {
  if (isReducedMotionActive()) return

  rowRefs.forEach((row, index) => {
    const copy = row.querySelector('.journey-story__copy')
    const visual = row.querySelector('.journey-story__visual')
    const copyDirection = index % 2 === 0 ? -42 : 42

    gsap.fromTo(
      copy,
      { opacity: 0, x: copyDirection },
      {
        opacity: 1,
        x: 0,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: { trigger: row, start: 'top 76%', once: true }
      }
    )

    gsap.fromTo(
      visual,
      { opacity: 0, x: -copyDirection, scale: 0.97 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: { trigger: row, start: 'top 76%', once: true }
      }
    )
  })
}, sectionRef)
</script>

<style scoped>
.journey-story {
  overflow: clip;
  padding: clamp(86px, 9vw, 150px) 0 clamp(90px, 10vw, 170px);
  background: #fff;
}

.journey-story__intro {
  max-width: 820px;
  margin-bottom: clamp(72px, 9vw, 132px);
}

.journey-story__intro > span,
.journey-story__kicker {
  color: var(--color-primary);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.journey-story__intro h2 {
  margin-top: 16px;
  font-size: clamp(3rem, 6vw, 6.2rem);
  font-weight: 800;
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.journey-story__intro p {
  max-width: 660px;
  margin-top: 26px;
  font-size: clamp(1.04rem, 1.3vw, 1.25rem);
  line-height: 1.7;
}

.journey-story__list {
  display: flex;
  flex-direction: column;
  gap: clamp(86px, 11vw, 170px);
}

.journey-story__row {
  display: grid;
  grid-template-columns: minmax(0, 0.83fr) minmax(0, 1.17fr);
  gap: clamp(44px, 7vw, 112px);
  align-items: center;
  min-height: 560px;
}

.journey-story__row--reverse {
  grid-template-columns: minmax(0, 1.17fr) minmax(0, 0.83fr);
}

.journey-story__row--reverse .journey-story__copy { order: 2; }
.journey-story__row--reverse .journey-story__visual { order: 1; }

.journey-story__copy {
  position: relative;
  min-width: 0;
  padding: 34px 0;
}

.journey-story__word {
  position: absolute;
  left: -0.04em;
  top: -0.54em;
  z-index: 0;
  color: var(--color-accent-soft);
  font-size: clamp(6.8rem, 11vw, 12rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.07em;
  user-select: none;
}

.journey-story__kicker,
.journey-story__copy h3,
.journey-story__copy > p,
.journey-story__detail {
  position: relative;
  z-index: 1;
}

.journey-story__copy h3 {
  max-width: 540px;
  margin-top: 18px;
  font-size: clamp(2.4rem, 4vw, 4.8rem);
  font-weight: 800;
  line-height: 1.03;
  letter-spacing: -0.05em;
}

.journey-story__copy > p {
  max-width: 560px;
  margin-top: 24px;
  font-size: clamp(1rem, 1.3vw, 1.18rem);
  line-height: 1.72;
}

.journey-story__detail {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 32px;
  padding-left: 18px;
  border-left: 3px solid var(--color-gold-strong);
}

.journey-story__detail span {
  color: var(--color-text-muted);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.journey-story__detail strong {
  color: var(--color-text-primary);
  font-size: 1rem;
}

.journey-story__visual {
  overflow: hidden;
  margin: 0;
  border: 1px solid rgba(197, 170, 122, 0.17);
  border-radius: clamp(28px, 4vw, 52px);
  background: var(--color-bg-hero);
  box-shadow: 0 24px 70px rgba(16, 44, 38, 0.08);
}

.journey-story__visual img {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

@media (max-width: 900px) {
  .journey-story__row,
  .journey-story__row--reverse {
    grid-template-columns: 1fr;
    gap: 30px;
    min-height: 0;
  }

  .journey-story__row--reverse .journey-story__copy { order: 1; }
  .journey-story__row--reverse .journey-story__visual { order: 2; }
  .journey-story__copy { padding-top: 60px; }
  .journey-story__visual { width: min(100%, 680px); }
}

@media (max-width: 520px) {
  .journey-story { padding-top: 76px; }
  .journey-story__intro { margin-bottom: 62px; }
  .journey-story__intro h2 { font-size: clamp(2.65rem, 13vw, 3.6rem); }
  .journey-story__intro h2 br { display: none; }
  .journey-story__list { gap: 78px; }
  .journey-story__copy { padding-top: 46px; }
  .journey-story__word { top: -0.28em; font-size: clamp(5rem, 28vw, 7rem); }
  .journey-story__copy h3 { font-size: clamp(2.2rem, 10vw, 3rem); }
  .journey-story__copy > p { margin-top: 18px; line-height: 1.62; }
  .journey-story__detail { margin-top: 24px; }
  .journey-story__visual { border-radius: 26px; }
}
</style>
