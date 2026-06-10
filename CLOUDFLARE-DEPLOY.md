# Deploy neur0tide.com on Cloudflare Pages

This folder is the **entire site**. Upload it as-is — no build step.

## Files to deploy

```
index.html
privacy.html
support.html
style.css
logo.svg
_redirects
_headers
robots.txt
404.html
```

## App Store Connect URLs (after deploy)

Use these in App Store Connect:

| Field | URL |
|-------|-----|
| Privacy Policy | `https://neur0tide.com/privacy` |
| Support URL | `https://neur0tide.com/support` |

(`/privacy.html` also works — `_redirects` serves both.)

## Option A — Direct upload (fastest)

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages**
2. **Create** → **Pages** → **Upload assets**
3. Project name: e.g. `neur0tide`
4. Drag this entire folder (or a zip of its contents)
5. **Custom domains** → Add `neur0tide.com` and `www.neur0tide.com`
6. Wait for SSL (usually a few minutes)

## Option B — Git-connected Pages

1. Push this folder to a GitHub repo (public or private)
2. Pages → **Connect to Git** → select repo
3. Build settings:
   - **Framework preset:** None
   - **Build command:** (leave empty)
   - **Build output directory:** `/` (root)
4. Add custom domain `neur0tide.com`

## DNS (domain on Squarespace or elsewhere)

Point the domain to Cloudflare:

1. Add `neur0tide.com` to Cloudflare (**Websites** → **Add site**)
2. Cloudflare shows two nameservers — set those at Squarespace (or your registrar)
   under DNS / nameservers
3. After propagation, attach the domain to your Pages project

Or keep DNS at Squarespace and add only:

| Type | Name | Target |
|------|------|--------|
| CNAME | `www` | `<your-project>.pages.dev` |
| CNAME or flatten | `@` | `<your-project>.pages.dev` |

(Pages shows the exact target in **Custom domains**.)

## Verify

Open in a browser:

- https://neur0tide.com/
- https://neur0tide.com/privacy
- https://neur0tide.com/support

Mailto links should show `support@neur0tide.com`.

## Re-deploy after edits

**Direct upload:** Upload a new version in the Pages project.

**Git:** Push to `main` — Pages redeploys automatically.

## Zip for upload

From the parent directory:

```bash
cd /Users/leafy/workspace/products/neur0tide-legal
zip -r ../neur0tide-site.zip . -x "*.git*" -x "README.md" -x "CLOUDFLARE-DEPLOY.md"
```

Upload `neur0tide-site.zip` in the Cloudflare dashboard if drag-and-drop prefers a zip.
