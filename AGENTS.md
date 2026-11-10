# AGENTS.md

Static CV site (Aidee Calderon). No framework, `package.json`, build, lint, or tests. Edit files and verify in a browser.

## Layout and entry point

- Entry point is `index.html/index.html` — a **directory**, not a root file. It links `css/styles.css` and `js/interactions.js` as if it sat at the repo root, so serving from the root will not load CSS/JS. If fixing this, move the file to the root; do not add a duplicate page.
- `css/styles.css` is the only stylesheet; `js/interactions.js` is the only script (loaded with `defer`).
- `prompts.md` is the course prompt log (graded deliverable). It also holds the project rules below; append to it rather than rewriting/removing its header. Its claim about `cv.html` / `css/cv.css` is stale — trust the real files.
- `/publico/img/muestras/*.svg` (profile, banner, thumbnails, gallery) is referenced everywhere but is not in the repo; it is supplied by the course environment. Local 404s are expected — keep the absolute `/publico/...` paths.

## Reglas del curso (obligatorias)

1. Clases e IDs en inglés, en minúsculas y con guiones (kebab-case).
2. Todo el texto visible en español.
3. HTML semántico: no usar `<div>` donde exista una etiqueta con nombre (`<header>`, `<main>`, `<section>`, `<article>`, etc.).
4. Nada de estilos en línea: todo el diseño vive en `css/styles.css`.

Notas para agentes: el markup actual todavía incumple algunas reglas (`.top-bar` es un `<div>` y `.highlight` es un `<span>`); no copies esos patrones en código nuevo.

## Known breakages in `js/interactions.js`

- `shareButton` is never defined, so the top-level handler around line 66 throws on load. Listeners registered after it (gallery arrow keys) never attach. `closeMenu()` (Escape path) is also undefined.
- `#copy-email` exists in the HTML but has no handler, and there is no share button in the HTML at all.
- Gallery thumbnails are not generated; `.thumbnails` is empty and duplicated in the markup. `showImage()` only updates `#gallery-image` and `#image-counter`.
- Listeners registered before the throw (details toggle, prev/next gallery) do work.

## Verifying changes

- No automation. Open the page in a browser (or serve the directory containing the HTML) and manually exercise the two working interactions: "Más sobre mí" toggle and gallery prev/next.
- Keyboard arrows, Escape, and "Copiar mi correo" are currently broken or unbound (see above); don't use them as smoke tests or regressions.
- Single `main` branch, no CI, direct commits; commit messages are in Spanish.

## CSS gotchas

- Desktop layout is flexbox via `.row` / `.col-1-2` / `.col-1-3`; only the `max-width: 600px` media query switches `main` to grid. The `grid-column` rules outside that query have no effect on desktop.
- `@font-face` sources point at bare `https://gstatic.com`, so the Bitcount Ink font will not load. These are placeholders, not something to debug.
