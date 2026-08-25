# VActives Agency — Home Hero: "The Talent Stack" Creative & Technical Blueprint

This document outlines the architectural blueprint, creative vision, scroll-story sequence, and component breakdown for the upcoming **Home Hero: "The Talent Stack"**.

---

## 1. Concept & Visual Philosophy

### Concept Name: **THE TALENT STACK**
Instead of a generic SaaS hero (headline + paragraph + app screenshot/CRM dashboard), VActives will feature a **large, layered visual recruitment dossier** representing the physical journey of virtual hiring:

$$\text{Hiring Brief} \longrightarrow \text{Sourcing} \longrightarrow \text{Screening} \longrightarrow \text{Filtering} \longrightarrow \text{Shortlist} \longrightarrow \text{Hire}$$

### Visual Character
- **Editorial & Tactile**: Structured paper-like dossiers, hiring briefs, candidate profile sheets, thin architectural borders, crisp typography, and restrained radius.
- **Physical Depth**: Depth created via layering, subtle z-index shifts, overlapping bounds, and slight angles—**no** heavy glassmorphism, gradient glows, or fake 3D blobs.
- **Provisional Brand Alignment**: Fully compatible with Phase 1A design tokens (`bg-bg-surface`, `border-border`, `text-main`, `text-secondary`, `primary`).

---

## 2. Editorial Hierarchy & Copy Structure

### Approved Production Copy
- **Eyebrow**: `VACTIVES / VIRTUAL RECRUITMENT AGENCY`
- **Headline**: `"Build a Reliable Remote Team Without the Hiring Guesswork."`
- **Supporting Copy**: *"VActives connects growing businesses with screened remote professionals across sales, operations, administration, and customer support."*
- **Primary CTAs**:
  - Primary: `<BaseButton variant="primary" size="lg" to="/start-hiring" showArrow>Start Hiring</BaseButton>`
  - Secondary: `<BaseButton variant="secondary" size="lg" to="/services">Explore Roles</BaseButton>`
- **Market Scope Badge**: `USA · UK · CANADA · AUSTRALIA`

---

## 3. The 6-State Scroll Story Sequence

When implemented with GSAP ScrollTrigger on desktop, the visual object will progress through 6 narrative stages as the user scrolls:

| Stage | Narrative State | Visual Behavior | Brand Message |
| :--- | :--- | :--- | :--- |
| **State 1** | **The Brief** | The hiring brief card is the primary visible element (Role, Timezone, Schedule). | *"We understand what you need."* |
| **State 2** | **Talent Sourcing** | Candidate dossier cards enter the visual stack dynamically from behind the brief. | *"We find relevant talent."* |
| **State 3** | **Screening** | Stack expands slightly; editorial tags reveal (`Communication`, `Role Fit`, `Available`). | *"We screen before you interview."* |
| **State 4** | **Filtering** | Unmatched candidate layers slide back or fade out cleanly; top talent remains. | *"We remove the noise."* |
| **State 5** | **Shortlist** | Remaining candidate cards align into a clean, focused `"SHORTLIST"` formation. | *"Your top candidates ready."* |
| **State 6** | **Ready to Hire** | Visual resolves into one final card connecting directly to the `Start Hiring` CTA. | *"Your next hire. Ready."* |

---

## 4. Technical Responsibilities: GSAP vs. CSS

### CSS Responsibilities
- **Layout & Structure**: 12-column grid (`flex flex-col lg:grid lg:grid-cols-12 gap-8`).
- **Typography & Colors**: Utilizing `font-display`, `text-display-lg`, `text-main`, `border-border`, and `bg-bg-surface`.
- **Micro-interactions**: Hover elevation (`hover:-translate-y-[1px]`), button arrow translation (`group-hover:translate-x-1`), border-color transitions.
- **Base Motion Limits**: Hardware-accelerated properties (`transform`, `opacity`, `clip-path`).

### GSAP & ScrollTrigger Responsibilities
- **Scroll Pinning**: Desktop section pinning (`pin: true`, `scrub: 0.8`) during the 6-stage timeline sequence.
- **Layered Choreography**: Staggered card translation, stack reorganizations, clip-path mask reveals, and line expansions.
- **Lifecycle Safety**: Managed inside `useGsap()` composable to guarantee complete reversion (`ctx.revert()`) on component unmount and prevent memory leaks.
- **Accessibility Fallback**: Bypassed entirely when `useReducedMotion()` returns `true` (resolves immediately to final static state).

---

## 5. Responsive Strategy: Desktop vs. Mobile

### Desktop (>= 1024px)
- **Layout**: Asymmetric 2-zone composition. Columns 1–6 house the editorial copy & CTAs; Columns 7–12 house the interactive Talent Stack with an outer full-width wrapper allowing visual overflow.
- **Motion**: Multi-stage pinned GSAP ScrollTrigger animation with layered depth.

### Mobile (< 1024px)
- **Layout**: Single-column linear stacking (`Headline -> CTAs -> Talent Stack`).
- **Motion**: **No pinned scroll-jacking**. Uses standard vertical stacking with lightweight entrance reveals (`fadeInUp` / `staggerReveal`).
- **Performance**: Reduced layer count; maximum touch target size maintained (>= 44px). Zero horizontal overflow.

---

## 6. Proposed Component Breakdown

When implementation begins in Phase 2B, the Hero will be organized under `src/components/sections/hero/`:

```
src/components/sections/hero/
├── HomeHero.vue             # Main section container, grid layout, text & CTA block
├── TalentStack.vue          # Container for the visual dossier stack & GSAP timeline setup
├── HiringBriefCard.vue      # Tactile hiring brief card component
├── CandidateCard.vue        # Candidate dossier sheet component
└── ScreeningIndicator.vue   # Editorial screening tag/badge component
```

---

## 7. Global Shell Compatibility & Preparation

- **Fixed Header Offset**: Main wrapper `<main class="flex-grow pt-20">` in `App.vue` provides appropriate top breathing room (`80px`), ensuring fixed header `SiteHeader.vue` does not overlap Hero typography.
- **Full-Width Outer Wrapper**: `HomeHero.vue` will use a full-width outer section wrapper while constraining headline text alignment to `BaseContainer`.

---

> [!NOTE]
> **Implementation Status**: This blueprint documents the creative and technical plan. **No production Hero markup or GSAP timelines have been built yet.** Implementation will begin upon approval.
