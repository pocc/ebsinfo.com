# Architecture — EBSinfo.com

## Migration Context

This project is being rebuilt from a legacy GoDaddy Website Builder site (saved as monolith HTML snapshots in the repo root) into a modern React SPA deployed on Cloudflare Pages.

### Legacy (reference only)

```
Browser → GoDaddy CDN → Static HTML (monolith single-file pages with inlined assets)
```

### Target Architecture

```
Browser → Cloudflare Pages CDN → Vite-built React SPA
                               → Pages Functions (API routes, e.g. contact form)
```

## System Boundaries

### Frontend (Vite + React + TypeScript)

- **What it is:** A single-page application built with Vite and React, served as static assets from Cloudflare Pages CDN.
- **Pages:** Home (`/`), About (`/about`), Books (`/books`), Contact (`/contact`).
- **Routing:** Client-side via React Router v6. Cloudflare Pages serves `index.html` for all routes (SPA fallback).
- **Styling:** Tailwind CSS utility classes. Global styles in `src/styles/`.
- **Build output:** `dist/` directory containing `index.html`, JS chunks, CSS, and optimized assets.

### Backend (Cloudflare Pages Functions)

- **What it is:** Serverless functions that run on Cloudflare's edge network, co-deployed with the frontend.
- **Location:** `functions/` directory. File-based routing (e.g., `functions/api/contact.ts` → `POST /api/contact`).
- **Runtime:** Cloudflare Workers (V8 isolate, not Node.js).
- **Use cases:**
  - Contact form submission handler
  - <!-- TODO: Define additional API routes as needed -->

## Data Flow

1. **Static content:** User visits site → Cloudflare CDN serves pre-built React SPA → React Router handles client-side navigation between pages.
2. **Contact form:** User submits form → React sends `POST /api/contact` → Pages Function processes submission → <!-- TODO: Define email service (e.g., Resend, Mailchannels, or external API) --> → Returns success/error JSON → React displays confirmation.
3. **Assets:** Images and fonts are imported in React components → Vite hashes and optimizes them at build time → Served from Cloudflare CDN with cache headers.

## Infrastructure (Cloudflare)

### Cloudflare Pages

- **Production branch:** `master`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Framework preset:** Vite (auto-detected)

### Bindings (defined in `wrangler.toml`)

<!-- TODO: Add bindings as needed during development -->

| Binding Type | Name | Purpose |
|---|---|---|
| Environment Variable | `CONTACT_EMAIL` | Recipient for contact form submissions |
| <!-- KV Namespace --> | <!-- e.g., CACHE --> | <!-- e.g., Edge caching for dynamic content --> |
| <!-- D1 Database --> | <!-- e.g., DB --> | <!-- e.g., If content becomes database-driven --> |
| <!-- R2 Bucket --> | <!-- e.g., ASSETS --> | <!-- e.g., Large file storage --> |

### DNS

- **Domain:** `ebsinfo.com`
- **Setup:** Custom domain pointed to Cloudflare Pages via CNAME or Cloudflare DNS proxy.

## Key Architectural Decisions

1. **SPA over SSR/SSG:** The site is content-light (4 pages) with no SEO-critical dynamic content. An SPA keeps the stack simple. If SEO becomes a concern, migrate to <!-- TODO: Consider Astro or Remix on Cloudflare Pages for SSR -->.
2. **Pages Functions over standalone Workers:** Co-locating API routes in `functions/` simplifies deployment — one project, one deploy.
3. **No database initially:** Page content is hardcoded in React components. A headless CMS or D1 database can be added later if the content needs to be editable by non-developers.
