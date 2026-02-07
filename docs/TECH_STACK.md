# Tech Stack — EBSinfo.com

## Core

| Technology | Version | Why |
|---|---|---|
| **React** | 18+ | Component-based UI library. Industry standard with the largest ecosystem of components, hooks, and community support. |
| **Vite** | 5+ | Build tool and dev server. Instant HMR, native ESM in dev, Rollup-based production builds. The modern default for React projects. |
| **TypeScript** | 5+ | Static typing catches bugs at compile time, improves editor IntelliSense, and serves as living documentation. Strict mode enforced. |
| **React Router** | 6+ | Declarative client-side routing. The standard router for React SPAs with support for nested routes, loaders, and lazy loading. |

## Styling

| Technology | Why |
|---|---|
| **Tailwind CSS 3+** | Utility-first CSS framework. Eliminates naming debates, produces small production CSS via PurgeCSS, and co-locates styles with markup for fast iteration. |
| **PostCSS** | Required by Tailwind. Also enables autoprefixing for cross-browser compatibility. |

## Backend / Infrastructure

| Technology | Why |
|---|---|
| **Cloudflare Pages** | Global CDN with automatic deployments from Git. Free tier is generous for a small professional site. Handles SSL, caching, and edge distribution. |
| **Cloudflare Pages Functions** | Serverless edge functions co-deployed with the frontend. No separate infrastructure to manage. Used for contact form and any future API routes. |
| **Wrangler CLI** | Cloudflare's official CLI for local development, testing, and deployment of Pages and Workers projects. |

## Testing

| Technology | Why |
|---|---|
| **Vitest** | Vite-native test runner. Shares the same config and transform pipeline as the app, so no separate Babel/webpack setup. Fast, with Jest-compatible API. |
| **React Testing Library** | Tests components from the user's perspective (queries by role, text, label). Encourages accessible markup and avoids testing implementation details. |

## Code Quality

| Technology | Why |
|---|---|
| **ESLint** | Catches bugs and enforces consistent patterns. Uses `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, and `typescript-eslint`. |
| **Prettier** | Opinionated code formatter. Ends all style debates. |

## State Management

| Approach | Why |
|---|---|
| **React `useState`** | For a 4-page content site, no external state library is needed. React's built-in state is sufficient. |

## Assets & Optimization

| Technology | Why |
|---|---|
| **Vite asset pipeline** | Handles image imports, hashing, and optimization. Images under ~4KB are auto-inlined as base64. |
| **JPEG/GIF optimized** | All content images are under 200KB. Large images resized at source (e.g., gallery-5.jpg from 1.1MB to 168KB). |

## Not Using (and why)

| Technology | Why Not |
|---|---|
| **Next.js / Remix** | Over-engineered for a 4-page content site with no dynamic data. A plain Vite + React SPA is simpler to deploy on Cloudflare Pages. |
| **Redux / Zustand** | No complex client state to manage. Pages are mostly static content. |
| **CSS Modules / Styled Components** | Tailwind covers styling needs with less boilerplate and better consistency. |
| **Node.js backend** | Cloudflare Pages Functions provide a simpler serverless alternative with zero infrastructure management. |
| **Database** | Content is static and infrequently updated. Hardcoded in components. Add D1 or a headless CMS when content editing by non-devs is needed. |
