# Hasan Abuzaid — Portfolio Design System

The brand and component system for the personal portfolio of **Hasan Abuzaid** — a mechatronics engineer (robotics, AI/computer vision, embedded/IoT) and professional videographer based in Amman, Jordan. The portfolio carries a **dual identity** — an *engineering* track and a *videography* track — unified under one name and one cinematic visual language, with leadership work tying them together.

> **Aesthetic in one line:** dark, cinematic, minimal — *quiet luxury*. Engineering precision, shot like cinema. The confidence of restraint: less, but better.

This system exists so any agent or developer can produce on-brand interfaces, slides, and assets without re-deriving the look each time.

---

## Sources

This system was built **from a written brand brief**, not an existing codebase or Figma file. No prior visual assets (photography, logos, brand marks) were supplied.

- **Brief:** "Personal Portfolio Website — Build Brief" for Hasan Abuzaid (provided in-conversation). Target deployment: **GitHub Pages**, static vanilla HTML/CSS/JS.
- **Codebase / Figma:** none provided.
- **Real assets:** none provided — all imagery is represented by labelled `[[PLACEHOLDER]]` slots awaiting upload (see *Caveats* at the bottom and the UI-kit README).

If you have access to the real repo or asset library, drop binaries into `assets/` and replace the `[[TOKEN]]` markers in the UI kit.

---

## Content fundamentals — how the copy is written

**Voice:** first person, quietly confident, never boastful. State capability plainly and let the work carry the weight. The numbers (30M+ subscribers, 1,500+ members, 83.4% mAP) do the bragging so the prose doesn't have to.

- **Person:** *I* / *me* for Hasan's own voice ("I build closed-loop systems that see, decide, and move"). Address the reader as *you* only in the call-to-action ("Let's build something worth shooting").
- **Tone:** precise, technical, cinematic. Engineering copy names the real stack (LQR, OpenCV, Delta PLC, YOLOv11) without over-explaining. Videography copy leans evocative ("shot like cinema", "concept to color").
- **Casing:** Sentence case for headlines and body. **UPPERCASE only** for eyebrows/overlines and small labels, always with wide letter-spacing. Never title-case headings.
- **Length:** short. One-line value props, tight single-paragraph intros. No filler, no buzzword soup. A sentence should survive having words removed.
- **Punctuation:** an em dash for the cinematic pause — used deliberately. A single accent "dot" after the name in the logotype (`Hasan.`) is the one flourish.
- **Numbers:** abbreviated and tabular (`30M+`, `150M+`, `1,500+`, `7 yrs`). Always `+` for "at least".
- **Emoji:** **never.** Not in copy, not as icons. (Lucide line icons only — see Iconography.)
- **Examples of the register:**
  - Hero: *"I build closed-loop systems that see, decide, and move — and I tell stories with a camera."*
  - Engineering section title: *"Systems that see, decide, and move."*
  - Videography section title: *"Engineering precision, shot like cinema."*
  - Contact: *"Let's build something worth shooting."*

---

## Visual foundations

### Color
A **cool, dark, calm** palette. Backgrounds are cool near-blacks with a blue undertone — **never pure black** (`#0A0C10` page, `#0E1116` sunken, `#151A21` cards). Text is a cool off-white (`#E7EBF0`) stepping down through slate greys (`#B6BFCB` → `#8A93A0` → `#5C646F`) to carry hierarchy. Borders are slate hairlines (`#232A34`–`#2A323C`).

There is **exactly one accent**: a calm, desaturated **slate-blue** (`#7DA8C4`), lighter on hover (`#9DC2D9`). It appears sparingly — the logotype dot, hover glows, one or two key highlights, the focus ring. A sage tone (`#8FA68E`) exists for a single optional highlight but the rule is *one accent*; do not introduce a second. Status colors are desaturated to fit the cool family. No neon, ever.

### Typography
**All sans-serif, modern grotesques** — and deliberately *not* the AI/OS defaults (no Inter, Roboto, Open Sans, system-ui).
- **Display / headings:** **Space Grotesk** (weight 500–600), tight negative tracking at large sizes (`-0.02em` to `-0.04em`). Carries personality.
- **Body:** **Geist** (weight 300–500), neutral and legible at 16/1.5.
- Hierarchy is built from **weight + size contrast**, not serifs. Big display sizes use `clamp()` for fluid scaling. Eyebrows are 12px uppercase with `0.14em` tracking.

### Backgrounds & texture
No photographic full-bleed by default (none supplied). The signature background treatment is a **slow, faint aurora** — layered radial gradients in accent slate-blue (16% α) and a whisper of sage (8% α), positioned off-center (`var(--aurora)`). Used behind the hero and contact sections. No repeating patterns, no noise/grain, no heavy gradients. Most surfaces are flat cool-black.

### Cards & surfaces
**Flat, hairline cards — the anti-"AI-slop" rule.** 1px slate border, soft 8px radius, **no heavy drop shadow at rest.** This is the single most important visual rule. Never build a uniform grid of identical rounded boxes with soft shadows.

### Borders & dividers
Hairline (1px) borders and dividers do the structural work instead of boxes. Section content is separated by thin top/bottom rules; tabular data sits between hairlines with faint vertical dividers.

### Corner radii
Soft, restrained: `4px` (inputs), `6px` (buttons), `8px` (cards), `12px` (large panels). **Pills (999px) only** for tag chips and avatars. Never hard 0px everywhere, never pill-shaped buttons.

### Shadows & glow
Shadows are subtle and cool-tinted, never grey-on-white. The brand's elevation cue is **glow, not shadow**: on hover, interactive surfaces get an accent ring + soft bloom (`--glow-soft`), and the border shifts to slate-blue. The hero uses the aurora glow. No gamer-RGB, no rainbow.

### Motion
Quiet and eased — `cubic-bezier(0.22, 1, 0.36, 1)` (`--ease-out`), durations 160–520ms.
- **Reveal on scroll:** elements fade in with a small (12px) upward translate, eased, slightly staggered. Respects `prefers-reduced-motion`.
- **Hover:** soft accent glow + 2–3px lift on cards; arrows nudge (`→` / `↗`). No bouncing, no flashing, no infinite loops on content.

### Hover & press states
- **Hover:** primary buttons brighten to `--accent-500` and gain a glow; secondary/ghost gain an accent border + soft bloom; links lighten toward `--accent-400`. Cards lift 2–3px with an accent ring.
- **Press:** accent steps down to `--accent-700` (`#5C86A3`). No scale-shrink — the brand favors color shift over squish.

### Transparency & blur
Used purposefully: the NavBar is transparent over the hero, then **solidifies on scroll** into a translucent surface (`rgba(10,12,16,0.72)`) with `backdrop-filter: blur` + saturate. Video play buttons use a subtle blur. Otherwise surfaces are opaque.

### Layout
Generous, editorial, asymmetric. `1200px` max content width, `760px` reading column, `48px` desktop gutters, `~110–120px` between major sections. A clear baseline rhythm on a 4px unit. The hero is a 1.4 / 1 asymmetric split (copy / portrait), not centered. Sticky top nav at `68px`.

---

## Iconography

- **System:** **Lucide** (https://lucide.dev) — thin, consistent stroke line icons that match the cinematic-minimal, hairline aesthetic. Loaded from CDN (`unpkg.com/lucide`) and rendered via `<i data-lucide="name">` + `lucide.createIcons()`.
- **Why Lucide:** no icon set was shipped with the brief, and the portfolio is hand-built vanilla. Lucide's 1.5–2px stroke weight pairs naturally with the slate hairlines and Space Grotesk. **(Substitution flagged — see Caveats.)**
- **Usage:** small (16–24px), `currentColor` so they inherit text color; muted slate at rest, accent on hover. Icons are sparse — one per entry card, one per contact row, calendar ticks on events. Never decorative clusters.
- **Color:** stroke only; never filled. Sizes 16/18/24px.
- **Emoji:** **never used** — not as icons, not in copy.
- **Unicode:** a few typographic arrows (`→`, `↗`) are used intentionally for "enter" / "link-out" affordances. These are deliberate, not icon substitutes.
- **Logos / brand marks:** none supplied. Brand and creator logos in the videography section are `PhotoSlot` placeholders pending upload.

---

## Index — what's in this system

**Root**
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill manifest (download-and-use in Claude Code).

**Tokens** (`tokens/`, all `@import`ed by `styles.css`)
- `fonts.css` — Space Grotesk + Geist via Google Fonts.
- `colors.css` — ink scale, foreground scale, accent, borders, status + semantic aliases.
- `typography.css` — families, weights, type scale, line-height, tracking, semantic roles.
- `spacing.css` — 4px scale + layout (container widths, gutters, nav height).
- `effects.css` — radii, borders, shadows, glow, aurora, motion, blur.

**Components** (`components/`) — namespace `window.HasanAbuzaidPortfolioDesignSystem_4b31b8`
- `core/` — `Button`, `IconButton`, `Tag`, `Eyebrow`, `Stat`
- `surfaces/` — `Card`, `ProjectCard`
- `navigation/` — `NavBar`
- `media/` — `VideoFacade`
- Each has `.jsx`, `.d.ts` (props + starting-point tags), `.prompt.md` (usage), and a `*.card.html` specimen.

**UI kit** (`ui_kits/portfolio/`)
- Interactive single-page portfolio recreation: Landing · Engineering · Videography · Leadership · Contact. See its `README.md`.

**Foundation cards** (`guidelines/`)
- Specimen cards for the Design System tab — Colors, Type, Spacing, Brand.

---

## Caveats & substitutions

- **Fonts:** Space Grotesk and Geist are loaded via **Google Fonts CDN** (`tokens/fonts.css`), not self-hosted binaries. For production / offline use on GitHub Pages, self-host the `.woff2` files and swap the `@import` for local `@font-face` rules. *(No font files were provided — flagged.)*
- **Icons:** **Lucide** is a substitution — no icon set was specified. It matches the stroke weight and minimal feel; swap if you have a preferred set.
- **Imagery & logos:** none supplied. Every photo, brand logo, creator avatar, and video is a labelled `[[PLACEHOLDER]]` slot. The leadership gallery, videography brands/creators, and hero portrait all await real assets.
- **Project & contact links:** left as `[[TOKEN]]` markers per the brief's checklist — replace before shipping.
