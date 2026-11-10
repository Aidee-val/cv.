# CV — Aidee Calderon

Static one-page CV in plain HTML/CSS/JS. No package manager, build, lint, test, or CI — edit files and reload.

## Layout
- Single page at the repo root: `index.html`; styles in `css/styles.css`, behavior in `js/interactions.js`.
- `prompts.md` is a prompt log containing an older draft of this file; it is not project documentation or a source of truth.
- The `publico/` assets referenced by the page are not in the repo.

## Preview
- From the repo root: `python -m http.server 8000`, then open `http://localhost:8000/`.
- No automated checks: verify changes in the browser, including the console.

## Known issues
- `js/interactions.js` throws at `shareButton.addEventListener` (undeclared variable), so everything after it never registers — including the arrow-key listener. `closeMenu()` called on Escape is also undefined. The gallery buttons and "Más sobre mí" toggle do work because they are registered before the throw.
- Nearly every image (banner, thumbnails, gallery, favicon) points to the missing root-absolute `/publico/img/muestras/*.svg`; these also break on GitHub Pages project subpaths. The profile photo alone is a Google-hosted thumbnail.
- The nine `@font-face` blocks use `url(https://gstatic.com)` instead of a font file, so "Bitcount Ink" falls back to `sans-serif`. The `<link href="https://googleapis.com">` is not a valid Google Fonts URL.
- Both `.thumbnails` containers are empty and unused by the JS.

## Conventions
- Visible text is Spanish (`<html lang="es">`); classes/IDs are English, lowercase, hyphenated (`primary-btn`, `col-1-3`, `toggle-details`).
- Sections are `<section class="row">` with an `<h2>`; each project is `<article class="col-1-3">` with an `<h3>`.
- Page order: `header`/`nav`, `main` with `#about`, `#projects`, `#education`, `#skills`, `#languages`, then `footer`.
- No inline styles; all design lives in `css/styles.css`. No email addresses or `mailto:` links.
- Layout is flexbox (`.row` + `.col-1-2`/`.col-1-3`); the `grid-column` rules on `#about`/`#projects` only apply inside the `≤600px` media query.

## Git
- Branch `main`; commits are written in Spanish.
- Remote `origin` is configured as `https://github.com/Aidee-val/cv..git` (double dot) — verify it before pushing.
