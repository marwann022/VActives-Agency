import { defineConfig, devices } from '@playwright/test'
export default defineConfig({
  testDir: './tests/browser',
  timeout: 30000,
  fullyParallel: true,
  workers: 2,
  use: { baseURL: 'http://127.0.0.1:4175', reducedMotion: 'reduce', screenshot: 'only-on-failure', trace: 'retain-on-failure' },
  projects: [
    { name: 'chromium-desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'webkit-mobile', use: { ...devices['iPhone 13'] } },
    { name: 'chromium-tablet', use: { ...devices['iPad (gen 7)'], defaultBrowserType: 'chromium' } }
  ],
  webServer: { command: 'node scripts/browser-server.mjs', url: 'http://127.0.0.1:4175', reuseExistingServer: false, timeout: 120000 }
})
