# Ministério Tânia Tereza — Design System

A design system for the **SILC** product family (Seminário Intensivo de Cura e Libertação) — a Brazilian Christian seminar that runs recurring in-person events around the world, an online version of the same course, an archive of past editions, and an internal admin for the central team.

> The brand is owned by **Ministério Tânia Tereza**. The *product* is the SILC. The v2 of this design system treats the SILC as the product (not the pastor) and routes every screen around the four MVP user types: prospective in-person participant, prospective online participant, alumnus looking up their past edition, and the internal admin team.

Language: **Portuguese (pt-BR).** Tone: warm, devotional, plain.

---

## Product surfaces (v2 MVP scope)

| Surface | Built? | Notes |
|---|---|---|
| Marketing site — Home + IA | ✅ | Two clear paths (Presencial / Online) above the fold |
| Próximos Seminários (with country filter) | ✅ | Grid of event cards; filterable |
| Evento Detalhe (futuro) | ✅ | What happens / what you get / practicals / team / inscription form |
| Evento Detalhe (passado) | ✅ | Same shell, with photo gallery instead of inscription |
| Seminários Anteriores (archive) | ✅ | Year-grouped archive |
| SILC Online (sales page) | ✅ | Features, comparison vs presencial, inscription form |
| Sobre o SILC | ✅ | What it is, the week, the team roles |
| Contato | ✅ | Form + email + WhatsApp |
| Admin — dashboard | ✅ | KPI row + event table |
| Admin — event editor | ✅ | All required fields + photo upload (for past events) + status toggle |

Backlog (Fase 2, not built): igreja directory, livros store, facial recognition, organizer accounts, payment integrations.

---

## Source materials

| What | Where | Notes |
|---|---|---|
| Legacy landing page (3-page PDF) | `uploads/land_page_legacy.pdf` → `assets/reference-legacy-page-{1,2,3}.png` | Source for the **color theme** (dark canvas, hot red, lavender chips). |
| Ministry logo | `uploads/logo-ministerio-tania-tereza.png` → `assets/logo-ministerio-tania-tereza.png` | Heart-in-hand mark + wordmark. White-on-dark, 256×122 PNG with alpha. |
| Material Kit Pro (Next.js) | `next.js-material-kit-pro/` (local mount) | Source for v1's component vocabulary. Preserved as `ui_kits/marketing_site/v1.*` for reference. v2 moved away from MKP to a more modern editorial direction. |
| Stakeholder brief | Composer | Provided user-types, IA, and user stories. |

---

## VISUAL FOUNDATIONS — v2 (current)

The current direction (v2) is **modern editorial dark**: black canvas, hot-red accent, generous whitespace, 1px hairline borders instead of heavy shadows, big display sans for headlines, an italic display serif (`DM Serif Display`) for poetic moments, and a mono font for caps labels and tabular numerals.

### Color

The legacy "three moods" survive in v2:

1. **Black canvas** (`--bg-1: #0B0B0E`) — most of the screen. The page edges press down to pure `#000`.
2. **Hot red** (`--red-500: #ED3A3A`) — used decisively but sparingly: primary CTAs, the `.` in the SILC wordmark, the eyebrow dot, the italic accent words in headlines, and stamp markers like "Inscrições encerradas".
3. **Soft lavender** (`--lavender-400: #B7A3F5`) — kept for visual continuity with the legacy "check" markers. Used sparingly on icon chips.

A **dark-blue panel** color (`--bg-panel: #1B2A3F`) is available for rhythmic section breaks (used once on legacy for Testemunhos).

All tokens live in `colors_and_type.css`.

### Type

- **Display + body:** `Plus Jakarta Sans` (geometric, slightly rounded, modern). Used at 400/500/600/700/800.
- **Editorial accent:** `DM Serif Display` italic — for emphasized words inside display headlines ("transformar") and for the SILC wordmark.
- **Labels & tabular numerals:** `JetBrains Mono` — eyebrow labels, KPI numbers, dates, country codes.

> ❗ **Font substitution flagged.** No real fonts shared. `Plus Jakarta Sans` was picked as the closest match to the legacy headings; `DM Serif Display` italic is a high-contrast serif chosen to balance the heavy sans. If/when the team can share the production font files, drop them in `fonts/` and update `colors_and_type.css`.

### Layout

- **Container:** 1240 px max, 32 px side gutters.
- **Section rhythm:** 120 px vertical padding on most public sections; 80 px on tighter ones; admin pages have a 240 px sidebar.
- **Grids:** flex-based path cards, CSS grid for stats and events.
- **Hairlines:** 1px `var(--line-1)` is the primary structural element — borders on cards, dividers between sections, footer columns.
- **Hero:** no portrait. Bold sans display + italic-serif accent word + the two **path cards** (Presencial / Online).

### Backgrounds & imagery

- **Hero** uses a soft radial-gradient ambient glow (red + lavender, very low opacity) plus a masked atmospheric photo at 18% opacity.
- **Featured event** uses a full-bleed photo with a gradient scrim and a country-flag chip overlaid.
- **Past-event gallery** is a CSS-grid mosaic with a `is-wide` modifier for occasional 2-cell-wide tiles.
- **No illustrations, no decorative gradients on flat surfaces.**

### Shape

| Element | Radius |
|---|---|
| Buttons | 8 px (not pill, not 3 px — feels modern + decisive) |
| Cards (event, testimonial, path) | 14–18 px |
| Inputs | 10 px |
| Country chips / filter chips | 999 px |
| Avatar / portrait dots | 50 % |

### Borders & elevation

- **Borders are the primary lift mechanism** — 1px `rgba(255,255,255,0.08)` for default, 1.5px stronger on the path cards. Hover bumps the border to `rgba(255,255,255,0.16)` and adds a 2px upward translate.
- **Shadows are minimal** — kept only for the `.tcard__video` (modal-ish) and admin elevations. The MKP-style colored umbra shadows live on in tokens (`--shadow-mkp-*` in `colors_and_type.css`) and on v1's preserved kit.

### Animation

- Subtle, devotional, never bouncy.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for most things.
- Hover: borders brighten over 200 ms; cards translateY -2 px; button arrows shift right 3 px.
- Press: 96 % scale, 120 ms.
- Marquee (past cities ribbon): 50 s linear loop.

### Transparency & blur

- The fixed nav has a `backdrop-filter: blur(14px)` and `rgba(11,11,14,0.86)` background after 24 px scroll.
- The hero has a `mask-image` radial that fades the atmospheric photo into the canvas.
- Otherwise prefer solid surfaces.

### Layout rules

- Nav fixed top, transparent at rest, becomes blurred + 1px-bordered after scroll.
- Footer is darker (`#08080A`) than the page canvas, with a 1px top border.
- All public pages are wrapped in `<Nav />` and `<Footer />`; admin pages skip both (sidebar replaces the nav).

---

## CONTENT FUNDAMENTALS

### Voice

Warm, pastoral, devotional. **`você`** to the reader. Brand speaks **about** the SILC, not about the pastor — Pastora Tânia Tereza is mentioned briefly as founder/preletor, but the product is the SILC.

### Casing

- **Display headlines:** Sentence case, often with a *serif italic* accent on a single word: *"Sete dias que podem **transformar** sua vida em Cristo."*
- **Section titles:** Sentence case ending in a period: *"O que está incluído."*, *"Quem ministra com você."*
- **Eyebrow labels:** ALL CAPS, mono, `+0.16em` letter-spacing: `O QUE É O SILC`, `PRÓXIMO SILC`, `INFORMAÇÕES PRÁTICAS`.
- **Buttons:** Sentence case, often paired with an arrow: *Inscreva-se agora →*, *Saber mais →*, *Ver agenda →*.
- **Acronyms:** SILC and SIFEL always uppercase. On first use in a page, paired with the expansion: *SILC — Seminário Intensivo de Cura e Libertação*.

### Emoji

**Never** in body or buttons. Flag emoji are acceptable inside **country chips** as a placeholder for proper SVG flag icons.

### Vocabulary patterns

Devotional verbs: *ministrar*, *libertar*, *curar*, *restaurar*, *transformar*, *quebrar (ciclos)*, *cobrir (em oração)*, *abençoar*. Avoid corporate verbs (*otimizar*, *engajar*, *converter*).

**Read these v2 examples for tone:**

- *"Sete dias que podem transformar sua vida em Cristo."*
- *"Um encontro intensivo, uma equipe inteira em cobertura."*
- *"Cada participante recebe ministração 1:1 com um conselheiro treinado. Sigilo total."*
- *"Sairá com ferramentas práticas para a sua caminhada — e, na maioria dos casos, com áreas inteiras da sua vida visivelmente diferentes."*
- *"Comece quando quiser, no seu ritmo, com suporte da equipe central."*

### Headline rules

- 4–8 words. Verb-forward.
- Often a sentence ending in a period — feels declarative.
- One word emphasised via serif italic in red (use **at most once** per headline).

### What NOT to write

- No exclamation marks in CTAs.
- No emoji in body copy.
- No marketing superlatives (*incrível*, *imperdível*, *exclusivo*).
- No abbreviations (*p/*, *vc*) — always full words.
- No English unless a proper noun (*WhatsApp*, *Spotify*).

---

## ICONOGRAPHY

The system uses **hand-rolled inline SVG icons** modeled on Lucide (1.75 stroke, rounded caps & joins, geometric). They live inside `components.jsx` in a single `ICONS` map keyed by name and rendered by `<Icon name="…" size={…} />`. No CDN, no font.

**Why hand-rolled?** Lucide has removed many brand icons (Facebook, Instagram, YouTube, TikTok) and CDN fetches are an unnecessary dependency on a static prototype. Inline keeps the icon set explicit and editable.

**Icons currently exported:**

```
arrow-right · arrow-up-right · arrow-left · calendar · map-pin · globe ·
users · play · video · check · x · search · filter · image · upload · edit ·
trash · settings · layout · monitor · phone · mail · message · heart ·
sparkles · shield · book · list-checks · menu · chevron-down · chevron-right ·
plus · log-out · external-link · clock
```

**Brand assets:**

| Asset | Path | Use |
|---|---|---|
| Ministry logo (heart-in-hand + wordmark) | `assets/logo-ministerio-tania-tereza.png` | Top-left of footer; appears smaller in nav of v1; **v2 nav uses the typographic "SILC." mark instead** to keep the SILC-as-product hierarchy. |
| Country flags | Emoji (🇧🇷 🇵🇹 🇦🇷 🇺🇸 🇩🇪 …) | Country chips and event card flag overlays. **Replace with proper SVG flag set in production** — flag emoji render inconsistently across OSs. |
| Legacy reference renders | `assets/reference-legacy-page-{1,2,3}.png` | The PDF rendered to images — useful for color verification. |

### Emoji policy

Allowed: **flag emoji** inside `.flag-chip` (placeholder).
Disallowed: **everywhere else**. If a draft uses 🎉/💡/🔥/✨, replace with an `<Icon>`.

### Substitution flags

- ❗ Inline SVGs are a deliberate substitute for the legacy site's actual icon set (which wasn't extractable from the PDF). Swap when the real icons arrive.
- ❗ Flag emoji are a deliberate substitute for real SVG flags. Swap before production.

---

## File index

```
/
├── README.md                                ← you are here
├── SKILL.md                                 ← portable skill for Claude Code
├── colors_and_type.css                      ← all CSS tokens
│
├── assets/
│   ├── logo-ministerio-tania-tereza.png     ← official logo
│   └── reference-legacy-page-{1,2,3}.png    ← legacy site PDF rendered
│
├── preview/                                 ← Design System tab cards
│   ├── _card.css
│   ├── colors-neutrals.html · colors-brand.html · colors-semantic.html
│   ├── type-display.html · type-body.html · type-eyebrow.html · eyebrow.html
│   ├── spacing-scale.html · radii.html · elevation.html
│   ├── buttons.html · path-cards.html · country-chips.html
│   ├── event-card.html · form-field.html · stat.html
│   └── logo.html
│
└── ui_kits/
    └── marketing_site/                      ← THE UI KIT
        ├── README.md                        ← kit-specific notes
        ├── index.html                       ← v2 — current canonical kit
        ├── styles.css                       ← v2 styles
        ├── components.jsx                   ← v2 primitives (Nav, Footer, Icon, Button, Eyebrow, CountryChip)
        ├── pages.jsx                        ← v2 public pages (Home, Próximos, Anteriores, EventoDetail, Online, Sobre, Contato)
        ├── admin.jsx                        ← v2 admin (Dashboard, EventEditor)
        ├── app.jsx                          ← v2 hash router + <App />
        │
        ├── v1.html                          ← v1 preserved (MKP-flavored, Tânia-led)
        ├── v1.components.jsx · v1.sections.jsx · v1.styles.css
```

### Quick start in a chat with this system loaded

> "Make a landing page for the SILC Lisboa 2026 edition" → assemble using tokens from `colors_and_type.css`, structure from `ui_kits/marketing_site/pages.jsx` (`EventoDetailPage`), and copy patterns from the README's CONTENT FUNDAMENTALS section.

> "Build the admin event-editor with logistics + photo upload" → start from `ui_kits/marketing_site/admin.jsx` (`AdminEventEditorPage`).

> "Make a sales page for SILC Online Espanhol" → copy `OnlinePage` from `pages.jsx`, swap copy, keep the comparison table structure.

---

## Open questions / what would make this better

- **Real font names + files.** Currently using Plus Jakarta Sans + DM Serif Display as substitutes.
- **Real icon set.** Currently inline Lucide-style SVGs.
- **Real ministry photos.** All photos in the kit are Unsplash placeholders — see the `PHOTOS` constant at the top of `ui_kits/marketing_site/pages.jsx`.
- **Real SVG flag set** for country chips (emoji is a placeholder).
- **Inscription form details** — current form has reasonable defaults; need confirmation of required fields per market.
- **Pricing model** — placeholder R$ 1.450 / R$ 497. Replace.
- **Past-event content** — sample past events have placeholder cities/dates. Real archive needed.

Drop any of the above into the project and I'll extend the kit.
