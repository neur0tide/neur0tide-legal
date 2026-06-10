# Deploy neur0tide.com on Vercel (via GitHub)

## 1. Push this repo to GitHub

```bash
cd /Users/leafy/workspace/products/neur0tide-legal
git remote set-url origin git@github.com:neur0tide/neur0tide-legal.git
git push -u origin main
```

Create the empty repo first on GitHub: **neur0tide/neur0tide-legal** (public is fine).

## 2. Connect Vercel

1. [vercel.com](https://vercel.com) → sign in with **GitHub** (the neur0tide business account)
2. **Add New Project** → import **neur0tide/neur0tide-legal**
3. Settings:
   - **Framework Preset:** Other
   - **Root Directory:** `./`
   - **Build Command:** (empty)
   - **Output Directory:** (empty)
4. **Deploy**

## 3. Custom domain

1. Project → **Settings** → **Domains**
2. Add `neur0tide.com` and `www.neur0tide.com`
3. Vercel shows DNS records — add them where your domain is registered
   (Squarespace registrar, Cloudflare, etc.)

## 4. App Store Connect URLs

| Field | URL |
|-------|-----|
| Privacy Policy | `https://neur0tide.com/privacy` |
| Support URL | `https://neur0tide.com/support` |

## 5. Updates

Push to `main` on GitHub — Vercel redeploys automatically.
