# Architecture — EBSinfo.com

## Migration Context

This project is being rebuilt from a legacy GoDaddy Website Builder site (saved as monolith HTML snapshots in the repo root) into a modern React SPA deployed on Cloudflare Pages.

### Current Dual-Serving Setup

```
Browser → Cloudflare Pages CDN → dist/
                                   ├── index.html          (legacy home page)
                                   ├── about/index.html    (legacy about page)
                                   ├── books/index.html    (legacy books page)
                                   ├── contact/index.html  (legacy contact page)
                                   └── demo/               (React SPA)
                                       ├── index.html
                                       └── assets/
```

- **Legacy site** at `/`, `/about`, `/books`, `/contact` — monolith HTML snapshots from GoDaddy
- **New React SPA** at `/demo/` — modern TypeScript/React/Vite app

### Target Architecture

```
Browser → Cloudflare Pages CDN → Vite-built React SPA (replaces legacy)
                               → Pages Functions (API routes, e.g. contact form)
```

## System Boundaries

### Frontend (Vite + React + TypeScript)

- **What it is:** A single-page application built with Vite and React, served as static assets from Cloudflare Pages CDN.
- **SPA Pages:** Home (`/demo/`), About (`/demo/about`), Books (`/demo/books`), Contact (`/demo/contact`).
- **Routing:** Client-side via React Router v6 with `basename="/demo"`. Cloudflare Pages serves `index.html` for all `/demo/*` routes (SPA fallback).
- **Styling:** Tailwind CSS utility classes. Global styles in `src/styles/`.
- **Build output:** `dist/demo/` directory containing `index.html`, JS chunks, CSS, and optimized assets. Legacy HTML is copied to `dist/` root by the build script.

### Backend (Cloudflare Pages Functions)

- **What it is:** Serverless functions that run on Cloudflare's edge network, co-deployed with the frontend.
- **Location:** `functions/` directory. File-based routing (e.g., `functions/api/contact.ts` → `POST /api/contact`).
- **Runtime:** Cloudflare Workers (V8 isolate, not Node.js).
- **Use cases:**
  - Contact form submission handler (TODO)

## Data Flow

1. **Static content:** User visits `/demo/` → Cloudflare CDN serves pre-built React SPA → React Router handles client-side navigation between pages.
2. **Legacy content:** User visits `/` → Cloudflare CDN serves legacy monolith HTML directly from `dist/`.
3. **Contact form:** User submits form → React sends `POST /api/contact` → Pages Function processes submission → Returns success/error JSON → React displays confirmation. (TODO: implement backend)
4. **Assets:** Images and fonts are imported in React components → Vite hashes and optimizes them at build time → Served from Cloudflare CDN with cache headers. Images under ~4KB are auto-inlined as base64.

## Build Process

The `npm run build` script does:
1. `tsc -b` — TypeScript compilation
2. `vite build` — Bundles React SPA to `dist/demo/`
3. `cp index.html dist/` — Copies legacy home page
4. `cp -r about books contact dist/` — Copies legacy subpages

**Critical:** `wrangler.toml` must have `pages_build_output_dir = "dist"` or Cloudflare's v2 build system ignores the dashboard setting and serves the repo root.

## Infrastructure (Cloudflare)

### Cloudflare Pages

- **Production branch:** `master`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Framework preset:** Vite (auto-detected)

### Bindings (defined in `wrangler.toml`)

| Binding Type | Name | Purpose |
|---|---|---|
| Environment Variable | `CONTACT_EMAIL` | Recipient for contact form submissions |

### DNS

- **Domain:** `ebsinfo.com`
- **Setup:** Custom domain pointed to Cloudflare Pages via CNAME or Cloudflare DNS proxy.

## Key Architectural Decisions

1. **SPA over SSR/SSG:** The site is content-light (4 pages) with no SEO-critical dynamic content. An SPA keeps the stack simple.
2. **Pages Functions over standalone Workers:** Co-locating API routes in `functions/` simplifies deployment — one project, one deploy.
3. **No database initially:** Page content is hardcoded in React components. A headless CMS or D1 database can be added later if the content needs to be editable by non-developers.
4. **Dual-serving during migration:** Legacy HTML is copied into `dist/` at build time so both versions are served simultaneously. When the SPA is ready to replace the legacy site, remove the `cp` commands from the build script and change the Vite base path from `/demo/` to `/`.
