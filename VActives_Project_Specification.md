# VActives Website — Full Project Implementation Specification

> **Document type:** Detailed project implementation specification  
> **Project:** VActives Website  
> **Purpose:** Define exactly what will be built, what will not be built, what information is required from the client, how the website will be designed and developed, how forms and integrations will work, how the project will be tested, deployed, handed over, and supported.  
> **Primary source documents:**  
> 1. `VActives_Website_Requirements_Brief.docx`  
> 2. `VActives Website-Agreement.pdf`
>
> **Important:** Items described as **official requirements** come from the approved project documents. Items described as **technical implementation decisions** are engineering choices made to deliver the agreed scope efficiently and professionally; they do not add new contractual features.

---

# 1. Project Overview

VActives is a virtual recruitment agency based in Egypt serving international clients, mainly in:

- United States
- United Kingdom
- Canada
- Australia

The website is a **marketing and lead-generation website**. It is not a job portal, internal recruitment system, CRM, dashboard, applicant tracking system, or SaaS platform.

The website is intended to:

1. Present VActives professionally.
2. Explain the recruitment services.
3. Show the roles VActives recruits for.
4. Explain the recruitment process.
5. Present approved pricing information.
6. Build trust with potential clients.
7. Convert visitors into qualified leads through:
   - Start Hiring
   - Book a Discovery Call
   - Hiring Inquiry Form
   - Referral Form
   - WhatsApp
   - Email
   - LinkedIn

---

# 2. Official Project Scope

## 2.1 Website Size

**Official requirement:** The website must contain **2–3 main pages maximum**.

**Approved implementation decision:** Build the website as **3 main pages**:

1. Home
2. Services & Pricing
3. Contact / Start Hiring

This follows the recommended structure in the requirements brief and avoids turning the project into one excessively long landing page.

---

# 3. Final Website Structure

# 3.1 Page 1 — Home

The Home page is the main brand and conversion page.

Its goals are to:

- Introduce VActives.
- Explain the value proposition quickly.
- Show the markets served.
- Explain the target industries.
- Present the roles VActives recruits for.
- Explain how the recruitment process works.
- Build credibility.
- Direct visitors toward a conversion action.

## 3.1.1 Header / Navigation

The header will include:

- Approved VActives logo.
- Main navigation links.
- Primary CTA button.

Suggested navigation:

- Home
- About
- Roles
- How It Works
- Pricing
- Referral
- Testimonials
- Contact

### Navigation Behavior

- Sticky header on desktop and mobile.
- Responsive navigation.
- Mobile hamburger menu.
- Visible CTA on mobile.
- Clear hover and active states.
- Keyboard-accessible interactions.

---

## 3.1.2 Hero Section

The Hero is the first and most important visual section.

### Initial Approved Copy

**Headline:**

> Build a Reliable Remote Team Without the Hiring Guesswork.

**Supporting text:**

> VActives helps startups and small businesses hire skilled, English-speaking virtual professionals for sales, administration, customer service, and operations.

**Primary CTA:** Start Hiring  
**Secondary CTA:** Book a Discovery Call

### Design Requirements

- Strong headline hierarchy.
- Short supporting copy.
- Clearly differentiated primary and secondary actions.
- Approved logo usage.
- Professional visual that communicates remote recruitment and international teams.
- Avoid generic call-center stock photography.

### User Goal

Within the first few seconds, visitors should understand:

- VActives is a recruitment agency.
- The company recruits remote professionals.
- The business serves international clients.
- Visitors can begin the hiring process immediately.

---

## 3.1.3 Trust / Markets Bar

Display the markets served:

- USA
- UK
- Canada
- Australia

Optional supporting text:

> Remote recruitment from Egypt for global teams.

Purpose: provide immediate international positioning and remove uncertainty about geographic coverage.

---

## 3.1.4 About VActives

The section should explain that:

- VActives is a virtual recruitment agency.
- The company is based in Egypt.
- It supports international businesses.
- The service is focused on business outcomes, not simply sending CVs.
- The recruitment process may include:
  - Role clarification
  - Targeted sourcing
  - Screening
  - English and communication checks
  - Practical assessment
  - Interview coordination
  - Replacement support

Purpose: position VActives as a recruitment partner rather than a generic candidate supplier.

---

## 3.1.5 Who We Serve

Show target client segments using cards, panels, or another responsive visual system.

### Real Estate

Examples:

- Wholesalers
- Investors
- Broker teams
- Acquisition teams
- Disposition teams
- Lead-generation companies

### B2B & Agencies

Examples:

- Founders
- Sales teams
- Service companies
- SaaS companies
- Marketing agencies
- Appointment-setting teams

### Property Management

Examples:

- Portfolio managers
- Leasing teams
- Maintenance coordinators
- Tenant-support teams
- Property administrators

### Startups & Small Businesses

Lean teams that need skilled remote support without maintaining a large internal recruitment department.

---

## 3.1.6 Roles We Recruit

The website should display the supported roles in a responsive grid, list, or interactive catalogue.

Roles:

1. Cold Caller / Appointment Setter
2. Lead Manager / CRM Manager
3. Acquisition Manager
4. Disposition Manager
5. Virtual Assistant
6. Transaction Coordinator
7. Customer Service Representative
8. Email Manager
9. Executive Assistant
10. Property Management VA

Each item should include:

- Role title.
- Short business-outcome statement.

The more detailed responsibilities, KPIs, and role context will be shown on the Services & Pricing page.

---

## 3.1.7 How It Works

The recruitment process contains six steps:

1. Discovery
2. Role Brief
3. Sourcing
4. Screening
5. Assessment
6. Shortlist & Hire

### Desktop

Recommended: horizontal process, interactive stepper, or scroll-based timeline.

### Mobile

Recommended: vertical timeline.

### Step Details

#### 1. Discovery

VActives learns:

- Business objective
- Daily tasks
- Required tools
- Work schedule
- Budget
- Success measures

#### 2. Role Brief

The business need is translated into:

- Clear role scorecard
- Candidate profile

#### 3. Sourcing

VActives searches targeted talent channels and activates relevant candidate pools.

#### 4. Screening

Candidates are evaluated for:

- Relevant experience
- English
- Reliability
- Availability
- Compensation fit

#### 5. Assessment

Candidates may complete practical tasks such as:

- Scenario-based exercises
- Writing checks
- Tool checks
- Call simulations

#### 6. Shortlist & Hire

The client interviews the strongest candidates, chooses the best fit, and prepares onboarding.

---

## 3.1.8 Why Choose VActives

Main value points:

### Outcome-Based Hiring

Start from the business result the hire must improve, then define the role.

### Role-Specific Screening

Different positions receive different assessment methods.

### English & Communication Checks

Evaluate:

- Clarity
- Tone
- Confidence
- Writing
- Professional communication

### Practical Assessments

Use realistic role-specific tasks before presenting candidates.

### International Time-Zone Coverage

Recruit candidates who can support required US, UK, Canadian, and Australian working hours.

### Replacement Support

Restart the search during the agreed replacement period when the final service conditions are met.

---

## 3.1.9 Testimonials

Requirements:

- Approximately 3–6 verified testimonials.
- Do not publish fabricated testimonials.
- Testimonials must be approved by the client.
- During staging, clearly labeled placeholders may be used until approved content is provided.

Recommended testimonial structure:

- Client name
- Role/title
- Company
- Country/market
- Business problem
- VActives contribution
- Business result

---

## 3.1.10 Final Home CTA

The page should end with a clear conversion action such as:

- Start Hiring
- Book a Discovery Call

Purpose: never allow the Home page to end without a clear next step.

---

# 3.2 Page 2 — Services & Pricing

This page explains the recruitment service in more detail.

## 3.2.1 Service Overview

Explain that VActives manages the recruitment process from client intake through presentation of onboarding-ready candidates.

---

## 3.2.2 Role Catalogue

Each role may include:

- Role name
- Main responsibilities
- Typical KPIs
- Ideal industries
- Typical part-time or full-time suitability

---

## 3.2.3 What Is Included

The service should explain that the recruitment process may include:

- Role intake
- Sourcing
- Screening
- English check
- Practical assessment
- Shortlist preparation
- Interview coordination
- Replacement support

Purpose: make it clear what the client is paying for.

---

## 3.2.4 Pricing

The requirements brief contains indicative pricing. Final pricing must be approved by VActives before launch.

### Part-Time Support

- 20 hours/week
- $600–$900/month

### Full-Time Dedicated Support

- 40 hours/week
- $950–$1,900/month

### Recruitment Setup

- One-time fee
- From $299

### Indicative Role Pricing

- Cold Caller / Appointment Setter: $950–$1,300/month
- Lead Manager / CRM Manager: $1,100–$1,450/month
- Acquisition Manager: $1,300–$1,800/month
- Disposition Manager: $1,400–$1,900/month
- Transaction Coordinator: $1,250–$1,700/month
- Customer Service / Email Manager: $900–$1,200/month
- Executive Assistant / General VA: $850–$1,250/month
- Property Management VA: $1,000–$1,450/month

### Pricing Disclaimer

Final pricing may depend on:

- Seniority
- Working hours
- Time-zone requirements
- Tools
- Commission structure
- Training requirements
- Replacement terms

Pricing content should be editable without requiring a redesign.

---

## 3.2.5 Hiring Timeline

Display an expected hiring journey of approximately:

**7–14 business days** for many roles.

Clarify that timing can vary according to:

- Role complexity
- Client response speed
- Specific requirements

---

## 3.2.6 Replacement Support

Explain the proposed 30-day replacement support.

The website should clarify that this is:

- Subject to the final service agreement.
- Dependent on client cooperation.
- Dependent on documented performance concerns and agreed conditions.

---

## 3.2.7 Referral Program

Explain:

- Who may submit a referral.
- How a referral is submitted.
- When a reward becomes eligible.
- How the reward is handled.

The final reward amount, eligibility rules, payout trigger, duplicate-referral rule, payment method, and legal terms must be supplied or approved by VActives before launch.

---

## 3.2.8 FAQ

Use a clean accordion or equivalent accessible interaction.

Questions include:

- Where is VActives based?
- Which markets do you support?
- How quickly can you present candidates?
- How are candidates assessed?
- Can candidates work in our time zone?
- Do you provide a replacement?
- Are software and tools included?
- Can you recruit a role not listed?

Purpose: reduce repetitive questions before the discovery call.

---

# 3.3 Page 3 — Contact / Start Hiring

This page is the primary conversion page.

## 3.3.1 Start Hiring Introduction

Briefly explain what happens after submission:

1. VActives reviews the inquiry.
2. The team contacts the prospect.
3. The prospect may book a discovery call.
4. Role discovery begins.

---

## 3.3.2 Client Hiring Inquiry Form

### Full Name

- Required
- Text input

### Work Email

- Required
- Email validation

### Phone / WhatsApp

- Optional or required depending on final VActives policy.

### Company Name

- Required

### Company Website

- Optional
- URL validation

### Country / Market

- Required
- Options:
  - USA
  - UK
  - Canada
  - Australia
  - Other

### Industry

- Required
- Options:
  - Real Estate
  - B2B / Sales
  - Property Management
  - Startup
  - Other

### Role Needed

- Required
- Multi-select from supported roles

### Employment Schedule

- Required
- Part-Time
- Full-Time
- Not Sure

### Required Time Zone / Shift

- Required

### Desired Start Date

- Optional

### Estimated Budget

- Required
- Select or range input

### Main Business Problem

- Required
- Long-text input

### Daily Tasks

- Optional but recommended

### Tools Currently Used

- Optional

### How Did You Hear About Us?

- Optional
- Referral
- LinkedIn
- Social Media
- Search
- Other

### Preferred Contact Method

- Required
- Email
- WhatsApp
- Call

### Consent Checkbox

- Required
- User must agree to contact and acknowledge the privacy policy.

---

# 4. Hiring Form Submission Workflow

When the user submits the form:

1. Run front-end validation.
2. Send the request to a serverless API endpoint.
3. Run server-side validation.
4. Run spam protection.
5. Reject invalid requests with a clear error message.
6. Send the complete inquiry to the approved VActives inbox.
7. Send a branded confirmation email to the prospect.
8. Display a clear success state.
9. Offer the option to book a discovery call.
10. Optionally store the lead only if storage is explicitly approved.

---

# 5. Referral Form

Fields:

- Referrer Full Name — Required
- Referrer Email — Required
- Referrer Phone / WhatsApp — Optional
- Relationship to VActives
  - Client
  - Candidate
  - Partner
  - Friend
  - Other
- Referred Person Name — Required
- Referred Company — Required
- Referred Email or Phone — At least one required
- Company Country / Market — Required
- Hiring Need / Context — Recommended
- Consent / Confirmation — Required

After submission:

- Validate the data.
- Run spam protection.
- Send an internal referral notification.
- Display a success state.
- Optionally send a confirmation email to the referrer.

---

# 6. Candidate Application Path

A complete candidate portal will **not** be built in Phase One.

The website will include a button such as:

> Join Our Talent Network

The button will open an external candidate application form or approved applicant-tracking page supplied by VActives.

---

# 7. Phase-One Out of Scope

The following are not included in the initial project:

- Login / Signup
- Client accounts
- Candidate accounts
- Admin dashboard
- Client dashboard
- Applicant Tracking System built from scratch
- AI candidate matching
- Payment gateway
- Subscription checkout
- Complex salary calculator
- Staffed live chat
- Large searchable job board
- Multi-language website
- Employee monitoring
- Payroll
- Time tracking
- Custom CRM
- Large CMS
- Blog migration

Any new feature of this type requires a separate discussion regarding:

- Scope
- Cost
- Timeline
- Written approval

---

# 8. Frontend Technical Stack

## 8.1 Official Requirement

The agreement specifies **Vue.js**.

## 8.2 Approved Technical Implementation

The project will use:

- Vue 3
- Vite
- Vue Router
- Tailwind CSS
- JavaScript
- Git
- GitHub

---

# 9. Why Vue 3

Vue 3 is appropriate because it is:

- Explicitly agreed for the project.
- Well suited to a small marketing website.
- Component-based.
- Fast and maintainable.
- Suitable for reusable UI components.
- Strong for interactive forms and motion-heavy UI without requiring a heavier framework.

---

# 10. Why Vite

Vite will handle:

- Local development server
- Fast Hot Module Replacement
- Production build
- Asset bundling
- Frontend optimization

The project does not require a complex build pipeline.

---

# 11. Vue Router

Suggested routes:

```text
/
/services
/start-hiring
```

A fallback route will also be created for the custom 404 page.

---

# 12. Tailwind CSS

Tailwind CSS is an implementation choice, not a source requirement.

Benefits:

- Faster UI development.
- Consistent spacing and responsive behavior.
- Easier design-token usage.
- Reduced repetitive CSS.
- Easier implementation of a custom design system.

---

# 13. Proposed Project Structure

```text
vactives-website/
│
├── public/
│   ├── favicon/
│   ├── robots.txt
│   └── social-preview/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── logo/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── forms/
│   │   ├── cards/
│   │   └── sections/
│   │
│   ├── data/
│   │   ├── roles.js
│   │   ├── pricing.js
│   │   ├── faqs.js
│   │   └── testimonials.js
│   │
│   ├── pages/
│   │   ├── Home.vue
│   │   ├── Services.vue
│   │   ├── StartHiring.vue
│   │   └── NotFound.vue
│   │
│   ├── router/
│   ├── styles/
│   ├── App.vue
│   └── main.js
│
├── api/
│   ├── hiring.js
│   └── referral.js
│
├── .env.example
├── package.json
└── README.md
```

---

# 14. Reusable Components

Examples:

- Navbar
- Footer
- PrimaryButton
- SecondaryButton
- SectionHeading
- RoleCard
- IndustryCard
- PricingCard
- TestimonialCard
- FAQItem
- ProcessStep
- Input
- Select
- MultiSelect
- Textarea
- Checkbox
- FormError
- SuccessState

---

# 15. Data-Driven Content

Roles, pricing, FAQs, and testimonials should preferably be stored in structured data files such as:

```text
src/data/roles.js
src/data/pricing.js
src/data/faqs.js
src/data/testimonials.js
```

Benefits:

- Easier editing.
- Less duplication.
- Fewer inconsistencies.
- Same data can be reused across pages.
- No CMS is required for Phase One.

---

# 16. Design Direction

The official requirements describe the visual style as:

- Modern
- Clean
- Energetic
- Professional
- Spacious

The interface should avoid:

- Clutter
- Excessive animation
- Generic call-center styling
- Heavy page builders
- Repetitive AI-template appearance

---

# 17. Brand Implementation

Use:

- Approved VActives logo
- Approved brand colors
- Favicon
- Social preview image

Preferred logo format:

- SVG
- High-resolution transparent PNG as fallback

Do not:

- Redraw
- Recolor
- Stretch
- Crop
- Add effects

unless specifically approved by VActives.

---

# 18. Brand Colors

If VActives provides official HEX values, use them.

If no brand guide exists, the implementation can:

1. Extract colors from the approved logo.
2. Build a proposed palette.
3. Send it to VActives for approval.
4. Apply the approved palette consistently.

---

# 19. Typography

The requirements do not specify a mandatory font.

The final typography system should include:

- A professional web font.
- Strong display typography for headings.
- Highly readable body text.
- Defined heading scale.
- Defined body scale.
- Consistent line heights.
- Consistent font weights.

Typography will be treated as part of the design system.

---

# 20. Responsive Design

The website must work on:

- Desktop
- Tablet
- Mobile

Suggested test widths:

- 1440px
- 1280px
- 1024px
- 768px
- 430px
- 390px
- 375px

Acceptance expectations:

- No horizontal scrolling.
- No overlapping sections.
- No clipped content.
- No unreadable text.
- No broken cards.
- No broken forms.

---

# 21. Mobile UX

Mobile is a priority.

The design should account for:

- Comfortable touch targets.
- Appropriate button heights.
- Mobile-friendly form inputs.
- Hamburger navigation.
- Single-column layouts where appropriate.
- Vertical process timeline.
- Stacked pricing/content layouts.
- Lower visual density than desktop where necessary.

---

# 22. Motion and Animation

Allowed motion includes:

- Light entrance effects.
- Hover effects.
- Smooth section scrolling.
- Small transitions.

The experience should avoid:

- Excessive motion.
- Heavy parallax everywhere.
- Long blocking loading animations.
- Autoplay background video.

The site must respect:

```css
prefers-reduced-motion
```

---

# 23. Backend Architecture

## 23.1 Official Requirement

Only a **minimal backend** is required for form processing.

The project does not need:

- Permanent Node/Express server
- Authentication server
- Complex database
- Custom backend dashboard

## 23.2 Approved Technical Direction

Use a **serverless architecture**.

---

# 24. Backend Hosting

Recommended implementation: **Vercel Serverless Functions**.

```text
User
  ↓
Vue Frontend
  ↓
Vercel
  ↓
Serverless API
  ├── /api/hiring
  └── /api/referral
  ↓
Validation + Anti-Spam
  ↓
Email Service
```

---

# 25. Why Serverless

Serverless is appropriate because:

- The website is small.
- There is no authentication system.
- There is no required complex database.
- Backend logic is primarily form processing.
- Secrets can remain server-side.
- Deployment is simpler.
- It avoids unnecessary infrastructure.

---

# 26. Email Service

Recommended implementation choice: **Resend**.

### Hiring Form

Send:

1. Internal notification to VActives.
2. Branded confirmation to the prospect.

### Referral Form

Send:

1. Internal referral notification.
2. Optional confirmation to the referrer.

---

# 27. Environment Variables

Secrets must not be placed in frontend source code.

Example:

```text
RESEND_API_KEY=
VACTIVES_FORM_EMAIL=
TURNSTILE_SECRET_KEY=
```

Only safe public configuration may be exposed client-side when necessary.

---

# 28. Form Security

Requirements include:

- Front-end validation.
- Server-side validation.
- Spam protection.
- HTTPS.
- No exposed secrets.
- Clear error states.
- Clear success states.
- Avoid collecting unnecessary sensitive information.

---

# 29. Spam Protection

The requirements allow solutions such as:

- Honeypot
- CAPTCHA
- Rate limiting

Recommended implementation:

**Cloudflare Turnstile + basic server-side abuse protection**.

---

# 30. Rate Limiting

If added, rate limiting will help reduce:

- Spam submissions.
- Automated abuse.
- Repeated rapid requests.

The project does not require enterprise-grade anti-abuse infrastructure.

---

# 31. Database / Lead Storage

Lead storage is optional in the requirements.

Default Phase-One flow:

```text
Form → API → Email → Success
```

No database is required initially.

If VActives later requests searchable lead history, possible options include:

- Supabase
- Approved CRM
- Spreadsheet-based storage

Any additional storage must also consider:

- Access restrictions
- Data retention
- Consent timestamp
- Privacy-policy version
- Deletion process

---

# 32. Domain

A domain is the public website name, for example:

```text
vactives.com
```

A domain is **not** the hosting platform.

The client should own:

- Domain purchase.
- Registrar account.
- Domain renewal responsibility.

---

# 33. Hosting

Hosting is the infrastructure where the website runs.

Recommended platform: **Vercel**.

During development or staging, the website may be accessible through a temporary address such as:

```text
project-name.vercel.app
```

For production, a custom VActives-owned domain is strongly preferred.

---

# 34. Vercel vs Custom Domain

### Vercel

Hosts and deploys the website.

### Domain

Provides the professional branded URL.

A Vercel subdomain is technically sufficient for a working website, but it is not recommended as the long-term public brand address.

---

# 35. Search Engine Visibility

A custom domain alone does not guarantee Google ranking.

The website will be technically prepared for indexing, but:

- Search ranking cannot be guaranteed.
- The developer should not promise first-position results.
- SEO scope is primarily technical and on-page basics.

---

# 36. SEO Implementation

Implement:

- Unique page titles.
- Meta descriptions.
- One H1 per page.
- Logical H2/H3 structure.
- Clean URLs.
- Open Graph metadata.
- Canonical URLs.
- XML sitemap.
- robots.txt.
- Structured data.
- Image alt text.
- Semantic HTML.

---

# 37. Suggested URL Structure

```text
/
/services
/start-hiring
```

URLs should remain short and readable.

---

# 38. Structured Data

Use suitable schemas where appropriate, such as:

- Organization
- ProfessionalService
- EmploymentAgency

---

# 39. Suggested SEO Keyword Themes

- Virtual recruitment agency
- Hire virtual assistants
- Remote talent for real estate
- Cold caller recruitment
- Lead manager recruitment
- Property management virtual assistant
- Executive assistant recruitment
- Remote customer service hiring

SEO copy should remain natural. Avoid keyword stuffing.

---

# 40. Performance

Implementation should include:

- Image optimization.
- Modern image formats such as WebP/AVIF where appropriate.
- Lazy loading for below-the-fold media.
- Reduced unused CSS.
- Reduced unused JavaScript.
- No unnecessary autoplay video.
- No oversized background assets.
- Strong mobile loading performance.

---

# 41. Imagery

Preferred imagery should communicate:

- Remote work
- Recruitment
- International teams
- Business operations

Avoid:

- Repetitive call-center clichés.
- Poor-quality stock images.
- Decorative images with no purpose.
- Unnecessarily large media assets.

---

# 42. Accessibility

The implementation should include common accessibility best practices:

- Keyboard navigation.
- Visible focus states.
- Correct form labels.
- Image alt text.
- Semantic headings.
- Acceptable contrast.
- Logical heading order.
- Reduced-motion support.
- Accessible buttons and links.

---

# 43. Footer

The footer should include:

- Logo
- Short company description
- Navigation
- Contact details
- Markets served
- Social links
- Privacy Policy link
- Terms link
- Copyright

---

# 44. WhatsApp

Possible implementation:

- WhatsApp CTA in Contact section.
- Floating WhatsApp button.

Conditions:

- Must not cover content.
- Must not harm accessibility.
- Must work correctly on mobile.

---

# 45. Discovery Call

A custom calendar system will not be built.

VActives should provide an approved scheduling link, for example:

- Calendly
- Cal.com
- Google Appointment Scheduling
- Another approved scheduling platform

The website will either:

- Link to the scheduling page, or
- Embed it if that improves the final UX.

---

# 46. Analytics

Analytics will be installed after VActives approves the account/platform.

Recommended implementation: **Google Analytics 4 (GA4)**.

Suggested conversion events:

- Start Hiring clicks
- Discovery booking clicks
- WhatsApp clicks
- Email clicks
- Referral form starts
- Referral submissions
- Hiring form starts
- Hiring form submissions

---

# 47. Analytics Ownership

The analytics account should be:

- Owned by VActives, or
- Fully transferred to VActives during handover.

---

# 48. Cookie Consent

If non-essential tracking technologies are used and consent is required for the target markets, a suitable cookie notice/consent mechanism must be implemented.

The developer implements the mechanism but does not provide legal advice.

---

# 49. Legal Content

VActives should provide or legally approve:

- Privacy Policy
- Terms of Use
- Referral Program Terms
- Required disclaimers

The developer is responsible for:

- Technical implementation.
- Linking.
- Correct presentation.

The developer is **not** responsible for writing or approving legal advice.

---

# 50. Legal Pages vs Main Page Limit

The main agreement defines a 2–3 page website.

Therefore, Privacy Policy, Terms of Use, and Referral Terms should not automatically be treated as three additional full marketing pages without clarification.

Possible implementation options:

- Simple legal routes.
- Modal/legal overlay.
- External approved legal pages.

The final approach should be approved before launch.

---

# 51. GitHub Repository

GitHub will be used for source control.

During development, the repository may remain under the developer's account.

At handover, repository ownership/access should be handled so that VActives owns or fully controls the source code as required by the project documents.

Possible handover options:

- Transfer repository ownership.
- Transfer to a VActives GitHub organization.
- Provide full access and ownership according to the agreed handover process.

---

# 52. Git Workflow

The project is small, so a lightweight workflow is sufficient.

Option A:

```text
main
```

Option B:

```text
main
develop
```

Use the simpler option unless a separate staging branch becomes useful.

---

# 53. Suggested Commit Style

Examples:

```text
feat: build home hero section
feat: add roles grid
feat: implement hiring inquiry form
fix: resolve mobile navbar overflow
style: refine pricing cards
chore: configure SEO metadata
```

---

# 54. Assets and Information Required From VActives

## Brand

- Approved SVG logo (preferred)
- Transparent PNG logo
- Favicon source if available
- Brand HEX colors if available
- Logo usage preferences

## Contact

- Business email
- Phone / WhatsApp
- LinkedIn
- Social links
- Business hours

## Domain / Hosting

- Domain decision
- Registrar decision
- Hosting approval

## Scheduling

- Discovery-call scheduling link
- Meeting availability

## Pricing

- Final plans
- Final ranges
- Inclusions
- Exclusions
- Currency
- Applicable taxes, if any

## Referral Program

- Reward amount/percentage
- Eligibility rules
- Payout trigger
- Payment method
- Duplicate-referral rule
- Legal terms

## Testimonials

- Approved wording
- Client name
- Company
- Role/title
- Country/market
- Photo/logo permission where applicable
- Written permission

## Legal

- Privacy Policy
- Terms of Use
- Referral Program Terms
- Required disclaimers

## Form Inbox

- Email address that receives hiring and referral submissions

## Candidate Application

- External candidate application link

## Analytics

- Approved analytics account/access

## Approval Process

- One responsible decision-maker for final copy and design approval

---

# 55. Work That Can Start Before Client Assets Are Finalized

The developer can safely begin:

- GitHub repository setup.
- Vue 3 setup.
- Vite setup.
- Vue Router setup.
- Tailwind setup.
- Project folder structure.
- Reusable component structure.
- Three-page routing.
- Placeholder content structure.
- Form UI.
- Front-end validation architecture.
- FAQ component.
- Role/industry UI components.
- Responsive grid system.
- 404 page.
- Base SEO architecture.
- Accessibility structure.
- Local development environment.

---

# 56. Items That Should Not Be Finalized Before Client Input

Do not finalize:

- Final logo files.
- Brand colors.
- Final pricing.
- Testimonials.
- Contact details.
- WhatsApp number.
- Business email.
- Discovery-call link.
- Referral reward and terms.
- Legal copy.
- Candidate application link.
- Analytics account.
- Production domain.
- Production email-sender setup.

---

# 57. Design Approval Workflow

Recommended approval sequence:

1. Confirm page structure.
2. Confirm desktop visual direction.
3. Confirm mobile visual direction.
4. Confirm component consistency.
5. Confirm content hierarchy.
6. Confirm CTA placement.

---

# 58. Recommended Project Stages

## Stage 1 — Discovery

Confirm:

- Logo files
- Brand colors
- Domain
- Content
- Pricing
- Forms
- Referral terms
- Technical approach

## Stage 2 — Wireframe

Approve:

- Navigation
- Page order
- Section order
- Content hierarchy
- CTA placement

## Stage 3 — Visual Design

Approve:

- Desktop direction
- Mobile direction
- Colors
- Typography
- Cards/components
- Buttons
- Forms

## Stage 4 — Development

Build:

- Vue architecture
- Components
- Routing
- Data files
- Responsive UI
- Forms
- API endpoints

## Stage 5 — Content Review

VActives verifies:

- Copy
- Prices
- Testimonials
- Contact details
- Legal links

## Stage 6 — Quality Assurance

Test:

- Responsiveness
- Accessibility
- Forms
- SEO
- Speed
- Browser compatibility

## Stage 7 — Launch & Handover

- Deploy production build.
- Connect domain.
- Verify forms.
- Verify analytics.
- Transfer credentials/ownership.
- Provide source code.
- Provide maintenance/deployment notes.

---

# 59. Testing Plan

## Brand Testing

Verify:

- Approved logo is used.
- Logo proportions are correct.
- Brand colors are correct.
- No distortion or unintended effects.

## Navigation Testing

Test:

- Header links
- Footer links
- Anchor links
- CTAs
- Social links

Across:

- Desktop
- Tablet
- Mobile

## Responsive Testing

Verify there is no:

- Clipping
- Overlap
- Horizontal scrolling
- Tiny/unreadable text
- Broken buttons
- Broken cards
- Broken forms

## Hiring Form Testing

Test:

- Required fields
- Invalid email
- Invalid URL
- Empty fields
- Spam protection
- Successful submission
- API failure
- Internal email notification
- Prospect confirmation email

## Referral Form Testing

Test equivalent scenarios for the referral form.

---

# 60. Email Testing

Verify:

- VActives inbox receives notifications.
- Prospect confirmation emails are delivered.
- Referrer confirmation works if enabled.
- Secrets are never exposed.
- Subject lines are clear.
- Email body is readable on common clients.

---

# 61. SEO Testing

Verify:

- Page titles.
- Meta descriptions.
- H1 usage.
- Canonical URLs.
- Sitemap.
- robots.txt.
- Open Graph metadata.
- Structured data.

---

# 62. Performance Testing

Check:

- Oversized images.
- Image formats.
- Lazy loading.
- JavaScript bundle size.
- CSS size.
- Mobile loading performance.

---

# 63. Accessibility Testing

Check:

- Keyboard navigation.
- Focus visibility.
- Form labels.
- Alt text.
- Heading order.
- Color contrast.
- Reduced-motion behavior.

---

# 64. Security Testing

Verify:

- HTTPS is enabled.
- Secrets are server-side only.
- Spam protection works.
- Server-side validation works.
- Environment variables are configured correctly.
- API keys are not committed to Git.

---

# 65. Browser Testing

Test current common versions where practical:

- Chrome
- Safari
- Edge
- Firefox
- Mobile Safari
- Chrome on Android

---

# 66. Deployment

Recommended production platform: **Vercel**.

```text
GitHub Repository
   ↓
Vercel Project
   ↓
Build Vue Application
   ↓
Deploy Frontend + Serverless APIs
   ↓
Attach Custom Domain
```

---

# 67. Domain Connection

The client should own the domain.

DNS records will be configured to point the domain to the production Vercel project.

Example final production address:

```text
https://vactives.com
```

instead of relying permanently on:

```text
https://vactives.vercel.app
```

---

# 68. HTTPS

Verify:

- HTTPS works correctly.
- HTTP redirects to HTTPS.
- Forms submit over HTTPS.
- No insecure resources are loaded.

---

# 69. Ownership

At project completion, the following should be owned by or fully transferred to VActives:

- Domain
- Hosting
- Analytics
- Code repository
- Relevant third-party service accounts

---

# 70. Handover Deliverables

Handover includes:

- Working production website.
- Source code.
- Deployment notes.
- Access/ownership transfer.
- Basic content-editing guide.
- Relevant credentials transfer.
- Start of the agreed bug-fix support period.

---

# 71. Support Period

According to the agreement, the developer provides **30 days of bug-fix support after delivery** for programming issues caused by the implementation.

The support period does **not** include:

- New pages.
- New features.
- New integrations.
- New content production.
- Redesign requests.
- Scope expansion.

---

# 72. Revisions

The project price includes **two rounds of minor revisions** within the approved scope.

Examples of minor revisions:

- Text adjustments.
- Spacing adjustments.
- Minor color refinements.
- Button wording changes.
- Small section-order refinements.

Examples of major changes:

- Adding a new page.
- Adding a dashboard.
- Changing the architecture significantly.
- Adding a job board.
- Full redesign.
- Adding authentication.
- Adding a major new integration.

Major changes require a new cost/timeline agreement.

---

# 73. Timeline

According to the agreement:

- Project start date: 22 August 2026.
- Target implementation period: approximately one month.
- Maximum target period: approximately one and a half months.
- This assumes the client provides required content, feedback, and approvals on time.

If the client delays:

- Content delivery
- Assets
- Feedback
- Approval

then the project timeline extends by the corresponding delay period.

---

# 74. Project Payment

Total project value:

**15,000 EGP**

Payment structure:

1. 5,000 EGP at project start.
2. 5,000 EGP when implementation is complete and before final handover.
3. 5,000 EGP within a maximum of 30 days from delivery.

---

# 75. Client Responsibilities

The client is responsible for providing:

- Logo
- Text content
- Images
- Pricing
- Contact information
- Required account links
- Feedback
- Approvals

The client is also responsible for the cost of:

- Domain
- Hosting
- Paid third-party services

unless otherwise agreed in writing.

---

# 76. Developer Responsibilities

The developer is responsible for:

- Website design and implementation.
- Vue development.
- Responsive behavior.
- Basic technical SEO.
- Basic performance optimization.
- Forms.
- Secure form processing.
- Client-provided content integration.
- Deployment.
- Source-code delivery.
- Agreed bug-fix support.

---

# 77. Scope Protection Rule

Any page, feature, or integration not included in:

- The Requirements Brief,
- The Agreement, or
- A later written approval

must be treated as **Out of Scope** until separately approved.

---

# 78. Implementation Feature Groups

For development planning, the project can be divided into these implementation groups:

1. Responsive Navbar
2. Sticky Header
3. Mobile Menu
4. Hero
5. CTA System
6. Market / Trust Bar
7. About Section
8. Audience / Industry Presentation
9. Roles Presentation
10. How It Works
11. Why Choose Us
12. Testimonials
13. Service Overview
14. Role Catalogue
15. Pricing
16. Hiring Timeline
17. Replacement Support
18. Referral Program
19. FAQ Accordion
20. Hiring Inquiry Form
21. Referral Form
22. Discovery Call Link
23. Direct Contact Links
24. Candidate External Link
25. Client-Side Validation
26. Server-Side Form Handler
27. Anti-Spam
28. Email Notifications
29. Success / Error States
30. SEO Metadata
31. Sitemap
32. robots.txt
33. Structured Data
34. Analytics Events
35. Accessibility Basics
36. Performance Optimization
37. Custom 404 Page
38. Deployment
39. Domain Connection
40. Handover

**Important:** this is an implementation breakdown, not a claim that the contract contains forty separate features.

---

# 79. Final Technical Architecture

```text
                        ┌────────────────────────┐
                        │     Custom Domain      │
                        │     vactives.com       │
                        └───────────┬────────────┘
                                    │
                                    ▼
                        ┌────────────────────────┐
                        │         Vercel         │
                        └───────────┬────────────┘
                                    │
                 ┌──────────────────┴─────────────────┐
                 │                                    │
                 ▼                                    ▼
        ┌─────────────────┐                 ┌─────────────────┐
        │  Vue 3 Frontend │                 │ Serverless APIs │
        │  + Vue Router   │                 │ /api/hiring     │
        │  + Tailwind     │                 │ /api/referral   │
        └─────────────────┘                 └────────┬────────┘
                                                    │
                          ┌─────────────────────────┼──────────────────────────┐
                          │                         │                          │
                          ▼                         ▼                          ▼
                     Validation               Anti-Spam                  Resend
                     Server Side              Turnstile                  Email
```

---

# 80. Optional Future Architecture

If lead storage is later requested:

```text
Form
 ↓
Serverless API
 ├── Email
 └── Database / CRM
```

Possible options:

- Supabase
- Approved CRM

This is not required for the initial phase unless explicitly added to scope.

---

# 81. Launch Approval Checklist

- [ ] Approved logo received
- [ ] Brand colors approved
- [ ] Domain confirmed
- [ ] Hosting confirmed
- [ ] Business email confirmed
- [ ] WhatsApp confirmed
- [ ] Discovery-call link confirmed
- [ ] Pricing approved
- [ ] Referral reward approved
- [ ] Referral terms approved
- [ ] Testimonials verified
- [ ] Privacy Policy approved
- [ ] Terms of Use approved
- [ ] Forms tested
- [ ] Real inbox tested
- [ ] Mobile layout approved
- [ ] Analytics verified
- [ ] SEO verified
- [ ] HTTPS verified
- [ ] Source code ready
- [ ] Ownership transfer ready

---

# 82. Developer Implementation Checklist

## Setup

- [ ] Create GitHub repository
- [ ] Initialize Vue 3 + Vite
- [ ] Install Vue Router
- [ ] Configure Tailwind CSS
- [ ] Create folder structure
- [ ] Create base layout

## Global UI

- [ ] Navbar
- [ ] Mobile menu
- [ ] Footer
- [ ] Buttons
- [ ] Typography
- [ ] Spacing system
- [ ] Container system
- [ ] Focus states

## Home

- [ ] Hero
- [ ] Trust bar
- [ ] About
- [ ] Who We Serve
- [ ] Roles
- [ ] How It Works
- [ ] Why Choose Us
- [ ] Testimonials
- [ ] Final CTA

## Services & Pricing

- [ ] Service overview
- [ ] Role catalogue
- [ ] Included services
- [ ] Pricing
- [ ] Timeline
- [ ] Replacement support
- [ ] Referral section
- [ ] FAQ

## Contact / Start Hiring

- [ ] Start Hiring introduction
- [ ] Hiring Form
- [ ] Discovery Call
- [ ] Direct contact links
- [ ] Referral Form
- [ ] Candidate CTA
- [ ] Consent UI

## Backend

- [ ] Hiring API
- [ ] Referral API
- [ ] Server-side validation
- [ ] Email integration
- [ ] Anti-spam
- [ ] Error handling
- [ ] Success handling
- [ ] Environment variables

## SEO

- [ ] Titles
- [ ] Meta descriptions
- [ ] H1 structure
- [ ] Canonicals
- [ ] Sitemap
- [ ] robots.txt
- [ ] Open Graph
- [ ] Structured Data

## Performance

- [ ] Optimize images
- [ ] Lazy loading
- [ ] Review bundle size
- [ ] Mobile performance

## Accessibility

- [ ] Keyboard navigation
- [ ] Focus states
- [ ] Form labels
- [ ] Alt text
- [ ] Heading order
- [ ] Contrast
- [ ] Reduced motion

## QA

- [ ] Desktop
- [ ] Tablet
- [ ] Mobile
- [ ] Forms
- [ ] Emails
- [ ] Spam protection
- [ ] Links
- [ ] SEO
- [ ] Analytics
- [ ] Browser testing

## Launch

- [ ] Vercel deployment
- [ ] Connect custom domain
- [ ] HTTPS
- [ ] Production environment variables
- [ ] Production form test
- [ ] Production analytics test

## Handover

- [ ] Source code
- [ ] Repository ownership/access
- [ ] Hosting access
- [ ] Domain confirmed
- [ ] Analytics ownership
- [ ] Third-party service ownership
- [ ] Deployment notes
- [ ] Content-editing notes
- [ ] 30-day bug-fix support starts

---

# 83. Client Request Checklist — What We Need From VActives

- [ ] Original approved logo (SVG preferred)
- [ ] Transparent PNG logo
- [ ] Brand HEX colors if available
- [ ] Favicon asset if available
- [ ] Business email
- [ ] Form destination inbox
- [ ] WhatsApp / phone
- [ ] LinkedIn
- [ ] Social links
- [ ] Business hours
- [ ] Final pricing
- [ ] Pricing inclusions/exclusions
- [ ] Currency confirmation
- [ ] Referral reward
- [ ] Referral terms
- [ ] Approved testimonials
- [ ] Privacy Policy
- [ ] Terms of Use
- [ ] Referral Terms if required
- [ ] Candidate application link
- [ ] Discovery call link
- [ ] Domain decision
- [ ] Hosting approval
- [ ] Analytics account/access
- [ ] Final content/design approver

---

# 84. Definition of Done

The project is considered complete when:

1. The three main pages are implemented.
2. Responsive behavior is correct.
3. All agreed sections are present.
4. Hiring Inquiry Form works.
5. Referral Form works.
6. Required email notifications work.
7. Spam protection works.
8. No secrets are exposed in frontend code.
9. Basic SEO is implemented.
10. Approved analytics works.
11. Contact links are correct.
12. Pricing and content are approved.
13. Legal links are present.
14. Production hosting/domain works.
15. Source code is ready for handover.
16. Client review is completed.
17. Agreed revisions are completed.
18. Handover is completed.
19. Ownership is transferred according to the agreement and payment status.
20. The 30-day bug-fix support period begins.

---

# 85. Final Technical Decisions Snapshot

```text
Project Type:       Marketing + Lead Generation Website

Pages:              3
                    Home
                    Services & Pricing
                    Contact / Start Hiring

Frontend:           Vue 3
Build Tool:         Vite
Routing:            Vue Router
Styling:            Tailwind CSS
Language:           JavaScript

Backend:            Minimal Serverless Backend
Hosting:            Vercel
Serverless APIs:    Vercel Functions

Email:              Resend (recommended implementation choice)
Spam Protection:    Cloudflare Turnstile (recommended implementation choice)

Database:           None initially
Optional Storage:   Supabase / approved CRM if later requested

Analytics:          Approved analytics account
Suggested:          GA4

SEO:                Technical + On-page basics

Authentication:     None
Dashboard:          None
Payment:            None
Job Portal:         None
ATS:                None
CMS:                None
CRM:                None in Phase One

Repository:         GitHub
Production Domain:  Client-owned custom domain
Support:            30 days bug fixes
Revisions:          2 minor revision rounds
```

---

# 86. Scope Protection Note

This specification does not create new obligations beyond the original project agreement and requirements.

Its purpose is to convert the approved documents into a clear implementation plan.

Technical choices such as:

- Tailwind CSS
- Vercel
- Resend
- Cloudflare Turnstile
- Optional Supabase storage

are implementation methods, not automatic scope expansion.

If a new requirement appears that is not included in the source documents, it should be evaluated separately before implementation.

---

# 87. Source Reference Map

## Website Requirements Brief

Defines:

- Website purpose
- Target audience
- 2–3 page limit
- Required sections
- Supported roles
- Initial website copy
- Indicative pricing
- Forms
- Minimal backend
- Security requirements
- UX requirements
- SEO
- Analytics
- Testing
- Client-provided inputs
- Out-of-scope items

## Website Agreement

Defines:

- Vue.js implementation
- Responsive website requirement
- 2–3 page scope
- Forms
- Basic SEO and performance work
- Source-code delivery
- Out-of-scope protection
- Timeline
- Payment terms
- Revision rounds
- Support period
- Client responsibilities
- Ownership and handover

---

# End of Specification

**VActives Website — Full Project Implementation Specification**

This document is the working implementation reference for the project and should be used throughout development to keep the final website aligned with the approved requirements and agreement.