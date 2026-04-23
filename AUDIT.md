# Sumak Kawsay Site Audit

_Generated 2026-04-21. Static-site snapshot. No changes made to source files._

---

## 1. Project structure

### File tree (3 levels)

```
.
├── 404.html
├── AUDIT.md
├── CNAME
├── README.md
├── apoyo/index.html
├── assets/
│   ├── favicon.svg
│   ├── glyphs.svg
│   ├── illustrations/            (empty)
│   └── images/
│       ├── alejandra-fire.jpg
│       ├── alejandra_sweat1.jpg
│       ├── alejandra_sweat4.jpg
│       ├── alejandra_sweat5.jpg
│       ├── alejandrasongs.jpg
│       ├── dariochristiansongs.jpg
│       ├── home-hero.jpg
│       ├── imbabura2.jpg
│       ├── imbabura3.jpg
│       ├── logo-black.jpg
│       ├── logo-bone.png
│       ├── logo-ink.png
│       ├── sanpedroflower.jpg
│       └── sanpedroraw.jpg
├── ceremonias/index.html
├── comunidad/index.html
├── contacto/index.html
├── css/main.css
├── declaracion-de-fe/index.html
├── en/
│   ├── 404.html
│   ├── ceremonies/index.html
│   ├── community/index.html
│   ├── contact/index.html
│   ├── ethics/index.html
│   ├── index.html
│   ├── philosophy/index.html
│   ├── spirituality/index.html
│   ├── statement-of-faith/index.html
│   └── support/index.html
├── espiritualidad/index.html
├── etica/index.html
├── filosofia/index.html
├── index.html
├── js/main.js
├── robots.txt
└── sitemap.xml
```

### File counts

| Type   | Count |
|--------|-------|
| HTML   | 20    |
| CSS    | 1     |
| JS     | 1     |
| SVG    | 2     |
| Images | 14    |

---

## 2. Git state

**This project is not a Git repository.** No `.git` directory exists in the project root or any parent. There is no commit history, no branch, no staged/untracked status to report.

Recommendation: run `git init` and make an initial commit before continuing, so further edits are recoverable.

---

## 3. HTML pages inventory

| Path | Lines | H1 | `<title>` | `meta[description]` | `<main>` | `<footer>` |
|------|------:|----|-----------|:---:|:---:|:---:|
| `404.html` | 57 | Página no encontrada | yes | **— missing —** | ✓ | ✓ |
| `apoyo/index.html` | 229 | Apoye a la Fundación | yes | ✓ | ✓ | ✓ |
| `ceremonias/index.html` | 297 | Rituales y Ceremonias | yes | ✓ | ✓ | ✓ |
| `comunidad/index.html` | 261 | Nuestra Comunidad | yes | ✓ | ✓ | ✓ |
| `contacto/index.html` | 225 | Contacto | yes | ✓ | ✓ | ✓ |
| `declaracion-de-fe/index.html` | 163 | Declaración de Fe | yes | ✓ | ✓ | ✓ |
| `en/404.html` | 57 | Page not found | yes | **— missing —** | ✓ | ✓ |
| `en/ceremonies/index.html` | 297 | Ceremonies and Rituals | yes | ✓ | ✓ | ✓ |
| `en/community/index.html` | 261 | Our Community | yes | ✓ | ✓ | ✓ |
| `en/contact/index.html` | 225 | Contact | yes | ✓ | ✓ | ✓ |
| `en/ethics/index.html` | 250 | Statement of Good Practice | yes | ✓ | ✓ | ✓ |
| `en/index.html` | 245 | Sumak Kawsay | yes | ✓ | ✓ | ✓ |
| `en/philosophy/index.html` | 235 | Philosophy | yes | ✓ | ✓ | ✓ |
| `en/spirituality/index.html` | 190 | Spirituality | yes | ✓ | ✓ | ✓ |
| `en/statement-of-faith/index.html` | 210 | Statement of Faith | yes | ✓ | ✓ | ✓ |
| `en/support/index.html` | 229 | Support the Foundation | yes | ✓ | ✓ | ✓ |
| `espiritualidad/index.html` | 190 | Espiritualidad | yes | ✓ | ✓ | ✓ |
| `etica/index.html` | 250 | Declaración de Buena Práctica | yes | ✓ | ✓ | ✓ |
| `filosofia/index.html` | 235 | Filosofía | yes | ✓ | ✓ | ✓ |
| `index.html` | 252 | Sumak Kawsay | yes | ✓ | ✓ | ✓ |

### Flags

- No file is under 20 lines.
- **No file is missing `<title>`, `<main>`, or `<footer>`.**
- **Missing `meta[name=description]`:** `404.html`, `en/404.html`. The 404 pages intentionally have no description meta tag. Low priority, but add for consistency if you want.

### Note on H1 text

The H1 on the Ethics page (`en/ethics/index.html` / `etica/index.html`) is "Statement of Good Practice" / "Declaración de Buena Práctica", not "Ethics" / "Ética". The nav and `<title>` use the shorter form; the H1 is a longer sub-title. This is intentional naming but worth a consistency check.

---

## 4. CSS audit

**File:** `css/main.css` — 1,790 lines.

### `:root` CSS variables

```
--paper:        #F0E9DA
--paper-soft:   #F7F1E5
--paper-deep:   #E6DCC8
--ink:          #1F1612
--ink-soft:     #55463E
--ink-whisper:  #8B7A6F
--ochre:        #A87C4F
--ochre-deep:   #7A5331
--ember:        #B85A2A
--tide:         #5B7B7C
--moss:         #4A5D4F
--sky:          #5E4C66
--aubergine:    #2E1A28
--rule:         rgba(31,22,18,0.12)
--rule-soft:    rgba(31,22,18,0.06)

--font-display: 'Cormorant Garamond', Georgia, serif
--font-body:    'Source Serif 4', Georgia, serif

--fs-xs … --fs-5xl   (clamp-based scale)
--s-2xs … --s-3xl    (spacing scale)
--w-prose / --w-read / --w-content / --w-wide   (width tokens)

--ease, --ease-out   (cubic-beziers)
--dur-sm, --dur-md, --dur-lg   (durations)
--lift   (shadow stack)
```

### Major section classes in use

Layout / chrome:
`.site-header`, `.site-header__hem`, `.site-header__inner`, `.site-header__logo*`, `.primary-nav*`, `.nav-toggle`, `.skip-link`, `.site-footer*`

Hero & page shells:
`.hero`, `.hero__backdrop`, `.hero__overlay`, `.hero__content`, `.hero__block`, `.hero__eyebrow`, `.hero__title`, `.hero__lede`, `.hero__cta`, `.hero__scroll*`, `.hero__seal`, `.page-hero`, `.page-threshold*`, `.paper-intro*`, `.page-intro*`

Content building blocks:
`.page-section` (+ `--band`, `--large`, `--quiet`), `.page-section__inner`, `.page-prose`, `.page-read`, `.page-content`, `.prose`, `.display-md`, `.display-lg`, `.display-xl`, `.eyebrow`, `.section-heading`, `.chakana-rule`, `.section-line`, `.interlude*`

Cards and grids:
`.section-cards`, `.section-card*`, `.alliances-grid`, `.alliance*`, `.alliances-list*`, `.fundamentals`, `.fundamental*`

Page-specific:
`.ceremony-list`, `.sacraments`, `.sacrament`, `.solstice-list`, `.donate-steps`, `.quechua*`, `.page-404*`, `.form-group`, `.footer-inner` (404 alias)

Glyph / decoration:
`.glyph`, `.glyph--chakana`, `.glyph--chakana-lg`, `.glyph--element`, `.glyph--half`, `.glyph--step`, `.element-fire`, `.element-water`, `.element-earth`, `.element-air`, `.band-aubergine`

Utility:
`.sr-only`, `.btn`, `.btn--ghost`, `.btn--copy`, `.cta-link`, `.lang-switch`

### File references in CSS

All image/url() references in CSS are inline `data:image/svg+xml;utf8,…` data-URIs (Chakana corner notches, footer peak hem, noise texture). **No external file references from CSS.** No broken CSS asset paths.

---

## 5. JavaScript audit

**File:** `js/main.js` — 128 lines. One top-level IIFE, no exports. Strict mode.

### Behaviors implemented

| # | Purpose | Queried selectors |
|---|---------|-------------------|
| 1 | Mobile nav toggle (hamburger) | `.nav-toggle`, `.primary-nav__list` |
| 2 | Dropdown toggle for "La Fundación" | `.primary-nav__dropdown-toggle`, `.primary-nav__item--dropdown` |
| 3 | Close dropdowns on outside click | (document-level listener) |
| 4 | Copy-to-clipboard on Zelle email | `[data-copy]` |
| 5 | Close mobile nav on link click | `navList a` |
| 6 | Fade-up-on-scroll reveal | `[data-reveal]` (IntersectionObserver; falls back to adding `.is-in` immediately) |
| 7 | Threshold-hero behavior (transparent header → paper header after 60% of hero height; 12% backdrop parallax, respecting `prefers-reduced-motion`) | `.hero__backdrop img`, `.page-threshold__backdrop img`, `.hero`, `.page-threshold` |

### Event listeners referencing elements that may not exist

All listeners are guarded (`if (toggle && navList)`, `if (element) …`, `forEach`) — no unguarded access. The threshold-hero block runs only when `body.has-threshold` is set. **No listeners bind to selectors without a null-check.**

### Minor observations

- `var` is used throughout (ES5 style); not an issue, just worth noting if you later consolidate to `const`/`let`.
- No named functions are declared at top level. All behaviors are inline within the IIFE.

---

## 6. Assets inventory

### `/assets/` (root)

| File | Size |
|------|-----:|
| `favicon.svg` | 535 B |
| `glyphs.svg` | 2.6 KB |

### `/assets/illustrations/`

**Empty.** Directory exists but contains no files.

### `/assets/images/`

| File | Size |
|------|-----:|
| `alejandra-fire.jpg` | 629 KB |
| `alejandra_sweat1.jpg` | 523 KB |
| `alejandra_sweat4.jpg` | 572 KB |
| `alejandra_sweat5.jpg` | 228 KB |
| `alejandrasongs.jpg` | 340 KB |
| `dariochristiansongs.jpg` | 433 KB |
| `home-hero.jpg` | 59 KB |
| `imbabura2.jpg` | 857 KB |
| `imbabura3.jpg` | 373 KB |
| `logo-black.jpg` | 60 KB |
| `logo-bone.png` | 26 KB |
| `logo-ink.png` | 30 KB |
| `sanpedroflower.jpg` | 152 KB |
| `sanpedroraw.jpg` | 1.4 MB |

Total image size: **5.6 MB**.

### Missing assets (referenced but file not present)

| Asset | Referenced in | Notes |
|-------|---------------|-------|
| `/assets/images/darioantonio.jpg` | `filosofia/index.html` lines 20, 28 (og:image, twitter:image) and `en/philosophy/index.html` lines 20, 28 (same) | **404 confirmed** via curl. Only affects social-media preview cards on the Philosophy page. Not visible on-page. Per project memory, this image was intentionally removed but the meta references were missed. |

### Unused assets (present but never referenced)

| File | Size | Notes |
|------|-----:|-------|
| `alejandra_sweat4.jpg` | 572 KB | No HTML/CSS reference. Sibling sweat1/sweat5 ARE used. |
| `logo-black.jpg` | 60 KB | No reference. Superseded by `logo-bone.png` and `logo-ink.png`. |
| `sanpedroraw.jpg` | 1.4 MB | No reference. Largest single file in the repo. |

Removing the three unused images would trim ~2.0 MB from the deploy.

### Performance note

`imbabura2.jpg` (857 KB), `imbabura3.jpg` (373 KB), and the `alejandra_*` set (200–630 KB each) are served at full resolution without a `srcset`. `imbabura3.jpg` is the LCP image on both homepages; consider `<img srcset>` or AVIF/WebP for mobile builds.

---

## 7. Known issues

### Broken links between pages

**None.** All internal `href="/…"` references in HTML resolve to a real file or directory-with-index.html. Internal link check across all 20 pages: 21 unique internal targets, 0 broken.

### Placeholder text still in code

| Placeholder | Count | Files affected |
|-------------|------:|----------------|
| `[TO BE INSERTED BY ANNA]` (EIN, footer) | 18 files | Every page with a footer block except the two Support pages, which use a different placeholder variant below. |
| `[EIN TO BE INSERTED]` (in support-page intro) | 2 files | `apoyo/index.html` line 126, `en/support/index.html` line 126 |
| `FORMSPREE_ID` (contact form `action=""`) | 2 files | `contacto/index.html` line 141, `en/contact/index.html` line 141 |
| `[enlace]` / `[link]` (Mighty Network URL) | 2 files | `contacto/index.html` line 179, `en/contact/index.html` line 179 |
| `[enlace al formulario de SPA]` / `[link to SPA form]` | 2 files | `etica/index.html` line 193, `en/ethics/index.html` line 193 |
| `href="#"` on PayPal donate button | 2 files | `apoyo/index.html` line 154, `en/support/index.html` line 154 |

These correspond 1:1 with the launch-blocker list tracked in project memory.

### TODO / FIXME comments in source

**None.** No `TODO`, `FIXME`, `XXX`, or `HACK` markers anywhere in HTML/CSS/JS.

### Console / network errors at localhost:8000

All primary resources return 200 (favicon, glyphs, `main.css`, `main.js`, hero image). The only confirmed 404 is `/assets/images/darioantonio.jpg`, referenced only in meta tags on the Philosophy pages — no visible browser-console impact unless a social-media crawler fetches it.

_No runtime browser console was captured; this check used HTTP status codes only._

---

## 8. Copy quality flags

### Em-dashes (—)

**0 occurrences** across all 20 HTML files. Clean.

### Banned-word scan

Words checked (case-insensitive, word-boundary matched):
`delve, intricate, tapestry, interplay, foster, garner, underscore, pivotal, showcase, enduring, bridge, bridging, profound, magic, clinical, finally`

**0 occurrences.** All clear.

---

## Summary of launch blockers

1. **EIN** (20 placeholders across all page footers + 2 intro sentences).
2. **Formspree endpoint** on the contact form (2 pages).
3. **Mighty Network URL** on contact pages (2 pages).
4. **SPA report-form URL** on ethics pages (2 pages).
5. **PayPal donate URL** on support pages (2 pages).
6. **Missing image:** `darioantonio.jpg` referenced in Philosophy meta (pick a replacement image or drop the `og:image`/`twitter:image` lines).
7. **Git:** repository is not under version control; initialize before further work.
8. **Housekeeping (optional):** remove 3 unreferenced images (~2.0 MB saved).
