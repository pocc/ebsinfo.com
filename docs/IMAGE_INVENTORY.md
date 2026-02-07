# Image Inventory

## Images in `/demo/` SPA (`src/assets/images/`)

| File | Size | Source | Used In | Description |
|------|------|--------|---------|-------------|
| `logo.jpg` | 3 KB | CDN `logo/7371877a-...` | Header (all pages) | EBS circular logo with trees. Auto-inlined as base64 by Vite. |
| `gallery-1.jpg` | 30 KB | CDN `b94f52d1e5ba...` | Home | Lab sample vial held with blue gloves |
| `gallery-2.gif` | 80 KB | CDN `1ea72875432a...` | Home | Microscopic view of oil degradation by microbes |
| `gallery-3.jpg` | 168 KB | CDN `8ed8f167d92d...` | Home | Lab flasks in water bath with EBS sample labels |
| `gallery-4.jpg` | 13 KB | CDN `449fccf7a543...` | Home | Field researcher surveying a landscape |
| `gallery-5.jpg` | 168 KB | CDN `IMG_0055.JPG` | Home | Environmental remediation site with pumps/equipment. Resized from 2560px/1.1MB to 900px/168KB. |
| `gallery-6.gif` | 8 KB | CDN `3d6f6371e336...` | Home | Pseudomonas microbe microscopy image |
| `jim-jacobs-headshot.jpg` | 87 KB | Local `books/Jim_Jacobs_headshot_230818.png` | About, Books | Jim Jacobs headshot at beach. Converted from 477KB PNG to 87KB JPG. |

All images are under the 200 KB optimization guideline from CLAUDE.md.

## Legacy CDN Base URL

```
https://img1.wsimg.com/isteam/ip/b061efd1-3e71-4292-94b3-9951ec716ca3/
```

## Images NOT migrated

| Legacy Reference | Reason |
|------------------|--------|
| `og:image` stock/72915 | Generic GoDaddy stock photo used for social media preview. Not actual site content. |
| 56 base64 `data:image/*` references | GoDaddy Website Builder UI framework images (icons, decorative). Not content. |

## Favicon

- `src/public/favicon.svg` — New SVG favicon with "EBS" text on dark circle. Served at `/demo/favicon.svg`.
- Legacy site used the logo JPG as apple-touch-icon at various sizes.
