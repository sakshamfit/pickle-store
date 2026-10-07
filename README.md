# Priya Foods — Interactive Product Showcase

A responsive product-story concept for Priya Foods, with an animated flavour carousel, product detail scenes, editorial photography, and links to Priya Foods' official store.

> **Adaptation made by [sakshamfit](https://github.com/sakshamfit).** This repository incorporates and adapts the upstream project by [Gireesh (`gireeshkumarreddy/Priya`)](https://github.com/gireeshkumarreddy/Priya); it is not a claim of sole authorship. This is an unofficial website concept, not a Priya Foods product or official store.

## Credits and provenance

- The original implementation and reference recreation are credited to Gireesh in the [upstream repository](https://github.com/gireeshkumarreddy/Priya). The upstream material is included with permission for this adaptation.
- Sakshamfit's contribution here is the project integration, repository documentation, and adaptation credit in the site footer.
- Priya Foods names, logos, product packaging, and food imagery belong to their respective owners. Permission to adapt the upstream project should not be treated as a blanket license for unrelated reuse of those assets or marks.
- The upstream project does not include a repository-level `LICENSE` file, so no new blanket license is asserted here. Check with the relevant rights holders before reusing this code or its assets elsewhere.

## Features

- Animated product carousel with wheel, drag, touch, keyboard, and previous/next controls.
- Product detail scenes with scroll-driven product turns and hash deep links.
- Editorial image carousel, related-product browsing, and official store links.
- Responsive layout, keyboard focus styles, reduced-motion support, and a pause/play control.
- Local assets and fonts; no shopping backend is included.

## Project notes

The experience recreates a short visual reference rather than the Priya Foods production website. It uses the original project's verified product imagery and source references. No prices, availability, or unverified brand claims are added.

## Development

Requires Node.js 22.13+ and pnpm 11.25.0.

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Open `http://localhost:5173`. To build and serve the production bundle:

```sh
corepack pnpm build
corepack pnpm start
```

## Attribution

**Site adaptation made by Sakshamfit.** Original project: [gireeshkumarreddy/Priya](https://github.com/gireeshkumarreddy/Priya), by Gireesh. Priya Foods branding and assets remain the property of their respective owners.
