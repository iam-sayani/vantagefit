# Vantage Fit Design System

This system translates the `enterprise-final` homepage into reusable standards for future Vantage Fit web pages. The visual reference is available at `/design-system`, the reusable CSS source is `/vfit-design-system.css`, and machine-readable tokens are available at `/vfit-design-tokens.json`.

## Brand principles

1. **Human clarity** — Familiar patterns, readable type, natural language, and achievable wellness activities.
2. **Evidence with restraint** — Measurable outcomes are visible and sourced. Claims never exceed available evidence.
3. **Inclusive momentum** — Different ages, abilities, locations, and ways to participate are represented.
4. **Enterprise confidence** — Product, analytics, privacy, security, and ROI content is calm and procurement-ready.
5. **One clear next step** — Each viewport has one primary CTA, supported by no more than one secondary action.

## How to use the system

Include Noto Sans and the shared stylesheet:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/vfit-design-system.css">
```

All reusable classes and variables begin with `vf-` to prevent collisions with page-specific styles.

## Color

| Role | Token | Value | Use |
|---|---|---:|---|
| Brand coral | `--vf-coral-500` | `#F15162` | Large accents, illustrations, decorative atmosphere |
| Deep coral | `--vf-coral-700` | `#B8172A` | Primary CTA gradient endpoint, coral text, accessible compact UI |
| Teal | `--vf-teal-500` | `#41D8B4` | Progress fills and visual wellness signals |
| Dark teal | `--vf-teal-700` | `#167F69` | Positive text and small-interface labels |
| Orange | `--vf-orange-500` | `#FF9D57` | Rewards, milestones, achievements |
| Slate | `--vf-slate-700` | `#303740` | Dark enterprise panels and product framing |
| Ink | `--vf-ink` | `#29294C` | Headings and essential light-surface text |
| Body | `--vf-text` | `#50506D` | Paragraphs and supporting light-surface text |
| Canvas | `--vf-canvas` | `#F8F8F9` | Page background |
| Surface | `--vf-surface` | `#FFFFFF` | Cards and elevated areas |

### Color rules

- Coral is the conversion and brand-recognition color.
- Primary CTAs use the exact homepage gradient: `linear-gradient(125deg, #F15162 5%, #B8172A 125%)`.
- Use `#B8172A`, not `#F15162`, for solid red surfaces behind small white text.
- Use teal only for progress, positive change, health signals, and confirmation.
- Use orange for rewards and achievements. Pair orange with dark text, not white.
- Use slate for product, analytics, security, ROI, and footer sections.
- Use no more than three accent colors in one viewport.
- Status must always include text or an icon; never use color alone.

## Typography

Noto Sans is the only web typeface. Use 400–500 for body copy, 600–700 for controls, and 750–800 for headings.

| Style | Class | Size | Typical use |
|---|---|---|---|
| Display | `.vf-display` | 41–72px responsive | Hero headings only |
| Section | `.vf-section-title` | 36–56px responsive | One consistent heading style across sections |
| Card | `.vf-card-title` | 20–24px responsive | Component and content-card titles |
| Lead | `.vf-lead` | 18px | Section introduction |
| Body | `.vf-body` | 16px | Paragraphs |
| Small | `.vf-small` | 14px | Supporting content |
| Eyebrow | `.vf-eyebrow` | 12px / 800 | Short category labels |

### Typography rules

- Keep headings at 1.05 line height and body copy near 1.62.
- Keep body copy at 16px or larger and product UI text at 14px or larger when the UI is functional rather than decorative.
- Use sentence case except for short eyebrows.
- Limit text lines to roughly 60–75 characters.
- Use one section-heading class across the page. Color may vary; size and line height should not.

## Ambient brand shapes

The oversized radial forms used on the enterprise homepage are a reusable Vantage Fit branding motif.

- Use `.vf-brand-field` on the section host.
- Add one or two decorative `.vf-brand-shape` elements with `aria-hidden="true"`.
- Use `.vf-brand-shape--slate` on dark product, participation, analytics, security, and ROI sections.
- Use `.vf-brand-shape--coral` on light, dark, or conversion sections; add `.vf-brand-shape--muted` behind body copy.
- Use `.vf-brand-shape--start` and `.vf-brand-shape--end` for the standard paired composition.
- Keep shapes behind the content, out of the reading order, and clear of essential text.
- Use no more than two shapes in one section and no more than one ambient-shape section per viewport.
- Do not use the shapes as icons, card decoration, or independent illustrations.

```html
<section class="vf-section vf-section--dark vf-brand-field">
  <span class="vf-brand-shape vf-brand-shape--slate vf-brand-shape--start" aria-hidden="true"></span>
  <span class="vf-brand-shape vf-brand-shape--slate vf-brand-shape--end" aria-hidden="true"></span>
  <div class="vf-container">...</div>
</section>
```

## Spacing and layout

The spacing scale is 4, 8, 12, 16, 24, 32, 48, 64, 80, and 96px.

- Maximum content width: `1180px` (`--vf-max-width`).
- Desktop outer gutter: 24px minimum per side; 48px where space allows.
- Mobile outer gutter: 16px.
- Standard section padding: 96px desktop, 64px mobile.
- Compact section padding: 64px desktop, 48px mobile.
- Default card radius: 22px.
- Default control height: 48px desktop, 56px mobile.
- Use a two-column layout only when both columns remain comfortably readable.
- On mobile, stack content and never shrink screenshots until text becomes illegible.

## Buttons and conversion hierarchy

| Priority | Class | Use |
|---|---|---|
| Primary | `.vf-button--primary` | Homepage coral-to-deep-red gradient for `Book a demo`, submit, or one core conversion |
| Secondary | `.vf-button--secondary` | Customer results, comparison, or next-best action |
| Dark | `.vf-button--dark` | Product exploration on light surfaces |
| Light | `.vf-button--light` | Primary action on dark or coral surfaces |
| Text | `.vf-button--text` | Low-priority navigation or content link |

Rules:

- Show one visually dominant CTA per viewport.
- Prefer specific verbs: `See customer results`, `Explore security`, `Read the customer story`.
- Never repeat `Learn more` across a card grid.
- Keep touch targets at least 44×44px; mobile CTA height is 56px.
- Do not show a sticky `Book a demo` when another `Book a demo` is already visible.

## Components

### Cards

Use `.vf-card` when a boundary helps users group related information. Use dividers and whitespace for simple lists.

- `.vf-card--raised`: important customer or result card.
- `.vf-card--positive`: progress, completion, and confirmed outcomes.
- `.vf-card--reward`: points, recognition, and milestones.
- `.vf-card--dark`: enterprise product or security content.

Avoid a full page of identical cards. Use one primary visual or story, then supporting content.

### Data

- `.vf-stat` creates a number, label, and optional change indicator.
- `.vf-progress` shows progress and requires a nearby text value.
- Use aggregate workforce language. Never imply individual medical surveillance.
- Source customer outcomes and ROI figures next to the metric.

### Tabs

Use tabs for two to five peer views in the same context. On mobile, allow the compact tab row to scroll without scrolling the page. Use `role="tablist"`, `role="tab"`, and `role="tabpanel"`, and maintain `aria-selected`.

### Accordions

Use accordions for progressive disclosure on desktop. On mobile, prefer compact tabs when users need to compare peer views. Use `+` and `−`, a 44px target, `aria-expanded`, and `aria-controls`.

### Forms

- Keep labels visible above the input.
- Mark required fields in text and programmatically.
- Explain requirements before validation errors.
- Never use placeholders as labels.
- Ask only for information needed at the current step.
- Use native input types and autocomplete attributes.

## Page composition

Recommended order for enterprise pages:

1. Sticky light header with one primary CTA.
2. Outcome-led hero with one primary and one secondary action.
3. Quiet customer or evidence strip.
4. Measurable outcome before detailed product explanation.
5. Dark product or analytics centerpiece.
6. Light educational or capability content.
7. Customer proof.
8. Dark security, ROI, or enterprise-readiness section.
9. Coral-led final CTA.
10. Dark footer.

Use about 75% light surfaces and 25% dark surfaces. Do not repeat the same two-column layout in every section.

## Content voice

Write primarily for CHROs, HR leaders, Benefits leaders, People Operations, and senior business leaders while demonstrating employee value.

### Do

- Use concise US English.
- Connect each feature to an HR or employee outcome.
- Use measurable, sourced language.
- Use “wellbeing” consistently.
- Describe inclusive, achievable activities.

### Avoid

- “Transform,” “revolutionize,” and “unlock potential.”
- Unsupported integrations, certifications, savings, or customer results.
- Medical claims or guaranteed healthcare outcomes.
- Fitness language that implies athletic performance is required.
- Long all-capital labels, tiny gray text, and generic stock wellness icons.

## Accessibility and responsive behavior

Target WCAG 2.2 AA and enhanced contrast for body copy where possible.

- Normal text: at least 4.5:1 contrast; aim for 7:1.
- Large text and essential UI boundaries: at least 3:1.
- Keyboard-visible focus on every interactive element.
- Semantic headings with one `h1` and logical section order.
- Descriptive alternative text for meaningful images.
- Captions and a clear play control for video.
- No status conveyed by color alone.
- Touch targets at least 44×44px.
- Respect `prefers-reduced-motion`.
- Avoid horizontal page scrolling.
- Keep product screenshots readable; crop or restructure before shrinking.
- On mobile, place content before supporting imagery unless the image is needed to understand the content.

## UX decision checks

Before approving a page, confirm:

- **Hick’s Law:** Is there one clear primary action and a digestible number of choices?
- **Jakob’s Law:** Do navigation, tabs, forms, and accordions use familiar web patterns?
- **Fitts’s Law:** Are CTAs and touch targets large and easy to reach?
- **Miller’s Law:** Is content grouped into short, understandable units?
- **Von Restorff Effect:** Does the primary CTA stand out without adding competing accents?
- **Serial Position Effect:** Are the opening value proposition and closing CTA strong?
- **Tesler’s Law:** Has complexity been handled by the product instead of transferred to the user?
- **Doherty Threshold:** Does interaction feedback feel immediate and motion remain lightweight?
- **Progressive Disclosure:** Is secondary detail revealed only when needed?

## Release checklist

- Uses shared tokens before adding new colors, spacing, or radii.
- Uses `.vf-section-title` consistently for section headings.
- Has one primary CTA per viewport.
- Includes mobile, tablet, and desktop layouts.
- Passes keyboard navigation and visible-focus checks.
- Meets contrast requirements.
- Has no unsupported claims.
- Honors reduced motion.
- Uses optimized images with explicit dimensions.
- Avoids horizontal scrolling at 320px width.
- Keeps the design system stylesheet namespaced and page-specific CSS separate.
