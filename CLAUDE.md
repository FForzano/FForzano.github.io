# Federico Forzano — Personal Portfolio Site

## Project Context for Claude Code

This repository (`FForzano.github.io`) is Federico Forzano's personal
portfolio: a single-page React application presenting his academic and
professional profile (PhD research in quantum information science at the
QI Lab, University of Ferrara; the FPC DIDATTICA 4.0 / Formando PerCorsi
startup he co-founded; side projects like XGSail; hobbies), deployed as a
static site on GitHub Pages.

It is a **showcase/content site, not a product**: no backend, no database,
no user accounts, and — deliberately — no automated test suite (see
"Testing" below). Work here is almost always about content (copy,
translations, project descriptions) or presentation (layout, animation,
styling), not business logic. Treat requests to "improve" or "update" the
site primarily as content/UX asks unless told otherwise.

---

## Project Overview

- **Stack:** Vite + React 18, Tailwind CSS, Framer Motion (animation),
  react-router-dom (single route, section-scroll navigation), lucide-react
  icons, react-markdown for rich-text fields (bios, hobby descriptions).
- **Internationalization:** hand-rolled, not a library like i18next — see
  "Internationalization" below.
- **Deployment:** static build (`npm run build`) served on GitHub Pages,
  either via the `gh-pages` npm script (`npm run deploy`, see `deploy.sh`
  and `docs/GITHUB_SETUP.md`) or the `.github/workflows/deploy.yml` Actions
  workflow on push to `main`/`master`. Docker (`Dockerfile`,
  `docker-compose.yml`) is for local dev only, not how the site is deployed.
- **License:** README states MIT; there is no separate `LICENSE` file.

## Testing

There is intentionally **no test suite** in this repository — it was
removed on purpose because this is a showcase site with no business logic
worth regression-testing. Don't reintroduce Vitest/Jest/testing-library
(or a `src/test/` directory) unless the developer explicitly asks for it.
Verify changes with `npm run build` and a visual check instead.

---

## Code Style Guidelines

- **Simple and readable over clever.** This is a portfolio site meant to
  be easy to keep updated over time (new experience entries, new projects,
  new hobbies) — don't add abstraction a future one-off content edit
  doesn't need.
- **Reuse before writing.** Before adding a new hook, check
  `src/hooks/` (`useTranslation`, `useSwipe`, `useOptimizedAnimation`,
  ...); before adding new context/global state, check `src/contexts/`
  (`LanguageContext`, `ThemeContext`, `ModalContext`); before writing new
  one-off Tailwind utility soup for a button/card/badge, check the shared
  classes already defined in `src/index.css` (`@layer components`:
  `.btn-primary`/`.btn-secondary`/`.btn-accent`/`.btn-outline`, `.card`,
  `.skill-badge`, `.section-title`, `.section-subtitle`,
  `.container-custom`, `.section-padding`).
- **No duplicated logic across components.** If two components need the
  same behavior (e.g. rendering a project/link pill, a modal
  scroll-lock, a carousel), factor it into a shared component/hook
  instead of copy-pasting — this is exactly the kind of drift that left
  `Hobbies_backup.jsx`/`Hobbies_new.jsx` and an orphaned `Skills.jsx`
  behind (since removed).
- **CSS: Tailwind utilities first.** Reach for a dedicated `.css` file
  (like `modal.css` or `assets/experience-logos.css`) only for the rare
  thing Tailwind can't express cleanly (body scroll-lock, a specific
  logo/background grid) — not as a place to duplicate styling that
  already exists as a shared class in `index.css`.
- **No hardcoded user-facing strings in components.** Every piece of
  copy the visitor sees belongs in
  `src/translations/lang/{en,it}/*.js`, accessed via `t('namespace.key')`
  from `useTranslation()` — never a literal string embedded in JSX in a
  single language (a real bug this repo had: contact-form status
  messages were hardcoded in Italian even when browsing in English).
- **Keep `en` and `it` translation files structurally identical.** Same
  keys, same nesting, only the values differ — when adding a key, add it
  to both language files in the same change.

---

## Repository Structure

```
src/
├── App.jsx              # Composition root: providers, section layout,
│                         # scroll-snap section navigation
├── main.jsx
├── index.css             # Tailwind layers + shared component classes
│                         # (btn-*, card, skill-badge, section-*, ...)
├── modal.css              # Scroll-lock styling shared by detail modals
├── components/            # One file per UI section/widget: Hero, About,
│                         # Experience, PublicationsAndProjects, Hobbies,
│                         # Contact, Footer, Navbar, ThemeToggle,
│                         # LanguageSelector, Carousel, ...
├── contexts/              # LanguageContext, ThemeContext, ModalContext
├── hooks/                 # useTranslation, useSwipe, useOptimizedAnimation, ...
├── translations/
│   ├── index.js           # getTranslation(language, 'a.b.c') dot-path lookup
│   ├── lang/{en,it}.js     # Aggregates the per-namespace files below
│   └── lang/{en,it}/*.js   # One file per section: hero.js, about.js,
│                         # experience.js, publicationsAndProjects.js,
│                         # hobbies.js, contact.js, footer.js, nav.js
│                         # (plus a shared `common` namespace in lang/*.js)
├── assets/                # Boat-navigation SVG art (see
│                         # docs/GUIDA_COMPLETA_BARCHETTA.md), logos
└── utils/                 # accessibility.js, performance.js helpers
public/
├── images/, papers/, thesis/, cv/   # Static assets referenced from
│                                   # translation data (logos, PDFs, photos)
└── robots.txt, sitemap.xml
docs/                      # Deployment, Docker, GitHub Pages setup, i18n
│                         # system, CV-download system, boat-nav
│                         # customization guides
```

---

## Internationalization

Two languages (`it` default, `en`), switched at runtime via
`LanguageContext` (persisted in `localStorage`, also syncs
`document.documentElement.lang`). `useTranslation()` returns a `t(key)`
function that dot-path-looks-up the key in the current language's object
from `src/translations/lang/{it,en}.js` (see `getTranslation` in
`src/translations/index.js`), falling back to the key itself if missing.
See `docs/INTERNATIONALIZATION.md` for more detail.

## Content Lives in Data Files, Not JSX

The site's actual content (project descriptions, experience entries,
hobbies, contact info, nav labels) lives entirely in
`src/translations/lang/{en,it}/*.js` as plain JS objects. When asked to
change what the site *says* — a project description, a bio paragraph, a
new hobby — edit these data files, not component JSX, and always update
both `en` and `it` together.

## Deployment

`npm run build` produces a static `dist/`. Two supported paths to publish
it, both documented in `docs/GITHUB_SETUP.md`: `npm run deploy`
(`gh-pages` package, pushes `dist/` to a `gh-pages` branch) or letting
`.github/workflows/deploy.yml` build and publish via GitHub Pages Actions
on push to `main`/`master`. `deploy.sh` wraps a manual build+deploy with a
few safety checks (must be on `main`/`master`, no uncommitted changes).
