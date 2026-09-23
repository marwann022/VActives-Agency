<template>
  <div class="form-delivery">
    <label class="consent"><input v-model="consent" type="checkbox" required :disabled="busy || sent" /><span>I agree that VActives may contact me about this enquiry.</span></label>
    <div class="honeypot" aria-hidden="true"><label>Leave this field empty<input v-model="website" tabindex="-1" autocomplete="off" /></label></div>
    <div v-if="siteKey && !sent" ref="challengeElement" class="security-check"></div>
    <button type="submit" :disabled="busy || sent || !siteKey || !token">{{ busy ? 'Sending…' : sent ? 'Enquiry sent' : 'Send enquiry' }}</button>
    <p v-if="sent" class="result success" role="status">Thanks — your enquiry has been submitted. Our team will review it during business hours.</p>
    <p v-else-if="error" class="result error" role="alert">{{ error }}</p>
    <p v-if="!sent" class="email-option">{{ !siteKey ? 'Please contact our team by email:' : 'Prefer email?' }} <a href="mailto:info@vactives.com">info@vactives.com</a></p>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { loadTurnstile } from '@/utils/turnstile'
const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || ''
const consent = ref(false)
const website = ref('')
const token = ref('')
const busy = ref(false)
const sent = ref(false)
const error = ref('')
const challengeElement = ref(null)
let widgetId, disposed = false, submissionId
onMounted(async () => {
  if (!siteKey) return
  try {
    await loadTurnstile()
    if (disposed) return
    widgetId = window.turnstile.render(challengeElement.value, {
      sitekey: siteKey, action: 'inquiry', theme: 'light', size: 'flexible',
      callback: value => { token.value = value; error.value = '' },
      'expired-callback': () => { token.value = '' },
      'error-callback': () => { token.value = ''; error.value = 'The security check could not load. Please refresh or email our team.' }
    })
  } catch { error.value = 'The security check could not load. Please refresh or email our team.' }
})
onUnmounted(() => { disposed = true; if (widgetId !== undefined) window.turnstile?.remove(widgetId) })

async function submit(fields) {
  if (busy.value || sent.value) return
  if (!consent.value || !token.value) { error.value = 'Please give contact consent and complete the security check.'; return }
  busy.value = true
  error.value = ''
  submissionId ||= crypto.randomUUID()
  try {
    const response = await fetch('/api/inquiry', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.timeout(45000),
      body: JSON.stringify({ ...fields, consent: consent.value, website: website.value, turnstileToken: token.value, submissionId })
    })
    const result = await response.json().catch(() => ({}))
    if (!response.ok || result.ok !== true) throw new Error(result.error || 'We could not send your enquiry. Please try again or email info@vactives.com.')
    sent.value = true
  } catch (reason) { error.value = reason.name === 'TimeoutError' ? 'We could not confirm submission. Try again or email info@vactives.com.' : reason instanceof TypeError ? 'Connection failed. Please try again or email info@vactives.com.' : reason.message }
  finally { busy.value = false; token.value = ''; if (widgetId !== undefined && !disposed && !sent.value) window.turnstile?.reset(widgetId) }
}
defineExpose({ submit })
</script>

<style scoped>
.form-delivery{grid-column:1/-1;min-width:0}.consent{display:flex!important;align-items:flex-start;gap:10px!important;margin:8px 0 16px!important;font-size:12px!important;font-weight:500!important;line-height:1.6;color:#3f5c54}.consent input{width:17px!important;height:17px;flex:none;margin-top:2px;accent-color:#08745d}.honeypot{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}.security-check{margin:12px 0;min-height:65px}button{width:100%;min-height:52px;border:0;border-radius:9px;background:#08745d;color:white;font-weight:700;cursor:pointer;transition:background .2s}button:hover:not(:disabled){background:#055f4b}button:disabled{opacity:.65;cursor:default}.result{font-size:13px;line-height:1.6;margin-top:12px}.success{color:#08745d}.error{color:#9c2828}.email-option{font-size:12px;line-height:1.6;margin-top:12px;text-align:center;color:#536b65}a{color:#08745d;text-decoration:underline}button:focus-visible,input:focus-visible,a:focus-visible{outline:3px solid #c9ad7c;outline-offset:3px}
</style>
