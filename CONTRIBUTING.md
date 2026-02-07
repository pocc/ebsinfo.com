# Contributing — EBSinfo.com

## Prerequisites

- **Node.js** >= 18.x (LTS recommended; required for Vite 5+ and modern ESM support)
- **npm** >= 9.x (ships with Node 18+)
- **Wrangler CLI** >= 3.x — install globally or use via npx:
  ```bash
  npm install -g wrangler
  wrangler login
  ```

## Setup

```bash
git clone <repo-url> ebsinfo.com
cd ebsinfo.com
npm install
```

## Development

Start the Vite dev server with HMR:

```bash
npm run dev
```

This serves the app at `http://localhost:5173`. Changes to files in `src/` are reflected instantly.

To test Pages Functions locally (e.g., the contact form API):

```bash
npx wrangler pages dev dist
# Or, if a combined script is configured:
npm run dev:full
```

## Build & Preview

```bash
npm run build      # Production build → dist/
npm run preview    # Serve dist/ locally to verify the production build
```

## Testing

```bash
npm run test       # Run Vitest in watch mode
npm run test:ci    # Run once with coverage (CI mode)
```

## Code Quality

```bash
npm run lint       # ESLint check
npm run format     # Prettier format
```

Both are enforced in CI. Configure your editor to format on save with Prettier.

## Deployment

The site deploys to Cloudflare Pages automatically on push to `master` (via Git integration) or manually:

```bash
npm run build && npx wrangler pages deploy dist --project-name=ebsinfo
```

## Conventions

### Branching & Commits

- **Trunk-based development.** Work in short-lived feature branches off `master` and merge via PR.
- **Commit messages:** Use imperative mood. Keep the subject line under 72 characters.
  ```
  Add contact form validation
  Fix nav link active state on /books
  ```

### Code Style

- **Prettier** handles formatting. Do not override its defaults.
- **ESLint** enforces code quality. Fix all warnings before committing.
- **TypeScript strict mode** is on. Avoid `any` — use `unknown` and narrow with type guards.

### File & Component Naming

- React components: `PascalCase.tsx` (e.g., `ContactForm.tsx`)
- Utilities and hooks: `camelCase.ts` (e.g., `useContactForm.ts`)
- Pages: `PascalCase.tsx` in `src/pages/` matching the route (e.g., `About.tsx` → `/about`)
- Test files: Co-located as `ComponentName.test.tsx`

### Legacy Files

The root-level `index.html`, `about/`, `books/`, and `contact/` directories contain monolith snapshots of the old GoDaddy site. **Do not edit these.** They exist as visual reference for the rebuild. They will be removed once the migration is complete.

## Project Structure

```
src/
├── main.tsx              # Entry point — mounts <App /> to #root
├── App.tsx               # Router setup and top-level layout
├── components/           # Shared components (Header, Footer, Button, etc.)
├── pages/                # Route-level components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Books.tsx
│   └── Contact.tsx
├── layouts/              # Page layout wrappers
├── assets/               # Images, fonts (imported by components, processed by Vite)
├── styles/               # Global CSS, Tailwind base/components/utilities
└── lib/                  # Utility functions, API client helpers
```
