---
name: silc-design
description: Use this skill to generate well-branded interfaces and assets for the SILC (Seminário Intensivo de Cura e Libertação), the seminar product of Ministério Tânia Tereza. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Output is in Portuguese (pt-BR) unless told otherwise.
user-invocable: true
---

# silc-design

Read the README.md file within this skill, and explore the other available files. The system is organised as:

- **`colors_and_type.css`** — all CSS tokens (colors, type, spacing, motion). Always link this stylesheet from any artifact you create.
- **`assets/`** — the official ministry logo and reference renders of the legacy landing.
- **`preview/`** — small specimen cards used by the Design System tab. Useful as "is this the right token?" probes.
- **`ui_kits/marketing_site/`** — the canonical UI kit. **Read `pages.jsx`, `components.jsx`, and `admin.jsx` to understand the visual vocabulary before producing new work.** v2 (`index.html`) is current. v1 (`v1.html`) is preserved for reference but should not be the starting point for new work.

## Workflow

If creating visual artifacts (slides, landing pages, throwaway prototypes, single-purpose mocks):

1. Read `README.md` for tone + visual rules. Pay special attention to **CONTENT FUNDAMENTALS** and **VISUAL FOUNDATIONS — v2**.
2. Copy any assets you need from `assets/` into your artifact's working directory.
3. Link `colors_and_type.css` and reuse the design tokens — do not invent new colors.
4. For component-level inspiration, lift JSX patterns from `ui_kits/marketing_site/components.jsx` (Nav, Footer, Button, Eyebrow, CountryChip, Icon) and from `pages.jsx` (sections like `HomePage`, `EventoDetailPage`, `OnlinePage`).
5. Output is in **Portuguese (pt-BR)** unless the user explicitly asks otherwise.

If working on production code:

1. Copy `colors_and_type.css` and the relevant pieces of `ui_kits/marketing_site/` into the production codebase.
2. Use the README's content rules to write copy.
3. Treat the kit's React components as cosmetic references — implement properly with your framework's conventions.

## If invoked without specifics

Ask the user briefly:

- Is this for the **SILC Presencial** site, **SILC Online** sales flow, **past edition archive**, **admin panel**, or something else?
- Is this a marketing page, a form/flow, or an internal admin view?
- Are there real photos / event details to use, or should I use placeholders?

Then deliver an HTML artifact (single self-contained file is best for prototypes; a folder under `ui_kits/` if it's becoming reusable) or production code, depending on the need.

## Hard rules

- **Tone:** warm, devotional, plain. Use `você`. Never use emoji in body copy (flag emoji in country chips is the only exception).
- **Color:** never invent. Use `var(--red-500)` for the brand red, `var(--bg-1)` for the canvas, `var(--lavender-400)` for the lavender supporting accent.
- **Headlines:** Sentence case, often ending in a period. At most one word emphasised via `<span class="red-italic">` (serif italic in red).
- **Buttons:** Sentence case, paired with `→` arrow icon.
- **Eyebrow labels:** ALL CAPS, mono, `+0.16em` letter-spacing.
- **Acronyms:** SILC, SIFEL — always uppercase. Expand on first use in a section.
- **Imagery:** dark, devotional, never bright stock-photo cheerful. Hands, candles, conference crowds, prayer postures, church interiors.
- **Hierarchy:** the **SILC** is the product. The pastor is mentioned as founder/preletor, never as the brand's main subject.
