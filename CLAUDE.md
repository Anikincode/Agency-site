# Website — Anikin Technologies

React + Vite site. Design reference: heytony.ca — clean, light, professional services firm.
Design system: UI UX Pro Max standards — typography-first, generous whitespace, dark CTA sections.

---

## Stack
- React 19 + Vite 8
- React Router v7
- Plain CSS (no Tailwind) — design tokens in `src/styles/tokens.css`
- Deployable to GitHub Pages or Vercel

## Commands
```bash
npm run dev      # local dev at localhost:5173
npm run build    # production build → /dist
npm run preview  # preview production build
```

---

## Folder Map

| Path | What's there |
|------|--------------|
| `src/styles/tokens.css` | All design tokens (colors, spacing, radius, shadows, transitions). Edit here first. |
| `src/index.css` | Global reset, `.container`, `.section`, `.btn`, `.badge`, `.prose` utilities |
| `src/components/Navbar.jsx/.css` | Fixed top nav — blur on scroll, hamburger mobile menu |
| `src/components/Footer.jsx/.css` | Dark footer, 3 link columns, social icons, dynamic year |
| `src/pages/` | One file per route + its own CSS |
| `src/data/posts.js` | Blog post data — add new posts here as objects |

---

## Full Route → File Map

| URL | File | Status |
|-----|------|--------|
| `/` | `pages/Home.jsx` | ✅ |
| `/services` | `pages/Services.jsx` | ✅ |
| `/web-design-etobicoke` | `pages/WebDesign.jsx` | ✅ |
| `/services/search-engine-optimization` | `pages/SEO.jsx` | ✅ |
| `/google-ads` | `pages/GoogleAds.jsx` | ✅ |
| `/company` | `pages/Company.jsx` | ✅ |
| `/work` | `pages/Work.jsx` | ✅ |
| `/knowledge` | `pages/Knowledge.jsx` | ✅ |
| `/post/:slug` | `pages/BlogPost.jsx` | ✅ — data from `src/data/posts.js` |
| `/contacts` | `pages/Contact.jsx` | ✅ — needs form backend |
| `/careers` | `pages/Careers.jsx` | ✅ |
| `/free-website` | `pages/FreeWebsite.jsx` | ✅ |
| `/affordable-seo-packages` | `pages/SEOPackages.jsx` | ✅ |
| `/small-business-seo-packages` | `pages/SmallBizSEO.jsx` | ✅ |
| `/seo-trends` | `pages/SEOTrends.jsx` | ✅ |
| `/privacy-policy` | `pages/Legal.jsx` → `PrivacyPolicy` | ✅ |
| `/terms-and-conditions` | `pages/Legal.jsx` → `Terms` | ✅ |
| `/accessibility-statement` | `pages/Legal.jsx` → `Accessibility` | ✅ |

Redirects: `/about` → `/company`, `/contact` → `/contacts`

---

## Design System

All tokens: `src/styles/tokens.css`

| Token | Value | Use |
|-------|-------|-----|
| `--color-accent` | `#1a56ff` | CTAs, highlights, links |
| `--color-bg-soft` | `#f8f7f5` | Alt section backgrounds |
| `--color-bg-dark` | `#0f0f0f` | Dark sections (CTA banners, footer) |
| `--color-text` | `#111111` | Primary text |
| `--color-text-muted` | `#555555` | Body copy |
| `--section-y` | `clamp(5rem, 10vw, 8rem)` | Vertical section padding |
| `--font-sans` | Inter | Imported from Google Fonts |

**Button classes:** `.btn .btn--primary/outline/outline-inv/ghost` + `.btn--sm/lg/xl`
**Badge classes:** `.badge`, `.badge--blue`, `.badge--dark`, `.badge--sm`
**Shared service CSS:** `ServicePage.css` — use for all service landing pages
**Section label pattern:** `<span className="section-label">Label</span>` (blue line + uppercase)

---

## Blog Posts

To add a new post:
1. Add an object to `src/data/posts.js`
2. Required fields: `slug`, `title`, `excerpt`, `category`, `date`, `readTime`, `body`
3. Body uses simple markdown (## h2, ### h3, - lists, **bold**)
4. The route `/post/[slug]` is handled automatically by `BlogPost.jsx`

---

## To-Do (next sessions)

- [ ] Wire contact form to email service (Formspree or Resend)
- [ ] Add real social media profile URLs in Footer
- [ ] Add favicon + og:image for social sharing
- [ ] Add scroll-triggered fade-in animations (Intersection Observer)
- [ ] Add remaining blog posts from the sitemap
- [ ] Add portfolio images/screenshots to Work page
- [ ] Create dedicated case study pages (`/work/drainrooter` etc.)

---

## Deploying

**Vercel (easiest):** Connect GitHub repo, set root to `/website`, auto-detects Vite.

**GitHub Pages:**
```bash
npm install --save-dev gh-pages
npm run deploy
```
Set `base` in `vite.config.js` to `/repo-name/` if deploying to `username.github.io/repo-name`.
