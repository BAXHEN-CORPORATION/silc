# Marketing Site UI Kit — SILC × Material Kit Pro

A high-fidelity recreation of the **Ministério Tânia Tereza** marketing site, built by mapping:

- the **legacy SILC color theme** (dark canvas, hot red, lavender chips, deep-blue testimonial band) — taken from `uploads/land_page_legacy.pdf`, and
- onto **Material Kit Pro's component vocabulary** (lifted `mainRaised` content panel, colored umbra shadows, uppercase small button text, parallax dark-filter hero, `InfoArea` blocks, profile card with image-left content-right, 6px card radius) — taken from the local mounted `next.js-material-kit-pro/` codebase.

## How it's structured

```
ui_kits/marketing_site/
├── README.md           ← this file
├── index.html          ← the assembled landing page (loads everything)
├── styles.css          ← MKP-flavored component CSS, layered on /colors_and_type.css
├── components.jsx      ← primitives: Header, Button, Card, InfoArea, Parallax, Footer, …
└── sections.jsx        ← page sections: Hero, Products, Pastora, Events, Testemunhos, Books, Cursos, Cultos, VideoBanner, Contact, App
```

## Component map — MKP origin → SILC use

| MKP component | What it does | SILC re-purpose |
|---|---|---|
| `Header` + `HeaderLinks` | Fixed nav, color changes on scroll | Same. Brand logo + 6 nav items + lang + user + cart |
| `Parallax filter="dark"` | Hero with dark scrim | Crowd photo + "Pastora Tânia Tereza" hero |
| `mainRaised` panel | Content lifted -60px over hero, soft shadow | Same wrapper for the first 3 sections |
| `Button color="danger"` | Raised pill with colored shadow | Primary CTA (Seminários, Comprar, Enviar Mensagem) |
| `Button outlined round` | Outlined alt | Secondary CTAs (Detalhes, Ver todos) |
| `Button justIcon simple` | Icon-only ghost | Social buttons under About section |
| `InfoArea` (icon + title + desc) | MKP feature triplet | Legacy "Ajudando Pessoas" 3-column product blurbs |
| `Card profile` (img-left, body-right) | MKP team card | "Sobre a Pastora" section |
| `Card` (img-top, body, footer) | MKP blog card | Event/Book/Course tiles |
| `ColoredShadowImage` | MKP signature glow under image | Pastora portrait + course thumbnails |
| `CustomInput` (underline label) | MKP form field | Contact form |
| `Footer` 3-column | MKP footer with social row | Ministry info / Links / Redes Sociais |

## Component coverage (what's faked, what's not)

- **Real-looking, interactive:** Header (scroll color change), Button (all variants), Card, InfoArea, CustomInput (focus+filled), Badge, Parallax (vertical movement), Contact form (submit state).
- **Fake/cosmetic:** Login, cart, account, language switcher are buttons only, no flows. Event/book/course "Detalhes" buttons don't navigate. Video play buttons are visual.
- **Placeholders:**
  - Event poster images, book covers, course thumbnails, and pastora portraits all use **Unsplash placeholders** — the real ministry photo assets weren't shared. Replace by editing `POSTER_PLACEHOLDER`, `PASTORA_PORTRAIT`, `PASTOR_COUPLE`, `CROWD_BG`, `VIDEO_BANNER_BG` constants at the top of `sections.jsx`.
  - Icons are **Lucide** (CDN). Swap for the real ministry icon set when available.

## Iteration notes

- The hero portrait sits inside a `box-shadow: 0 0 0 4px var(--red-500)` ring — that's the strongest visual brand motif from the legacy and I kept it intact.
- The `mainRaised` overlap is `-60px` per MKP convention. On screens <900px it auto-tightens.
- Section rhythm follows MKP's `--mkp-section: padding 96px 0`. The single dark-blue band (`--bg-panel`) appears on the Testemunhos section only — same as legacy.
- Buttons keep MKP's uppercase + `letter-spacing: 0.03em`, but I bumped weight from `400` → `500` because thin uppercase on a dark canvas reads as too thin.

## To extend this kit

The same primitives compose the other product surfaces (Inscription form, SILC Online checkout, Past edition gallery, Admin panel). New components to add when those flows arrive:
- `Stepper` (inscription steps)
- `LessonPlayer` (online course)
- `PhotoGrid` (past edition archive)
- `DataTable` + `Sidebar` (admin)
