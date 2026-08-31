<template>
  <footer id="contact" class="site-footer">
    <BaseContainer>
      <div class="footer-grid">
        <div class="footer-brand"><div class="footer-logo-plate"><BrandLogo /></div><h2>Ready to build your remote team?</h2></div>
        <div><h3>Services &amp; Pricing</h3><nav><a href="/#roles">Explore roles</a><a href="/#about">How we work</a><router-link to="/start-hiring">Start hiring</router-link></nav></div>
        <div><h3>Contact</h3><nav><span>Let’s talk about your next hire.</span><a href="mailto:hello@vactives.com">hello@vactives.com</a><a href="#">LinkedIn</a></nav></div>
      </div>
      <div class="footer-bottom"><span>© {{ currentYear }} VActives. All rights reserved.</span><span>Virtual Recruitment Agency</span></div>
    </BaseContainer>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import BaseContainer from '@/components/base/BaseContainer.vue'
import BrandLogo from '@/components/brand/BrandLogo.vue'
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.site-footer{padding:60px 0 25px;background:#082f28;color:#fff}.footer-grid{display:grid;grid-template-columns:1.5fr .8fr .9fr;gap:80px;padding-bottom:43px}.footer-brand h2{max-width:340px;margin-top:20px;color:#fff;font-size:27px;line-height:1.1;letter-spacing:-.04em}.footer-logo-plate{width:230px;height:82px;border-radius:14px;background:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 28px rgba(0,0,0,.14)}.footer-logo-plate :deep(.brand-logo){display:block;flex:none}.footer-grid h3{margin-bottom:18px;color:#b9ed75;font-size:13px;letter-spacing:.1em;text-transform:uppercase}.footer-grid nav{display:grid;gap:10px}.footer-grid nav a,.footer-grid nav span{color:#b8cbc5;font-size:14px;transition:color .2s ease,transform .2s ease}.footer-grid nav a:hover{color:#fff;transform:translateX(4px)}.footer-bottom{display:flex;justify-content:space-between;padding-top:22px;border-top:1px solid rgba(255,255,255,.13);color:#8da69f;font-size:12px}
@media(max-width:760px){.footer-grid{grid-template-columns:1fr 1fr;gap:45px}.footer-brand{grid-column:1/-1}.footer-bottom{flex-direction:column;gap:8px}}@media(max-width:480px){.footer-grid{grid-template-columns:1fr}}
</style>
