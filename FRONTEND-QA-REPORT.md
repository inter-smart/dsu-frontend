# Frontend QA Report — DSU Frontend

Date: 2026-11-06 · Branch `dev-vishal` · Next.js 16.3.0 → 16.4.5 (App Router, Tailwind v4, JS/JSX)
Environment: Windows 11, npm, Chromium via Playwright and Chrome DevTools MCP, production build served with `next start -p 3100`. The Strapi CMS was **not reachable** from this machine.

## 1. Executive summary

**Verdict: FAIL** (release-blocking items open: home LCP 6.98 s, ~38 MB of hero video, missing per-page titles/descriptions, incomplete coverage). The security and indexing blockers found at the start were fixed and verified.

| | |
|---|---|
| Routes in build | 129 (static + dynamic) |
| Routes browser-tested | 42 static routes × 6 widths (320/390/768/1024/1440/1920), plus an earlier 57-route reveal sweep at 1440 |
| Issues found | 22 |
| Fixed and verified | 9 |
| Fixed, not fully verified | 3 |
| Open | 10 |
| Blocked by environment (CMS offline) | partly QA-21 |

## 2. Scorecard

| Category | Status | Found | Fixed | Outstanding |
|---|---|--:|--:|--:|
| Code review | PARTIAL | 2 | 2 | 0 (plus 37 lint errors, see §8) |
| Build and lint | PARTIAL | 1 | 0 | 1 |
| Robots and indexing | PASS | 2 | 2 | 0 |
| Performance | FAIL | 2 | 0 | 2 |
| Console and network | PARTIAL | 1 | 0 | 1 |
| HTML validation | PARTIAL | 5 | 2 | 3 |
| Security | PARTIAL | 2 | 2 | 0 (plus unsanitized CMS HTML and transitive deps, see §5) |
| Accessibility | PARTIAL (home passes) | 4 | 3 | 1 |
| Responsive design | PARTIAL | 3 | 1 | 2 |
| Visual alignment | PARTIAL (home spot-checked only) | – | – | – |
| Functional testing | PARTIAL | – | – | – |
| SEO and metadata | PARTIAL | 1 | 0 | 1 |
| Cross-browser | NOT TESTED (Chromium only) | – | – | – |

## 3. Performance and Lighthouse

Lighthouse via Chrome DevTools MCP against the production build on localhost. I did not set throttling.

| Route / device | Perf | A11y | BP | SEO | Notes |
|---|--:|--:|--:|--:|---|
| `/` desktop (before fixes) | n/a | 88 | 100 | 66 | |
| `/` mobile (before fixes) | n/a | 92 | 100 | 66 | |
| `/academics/overview` mobile (before fixes) | n/a | 95 | 96 | 66 | console 404 |
| **`/` mobile (after fixes)** | n/a | **100** | **100** | 66 | only `is-crawlable` fails (intentional noindex) |

The DevTools Lighthouse tool excludes Performance, so lab metrics came from a trace instead:

- `/` (production, cold cache, no throttling): **LCP 6,981 ms** (TTFB 116 ms, render delay 6,865 ms, LCP element is the hero `<h1>`), CLS 0.00. Navigation timing: DCL 836 ms, load 1,739 ms, FCP 508 ms. About **37.9 MB of video** transferred, 121 requests.
- Inner pages (navigation timing): `/academics/overview` load 598 ms, `/placement` 1,068 ms, `/gallery` 376 ms.
- A Lighthouse Performance score was **not obtained**. The Performance ≥ 85 criterion is unverified. No field data is available.

## 4. Issue register

| ID | Sev | Category | Route | Description | Status |
|---|---|---|---|---|---|
| QA-01 | P0 | Security | all | Next 16.3.0 had critical RCE advisories (image optimizer SVG/AVIF, next/og, Windows). Upgraded to 16.4.5; `npm audit` shows `next` clean | Fixed and verified (audit + build) |
| QA-02 | P1 | Indexing | all | No robots.txt, no noindex meta and no X-Robots-Tag, despite the project requirement. Added `src/app/robots.js` (Disallow /), `metadata.robots` in the layout and an `X-Robots-Tag` header | Fixed and verified (curl) |
| QA-03 | P2 | Security | all | No `X-Content-Type-Options`, `X-Frame-Options` or `Referrer-Policy`. Added in `next.config.ts`. CSP not added (risk of breaking embeds) | Fixed and verified (curl) |
| QA-04 | P1 | Performance | `/` | LCP 6.98 s. Hero text uses `motion` with `initial opacity:0`, so the `<h1>` is invisible until hydration plus a 1.5 s animation. Cause inferred from the code and trace, not isolated by experiment | **Open** |
| QA-05 | P1 | Performance | `/` | About 38 MB of mp4 loaded on first view (all hero slides) | **Open** (assets) |
| QA-06 | P2 | A11y | `/` | `aria-hidden` collaborations slides contained focusable links. Added `inert` | Fixed and verified (Lighthouse a11y 100) |
| QA-07 | P2 | A11y | all | Mobile menu `SheetTrigger` had no accessible name. Added `aria-label="Open menu"` | Fixed and verified |
| QA-08 | P2 | A11y | footer, forms | Select triggers without an accessible name (footer, academic-contact ×2, career step-personal, recruteDsu ×2) | Fixed; footer verified, form ones not re-audited |
| QA-09 | P2 | A11y | academics, schools, ai-enabled | Icon-only Home link in `academicMenubar.jsx` had no name. Added `aria-label="Home"` | Fixed, not re-audited |
| QA-10 | P2 | HTML | `/` | 2 `<h1>` (one per hero slide). Only the first slide is now `<h1>` | Fixed and verified |
| QA-11 | P2 | HTML | `/NVIDIA` | No `<h1>` (the heading was a div) | Fixed and verified |
| QA-12 | P2 | HTML | `/faculty-directory` | 0 `<h1>` at 1440. Not diagnosed: `InnerHero` renders an h1 only when a title is present | **Open** |
| QA-13 | P2 | HTML | several | 2 `<h1>` on `/academics`, `/academics/contact`, `/academics/overview`, `/ai-enabled/contact`, `/ai-enabled/overview`, `/ai-enabled/BSC-nursing/overview`, `/schools/programs`, `/study-in-india` | **Open** |
| QA-14 | P3 | HTML | `/placement/Statistics` | Duplicate SVG gradient IDs (`paint0_linear_…`) from repeated inline SVG | **Open** |
| QA-15 | P2 | Code | BSC-nursing curriculum, placements campus-facility | Hooks called after an early `return` (rules-of-hooks). Moved the return below the hooks | Fixed, not runtime-tested with null data |
| QA-16 | P3 | Code | 8 files | Missing React `key` in `.map` (Career-journey, School-placement, DSU-Cell, DSU-Commitee, IQAC-reports, Gallery, BSC downloads, academic-contact) | Fixed and verified (eslint) |
| QA-17 | P2 | Responsive | `/` at 390 and 768 | My new scroll-reveal x-offset caused 13–14 px horizontal scroll. Added `main { overflow-x: clip }` while reveal is active | Fixed and verified (no overflow at 320–1920) |
| QA-18 | P2 | Responsive | `/NVIDIA` at 1024 (30 px) and 768 (2 px) | A swiper slide overflows the page. Present with reveal disabled, so pre-existing | **Open** |
| QA-19 | P2 | Responsive | `/placement/recruiters-industry` at 1440 | 12 px overflow, present with reveal disabled (pre-existing) | **Open** |
| QA-20 | P2 | SEO | many routes | Page title is the generic "Dayananda Sagar University" and/or there is no meta description (e.g. `/academics/*`, `/ai-enabled/*`, `/SDG-initiative`, `/why-us/committe`, `/why-us/IQAC`, `/governance/*`). Many are CMS-driven | **Open** |
| QA-21 | P2 | Network | various | 404/500 responses: `/images/logos/natwest.svg`, `/documents/library/library-brochure-2024.pdf`, `/documents/training-and-placement-cell.pdf`, `/faculty/sheljin-ch`, header link `/ai-enabled/industry-collabration`, `/alumni`, `/alumni/events`, `/NAAC`, `/SDG-initiative/sdg-*`, `/admissions/apply`, `/leadership/dr-d-hemachandra-sagar`. `/why-us/other-approval` and `/why-us/board-of-studies` return **500** | Dynamic slugs blocked by environment (CMS offline). Missing `public/` files and the broken header link are real defects: **Open** |
| QA-22 | P3 | A11y | header, footer | Touch targets under 24 px (search button 16 px; footer links 23 px high) | **Open** (design impact) |

## 5. Security findings

- **Dependencies** (`npm audit`): 30 findings before (2 critical, 12 high), 28 after (1 critical, 11 high). `next` is clean. The rest are transitive, mostly via `shadcn` (a CLI listed under `dependencies`; it belongs in `devDependencies`), plus `sharp`, `undici`, `body-parser` and others. I did not upgrade them, since that needs `--force` or breaking changes.
- **DOM injection:** 26 uses of `dangerouslySetInnerHTML` across 19 files inject CMS HTML with **no sanitizer** (no DOMPurify). This is safe only if the CMS and its editors are fully trusted, and it is a potential stored-XSS risk otherwise. Recommend sanitizing. Not changed.
- **Links:** 21 literal `target="_blank"`, only 13 with a nearby `noopener`. Modern browsers imply `noopener`, so the risk is low.
- **Secrets:** none found in `src`; no `.env` file is tracked. Only `NEXT_PUBLIC_STRAPI_URL` is used client-side, which is public by design.
- **Headers:** CSP and Permissions-Policy are not set. HSTS belongs to the host or CDN.
- **Mixed content:** only `http://` external links in static data (`ai-enabled/library/services`).

## 6. Robots and indexing (verified on served responses)

- `/robots.txt` returns 200 with `User-agent: *` / `Disallow: /`.
- `<meta name="robots" content="noindex, nofollow, nocache">` and a `googlebot` meta are present.
- `X-Robots-Tag: noindex, nofollow, noarchive` is sent on responses.
- There is no sitemap and no canonical URL, which is fine for staging.

Trade-off: `Disallow: /` stops crawlers from reading the `noindex` tag, though the header and meta still apply if a URL is discovered. For real privacy, use authentication or IP restriction.

## 7. Scroll-reveal feature (requested work)

- `ScrollReveal` is mounted in `src/app/layout.jsx`; the CSS is at the end of `globals.css`.
- Home has hand-placed `data-reveal` / `data-reveal-stagger` tags. Other pages auto-tag direct children of `main section > .container`.
- Verified: elements reveal with a stagger of about 90 ms; reduced-motion leaves content visible; no horizontal overflow after the QA-17 fix; sticky and fixed elements are skipped; the revealed state uses `translate: none`.
- Not tested: dark-mode visuals, every inner page visually, Firefox and Safari.

## 8. Fixes implemented

- **Dependencies and config:** `package.json` and `package-lock.json` (next 16.4.5), `next.config.ts` (headers).
- **New files:** `src/app/robots.js`, `src/components/providers/scroll-reveal.jsx`.
- **Layout and styles:** `src/app/layout.jsx` (robots meta, ScrollReveal), `src/app/globals.css` (reveal, clip).
- **Home sections:** 10 files with reveal tags.
- **Accessibility and semantics:** `home-hero.jsx`, `home-collaborations.jsx`, `header.jsx`, `footer.jsx`, `academicMenubar.jsx`, `academic-contact.jsx`, `step-personal.jsx`, `recruteDsu.jsx`, `NVIDIA/banner-section.jsx`.
- **Hooks order:** `curriculum.jsx`, `campus-facility.jsx`.
- **React keys:** 6 more files, plus `academic-contact.jsx`.

Regression results:
- The final `next build` succeeds.
- ESLint errors went from 51 to 37 and warnings from 110 to 107. The remaining errors are `react-hooks/set-state-in-effect` (19) and `react-hooks/refs` (18), which are React-compiler-style rules rather than runtime failures.
- The sweep showed no console errors from project code apart from the CMS and asset 404s above.

## 9. Not performed / limitations

- Lighthouse **Performance** score and INP (the tool excludes it; no field data).
- Cross-browser testing: Chromium only, no Firefox, Safari or Edge.
- Viewports: 320, 390, 768, 1024, 1440 and 1920 only. The spec asks for 12 widths plus a 40 px overlap sweep. There was **no automated overlap detector, no screenshot review of inner pages and no Figma comparison**.
- 14 CMS-driven routes (`/about`, `/contact`, `/history`, `/international*`, `/news-events`, `/schools`, …) render an empty `<main>` offline, so they are untested.
- Dynamic `[slug]` routes, form submissions, dark mode, and keyboard testing beyond a 60-Tab pass on home.
- No W3C HTML validator run; I only checked duplicate IDs, h1 counts and alt text.
- Backend-dependent behaviour is out of scope.

## 10. Final verdict: FAIL

Release-blocking items: QA-04 and QA-05 (home performance), QA-20 (titles and descriptions), and the incomplete coverage listed in §9.

Recommended next steps:
1. Render the hero text visibly on first paint (`initial={false}` for slide 0, or a CSS keyframe), and compress or lazy-load the hero videos with a poster.
2. Sanitize CMS HTML before `dangerouslySetInnerHTML`.
3. Add per-route titles and descriptions via `generateMetadata`.
4. Fix the `/NVIDIA` and recruiters-industry overflows.
5. Restore the missing `public/` assets and the broken header link.
6. Move `shadcn` to `devDependencies`.
