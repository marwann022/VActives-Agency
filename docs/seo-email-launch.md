# SEO and enquiry email launch

## Implemented in the repository

- Build-time HTML rendering for Home, Services & Pricing, Contact and the 404 page. Search engines receive page content without executing JavaScript.
- Unique titles and descriptions, canonical URLs on `https://www.vactives.com`, Open Graph/Twitter preview metadata, Organization/WebSite/page JSON-LD.
- Brand favicon, Apple touch icon, logo and 1200 × 630 social preview generated from the supplied logo. No invented testimonials, ratings or postal address.
- Generated `sitemap.xml` and `robots.txt`; unknown pages use noindex. Vercel serves explicit page routes rather than a catch-all returning Home for every URL.
- Home and Contact forms POST to the server-only `/api/inquiry` function. The server validates input, contact consent, origin, honeypot and Cloudflare Turnstile before calling Resend.
- Fixed team recipient, visitor Reply-To, escaped HTML, plain-text alternatives, deterministic provider idempotency keys and a separate confirmation email. Provider acceptance does not guarantee inbox delivery.
- Missing configuration fails closed. The page always offers `info@vactives.com` as a fallback. No credentials are committed.

## 1. Resend — separate from Vercel website domain verification

1. Create the business-owned Resend account. Under Domains add `notifications.vactives.com` as a sending subdomain.
2. Copy the exact DNS records Resend provides into the domain owner's Vercel DNS panel. Match Type, Name, Value and MX Priority exactly. Do not overwrite existing root-domain mail records or use example DNS values.
3. Return to Resend and verify until the domain is Verified. This authorizes email sending; it does not create an `info@vactives.com` mailbox.
4. Confirm that `info@vactives.com` is an existing, working inbox with their mail provider. Purchasing a domain alone does not create it.
5. Create a Resend API key with sending access limited to the verified domain. Put it directly into Vercel environment variables, never source code or chat.

## 2. Spam protection

Create a Cloudflare Turnstile widget (Managed), allowing `www.vactives.com` and `vactives.com`. Website DNS can stay at Vercel. Obtain the public site key and private secret key. Keep hostname validation enabled. For preview/local testing use separate test credentials and explicitly allowed origins; never deploy test keys to production. Add a Vercel firewall rate-limit rule for POST `/api/inquiry` before launch as an additional abuse control.

## 3. Vercel project environment variables

| Name | Value | Exposure |
|---|---|---|
| `RESEND_API_KEY` | Sending API key from Resend | Server only |
| `RESEND_FROM_EMAIL` | `VActives Agency <forms@notifications.vactives.com>` | Server only |
| `FORM_INBOX` | `info@vactives.com` | Server only |
| `TURNSTILE_SECRET_KEY` | Turnstile secret | Server only |
| `VITE_TURNSTILE_SITE_KEY` | Turnstile public site key | Public, compiled into frontend |
| `FORM_ALLOWED_ORIGINS` | Optional comma-separated exact staging/local origins | Server only |

Set Production variables and redeploy. Public `VITE_` values require a rebuild. Do not prefix any secret with `VITE_`. For local backend testing use Vercel's development environment; `vite` and `vite preview` alone do not run Vercel API functions.

## 4. Production acceptance checks

For temporary testing, override `FORM_INBOX` with the authorized tester's inbox in local or Preview environment settings. This changes notification delivery and the confirmation email's Reply-To, not the website's public contact address or the verified sender. Keep personal test addresses in ignored configuration, not committed examples. Local `.env.local` does not update Vercel. Restore `FORM_INBOX=info@vactives.com` and redeploy before accepting real customer enquiries. Use synthetic test submissions only while routing to a personal inbox.

After publishing, verify all three routes load directly and through navigation, canonical metadata is correct, `/sitemap.xml`, `/robots.txt`, `/favicon.png` and `/social-preview.png` return successfully, and a made-up URL returns HTTP 404.

Submit one authorized test enquiry from Home and one from Contact. Confirm the team receives each exactly once, Reply replies to the visitor, and the visitor receives confirmation with Reply going to the team. Check Resend delivery/bounce status, not just the UI. Test a failed security challenge and a provider failure: neither should falsely report success. Never log request bodies, tokens or API keys. There is no application database here: records are in the inbox/provider. Confirm a retention policy and approved privacy notice before launch; contact consent is not a substitute for those documents.

Local checks: `npm run build && npm test`. Tests mock external providers and do not send email. Live delivery remains unverified until account setup and the above test.

## 5. Google Search Console

1. Add a Domain property for `vactives.com` in the business-owned Google Search Console account.
2. Add Google's supplied TXT verification record to the domain's DNS, then Verify. This is separate from both Vercel and Resend verification.
3. Submit `https://www.vactives.com/sitemap.xml` after the new build is published.
4. Inspect the Home, Services and Contact production URLs. Run the live test and request indexing.
5. Monitor Page indexing and Performance reports. Use the same VActives Agency name and website link on official social profiles.

SEO makes content accessible and understandable; neither a sitemap nor an indexing request guarantees inclusion, ranking, exact snippets or immediate appearance. Google chooses displayed titles, descriptions and favicon. Do not promise a first-page result for the brand query.

References: [Google indexing requests](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), [Resend domains](https://resend.com/docs/dashboard/domains/introduction), [Turnstile server validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).
