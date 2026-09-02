# VActives Website Design System

**Document status:** Authoritative implementation reference  
**Version:** 1.0  
**Last verified:** 2026-09-02  
**Applies to:** VActives Agency responsive marketing website  
**Implementation:** Vue 3, Vue Router, Tailwind CSS, scoped CSS, GSAP, GSAP ScrollTrigger, Tabler Icons

---

## 1. Purpose and source-of-truth hierarchy

This document describes the design system that is actually implemented in the VActives repository. It is intended for designers, frontend developers, reviewers, and future maintainers.

When this document and the implementation differ, use the following priority order:

1. Approved client screenshots and visual decisions.
2. The current production components and page-level scoped styles.
3. Foundational tokens in `src/styles/tokens.css`, `src/styles/typography.css`, and `src/styles/motion.css`.
4. Tailwind mappings in `tailwind.config.js`.
5. This document.

The page-level CSS currently contains a small number of deliberate values that are more specific than the foundational tokens. Those values are documented below as **runtime exceptions**. Do not silently replace them with similar token values because small color and spacing differences materially affect the approved visual result.

---

## 2. Brand direction

### 2.1 Design personality

The VActives visual identity is:

- Professional, trustworthy, and human.
- Warm rather than clinical.
- Energetic without feeling childish or noisy.
- Editorial rather than dashboard-like.
- Spacious, with strong typography and controlled decorative detail.
- Conversion-focused without looking like a generic SaaS template.

### 2.2 Core visual principles

1. **Strong hierarchy:** oversized, tightly tracked headings carry the page.
2. **Human photography:** real professionals and real working environments are preferred over AI-generated people or 3D illustrations.
3. **Warm neutrality:** white and ivory surfaces prevent the green palette from becoming visually heavy.
4. **Deep green anchors:** dark emerald sections signal trust and divide the long page into clear chapters.
5. **Controlled motion:** animation supports reading order and interaction feedback; it must never hijack scrolling.
6. **Small, meaningful accents:** lime, champagne, lines, badges, and status icons are used sparingly.
7. **Simple geometry:** rectangles with moderate radii, large image crops, pill CTAs, and occasional circles.

### 2.3 Content voice

- Clear, confident, direct, and helpful.
- Avoid inflated claims and recruitment jargon.
- Headings should be short and benefit-led.
- Supporting copy should explain the business outcome in plain English.
- CTAs use action language: “Start Hiring”, “Contact Us”, “Explore All Roles”, and “Send Message”.

---

## 3. Technology and implementation conventions

### 3.1 Core packages

| Concern | Package / technique | Current role |
|---|---|---|
| UI runtime | Vue 3 | Components, templates, state, and forms |
| Routing | Vue Router 4 | Home, Services & Pricing, Contact, Start Hiring, and fallback routes |
| Utility styling | Tailwind CSS 3 | Base components, layout utilities, and token aliases |
| Component styling | Vue scoped CSS | Approved page-specific visual implementation |
| Motion | GSAP 3 | Entrance, hover, parallax, tilt, and menu animation |
| Scroll motion | GSAP ScrollTrigger | One-time section reveals and scrubbed parallax |
| Icons | `@tabler/icons-vue` | All functional interface icons |
| Typeface | `@fontsource-variable/plus-jakarta-sans` | Locally bundled display and body type |

### 3.2 CSS architecture

Global styles are loaded in this order:

1. `src/styles/tokens.css`
2. `src/styles/typography.css`
3. `src/styles/motion.css`
4. Tailwind base, components, and utilities
5. Component-scoped CSS

Use CSS custom properties for reusable system values. Use scoped styles for exact section composition. New reusable patterns should become base components or tokens after they appear in at least two stable contexts.

### 3.3 Naming

- Components: PascalCase, for example `BaseButton.vue` and `SiteHeader.vue`.
- CSS classes: semantic kebab-case, for example `.hero-actions`, `.role-card`, and `.contact-form`.
- State modifiers: BEM-like suffixes, for example `.site-header--scrolled` and `.nav-item--active`.
- Motion hooks: semantic classes such as `.section-reveal`, `.motion-copy`, `.motion-media`, `.magnetic-button`, and `.tilt-card`.

---

## 4. Color system

### 4.1 Canonical color tokens

| Token | Hex | Purpose |
|---|---:|---|
| `--color-bg-main` | `#FFFFFF` | Main page and card background |
| `--color-bg-surface` | `#FFFDF9` | Warm raised surface |
| `--color-bg-hero` | `#FDF9F0` | Foundational warm hero surface |
| `--color-bg-dark` | `#073C31` | Foundational dark green surface |
| `--color-text-primary` | `#102C26` | Primary headings and high-emphasis text |
| `--color-text-secondary` | `#405D56` | Supporting body copy |
| `--color-text-muted` | `#71867F` | Metadata, captions, and low-emphasis text |
| `--color-text-inverse` | `#FFFFFF` | Text on dark surfaces |
| `--color-primary` | `#08735B` | Primary action and interaction color |
| `--color-primary-hover` | `#055F4B` | Primary hover/pressed darkening |
| `--color-primary-soft` | `#E8F4EF` | Soft green selected or supporting surface |
| `--color-accent` | `#C5AA7A` | Champagne brand accent |
| `--color-accent-soft` | `#F4EAD8` | Soft champagne background |
| `--color-gold-strong` | `#BD8D31` | Strong gold accent when required |
| `--color-teal` | `#14A6AA` | Secondary accent; use sparingly |
| `--color-coral` | `#EE7854` | Warm secondary accent; use sparingly |
| `--color-border` | `#E8DED0` | Warm default border |
| `--color-border-strong` | `#D7C6AE` | Higher-contrast warm border |
| `--color-border-dark` | `#29584D` | Divider on dark green surfaces |
| `--color-success` | `#16A34A` | Success feedback |
| `--color-warning` | `#D97706` | Warning feedback |
| `--color-error` | `#DC2626` | Error feedback |

### 4.2 Approved runtime colors

These are exact values used in the approved current pages and should be preserved until they are formally normalized into tokens.

| Value | Current usage |
|---:|---|
| `#F8F5ED` | Home hero and Contact page warm ivory background |
| `#0A4035` | Home “Who We Serve” band and dark outline-button hover |
| `#082F28` | Footer background |
| `#B9ED75` | Lime audience labels, fit badge, and footer headings |
| `#C9AD7C` | Eyebrow rules, market separators, and editorial link underline |
| `#DFF1E8` | Home hiring-form panel |
| `#FBFAF6` | Popular Roles section background |
| `#E1F1EA` | Hero status-icon background |
| `#536B65` | Hero and Contact supporting copy |
| `#647B75` | Story, role, and hiring supporting copy |
| `#60736E` | Inactive desktop navigation text |
| `#73847F` | Market metadata |
| `#BED1CB` | Supporting text on the dark audience band |
| `#B9CCC6` | Audience-card body copy |
| `#B8CBC5` | Footer links and footer body copy |
| `#8DA69F` | Footer legal metadata |
| `#C9DDD5` | Form-control border |
| `#D8E5DF` | Contact-form card border |
| `#EBE8DF` | Role-card border |
| `#EEE9DC` | Oversized story numbers |

### 4.3 Color usage rules

- Use `#102C26` for main headings; do not use pure black.
- Use `#08735B` for primary controls, active navigation, icons, focus borders, and success-adjacent emphasis.
- Use `#055F4B` for hover darkening, not as the default CTA color.
- Use champagne as a line, separator, or restrained highlight—not as a large body background.
- Use lime only on deep green or as a small badge/accent. Avoid lime body text on white.
- Dark sections must use white headings and muted mint-gray supporting text.
- Avoid gradients unless a future approved design explicitly introduces one.
- Feedback colors are semantic and must not be repurposed decoratively.

### 4.4 Selection color

Text selection uses the primary green at 20% opacity with primary-green selected text, via the application shell.

---

## 5. Typography

### 5.1 Font family

The only approved website typeface is **Plus Jakarta Sans Variable**.

```css
font-family: 'Plus Jakarta Sans', system-ui, -apple-system,
  BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

The font is bundled locally through `@fontsource-variable/plus-jakarta-sans`. Do not load a second web font or rely on a remote font CDN.

### 5.2 Canonical type tokens

| Token | Value | Intended use |
|---|---|---|
| `--text-display-xl` | `clamp(5.5rem, 4.8rem + 3.5vw, 6.5rem)` | Rare oversized editorial display |
| `--text-display-lg` | `clamp(4.5rem, 4rem + 2.5vw, 5.5rem)` | Large display headings |
| `--text-h1` | `clamp(4rem, 3.5rem + 2.5vw, 5rem)` | Standard page H1 |
| `--text-h2` | `clamp(3rem, 2.5rem + 2.5vw, 4rem)` | Major section heading |
| `--text-h3` | `clamp(2rem, 1.75rem + 1.25vw, 2.5rem)` | Subsection heading |
| `--text-h4` | `clamp(1.5rem, 1.375rem + 0.625vw, 1.75rem)` | Card group heading |
| `--text-body-lg` | `clamp(1.25rem, 1.1875rem + .3125vw, 1.375rem)` | Large supporting copy |
| `--text-body` | `clamp(1rem, .9375rem + .3125vw, 1.125rem)` | Primary body copy |
| `--text-sm` | `15px` | Small body copy |
| `--text-xs` | `13px` | Labels and metadata |

### 5.3 Weight system

| Token | Weight | Usage |
|---|---:|---|
| `--weight-regular` | 400 | Paragraphs and descriptive copy |
| `--weight-medium` | 500 | Quiet controls and links |
| `--weight-semibold` | 600 | Primary large buttons |
| `--weight-bold` | 700 | Headings and strong labels |

Some compact labels use `800` directly to produce the approved dense editorial appearance. `750` is used on Contact details and is supported by the variable font.

### 5.4 Line-height system

| Token | Value | Usage |
|---|---:|---|
| `--leading-tight` | `1.1` | Large display text |
| `--leading-heading` | `1.2` | Default headings |
| `--leading-body` | `1.5` | Default paragraphs |

Approved display headings use tighter page-specific values from `0.97` to `1.04`.

### 5.5 Current page-specific typography

| Element | Size | Line height | Tracking | Weight |
|---|---|---:|---:|---:|
| Home hero H1 | `clamp(54px, 5.55vw, 82px)` | `.97` | `-.06em` | 700 |
| Story H2 | `clamp(2.7rem, 4vw, 3.75rem)` | `1.02` | `-.052em` | 700 |
| Audience-band H2 | `clamp(2.7rem, 4vw, 3.8rem)` | `1.02` | `-.05em` | 700 |
| Roles H2 | `clamp(2.7rem, 4vw, 3.7rem)` | `1.04` | `-.052em` | 700 |
| Hiring H2 | `clamp(2.65rem, 3.7vw, 3.65rem)` | `1.03` | `-.052em` | 700 |
| Contact H1 | `clamp(3.4rem, 5.2vw, 5.1rem)` | `.98` | `-.06em` | 700 |
| Role-card H3 | `23px` | `1.08` | default | 700 |
| Audience-card H3 | `21px` | `1.15` | default | default heading weight |
| Footer headline | `27px` | `1.1` | `-.04em` | default heading weight |
| Eyebrow | `12px` | default | `.13em` | 800 |
| Small category label | `11px` | default | `.12em` where applicable | 800 |
| Form label | `12px` | default | default | 800 |

### 5.6 Eyebrow pattern

Eyebrows are uppercase green labels paired with a champagne line:

- Line: `24px × 2px`.
- Gap between line and copy: `10px`.
- Text: `12px`, weight `800`, tracking `.13em`.
- Bottom margin: normally `17–19px`.
- Centered section eyebrows center the entire line/text group.

### 5.7 Typography rules

- Large headings use negative letter-spacing; body copy does not.
- Desktop hero lines are deliberately controlled with block spans and no wrapping.
- At `520px` and below, hero spans may wrap normally.
- Do not center long paragraphs. Centered copy is reserved for short section introductions.
- Do not use all caps for long sentences; all caps is reserved for eyebrows, categories, and metadata.
- Use a real ellipsis character or three dots consistently according to the supplied copy; do not mix styles within one flow.

---

## 6. Spacing and layout

### 6.1 Spacing scale

The base spacing grid is 4px.

| Token | Pixels |
|---|---:|
| `--space-1` | 4 |
| `--space-2` | 8 |
| `--space-3` | 12 |
| `--space-4` | 16 |
| `--space-6` | 24 |
| `--space-8` | 32 |
| `--space-12` | 48 |
| `--space-16` | 64 |
| `--space-20` | 80 |
| `--space-24` | 96 |
| `--space-30` | 120 |
| `--space-40` | 160 |

Exact approved page compositions may use intermediate values such as 15, 17, 21, 25, 29, 34, 38, 39, 41, 43, 45, 46, 49, 55, 62, 68, 75, 82, 88, 91, 92, 94, 104, 106, 108, 112, 116, and 118px.

### 6.2 Container

The standard `BaseContainer` behavior is:

- Maximum content width: `1180px`.
- Centered with automatic left/right margins.
- Mobile gutter: `20px`.
- Tablet gutter: `32px`.
- Laptop gutter: `40px`.
- Desktop gutter: `64px`.
- `fluid=true` removes the maximum width but keeps responsive gutters.

### 6.3 Application shell

- Header is fixed.
- Main content top offset: `86px` desktop, `72px` at `900px` and below.
- Page shell minimum height: full viewport.
- Footer is pushed to the bottom through a vertical flex layout.
- Horizontal document overflow is disabled globally.

### 6.4 Section spacing

| Section | Desktop vertical padding |
|---|---|
| Home hero | `74px 0 80px`; minimum height `760px` |
| Story / About | `116px 0 108px` |
| Who We Serve | `91px 0 88px` |
| Popular Roles | `112px 0 118px` |
| Hiring form | `106px 0` |
| Contact hero | `92px 0 104px` |
| Footer | `60px 0 25px` |

### 6.5 Grid patterns

- Home hero: `.9fr 1.1fr`, centered, `62px` approved gap.
- Story row: `1fr 1fr`, `96px` gap; image/copy order alternates.
- Audience grid: four equal columns on desktop.
- Role grid: three equal columns, `21px` gap.
- Hiring panel: `.78fr 1.22fr`, `75px` gap.
- Contact page: `.84fr 1.16fr`, `94px` gap.
- Footer: `1.5fr .8fr .9fr`, `80px` gap.

---

## 7. Responsive system

### 7.1 Framework breakpoints

Tailwind defaults are used by `BaseContainer`:

- `sm`: 640px.
- `md`: 768px.
- `lg`: 1024px.
- `xl`: 1280px.

### 7.2 Approved component breakpoints

| Breakpoint | Behavior |
|---|---|
| `1023px` and below | Home hero gap and media height reduce; story gap reduces; hiring panel becomes tighter |
| `900px` and below | Desktop nav and header CTA hide; menu trigger appears; header becomes 72px; Contact grid becomes one column |
| `767px` and below | Home hero, stories, and hiring panel become one column; audience grid becomes two columns; roles become one column |
| `760px` and below | Footer becomes two columns; brand occupies the full first row; legal row stacks |
| `640px` and below | Full logo crop becomes 150 × 43px |
| `520px` and below | Audience grid becomes one column; hero actions become full-width; mobile typography and media dimensions apply |
| `480px` and below | Footer becomes one column |

### 7.3 Mobile layout rules

- Minimum horizontal page gutter: `20px`.
- Touch controls should be at least `44px` high.
- Form input text is `16px` on small screens to avoid iOS browser zoom.
- Hero action buttons become full-width at `520px`.
- Hover-only behavior must not be required to understand or use the interface.
- Audience cards use horizontal separators only in the one-column layout; there must be no right-side vertical border.
- The last audience card has no bottom border.
- Story image/copy order is normalized for reading: copy precedes media on mobile.

---

## 8. Shape, radius, border, and elevation

### 8.1 Radius tokens

| Token | Value | Typical use |
|---|---:|---|
| `--radius-xs` | 6px | Focusable text links and small controls |
| `--radius-sm` | 10px | Buttons and inputs |
| `--radius-md` | 16px | Cards |
| `--radius-lg` | 24px | Large panels |
| `--radius-xl` | 32px | Special large surfaces |
| `--radius-pill` | 9999px | Primary pill CTAs |

### 8.2 Approved component radii

- Hero image: `145px 26px 26px 26px`; mobile `90px 20px 20px 20px`.
- Story images: `18px`.
- Role cards: `16px`.
- Hiring panel: `24px`.
- Contact form: `22px`; mobile `17px`.
- Standard hiring inputs: `8px`.
- Contact inputs: `9px`.
- Hero floating note: `14px`.
- Footer logo plate: `14px`.
- Circular status items and badges: `50%`.

### 8.3 Border rules

- Borders are normally `1px`.
- Warm light surfaces use `#E8DED0`, `#D7C6AE`, `#EBE8DF`, or `#C9DDD5` according to context.
- Dark surface dividers use white at 13–18% opacity or `#29584D`.
- Do not add borders to every edge of editorial grids. Prefer a top rule plus internal separators.
- Focus is represented with a colored border plus an outer ring; it is not represented by removing outlines without replacement.

### 8.4 Shadow tokens

| Token | Value |
|---|---|
| `--shadow-sm` | `0 2px 5px rgba(16,44,38,.06)` |
| `--shadow-md` | `0 10px 24px rgba(16,44,38,.12), 0 2px 5px rgba(16,44,38,.05)` |
| `--shadow-lg` | `0 18px 40px rgba(16,44,38,.13), 0 4px 10px rgba(16,44,38,.05)` |
| `--shadow-float` | `0 18px 42px rgba(16,44,38,.16)` |

### 8.5 Approved local shadows

- Header scrolled: `0 8px 28px rgba(16,44,38,.07)`.
- Fit badge: `0 12px 30px rgba(10,64,53,.12)`.
- Hero note: `0 18px 42px rgba(16,44,38,.16)`.
- Outline-button hover: `0 14px 30px rgba(10,64,53,.16)`.
- Hiring submit hover: `0 14px 28px rgba(8,116,93,.19)`.
- Contact form: `0 24px 70px rgba(16,44,38,.09)`.
- Footer logo plate: `0 12px 28px rgba(0,0,0,.14)`.

Shadows must remain soft and green-tinted where possible. Avoid hard black shadows on light cards.

---

## 9. Icon system

### 9.1 Approved library

Use **Tabler Icons for Vue** from `@tabler/icons-vue`. The package range in the repository is `^3.34.0`.

Reasons for the choice:

- Consistent rounded stroke language.
- Clear at small sizes.
- Matches the friendly but professional visual identity.
- Supports stroke-width control and tree-shaken Vue imports.

### 9.2 Icon construction rules

- Import icons individually; never import the full library.
- Default stroke width is the Tabler default unless the component specifies otherwise.
- Functional icons must have accessible labels on the parent control.
- Decorative icons must use `aria-hidden="true"`.
- Do not use emoji, text characters, CSS drawings, or mixed icon libraries.
- Do not place icons in arbitrary colored circles unless the circle communicates status or is part of an approved pattern.
- Icon color should normally inherit from text or use primary green.
- Keep optical alignment through flex/grid centering rather than manual baseline hacks.

### 9.3 Active icons and sizes

| Icon | Size | Location / meaning |
|---|---:|---|
| `IconArrowRight` | 18px | BaseButton arrow and Home CTAs |
| `IconArrowRight` | 19px | Contact submit action |
| `IconArrowUpRight` | 21px | Role-card discoverability cue |
| `IconCheck` | 18px | Hero proof, story checklist, and hiring success |
| `IconCheck` | 19px | Contact success state |
| `IconChevronDown` | 20px | Custom role-select arrow |
| `IconMail` | 21px | Contact email detail |
| `IconClock` | 21px | Contact response-time detail |
| `IconMenu2` | 25px | Mobile menu trigger |
| `IconX` | 25px | Header mobile-menu close state |

### 9.4 Arrow behavior

- BaseButton arrow moves `4px` to the right on hover over `250ms`.
- BaseLink arrow moves `2px` to the right on hover over `250ms`.
- Editorial text-link arrows move `5px` to the right over `250ms`.
- Role-card diagonal arrow begins hidden and offset `-5px, +5px`, then fades and moves to its final position on card hover.

### 9.5 Select chevron

The role select uses a real `IconChevronDown`, not the inconsistent native browser arrow.

- Desktop size: `20px`.
- Desktop right inset: `14px`.
- Mobile right inset: `15px`.
- `pointer-events: none` so the entire select remains interactive.
- Select right padding: `46px` to prevent text/icon collision.
- Mobile control height: `52px`.

### 9.6 Known legacy exception

The close control inside the full-screen mobile-menu overlay currently contains an inline stroke SVG, while the header trigger uses Tabler icons. New work must use `IconX`; the inline SVG should be replaced during a future cleanup to make the implementation fully consistent with this system.

---

## 10. Buttons and links

### 10.1 BaseButton anatomy

BaseButton can render as a Vue Router link, anchor, or button. It supports:

- Variants: `primary`, `secondary`, `ghost`.
- Sizes: `sm`, `md`, `lg`.
- Optional right-arrow icon.
- Disabled state.
- Internal or external destination behavior.

### 10.2 Button sizes

| Size | Minimum height | Padding | Text |
|---|---:|---|---|
| Small | 36px | `6px 12px` | small |
| Medium | 44px | `10px 20px` | body |
| Large | 56px | `14px 28px` | 16px semibold; pill radius |

### 10.3 Button variants

**Primary**

- Background: primary green.
- Text: white.
- Border: transparent 1px.
- Elevation: medium shadow.
- Hover: primary-hover green.

**Secondary**

- Background: white.
- Text: primary text.
- Border: strong warm border.
- Hover: primary-green border and text.

**Ghost**

- Background: transparent.
- Text: primary text.
- Border: transparent.
- Hover: warm surface background.

### 10.4 Button interaction

- Default transition: all relevant properties over `250ms` using standard easing.
- Hover lift: `translateY(-1px)`.
- Active state returns to `translateY(0)`.
- Arrow translates `4px` right on hover.
- Keyboard focus: 2px primary outline with 2px offset.
- Disabled: 50% opacity, no pointer interaction, not-allowed cursor for real buttons.

### 10.5 Home outline button

The approved Home outline-button differs slightly from BaseButton secondary:

- Minimum height: `56px`; Roles variant: `50px`.
- Horizontal padding: `24px`.
- Radius: `10px`.
- White background, primary-green 1px border, dark text.
- Hover: white text on `#0A4035`, matching border, and soft green shadow.
- Transition duration: `250ms` for color, background, border, and shadow.

### 10.6 BaseLink

- Primary-green text, medium weight.
- Underline is initially scaleX(0) and grows from the left on hover.
- Text becomes primary-hover green.
- Optional arrow moves `2px` right.
- Transition: `250ms`, standard easing.
- Uses the same accessible focus outline as BaseButton.

### 10.7 Magnetic CTA behavior

Elements with `.magnetic-button` respond to fine-pointer movement:

- Horizontal displacement: 12% of pointer distance from the control center.
- Vertical displacement: 16% of pointer distance from the control center.
- Follow duration: `300ms`, `power2.out`.
- Return duration: `500ms`, `elastic.out(1, .45)`.
- Disabled on coarse pointers.
- This is enhancement only; layout and click targets do not depend on it.

---

## 11. Navigation

### 11.1 Desktop header

- Position: fixed at the top, full width.
- Z-index: `--z-header` = 50.
- Height: `86px` at rest; `70px` after scrolling more than 18px.
- Background: white at 96% opacity.
- Bottom border: warm light border at 62% opacity.
- Scrolled elevation: soft green shadow.
- Inner gap: `30px`.

### 11.2 Desktop navigation items

There are exactly three primary navigation destinations:

1. Home: `/`
2. Services & Pricing: `/services`
3. Contact: `/contact`

Start Hiring is a separate conversion CTA and is not counted as a primary navigation item.

- Item gap: `28px`.
- Text: `13px`, weight `700`.
- Inactive color: `#60736E`.
- Hover/focus/active color: `#102C26`.
- Active indicator: 2px primary-green rounded underline, positioned 3px from the bottom.
- Indicator animates from scaleX(0) to scaleX(1) over `300ms`.
- Active route receives `aria-current="page"`.

### 11.3 Header scroll behavior

- Scroll updates are throttled through `requestAnimationFrame`.
- When the user scrolls down past `240px`, the header translates above the viewport.
- When the user scrolls upward, it reappears.
- Hide/show transition: `480ms`, emphasized easing.
- Header hiding is disabled when reduced motion is requested.
- Header remains available while the mobile menu is open.

### 11.4 Scroll progress

- A 2px primary-green line sits at the bottom of the header.
- Its X scale is `scrollY / maximumScrollableDistance`.
- Transform origin is the left edge.
- Only `transform` is updated.

### 11.5 Mobile menu

- Replaces desktop nav at `900px` and below.
- Full viewport, dark green background, inverse text.
- Z-index: modal = 100.
- Body scrolling is locked while open.
- Closes when the route changes or Escape is pressed.
- Numbered links use `01`, `02`, and `03`.
- Current item turns lime and displays a 9px lime dot.
- Dot has a 5px translucent lime halo.
- Contains a full-width Start Hiring CTA below the primary links.

---

## 12. Forms

### 12.1 General field anatomy

- Visible text label above every control.
- Label/control gap: `7px`.
- Label: `12px`, weight `800`, dark muted green.
- Control background: white.
- Control border: 1px `#C9DDD5`.
- Standard control radius: `8–9px`.
- Standard internal padding: `13–15px`.
- Focus border: primary green.
- Focus ring: `0 0 0 4px rgba(8,116,93,.11)`.
- Placeholder text remains lower contrast than entered values.

### 12.2 Home hiring form

- Desktop: two-column grid, `15px` gap.
- Message and submit control span both columns.
- Mobile: one column.
- Textarea: `95px` initial height and vertically resizable.
- Role select: custom Tabler chevron and hidden native appearance.
- Submit minimum height: `50px`, radius `8px`.

### 12.3 Contact form

- White form card on ivory background.
- Desktop padding: `46px`; mobile: `28px 22px`.
- Form-card border: `#D8E5DF`.
- Form-card radius: `22px`; mobile `17px`.
- Textarea minimum height: `126px`.
- Submit minimum height: `53px`.

### 12.4 Form states

**Idle**

- CTA displays the normal action label and arrow.

**Focused**

- Primary-green border and translucent 4px focus ring.

**Submitting**

- Button label changes to “Sending…”.
- Button is disabled and uses 86% opacity for the page-specific form controls.

**Success**

- Button displays a check icon and confirmation label.
- Contact form adds a centered status note with `role="status"`.

**Validation**

- Required fields use native HTML validation.
- Email fields use `type="email"`.
- Backend error presentation is not implemented yet and must use `--color-error` when added.

---

## 13. Cards and editorial modules

### 13.1 Role card

- White background.
- 1px `#EBE8DF` border.
- 16px radius.
- Overflow hidden.
- Subtle single-pixel green-tinted base shadow.
- Image area: `282px` desktop, `340px` tablet/mobile column, `280px` small mobile.
- Image: `object-fit: cover`.
- Body padding: `25px 25px 29px`.
- Category: 11px uppercase, 800, `.12em`, primary green.
- Title: 23px, line-height 1.08.
- Diagonal discovery arrow: 21px at `right: 21px; top: 25px`.

### 13.2 Audience item

- Desktop: four-column editorial grid with internal vertical rules.
- Minimum height: `207px`.
- Padding: `34px 27px 15px`; first item aligns to the container edge.
- Label: 11px, weight 800, lime, uppercase.
- Title: 21px, white.
- Body: 14px, muted mint.
- Hover: translucent white background and 8px upward lift.
- One-column mobile: minimum height `165px`, padding `25px 0`, horizontal separators only.

### 13.3 Story media

- Fixed desktop height: `470px`.
- Mobile height: `370px`.
- Radius: `18px`.
- Overflow hidden.
- Image is 110% high so scrubbed vertical movement never exposes an empty edge.

### 13.4 Hero media

- Desktop height: `535px`.
- Responsive intermediate height: `465px`.
- Mobile: `450px`; small mobile: `380px`.
- Image fills the frame with `object-fit: cover`.
- The asymmetric upper-left radius creates the signature editorial shape.

### 13.5 Floating proof note

- White raised surface.
- Desktop offset: `right: -22px; bottom: 33px`.
- Padding: `18px 22px`.
- 14px radius.
- Contains a 30px circular pale-green status icon.

---

## 14. Logo usage

### 14.1 Source asset

The site uses `/public/assets/vactives-logo-original.png` through `BrandLogo.vue`.

### 14.2 Standard lockups

**Full lockup**

- Visible frame: `190 × 52px`.
- Source image rendered at `212px` wide.
- Crop position: `left: -10px; top: -35px`.

**Compact header lockup**

- Visible frame: `112 × 42px`.
- Source image rendered at `126px` wide.
- Crop position: `left: -6px; top: -21px`.

**Small-screen full lockup**

- Visible frame: `150 × 43px`.
- Source image rendered at `168px` wide.
- Crop position: `left: -8px; top: -28px`.

### 14.3 Footer treatment

The logo must not be placed directly on the dark footer because the source image has a white canvas and a tight crop.

- White plate: `230 × 82px`.
- Radius: `14px`.
- Centered logo.
- Shadow: `0 12px 28px rgba(0,0,0,.14)`.

### 14.4 Logo rules

- Do not recolor, redraw, stretch, rotate, or add effects to the logo.
- Preserve aspect ratio.
- Use the compact lockup in the fixed header only.
- Use the white plate on dark surfaces until an official transparent SVG is supplied.
- Preferred future asset: official transparent vector logo with the same artwork.

---

## 15. Photography

### 15.1 Art direction

- Use real professionals in believable work settings.
- Prefer natural collaboration, recruiting, support, administration, and remote-work moments.
- Subjects should feel capable and approachable.
- Lighting should be clean, warm, and contemporary.
- Avoid over-staged corporate handshakes, obvious stock-photo poses, AI-generated faces, 3D characters, and abstract dashboard screenshots.

### 15.2 Image treatment

- Use `object-fit: cover` for all editorial frames.
- Preserve focal subjects at responsive crops.
- Do not stretch images.
- Use high-resolution assets with compression parameters appropriate for the rendered size.
- All informative images require meaningful alt text.
- Decorative images should use empty alt text, not redundant descriptions.

### 15.3 Current source policy

Current Home photography is sourced from Unsplash and Pexels URLs. A production asset pipeline should eventually download, optimize, and self-host approved images to avoid remote availability and layout-performance risk.

---

## 16. Motion system

### 16.1 Motion principles

1. Motion clarifies reading order.
2. Motion should feel smooth, editorial, and slightly playful.
3. Do not use scroll-jacking or artificial scroll delays.
4. Prefer `transform`, `opacity`, and `clip-path`.
5. Do not animate layout-critical properties such as width, height, margin, padding, top, or left during scroll.
6. Scrubbed movement must remain subtle enough to preserve reading comfort.
7. Entrance reveals should not repeatedly reset or flicker during normal scrolling.
8. Coarse pointers do not receive magnetic or tilt behavior.

### 16.2 Duration tokens

| Token | Duration | Use |
|---|---:|---|
| `--duration-fast` | 150ms | Tiny state changes |
| `--duration-normal` | 250ms | Standard hover/focus transitions |
| `--duration-medium` | 400ms | Medium UI transitions |
| `--duration-slow` | 650ms | Larger reveals |
| `--duration-page` | 700ms | Page-scale choreography |

### 16.3 Easing tokens

| Token | Value | Character |
|---|---|---|
| `--ease-standard` | `cubic-bezier(.2,0,0,1)` | General UI movement |
| `--ease-out` | `cubic-bezier(0,0,.2,1)` | Simple deceleration |
| `--ease-emphasized` | `cubic-bezier(.22,1,.36,1)` | Premium editorial movement |

GSAP additionally uses `power2.out`, `power3.out`, `power2.in`, and `elastic.out(1, .45)`.

### 16.4 Header entrance

- From: opacity 0, Y `-22px`.
- To: opacity 1, Y 0.
- Duration: `550ms`.
- Ease: `power3.out`.
- Reduced motion duration: 0.

### 16.5 Home hero entrance choreography

The sequence is a single GSAP timeline with `power3.out` defaults:

1. Eyebrow: opacity 0 and Y `16px` to final; `450ms`.
2. Heading lines: opacity 0, Y `105%`, rotation `1.5deg` to final; `720ms` each; `75ms` stagger.
3. Summary, actions, and markets: opacity 0 and Y `22px`; `550ms`; `100ms` stagger.
4. Hero visual: opacity 0, X `58px`, scale `.96`; `900ms`.
5. Fit badge and proof note: opacity 0, scale `.7`; `500ms`; `120ms` stagger.

Timeline overlaps are intentional so the hero feels continuous rather than step-by-step.

### 16.6 Home scroll reveals

For every `.section-reveal`:

- Trigger start: section top reaches 82% of viewport height.
- Runs once only.
- Copy initial state: opacity 0, Y `34px`.
- Copy final: opacity 1, Y 0, `720ms`, `80ms` stagger, `power3.out`.
- Media/card initial: opacity 0, Y `24px`, scale `.985`.
- Media/card final: opacity 1, Y 0, scale 1, `820ms`, `90ms` stagger, `power3.out`.
- `overwrite: true` prevents competing tweens.

The one-time rule is important: do not reintroduce enter/leave reset logic that causes visible scattering or flicker when scrolling upward.

### 16.7 Parallax

**Hero image**

- Moves to Y `10%` across the hero scroll range.
- Scroll range: hero top at viewport top to hero bottom at viewport top.
- Scrub smoothing: `.7`.

**Story images**

- Move from Y `-5%` to Y `+5%`.
- Scroll range: image top entering viewport bottom to image bottom leaving viewport top.
- Scrub smoothing: `.8`.

**Story numbers**

- Move from X `-10%` to X `+12%`.
- Scroll range follows the complete story row.
- Scrub smoothing: `1`.

### 16.8 Role-card tilt

- Enabled only on non-coarse pointers and when reduced motion is not active.
- Pointer position maps to approximately `±2.5deg` X/Y rotation.
- Hover lift: Y `-8px`.
- Perspective: `900px`.
- Follow duration: `350ms`, `power2.out`.
- Reset: rotation 0 and Y 0 over `550ms`, `power3.out`.

### 16.9 Image hover zoom

- Role image scale: 1 to `1.055`.
- Duration: `700ms`.
- Ease: emphasized cubic-bezier.
- Disabled under reduced-motion preference.

### 16.10 Audience hover

- Background changes to white at 5.5% opacity.
- Card translates upward `8px`.
- Duration: `300ms`.
- The effect is supplementary; all content remains visible without hover.

### 16.11 Mobile menu motion

**Open preparation**

- Overlay: opacity 0, Y `-20px`.
- Items: opacity 0, Y `15px`.
- CTA: opacity 0, Y `15px`.

**Open timeline**

1. Overlay to opacity 1 and Y 0 over `350ms`, `power2.out`.
2. Navigation items to final over `300ms`, `80ms` stagger, beginning 150ms before the overlay ends.
3. CTA to final over `300ms`, also overlapping by 150ms.

**Close**

- Opacity 0 and Y `-10px`.
- Duration: `250ms`.
- Ease: `power2.in`.

**Reduced motion**

- Open fade: `200ms`.
- Close fade: `150ms`.
- No translation choreography.

### 16.12 Contact page entrance

- Contact copy children: opacity 0, Y `24px` to final, `700ms`, `80ms` stagger, `power3.out`.
- Contact form: opacity 0, X `42px` to final, `850ms`, `power3.out`.
- Entrance is skipped when reduced motion is active.

### 16.13 Motion cleanup

All page GSAP work must be created inside the `useGsap` composable. It creates a scoped `gsap.context` on mount and calls `ctx.revert()` on unmount, which removes component animations and associated ScrollTriggers.

---

## 17. Transition and hover reference

| Element | Properties | Duration | Easing / behavior |
|---|---|---:|---|
| BaseButton | color, background, border, shadow, transform | 250ms | standard |
| BaseButton arrow | transform | 250ms | standard; +4px X |
| BaseLink text | color | 250ms | standard |
| BaseLink underline | transform | 250ms | standard; scaleX 0→1 |
| Desktop nav text | color | 250ms | default ease |
| Desktop nav underline | transform | 300ms | default ease; origin switches right→left |
| Header | transform | 480ms | emphasized |
| Header size/shadow | height, shadow | 300ms | default ease |
| Outline button | color, background, border, shadow | 250ms | default ease |
| Editorial arrow | transform | 250ms | default ease; +5px X |
| Audience item | background, transform | 300ms | default ease; -8px Y |
| Role image | transform | 700ms | emphasized; scale 1→1.055 |
| Role arrow | opacity, transform | 250ms | default ease |
| Hiring inputs | border, shadow | 200ms | default ease |
| Hiring submit | background, shadow | 250ms | default ease |
| Contact inputs | border, shadow | 200ms | default ease |
| Contact submit | background, transform, shadow | 250ms | default ease; -2px Y |
| Footer links | color, transform | 200ms | default ease; +4px X |

---

## 18. Page composition

### 18.1 Home

1. Fixed site header.
2. Two-column hero with primary and secondary CTA.
3. Two alternating editorial story sections.
4. “Know More About Us” editorial link.
5. Dark “Who We Serve” audience band.
6. Three Popular Roles cards.
7. “Explore All Roles” CTA.
8. Hiring brief form.
9. Compact three-column footer.

### 18.2 Services & Pricing

Route: `/services`.

The route and active navigation state are established. The page body is currently a foundation and must adopt this design system when completed.

### 18.3 Contact

Route: `/contact`.

- Standalone page; it must not point to the Home hiring form.
- Two-column desktop composition with intro/contact details and a form card.
- One-column composition at 900px and below.
- Contact is visibly active in desktop and mobile navigation.

### 18.4 Start Hiring

Route: `/start-hiring`.

This is a dedicated conversion route and currently remains a foundation page. Start Hiring remains a separate CTA from the three main navigation destinations.

---

## 19. Accessibility

### 19.1 Reduced motion

When `prefers-reduced-motion: reduce` is active:

- Global smooth scrolling becomes automatic.
- Animation duration becomes effectively zero (`.01ms`) and repeats once.
- Transition duration becomes effectively zero.
- Scroll behavior becomes automatic.
- Hero/story transforms and card tilt/zoom are disabled.
- Header hide-on-scroll is disabled.
- Role arrow remains visible so information is not hidden behind hover.

### 19.2 Keyboard and focus

- Base buttons and links use a visible 2px primary outline with 2px offset.
- Forms use a green border plus translucent 4px focus ring.
- Mobile menu closes with Escape.
- Active route uses `aria-current="page"`.
- Mobile menu trigger uses `aria-expanded`.
- Mobile overlay uses `role="dialog"` and `aria-modal="true"`.

### 19.3 Semantic rules

- One H1 per page.
- Use native buttons for actions and anchors/router links for navigation.
- Use real labels for all inputs.
- Decorative icons use `aria-hidden`.
- Images use meaningful alt text unless purely decorative.
- Success copy that appears dynamically uses a live status role where appropriate.

### 19.4 Contrast

- Primary text on white/ivory uses deep green, not muted text colors.
- Muted text on dark green must remain in the approved mint-gray range.
- Lime is not used for paragraph text on white.
- Focus states must remain visible on both light and dark surfaces.

---

## 20. Performance rules

- Prefer transform and opacity for animation.
- Use `will-change` only on known frequently animated elements such as scroll progress, hero images, story images, story numbers, and tilt cards.
- Throttle scroll work with `requestAnimationFrame`.
- Scope GSAP animations and clean them up on unmount.
- Avoid scroll listeners inside repeated child cards.
- Do not animate heavy blur or large changing shadows during scroll.
- Keep image dimensions stable to reduce layout shift.
- Future production images should be optimized and self-hosted.
- Preserve native form controls wherever possible; custom visual layers must not break keyboard or touch interaction.

---

## 21. Z-index system

| Token | Value | Use |
|---|---:|---|
| `--z-base` | 0 | Normal document layer |
| `--z-decorative` | 1 | Decorative shapes |
| `--z-content` | 10 | Elevated page content |
| `--z-sticky` | 20 | Sticky local UI |
| `--z-header` | 50 | Global header |
| `--z-dropdown` | 60 | Dropdowns above header content |
| `--z-modal` | 100 | Full-screen mobile menu/modal |
| `--z-toast` | 120 | Toast and topmost status feedback |

Do not invent arbitrary z-index values. Use the next appropriate system layer.

---

## 22. Implementation recipes

### 22.1 New primary CTA

Use `BaseButton`:

```vue
<BaseButton to="/start-hiring" size="lg" show-arrow>
  Start Hiring
</BaseButton>
```

Add `.magnetic-button` only when the CTA is a prominent marketing action and the surrounding component initializes the approved magnetic GSAP behavior.

### 22.2 New editorial link

Use `BaseLink` for standard links. Use the Home `.text-link` pattern only when a champagne underline is part of the composition.

### 22.3 New form field

Required structure:

```vue
<label>
  Field label
  <input type="text" placeholder="Helpful example" />
</label>
```

Required states:

- Idle.
- Hover if visually useful.
- Keyboard focus.
- Required/invalid.
- Disabled or submitting if applicable.
- Success/error feedback at form level.

### 22.4 New card

Before adding a new card style, determine whether it is:

- An editorial content block.
- A role/service card.
- A proof/status surface.
- A form/panel surface.

Reuse an existing radius, border, spacing, and hover pattern. Do not create a new visual card language for a single section.

### 22.5 New animated section

- Add `.section-reveal` to the section.
- Mark primary copy with `.motion-copy`.
- Mark media/cards with `.motion-media` or the approved existing selector.
- Use the existing one-time reveal trigger.
- Keep movement within 24–34px and scale no lower than `.985` for standard section entrances.
- Verify reduced-motion behavior.

---

## 23. Do and do not

### Do

- Use Plus Jakarta Sans.
- Use the exact approved greens, ivory, white, champagne, and lime roles.
- Use Tabler icons at consistent sizes.
- Use real photography.
- Preserve strong heading hierarchy and generous whitespace.
- Use the 1180px container.
- Keep CTAs direct and readable.
- Test desktop, tablet, and mobile breakpoints.
- Test keyboard focus and reduced motion.
- Keep Home, Services & Pricing, and Contact as the three primary nav items.

### Do not

- Add a fourth primary navigation link without a product decision.
- Send Contact to the Home form; Contact is `/contact`.
- Use AI-generated people or return to 3D character illustrations.
- Introduce a dashboard/SaaS visual language.
- Mix icon libraries or use emoji as icons.
- Add arbitrary gradients, glassmorphism, neon effects, or heavy shadows.
- Make every section a card.
- Re-trigger section reveals during normal upward/downward scrolling.
- Use hover as the only way to access important information.
- Remove focus indicators.
- Stretch or recolor the VActives logo.

---

## 24. Quality-assurance checklist

### Visual

- [ ] Logo is fully visible and not tightly clipped.
- [ ] Heading line breaks match the approved composition.
- [ ] Page uses the correct 1180px container and responsive gutters.
- [ ] Colors match exact token or documented runtime values.
- [ ] Dark-section text has adequate contrast.
- [ ] Images use real photography, correct crop, and correct radius.
- [ ] Card borders and separators are consistent at every breakpoint.
- [ ] Mobile audience rows do not show a right-side border.
- [ ] Mobile select chevron has a 15px right inset and no text collision.

### Interaction

- [ ] Header shrinks after 18px scroll.
- [ ] Header hides after 240px while scrolling down and returns on upward scroll.
- [ ] Scroll progress reaches the full width at the bottom.
- [ ] Correct nav item is active on `/`, `/services`, and `/contact`.
- [ ] Mobile menu opens, locks body scroll, closes on route change, and closes with Escape.
- [ ] Button, link, card, and footer hover states work.
- [ ] Magnetic and tilt effects are disabled for coarse pointers.
- [ ] Role selection remains keyboard and touch accessible.
- [ ] Contact and hiring forms expose loading and success states.

### Responsive

- [ ] No horizontal overflow at 390px.
- [ ] Header is 72px at 900px and below.
- [ ] Home grids collapse at the documented breakpoints.
- [ ] Contact becomes one column at 900px.
- [ ] Hero actions are full-width at 520px.
- [ ] Footer becomes one column at 480px.
- [ ] Form text is at least 16px on small mobile screens.

### Accessibility and performance

- [ ] Focus indicators are visible.
- [ ] `aria-current` matches the route.
- [ ] Decorative icons are hidden from assistive technology.
- [ ] Page has exactly one H1.
- [ ] Reduced-motion mode removes nonessential movement.
- [ ] GSAP contexts are reverted on unmount.
- [ ] No runtime console errors.
- [ ] Production build passes.

---

## 25. File map

| System area | Primary source |
|---|---|
| Color, spacing, radius, shadow, z-index | `src/styles/tokens.css` |
| Typography | `src/styles/typography.css` |
| Motion tokens and reduced motion | `src/styles/motion.css` |
| Global reset | `src/styles/globals.css` |
| Tailwind token aliases | `tailwind.config.js` |
| Button | `src/components/base/BaseButton.vue` |
| Link | `src/components/base/BaseLink.vue` |
| Container | `src/components/base/BaseContainer.vue` |
| Section heading | `src/components/base/SectionHeading.vue` |
| Logo | `src/components/brand/BrandLogo.vue` |
| Desktop/mobile header | `src/components/navigation/SiteHeader.vue` |
| Mobile navigation overlay | `src/components/navigation/MobileMenu.vue` |
| Footer | `src/components/navigation/SiteFooter.vue` |
| GSAP lifecycle | `src/composables/useGsap.js` |
| Reusable motion helpers | `src/utils/motion/reveal.js` |
| Home composition and motion | `src/pages/Home.vue` |
| Contact composition and motion | `src/pages/Contact.vue` |
| Routes | `src/router/index.js` |
| Visual QA history | `design-qa.md` |

---

## 26. Maintenance policy

Update this document whenever any of the following changes:

- Brand colors or official logo asset.
- Font family, type scale, or weight policy.
- Container width or page gutters.
- A reusable radius, border, or shadow pattern.
- Primary navigation architecture.
- Standard form-control treatment.
- Icon library or icon sizing rules.
- Motion duration, easing, reveal trigger, or reduced-motion behavior.
- Responsive breakpoints.
- A new reusable card or section pattern.

For every design-system change:

1. Change or add the appropriate token/component.
2. Test all existing usages.
3. Verify desktop and 390px mobile layouts.
4. Verify focus and reduced-motion states.
5. Run the production build.
6. Update this document and `design-qa.md` when the visible result changes.
