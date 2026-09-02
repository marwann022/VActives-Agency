<template>
  <div ref="pageRef" class="contact-page">
    <section class="contact-hero">
      <BaseContainer class="contact-grid">
        <div class="contact-copy">
          <p class="eyebrow">Contact VActives</p>
          <h1>Let’s build your remote team.</h1>
          <p>Tell us what your business needs. We’ll get back to you with a clear next step and a focused plan.</p>
          <div class="contact-details">
            <a href="mailto:hello@vactives.com"><IconMail :size="21" /><span><small>Email us</small>hello@vactives.com</span></a>
            <div><IconClock :size="21" /><span><small>Response time</small>Within one business day</span></div>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-heading"><span>Start a conversation</span><h2>How can we help?</h2></div>
          <label>Full name<input v-model.trim="form.name" required placeholder="Your name" /></label>
          <label>Work email<input v-model.trim="form.email" required type="email" placeholder="you@company.com" /></label>
          <label>Company<input v-model.trim="form.company" placeholder="Company name" /></label>
          <label>Message<textarea v-model.trim="form.message" required placeholder="Tell us about your team, role or question..."></textarea></label>
          <button type="submit" :disabled="formState === 'submitting'">
            <span v-if="formState === 'success'"><IconCheck :size="19" /> Message received</span>
            <span v-else-if="formState === 'submitting'">Sending…</span>
            <span v-else>Send Message <IconArrowRight :size="19" /></span>
          </button>
          <p v-if="formState === 'success'" class="success-note" role="status">Thanks — our team will be in touch shortly.</p>
        </form>
      </BaseContainer>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { gsap } from 'gsap'
import { IconArrowRight, IconCheck, IconClock, IconMail } from '@tabler/icons-vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import { useGsap } from '@/composables/useGsap'
import { isReducedMotionActive } from '@/utils/motion/reveal'

const pageRef = ref(null)
const formState = ref('idle')
const form = reactive({ name: '', email: '', company: '', message: '' })

function submitForm() {
  formState.value = 'submitting'
  window.setTimeout(() => { formState.value = 'success' }, 650)
}

useGsap(() => {
  if (isReducedMotionActive()) return
  gsap.from('.contact-copy > *', { opacity: 0, y: 24, duration: .7, stagger: .08, ease: 'power3.out' })
  gsap.from('.contact-form', { opacity: 0, x: 42, duration: .85, ease: 'power3.out' })
}, pageRef)
</script>

<style scoped>
.contact-page{min-height:calc(100vh - 86px);background:#f8f5ed}.contact-hero{padding:92px 0 104px}.contact-grid{display:grid;grid-template-columns:.84fr 1.16fr;align-items:center;gap:94px}.eyebrow{display:flex;align-items:center;gap:10px;margin-bottom:19px;color:#08745d;font-size:12px;font-weight:800;letter-spacing:.13em;text-transform:uppercase}.eyebrow::before{content:"";width:24px;height:2px;background:#c9ad7c}.contact-copy h1{max-width:540px;margin-bottom:24px;font-size:clamp(3.4rem,5.2vw,5.1rem);font-weight:700;line-height:.98;letter-spacing:-.06em}.contact-copy>p{max-width:530px;color:#536b65;font-size:17px;line-height:1.65}.contact-details{display:grid;gap:14px;margin-top:43px}.contact-details>a,.contact-details>div{display:flex;align-items:center;gap:14px;color:#102c26;font-weight:750}.contact-details svg{color:#08745d}.contact-details span{display:grid;gap:2px}.contact-details small{color:#71827d;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}.contact-form{padding:46px;border:1px solid #d8e5df;border-radius:22px;background:#fff;box-shadow:0 24px 70px rgba(16,44,38,.09)}.form-heading{margin-bottom:27px}.form-heading span{color:#08745d;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.form-heading h2{margin-top:7px;font-size:31px;letter-spacing:-.04em}.contact-form label{display:grid;gap:7px;margin-bottom:15px;color:#3f5c54;font-size:12px;font-weight:800}.contact-form input,.contact-form textarea{width:100%;border:1px solid #c9ddd5;border-radius:9px;background:#fff;padding:14px 15px;outline:none;transition:border-color .2s ease,box-shadow .2s ease}.contact-form textarea{min-height:126px;resize:vertical}.contact-form input:focus,.contact-form textarea:focus{border-color:#08745d;box-shadow:0 0 0 4px rgba(8,116,93,.11)}.contact-form button{width:100%;min-height:53px;border:0;border-radius:9px;background:#08745d;color:#fff;font-weight:800;cursor:pointer;transition:background .25s ease,transform .25s ease,box-shadow .25s ease}.contact-form button:hover{background:#055f4b;transform:translateY(-2px);box-shadow:0 14px 28px rgba(8,116,93,.19)}.contact-form button span{display:flex;align-items:center;justify-content:center;gap:9px}.contact-form button:disabled{cursor:wait;opacity:.86}.success-note{margin-top:12px;color:#08745d;font-size:13px;font-weight:700;text-align:center}
@media(max-width:900px){.contact-grid{grid-template-columns:1fr;gap:48px}.contact-copy h1{max-width:680px}.contact-copy>p{max-width:650px}}
@media(max-width:520px){.contact-page{min-height:calc(100vh - 72px)}.contact-hero{padding:60px 0 72px}.contact-copy h1{font-size:3.05rem}.contact-form{padding:28px 22px;border-radius:17px}.contact-form input,.contact-form textarea{font-size:16px}.contact-details{margin-top:34px}}
</style>
