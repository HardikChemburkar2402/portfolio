# Portfolio UI Kit — Hardik Chemburkar

A high-fidelity, interactive recreation of Hardik's single-page portfolio: a
scroll-driven personal site styled as a premium analytics surface (light slate,
blue-600 accent, mono labels, glass panels).

Open **`index.html`** for the live demo. It's a React app (CDN React 18 + Babel)
composed from small, factored JSX components that share the project's design
tokens (`../../colors_and_type.css`) plus this kit's `styles.css`.

## What's interactive
- **Floating dock** (bottom): a scroll-spy highlights the active section; the
  dark pill *glides* between items. Click any item to smooth-scroll there.
  (Production uses Framer Motion `layoutId`; recreated here by measuring the
  active item's rect and animating one pill via CSS spring transition.)
- **Hero scroll-blur:** content sits in glass panels with `backdrop-filter`,
  blurring a fixed oversized watermark behind them; the profile photo is
  **sticky and stays sharp**, above the blur.
- **Animated job title** cycles "Data Scientist" ⇄ "AI Engineer" with a caret.
- **Skills grid:** icon-only (no text labels), Simple Icons recolored to slate;
  hover lifts + scales. Missing brand marks (SQL, ChromaDB, Power BI, Tableau)
  fall back to Lucide glyphs.
- **Project cards → expanding modal:** clicking a card runs a FLIP expand from
  the card's position into a centered modal with the deep-dive; Esc / backdrop /
  Close dismisses.
- **Contact form:** the footer "Say hello" button opens a contact modal (Name /
  Email / Message, validated). It sends to Hardik via a **Formspree** endpoint if
  one is set in `contact.jsx` (`CONTACT_ENDPOINT`), otherwise it falls back to a
  pre-filled `mailto:` to `hardikchemburkar@gmail.com`.
- **Hero background motif:** a faint analytics line-chart (nodes + baseline grid)
  sits in the fixed background layer behind the glass — a minimal nod to the data
  role, blurred by the hero panel and sharp beside the photo.
- **Profile photo** is an `<image-slot>` — drag an image onto it to fill.

## Files
| File | Role |
|------|------|
| `index.html` | Entry — loads React/Babel, tokens, styles, and all components |
| `styles.css` | All kit styling (light/slate/blue system) |
| `data.jsx` | Content source of truth (profile, experience, skills, projects, …) |
| `icons.jsx` | `Icon` (Lucide inline) + `BrandIcon` (Simple Icons CDN, recolored) |
| `chrome.jsx` | `StatusBadge`, `DownloadCV`, `FloatingDock` |
| `hero.jsx` | `Hero` — split layout, sticky photo, glass panel |
| `sections.jsx` | `SectionHead`, `Summary`, `Experience`, `Skills`, `Education` |
| `projects.jsx` | `Projects` grid + FLIP modal |
| `footer.jsx` | `Footer` — CTA + social row |
| `contact.jsx` | `ContactModal` — validated contact form (Formspree or mailto) |
| `app.jsx` | Composition + scroll-spy + smooth-scroll + hero data-motif |
| `image-slot.js` | User-fillable photo placeholder (starter component) |

## Components are reusable
Each component exports to `window` so you can mix them into other layouts. They're
intentionally cosmetic recreations — not production logic. Edit `data.jsx` to
re-skin with different content; the layout follows.

## Coverage & omissions
This kit covers the surfaces in Hardik's brief: hero, summary, experience
timeline, skills, education + certifications, projects (with modal), and contact
footer. There is **no** blog, contact form backend, or multi-page routing in the
brief, so those are intentionally omitted.
