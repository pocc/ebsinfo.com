# CLAUDE.md — EBSinfo.com

## Role

You are a senior Cloudflare & React engineer rebuilding ebsinfo.com from legacy static HTML (GoDaddy Website Builder monolith snapshots) into a modern TypeScript SPA.

## Project Overview

EBSinfo is a professional services site for environmental science forensic studies. It has 4 pages: Home, About, Books, and Contact. The legacy site lives in the repo root as monolith-saved HTML files — these are **reference only** and should not be edited.

## Tech Stack

- **Runtime:** Cloudflare Pages
- **Framework:** React 18+ with Vite 5+
- **Language:** TypeScript (strict mode)
- **Routing:** React Router v6+
- **Styling:** Tailwind CSS 3+
- **Linting:** ESLint + Prettier
- **Testing:** Vitest + React Testing Library
- **Deployment:** Cloudflare Pages (via `wrangler pages deploy` or Git integration)
- **Backend (if needed):** Cloudflare Pages Functions (`functions/` directory)

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start Vite dev server (localhost:5173/demo/)
npm run build        # Production build to dist/demo/
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run format       # Run Prettier
npm run test         # Run Vitest
npm run deploy       # Deploy to Cloudflare Pages
```

## Strict Rules

1. **No Node.js APIs in Workers/Pages Functions.** Cloudflare Workers use the V8 runtime, not Node.js. Do not use `fs`, `path`, `http`, `crypto` (use `globalThis.crypto` or Web Crypto API instead), `Buffer` (use `Uint8Array`), or any `node:*` imports.
2. **Use `Env` bindings, not `process.env`.** In Pages Functions, environment variables and bindings (KV, D1, R2) are accessed via the `context.env` parameter, not `process.env`. Vite client-side env vars use `import.meta.env.VITE_*`.
3. **Do not edit legacy HTML files.** The `index.html`, `about/`, `books/`, and `contact/` files at the repo root are monolith reference snapshots. All new work goes in `src/`.
4. **TypeScript strict mode is mandatory.** No `any` types unless explicitly justified with a comment.
5. **Prefer Web Platform APIs.** Use `fetch`, `Request`, `Response`, `URL`, `URLSearchParams`, `Headers`, `FormData`, `TextEncoder/Decoder` — these are all available in both browser and Cloudflare Workers.
6. **Images must be optimized.** Do not commit uncompressed PNGs/JPGs over 200KB. Use WebP/AVIF where possible.

## Vite Root & Base Path

- **Vite root:** `src/` (set via `root: 'src'` in `vite.config.ts`)
- **Base path:** `/demo/` — the React SPA is served at `/demo/` to coexist with legacy HTML at `/`
- **React Router basename:** `/demo` (set in `src/main.tsx`)
- **Build output:** `dist/demo/` — deploy the parent `dist/` directory

Because the legacy `index.html` occupies the repo root, Vite's entry point is `src/index.html`. All `src` imports in components use paths relative to `src/`.

## Project Structure

```
ebsinfo.com/
├── CLAUDE.md                 # This file
├── CONTRIBUTING.md           # Developer onboarding
├── context/
│   ├── ARCHITECTURE.md       # System architecture
│   └── TECH_STACK.md         # Detailed tech stack
├── src/
│   ├── index.html            # Vite HTML entry point
│   ├── main.tsx              # React mount + BrowserRouter (basename="/demo")
│   ├── App.tsx               # Routes definition
│   ├── vite-env.d.ts         # Vite type declarations
│   ├── components/           # Shared UI (Header, Footer)
│   ├── pages/                # Page components (Home, About, Books, Contact)
│   ├── layouts/              # Layout wrappers (RootLayout)
│   ├── assets/               # Images, fonts (processed by Vite)
│   ├── styles/               # Global CSS + Tailwind directives
│   └── lib/                  # Utility functions
├── functions/                # Cloudflare Pages Functions (API routes)
├── dist/demo/                # Build output (gitignored)
│
│── # Legacy files (reference only — do not edit)
├── index.html                # Legacy home page (monolith snapshot)
├── about/index.html          # Legacy about page
├── books/index.html          # Legacy books page
├── contact/index.html        # Legacy contact page
│
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── postcss.config.js
├── eslint.config.js
├── package.json
└── wrangler.toml             # Cloudflare Pages config
```
