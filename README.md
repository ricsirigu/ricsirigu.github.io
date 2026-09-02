# Riccardo Sirigu — personal website

Personal website and Markdown blog built with [Astro](https://astro.build/), TypeScript, React, Styled Components, Framer Motion and Font Awesome. The visual rules originally authored with Tailwind utilities are preserved as local compatibility styles, without a Tailwind build-time dependency.

The site is statically generated. Astro owns routing, document metadata, content loading and the build; the existing React components remain in place where they preserve the original UI and interactions.

## Requirements

- Node.js 22.12.0 or newer
- npm 10.8.2 or newer

## Development

```shell
npm install
npm run dev
```

The development server is available at `http://localhost:4321` by default.

## Validation and production build

```shell
npm run check
npm run build
npm run verify
```

The static production output is written to `dist/`. To inspect it locally:

```shell
npm run preview
```

`npm test` runs the Astro type check followed by the production-output verifier. The verifier checks routes, SEO metadata, sitemap contents, `CNAME` and local asset/link integrity.

## Content and structure

- `src/data/` contains the Markdown content and its source images.
- `src/pages/` contains the Astro routes.
- `src/layouts/BaseLayout.astro` owns global document metadata and SEO markup.
- `src/react-pages/` contains the page-level React islands retained from the previous implementation.
- `src/lib/content.ts` loads frontmatter, renders Markdown and maps the preserved responsive image assets.
- `src/lib/tw.ts` preserves the exact legacy utility-style objects used by Styled Components.
- `src/assets/styles/legacy-tailwind.css` contains the frozen global reset and typography rules from the previous Tailwind build.
- `static/` contains public files, icons, the custom domain file and the optimized image variants carried over from the previous build.

## Deployment

```shell
npm run deploy
```

This creates a fresh Astro build and publishes `dist/` to the repository's `gh-pages` branch. The custom domain is preserved through `static/CNAME`.

Deployment is intentionally manual; a normal build or test never publishes the site.
