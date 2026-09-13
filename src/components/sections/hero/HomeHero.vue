<template>
  <section ref="heroSectionRef" class="home-hero">
    <div class="home-hero__canvas">
      <BaseContainer class="home-hero__container">
        <div class="home-hero__grid">
          <div class="home-hero__content">
            <div ref="eyebrowRef" class="home-hero__eyebrow">
              <IconSparkles :size="24" :stroke-width="1.8" aria-hidden="true" />
              <span>We make remote hiring simple.</span>
            </div>

            <h1 ref="headlineRef" class="home-hero__headline">
              <span>Build a Reliable</span>
              <span>Remote Team</span>
              <span>Without the</span>
              <span>Hiring Guesswork.</span>
            </h1>

            <p ref="copyRef" class="home-hero__copy">
              VActives helps startups and small businesses hire skilled, English-speaking virtual professionals for sales, administration, customer service, and operations.
            </p>

            <div ref="ctaRef" class="home-hero__actions">
              <BaseButton variant="primary" size="lg" :to="{ path: '/', hash: '#hire' }" show-arrow>
                Start Hiring
              </BaseButton>
              <BaseButton variant="secondary" size="lg" to="/services">
                Explore Services
              </BaseButton>
            </div>

            <div ref="marketRef" class="home-hero__markets">
              <div class="home-hero__markets-label">
                <IconWorld :size="18" :stroke-width="1.8" aria-hidden="true" />
                <span>Serving teams across growing markets</span>
              </div>
              <div class="home-hero__market-list" aria-label="Markets served">
                <span>USA</span><i></i><span>UK</span><i></i><span>Canada</span><i></i><span>Australia</span>
              </div>
            </div>
          </div>

          <div ref="visualRef" class="home-hero__visual">
            <div class="home-hero__visual-frame">
              <img
                src="/assets/vactives-hero-recruitment-tableau.png"
                alt="VActives recruitment team reviewing a hiring brief and shortlisted remote professionals"
                fetchpriority="high"
              />
              <div class="home-hero__match-badge">
                <IconCircleCheckFilled :size="22" aria-hidden="true" />
                <div>
                  <strong>Ready to interview</strong>
                  <span>Screened remote talent</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </BaseContainer>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import {
  IconCircleCheckFilled,
  IconSparkles,
  IconWorld
} from '@tabler/icons-vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import { useGsap } from '@/composables/useGsap'
import { isReducedMotionActive } from '@/utils/motion/reveal'

const heroSectionRef = ref(null)
const eyebrowRef = ref(null)
const headlineRef = ref(null)
const copyRef = ref(null)
const ctaRef = ref(null)
const marketRef = ref(null)
const visualRef = ref(null)

useGsap((ctx, gsap) => {
  if (isReducedMotionActive() || !heroSectionRef.value) return
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.fromTo(eyebrowRef.value, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45 })
    .fromTo(headlineRef.value, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.2')
    .fromTo(copyRef.value, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.35')
    .fromTo(ctaRef.value, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45 }, '-=0.25')
    .fromTo(marketRef.value, { opacity: 0 }, { opacity: 1, duration: 0.4 }, '-=0.2')
    .fromTo(visualRef.value, { opacity: 0, x: 28, scale: 0.98 }, { opacity: 1, x: 0, scale: 1, duration: 0.8 }, '-=0.7')
}, heroSectionRef)
</script>

<style scoped>
.home-hero { padding: 0 14px 18px; }
.home-hero__canvas { position: relative; overflow: hidden; background: var(--color-bg-hero); border-radius: 0 0 42px 42px; border: 1px solid rgba(197, 170, 122, 0.16); }
.home-hero__container { padding-top: clamp(38px, 5vw, 76px); padding-bottom: clamp(26px, 3vw, 46px); }
.home-hero__grid { display: grid; grid-template-columns: minmax(0, .88fr) minmax(0, 1.12fr); align-items: center; gap: clamp(22px, 3vw, 52px); }
.home-hero__content { position: relative; z-index: 2; min-width: 0; padding: 4px 0 34px; }
.home-hero__eyebrow { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 20px; color: var(--color-primary); font-family: 'Segoe Print', 'Bradley Hand', cursive; font-size: clamp(.9rem, 1.1vw, 1.05rem); font-weight: 600; transform: rotate(-1deg); }
.home-hero__eyebrow svg { color: var(--color-gold-strong); }
.home-hero__headline { max-width: 710px; color: var(--color-text-primary); font-size: clamp(3rem, 3.9vw, 4rem); font-weight: 800; line-height: 1.02; letter-spacing: -.048em; }
.home-hero__headline span { display: block; white-space: nowrap; }
.home-hero__headline::after { content: ''; display: block; width: 46%; height: 5px; margin: 12px 0 0 auto; border-radius: var(--radius-pill); background: var(--color-teal); transform: rotate(2deg); opacity: .85; }
.home-hero__copy { max-width: 610px; margin-top: 22px; color: var(--color-text-secondary); font-size: clamp(1rem, 1.22vw, 1.16rem); line-height: 1.65; }
.home-hero__actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 28px; }
.home-hero__markets { display: flex; flex-direction: column; gap: 9px; margin-top: 34px; }
.home-hero__markets-label, .home-hero__market-list { display: flex; align-items: center; }
.home-hero__markets-label { gap: 8px; color: var(--color-text-muted); font-size: .72rem; font-weight: 700; letter-spacing: .09em; text-transform: uppercase; }
.home-hero__market-list { flex-wrap: wrap; gap: 10px; color: var(--color-text-primary); font-size: .83rem; font-weight: 700; }
.home-hero__market-list i { width: 4px; height: 4px; border-radius: 50%; background: var(--color-gold-strong); }
.home-hero__visual { position: relative; align-self: center; min-width: 0; }
.home-hero__visual-frame { position: relative; transform: translateY(-42px); }
.home-hero__visual img { width: 100%; max-height: 650px; object-fit: contain; object-position: center bottom; }
.home-hero__match-badge { position: absolute; right: 7%; bottom: 5%; display: flex; align-items: center; gap: 10px; padding: 12px 16px; border: 1px solid rgba(8,115,91,.22); border-radius: 14px; background: rgba(255,255,255,.9); box-shadow: var(--shadow-float); backdrop-filter: blur(12px); color: var(--color-primary); }
.home-hero__match-badge div { display: flex; flex-direction: column; }
.home-hero__match-badge strong { color: var(--color-text-primary); font-size: .82rem; }
.home-hero__match-badge span { margin-top: 2px; color: var(--color-text-muted); font-size: .68rem; }
@media (max-width: 1100px) {
  .home-hero__grid { grid-template-columns: minmax(0,.95fr) minmax(0,1.05fr); }
  .home-hero__headline { font-size: clamp(2.8rem, 5.05vw, 3.55rem); }
  .home-hero__visual-frame { transform: translateY(-26px); }
}
@media (max-width: 820px) {
  .home-hero { padding-inline: 8px; }
  .home-hero__canvas { border-radius: 0 0 30px 30px; }
  .home-hero__container { padding-top: 28px; }
  .home-hero__grid { grid-template-columns: 1fr; }
  .home-hero__content { padding-bottom: 0; }
  .home-hero__headline { max-width: 620px; font-size: clamp(2.65rem, 8vw, 3.8rem); }
  .home-hero__copy { max-width: 630px; }
  .home-hero__visual { width: min(100%,680px); margin: -10px auto 0; }
  .home-hero__visual-frame { transform: none; }
  .home-hero__visual img { max-height: 540px; }
}
@media (max-width: 520px) {
  .home-hero__eyebrow { margin-bottom: 15px; }
  .home-hero__headline { width: 100%; font-size: clamp(2.15rem,9vw,2.55rem); line-height: 1.04; letter-spacing: -.045em; }
  .home-hero__headline span { white-space: normal; }
  .home-hero__copy { margin-top: 18px; font-size: .98rem; line-height: 1.58; }
  .home-hero__actions { display: grid; grid-template-columns: 1fr; margin-top: 23px; }
  .home-hero__actions :deep(a), .home-hero__actions :deep(button) { width: 100%; max-width: 100%; }
  .home-hero__markets { margin-top: 26px; }
  .home-hero__markets-label { flex-wrap: wrap; letter-spacing: .065em; }
  .home-hero__visual { margin-top: 4px; }
  .home-hero__match-badge { right: 4%; bottom: 2%; padding: 9px 12px; }
}
</style>
