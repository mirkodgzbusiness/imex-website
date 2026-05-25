# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint via next lint
npx playwright test  # run e2e tests
```

No unit test framework configured — Playwright only.

## Stack

- **Next.js 14** App Router, TypeScript strict mode
- **Tailwind CSS 3** with custom design tokens
- **Motion 12** (Framer Motion successor) for animations
- **HLS.js** for hero video streaming
- **Static data only** — no database, no CMS, no API routes

## Architecture

### Routing

App Router with these routes:
- `/` — homepage (hero, stats, featured products)
- `/productos` — full catalog
- `/[categoria]` — dynamic category pages (e.g. `/infantil`, `/adulto`)
- `/producto/[slug]` — product detail with gallery + WhatsApp CTA
- `/nosotros`, `/servicios`, `/contactenos` — static info pages

`generateStaticParams` is used in dynamic routes for full SSG.

### Data

All product/category data lives in `/data/` as TypeScript files — no fetch calls:
- `products.ts` — array of `Product` objects (slug, ref, name, category, description, images[])
- `categories.ts` — array of `Category` objects (slug, name, path, description, icon)

Product images are remote — served from `imporexporperu.com` (legacy WordPress). Configured in `next.config.mjs` under `images.remotePatterns`.

### Styling Conventions

Custom Tailwind tokens defined in `tailwind.config.ts`:
- Colors: `primary` (#0b5cff), `secondary` (#E8401C), `accent` (#c7c5fd), `dark-bg` (#00031d)
- Fonts: `font-national2` (headings), `font-roobert` (body) — loaded from `/public/fonts/`
- Custom keyframes: `marquee-horizontal`, `marquee-vertical`, `page-in`

Utility helper in `/lib/utils.ts` wraps `clsx` + `tailwind-merge` for className merging.

### Layout Shell

`app/layout.tsx` wraps every page with:
1. Font CSS variables (National2, Roobert)
2. Organization JSON-LD schema
3. `HomeSplash` — logo animation overlay, hides after 1.8s
4. `Navbar` — sticky header
5. `Footer`
6. `WhatsAppCTA` — fixed floating button

### WhatsApp Integration

`/lib/whatsapp.ts` builds pre-filled WhatsApp message URLs for product inquiries. Number: +51 994 938 229. Used on product detail pages and the floating CTA.

### SEO

- `app/sitemap.ts` and `app/robots.ts` auto-generate sitemap/robots
- Each page has a `generateMetadata` export using Next.js Metadata API
- Product pages include JSON-LD `Product` schema
- Canonical URLs use hardcoded domain `imporexporperu.com` — update `SEO-ROADMAP.md` when domain changes
