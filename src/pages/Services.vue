<template>
  <div ref="pageRef" class="services-page">
    <section class="service-hero">
      <img class="hero-photo" :src="heroImage" alt="Business professionals meeting in a modern office" />
      <div class="hero-shade" aria-hidden="true"></div>
      <BaseContainer class="hero-content">
        <p class="eyebrow eyebrow--light">Virtual recruitment, built around outcomes</p>
        <h1>People who fit.<br />Support that stays.</h1>
        <p class="hero-summary">We find, assess and help you onboard reliable remote professionals for the work that keeps your business moving.</p>
        <div class="hero-actions">
          <BaseButton :to="{ path: '/', hash: '#hire' }" size="lg" show-arrow>Start Hiring</BaseButton>
          <router-link class="outline-light" to="/contact">Talk to our team</router-link>
        </div>
      </BaseContainer>
    </section>

    <section class="service-intro reveal-section">
      <BaseContainer class="intro-grid">
        <div class="intro-heading motion-copy"><p class="eyebrow">The VActives difference</p><h2>A focused process, measured by what matters.</h2><p>From role intake to onboarding, every step is built to reduce hiring noise and improve the quality of your shortlist.</p></div>
        <div class="intro-stats motion-copy">
          <article><IconCalendarTime :size="24" /><strong>7–14</strong><span>Business days for many roles</span></article>
          <article><IconChecklist :size="24" /><strong>10</strong><span>Focused remote roles</span></article>
          <article><IconWorld :size="24" /><strong>4</strong><span>Core international markets</span></article>
          <article><IconRefresh :size="24" /><strong>30-day</strong><span>Proposed replacement window*</span></article>
        </div>
        <p class="intro-footnote">*Subject to the final written service agreement and its documented conditions.</p>
      </BaseContainer>
    </section>

    <section class="included-section reveal-section">
      <BaseContainer>
        <div class="section-heading section-heading--light motion-copy"><p class="eyebrow eyebrow--light">What is included</p><h2>More than sourcing.<br />A focused hiring process.</h2></div>
        <div class="included-grid">
          <article v-for="(item, index) in included" :key="item.title" class="included-card">
            <div><component :is="item.icon" :size="27" /><span>0{{ index + 1 }}</span></div><h3>{{ item.title }}</h3><p>{{ item.copy }}</p>
          </article>
        </div>
      </BaseContainer>
    </section>

    <section class="roles-section reveal-section">
      <BaseContainer>
        <div class="section-heading roles-heading motion-copy"><div><p class="eyebrow">Roles we recruit</p><h2>Specialists for the work<br />that drives your business.</h2></div><p>Hover to explore. Tap any card for responsibilities, typical KPIs and indicative pricing.</p></div>
        <div class="role-filters motion-copy" aria-label="Filter roles by category">
          <button v-for="group in roleGroups" :key="group" type="button" :class="{ active: activeRoleGroup === group }" :aria-pressed="activeRoleGroup === group" @click="selectRoleGroup(group)">{{ group }}</button>
        </div>
        <div class="role-grid">
          <article v-for="role in visibleRoles" :key="role.name" class="role-card" :class="{ open: openRole === role.name }">
            <div class="role-image"><img :src="role.image" :alt="`${role.name} professional at work`" loading="lazy" /><span>{{ String(roles.indexOf(role) + 1).padStart(2, '0') }}</span></div>
            <div class="role-body"><small>{{ role.category }}</small><h3>{{ role.name }}</h3><p>{{ role.outcome }}</p></div>
            <button type="button" :aria-expanded="openRole === role.name" @click="toggleRole(role.name)"><span>{{ openRole === role.name ? 'Close details' : 'View role details' }}</span><IconMinus v-if="openRole === role.name" :size="19" /><IconArrowUpRight v-else :size="19" /></button>
            <Transition name="card-detail"><div v-if="openRole === role.name" class="role-detail"><div><small>Responsibilities</small><ul><li v-for="item in role.responsibilities" :key="item"><IconCheck :size="14" />{{ item }}</li></ul></div><div><small>Typical KPIs</small><p>{{ role.kpis.join(' · ') }}</p></div><div class="role-meta"><span>{{ role.schedule }}</span><strong>{{ role.price }}<small>/ month</small></strong></div></div></Transition>
          </article>
        </div>
        <div v-if="activeRoleGroup === 'All'" class="roles-more pt-8"><button type="button" @click="showAllRoles = !showAllRoles">{{ showAllRoles ? 'Show fewer roles' : `Show all ${roles.length} roles` }} <IconPlus v-if="!showAllRoles" :size="18" /><IconMinus v-else :size="18" /></button></div>
      </BaseContainer>
    </section>

    <section id="pricing" class="pricing-section reveal-section">
      <BaseContainer>
        <div class="section-heading pricing-heading motion-copy"><div><p class="eyebrow">Pricing</p><h2>Choose the support<br />that fits your pace.</h2></div><p>Current brief ranges are indicative. Final pricing is confirmed after role discovery and depends on seniority, hours, tools and time-zone coverage.</p></div>
        <div class="pricing-grid">
          <article v-for="(item, index) in packages" :key="item.label" class="pricing-card" :class="{ featured: index === 1 }">
            <div class="pricing-icon"><IconClock v-if="index === 0" :size="27" /><IconUserCheck v-else-if="index === 1" :size="27" /><IconBriefcase v-else :size="27" /></div>
            <span class="plan-label">{{ item.label }}</span><h3>{{ item.price }}</h3><small>{{ item.note }}</small><p>{{ item.hours }}</p>
            <ul><li v-for="benefit in priceBenefits[index]" :key="benefit"><IconCircleCheckFilled :size="17" />{{ benefit }}</li></ul>
            <BaseButton :to="{ path: '/', hash: '#hire' }" :variant="index === 1 ? 'primary' : 'secondary'" show-arrow>Choose this option</BaseButton>
          </article>
        </div>
        <p class="pricing-relationship">Monthly plans show the professional's ongoing support cost. The recruitment setup fee is quoted separately, and its application is confirmed in writing before work begins.</p>
        <div class="offers-row"><div><span>Current savings</span><strong>{{ siteDetails.promotion }}</strong><p>Availability and eligibility are confirmed in your written quote.</p></div><div><span>Referral reward</span><strong>5% + 5%</strong><p>Refer someone and you both save 5% on each candidate, subject to the final referral terms.</p></div><router-link to="/contact">Ask about terms <IconArrowRight :size="18" /></router-link></div>
      </BaseContainer>
    </section>

    <section class="faq-section reveal-section">
      <BaseContainer class="faq-layout">
        <div class="faq-heading motion-copy"><p class="eyebrow">Questions, answered</p><h2>Before we start.</h2><p>Still deciding? Email <a :href="`mailto:${siteDetails.email}`">{{ siteDetails.email }}</a>.</p></div>
        <div class="faq-list">
          <article v-for="(faq, index) in faqs" :key="faq.question"><button type="button" :aria-expanded="openFaq === index" @click="openFaq = openFaq === index ? -1 : index"><span>{{ faq.question }}</span><IconMinus v-if="openFaq === index" :size="20" /><IconPlus v-else :size="20" /></button><Transition name="answer"><p v-if="openFaq === index">{{ faq.answer }}</p></Transition></article>
        </div>
      </BaseContainer>
    </section>

  </div>
</template>

<script setup>
import { computed, nextTick, ref } from 'vue'
import { IconArrowRight, IconArrowUpRight, IconBriefcase, IconCalendarTime, IconCheck, IconChecklist, IconCircleCheckFilled, IconClock, IconClockCheck, IconLanguage, IconMinus, IconPlus, IconRefresh, IconSearch, IconUserCheck, IconUsersGroup, IconWorld } from '@tabler/icons-vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import { useGsap } from '@/composables/useGsap'
import { isReducedMotionActive } from '@/utils/motion/reveal'
import { packages, roles } from '@/data/services'
import { siteDetails } from '@/data/site'

const pageRef = ref(null)
const openRole = ref('')
const openFaq = ref(0)
const activeRoleGroup = ref('All')
const showAllRoles = ref(false)
const roleGroups = ['All', 'Sales & pipeline', 'Real estate', 'Operations', 'Customer experience']
const filteredRoles = computed(() => {
  if (activeRoleGroup.value === 'All') return roles
  const groupCategories = {
    'Sales & pipeline': ['Sales', 'Pipeline'],
    'Real estate': ['Real estate', 'Property'],
    Operations: ['Operations', 'Leadership'],
    'Customer experience': ['Customer experience']
  }
  return roles.filter((role) => groupCategories[activeRoleGroup.value].includes(role.category))
})
const visibleRoles = computed(() => activeRoleGroup.value === 'All' && !showAllRoles.value ? filteredRoles.value.slice(0, 6) : filteredRoles.value)
const heroImage = 'https://images.pexels.com/photos/36765732/pexels-photo-36765732.jpeg?auto=compress&cs=tinysrgb&w=2200'
const included = [
  { icon: IconBriefcase, title: 'Role intake', copy: 'Objectives, responsibilities, tools, schedule and clear success measures.' },
  { icon: IconSearch, title: 'Targeted sourcing', copy: 'Relevant talent channels and candidate pools chosen for the role.' },
  { icon: IconLanguage, title: 'Communication check', copy: 'English, tone, confidence and professional communication.' },
  { icon: IconChecklist, title: 'Practical assessment', copy: 'Role-specific scenarios, writing, tool or call checks when needed.' },
  { icon: IconUsersGroup, title: 'Focused shortlist', copy: 'Only the strongest candidates, prepared for your interviews.' },
  { icon: IconClockCheck, title: 'Ongoing support', copy: 'Interview coordination, onboarding and agreed replacement support.' }
]
const priceBenefits = [
  ['Flexible 20-hour schedule', 'Screened remote professional', 'Role-specific matching'],
  ['Dedicated 40-hour support', 'Full recruitment process', 'Interview and onboarding support'],
  ['Role brief and scorecard', 'Targeted sourcing and screening', 'Focused candidate shortlist']
]
const faqs = [
  { question: 'How do the monthly plans and setup fee work?', answer: 'Monthly ranges describe ongoing professional support. The recruitment setup fee is quoted separately, and whether it applies is confirmed before work begins in your written quote.' },
  { question: 'How quickly can you present candidates?', answer: 'Many roles reach shortlist stage in approximately 7–14 business days. Timing varies with role complexity, requirements and client response speed.' },
  { question: 'How are candidates assessed?', answer: 'Screening can include relevant experience, English and communication, availability, compensation fit and practical role-specific tasks.' },
  { question: 'Can candidates cover our time zone?', answer: 'Yes. Required hours are defined during role intake so sourcing focuses on candidates who can reliably cover your schedule.' },
  { question: 'Do you provide replacement support?', answer: 'A proposed 30-day replacement period may apply, subject to the final service agreement and its documented conditions.' },
  { question: 'Can you recruit a role not listed?', answer: 'Yes. Share the outcome, responsibilities and schedule with us and we will confirm whether it fits our recruitment scope.' }
]

function selectRoleGroup(group) {
  activeRoleGroup.value = group
  showAllRoles.value = false
  openRole.value = ''
}

async function toggleRole(name) {
  openRole.value = openRole.value === name ? '' : name
  await nextTick()
}

useGsap((ctx, g) => {
  if (isReducedMotionActive()) return
  g.timeline({ defaults: { ease: 'power3.out' } }).from('.service-hero .eyebrow, .service-hero h1, .hero-summary, .hero-actions', { opacity: 0, y: 20, duration: .46, stagger: .045 }).from('.service-hero', { '--photo-scale': 1.06, duration: .72 }, '<')
  g.to('.hero-photo', { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '.service-hero', start: 'top top', end: 'bottom top', scrub: .8 } })
  g.utils.toArray('.reveal-section').forEach((section) => {
    const items = section.querySelectorAll('.motion-copy, .included-card, .role-card, .pricing-card, .offers-row, .faq-list')
    if (!items.length) return
    g.from(items, { opacity: 0, y: 34, duration: .78, stagger: .065, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 82%', once: true } })
  })
}, pageRef)
</script>

<style scoped>
.services-page{overflow:clip;background:#fff}.services-page :deep(.max-w-container){max-width:1340px!important;padding-left:32px!important;padding-right:32px!important}.service-hero{--photo-scale:1;position:relative;min-height:570px;display:flex;align-items:center;isolation:isolate;overflow:hidden;background:#0a4035}.hero-photo{position:absolute;top:-10%;left:0;width:100%;height:120%;object-fit:cover;object-position:center 44%;transform:scale(var(--photo-scale));z-index:-3}.hero-shade{position:absolute;inset:0;background:rgba(4,45,36,.72);z-index:-2}.hero-content{min-height:570px;display:flex;flex-direction:column;justify-content:center;padding-top:56px;padding-bottom:56px;color:#fff}.eyebrow{display:flex;align-items:center;gap:10px;margin-bottom:18px;color:#08745d;font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.eyebrow::before{content:"";width:24px;height:2px;background:#c9ad7c}.eyebrow--light{color:#b9ed75}.eyebrow--light::before{background:#fff}.service-hero h1{max-width:860px;color:#fff;font-size:clamp(4rem,7vw,6.5rem);font-weight:700;line-height:.92;letter-spacing:-.066em}.hero-summary{max-width:620px;margin-top:25px;color:#d1dfdb;font-size:17px;line-height:1.65}.hero-actions{display:flex;align-items:center;gap:13px;margin-top:30px}.outline-light{min-height:56px;display:inline-flex;align-items:center;justify-content:center;padding:0 25px;border:1px solid rgba(255,255,255,.65);border-radius:999px;color:#fff;font-weight:800;transition:background .25s ease,color .25s ease}.outline-light:hover{background:#fff;color:#0a4035}
.service-intro{padding:88px 0}.intro-grid{display:grid;grid-template-columns:.86fr 1.14fr;align-items:center;gap:24px 72px}.intro-grid h2,.section-heading h2,.faq-heading h2{font-size:clamp(2.8rem,4.5vw,4.25rem);font-weight:700;line-height:1.02;letter-spacing:-.055em}.intro-heading>p:last-child{max-width:540px;margin-top:22px;color:#60736e;font-size:15px;line-height:1.7}.intro-stats{display:grid;grid-template-columns:1fr 1fr;border:1px solid #dbe5e0;border-radius:18px;background:#f8f5ed;overflow:hidden}.intro-stats article{min-height:180px;padding:27px;display:grid;align-content:space-between;border-right:1px solid #dbe5e0;border-bottom:1px solid #dbe5e0;transition:background .3s ease,transform .3s ease}.intro-stats article:nth-child(2n){border-right:0}.intro-stats article:nth-last-child(-n+2){border-bottom:0}.intro-stats article:hover{background:#eef5ef;transform:translateY(-3px)}.intro-stats svg{color:#08745d}.intro-stats strong{margin-top:20px;color:#102c26;font-size:38px;letter-spacing:-.055em}.intro-stats span{color:#60736e;font-size:11px;font-weight:800;letter-spacing:.04em;text-transform:uppercase}.intro-footnote{grid-column:2;color:#71817c;font-size:10px;line-height:1.5}
.included-section{padding:105px 0;background:#082f28;color:#fff}.section-heading{max-width:830px;margin-bottom:52px}.section-heading h2{color:#102c26}.section-heading--light h2{color:#fff}.included-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.included-card{min-height:235px;padding:29px;border:1px solid rgba(255,255,255,.14);border-radius:13px;background:rgba(255,255,255,.035);transition:transform .35s cubic-bezier(.22,1,.36,1),background .3s ease,border-color .3s ease}.included-card:hover{transform:translateY(-8px);background:rgba(255,255,255,.07);border-color:rgba(185,237,117,.4)}.included-card>div{display:flex;align-items:center;justify-content:space-between;margin-bottom:48px;color:#b9ed75}.included-card span{color:#718e86;font-size:10px;font-weight:800}.included-card h3{margin-bottom:11px;color:#fff;font-size:19px}.included-card p{color:#9fb5af;font-size:13px;line-height:1.65}
.roles-section{padding:112px 0;background:#fbfaf6}.roles-heading,.pricing-heading{max-width:none;display:flex;align-items:flex-end;justify-content:space-between;gap:65px}.roles-heading>p,.pricing-heading>p{max-width:420px;color:#647871;line-height:1.65}.role-grid{display:grid;grid-template-columns:repeat(3,1fr);align-items:start;gap:20px}.role-card{overflow:hidden;border:1px solid #e6e2d8;border-radius:16px;background:#fff;box-shadow:0 2px 3px rgba(16,44,38,.03);transition:transform .42s cubic-bezier(.22,1,.36,1),box-shadow .42s ease,border-color .3s ease}.role-card:hover{transform:translateY(-10px);border-color:#c9d9d3;box-shadow:0 22px 45px rgba(16,44,38,.11)}.role-image{position:relative;height:225px;overflow:hidden}.role-image img{width:100%;height:100%;object-fit:cover;filter:saturate(.83);transition:transform .7s cubic-bezier(.22,1,.36,1),filter .5s ease}.role-card:hover .role-image img{transform:scale(1.065);filter:saturate(1)}.role-image>span{position:absolute;top:15px;right:15px;width:34px;height:34px;display:grid;place-items:center;border-radius:50%;background:#fff;color:#08745d;font-size:10px;font-weight:800;box-shadow:0 6px 16px rgba(16,44,38,.14)}.role-body{min-height:190px;padding:24px 24px 17px}.role-body small,.role-detail small,.plan-label{color:#08745d;font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.role-body h3{margin:7px 0 11px;font-size:21px;line-height:1.13;letter-spacing:-.035em}.role-body p{color:#647871;font-size:13px;line-height:1.6}.role-card>button{width:calc(100% - 48px);display:flex;align-items:center;justify-content:space-between;margin:0 24px;padding:14px 0;border:0;border-top:1px solid #e5e9e6;background:none;color:#08745d;font-size:12px;font-weight:800;cursor:pointer}.role-card>button svg{transition:transform .25s ease}.role-card:hover>button svg{transform:translate(3px,-3px)}.role-detail{display:grid;gap:18px;padding:2px 24px 24px}.role-detail ul{display:grid;gap:7px;margin-top:9px}.role-detail li{display:flex;align-items:center;gap:7px;color:#536b65;font-size:12px}.role-detail li svg{color:#08745d;flex:none}.role-detail>div>p{margin-top:7px;color:#536b65;font-size:12px}.role-meta{display:flex;align-items:flex-end;justify-content:space-between;gap:15px;padding-top:16px;border-top:1px solid #e5e9e6}.role-meta>span{color:#647871;font-size:11px}.role-meta strong{font-size:20px;letter-spacing:-.04em}.role-meta strong small{display:block;margin-top:2px;color:#70817c;font-size:8px;text-align:right}.card-detail-enter-active,.card-detail-leave-active{transition:opacity .25s ease,transform .25s ease}.card-detail-enter-from,.card-detail-leave-to{opacity:0;transform:translateY(-8px)}
.pricing-section{padding:112px 0;background:#f0e6d3}.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;align-items:stretch}.pricing-card{position:relative;display:flex;flex-direction:column;min-height:510px;padding:32px;border:1px solid #d1c4aa;border-radius:18px;background:#fbf8f1;transition:transform .35s cubic-bezier(.22,1,.36,1),box-shadow .35s ease}.pricing-card:hover{transform:translateY(-9px);box-shadow:0 22px 42px rgba(69,55,31,.12)}.pricing-card.featured{background:#0a4035;border-color:#0a4035;color:#fff;transform:translateY(-10px)}.pricing-card.featured:hover{transform:translateY(-18px)}.pricing-icon{width:52px;height:52px;display:grid;place-items:center;margin-bottom:31px;border:1px solid #c8b995;border-radius:50%;color:#08745d}.featured .pricing-icon{border-color:rgba(185,237,117,.45);color:#b9ed75}.featured .plan-label{color:#b9ed75}.pricing-card h3{margin-top:14px;font-size:39px;letter-spacing:-.055em}.pricing-card>small{color:#71817b;font-size:10px;text-transform:uppercase}.featured>small{color:#9eb5ae}.pricing-card>p{margin:25px 0 22px;padding-bottom:20px;border-bottom:1px solid #d8cfbc;font-weight:800}.featured>p{border-color:rgba(255,255,255,.15)}.pricing-card ul{display:grid;gap:12px;margin-bottom:30px}.pricing-card li{display:flex;align-items:center;gap:9px;color:#5d706a;font-size:12px}.pricing-card li svg{color:#08745d;flex:none}.featured li{color:#c1d1cc}.featured li svg{color:#b9ed75}.pricing-card :deep(a){width:100%;margin-top:auto}.offers-row{display:grid;grid-template-columns:.8fr 1.25fr auto;align-items:center;gap:45px;margin-top:36px;padding:28px 30px;border-radius:14px;background:#fff}.offers-row>div{display:grid;gap:4px}.offers-row span{color:#08745d;font-size:9px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.offers-row strong{font-size:28px;letter-spacing:-.04em}.offers-row p{color:#657871;font-size:11px}.offers-row>a{display:flex;align-items:center;gap:8px;color:#08745d;font-size:12px;font-weight:800;white-space:nowrap}
.pricing-card.featured h3,.pricing-card.featured>p{color:#fff}
.faq-section{padding:110px 0}.faq-layout{display:grid;grid-template-columns:.72fr 1.28fr;gap:100px}.faq-heading{position:sticky;top:115px;align-self:start}.faq-heading>p:last-child{margin-top:22px;color:#657a73}.faq-heading a{color:#08745d;font-weight:800}.faq-list{border-top:1px solid #dbe3df}.faq-list article{border-bottom:1px solid #dbe3df}.faq-list button{width:100%;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:25px 0;border:0;background:none;text-align:left;font-weight:800;cursor:pointer}.faq-list button svg{flex:none;color:#08745d}.faq-list article>p{max-width:690px;padding:0 42px 26px 0;color:#60736e;line-height:1.65}.answer-enter-active,.answer-leave-active{transition:opacity .22s ease,transform .22s ease}.answer-enter-from,.answer-leave-to{opacity:0;transform:translateY(-6px)}
.role-filters{display:flex;flex-wrap:wrap;gap:9px;margin:-20px 0 34px}.role-filters button{min-height:40px;padding:0 17px;border:1px solid #cfdad5;border-radius:999px;background:#fff;color:#526b64;font-size:11px;font-weight:800;cursor:pointer;transition:background .25s ease,color .25s ease,border-color .25s ease,transform .25s ease}.role-filters button:hover{transform:translateY(-2px);border-color:#08745d;color:#08745d}.role-filters button.active{border-color:#08745d;background:#08745d;color:#fff}.roles-more{display:flex;justify-content:center;margin-top:38px}.roles-more button{min-height:48px;display:inline-flex;align-items:center;gap:9px;padding:0 22px;border:1px solid #08745d;border-radius:999px;background:#fff;color:#08745d;font-weight:800;cursor:pointer;transition:background .25s ease,color .25s ease,transform .25s ease}.roles-more button:hover{background:#08745d;color:#fff;transform:translateY(-2px)}.pricing-relationship{max-width:920px;margin:34px auto 0;padding:18px 22px;border-left:3px solid #08745d;background:rgba(255,255,255,.58);color:#526b64;font-size:12px;line-height:1.65}
@media(max-width:980px){.role-grid{grid-template-columns:repeat(2,1fr)}.included-grid{grid-template-columns:repeat(2,1fr)}.pricing-card{padding:25px}.faq-layout{gap:55px}}
@media(max-width:767px){.service-hero,.hero-content{min-height:610px}.hero-content{padding-top:48px;padding-bottom:48px}.service-hero h1{font-size:3.85rem}.hero-photo{object-position:62% center}.hero-summary{font-size:15px}.service-intro,.roles-section,.pricing-section,.faq-section{padding:82px 0}.intro-grid{grid-template-columns:1fr;gap:30px}.intro-footnote{grid-column:1}.included-section{padding:82px 0}.roles-heading,.pricing-heading{display:grid;gap:23px}.role-filters{margin-top:0}.pricing-grid{grid-template-columns:1fr;gap:21px}.pricing-card.featured{transform:none}.pricing-card.featured:hover{transform:translateY(-9px)}.offers-row{grid-template-columns:1fr;gap:20px}.faq-layout{grid-template-columns:1fr}.faq-heading{position:static}}
@media(max-width:560px){.service-hero,.hero-content{min-height:650px}.service-hero h1{font-size:3.25rem}.hero-actions{align-items:stretch;flex-direction:column}.hero-actions>*{width:100%}.intro-grid h2,.section-heading h2,.faq-heading h2{font-size:2.48rem}.included-grid,.role-grid{grid-template-columns:1fr}.role-filters{gap:7px}.role-filters button{min-height:38px;padding-inline:13px}.role-image{height:240px}.role-body{min-height:auto}.pricing-card{min-height:480px}}
@media(max-width:767px){.services-page :deep(.max-w-container){padding-left:20px!important;padding-right:20px!important}}
@media(prefers-reduced-motion:reduce){.hero-photo,.role-card,.role-image img,.pricing-card,.included-card,.role-filters button,.roles-more button{transform:none!important;transition:none!important}}
.pricing-relationship{max-width:none;margin:48px 0 0;padding:19px 22px;border:1px solid rgba(8,116,93,.16);border-left:3px solid #08745d;border-radius:12px;background:rgba(255,255,255,.64)}
.offers-row{margin-top:24px}
@media(max-width:1100px){.pricing-card h3{font-size:34px;white-space:nowrap}}
@media(max-width:767px){.pricing-relationship{margin-top:30px;padding:17px 18px}.offers-row{margin-top:18px}}
</style>
