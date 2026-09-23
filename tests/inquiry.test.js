import test from 'node:test'
import assert from 'node:assert/strict'
import { buildEmails, createInquiryHandler, validateInquiry } from '../server/inquiry.js'
const body = { type: 'contact', name: 'Test Visitor', email: 'visitor@example.com', company: '', message: '<script>hello</script>', consent: true, website: '', submissionId: '12345678-1234-4234-8234-123456789abc', turnstileToken: 'test-token' }
const env = { RESEND_API_KEY: 'test', RESEND_FROM_EMAIL: 'VActives <forms@notifications.vactives.com>', TURNSTILE_SECRET_KEY: 'test' }
async function run({ patch = {}, origin = 'https://www.vactives.com', settings = env, challenge = {}, fail = 0, method = 'POST' } = {}) {
  const calls = []
  const fetchImpl = async (url, options) => {
    calls.push({ url, ...options })
    if (calls.length === fail) return { ok: false, status: 500, json: async () => ({}) }
    return { ok: true, json: async () => ({ success: true, action: 'inquiry', hostname: 'www.vactives.com', ...challenge }) }
  }
  const res = { setHeader() {}, status(code) { this.code = code; return this }, json(value) { this.body = value; return this } }
  await createInquiryHandler({ env: settings, fetchImpl, log: { warn() {}, error() {} } })({ method, headers: { origin, 'content-type': 'application/json' }, body: { ...body, ...patch } }, res)
  return { ...res, calls }
}
test('sends team notification and fixed confirmation with safe reply-to', async () => {
  const result = await run()
  assert.equal(result.code, 200)
  assert.equal(result.calls.length, 3)
  const team = JSON.parse(result.calls[1].body)
  assert.deepEqual(team.to, ['info@vactives.com'])
  assert.equal(team.reply_to, body.email)
  assert.match(team.html, /&lt;script&gt;/)
  assert.ok(!JSON.parse(result.calls[2].body).html.includes(body.message))
})
test('invalid forms never reach provider', async () => {
  for (const patch of [{ consent: false }, { email: 'bad' }, { website: 'spam' }, { message: 'a'.repeat(5001) }, { type: 'hiring', company: '', role: '' }, { turnstileToken: '' }]) {
    const result = await run({ patch }); assert.equal(result.code, 400); assert.equal(result.calls.length, 0)
  }
})
test('rejects wrong origin, methods and missing config', async () => {
  assert.equal((await run({ origin: 'https://evil.example' })).code, 403)
  assert.equal((await run({ method: 'GET' })).code, 405)
  assert.equal((await run({ settings: {} })).code, 503)
})
test('rejects invalid challenge, action and hostname', async () => {
  for (const challenge of [{ success: false }, { action: 'other' }, { hostname: 'evil.example' }]) {
    const result = await run({ challenge }); assert.equal(result.code, 400); assert.equal(result.calls.length, 1)
  }
})
test('provider failure never reports success; confirmation failure preserves accepted enquiry', async () => {
  assert.equal((await run({ fail: 2 })).code, 502)
  const result = await run({ fail: 3 }); assert.equal(result.code, 200); assert.equal(result.body.confirmationSent, false)
})
test('retry payloads and idempotency keys are stable', async () => {
  const a = await run(), b = await run()
  assert.equal(a.calls[1].body, b.calls[1].body)
  assert.equal(a.calls[1].headers['Idempotency-Key'], b.calls[1].headers['Idempotency-Key'])
  assert.deepEqual(buildEmails(validateInquiry(body), env), buildEmails(validateInquiry(body), env))
})
