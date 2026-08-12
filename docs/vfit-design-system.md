# Vantage Fit Design System

This system translates the `enterprise-final` homepage into reusable standards for future Vantage Fit web pages. The visual reference is available at `/design-system`, the reusable CSS source is `/vfit-design-system.css`, and machine-readable tokens are available at `/vfit-design-tokens.json`.

**The homepage is the reference.** Every value in the system is taken from `enterprise-final.html`. Where the two disagree, the homepage is right and the system is wrong: fix the system, not the page. Two values are extensions rather than homepage values, both because the homepage has no accessible stop for them — `--vf-teal-700` and `--vf-orange-700`, for teal and orange used as text on white.

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
| Mid teal | `--vf-teal-600` | `#169D7E` | The homepage's tinted-pill text tone |
| Dark teal | `--vf-teal-700` | `#146F58` | Positive text and small-interface labels |
| Orange | `--vf-orange-500` | `#FF9D57` | Rewards, milestones, achievements |
| Dark orange | `--vf-orange-700` | `#B84F16` | Reward text that must clear 4.5:1 |
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

Noto Sans is the only web typeface. Every size below is the homepage's own scale. Weights are **not uniform, by design**: the hero display inherits 700, while section headings are 800 via the homepage's `h2.section-heading` rule. Use 400 for body copy and inline text links, 600 for controls, and 800 for section headings, eyebrows and stat values.

| Style | Class | Size | Weight | Typical use |
|---|---|---|---|---|
| Display | `.vf-display` | 41–68px responsive | 700 | Hero headings only |
| Section | `.vf-section-title` | 32–51px responsive | **800** | One consistent heading style across sections |
| Subsection | `.vf-subsection-title` | 22–30px responsive | 700 | A heading inside a section, below the section title |
| Card | `.vf-card-title` | 18px | 700 | Component and content-card titles |
| Lead | `.vf-lead` | 18px, 16px below 1040px | 400 | Section introduction |
| Body | `.vf-body` | 16px | 400 | Paragraphs |
| Small | `.vf-small` | 13px | 400 | Supporting content, card copy, menu descriptions |
| Eyebrow | `.vf-eyebrow` | 11.5px | 800 | Short category labels |

### Typography rules

- **Never override `font-size` on a heading class**, in a page's local `<style>` block or inline. If a heading looks wrong at its size, the level is wrong: pick the class that matches it. The scale is display > section > subsection > card, and there is no size between them.
- Display headings sit at 700; section headings sit at 800. Both are the homepage's values — check which level you are on rather than assuming one weight.
- Inline text links (`.vf-button--text`) are **regular weight (400)**, not bold. The homepage resets them last, after noting they had drifted to 800 across sections.
- Heading line height is 1.04; `.vf-display` tightens to 1.01 (1.1 below 560px) and `.vf-section-title` runs at 1.08. Body copy is 1.55; the lead runs looser at 1.6, and 1.62 below 1040px.
- Heading tracking is -0.035em; stat values are -0.06em.
- Keep body copy at 16px or larger and product UI text at 13px or larger when the UI is functional rather than decorative.
- Use sentence case except for short eyebrows.
- Limit text lines to roughly 60–75 characters. A page-local rule may set `max-width` on a heading for measure; that is the only type property it may touch.
- Use one section-heading class across the page. Color may vary; size and line height must not.

## Completion rings

The Vantage Fit app shows completion as a **ring**, not a bar — on challenge tasks, the daily summary and trends. Marketing pages that show product truth should use the same motif.

- Use `.vf-ring` with a `--vf-ring-value` of 0–100. The SVG circles carry `pathLength="100"`, so the value is a literal percentage and the markup never needs the circumference.
- Colour carries meaning, matching the app: `.vf-ring--coral` for activity and steps, `.vf-ring--teal` for completion, `.vf-ring--orange` for calories.
- Size with `--vf-ring-size` (default 3.25rem) and `--vf-ring-width` (default 5).
- Mark the ring `aria-hidden="true"` and put the real figure in the surrounding copy or the card's `aria-label`; a ring on its own is not an accessible value.
- Pair it the way the app does: label and value on the left, ring on the right.

```html
<span class="vf-ring vf-ring--coral" style="--vf-ring-value: 84" aria-hidden="true">
  <svg viewBox="0 0 44 44" focusable="false">
    <circle class="vf-ring__track" cx="22" cy="22" r="19" pathLength="100"/>
    <circle class="vf-ring__value" cx="22" cy="22" r="19" pathLength="100"/>
  </svg>
  <b class="vf-ring__label">84%</b>
</span>
```

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

The spacing scale is 4, 8, 12, 16, 22, 32, 48, 56, 64, and 72px. The homepage has no formal spacing scale of its own, so this one is the system's; only the section rhythm and gutters below are taken directly from it.

- Maximum content width: `1180px` (`--vf-max-width`).
- Desktop outer gutter: 48px per side (`--vf-gutter`).
- Mobile outer gutter: 32px, from 860px down.
- **One section-top rhythm**: every main content section sits the same distance from its boundary to its heading — 72px, 56px below 1040px, 40px below 760px (`--vf-section-top`).
- Section bottom spacing is deliberately per-section on the homepage. `--vf-section-bottom` defaults to 96 / 76 / 60px; override it on a section rather than editing the token.
- Compact section padding: 56px desktop, 48px below 860px.
- Card padding: 22px. Default card radius: 22px; the radius set is 10 / 15 / 18 / 22px.
- Default control height: 48px desktop, 56px on a phone.
- Nav height: 64px (`--vf-nav-h`).
- Breakpoints are the homepage's: 1100, 860, 560, and 400px, plus a short-laptop query at `(min-width: 981px) and (max-height: 860px)`.
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
