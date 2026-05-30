# Hardik Chemburkar — Portfolio Design System

A design system for the personal portfolio of **Hardik Chemburkar**, a Data
Scientist & AI Engineer (M.S. Data Science, University of Arizona). The portfolio
is a single-page, scroll-driven site that reads like a **premium analytics
dashboard for a person**: clean light surfaces, one decisive blue accent, mono
labels for structure, and quiet, purposeful motion.

> **Vibe in one line:** minimalist, data-driven, premium. Off-white canvas,
> professional blue, lots of breathing room, numbers treated as first-class
> citizens.

---

## Sources

This system was synthesized from two reference portfolios plus a detailed content
& interaction brief for Hardik. If you have access, explore the source repos to
build richer, more faithful designs:

- **bchiang7/v4** — https://github.com/bchiang7/v4
  Brittany Chiang's portfolio (Gatsby + styled-components). We borrowed its
  *structural* motifs — mono accent overlines, numbered section headings
  (`01.`, `02.`), the fancy `▹` list bullets, and its signature easing curve
  `cubic-bezier(0.645, 0.045, 0.355, 1)`. We did **not** keep its dark-navy /
  neon-green palette — Hardik's brief calls for a light, blue system instead.
- **CodeVinayak/Portfolio-v2** — https://github.com/CodeVinayak/Portfolio-v2
  A light-mode React/TypeScript portfolio. We referenced its split-hero layout,
  social-icon row, and pill button styling. Its multicolor brand SVGs were
  **not** imported — we use monochrome icon sets instead (see ICONOGRAPHY) to
  keep the premium-minimalist look cohesive.

The brief (provided directly, derived from Hardik's résumé) is the authoritative
spec for content, palette, and interactions.

---

## Hardik — at a glance (content source of truth)

- **Name:** Hardik Chemburkar
- **Title:** Data Scientist · AI Engineer
- **Contact:** +91 77386 67977 · hardikchemburkar@gmail.com · Mumbai, India
- **Status:** Open to work
- **Education:** M.S. Data Science, University of Arizona (2024–2026, GPA 3.88/4.0);
  B.Tech AI & ML, TCET Mumbai (2020–2024, GPA 9.47/10)
- **Socials:** GitHub, LinkedIn, Gmail, Kaggle, WhatsApp

Full experience, project, skill, and certification copy lives in the brief and is
reproduced inside the UI kit (`ui_kits/portfolio/`).

---

## CONTENT FUNDAMENTALS

How copy is written across the portfolio.

- **Voice:** Third-person-implied, achievement-first. Sentences lead with a strong
  past-tense verb — *"Architected," "Built," "Conducted," "Delivered,"
  "Improved."* No "I" or "you"; the subject (Hardik) is implicit. This reads as a
  polished résumé, not a chatty bio.
- **Density:** Every line earns its place with a concrete artifact or number.
  *"improving detection accuracy from 35% to 82%"*, *"490,482 papers"*,
  *"10 GB ChromaDB vector database"*, *"95% training and 88% test accuracy."*
  Metrics are the hero of the copy — never vague claims.
- **Casing:** Sentence case for body and bullets. Section labels are **UPPERCASE
  mono** (`SUMMARY`, `EXPERIENCE`, `PROJECTS`). Job titles & degrees use Title
  Case. Tech names keep their canonical casing (TensorFlow, Scikit-learn, BioBERT,
  ChromaDB, Power BI, MySQL, MongoDB).
- **Tone:** Confident, precise, technical-but-legible. Translates deep ML work for
  a "non-technical stakeholder" — the copy itself name-drops this skill
  (*"translated findings into actionable insights"*, *"data storytelling"*).
- **Tense & structure:** Past tense for experience/projects; present tense for the
  summary identity statement (*"Strategic Data Scientist… with expertise in…"*).
  Bullets are single sentences, parallel in structure.
- **Emoji:** None. This is a premium professional surface — zero emoji, zero
  exclamation marks. Emphasis comes from numbers and typography, not punctuation.
- **Numbers:** Always numerals (not spelled out), often with units or deltas
  (`35% → 82%`, `GPA 3.88/4.0`, `+1 Year`). Rendered in tabular mono where they
  appear as standalone figures.

**Example summary copy:**
> Strategic Data Scientist and AI Engineer with expertise in building predictive
> models, NLP data pipelines (BioBERT, RAG), and business intelligence dashboards.
> Proven track record of improving model accuracies and translating complex
> datasets into actionable stakeholder insights.

---

## VISUAL FOUNDATIONS

The visual language. See `colors_and_type.css` for the canonical tokens and the
Design System tab for live specimens.

### Color
- **Light mode only.** Canvas is off-white `--bg #f8fafc` (slate-50); cards and
  the floating dock are pure white `--surface #ffffff`; inset wells use
  slate-100. No dark mode.
- **One accent:** professional blue `--accent #2563eb` (blue-600) for links,
  primary buttons, active data, and the mono section labels. Hover deepens to
  blue-700. A blue-100 tint (`--accent-soft`) backs chips and highlights.
- **Neutrals do the heavy lifting:** a slate ramp from `#0f172a` (slate-900
  headings) → `#475569` (slate-600 body) → `#94a3b8` (slate-400 meta) →
  `#e2e8f0` (slate-200 hairlines).
- **The dark pill:** the floating-dock active indicator is slate-900 (`--ink`) —
  the only large dark element on the page, used as a deliberate accent of contrast.
- **Semantic:** an emerald LED `#22c55e` for the pulsing "open to work" dot, and
  green-600 for positive metric deltas. Used sparingly.
- **Imagery vibe:** cool, crisp, true-to-life. The profile photo is the single
  warm/human element and is kept sharp and unfiltered (it sits *above* the hero
  blur — never blurred or tinted).

### Type
- **Display & UI:** Hanken Grotesk — a humanist grotesk standing in for the
  proprietary *Calibre* used in bchiang7/v4. Weights 400/500/600/700/800. Big
  headings are 700–800 with tight tracking (`-0.02em`).
- **Mono accents:** JetBrains Mono — for the `01.` section numbers, uppercase
  labels (letter-spacing `0.14em`), and all standalone data figures
  (`font-variant-numeric: tabular-nums`).
- **Scale:** 12 → 88px (`--fz-xxs` … `--fz-display`). Body 16px at line-height
  1.6; leads at 20px. On 1080-tall surfaces text never drops below ~14px.

### Spacing & layout
- **4px base grid.** Tokens `--sp-1`…`--sp-24`. Generous section rhythm
  (80–96px vertical between sections) — whitespace is a feature.
- **Fixed / sticky chrome:** "Open to work" badge pinned top-left; "Download CV"
  button pinned top-right; a floating, centered, pill-shaped **dock** fixed at the
  bottom. The hero profile photo is **sticky** so it stays sharp and stationary
  while text scrolls beneath a blur.
- **Content max-width** ~1000–1100px, centered.

### Surfaces, borders, radii
- **Cards:** white, 1px slate-200 border, radius `--r-lg 20px`, soft shadow
  `--shadow-sm`. On hover they lift to `--shadow-md` and the border tints blue.
  No colored-left-border cards, no heavy gradients.
- **Radii scale:** 6 / 10 / 14 / 20 / 28px, plus a full pill (`999px`) for the
  dock, buttons, badges, and skill chips.
- **Buttons:** primary = solid blue pill with `--shadow-accent`; secondary =
  white pill with slate border. Both are fully rounded.

### Shadows & elevation
- Soft, low-spread, cool-tinted (`rgba(15,23,42,…)`). Four steps xs→lg plus a
  dedicated pill shadow for the dock and an accent shadow for primary buttons.
  No inner shadows; no neumorphism.

### Transparency & blur (the hero signature)
- The scrolling hero text sits in a **glass panel**: `--glass-bg` (72% slate-50)
  + `backdrop-filter: blur(12px)`. As the page scrolls, body content blurs behind
  this panel while the **profile photo stays crisp and on top** — the defining
  interaction, adapted from the brief.

### Motion
- **Easing:** `cubic-bezier(0.645, 0.045, 0.355, 1)` for everything
  (lifted from bchiang7/v4); a gentle spring `cubic-bezier(0.34,1.56,0.64,1)` for
  the gliding dock pill (Framer Motion `layoutId`).
- **Entrances:** subtle `fadeInUp` on scroll (8–16px rise, ~0.5s), staggered.
- **Hover:** lift + shadow grow + border tint; links shift to blue. ~0.18–0.28s.
- **Press:** slight scale-down (0.97) on buttons and cards.
- Restrained overall — no bounces except the dock pill, no parallax gimmicks.

---

## ICONOGRAPHY

The portfolio uses **two cohesive monochrome icon systems**, chosen for a premium,
data-driven feel. No emoji, no unicode glyph icons (except the inherited `▹`
fancy-list bullet and `→` arrows).

- **Brand / tech logos → Simple Icons** (https://simpleicons.org), loaded from
  the jsDelivr CDN as monochrome SVGs and recolored via `fill`/`currentColor`.
  Used in the **Skills grid** (strictly icon-only, no text labels) and the
  **social row**: Python, R, MySQL, MongoDB, TensorFlow, scikit-learn, pandas,
  NumPy, Streamlit, Docker, Git/GitHub, Jupyter, Linux, Tableau, Power BI,
  Plotly/ChromaDB, plus GitHub, LinkedIn, Gmail, Kaggle, WhatsApp.
- **UI icons → Lucide** (https://lucide.dev), loaded from CDN. Stroke icons at
  1.75px weight for interface affordances: download, map-pin, mail, phone,
  arrow-up-right, external-link, x (close), graduation-cap, briefcase, award.

  **Substitution flag:** Some brand marks (e.g. Power BI, ChromaDB) have no
  official Simple Icon. Where a logo is missing we substitute the nearest
  available mark or a Lucide glyph (e.g. a generic `bar-chart`/`database`) and
  note it inline. Tell Hardik if you need exact brand marks supplied.

- **Why not the source repos' SVGs?** CodeVinayak/Portfolio-v2 ships *multicolor*
  brand SVGs (varying styles). To preserve the monochrome premium aesthetic we
  use Simple Icons instead and tint them per-context. bchiang7/v4 uses Feather
  (the predecessor to Lucide), which Lucide cleanly supersedes.

---

## INDEX — what's in this design system

Root files:
- **README.md** — this file. Context, content & visual foundations, iconography.
- **colors_and_type.css** — canonical CSS variables: color, type, spacing, radii,
  shadows, motion, plus semantic type-role classes (`.ds-display`, `.ds-label`…).
- **SKILL.md** — Agent-Skill manifest so this system can be used in Claude Code.

Folders:
- **preview/** — Design System tab cards (colors, type, spacing, components).
  Small standalone HTML specimens.
- **ui_kits/portfolio/** — high-fidelity recreation of Hardik's single-page
  portfolio: `index.html` (interactive demo) + factored JSX components
  (hero with scroll-blur, floating dock, experience timeline, skills grid,
  project grid with expanding modal, footer). See its own README.

Icons & assets: this system uses **CDN icon sets** (Simple Icons + Lucide) rather
than a local `assets/` folder for icons — see ICONOGRAPHY. The one local image
asset is **`assets/hardik.png`** — Hardik's background-removed hero portrait
(transparent PNG, used in the UI kit hero with a soft drop-shadow).

Fonts: loaded from Google Fonts (Hanken Grotesk + JetBrains Mono) — see the
substitution note below.

---

## Font substitution note

The reference (bchiang7/v4) uses **Calibre** (proprietary) and **SF Mono**.
Neither is freely redistributable, so this system substitutes:
- **Calibre → Hanken Grotesk** (humanist grotesk, similar warmth & proportions)
- **SF Mono → JetBrains Mono** (technical monospace)

If you have licensed Calibre/SF Mono (or prefer different families), drop the
font files into `fonts/` and update `--font-sans` / `--font-mono` in
`colors_and_type.css`. **Flagging this so Hardik can supply preferred fonts.**
