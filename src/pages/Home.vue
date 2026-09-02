<template>
  <div ref="pageRef" class="home-page">
    <section class="hero-section" aria-labelledby="hero-heading">
      <BaseContainer class="hero-grid">
        <div class="hero-copy">
          <p class="eyebrow hero-eyebrow">Virtual recruitment agency</p>
          <h1 id="hero-heading" class="hero-title">
            <span>Build a</span><span>reliable</span><span>remote team,</span><span>without the</span><span>guesswork.</span>
          </h1>
          <p class="hero-summary">VActives connects growing businesses with screened, English-speaking professionals — and stays involved beyond the hire.</p>
          <div class="hero-actions">
            <BaseButton class="magnetic-button" to="/start-hiring" size="lg" show-arrow>Start Hiring</BaseButton>
            <router-link class="outline-button magnetic-button" to="/contact">Contact Us</router-link>
          </div>
          <div class="markets" aria-label="Markets served"><span>Trusted across</span><strong>USA</strong><i></i><strong>UK</strong><i></i><strong>Canada</strong><i></i><strong>Australia</strong></div>
        </div>
        <div class="hero-visual motion-media">
          <img class="hero-image" :src="images.hero" alt="A real team collaborating at work" />
          <div class="fit-badge" aria-hidden="true">People<br />who fit</div>
          <div class="hero-note"><span class="status-icon"><IconCheck :size="18" :stroke-width="2.4" /></span><span>Screened. Ready. Reliable.</span></div>
        </div>
      </BaseContainer>
    </section>

    <section id="about" class="story-section">
      <BaseContainer>
        <article class="story-row story-row--copy-first section-reveal">
          <div class="story-copy motion-copy">
            <span class="story-number" aria-hidden="true">01</span><p class="eyebrow">Recruitment, done properly</p>
            <h2>The right person. Not just another résumé.</h2>
            <p>We learn the role, source carefully, screen for communication and capability, then present a focused shortlist that is ready for your interview.</p>
            <ul class="check-list"><li><IconCheck :size="18" />Role-focused sourcing</li><li><IconCheck :size="18" />English and practical screening</li><li><IconCheck :size="18" />Interview-ready shortlist</li></ul>
          </div>
          <div class="story-image-wrap motion-media"><img :src="images.recruitment" alt="A recruiter reviewing a candidate résumé" /></div>
        </article>
        <article class="story-row story-row--image-first section-reveal">
          <div class="story-image-wrap motion-media"><img :src="images.support" alt="A team meeting during onboarding" /></div>
          <div class="story-copy motion-copy">
            <span class="story-number" aria-hidden="true">02</span><p class="eyebrow">Beyond recruitment</p>
            <h2>We stay involved after the hire.</h2>
            <p>Placement is only the beginning. VActives supports onboarding, communication and ongoing coordination so your new remote professional can become part of the way your business works.</p>
            <ul class="check-list"><li><IconCheck :size="18" />Smooth onboarding support</li><li><IconCheck :size="18" />Clear ongoing communication</li><li><IconCheck :size="18" />A long-term business partner</li></ul>
          </div>
        </article>
        <div class="center-link section-reveal"><a class="text-link magnetic-button" href="#serve">Know More About Us <IconArrowRight :size="18" /></a></div>
      </BaseContainer>
    </section>

    <section id="serve" class="serve-section section-reveal">
      <BaseContainer>
        <div class="serve-heading"><h2>Who we help build better teams.</h2><p>Flexible remote talent for growing teams that need dependable people without the usual hiring noise.</p></div>
        <div class="serve-grid">
          <article v-for="(audience, index) in audiences" :key="audience.title" class="serve-item hover-lift"><span>0{{ index + 1 }} / {{ audience.label }}</span><div><h3>{{ audience.title }}</h3><p>{{ audience.description }}</p></div></article>
        </div>
      </BaseContainer>
    </section>

    <section id="roles" class="roles-section section-reveal">
      <BaseContainer>
        <div class="roles-heading motion-copy"><p class="eyebrow eyebrow--center">Popular roles</p><h2>Start with the people your business needs most.</h2><p>Three high-impact roles for sales, follow-up and dependable day-to-day support.</p></div>
        <div class="role-grid">
          <article v-for="role in roles" :key="role.title" class="role-card tilt-card" @pointermove="tiltCard" @pointerleave="resetTilt">
            <div class="role-image-wrap"><img :src="role.image" :alt="role.alt" /></div>
            <div class="role-body"><span>{{ role.kicker }}</span><h3>{{ role.title }}</h3><p>{{ role.description }}</p><IconArrowUpRight class="role-arrow" :size="21" /></div>
          </article>
        </div>
        <div class="roles-action"><router-link class="outline-button magnetic-button" to="/services">Explore All Roles <IconArrowRight :size="18" /></router-link></div>
      </BaseContainer>
    </section>

    <section id="hire" class="hire-section section-reveal">
      <BaseContainer>
        <div class="hire-panel">
          <div class="hire-copy motion-copy"><p class="eyebrow">Start hiring</p><h2>Tell us who your team needs.</h2><p>Share a few details and we’ll start with a focused conversation about the role, your goals and the right next step.</p><strong>Simple brief. Clear next step. No noise.</strong></div>
          <form class="hire-form" @submit.prevent="submitForm">
            <label>Full name<input v-model.trim="form.name" required placeholder="Your name" /></label>
            <label>Work email<input v-model.trim="form.email" required type="email" placeholder="you@company.com" /></label>
            <label>Company<input v-model.trim="form.company" required placeholder="Company name" /></label>
            <label>Role needed<div class="select-wrap"><select v-model="form.role" required><option disabled value="">Select a role</option><option v-for="role in roleOptions" :key="role">{{ role }}</option></select><IconChevronDown class="select-icon" :size="20" aria-hidden="true" /></div></label>
            <label class="form-wide">What does your team need help with?<textarea v-model.trim="form.message" required placeholder="Tell us about the work, goals and timing..."></textarea></label>
            <button class="submit-button magnetic-button" type="submit" :disabled="formState === 'submitting'">
              <span v-if="formState === 'success'"><IconCheck :size="18" /> Brief received — we’ll be in touch</span><span v-else-if="formState === 'submitting'">Sending…</span><span v-else>Start Hiring <IconArrowRight :size="18" /></span>
            </button>
          </form>
        </div>
      </BaseContainer>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { gsap } from 'gsap'
import { IconArrowRight, IconArrowUpRight, IconCheck, IconChevronDown } from '@tabler/icons-vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import { useGsap } from '@/composables/useGsap'
import { isReducedMotionActive } from '@/utils/motion/reveal'

const pageRef = ref(null)
const formState = ref('idle')
const form = reactive({ name: '', email: '', company: '', role: '', message: '' })
const images = {
  hero: 'https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=1600&q=88',
  recruitment: 'https://images.unsplash.com/photo-1698047681432-006d2449c631?auto=format&fit=crop&w=1300&q=88',
  support: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1300&q=88'
}
const audiences = [
  { label: 'Real estate', title: 'Real Estate Teams', description: 'From lead follow-up to transaction and portfolio support.' },
  { label: 'Sales', title: 'B2B & Sales Teams', description: 'People who keep conversations and pipelines moving.' },
  { label: 'Property', title: 'Property Managers', description: 'Reliable support for tenants, records and operations.' },
  { label: 'Growth', title: 'Growing Businesses', description: 'Flexible administration and customer support as you scale.' }
]
const roles = [
  { kicker: 'Sales support', title: 'Cold Caller / Appointment Setter', description: 'Generate conversations, qualify interest and book appointments.', image: 'https://images.pexels.com/photos/7504886/pexels-photo-7504886.jpeg?auto=compress&cs=tinysrgb&h=900&fit=crop&w=1200', alt: 'A customer support professional working with a headset' },
  { kicker: 'Pipeline support', title: 'Lead Manager / CRM Manager', description: 'Respond quickly, maintain follow-up and keep CRM records accurate.', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=88', alt: 'A professional team managing a digital pipeline' },
  { kicker: 'Leadership support', title: 'Executive Assistant', description: 'Protect leadership time across calendars, email, tasks and reporting.', image: 'https://images.unsplash.com/photo-1507206130118-b5907f817163?auto=format&fit=crop&w=1000&q=88', alt: 'An executive assistant working at a desk' }
]
const roleOptions = [...roles.map((role) => role.title), 'Virtual Assistant', 'Customer Service Representative', 'Other']

function submitForm() {
  formState.value = 'submitting'
  window.setTimeout(() => { formState.value = 'success' }, 650)
}
function tiltCard(event) {
  if (isReducedMotionActive() || window.matchMedia('(pointer: coarse)').matches) return
  const card = event.currentTarget
  const bounds = card.getBoundingClientRect()
  const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 5
  const rotateX = -((event.clientY - bounds.top) / bounds.height - 0.5) * 5
  gsap.to(card, { rotateX, rotateY, y: -8, transformPerspective: 900, duration: 0.35, ease: 'power2.out' })
}
function resetTilt(event) { gsap.to(event.currentTarget, { rotateX: 0, rotateY: 0, y: 0, duration: 0.55, ease: 'power3.out' }) }

useGsap((ctx, gsapInstance, ScrollTrigger) => {
  if (isReducedMotionActive()) return
  const heroTimeline = gsapInstance.timeline({ defaults: { ease: 'power3.out' } })
  heroTimeline.from('.hero-eyebrow', { opacity: 0, y: 16, duration: 0.45 })
    .from('.hero-title span', { opacity: 0, yPercent: 105, rotate: 1.5, duration: 0.72, stagger: 0.075 }, '-=.2')
    .from('.hero-summary, .hero-actions, .markets', { opacity: 0, y: 22, duration: 0.55, stagger: 0.1 }, '-=.38')
    .from('.hero-visual', { opacity: 0, x: 58, scale: 0.96, duration: 0.9 }, '-=.82')
    .from('.fit-badge, .hero-note', { opacity: 0, scale: 0.7, duration: 0.5, stagger: 0.12 }, '-=.38')
  gsapInstance.to('.hero-image', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: 0.7 } })
  gsapInstance.utils.toArray('.section-reveal').forEach((section) => {
    const copy = section.querySelectorAll('.motion-copy, .roles-heading, .serve-heading')
    const media = section.querySelectorAll('.motion-media, .role-card, .serve-item, .hire-form')
    gsapInstance.set(copy, { opacity: 0, y: 34 })
    gsapInstance.set(media, { opacity: 0, y: 24, scale: 0.985 })
    const animateIn = () => {
      gsapInstance.to(copy, { opacity: 1, y: 0, duration: 0.72, stagger: 0.08, ease: 'power3.out', overwrite: true })
      gsapInstance.to(media, { opacity: 1, y: 0, scale: 1, duration: 0.82, stagger: 0.09, ease: 'power3.out', overwrite: true })
    }
    ScrollTrigger.create({ trigger: section, start: 'top 82%', once: true, onEnter: animateIn })
  })
  gsapInstance.utils.toArray('.story-image-wrap img').forEach((image) => gsapInstance.fromTo(image, { yPercent: -5 }, { yPercent: 5, ease: 'none', scrollTrigger: { trigger: image, start: 'top bottom', end: 'bottom top', scrub: 0.8 } }))
  gsapInstance.utils.toArray('.story-number').forEach((number) => gsapInstance.fromTo(number, { xPercent: -10 }, { xPercent: 12, ease: 'none', scrollTrigger: { trigger: number.closest('.story-row'), start: 'top bottom', end: 'bottom top', scrub: 1 } }))
  document.querySelectorAll('.magnetic-button').forEach((button) => {
    const move = (event) => { if (window.matchMedia('(pointer: coarse)').matches) return; const bounds = button.getBoundingClientRect(); gsapInstance.to(button, { x: (event.clientX - bounds.left - bounds.width / 2) * 0.12, y: (event.clientY - bounds.top - bounds.height / 2) * 0.16, duration: 0.3, ease: 'power2.out' }) }
    const reset = () => gsapInstance.to(button, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, .45)' })
    button.addEventListener('pointermove', move); button.addEventListener('pointerleave', reset)
    ctx.add(() => { button.removeEventListener('pointermove', move); button.removeEventListener('pointerleave', reset) })
  })
}, pageRef)
</script>

<style scoped>
.home-page{overflow:clip;background:#fff}.hero-section{min-height:760px;padding:74px 0 80px;background:#f8f5ed;display:flex;align-items:center}.hero-grid{display:grid;grid-template-columns:.9fr 1.1fr;align-items:center;gap:68px}.eyebrow{display:flex;align-items:center;gap:10px;margin-bottom:17px;color:#08745d;font-size:12px;font-weight:800;letter-spacing:.13em;text-transform:uppercase}.eyebrow::before{content:"";width:24px;height:2px;background:#c9ad7c}.hero-title{font-size:clamp(3.8rem,5.65vw,5.45rem);line-height:.97;letter-spacing:-.06em;margin-bottom:25px}.hero-title span{display:block;overflow:hidden}.hero-summary{max-width:550px;font-size:18px;line-height:1.58;color:#536b65;margin-bottom:29px}.hero-actions{display:flex;align-items:center;gap:12px;margin-bottom:38px}.outline-button{min-height:56px;padding:0 24px;border:1px solid #08745d;border-radius:10px;background:#fff;color:#102c26;display:inline-flex;align-items:center;justify-content:center;gap:10px;font-weight:700;transition:color .25s ease,background .25s ease,border-color .25s ease,box-shadow .25s ease}.outline-button:hover{color:#fff;background:#0a4035;border-color:#0a4035;box-shadow:0 14px 30px rgba(10,64,53,.16)}.markets{display:flex;flex-wrap:wrap;align-items:center;gap:12px;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#73847f}.markets strong{color:#102c26}.markets i{width:4px;height:4px;background:#c9ad7c;border-radius:50%}.hero-visual{position:relative;height:535px;isolation:isolate}.hero-image{width:100%;height:100%;object-fit:cover;border-radius:145px 26px 26px 26px;will-change:transform}.fit-badge{position:absolute;left:-37px;top:47px;width:96px;height:96px;border-radius:50%;display:grid;place-content:center;text-align:center;background:#b9ed75;color:#102c26;font-size:15px;font-weight:800;line-height:1.08;text-transform:uppercase;transform:rotate(-8deg);box-shadow:0 12px 30px rgba(10,64,53,.12)}.hero-note{position:absolute;right:-22px;bottom:33px;padding:18px 22px;border-radius:14px;background:#fff;display:flex;align-items:center;gap:12px;font-weight:800;box-shadow:0 18px 42px rgba(16,44,38,.16)}.status-icon{width:30px;height:30px;border-radius:50%;display:grid;place-items:center;background:#e1f1ea;color:#08745d}
.story-section{padding:116px 0 108px}.story-row{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:96px;margin-bottom:106px}.story-copy{position:relative}.story-copy h2{max-width:560px;font-size:clamp(2.7rem,4vw,3.75rem);line-height:1.02;letter-spacing:-.052em;margin-bottom:23px}.story-copy>p:not(.eyebrow){max-width:510px;font-size:17px;color:#647b75}.story-number{display:block;margin-bottom:-28px;color:#eee9dc;font-size:118px;font-weight:800;line-height:1;letter-spacing:-.08em;will-change:transform}.check-list{list-style:none;padding:0;margin:25px 0 0;display:grid;gap:12px;font-size:15px;font-weight:700}.check-list li{display:flex;align-items:center;gap:9px}.check-list svg{color:#08745d}.story-image-wrap{position:relative;height:470px;border-radius:18px;overflow:hidden}.story-image-wrap img{width:100%;height:110%;object-fit:cover;will-change:transform}.center-link{text-align:center;margin-top:-20px}.text-link{display:inline-flex;align-items:center;gap:10px;padding-bottom:6px;border-bottom:2px solid #c9ad7c;font-weight:800}.text-link svg{transition:transform .25s ease}.text-link:hover svg{transform:translateX(5px)}
.serve-section{padding:91px 0 88px;background:#0a4035;color:#fff}.serve-heading{display:flex;justify-content:space-between;align-items:flex-end;gap:50px;margin-bottom:55px}.serve-heading h2{max-width:600px;color:#fff;font-size:clamp(2.7rem,4vw,3.8rem);line-height:1.02;letter-spacing:-.05em}.serve-heading p{max-width:420px;color:#bed1cb}.serve-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid rgba(255,255,255,.18)}.serve-item{min-height:207px;padding:34px 27px 15px;border-right:1px solid rgba(255,255,255,.18);display:flex;flex-direction:column;justify-content:space-between;transition:background .3s ease,transform .3s ease}.serve-item:first-child{padding-left:0}.serve-item:last-child{border-right:0}.serve-item:hover{background:rgba(255,255,255,.055);transform:translateY(-8px)}.serve-item>span{font-size:11px;font-weight:800;color:#b9ed75;text-transform:uppercase}.serve-item h3{color:#fff;font-size:21px;line-height:1.15;margin-bottom:10px}.serve-item p{font-size:14px;color:#b9ccc6}
.roles-section{padding:112px 0 118px;background:#fbfaf6}.roles-heading{max-width:750px;margin:0 auto 49px;text-align:center}.eyebrow--center{justify-content:center}.roles-heading h2{font-size:clamp(2.7rem,4vw,3.7rem);line-height:1.04;letter-spacing:-.052em;margin-bottom:18px}.roles-heading>p:last-child{font-size:17px;color:#647b75}.role-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:21px;perspective:1000px}.role-card{position:relative;overflow:hidden;border:1px solid #ebe8df;border-radius:16px;background:#fff;transform-style:preserve-3d;box-shadow:0 1px 0 rgba(16,44,38,.04);will-change:transform}.role-image-wrap{height:282px;overflow:hidden}.role-image-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .7s cubic-bezier(.22,1,.36,1)}.role-card:hover .role-image-wrap img{transform:scale(1.055)}.role-body{position:relative;padding:25px 25px 29px}.role-body>span{font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#08745d}.role-body h3{font-size:23px;line-height:1.08;margin:7px 34px 10px 0}.role-body p{font-size:14px;color:#647b75}.role-arrow{position:absolute;right:21px;top:25px;color:#08745d;opacity:0;transform:translate(-5px,5px);transition:opacity .25s ease,transform .25s ease}.role-card:hover .role-arrow{opacity:1;transform:translate(0,0)}.roles-action{text-align:center;margin-top:39px}.roles-action .outline-button{min-height:50px}
.hire-section{padding:106px 0}.hire-panel{display:grid;grid-template-columns:.78fr 1.22fr;gap:75px;padding:62px;border-radius:24px;background:#dff1e8}.hire-copy h2{font-size:clamp(2.65rem,3.7vw,3.65rem);line-height:1.03;letter-spacing:-.052em;margin-bottom:20px}.hire-copy>p:not(.eyebrow){color:#647b75}.hire-copy strong{display:block;margin-top:41px;color:#08745d}.hire-form{display:grid;grid-template-columns:1fr 1fr;gap:15px}.hire-form label{display:grid;gap:7px;color:#3f5c54;font-size:12px;font-weight:800}.hire-form input,.hire-form select,.hire-form textarea{width:100%;border:1px solid #c9ddd5;border-radius:8px;background:#fff;padding:13px 14px;outline:none;transition:border-color .2s ease,box-shadow .2s ease}.select-wrap{position:relative}.select-wrap select{appearance:none;min-height:48px;padding-right:46px}.select-icon{position:absolute;right:14px;top:50%;transform:translateY(-50%);color:#3f5c54;pointer-events:none}.hire-form input:focus,.hire-form select:focus,.hire-form textarea:focus{border-color:#08745d;box-shadow:0 0 0 4px rgba(8,116,93,.11)}.hire-form textarea{height:95px;resize:vertical}.form-wide,.submit-button{grid-column:1/-1}.submit-button{min-height:50px;border:0;border-radius:8px;background:#08745d;color:#fff;font-weight:800;cursor:pointer;transition:background .25s ease,box-shadow .25s ease}.submit-button:hover{background:#055f4b;box-shadow:0 14px 28px rgba(8,116,93,.19)}.submit-button span{display:flex;align-items:center;justify-content:center;gap:9px}.submit-button:disabled{cursor:wait;opacity:.86}
@media(max-width:1023px){.hero-section{min-height:auto;padding:60px 0 70px}.hero-grid{gap:40px}.hero-title{font-size:clamp(3.3rem,6vw,4.5rem)}.hero-visual{height:465px}.story-row{gap:55px}.serve-item{padding-inline:20px}.hire-panel{gap:45px;padding:48px}}
@media(max-width:767px){.hero-grid,.story-row,.hire-panel{grid-template-columns:1fr}.hero-section{padding-top:45px}.hero-visual{height:450px}.fit-badge{left:-12px}.hero-note{right:-8px}.story-section{padding:78px 0}.story-row{gap:34px;margin-bottom:82px}.story-row--image-first .story-image-wrap{order:2}.story-row--image-first .story-copy{order:1}.story-image-wrap{height:370px}.story-number{font-size:88px}.serve-heading{display:grid;gap:20px}.serve-grid{grid-template-columns:1fr 1fr}.serve-item{border-bottom:1px solid rgba(255,255,255,.18)}.serve-item:nth-child(2n){border-right:0}.role-grid{grid-template-columns:1fr}.role-image-wrap{height:340px}.hire-panel{padding:38px}.hire-form{grid-template-columns:1fr}.form-wide,.submit-button{grid-column:auto}}
@media(max-width:520px){.hero-section{padding-bottom:55px}.hero-title{font-size:3.15rem}.hero-actions{flex-wrap:wrap}.hero-actions>*{width:100%}.hero-visual{height:380px}.hero-image{border-radius:90px 20px 20px 20px}.fit-badge{width:75px;height:75px;font-size:12px;top:32px}.hero-note{padding:14px;font-size:13px}.markets{gap:9px}.story-copy h2,.roles-heading h2,.serve-heading h2,.hire-copy h2{font-size:2.45rem}.serve-grid{grid-template-columns:1fr}.serve-item,.serve-item:first-child{min-height:165px;padding:25px 0;border-right:0}.serve-item:last-child{border-bottom:0}.role-image-wrap{height:280px}.hire-panel{padding:30px 22px}.hire-form input,.hire-form select,.hire-form textarea{font-size:16px}.select-wrap select{min-height:52px;padding:0 46px 0 15px}.select-icon{right:15px}}
@media(prefers-reduced-motion:reduce){.hero-image,.story-image-wrap img,.role-card{transform:none!important}.role-image-wrap img{transition:none}.role-arrow{opacity:1;transform:none}}
.hero-title,.story-copy h2,.serve-heading h2,.roles-heading h2,.hire-copy h2,.role-body h3{font-weight:700}
.hero-grid{gap:62px}.hero-title{font-size:clamp(54px,5.55vw,82px)}.hero-title span{white-space:nowrap}
@media(max-width:520px){.hero-title span{white-space:normal}}
.story-copy{padding-top:56px}.story-number{position:absolute;top:-74px;left:-8px;margin:0;z-index:0}.story-copy>.eyebrow,.story-copy>h2,.story-copy>p,.story-copy>.check-list{position:relative;z-index:1}
@media(max-width:767px){.story-copy{padding-top:46px}.story-number{top:-46px;left:0}}
</style>
