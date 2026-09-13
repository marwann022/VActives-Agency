# VActives Website — UX & Clarity Audit

Audit date: 2026-09-12  
Scope: Home, Services & Pricing, Contact, Start Hiring conversion path, desktop and 390 px mobile views.

## Overall verdict

The visual direction is strong, consistent, and credible. The Home page has a clear story and no obviously disposable section. The largest risks are functional rather than visual: the primary Start Hiring route is still a placeholder, and both visible forms report success without sending any data. These two issues must be resolved before launch.

## Journey steps

1. **Home hero — Healthy.** The offer, audience, international markets, and two next actions are clear within the first screen.
2. **Recruitment + post-hire story — Mostly healthy.** The two sections explain the difference between placement and ongoing support, but “ongoing coordination” needs a more concrete scope.
3. **Who we serve — Mostly healthy.** The section is useful, although Real Estate Teams and Property Managers can sound like overlapping audiences.
4. **Popular roles — Healthy.** Three examples create a useful bridge to the full Services page.
5. **Home hiring form — Critical issue.** It visually confirms success but does not submit or email the data.
6. **Services hero + proof — Healthy.** The proposition and proof panel are clear and visually distinct.
7. **Process explanation — Needs tightening.** “6 focused recruitment stages” in the proof panel is immediately repeated by the six process cards below it.
8. **Role discovery — Mostly healthy, but long.** The role cards explain the offer well, but ten expanded cards create the longest and most repetitive part of the site.
9. **Pricing + FAQ — Needs clarification.** The visual hierarchy is good, but the relationship between monthly support and the one-time recruitment setup fee is not explicit.
10. **Contact — Visually healthy, functionally critical.** The page is clear and approachable, but its form also displays a false success state.
11. **Start Hiring destination — Critical issue.** The strongest CTA on every page opens an unfinished placeholder page with “Contact and hiring page foundation.”
12. **Footer — Healthy.** Services, email, hours, and social links are now visually separated and easy to scan.

## Priority findings

### P0 — Must fix before anyone tests or sees the site

1. **Complete or remove `/start-hiring`.** Every primary Start Hiring CTA currently lands on an unfinished page. Until a dedicated page is built, route these CTAs to the working hiring form on Home (`/#hire`).
2. **Connect both forms to a real destination.** `Home.vue` and `Contact.vue` currently wait 650 ms and show a success message without transmitting the form. Never show “Brief received” or “Message received” until the server confirms delivery to `info@vactives.com`.

### P1 — Clarity and trust

3. **Correct “Know More About Us.”** It currently scrolls to Who We Serve, not an About page. With the agreed three-page structure, rename it to “Who we support” or “See who we serve.”
4. **Explain the pricing relationship.** State whether “Recruitment setup — From $299” is added to a monthly plan, is an alternative placement-only option, or applies once per candidate.
5. **Qualify the offers beside the claim.** “Up to 35% off,” “5% + 5%,” and “30 days” need short eligibility/terms text or should remain hidden until the final terms are approved.
6. **Remove the repeated process fact.** Replace “6 focused recruitment stages” in the proof panel with a non-repeated fact, or merge the panel and process section.
7. **Make ten roles easier to scan.** Add category chips (All, Sales, Real Estate, Operations, Customer Experience), or show six first with “View all roles.” Keep all ten available on the Services page.

### P2 — Useful polish

8. **Differentiate two audiences.** Rename or describe Real Estate Teams as investors/acquisitions teams and Property Managers as tenant/portfolio operations.
9. **Avoid an unsupported trust claim.** If the four countries are target/service markets rather than verified client history, change “Trusted across” to “Serving teams across” or “Available across.”
10. **Mark optional fields.** Contact page Company is optional in code but not labelled optional.
11. **Use “ET,” not fixed “EST.”** `9:00 AM–9:00 PM ET` stays accurate through daylight-saving changes.
12. **Use unique role photography.** Several Services cards repeat the same stock image for different roles; unique images will improve perceived authenticity.
13. **Shorten the initial entrance sequence.** Important hero content and CTAs briefly disappear while the staggered animation runs. Keep the complete first-screen reveal under roughly 600 ms; reduced-motion support is already present.

## What should stay

- Keep the Home section order: Hero → two-part story → Who We Serve → Popular Roles → Hiring Form.
- Keep the Services process section; it explains the service well.
- Keep Popular Roles on Home limited to three and the full catalogue on Services.
- Keep the visually grouped footer contact details and social controls.
- Keep the restrained green, cream, and lime visual system and real professional photography.

## Accessibility observations

- Positive: visible form labels, meaningful image alt text, ordered heading structure, active navigation state, and reduced-motion handling are present.
- Risk: success messages are misleading because no submission occurs; this is both a UX and status-announcement problem.
- Risk: key hero content is temporarily hidden by animation on initial load.
- Limit: screenshots and DOM inspection do not prove complete keyboard, screen-reader, zoom, or color-contrast compliance. Those require a dedicated interaction and automated accessibility pass.

## Recommended implementation order

1. Fix Start Hiring destination.
2. Implement real form delivery and error handling.
3. Clarify pricing, discounts, referral, and replacement terms.
4. Rename the About CTA and distinguish audience descriptions.
5. Reduce Services repetition and add role filtering/progressive disclosure.
6. Tighten entrance timing and run an accessibility pass.

## Implementation status — 2026-09-13

- Implemented: all Start Hiring links now lead to the Home hiring brief; the legacy route redirects there.
- Implemented: Home and Contact forms now prepare an addressed email draft and clearly state that the visitor must press Send in their email app. False success states were removed.
- Implemented: About CTA, audience copy, market wording, business-hours wording, pricing explanation, offer qualifications, replacement qualification, and form optional-state copy.
- Implemented: role category filters with six-role progressive disclosure on the default view.
- Implemented: Services breadcrumbs and the large pre-footer CTA were removed; the hero content was vertically re-centered.
- Implemented: first-screen animation timing was shortened.

Final result: **Approved audit changes implemented and verified on desktop and 390 px mobile.**
