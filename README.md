# VActives Website

Official website for **VActives**, a virtual recruitment agency connecting businesses with skilled remote professionals across the United States, United Kingdom, Canada, and Australia.

The website is designed to present VActives' recruitment services, available roles, pricing, hiring process, referral program, and contact options through a modern, responsive, and conversion-focused experience.

## Project Overview

### SEO and email setup (implemented, activation pending)

Run `npm ci`, then `npm run build && npm test`. The build prerenders the three pages and generates metadata, brand images, sitemap and robots.txt. Home and Contact use `/api/inquiry` with Resend and Turnstile; account credentials and a production delivery test are still required. See [the launch checklist](docs/seo-email-launch.md) for environment variables, domain verification and Google Search Console steps. The feature lists below describe the original scope, not a completed acceptance checklist.

The VActives website is a small marketing and lead-generation website focused on helping potential clients:

- Learn about VActives and its recruitment services
- Explore available remote roles
- Understand the recruitment process
- Review service pricing
- Submit a hiring inquiry
- Book a discovery call
- Refer potential clients
- Contact VActives directly

## Website Structure

The website is planned as a **3-page experience**:

### Home

- Hero section
- Markets served
- About VActives
- Industries served
- Roles VActives recruits
- How the recruitment process works
- Why choose VActives
- Testimonials
- Call-to-action sections

### Services & Pricing

- Service overview
- Role catalogue
- Services included
- Pricing
- Recruitment timeline
- Replacement support
- Referral program
- Frequently asked questions

### Contact / Start Hiring

- Hiring inquiry form
- Discovery call booking
- Direct contact options
- Referral form
- Candidate application link
- Consent and privacy information

## Tech Stack

### Frontend

- Vue 3
- Vite
- Vue Router
- Tailwind CSS
- JavaScript

### Backend

The project uses a lightweight serverless architecture for form processing.

Planned services:

- Vercel Serverless Functions
- Resend for email notifications
- Cloudflare Turnstile for spam protection
- Server-side form validation

No traditional backend server, authentication system, or complex database is required for the initial release.

## Deployment

The production website will be deployed using **Vercel** and connected to the official VActives domain.

```text
User
  ↓
VActives Website
  ↓
Vue Frontend
  ↓
Vercel Serverless Functions
  ↓
Email / Form Processing
```

## Forms

The website includes two main forms:

### Hiring Inquiry

Used by companies interested in hiring remote professionals.

### Referral Form

Used by clients, partners, candidates, and professional contacts to refer potential businesses to VActives.

Forms will include:

- Client-side validation
- Server-side validation
- Spam protection
- Success and error states
- Email notifications
- Consent handling

## SEO

The website will include basic technical and on-page SEO implementation:

- Unique page titles
- Meta descriptions
- Semantic HTML
- Structured heading hierarchy
- Open Graph metadata
- Canonical URLs
- XML sitemap
- robots.txt
- Structured data
- Optimized URLs
- Image alt text

## Responsive Design

The website will be fully responsive across:

- Desktop
- Tablet
- Mobile

Mobile usability and performance are a priority.

## Accessibility

The project will follow common accessibility best practices including:

- Keyboard navigation
- Visible focus states
- Proper form labels
- Accessible color contrast
- Semantic HTML
- Alternative text for images
- Reduced-motion support where appropriate

## Performance

Performance considerations include:

- Optimized images
- Modern image formats
- Lazy loading
- Minimal unnecessary JavaScript
- Reusable Vue components
- Mobile-first performance optimization

## Project Scope

The initial release does **not** include:

- User authentication
- Client accounts
- Candidate accounts
- Admin dashboard
- Client portal
- Full job board
- Applicant tracking system
- AI candidate matching
- Online payments
- Subscription system
- Payroll system
- Employee monitoring
- Time tracking
- Custom CRM
- Large CMS
- Multi-language support

These may be considered as future enhancements.

## Project Status

🚧 **Currently in development**

Development stages:

1. Project setup
2. UI/UX implementation
3. Vue development
4. Form integration
5. SEO and analytics
6. Responsive testing
7. Performance optimization
8. Deployment
9. Final QA
10. Production launch

## Repository

This repository contains the source code for the VActives website.

```text
vactives-website/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── router/
│   └── styles/
│
├── api/
│
└── README.md
```

## Developer

Developed by **Marwan Ashraf**

---

© VActives. All rights reserved.
