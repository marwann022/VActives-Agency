<template>
  <footer id="contact" class="site-footer">
    <BaseContainer class="footer-container">
      <div class="footer-grid">
        <div class="footer-brand"><div class="footer-logo-plate"><BrandLogo /></div><h2>Ready to build your remote team?</h2></div>
        <div><h3>Services &amp; Pricing</h3><nav><router-link to="/services">Explore roles</router-link><router-link :to="{ path: '/services', hash: '#pricing' }">View pricing</router-link><router-link :to="{ path: '/', hash: '#hire' }">Start hiring</router-link><a :href="siteDetails.candidateApplication" target="_blank" rel="noopener noreferrer">Apply as a candidate</a></nav></div>
        <div class="footer-contact">
          <h3>Contact</h3>
          <a class="contact-item" :href="`mailto:${siteDetails.email}`"><IconMail :size="19" /><span><small>Email</small><strong>{{ siteDetails.email }}</strong></span></a>
          <div class="contact-item"><IconClockHour4 :size="19" /><span><small>Business hours</small><strong>{{ siteDetails.hours }}</strong></span></div>
          <router-link class="contact-link" to="/contact">Contact us <IconArrowUpRight :size="16" /></router-link>
          <div class="social-block"><small>Follow VActives</small><div><a :href="siteDetails.instagram" target="_blank" rel="noopener noreferrer" aria-label="VActives on Instagram"><IconBrandInstagram :size="19" /></a><a :href="siteDetails.facebook" target="_blank" rel="noopener noreferrer" aria-label="VActives on Facebook"><IconBrandFacebook :size="19" /></a></div></div>
        </div>
      </div>
      <div class="footer-bottom"><span>© {{ currentYear }} VActives. All rights reserved.</span><span>Virtual Recruitment Agency</span></div>
    </BaseContainer>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { IconArrowUpRight, IconBrandFacebook, IconBrandInstagram, IconClockHour4, IconMail } from '@tabler/icons-vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BrandLogo from '@/components/brand/BrandLogo.vue'
import { siteDetails } from '@/data/site'
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.site-footer{padding:44px 0 22px;background:#082f28;color:#fff}.footer-container{max-width:1340px!important;padding-left:32px!important;padding-right:32px!important}.footer-grid{display:grid;grid-template-columns:1.3fr .75fr 1.15fr;gap:62px;padding-bottom:34px}.footer-brand h2{max-width:340px;margin-top:18px;color:#fff;font-size:27px;line-height:1.1;letter-spacing:-.04em}.footer-logo-plate{width:218px;height:76px;border-radius:14px;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 28px rgba(0,0,0,.14)}.footer-logo-plate :deep(.brand-logo){display:block;flex:none}.footer-grid h3{margin-bottom:17px;color:#b9ed75;font-size:12px;letter-spacing:.11em;text-transform:uppercase}.footer-grid nav{display:grid;gap:10px}.footer-grid nav a,.footer-grid nav span{color:#b8cbc5;font-size:13px;transition:color .2s ease,transform .2s ease}.footer-grid nav a:hover{color:#fff;transform:translateX(4px)}.footer-contact{display:grid;grid-template-columns:1fr 1fr;align-content:start;gap:12px}.footer-contact>h3{grid-column:1/-1}.contact-item{min-height:70px;display:flex;align-items:center;gap:11px;padding:13px;border:1px solid rgba(255,255,255,.12);border-radius:10px;background:rgba(255,255,255,.035);transition:background .25s ease,border-color .25s ease}.contact-item:hover{background:rgba(255,255,255,.07);border-color:rgba(185,237,117,.35)}.contact-item>svg{flex:none;color:#b9ed75}.contact-item span{display:grid;gap:3px;min-width:0}.contact-item small,.social-block>small{color:#78958d;font-size:9px;font-weight:800;letter-spacing:.09em;text-transform:uppercase}.contact-item strong{color:#e3ece9;font-size:11px;font-weight:700;white-space:nowrap}.contact-link{display:flex;align-items:center;gap:6px;color:#fff;font-size:12px;font-weight:800}.contact-link svg{transition:transform .25s ease}.contact-link:hover svg{transform:translate(3px,-3px)}.social-block{display:flex;align-items:center;justify-content:flex-end;gap:11px}.social-block>div{display:flex;gap:7px}.social-block a{width:36px;height:36px;display:grid;place-items:center;border:1px solid rgba(255,255,255,.15);border-radius:50%;color:#fff;transition:background .25s ease,color .25s ease,transform .25s ease}.social-block a:hover{background:#b9ed75;color:#082f28;transform:translateY(-3px)}.footer-bottom{display:flex;justify-content:space-between;padding-top:19px;border-top:1px solid rgba(255,255,255,.13);color:#8da69f;font-size:11px}
@media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr;gap:42px}.footer-brand{grid-column:1/-1}.footer-contact{grid-template-columns:1fr}.social-block{justify-content:flex-start}}@media(max-width:560px){.footer-container{padding-left:20px!important;padding-right:20px!important}.footer-grid{grid-template-columns:1fr}.footer-brand{grid-column:auto}.footer-contact{grid-template-columns:1fr}.footer-bottom{flex-direction:column;gap:8px}}
</style>
