# VActives Hero Design QA

## Evidence

- Source visual truth: `work/design-qa/source-hero-reference.png`
- Final desktop implementation: `work/design-qa/implementation-desktop-final.png`
- Final mobile implementation: `work/design-qa/implementation-mobile-final.png`
- Full comparison: `work/design-qa/comparison-full-final.jpg`
- Desktop viewport: 1536 x 1024 CSS px; source and implementation are both 1536 x 1024 px at 1x density, so no density normalization was required.
- Mobile viewport: 390 x 844 CSS px; implementation capture is 390 x 844 px at 1x density.
- State: home route, page top, entrance motion complete, mobile menu closed.

## Full-view comparison evidence

The implementation preserves the source composition: compact header, left-aligned conversion copy, paired CTAs, market trust row, a large recruitment tableau on the right, and a compact five-step hiring journey below. The requested VActives adaptation is intentionally calmer than the source: the illustration is smaller, whitespace is increased, and the logo-derived emerald/champagne palette replaces the source's dominant navy/blue palette.

## Focused comparison evidence

- Copy region: `work/design-qa/comparison-copy-v1.jpg` confirms equivalent headline hierarchy, four-line wrapping, supporting-copy density, CTA grouping, and trust-row placement.
- Illustration region: `work/design-qa/comparison-visual-v1.jpg` confirms the required recruiter, remote professional, hiring brief, candidate cards, soft 3D material language, and lower journey relationship.
- Mobile: the 390 px audit found no document-level horizontal overflow, clipped copy, overlapping controls, or unusable tap targets. The logo component intentionally hides only the supplied PNG's excess white canvas; the visible logo artwork is not cropped.

## Required fidelity surfaces

- Fonts and typography: Plus Jakarta Sans is bundled locally. The headline uses an 800 weight, tight display tracking, four deliberate lines on desktop, and safe wrapping on mobile. Supporting and utility text retain clear hierarchy.
- Spacing and layout rhythm: the desktop two-column balance, generous cream field, CTA spacing, image scale, rounded outer frame, and five-step rail align with the reference direction. Tablet and mobile collapse to one column without overlaps.
- Colors and visual tokens: the implementation consistently maps the approved logo direction to emerald, champagne, teal, warm ivory, and deep green text. Contrast remains readable across primary copy and controls.
- Image quality and asset fidelity: the hero uses a dedicated 1536 x 1024 generated raster asset rather than CSS/SVG stand-ins. It is sharp at the intended slot, uses a matching ivory edge treatment, and has no checkerboard, watermark, or embedded copy.
- Copy and content: the approved headline, VActives value proposition, Start Hiring path, markets, and hiring journey are coherent and aligned with the supplied brief.
- Icons: one consistent Tabler icon family is used for controls, trust metadata, and process steps.
- Interactions and accessibility: mobile menu open/close, Start Hiring navigation, router back navigation, focus-ready semantic links/buttons, alt text, reduced-motion handling, and console checks passed.

## Comparison history

### Iteration 1

- P2 typography: the initial browser render used a system fallback and appeared too light versus the reference.
- P2 image integration: the first background token made the raster asset's rectangular bounds visible.
- Fixes: bundled Plus Jakarta Sans, raised the headline to weight 800, refined the four-line scale, sampled the illustration edge color, and removed the blend treatment.
- Post-fix evidence: `work/design-qa/implementation-desktop-v3.png` and `work/design-qa/comparison-full-v1.jpg` show the corrected hierarchy and seamless image field.

### Iteration 2

- P2 process continuity: the initial implementation summarized the journey in four steps while the source visibly resolves with a fifth Ready to Hire state.
- Fix: added Ready to Hire and rebalanced the rail to five columns.
- Post-fix evidence: `work/design-qa/implementation-desktop-final.png` and `work/design-qa/comparison-full-final.jpg` show the complete journey.

## Findings

No actionable P0, P1, or P2 findings remain.

## Follow-up polish

- P3: replace the supplied oversized-canvas logo PNG with an official transparent PNG or SVG when one becomes available. The current component safely frames the visible artwork without altering the file.

## Primary interactions tested

- Desktop and mobile route rendering.
- Mobile menu opens, exposes navigation, and closes.
- Start Hiring CTA navigates to `/start-hiring`.
- Browser back returns to `/`.
- Browser console checked after the final render: no errors or warnings.

final result: passed
