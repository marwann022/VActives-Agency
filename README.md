# VActives Agency Website

Production website for **VActives Agency**, a virtual recruitment agency connecting businesses in the United States, United Kingdom, Canada, and Australia with screened remote professionals.

- **Live website:** [www.vactives.com](https://www.vactives.com/)
- **Primary contact:** [info@vactives.com](mailto:info@vactives.com)
- **Hosting:** Vercel
- **Status:** Production-ready and deployed

## What the Website Includes

### Home

- Brand, services, markets, industries, hiring process, and calls to action
- Hiring enquiry form with multi-role selection
- Full-time or part-time employment preference
- Responsive layout and reduced-motion support

### Services & Pricing

- Searchable role catalogue
- Role responsibilities, outcomes, KPIs, schedules, and indicative monthly pricing
- Part-time, full-time, and recruitment setup packages
- Recruitment process, replacement support, promotion, and referral information

### Contact

- General contact form
- Direct business email and working hours
- Candidate application link and social links
- Optional referral form protected by separate client and server feature flags

## Enquiry and Email Flow

Home and Contact forms submit to the server-only `/api/inquiry` endpoint. The endpoint:

- Validates every field, consent, request origin, payload size, and submission reference
- Supports multiple requested roles and a required `Full-time` or `Part-time` selection
- Verifies Cloudflare Turnstile on the server
- Sends the full enquiry to `info@vactives.com` through Resend
- Uses the visitor's address as `Reply-To` for the team notification
- Sends a separate confirmation email to the visitor
- Includes both HTML and plain-text email versions
- Escapes submitted content and uses deterministic idempotency keys to reduce duplicate delivery
- Fails closed when required production configuration is missing

The internal hiring email includes the selected roles and employment type in the same branded layout as the other enquiry details.

## SEO

The production build pre-renders Home, Services & Pricing, Contact, and the 404 page so meaningful HTML is available before JavaScript runs. It also provides:

- Unique titles and meta descriptions
- Canonical URLs for `https://www.vactives.com`
- Open Graph and Twitter sharing metadata
- Organization, WebSite, and WebPage structured data
- Generated favicon, Apple touch icon, brand logo, and social preview
- Generated `sitemap.xml` and `robots.txt`
- Indexable production pages and a noindex 404 page
- Semantic page structure and descriptive image alternatives

Google Search Console ownership and indexing requests are external account operations; indexing and ranking remain controlled by Google.

## Security and Reliability

- Cloudflare Turnstile with server-side action and hostname validation
- Strict input validation, field length limits, honeypot protection, and HTML escaping
- Exact-origin and JSON content-type enforcement
- 20 KB request-size limit and generic provider error responses
- Content Security Policy and restrictive browser security headers
- No-store caching for API responses
- Secrets kept in server-only environment variables
- Automated checks for committed credentials and unsafe build output
- Feature-gated referral submissions on both frontend and backend

## Tech Stack

- Vue 3
- Vue Router
- Vite
- Tailwind CSS
- GSAP
- Vercel Functions
- Resend
- Cloudflare Turnstile
- Playwright and Node's built-in test runner

## Local Development

Requirements: a current Node.js LTS release and npm.

```bash
npm ci
npm run dev
```

Copy `.env.example` to `.env.local` and provide local or test credentials where required. Never commit real API keys or secrets. Running Vite alone serves the frontend; use the Vercel development environment when testing the serverless API locally.

## Environment Variables

| Variable | Purpose | Exposure |
|---|---|---|
| `RESEND_API_KEY` | Resend sending credential | Server only |
| `RESEND_FROM_EMAIL` | Visible sender, normally `VActives Agency <info@vactives.com>` | Server only |
| `FORM_INBOX` | Team inbox, normally `info@vactives.com` | Server only |
| `TURNSTILE_SECRET_KEY` | Turnstile verification secret | Server only |
| `VITE_TURNSTILE_SITE_KEY` | Turnstile public widget key | Public |
| `FORM_ALLOWED_ORIGINS` | Optional additional exact development or preview origins | Server only |
| `VITE_ENABLE_REFERRALS` | Displays the referral form when set to `true` | Public |
| `ENABLE_REFERRALS` | Accepts referral API submissions when set to `true` | Server only |

Both referral flags must be enabled to launch the referral flow. Public `VITE_` values require a new build.

## Quality Checks

```bash
npm run build
npm test
npm run test:browser
npm run check:security
npm audit --omit=dev
```

The browser suite covers desktop, mobile, and tablet layouts, including direct routes, navigation, form validation, multi-role selection, employment type, accessibility behavior, Turnstile states, and API outcomes. Automated API tests mock external providers and do not send real emails.

## Deployment

Vercel builds the project with `npm run build` and publishes `dist/`. The build:

1. Generates brand and social assets
2. Builds the Vue client
3. Builds the server-rendering entry
4. Pre-renders public pages
5. Generates SEO files

Production environment-variable changes require a redeployment. `dist/`, local environment files, test reports, Vercel metadata, and local design/QA working files are intentionally excluded from Git.

## Project Structure

```text
VActives-Agency/
├── api/                 # Vercel function entrypoints
├── public/              # Static public assets
├── scripts/             # Build, prerender, test, and security utilities
├── server/              # Enquiry validation and email delivery logic
├── src/
│   ├── components/      # Shared UI and form components
│   ├── data/            # Business, services, and SEO content
│   ├── pages/           # Home, Services, Contact, and 404 pages
│   ├── router/          # Application routes
│   ├── styles/          # Global styles, tokens, typography, and motion
│   └── utils/           # Motion and Turnstile helpers
├── tests/               # API, SEO, and browser tests
├── vercel.json          # Routing and security headers
└── README.md
```

## Supporting Documentation

- [`docs/seo-email-launch.md`](docs/seo-email-launch.md) — production email, deliverability, Search Console, and launch operations
- [`docs/security-qa-handoff-report.md`](docs/security-qa-handoff-report.md) — security and QA review
- [`docs/client-content-status.md`](docs/client-content-status.md) — client-supplied content and outstanding confirmations

## Scope

The current release is a marketing and lead-generation website. It does not include user accounts, an admin dashboard, a client portal, a job board, an applicant tracking system, online payments, payroll, employee monitoring, time tracking, a CRM, or a CMS.

## Maintainer

Developed and maintained by **Marwan Ashraf**.

---

© VActives. All rights reserved.
