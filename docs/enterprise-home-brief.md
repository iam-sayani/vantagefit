# Vantage Fit — Enterprise Homepage Redesign Brief
Prepared as: VP Product Marketing exercise. Target: Senior HR leaders, CHROs, Benefits and Wellbeing leaders, US enterprise.
Deliverable page: `enterprise.html` (5 full-screen scroll sections).

---

## 1. Audit of the current homepage (vantagefit.io)

### Messaging weaknesses
1. **The category line leads, the outcome hides.** The hero sells "a wellness platform" (a category claim every competitor makes) while the one thing buyers cannot get elsewhere, attributable participation numbers, sits scattered mid-page. Our north star (participation) never appears above the fold.
2. **Mechanics before meaning.** "Cue, Action, Reward" explains behavioral theory before the buyer knows what business problem is solved. Enterprise buyers scan for outcome, risk, and proof in that order; theory belongs on a feature page.
3. **Proof is fragmented.** Client stats, review badges, testimonial videos, and logos appear in four separate sections with different visual treatments, so no single moment lands as "this is proven."
4. **Trust is under-told for the audience.** For a US enterprise buyer evaluating an India-based vendor, security is a top-3 objection. The current "Your data is safe with us" is one heading and one badge image, with no explanation of the privacy model (who sees what data). HIPAA/SOC 2 exist as alt text, not as a story.
5. **Strategic tension (flagged, not resolved here):** Phase-1 evidence showed closed-won buyers skew India mid-market and US/UK SMB. This brief follows the stated US-enterprise direction, but proof selection deliberately leads with US-attributable stories (Brazosport ISD, BWC Real Estate) so the page is credible to that audience rather than aspirational.

### UX/UI issues
1. ~12 scroll sections with no narrative spine; the page reads as an inventory, not an argument.
2. Three competing CTA verbs (Book a Demo, View Pricing, Watch video) with equal visual weight; no primary path.
3. Feature carousels force interaction to see core value; enterprise visitors do not click carousels.
4. Testimonial videos (the strongest asset) sit ~70% down the page.
5. Mobile: long sections stack into a 25+ screen scroll.

### Conversion opportunities
1. Lead with the north-star metric as a benchmarked number ("86%, 16 points above benchmark") rather than an adjective.
2. One primary CTA (Book a demo) repeated at hero and closer; pricing as the transparent secondary.
3. Put a human face + voice (video) directly after the numbers so proof compounds.
4. Answer the security objection on the homepage instead of leaving it to a sales call.
5. De-risk the ask: "No IT project. Live in a couple of days."

### Retain
- Testimonial videos + quotes (Rachel Arthur/BISD, Shyam Surendran/Landmark Leisure, Matt Whitmore/BWC Real Estate)
- Certification set: HIPAA, SOC 2, ISO 27001, ISO 27701, GDPR
- Attributed client metrics: Brazosport ISD 86% (16 pts above benchmark), IBS Software 88% in 28 days, Wipro 3X (163→550 active users), Tata Motors 59% (Step & Stride)
- Review ratings (G2 4.5, Capterra 4.5, Gartner PI 4.7); "100+ organizations"; 190+ countries; transparent pricing posture

### Remove / consolidate
- "Cue Action Reward" theory section (fold the idea into one line in How-it-works)
- Feature carousels and the 3-card feature grid (nav dropdown + feature pages carry this)
- Blog/resource teasers on the homepage
- Competitor comparison strip (keep on /compare/ for SEO)
- Duplicate stat blocks; one proof moment only

---

## 2. Information architecture: the 5-screen story

One argument, five beats. Each beat answers the next question an enterprise HR buyer asks:

| # | Screen | Buyer question answered | Content |
|---|--------|------------------------|---------|
| 1 | **Hero: the metric** | "What do I get?" | Participation as headline number, benchmarked and attributed. Primary CTA. |
| 2 | **How it works** | "Why would this work where others failed?" | Employee habit loop (nudge → activity → reward) connected to the HR scoreboard (admin dashboard). |
| 3 | **Proof** | "Who like me has done this?" | Stat strip + 3 customer video testimonials, US-led. |
| 4 | **Trust** | "Is this safe to bring into my company?" | Privacy model (employees see their data, HR sees trends) + HIPAA, SOC 2, ISO 27001/27701, GDPR + global scale. |
| 5 | **Closer** | "What happens if I say yes?" | Low-risk ask, transparent pricing, single CTA. Condensed footer. |

## 3. Wireframe (desktop, each = one viewport)

```
┌─────────────────────────────────────────────┐
│ [glass nav: logo | Solutions Features        │
│        Resources Pricing | Book a demo]      │
│ 1 ▸ KICKER                                   │
│   H1: participation-led headline             │
│   sub (attributed proof) · [Book a demo]     │
│   [See how it works ↓]                       │
│   86%  ← hero stat, count-up                 │
│   trust line: 100+ orgs · 190+ countries · G2│
├─────────────────────────────────────────────┤
│ 2 ▸ HOW IT WORKS                             │
│   H2 + 3 steps (Nudge / Earn / Measure)      │
│   [clay laptop: admin dashboard]             │
├─────────────────────────────────────────────┤
│ 3 ▸ PROOF                                    │
│   stat strip: 86 · 88 · 3X · 59              │
│   [▶ video] [▶ video] [▶ video]              │
│   (click-to-play, name/role/logo)            │
├─────────────────────────────────────────────┤
│ 4 ▸ TRUST (dark)                             │
│   H2: Your data is safe with us              │
│   privacy model copy                         │
│   [HIPAA][SOC 2][ISO 27001][ISO 27701][GDPR] │
│   190+ countries · 14+ languages · SLA line  │
├─────────────────────────────────────────────┤
│ 5 ▸ CLOSER                                   │
│   H2 + de-risk line · [Book a demo][Pricing] │
│   mini-footer                                │
└─────────────────────────────────────────────┘
```

Mobile: snap relaxes to normal scroll (`proximity`), sections grow to content height.

---

## 4. Navigation & submenu proposal

Top level unchanged: **Solutions · Features · Resources · Pricing** + persistent **Book a demo** CTA.

**Solutions** (by program, then by workforce)
- Wellness Challenges: Steps Challenge · Custom (Multi-activity) Challenges · Team Challenges · Virtual Marathon
- Programs: Mental Health & Well-being · Holistic Wellness Program · Wellness Rewards Program
- By workforce: Global & Distributed Teams · Remote Teams · Frontline/Manufacturing (future)

**Features** (capability-led, scalable)
- Engage: Challenges & Gamification · Rewards & Incentives · Engagement Tools
- Measure: Admin Dashboard & Analytics · Org Wellness Score · Health Insights & Risk Assessment
- Run: Content Library · Integrations (wearables, Slack/Teams) · Health Data Upload
- Trust: Security & Compliance (dedicated page; the homepage trust section links here)

**Resources**
- Client Stories (case studies + video library) · Blog · Help Center · Guides & ROI resources · Product Updates

**Pricing** — direct link (transparent pricing is a differentiator; do not bury it).

Rationale: submenus mirror how enterprise buyers delegate evaluation (program owner → Solutions; analyst → Features/Measure; security reviewer → Trust; procurement → Pricing). Every group maps to existing pages on the current site, so IA is adoptable without new page debt.

---

## 5. Homepage copy deck (final)

**S1 Hero**
- Kicker: `EMPLOYEE WELLNESS, MEASURED`
- H1: `Participation is the number. We put ours on the homepage.`
- Stat: `86%` — `employee participation at Brazosport ISD, 16 points above benchmark`
- Sub: `Vantage Fit is the wellness platform employees keep using after launch week. Challenges they opt into, rewards they actually want, and a dashboard that proves it worked.`
- CTA primary: `Book a demo` · secondary: `See how it works` (scrolls)
- Trust line: `100+ organizations · 190+ countries · 4.5 on G2`

**S2 How it works**
- Kicker: `HOW IT WORKS`
- H2: `A habit loop for employees. A scoreboard for HR.`
- Steps: `Nudge` ("A challenge invites the activity. Steps, sleep, mindfulness, or anything you design.") · `Earn` ("Activity earns points. Points become gift cards from Amazon, Starbucks, or Nike.") · `Measure` ("Participation, activity, and an org wellness score, live on one dashboard.")
- Caption under laptop: `The admin view your team sees. When your CFO asks if it worked, you answer with numbers.`

**S3 Proof**
- Kicker: `CUSTOMER STORIES`
- H2: `HR leaders, on camera, with their numbers.`
- Stats: `86% participation, Brazosport ISD` · `88% engagement in 28 days, IBS Software` · `3X participation, Wipro (163 to 550)` · `59% engagement, Tata Motors Step & Stride`
- Videos: Rachel Arthur (Director of Benefits & Wellness, BISD) · Shyam Surendran (Sr. Manager Training, Landmark Leisure) · Matt Whitmore (Managing Partner, BWC Real Estate), each with existing quote.

**S4 Trust** (dark screen)
- Kicker: `ENTERPRISE-GRADE TRUST`
- H2: `Your data is safe with us.`
- Body: `Employees see their own data. HR only ever sees the trends. No admin screen or export exposes one person's numbers, so the program earns trust instead of suspicion.`
- Badges: `HIPAA · SOC 2 · ISO 27001 · ISO 27701 · GDPR`
- Scale row: `190+ countries · 14+ languages · Dedicated account manager`

**S5 Closer**
- H2: `See why 100+ organizations trust Vantage Fit to keep employees active all year.`
- Sub: `Run it for a month. Judge it on participation.`
- CTAs: `Book a demo` · `View pricing`
- De-risk note: `No IT project. Live in a couple of days.`

Voice rules applied: no em-dashes, no exclamation decoration, verb-led CTAs, every metric attributed to client + program, "100+ organizations" as the only scale claim.

---

## 6. UX/UI rationale, per section

1. **Hero** leads with the north-star number because enterprise buyers anchor on the first quantified claim they see; benchmarked attribution ("16 points above benchmark") pre-empts the "against what?" objection. One primary CTA; the secondary invites a scroll, not a detour.
2. **How it works** exists to answer the skeptic's "we tried wellness, it died by week six." The loop shows *why* retention happens (rewards employees value), and the dashboard connects employee behavior to the buyer's own deliverable: a number they can take upstairs.
3. **Proof** pairs statistics with faces. Numbers persuade the rational reviewer; a peer on camera persuades the committee. US-led ordering (BISD, BWC) matches the target market.
4. **Trust** is a full screen, not a footnote, because vendor-risk review is where India-based SaaS loses US enterprise deals. Explaining the privacy *model* (not just badges) speaks to the CHRO's real fear: employee backlash over surveillance.
5. **Closer** converts momentum with a low-risk framing and pricing transparency, which filters unqualified leads and signals confidence.

Page kept to 5 viewports so a CHRO's first visit is a 60-second story; everything deeper lives one click away in the proposed nav.
