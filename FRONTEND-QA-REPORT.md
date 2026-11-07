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

---

## 11. Re-test and fixes after the first report (2026-11-06, second pass)

Method: production build, headless Chromium (Playwright) over **217 internal pages** found by crawling the site's own links, at 1440, 1024, 768 and 390 px; plus a Lighthouse run and a performance trace of `/`. The CMS (remote Strapi) now responded, so CMS-driven pages could be checked. CMS content varies between runs, so counts such as "animated pages" differ slightly from run to run.

| Check (217 pages) | Before | After |
|---|--:|--:|
| Pages with console/page errors | 137 (React #418 hydration) | **0** |
| Horizontal overflow (4 widths) | `/NVIDIA`, recruiters (earlier) | **0** |
| Pages without exactly one `<h1>` | 29 | 1 (`/schools`, empty CMS list) |
| Missing meta description | 41 | **0** |
| Generic title | 36 | 1 (`/about`, CMS returns nothing) |
| Duplicate IDs / unnamed links | 0 / 0 | 0 / 0 |
| 404 asset requests | `NatWest.svg` ×2 | **0** |

Scroll animations: every page that has content gets the reveal; card grids get step-by-step stagger (43 groups at 1440) and 18 cards get the hover zoom. The 120 pages without animation are CMS tabs that render only the hero (main height 520 px) and have nothing to animate. Reveal replays on every scroll pass.

### Issue register: final status
| ID | Status |
|---|---|
| QA-01 Next RCE advisories | Fixed and verified |
| QA-02 Indexing | Fixed and verified |
| QA-03 Security headers | Fixed and verified |
| QA-04 Home LCP | **Fixed and verified**: LCP 6,981 ms to 1,424 ms (render delay 6,865 ms to 261 ms). Hero text of slide 1 now paints from server HTML (no entrance animation on first paint). TTFB 1.16 s is the dynamic CMS fetch |
| QA-05 38 MB of video | **Fixed**: below-the-fold videos load only near the viewport (`LazyVideo`): 0 MB at load, about 24 MB after scrolling the whole page. Hero video file itself (23 MB) still needs re-encoding (no ffmpeg available) |
| QA-06 to QA-11 | Fixed and verified |
| QA-12 `/faculty-directory` no h1 | Not reproducible in the second pass (1 h1) |
| QA-13 2 h1 on schools/ai-enabled pages | **Fixed** (`academic-contact` h1 to h2). Verified with one `<h1>` in the server HTML of 6 sampled pages (news detail, announcements list and detail, a school, `/academics`, a program overview); not re-run over all 217 pages after the last edit |
| QA-14 Duplicate SVG IDs | Not reproducible (0 pages with duplicate IDs) |
| QA-15, QA-16 | Fixed (QA-16 verified by eslint) |
| QA-17 Reveal overflow | Fixed and verified |
| QA-18 `/NVIDIA` overflow | Not reproducible at 1440, 1024, 768, 390 in the 217-page run (earlier 30 px at 1024x900 not re-checked at that exact size) |
| QA-19 recruiters-industry overflow | Not reproducible in the 217-page run |
| QA-20 Titles and descriptions | **Fixed and verified**: 48 static pages get route-based titles/descriptions, CMS pages get a fallback description, `/schools/*/overview` uses the shared metadata helper. `/about` still generic because the CMS returns no page |
| QA-21 Broken assets and links | Partly fixed: `NatWest.svg` case mismatch fixed (worked on Windows, would 404 on Linux). Open: mock download PDFs (`/documents/*.pdf`) do not exist in `public/`; "Research Areas" menu item points to `/ai-enabled/industry-collabration`, which has no page |
| QA-22 Touch targets | Search button, footer links, theme toggle fixed. Still open: carousel pagination dots (12x5 px), hero "Apply Here" badge (17 px) |

### New defects found and fixed in this pass
- **Hydration error on 137 pages**: `InnerHero` used Radix `asChild` on a base-ui breadcrumb link, rendering `<a>` inside `<a>` (every page with a breadcrumb). Fixed with the `render` prop.
- `<p>` inside `<p>` on `/about` (`about-history.jsx`): fixed.
- 94 kebab-case SVG attributes in 12 components (`fill-rule`, `stroke-width`, ...) converted to camelCase (React warnings in dev).
- Auto-tagging missed content rendered after first load: a debounced MutationObserver re-scan was added.
- `Heading` renders a `div` by default; the news/announcement detail titles still rely on `InnerHero` for the `h1`.

### Remaining open
Hero video re-encode; mock PDF files and the "Research Areas" page; pagination-dot and badge touch targets; `/about` and `/schools` render empty (CMS); unsanitized CMS HTML (`dangerouslySetInnerHTML`, 19 files); `shadcn` is listed in `dependencies`; 37 lint errors (React-compiler style rules); Firefox/Safari not tested; Lighthouse Performance score not available from the tool (Accessibility 97, Best Practices 100, SEO 66 = intentional noindex on `/` mobile; trace LCP 1.42 s, CLS 0.00).

---

## 12. QA run 2026-11-07 (third pass)

Environment: Windows 11, Node 26.11.1, npm 11.13.0, Next 16.4.5 (Turbopack), production build served with `next start -p 3100`, Chromium via Playwright MCP and Chrome DevTools MCP. The CMS responded. Branch `dev-vishal`.

Context: this pass also covers the change that made all text at least 16px between `lg` and `3xl` (about 240 files, class `lg:max-3xl:text-[16px]!`).

### Coverage
- Routes: 62 static routes swept (23 + 39). Dynamic `[slug]` routes were not swept in this pass (217 pages were crawled on 2026-11-06).
- Widths: first 23 routes at 320, 768, 1024, 1280, 1440, 1920; next 39 at 320, 768, 1024, 1440, 1920. Not the 12-width matrix, no 40 px overlap sweep, no screenshot review of inner pages.
- Per route: horizontal overflow, text below 16px at 1024 to 1759, console errors, 4xx responses, title, meta description, `<h1>` count, duplicate IDs, images without `alt`, empty links and buttons.
- Not performed: Lighthouse Performance score and INP (tool excludes them), cross-browser, W3C validator, keyboard pass, dark mode, form submissions.

### Scorecard (this pass)
| Category | Status |
|---|---|
| Build and lint | PARTIAL: build passes; lint 37 errors / 107 warnings (same 37 as before; the 38th, from my header change, was fixed) |
| Robots and indexing | PASS (`/robots.txt` 200 `Disallow: /`; meta robots on all swept routes; `X-Robots-Tag: noindex, nofollow, noarchive`) |
| Responsive (overflow) | PASS for the 62 routes and widths above: 0 horizontal overflow |
| Accessibility | PARTIAL: `/` mobile Lighthouse 100 after fixes; other routes not re-audited |
| Console and network | PARTIAL: see register |
| Security | PARTIAL: dependency and unsanitized-HTML findings unchanged |
| SEO | PARTIAL: descriptions missing on a few routes |
| Performance | NOT TESTED this pass (Performance score unavailable); `/` LCP 1.42 s from the previous pass |
| Cross-browser | NOT TESTED |

### Lighthouse (production build, localhost, no throttling set, DevTools MCP)
| Route | Device | Accessibility | Best Practices | SEO |
|---|---|--:|--:|--:|
| `/` before fixes | mobile / desktop | 97 / 97 | 100 / 100 | 66 / 66 |
| `/` after fixes | mobile | **100** | **100** | 66 |

SEO 66 is the intentional `noindex` (`is-crawlable`). `llms-txt` (agentic browsing) fails because no `llms.txt` exists; not required for this project.

### New issues (this pass)
| ID | Sev | Category | Route | Description | Status |
|---|---|---|---|---|---|
| QA-23 | P2 | Code | `/alumni/events` | "Read More" href was `/alumni/events//alumni/events/<slug>` (CMS link already contains the full path), so every card 404ed. `alumni-events.jsx` | Fixed and verified (served HTML now `/alumni/events/<slug>`; 0 console errors) |
| QA-24 | P2 | A11y | `ai-enabled`, `admission`, `placement`, BSC-nursing menubars | Icon-only `AccordionTrigger` buttons had no accessible name (1 to 2 per page). Added `aria-label="Toggle <label> submenu"` in 4 files | Fixed and verified (0 unnamed buttons on `/ai-enabled/library`; other 3 menubars not re-checked) |
| QA-25 | P2 | A11y | `/` | Hero pagination dots 12x5 px and the "Apply Here" badge under 24 px (Lighthouse `target-size`) | Fixed and verified (a11y 97 to 100) |
| QA-26 | P2 | Typography | footer | Footer select trigger used `!text-sm` / `lg:!text-xs` (important) so the 16px rule missed it; same in `Career-Goal.jsx`, `Intership-Opertunities.jsx`, `home-research-innovation.jsx` | Fixed; footer verified at 1440, the 3 others not visually checked |
| QA-27 | P3 | Typography | `/faculty-directory` | Template-literal class strings with `(` were skipped by the bulk 16px pass (13px buttons at 1024) | Fixed (re-run); `/faculty-directory` re-swept with no small text at 1024 to 1440 |
| QA-28 | P3 | Typography | all, 1440 | Decorative "▼" glyph in the footer select is 13px | Accepted (icon, not reading text) |
| QA-29 | P2 | Navigation | `/ai-enabled/*` | "Research Areas" links to `/ai-enabled/industry-collabration` (404). Also `/SDG-initiative/sdg-*`, `/admissions/apply`, `/faculty/sheljin-ch`, `/leadership/dr-d-hemachandra-sagar` (404 from CMS links) | **Open** (needs a content or product decision) |
| QA-30 | P2 | HTML | `/international-admission`, `/schools` | No `<h1>` (empty CMS content) | **Open** |
| QA-31 | P2 | HTML | `/placement/placement-contact`, `/study-in-india` | 2 `<h1>` | **Open** |
| QA-32 | P2 | SEO | `/career`, `/history`, `/why-us/CEADC`, `/why-us/ombudsman`, `/why-us/women-Redressal` | No meta description. `/why-us/CEADC` title shows a literal `&amp;` | **Open** |
| QA-33 | P3 | HTML | `/accreditions`, `/international-Ranking`, `/national-Ranking`, `/placement/internship`, `/placement/Statistics`, `/placement/student-success` | Duplicate SVG gradient IDs from repeated inline SVG | **Open** |
| QA-34 | P3 | HTML | `/accreditions` | CMS title is junk text ("yutyubnb \| Dayananda Sagar University") | **Open** (CMS content) |
| QA-35 | P3 | Network | `/academics`, `/academics/overview` | One run logged "Refused to apply style ... MIME type ('text/plain')" for a `_next/static` CSS chunk. Not reproduced in the later sweeps (the server was restarted in between) | Not reproducible; watch |
| QA-36 | P3 | Code | `/chancellor` | Returns 404 (CMS entry `dr-d-hemachandra-sagar` missing) | Out of scope (CMS) |

### Fixes implemented this pass
- `src/components/layout/header.jsx`: close the desktop dropdown on route change (state reset during render, not an effect, to satisfy `react-hooks/set-state-in-effect`); "Apply Here" badge `min-h-6`; all text sizes at least 16px from `lg` to below `3xl`.
- `src/components/sections/alumni/alumni-events.jsx`: href fix (QA-23).
- `src/components/sections/home/home-academic.jsx`: pagination dots now 24 px tall hit areas (QA-25).
- 4 menubar files: `aria-label` on icon-only accordion triggers (QA-24).
- `src/app/globals.css` and about 240 component files: 16px minimum between `lg` and `3xl`; 3xl sizes unchanged.

### Regression results
- `next build`: succeeds (final build after the last edit).
- ESLint: 37 errors, 107 warnings (baseline unchanged).
- Re-sweep of 10 routes at 1440, 1280, 1024, 320 after the fixes: 0 horizontal overflow, 0 unnamed buttons, 0 text under 16px at 1024 to 1759 except the decorative "▼" glyph, no new console errors (only the pre-existing 404s listed above, and two invalid routes I typed).
- Known layout effect of the 16px change: header menu labels wrap to two lines at 1280 (no overlap seen at 1024 or 1280). The hero info cards at `/` 1024 may be clipped at the right edge; not verified against the earlier layout.

### Remaining open
QA-29 to QA-34; hero video re-encode; mock `/documents/*.pdf` files; unsanitized CMS HTML (`dangerouslySetInnerHTML`, 19+ files); `shadcn` in `dependencies` (all 21 `npm audit` findings, including 1 critical `proxy-addr` and 11 high, come through it or its CLI tree; none ships to the browser); 37 lint errors; Firefox, Safari and Edge not tested; Lighthouse Performance score not available; no overlap detector, full 12-width matrix or Figma comparison.

### Verdict: PASS WITH WARNINGS is NOT claimed. **FAIL (incomplete)**
No release-blocking defect was found in the routes swept this pass, and indexing, headers and build are correct. The overall verdict stays **FAIL** under the checklist because required checks were not performed (Performance score, cross-browser, full responsive and overlap sweeps) and QA-29 to QA-32 are open.

### 12.1 Correction: 16px minimum reverted (2026-11-07)
The bulk "16px minimum from `lg` to below `3xl`" change caused wrapped header menus and cramped or overlapping cards. It was removed from all ~240 component files and from `globals.css`, so body, card and section text is back to its original sizes. Only these text-size changes remain:
- Header dropdown items +2px at `lg`/`xl` (13 to 15px) and +2px at `2xl` (14 to 16px); flyout items and section labels +2px; mobile menu items 13 to 15px; 3xl unchanged.
- Header top menu: `xl` 12 to 13px, other widths unchanged. It stays on one line (checked by screenshot at 1170 and 1440).
Findings QA-26 and QA-27 (16px misses) no longer apply. QA-23, QA-24, QA-25 (alumni link, accordion names, touch targets) are unaffected and still fixed.
