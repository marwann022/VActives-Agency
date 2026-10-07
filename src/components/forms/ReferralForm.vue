<template>
  <section id="referral" class="referral-form">
    <h2>Refer a business</h2>
    <p>Introduce a business that needs remote talent. Our team will confirm eligibility and the applicable referral terms.</p>
    <form @submit.prevent="delivery.submit({ type: 'referral', ...form })">
      <label>Your full name<input v-model.trim="form.name" autocomplete="name" required maxlength="120" /></label>
      <label>Your email<input v-model.trim="form.email" autocomplete="email" type="email" required maxlength="254" /></label>
      <label>Your phone / WhatsApp (optional)<input v-model.trim="form.referrerPhone" autocomplete="tel" type="tel" maxlength="40" /></label>
      <label>Your relationship to VActives<select v-model="form.relationship" required><option value="" disabled>Select a relationship</option><option v-for="item in ['Client', 'Candidate', 'Partner', 'Friend', 'Other']" :key="item">{{ item }}</option></select></label>
      <label>Referred person’s name<input v-model.trim="form.referredName" required maxlength="120" /></label>
      <label>Referred company<input v-model.trim="form.referredCompany" required maxlength="160" /></label>
      <label>Referred email<input v-model.trim="form.referredEmail" type="email" :required="!form.referredPhone" maxlength="254" /></label>
      <label>Referred phone<input v-model.trim="form.referredPhone" type="tel" :required="!form.referredEmail" maxlength="40" /></label>
      <p>Provide at least one contact method for the referred person.</p>
      <label>Country / market<input v-model.trim="form.market" required maxlength="100" /></label>
      <label>Hiring needs / context (optional)<textarea v-model.trim="form.message" maxlength="5000"></textarea></label>
      <label class="permission"><input v-model="form.referralConsent" type="checkbox" required /> I have permission to share these contact details with VActives for this introduction.</label>
      <FormDelivery ref="delivery" />
    </form>
  </section>
</template>
<script setup>
import { reactive, ref } from 'vue'
import FormDelivery from './FormDelivery.vue'
const delivery = ref(null)
const form = reactive({ name: '', email: '', referrerPhone: '', relationship: '', referredName: '', referredCompany: '', referredEmail: '', referredPhone: '', market: '', message: '', referralConsent: false })
</script>
<style scoped>
.referral-form{max-width:900px;margin:0 auto;padding:48px 24px;scroll-margin-top:100px}.referral-form h2{font-size:32px;font-weight:700}.referral-form p{margin:12px 0 24px;color:#536b65}form{display:grid;gap:16px}label{display:grid;gap:8px;font-size:14px;font-weight:600}input,select,textarea{padding:12px;border:1px solid #c9ddd5;border-radius:8px;background:#fff;font-size:16px}textarea{min-height:120px}.permission{display:flex;align-items:flex-start;gap:10px}.permission input{margin-top:4px}input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid #08745d;outline-offset:2px}
</style>
