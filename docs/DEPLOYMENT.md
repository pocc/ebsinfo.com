# Deployment Guide

## Architecture

The site serves two versions simultaneously:
- **Legacy site** at `/`, `/about`, `/books`, `/contact` — monolith HTML snapshots from GoDaddy Website Builder
- **New React SPA** at `/demo/` — modern TypeScript/React/Vite app

## Cloudflare Pages Configuration

### Dashboard Settings
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** _(empty — repo root)_

### wrangler.toml
The `pages_build_output_dir = "dist"` property is **required**. Without it, Cloudflare's v2 build system ignores the dashboard setting and serves the entire repo root (including the 20MB+ legacy monolith files for every path).

### Build Process
The `npm run build` script does:
1. `tsc -b` — TypeScript compilation
2. `vite build` — Bundles React SPA to `dist/demo/`
3. `cp index.html dist/` — Copies legacy home page
4. `cp -r about books contact dist/` — Copies legacy subpages

### Environment
- Cloudflare uses Node.js v18.17.1 by default
- ESLint packages warn about needing >=18.18.0 but build succeeds
- To use a newer Node, set `NODE_VERSION=20` in Cloudflare Pages environment variables

## Testing Deployments

Cloudflare bot protection blocks non-browser user agents. When testing with Python/curl, use a browser User-Agent:

```python
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
}
```

## Manual Deploy (Alternative)

```bash
npm run deploy
# Equivalent to: npm run build && wrangler pages deploy dist --project-name=ebsinfo
```

Requires valid Cloudflare API token (via `npx wrangler login` or `CLOUDFLARE_API_TOKEN` env var).
