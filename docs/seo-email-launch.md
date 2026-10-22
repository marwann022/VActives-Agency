# SEO and enquiry email launch

> **Current email decision (8 October 2026)**: `info@vactives.com` must be both the visible sender and the receiving mailbox. The application already supports this through separate environment variables. The production switch must wait until `vactives.com` itself is verified as a sending domain in Resend; verification of `notifications.vactives.com` alone does not authorize `info@vactives.com` as a sender.

## Implemented in the repository

- Build-time HTML rendering for Home, Services & Pricing, Contact and the 404 page. Search engines receive page content without executing JavaScript.
- Unique titles and descriptions, canonical URLs on `https://www.vactives.com`, Open Graph/Twitter preview metadata, Organization/WebSite/page JSON-LD.
- Brand favicon, Apple touch icon, logo and 1200 × 630 social preview generated from the supplied logo. No invented testimonials, ratings or postal address.
- Generated `sitemap.xml` and `robots.txt`; unknown pages use noindex. Vercel serves explicit page routes rather than a catch-all returning Home for every URL.
- Home and Contact forms POST to the server-only `/api/inquiry` function. The server validates input, contact consent, origin, honeypot and Cloudflare Turnstile before calling Resend.
- Fixed team recipient, visitor Reply-To, escaped HTML, plain-text alternatives, deterministic provider idempotency keys and a separate confirmation email. Provider acceptance does not guarantee inbox delivery.
- Missing configuration fails closed. The page always offers `info@vactives.com` as a fallback. No credentials are committed.

## 1. Resend — separate from Vercel website domain verification

1. Keep the existing verified `notifications.vactives.com` configuration in place while migrating. Under Resend Domains, add the apex sending domain `vactives.com` so Resend can authorize `info@vactives.com` as the sender.
2. Copy the exact DNS records Resend provides into the domain owner's Vercel DNS panel. Match Type, Name, Value and MX Priority exactly. Do not overwrite existing root-domain mail records or use example DNS values.
3. Return to Resend and verify until `vactives.com` shows **Verified**. A verified subdomain does not authorize sibling or parent-domain sender addresses. Verification authorizes sending; it does not create the `info@vactives.com` mailbox.
4. Confirm that `info@vactives.com` is an existing, working inbox with their mail provider. Purchasing a domain alone does not create it.
5. Create a Resend API key with sending access limited to the verified domain. Put it directly into Vercel environment variables, never source code or chat.

## 2. Spam protection and rate limiting

Create a Cloudflare Turnstile widget (Managed), allowing `www.vactives.com` and `vactives.com`. Website DNS can stay at Vercel. Obtain the public site key and private secret key. Keep hostname validation enabled. For preview/local testing use separate test credentials and explicitly allowed origins; never deploy test keys to production.

Add a Vercel Firewall rate-limit rule for `POST /api/inquiry` before launch as an additional abuse control:
- **Target**: Path equals `/api/inquiry`, Method equals `POST`.
- **Threshold**: 5 requests per 10 minutes per client IP (`x-forwarded-for`).
- **Initial Mode**: Configure in **Log (Observation)** mode first to audit legitimate traffic and corporate proxy/NAT behavior without false positives.
- **Enforcement**: Transition to **Deny (429)** or **Challenge** after validating log patterns. Activation must be done directly in the Vercel Dashboard by authorized team members.

## 3. Vercel project environment variables

| Name | Value | Exposure |
|---|---|---|
| `RESEND_API_KEY` | Sending API key from Resend | Server only |
| `RESEND_FROM_EMAIL` | `VActives Agency <info@vactives.com>` | Server only |
| `FORM_INBOX` | `info@vactives.com` | Server only |
| `TURNSTILE_SECRET_KEY` | Turnstile secret | Server only |
| `VITE_TURNSTILE_SITE_KEY` | Turnstile public site key | Public, compiled into frontend |
| `FORM_ALLOWED_ORIGINS` | Optional comma-separated exact staging/local origins | Server only |
| `VITE_ENABLE_REFERRALS` | `false` (keep disabled until referral terms approved) | Public, compiled into frontend |
| `ENABLE_REFERRALS` | `false` (keep disabled until referral terms approved) | Server only |

Set Production variables and redeploy. Public `VITE_` values require a rebuild. Do not prefix any secret with `VITE_`. For local backend testing use Vercel's development environment; `vite` and `vite preview` alone do not run Vercel API functions.

With both email values set to `info@vactives.com`, the notification is sent **from** and delivered **to** that mailbox, while its `Reply-To` remains the visitor's address so the team can answer the enquiry directly. The visitor confirmation is also sent from `info@vactives.com`, with `Reply-To: info@vactives.com`.

Browser test builds inject a mock Turnstile key (`1x00000000000000000000AA`). Never deploy `dist/` directly from a browser-test run; always perform a clean `npm run build` with production environment variables before deploying.

## 4. Production acceptance checks

For temporary testing, override `FORM_INBOX` with the authorized tester's inbox in local or Preview environment settings. This changes notification delivery and the confirmation email's Reply-To, not the website's public contact address or the verified sender. Keep personal test addresses in ignored configuration, not committed examples. Local `.env.local` does not update Vercel. Restore `FORM_INBOX=info@vactives.com` and redeploy before accepting real customer enquiries. Use synthetic test submissions only while routing to a personal inbox.

After publishing, verify all three routes load directly and through navigation, canonical metadata is correct, `/sitemap.xml`, `/robots.txt`, `/favicon.png` and `/social-preview.png` return successfully, and a made-up URL returns HTTP 404.

Submit one authorized test enquiry from Home and one from Contact. Confirm the team receives each exactly once, Reply replies to the visitor, and the visitor receives confirmation with Reply going to the team. Check Resend delivery/bounce status, not just the UI. Test a failed security challenge and a provider failure: neither should falsely report success. Never log request bodies, tokens or API keys. There is no application database here: records are in the inbox/provider. Confirm a retention policy and approved privacy notice before launch; contact consent is not a substitute for those documents.

Local checks: `npm run build && npm test`. Tests mock external providers and do not send email. Live delivery remains unverified until account setup and the above test.

### Deliverability / Junk-folder diagnosis (9 October 2026)

The application already sends a small HTML message plus a plain-text alternative and does not use a `no-reply` address. The first broken boundary observed is domain authentication, not the email template:

- Vercel is authoritative for DNS.
- `resend._domainkey.vactives.com` is visible through both Google and Cloudflare public resolvers.
- `_dmarc.vactives.com` is not published.
- The previous `resend._domainkey.notifications.vactives.com` record is not visible, although the `send.notifications.vactives.com` SPF and MX records remain.
- Therefore the active Production `From` address must be matched to the corresponding fully verified Resend domain before judging content or reputation.

Required acceptance sequence:

1. In Resend, open the exact domain used by `RESEND_FROM_EMAIL` and restore every record shown under **Enable Sending** until the dashboard reports it Verified.
2. Publish a valid DMARC TXT record at `_dmarc.vactives.com`. Start with monitoring (`p=none`); add an aggregate-report mailbox only after that mailbox can receive mail.
3. In the delivered Gmail message, use **Show original** and require `SPF: PASS`, `DKIM: PASS`, and `DMARC: PASS` with the visible From domain aligned. Do not treat “Delivered” in Resend as proof of inbox placement.
4. Open the email in Resend and run **Insights**. Resolve every “Needs attention” item. Keep open/click tracking disabled for these transactional form messages unless it is genuinely required.
5. Warm the newly authenticated domain with low-volume, wanted transactional messages. Ask test recipients to mark a legitimate message as “Not spam”; never compensate by bulk-sending test messages.

## 5. Google Search Console

1. Add a Domain property for `vactives.com` in the business-owned Google Search Console account.
2. Add Google's supplied TXT verification record to the domain's DNS, then Verify. This is separate from both Vercel and Resend verification.
3. Submit `https://www.vactives.com/sitemap.xml` after the new build is published.
4. Inspect the Home, Services and Contact production URLs. Run the live test and request indexing.
5. Monitor Page indexing and Performance reports. Use the same VActives Agency name and website link on official social profiles.

SEO makes content accessible and understandable; neither a sitemap nor an indexing request guarantees inclusion, ranking, exact snippets or immediate appearance. Google chooses displayed titles, descriptions and favicon. Do not promise a first-page result for the brand query.

References: [Google indexing requests](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), [Resend domains](https://resend.com/docs/dashboard/domains/introduction), [Turnstile server validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).
