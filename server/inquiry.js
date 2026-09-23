import { createHash } from 'node:crypto'

const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/
const unavailable = 'We could not send your message. Please try again or email info@vactives.com.'
const reply = (res, status, body) => res.status(status).json(body)

export function validateInquiry(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) throw new Error('Please check your form details.')
  const value = (name, max, required = true) => {
    if (typeof body[name] !== 'string') {
      if (!required && body[name] == null) return ''
      throw new Error(`Please check ${name}.`)
    }
    const text = body[name].trim()
    if ((required && !text) || text.length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(text)) throw new Error(`Please check ${name}.`)
    return text
  }
  const type = value('type', 20)
  if (!['contact', 'hiring'].includes(type)) throw new Error('Please use a contact or hiring form.')
  if (value('website', 200, false)) throw new Error('Please try again.')
  if (body.consent !== true) throw new Error('Please agree to be contacted about your enquiry.')
  const email = value('email', 254)
  if (!emailPattern.test(email)) throw new Error('Please enter a valid email address.')
  const submissionId = value('submissionId', 36)
  if (!/^[a-f\d]{8}-[a-f\d]{4}-4[a-f\d]{3}-[89ab][a-f\d]{3}-[a-f\d]{12}$/i.test(submissionId)) throw new Error('Please refresh the page and try again.')
  return { type, name: value('name', 120), email, company: value('company', 160, type === 'hiring'), role: value('role', 160, type === 'hiring'), message: value('message', 5000), submissionId }
}

const escape = (value) => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]))

export function buildEmails(data, env) {
  const fields = [['Form', data.type], ['Name', data.name], ['Email', data.email], ['Company', data.company], ['Role', data.role], ['Message', data.message]].filter(([, value]) => value)
  const wrap = (content) => `<div style="font-family:Arial,sans-serif;color:#102c26;max-width:600px;margin:24px auto"><h1 style="font-size:24px;color:#08745d">VActives Agency</h1>${content}<hr style="border:0;border-top:1px solid #d8e5df"><p style="font-size:13px">info@vactives.com · www.vactives.com</p></div>`
  return [
    {
      from: env.RESEND_FROM_EMAIL, to: [env.FORM_INBOX || 'info@vactives.com'], reply_to: data.email,
      subject: data.type === 'hiring' ? 'New hiring enquiry — VActives website' : 'New contact enquiry — VActives website',
      text: fields.map(([label, value]) => `${label}: ${value}`).join('\n\n') + `\n\nContact consent: given\nReference: ${data.submissionId}`,
      html: wrap(fields.map(([label, value]) => `<p><strong>${label}</strong><br>${escape(value).replace(/\n/g, '<br>')}</p>`).join('') + `<p>Contact consent: given<br>Reference: ${data.submissionId}</p>`)
    },
    {
      from: env.RESEND_FROM_EMAIL, to: [data.email], reply_to: env.FORM_INBOX || 'info@vactives.com',
      subject: 'We received your enquiry — VActives Agency',
      text: 'Thank you for contacting VActives Agency. Our team has received your enquiry and will review it during business hours, 9 AM–9 PM Eastern Time. You can reply to this email to reach info@vactives.com.',
      html: wrap('<h2>Thank you for getting in touch.</h2><p>Our team has received your enquiry and will review it during business hours, 9 AM–9 PM Eastern Time.</p><p>You can reply to this email to reach our team.</p>')
    }
  ]
}

export function createInquiryHandler({ env = process.env, fetchImpl = fetch, log = console } = {}) {
  return async function handler(req, res) {
    res.setHeader('Cache-Control', 'no-store')
    if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return reply(res, 405, { error: 'Method not allowed.' }) }
    const origins = new Set(['https://www.vactives.com', 'https://vactives.com', ...(env.FORM_ALLOWED_ORIGINS || '').split(',').map(v => v.trim()).filter(Boolean)])
    const origin = req.headers.origin
    if (!origins.has(origin)) return reply(res, 403, { error: 'Please submit the form from the VActives website.' })
    if (!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type'] || '')) return reply(res, 415, { error: 'Invalid request format.' })
    if (!env.RESEND_API_KEY || !env.RESEND_FROM_EMAIL || !env.TURNSTILE_SECRET_KEY) return reply(res, 503, { error: unavailable })
    let body, data
    try {
      const raw = typeof req.body === 'string' ? req.body : JSON.stringify(req.body)
      if (!raw || Buffer.byteLength(raw) > 20000) return reply(res, 413, { error: 'Your message is too long.' })
      body = JSON.parse(raw)
      data = validateInquiry(body)
      if (typeof body.turnstileToken !== 'string' || !body.turnstileToken || body.turnstileToken.length > 2048) return reply(res, 400, { error: 'Please complete the security check and try again.' })
    } catch (error) { return reply(res, 400, { error: error instanceof SyntaxError ? 'Invalid request format.' : error.message }) }

    try {
      const verification = await fetchImpl('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: AbortSignal.timeout(10000),
        body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: body.turnstileToken })
      })
      const challenge = await verification.json()
      const allowedHosts = [...origins].map(value => new URL(value).hostname)
      if (!verification.ok || !challenge.success || challenge.action !== 'inquiry' || !allowedHosts.includes(challenge.hostname)) return reply(res, 400, { error: 'The security check expired or failed. Please try again.' })
      const hash = createHash('sha256').update(JSON.stringify(data)).digest('hex')
      const emails = buildEmails(data, env)
      const send = async (payload, suffix) => {
        const response = await fetchImpl('https://api.resend.com/emails', {
          method: 'POST', signal: AbortSignal.timeout(12000),
          headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json', 'Idempotency-Key': `inquiry-${hash}-${suffix}` },
          body: JSON.stringify(payload)
        })
        if (!response.ok) throw new Error(`Email provider status ${response.status}`)
      }
      await send(emails[0], 'team')
      // Once the enquiry is accepted for the team, a confirmation failure must
      // not tell the visitor to resubmit (and duplicate their enquiry).
      let confirmationSent = true
      try { await send(emails[1], 'confirmation') } catch { confirmationSent = false; log.warn('inquiry_confirmation_failed', { reference: data.submissionId }) }
      return reply(res, 200, { ok: true, confirmationSent, reference: data.submissionId })
    } catch {
      log.error('inquiry_send_failed', { reference: data.submissionId })
      return reply(res, 502, { error: unavailable })
    }
  }
}
