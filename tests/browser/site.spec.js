import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.route('https://challenges.cloudflare.com/**', route => route.fulfill({ contentType: 'text/javascript', body: `window.turnstile={render(el, options){window.__challengeOptions=options; return 'test-widget'}, reset(){window.__challengeOptions?.callback('mock-token')},remove(){}}` }))
})

for (const path of ['/', '/services', '/contact']) {
  test(`direct load, refresh, metadata and layout ${path}`, async ({ page }) => {
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    page.on('console', message => { if (message.text().includes('Hydration')) errors.push(message.text()) })
    await page.addInitScript(() => {
      window.__cspViolations = []
      document.addEventListener('securitypolicyviolation', e => window.__cspViolations.push(`${e.violatedDirective}: ${e.blockedURI}`))
    })
    const response = await page.goto(path)
    expect(response.status()).toBe(200)
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://www.vactives.com${path}`)
    await page.reload()
    await expect(page.locator('h1')).toBeVisible()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true)
    expect(errors).toEqual([])
    expect(await page.evaluate(() => window.__cspViolations)).toEqual([])
    await expect(page.locator('#referral')).toHaveCount(0)
  })
}
test('unknown route and legacy redirect', async ({ page }) => {
  expect((await page.goto('/not-a-real-route')).status()).toBe(404)
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/)
  await page.goto('/start-hiring')
  await expect(page).toHaveURL(/\/#hire$/)
  await expect(page.locator('#hire')).toBeVisible()
})
test('internal navigation, back and forward', async ({ page }) => {
  await page.goto('/')
  await page.locator('footer a[href="/services"]').first().click()
  await expect(page).toHaveURL(/\/services$/)
  await expect(page.locator('h1')).toBeVisible()
  await page.goBack()
  await expect(page).toHaveURL(/\/$/)
  await page.goForward()
  await expect(page).toHaveURL(/\/services$/)
})
test('headers and no inline executable scripts', async ({ request }) => {
  const response = await request.get('/')
  expect(response.headers()['x-frame-options']).toBe('DENY')
  expect(response.headers()['content-security-policy']).toContain("frame-ancestors 'none'")
  expect(response.headers()['content-security-policy']).not.toContain("script-src 'unsafe-inline'")
})
test('form is safe without completed challenge', async ({ page }) => {
  await page.goto('/contact')
  await expect(page.getByRole('button', { name: 'Send enquiry' })).toBeDisabled()
  await expect(page.locator('.email-option')).toContainText('info@vactives.com')
})
async function prepareContact(page) {
  await page.goto('/contact')
  await page.getByLabel('Full name', { exact: true }).fill('QA Visitor')
  await page.getByLabel('Work email', { exact: true }).fill('qa@example.com')
  await page.getByLabel('Message', { exact: true }).fill('Synthetic browser test, not a real enquiry.')
  await page.getByRole('checkbox', { name: /agree/ }).check()
  await page.waitForFunction(() => window.__challengeOptions)
  await page.evaluate(() => window.__challengeOptions.callback('mock-token'))
}
test('contact success and duplicate-click prevention', async ({ page }) => {
  let count = 0
  await page.route('**/api/inquiry', async route => {
    count++
    const data = route.request().postDataJSON()
    expect(data.type).toBe('contact'); expect(data.consent).toBe(true)
    await new Promise(resolve => setTimeout(resolve, 200))
    await route.fulfill({ json: { ok: true, confirmationSent: true } })
  })
  await prepareContact(page)
  await page.getByRole('button', { name: 'Send enquiry' }).click()
  await expect(page.getByRole('status')).toContainText('submitted')
  await expect(page.getByRole('button', { name: 'Enquiry sent' })).toBeDisabled()
  expect(count).toBe(1)
})
test('failure retains fields and retry succeeds with same reference', async ({ page }) => {
  const ids = []
  await page.route('**/api/inquiry', route => {
    ids.push(route.request().postDataJSON().submissionId)
    return route.fulfill(ids.length === 1 ? { status: 502, json: { error: 'Please try again.' } } : { json: { ok: true, confirmationSent: false } })
  })
  await prepareContact(page)
  await page.getByRole('button', { name: 'Send enquiry' }).click()
  await expect(page.getByRole('alert')).toContainText('try again')
  await expect(page.getByLabel('Full name', { exact: true })).toHaveValue('QA Visitor')
  await page.getByRole('button', { name: 'Send enquiry' }).click()
  await expect(page.getByRole('status')).toContainText('could not send your confirmation')
  expect(ids).toHaveLength(2); expect(ids[0]).toBe(ids[1])
})
test('connection failure is recoverable', async ({ page }) => {
  await page.route('**/api/inquiry', route => route.abort('failed'))
  await prepareContact(page)
  await page.getByRole('button', { name: 'Send enquiry' }).click()
  await expect(page.getByRole('alert')).toContainText('Connection failed')
  await expect(page.getByRole('button', { name: 'Send enquiry' })).toBeEnabled()
})
test('mobile menu focus trap and Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.getByRole('button', { name: /open.*menu|menu/i }).first().click()
  const close = page.getByRole('button', { name: 'Close menu' })
  await expect(close).toBeFocused()
  await page.keyboard.press('Shift+Tab')
  await expect(page.locator('#mobile-menu a').last()).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(close).toBeFocused()
  await page.keyboard.press('Escape')
  await expect(page.locator('#mobile-menu')).toHaveCount(0)
  await expect(page.locator('#app')).not.toHaveAttribute('inert')
})
test('home hiring form, role keyboard selection, expired challenge and success', async ({ page }) => {
  let payload
  await page.route('**/api/inquiry', route => {
    payload = route.request().postDataJSON()
    return route.fulfill({ json: { ok: true, confirmationSent: true } })
  })
  await page.goto('/#hire')
  await page.getByLabel('Full name', { exact: true }).fill('QA Hiring')
  await page.getByLabel('Work email', { exact: true }).fill('qa@example.com')
  await page.getByLabel('Company', { exact: true }).fill('Example company')
  await page.locator('.custom-select__trigger').focus()
  await page.keyboard.press('Enter')
  await page.keyboard.press('Enter')
  await page.getByLabel('What does your team need help with?').fill('Synthetic hiring test.')
  await page.getByRole('checkbox', { name: /agree/ }).check()
  await page.waitForFunction(() => window.__challengeOptions)
  await page.evaluate(() => { window.__challengeOptions.callback('mock-token'); window.__challengeOptions['expired-callback']() })
  await expect(page.getByRole('button', { name: 'Send enquiry' })).toBeDisabled()
  await page.evaluate(() => window.__challengeOptions.callback('mock-token'))
  await page.getByRole('button', { name: 'Send enquiry' }).click()
  await expect(page.getByRole('status')).toContainText('submitted')
  expect(payload.type).toBe('hiring')
  expect(payload.role).toBeTruthy()
})
