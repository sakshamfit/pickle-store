# Priya Foods Pickle Store — Interactive Product Showcase

**Made by [sakshamfit](https://github.com/sakshamfit).**

A responsive product-story concept for Priya Foods' pickles and roti pachadis, with an animated flavour carousel, product detail scenes, editorial photography, and links to Priya Foods' official store.

> This repository incorporates and adapts the upstream project by [Gireesh (`gireeshkumarreddy/Priya`)](https://github.com/gireeshkumarreddy/Priya); it is not a claim of sole authorship. This is an unofficial website concept, not a Priya Foods product or official store.

## Made by sakshamfit

This site adaptation — project integration, deployment fixes, repository documentation, and the on-site credit in the footer — is **made by [sakshamfit](https://github.com/sakshamfit)**.

## Features

- Animated product carousel with wheel, drag, touch, keyboard, and previous/next controls.
- Product detail scenes with scroll-driven product turns and hash deep links.
- Editorial image carousel, related-product browsing, and official store links.
- Responsive layout, keyboard focus styles, reduced-motion support, and a pause/play control.
- Local assets and fonts; no shopping backend is included.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** with shadcn/ui-style components
- **vinext** (Vite-based Next.js-compatible toolchain) for local development and Cloudflare Workers builds

## Development

Requires Node.js 22.13+ and pnpm 11.25.0.

```sh
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Open `http://localhost:5173`.

## Building

There are two production build paths, selected automatically by `scripts/run-framework.mjs`:

- **Local / Cloudflare Workers** — `corepack pnpm build` runs `vinext build`, which emits a Workers bundle to `dist/`. Serve it with `corepack pnpm start` (Wrangler).
- **Vercel** — when `VERCEL=1` is set, the build script runs the real Next.js compiler (`next build`) instead, producing the standard `.next` output (including `routes-manifest.json`) that Vercel's Next.js preset requires. Deploying to Vercel therefore works out of the box: Vercel detects Next.js, runs `pnpm run build`, and finds a valid `.next` directory.

> Note: building with `vinext` alone (which outputs a Cloudflare Workers bundle under `dist/`, not `.next/`) previously made Vercel deployments fail with `The file ".next/routes-manifest.json" couldn't be found`. The build script now detects Vercel and uses `next build` there.

## Project notes

The experience recreates a short visual reference rather than the Priya Foods production website. It uses the original project's verified product imagery and source references. No prices, availability, or unverified brand claims are added.

## Credits and provenance

- **Site adaptation made by sakshamfit.** Original project: [gireeshkumarreddy/Priya](https://github.com/gireeshkumarreddy/Priya), by Gireesh. The upstream material is included with permission for this adaptation.
- Priya Foods names, logos, product packaging, and food imagery belong to their respective owners. Permission to adapt the upstream project should not be treated as a blanket license for unrelated reuse of those assets or marks.
- The upstream project does not include a repository-level `LICENSE` file, so no new blanket license is asserted here. Check with the relevant rights holders before reusing this code or its assets elsewhere.

## Attribution

**Made by Sakshamfit.** Original project: [gireeshkumarreddy/Priya](https://github.com/gireeshkumarreddy/Priya), by Gireesh. Priya Foods branding and assets remain the property of their respective owners.
