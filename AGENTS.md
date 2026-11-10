# CV - Aidee Calderon

Static HTML/CSS/JS site. No framework, no package manager, no build, lint, or test step — edit the files and reload the browser.

## Files
- Page: `index.html/index.html` (the file lives inside a directory also named `index.html`).
- Styles: `css/styles.css`. Behavior: `js/interactions.js`.
- `prompts.md` is the original prompt that produced this file, not project documentation.

## Preview
- Serve the repo root (`python -m http.server 8000`) and open `/index.html/index.html`.
- The page's `href="css/styles.css"` / `src="js/interactions.js"` resolve relative to the page, i.e. to `index.html/css/...`, which does not exist. Expect an unstyled, non-interactive page; if you fix it, use `../css/...` / `../js/...` or move the page to the repo root.
- No automated checks: verify changes by loading the page and watching the browser console.

## Conventions
- Classes and IDs: English, lowercase, hyphenated (`primary-btn`, `col-1-3`, `toggle-details`).
- Visible text: Spanish (`<html lang="es">`).
- Each section is a `<section>` with an `<h2>`; each project is an `<article>` with an `<h3>`.
- No inline styles — all design lives in `css/styles.css`.
- Page structure: `header` with `nav`; `main` with `#about`, `#projects`, `#education`, `#skills`, `#languages`; `footer` last.
- No email addresses or `mailto:` links.
- Layout is flexbox (`.row` + `.col-1-2` / `.col-1-3`); the `grid-column` rules on `#about`/`#projects` only take effect inside the `≤600px` grid layout in the media query.

## Known issues
Verify before relying on these features:
- `js/interactions.js` calls `shareButton.addEventListener(...)` on an undeclared variable, throwing at load and preventing the later arrow-key listener from registering. `closeMenu()` on Escape is also undefined. The gallery prev/next buttons and the "Más sobre mí" toggle do work because they are defined before the throw.
- All images point to `/publico/img/muestras/*.svg` (banner, profile, thumbnails, gallery) and those assets are not in the repo. Root-absolute paths also break under a GitHub Pages project subpath.
- The nine `@font-face` blocks use `url(https://gstatic.com)` instead of a real font file, so "Bitcount Ink" never loads and the site falls back to `sans-serif`.

## Git
- Branch `main`, remote `origin` (GitHub). Commit messages are written in Spanish.
