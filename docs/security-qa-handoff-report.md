# Security, QA & Production Hardening Handoff Report

## 1. Executive Summary

This report documents the review, debugging, security hardening, performance audit, and quality assurance verification conducted on the VActives Agency Vue 3 / Vite application.

The application has been audited and hardened across security, performance, accessibility, routing, and form reliability **without working on email infrastructure at this stage**. Email infrastructure (Resend account verification, domain DNS records SPF/DKIM/MX/DMARC) is explicitly deferred to the final launch phase per project plan.

All automated test suites pass with 100% success:
- **Unit and API tests**: 10 passed out of 10 (`npm test`)
- **End-to-End browser tests**: 36 passed out of 36 (`npm run test:browser`) across Chromium Desktop, WebKit Mobile, and Chromium Tablet
- **Production build**: Successful (`npm run build`), with zero test keys present in `dist/`
- **Security checks**: Passed (`npm run check:security`)
- **Production dependency audit**: 0 vulnerabilities (`npm audit --omit=dev`)
- **Full dependency audit**: 5 high severity vulnerabilities in build tooling (`tailwindcss@3.4.19` / `braces@3.0.3`)

**Conclusion**: The core application, client-side bundle, serverless inquiry API logic, routing, accessibility, and performance are fully **production-ready** and prepared to proceed to the final email infrastructure phase.

---

## 2. Working Tree State & Modifications

- **Git Branch**: `main`
- **No commit, push, or deployment has been performed.**
- **Approved visual design**: Preserved with 100% fidelity. No redesigns or unauthorized UI changes.
- **ReferralForm**: Remains strictly disabled across client and server layers.

### Files Modified & Created

| File | Status | Description of Changes |
|---|---|---|
| [`vite.config.js`](file:///Users/marwan/Documents/GitHub/VActives-Agency/vite.config.js) | Modified | Added `build.assetsInlineLimit` callback returning `false` for font files (`.woff2`, `.woff`, `.eot`, `.ttf`, `.otf`), preventing base64 data URL inlining and fixing CSP `font-src 'self'` violations. |
| [`src/pages/Home.vue`](file:///Users/marwan/Documents/GitHub/VActives-Agency/src/pages/Home.vue) | Modified | Added `fetchpriority="high" decoding="async"` to hero image; added `loading="lazy" decoding="async"` to story and popular role images below the fold. |
| [`src/pages/Services.vue`](file:///Users/marwan/Documents/GitHub/VActives-Agency/src/pages/Services.vue) | Modified | Added `fetchpriority="high" decoding="async"` to hero photo; added `decoding="async"` to role catalog cards. |
| [`scripts/check-security.mjs`](file:///Users/marwan/Documents/GitHub/VActives-Agency/scripts/check-security.mjs) | Modified | Enhanced scanning to inspect untracked code files, enforce absence of `.vercel/`, and scan for broader private key and token regex patterns. |
| [`docs/seo-email-launch.md`](file:///Users/marwan/Documents/GitHub/VActives-Agency/docs/seo-email-launch.md) | Modified | Added status notice clarifying intentional deferral of email infrastructure, documented firewall rate-limiting strategy, and build artifact hygiene. |
| [`docs/security-qa-handoff-report.md`](file:///Users/marwan/Documents/GitHub/VActives-Agency/docs/security-qa-handoff-report.md) | Created / Updated | Comprehensive technical documentation of all phases, test matrices, performance metrics, and deferred tasks. |

---

## 3. Security Review Findings

1. **Content Security Policy (`vercel.json`) — `[VERIFIED LOCALLY]`**:
   - `default-src 'self'; base-uri 'none'; object-src 'none'; frame-ancestors 'none'; form-action 'self'; script-src 'self' https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com https://images.pexels.com; font-src 'self'; connect-src 'self' https://challenges.cloudflare.com; frame-src https://challenges.cloudflare.com; upgrade-insecure-requests`
   - Zero inline script tags; scripts are strictly constrained to `'self'` and Cloudflare Turnstile.
   - Fonts load strictly under `font-src 'self'`.
2. **Security Headers (`vercel.json`) — `[VERIFIED LOCALLY]`**:
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `X-Frame-Options: DENY`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=()`
   - API caching: `Cache-Control: no-store` on `/api/(.*)`
3. **Input Validation & Sanitization (`server/inquiry.js`) — `[VERIFIED LOCALLY]` & `[VERIFIED VIA MOCKS]`**:
   - Rejects non-object bodies and arrays.
   - Rejects ASCII control characters `[\u0000-\u0008\u000b\u000c\u000e-\u001f]`.
   - Strict field length limits: `type` (20), `name` (120), `email` (254), `company` (160), `role` (160), `message` (5000), `submissionId` (36).
   - Honeypot check: `website` must be empty string.
   - Explicit consent boolean check: `consent === true`.
   - UUIDv4 submission reference validation regex.
   - Email regex: `/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/` (rejects `\r`, `\n`, whitespace, and header injection attempts).
   - HTML entity escaping via `escape()` before template wrapping.
4. **Request Method & Size Limits — `[VERIFIED LOCALLY]`**:
   - Rejects non-POST methods with HTTP 405 (`Allow: POST`).
   - Limits payload size to 20,000 bytes (checked via both `content-length` header and raw buffer byte length). Returns HTTP 413 if exceeded.
5. **CORS & Origin Validation — `[VERIFIED LOCALLY]`**:
   - Rejects origins not in allowed set (`https://www.vactives.com`, `https://vactives.com`, `FORM_ALLOWED_ORIGINS`).
   - Rejects `sec-fetch-site: cross-site` with HTTP 403.
   - Enforces `content-type: application/json` with HTTP 415.
6. **Error Handling & Information Disclosure — `[VERIFIED LOCALLY]`**:
   - Fail-closed: returns 503 if provider environment variables are missing.
   - Network errors return generic 502 message without leaking provider or system details.
   - `scripts/check-security.mjs` verifies no `.env` files, `.vercel` config, private keys, or tokens exist in tracked, untracked, or compiled client assets.

---

## 4. Dependency Vulnerabilities & Audit

### Audit Results
- `npm audit --omit=dev`: **0 vulnerabilities** `[VERIFIED LOCALLY]`.
- `npm audit`: **5 high severity vulnerabilities** in build tooling `[VERIFIED LOCALLY]`.

### Chain of Dependencies
- `tailwindcss@3.4.19` (devDependencies)
  - `chokidar@3.6.0` / `micromatch@4.0.8`
    - `braces@3.0.3` (GHSA-vfj7-8cjw-p6xm, CWE-674)

### Risk & Exposure Evaluation
1. **Production Exposure: ZERO**. Neither Tailwind CSS nor `braces` are bundled into the production JavaScript or serverless functions.
2. **Development / CI Exposure: Negligible**. The advisory describes a stack-exhaustion denial of service when compiling untrusted, deeply nested regex patterns (e.g. `{a,{b,{c...}}}`). In this project, `braces` is only used internally to match local files specified in `tailwind.config.js`. No user input is ever passed to the file matcher.
3. **Upgrade Assessment**:
   - `braces@3.0.3` is already the highest v3 release available on npm.
   - The only fix reported by npm requires installing `tailwindcss@4.3.3`, which drops chokidar/micromatch in favor of the Rust Oxide engine.
   - Tailwind v4 is a major breaking change requiring complete rewrite of configuration and CSS directives (`@theme`).
   - **Recommendation**: Do not force Tailwind v4 upgrade now. Keep Tailwind 3.4 for initial launch; plan a dedicated styling migration in a future cycle.

---

## 5. Form Reliability & Security Matrix

All 18 form reliability scenarios have been verified:

| Scenario | Local Behavior & Implementation | Verification Status |
|---|---|---|
| 1. Successful submission | Valid form submits, locks button, displays confirmation announcement | **[VERIFIED VIA MOCKS]** |
| 2. Invalid input | Custom select & text fields highlight invalid states; submission blocked | **[VERIFIED LOCALLY]** |
| 3. Missing required fields | Native validation & custom select prevent submission | **[VERIFIED LOCALLY]** |
| 4. Invalid email format | Regex validation rejects malformed / injected email strings | **[VERIFIED LOCALLY]** |
| 5. Oversized payloads | Headers/payloads > 20 KB rejected with HTTP 413 | **[VERIFIED VIA MOCKS]** |
| 6. Unsupported HTTP methods | GET / PUT / DELETE rejected with HTTP 405 (`Allow: POST`) | **[VERIFIED VIA MOCKS]** |
| 7. Malformed JSON | SyntaxError caught and rejected with HTTP 400 | **[VERIFIED VIA MOCKS]** |
| 8. Network failures | `AbortSignal.timeout(45000)` and fetch error handled gracefully | **[VERIFIED LOCALLY]** |
| 9. Server errors | 500/502 from API handled with user-friendly retry message | **[VERIFIED VIA MOCKS]** |
| 10. Retry after failure | Preserves `submissionId`, resets Turnstile, allows resubmission | **[VERIFIED LOCALLY]** |
| 11. Duplicate submission prevention | Button disabled on click (`busy=true`), subsequent clicks ignored | **[VERIFIED LOCALLY]** |
| 12. Idempotency behavior | SHA-256 data hash generates deterministic `Idempotency-Key` headers | **[VERIFIED VIA MOCKS]** |
| 13. Rapid repeated submissions | Vue reactive state prevents concurrent requests; button stays disabled | **[VERIFIED LOCALLY]** |
| 14. Turnstile token expiration | `expired-callback` clears token and disables submit button | **[VERIFIED LOCALLY]** |
| 15. Invalid Turnstile tokens | Backend validates `challenge.success === true`; rejects invalid tokens | **[VERIFIED VIA MOCKS]** |
| 16. Missing Turnstile tokens | Frontend disables submit; backend rejects missing tokens with HTTP 400 | **[VERIFIED LOCALLY]** |
| 17. Turnstile reset and recovery | `turnstile.reset(widgetId)` called in `finally`; user can re-verify | **[VERIFIED LOCALLY]** |
| 18. Partial delivery failure handling | Team succeeds, confirmation fails &rarr; returns 200 with `confirmationSent: false`, UI instructs user not to resubmit, idempotency key prevents duplicate team notification if resubmitted | **[VERIFIED VIA MOCKS]** |

---

## 6. Cloudflare Turnstile Security

- **Client-Side Initialization `[VERIFIED LOCALLY]`**: Dynamically loads `api.js?render=explicit`, creates widget with `action: 'inquiry'`, clears token on expiration, and unmounts widget via `turnstile.remove()`.
- **Server-Side Enforcement `[VERIFIED VIA MOCKS]`**: [`server/inquiry.js`](file:///Users/marwan/Documents/GitHub/VActives-Agency/server/inquiry.js) performs a direct server-to-server POST to `https://challenges.cloudflare.com/turnstile/v0/siteverify` using `TURNSTILE_SECRET_KEY`. Validates `success === true`, `action === 'inquiry'`, and `hostname === 'www.vactives.com'`. Frontend state is never trusted alone.
- **Build Separation `[VERIFIED LOCALLY]`**: Browser tests inject a mock key (`1x00000000000000000000AA`). Subsequent production builds run cleanly; verified that the test key is **completely absent** from production `dist/` artifacts.

---

## 7. Vercel Firewall & Rate-Limiting Strategy

- **Status**: **INACTIVE / NOT CONFIGURED** in production (Read-only inspection returns `404 — Seawall Config not found`).
- **Recommended Strategy**:
  - **Endpoint**: `POST /api/inquiry`
  - **Condition**: Path equals `/api/inquiry` AND Request Method equals `POST`.
  - **Rate Limit**: **5 requests per 10 minutes (600 seconds) per Client IP (`x-forwarded-for`)**.
  - **Initial Mode**: **Log (Observation)** mode for 7–14 days.
  - **Rationale**: 5 requests per 10 minutes accommodates normal human form completion and occasional retry, while preventing script flooding of Resend credits.
  - **False Positive Assessment**: Log mode allows auditing real corporate proxy / NAT traffic without blocking legitimate clients.
- **Activation Procedure (Manual by Authorized User)**:
  1. Open Vercel Dashboard &rarr; Project `prj_P2o4DmeC9ABXgHx7qCXOCJNCraY2` &rarr; **Security** &rarr; **Firewall** &rarr; **Custom Rules**.
  2. Add Rate Limiting rule for `POST /api/inquiry` (5 req / 10 min). Set Action to **Log**.
  3. Monitor firewall logs for 7–14 days, then switch Action to **Deny (429)**.
- **Rollback Procedure**: If false positives occur, toggle the rule to **Disabled** or switch Action back to **Log** in the Vercel Dashboard (takes effect immediately).

---

## 8. ReferralForm Feature Flag — `[VERIFIED LOCALLY]`

- **Status**: **STRICTLY DISABLED BY DEFAULT**.
- **Frontend Gating**: [`src/pages/Contact.vue`](file:///Users/marwan/Documents/GitHub/VActives-Agency/src/pages/Contact.vue) checks `import.meta.env.VITE_ENABLE_REFERRALS === 'true'`. The form does not render in the DOM when false or unset.
- **Backend Gating**: [`server/inquiry.js`](file:///Users/marwan/Documents/GitHub/VActives-Agency/server/inquiry.js) checks `env.ENABLE_REFERRALS === 'true'`. Any direct API request with `type: 'referral'` returns HTTP 403 Forbidden.
- Both unit tests and browser tests verify that the referral form is not present and cannot be bypassed.

---

## 9. Performance Audit & Optimizations

- **Font Asset Delivery `[VERIFIED LOCALLY]`**: Plus Jakarta Sans variable subsets (`cyrillic-ext`, `latin`, `latin-ext`, `vietnamese`) are emitted as static `.woff2` assets under `font-src 'self'`. Total font transfer is under 60 KB across all subsets.
- **Image Optimization & Core Web Vitals `[VERIFIED LOCALLY]`**:
  - Hero images on Home and Services have `fetchpriority="high"` and `decoding="async"` for fast Largest Contentful Paint (LCP).
  - Below-the-fold images across Home story and roles have `loading="lazy"` and `decoding="async"` to prevent unnecessary initial bandwidth consumption.
  - Images use optimized CDN query parameters (`auto=format&fit=crop&q=88`).
- **Bundle Sizes `[VERIFIED LOCALLY]`**:
  - Client JS bundle: 292.55 kB uncompressed (~108 kB gzip).
  - Client CSS bundle: 70.02 kB uncompressed (~14 kB gzip).
  - SSR pre-renderer: 416 kB build-time bundle, pruned after build (`rm -rf dist/server`).
- **Zero Render-Blocking Issues**: All scripts are deferred/module; CSS is minified; pre-rendered HTML displays instantly without waiting for JavaScript execution.

---

## 10. Accessibility & Responsive Verification

- **Keyboard Navigation `[VERIFIED LOCALLY]`**:
  - Skip link (`#main-content`) accessible via Tab.
  - Focus visible outlines configured across all interactive elements (`focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2`).
  - Custom Select component supports `ArrowUp`, `ArrowDown`, `Enter`, `Space`, `Escape`, and `Tab`, with correct ARIA listbox roles and `aria-activedescendant`.
- **Mobile Menu `[VERIFIED LOCALLY]`**:
  - Focus trapping restricts Tab navigation to menu items when open.
  - `#app` is marked `inert` while menu is open.
  - Pressing `Escape` closes the menu and restores focus to the trigger button.
- **Responsive Layouts `[VERIFIED LOCALLY]`**:
  - Tested on Mobile (390px), Tablet (768px), and Desktop (1280px+).
  - Verified `scrollWidth <= innerWidth + 1` across all pages (zero unwanted horizontal overflow).

---

## 11. Automated Test Suite Results

```
================================================================================
Test Suite               Command                  Status      Details
================================================================================
Unit & API Tests         npm test                 PASS        10/10 passed (49ms)
Browser E2E Tests        npm run test:browser     PASS        36/36 passed (15.6s)
  - Chromium Desktop     12 tests                 PASS        0 failures, 0 CSP
  - WebKit Mobile        12 tests                 PASS        0 failures, 0 CSP
  - Chromium Tablet      12 tests                 PASS        0 failures, 0 CSP
Production Build         npm run build            PASS        Zero test keys in dist
Security Script          npm run check:security   PASS        Tracked/untracked clean
Prod Dependency Audit    npm audit --omit=dev     PASS        0 vulnerabilities
Full Dependency Audit    npm audit                ADVISORY    5 high (Tailwind 3/braces)
================================================================================
```

---

## 12. DEFERRED — EMAIL INFRASTRUCTURE

> **IMPORTANT PROJECT NOTICE**:
> Email infrastructure configuration has intentionally been **DEFERRED** until the final launch phase per project plan.
> Do not classify working application components as failed solely because live email delivery has not been tested.
> The existing `info@vactives.com` mailbox is reported by the owner to be working.
> All application-side email generation, HTML escaping, and idempotency logic are verified via mocks.

The final email launch tasks remain clearly documented for the subsequent launch phase:

1. [ ] **Resend Sending Domain Verification**:
   - Access the business-owned Resend dashboard.
   - Confirm sending domain `notifications.vactives.com` status.
   - Publish required DNS records (SPF, DKIM, MX) in Vercel DNS.
   - Confirm domain status shows "Verified" in Resend.
2. [ ] **DMARC Record**:
   - Publish TXT record for `_dmarc.vactives.com` (e.g. `v=DMARC1; p=none; rua=mailto:info@vactives.com`).
3. [ ] **Production Environment Variables**:
   - Add `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `FORM_INBOX`, `TURNSTILE_SECRET_KEY`, and `VITE_TURNSTILE_SITE_KEY` to Vercel Project Settings.
4. [ ] **Live End-to-End Submission Test**:
   - Submit 1 test inquiry from the live website once published.
   - Confirm receipt in `info@vactives.com` and visitor confirmation inbox.

---

## 13. Production Readiness Assessment

- **Application Logic**: **READY FOR PRODUCTION** `[VERIFIED LOCALLY]`
- **Client Security & CSP**: **READY FOR PRODUCTION** `[VERIFIED LOCALLY]`
- **Forms & Turnstile**: **READY FOR PRODUCTION** `[VERIFIED VIA MOCKS]`
- **Performance & SEO**: **READY FOR PRODUCTION** `[VERIFIED LOCALLY]`
- **Email Infrastructure**: **DEFERRED TO FINAL LAUNCH PHASE** `[NOT VERIFIED]`

**Final Recommendation**: The codebase is stable, thoroughly tested, hardened, and ready to proceed to the email configuration and production publication phase.

---

## 14. Dependabot / Vue Router Preview Deployment Failure

### 1. Failed Deployment Details
- **Vercel Preview Branch**: `dependabot/npm_and_yarn/vue-router-5.3.1`
- **Commit**: `2a9aeccb03db16a3cad45c71784aab0cf6c700d9`
- **Reported Error**: `Build error: Command "npm install" exited with 1`

### 2. Actual Installation Error `[VERIFIED VIA REPRODUCTION]`
Reproducing `npm install` in an isolated scratch environment with the PR's `package.json` and `package-lock.json` revealed the exact npm error:
```
npm error code ERESOLVE
npm error ERESOLVE could not resolve
npm error While resolving: vue-router@5.3.1
npm error Found: vite@6.4.4
npm error node_modules/vite
npm error   dev vite@"^6.1.0" from the root project
npm error   peer vite@"^5.0.0 || ^6.0.0" from @vitejs/plugin-vue@5.2.4
npm error Could not resolve dependency:
npm error peerOptional vite@"^7.3.0 || ^8.0.0" from vue-router@5.3.1
npm error node_modules/vue-router
npm error   vue-router@"^5.3.1" from the root project
npm error Conflicting peer dependency: vite@8.3.3
```

### 3. Root Cause Analysis
- `vue-router@5.3.1` is a major upgrade that introduces an unplugin architecture requiring `vite@^7.3.0 || ^8.0.0` as a peer dependency.
- The project is on `vite@6.4.4` (which satisfies `@vitejs/plugin-vue@5.2.4`).
- Dependabot generated an isolated major version PR updating only `vue-router` without updating `vite` or `@vitejs/plugin-vue`.
- npm's strict peer dependency resolver fails with `ERESOLVE` because `vue-router@5.3.1` and `@vitejs/plugin-vue@5.2.4` have mutually incompatible Vite peer requirements.

### 4. Compatibility Analysis
- **Vue Router 5 is incompatible with the project's current toolchain**.
- Upgrading to Vue Router 5 would require:
  1. Upgrading Vite to v8 (SemVer major breaking change).
  2. Upgrading `@vitejs/plugin-vue` to v6 (SemVer major breaking change).
  3. Rewriting build scripts and verifying SSR entry compatibility.
- Vue Router 4 (`^4.5.0`, resolved to `4.6.4`) is the stable router designed for Vue 3 and Vite 6.

### 5. Dependency Security Implications
- `vue-router@4.6.4` has **ZERO reported security vulnerabilities** (`npm audit --omit=dev` confirms 0 vulnerabilities).
- Upgrading to Vue Router 5 provides no security fixes; remaining on Vue Router 4 is fully secure and recommended.

### 6. Dependabot Configuration Improvements
Updated [`.github/dependabot.yml`](file:///Users/marwan/Documents/GitHub/VActives-Agency/.github/dependabot.yml) to add `ignore` rules for breaking major upgrades:
```yaml
    ignore:
      - dependency-name: "vue-router"
        update-types: ["version-update:semver-major"]
      - dependency-name: "vite"
        update-types: ["version-update:semver-major"]
      - dependency-name: "@vitejs/plugin-vue"
        update-types: ["version-update:semver-major"]
      - dependency-name: "tailwindcss"
        update-types: ["version-update:semver-major"]
```
- Prevents Dependabot from opening isolated major version PRs that cause `ERESOLVE` errors.
- Minor and patch updates (e.g. `vue-router` 4.6.x) continue automatically.
- Security updates and vulnerability alerts continue to be delivered by GitHub.

### 7. Main Branch Status & Recommended Action
- **Main Production Branch Impact: NONE**. The failure is isolated entirely to the Dependabot preview branch.
- **Recommended Action**: **Close the Dependabot pull request for `vue-router-5.3.1` without merging**.

---

## 15. GitHub Actions Dependabot PR Audit (PR #1, PR #2, PR #3)

### 1. Overview of Open Actions PRs
Three GitHub Actions Dependabot PRs were opened for [`.github/workflows/verify.yml`](file:///Users/marwan/Documents/GitHub/VActives-Agency/.github/workflows/verify.yml):
1. **PR #1**: `actions/upload-artifact` v4 → v6 (Branch: `dependabot/github_actions/actions/upload-artifact-6`)
2. **PR #2**: `actions/setup-node` v4 → v7 (Branch: `dependabot/github_actions/actions/setup-node-7`)
3. **PR #3**: `actions/checkout` v4 → v7 (Branch: `dependabot/github_actions/actions/checkout-7`)

### 2. CI Check Failure Root Cause Analysis
- **Observed Behavior**: All three PR branches reported `verify` workflow failures in GitHub Actions.
- **Root Cause**: The failures were **NOT** caused by the updated actions. In each PR run, the action under test downloaded, initialized, and ran with 100% success.
- **Culprit**: Each PR was branched from `origin/main` (`3c9a38b`), which predates the local fix in [`vite.config.js`](file:///Users/marwan/Documents/GitHub/VActives-Agency/vite.config.js) (`build.assetsInlineLimit` returning `false` for font formats). In the old commit, Vite inlined small Cyrillic woff2 fonts as base64 data URIs, triggering `font-src: data` CSP violations during Playwright tests (`window.__cspViolations = ["font-src: data"]`).
- **Runner Deprecation Context**: GitHub Actions runners emit a deprecation warning on v4 actions:
  `Node.js 20 is deprecated. The following actions target Node.js 20 but are being forced to run on Node.js 24: actions/checkout@v4, actions/setup-node@v4`. The v6 and v7 action releases natively target Node.js 24, permanently resolving this warning.

### 3. Detailed Action Assessment

| Action & Version | Runner Compatibility | Breaking Changes | Security & Runtime Analysis |
|---|---|---|---|
| **`actions/upload-artifact` (v4 → v6)** | Fully compatible with `ubuntu-latest` | None for existing inputs (`name`, `path`, `retention-days`). | Upgrades internal client to `@actions/artifact@5.0.1`, eliminates punycode warnings, improves upload throughput. Confirmed working in run `37697951987` (uploaded 20.26 MB debug artifacts in 1.9s). |
| **`actions/setup-node` (v4 → v7)** | Fully compatible with `ubuntu-latest` | None for existing inputs (`node-version: 22`, `cache: npm`). | Upgrades internal action runtime to Node 24. Updates `@actions/cache` to 5.1.0 with security patches for `undici` and `fast-xml-parser` plus cache poisoning mitigations. Confirmed working in run `37697958443` (provisioned Node 22.23.3 & npm 10.9.9). |
| **`actions/checkout` (v4 → v7)** | Fully compatible with `ubuntu-latest` | None for default checkout usage. | Upgrades action runtime to Node 24. Hardens post-job credentials cleanup (sanitizes includeIf configs, SSH credentials, and extraheaders). Confirmed working in run `37697967766`. |

### 4. Build Artifact & Turnstile Security Audit
- **Artifact Isolation**: [`/.github/workflows/verify.yml`](file:///Users/marwan/Documents/GitHub/VActives-Agency/.github/workflows/verify.yml) only executes `actions/upload-artifact` on failure (`if: failure()`) targeting `test-results/` (Playwright traces and failure screenshots).
- **No Production Exposure**: The `dist/` directory generated during `npm run test:browser` (which injects the mock Turnstile key `1x00000000000000000000AA`) is **never** uploaded as an artifact, committed to the repository, or deployed. Deployments are handled exclusively by Vercel's independent build environment from repository source.

### 5. Individual PR Recommendations

1. **PR #1 (`actions/upload-artifact v4 → v6`)**:
   - **Recommendation**: **CLOSE (Consolidate into single commit)**
   - *Rationale*: Safe to adopt, but merging independently causes file conflicts with PR #2 and PR #3 on `.github/workflows/verify.yml`.
2. **PR #2 (`actions/setup-node v4 → v7`)**:
   - **Recommendation**: **CLOSE (Consolidate into single commit)**
   - *Rationale*: Safe to adopt. Directly benefits security by updating `@actions/cache@5.1.0`. Best applied alongside checkout and upload-artifact in one clean commit.
3. **PR #3 (`actions/checkout v4 → v7`)**:
   - **Recommendation**: **CLOSE (Consolidate into single commit)**
   - *Rationale*: Safe to adopt. Strengthens git credential scrubbing.
- **Preferred Engineering Action**: Close all three isolated Dependabot PRs and apply a single unified update to [`.github/workflows/verify.yml`](file:///Users/marwan/Documents/GitHub/VActives-Agency/.github/workflows/verify.yml) (`actions/checkout@v7`, `actions/setup-node@v7`, `actions/upload-artifact@v6`) once local commit `1562c76` is pushed to `main`. Alternatively, if merging via PR is preferred, **DEFER** all three until `main` is pushed, then sequentially rebase and merge.

### 6. Consolidation Implementation & Verification
Following approval, [`.github/workflows/verify.yml`](file:///Users/marwan/Documents/GitHub/VActives-Agency/.github/workflows/verify.yml) was updated to consolidate all three official actions in a single modification:
- `actions/checkout@v7`
- `actions/setup-node@v7` (`node-version: 22`, `cache: npm`)
- `actions/upload-artifact@v6` (`if: failure()`, `path: test-results/`, `retention-days: 7`)
- **YAML Syntax Validation**: Verified via parser; syntax is 100% compliant.
- **Runner Compatibility**: Fully compatible with GitHub-hosted `ubuntu-latest` runners, executing natively on Node 24 and eliminating deprecation warnings.
- **Verification Run Results**:
  - `npm test`: 10/10 passed.
  - `npm run test:browser`: 36/36 passed across Chromium Desktop, WebKit Mobile, and Chromium Tablet.
  - `npm run build`: Production bundle built and prerendered cleanly.
  - `npm run check:security`: 0 secrets, private artifacts, or credentials detected.
  - `npm audit --omit=dev`: 0 runtime vulnerabilities.
  - Turnstile production key check: 0 test keys present in `dist/`.

---

## 16. Production Post-Deployment Read-Only Verification (`https://www.vactives.com`)

Conducted a live read-only post-deployment audit against production (`https://www.vactives.com`) following deployment of commit `0d993b3` on `main`.

### 1. Verification Matrix Summary

| Task / Item | Status | Verified Details |
|---|---|---|
| **1. Production Deployment Status** | **PASS** | Deployed commit `0d993b3` on Vercel is `Ready` (HTTP 200, cache HIT). |
| **2. Deployed Commit Verification** | **PASS** | Matches latest `main` branch. Verified presence of `fetchpriority="high"`, updated font chunking, and latest production asset bundles. |
| **3. Route Integrity (`/`, `/services`, `/contact`)** | **PASS** | All primary routes return `HTTP 200` with prerendered HTML content. |
| **4. Direct Navigation & Refresh** | **PASS** | Navigating directly to routes or performing full browser reloads retains route state cleanly. |
| **5. 404 Routing for Unknown Paths** | **PASS** | Requests to `/404` and `/unknown-random-route` return `HTTP 404` with brand 404 page. Legacy `/start-hiring` redirects via `HTTP 308` to `/#hire`. |
| **6. Production Security Headers & CSP** | **PASS** | All strict headers confirmed: `Content-Security-Policy`, `Strict-Transport-Security` (`max-age=63072000`), `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`. |
| **7. Font Loading & Zero CSP Violations** | **PASS** | `plus-jakarta-sans-cyrillic-ext-wght-normal-lLTsRRxN.woff2` loads as a dedicated asset (HTTP 200). Zero `data:font` inlining; zero `window.__cspViolations` events. |
| **8. Responsive Behavior (Mobile & Desktop)** | **PASS** | Desktop (1280x800) and Mobile (390x844) verified. `document.documentElement.scrollWidth <= innerWidth + 1` (no horizontal overflow). |
| **9. SEO Files (`sitemap.xml`, `robots.txt`)** | **PASS** | `/robots.txt` returns `HTTP 200` (disallowing `/api/`). `/sitemap.xml` returns valid XML indexing `/`, `/services`, and `/contact`. |
| **10. Browser Runtime Console** | **PASS** | Zero unhandled JavaScript exceptions (`pageerror: 0`). Only standard Cloudflare Turnstile anti-bot console probing. |
| **11. ReferralForm Status** | **PASS** | `#referral` element count is strictly `0` in DOM across all viewports. |
| **12. API Accessibility (`/api/inquiry`)** | **PASS** | Non-mutating `GET /api/inquiry` returns `HTTP 405 Method Not Allowed` with header `Allow: POST` and `Cache-Control: no-store`. |
| **13. Preview vs. Production Parity** | **PASS** | Assets and logic are 100% identical. Preview uses Vercel SSO protection and `noindex`; Production is public and indexed. |
| **14. Email Infrastructure** | **NOT VERIFIED** | **DEFERRED** per plan. Zero emails sent, zero forms submitted, DNS and Resend untouched. |

