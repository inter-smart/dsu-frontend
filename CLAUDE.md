@AGENTS.md

# Project Conventions (DSU Frontend)

Observed by reading the existing codebase (~45 routes, ~150 components) on 2026-09-23.
Follow these when building new pages/components so they match the rest of the site.

## Stack

- Next.js 16 (App Router, Turbopack), React 19.
- Plain **JS/JSX only** — no TypeScript (`components.json` → `"tsx": false`), despite `eslint-config-next/typescript` being in the ESLint preset.
- Tailwind CSS v4 via `@tailwindcss/postcss` — **no `tailwind.config.js`**. Theme (colors, breakpoints, radii, fonts, keyframes) is defined entirely in `src/app/globals.css` under `@theme inline`.
- shadcn (`components.json`, style `"base-nova"`) — primitives mostly come from `@base-ui/react` (Button, Select trigger, etc.), not full Radix. `@radix-ui/react-select` is the one Radix package actually used (under `ui/select.jsx`). Icon library is `lucide-react`.
- Path alias `@/*` → `./src/*` (`jsconfig.json`, not tsconfig — this is JS).

## Folder structure

- `src/app/<route>/page.js|.jsx` — one folder per route, App Router. Dynamic routes use `[slug]/page.js`.
- `src/components/layout/` — `header.jsx`, `footer.jsx`, `common/InnerHero.jsx` (shared inner-page hero+breadcrumb), `common/journey.jsx`, `common/news-card.jsx`.
- `src/components/sections/<page-area>/<Component>.jsx` — one component per page section, grouped by page area (e.g. `sections/about/`, `sections/academics/`, `sections/why-us/`).
- `src/components/ui/` — shadcn-style primitives (button, select, tabs, accordion, breadcrumb, sheet, input, text, heading, …), built with `cva` + `cn`.
- `src/components/providers/smooth-scroll-provider.jsx` — wraps the app with Lenis.
- `src/lib/utils.js` — `cn()` = `twMerge(clsx(...))`.
- `src/data/` — an early, more strictly Strapi-shaped mock-data attempt (`{data:{id,documentId,attributes:{...}}}`). **Not actually wired into header/footer** (they keep their own inline data). Treat as exploratory, not the established pattern — see below.

## Page pattern (this is what ~40 route files consistently do)

1. Each `page.js` defines a `local_data` object shaped like a future Strapi REST response: `hero` (with `heroMedia{url,mime,alternativeText}`, `title`, `breadcrumb[]`), plus one key per section (`welcomeSection`, `legacySection`, etc.), each holding that section's fields.
2. The page renders `<InnerHero data={local_data.hero} />` first, then the section components in order, each given `data={local_data.xxxSection}`.
3. Rich text fields use the **Strapi Blocks format** — `[{ type: "paragraph", children: [{ type: "text", text: "..." }] }]` — rendered via `<BlocksRenderer content={...} />` from `@strapi/blocks-react-renderer`. (A few older spots use raw HTML + `dangerouslySetInnerHTML` instead — e.g. header `logoText`, news-events `content` — don't copy that for new work, prefer BlocksRenderer.)
4. Dynamic `[slug]/page.js` files (faculty-directory, news-events, SDG-initiative) exist but currently **do not read `params.slug`** or fetch anything — they still render static `local_data`. No `fetch`, no env vars, no API base URL anywhere in `src` yet — this is scaffolding ahead of real CMS wiring.
5. All media (`url` fields) point at `/images/...` or `/videos/...` inside `public/`, mirroring the shape Strapi media objects will eventually have — so swapping in live data later should be a drop-in. Use `next/image` for images (fixed `width`/`height`, `priority` on hero/LCP media, `object-cover`/`object-contain` via className); native `<video autoPlay muted loop playsInline>` for background/hero video.

When adding a new page, copy this pattern (local `local_data` shaped like the above → `InnerHero` → ordered section components) rather than the `src/data/` style.

## Styling

- **Breakpoints are custom to this project**, defined in `globals.css` `@theme inline`, not the generic 576/768/992/1200/1440/1600/1920 table from the global handbook: default Tailwind `sm:640px`, then `md:768px(48rem) lg:1024px(64rem) xl:1169.375px(73.125rem) 2xl:1408px(88rem) 3xl:1760px(110rem)`. Since this project explicitly defines its own system, use *these* breakpoints for new pages.
- `.container` (in `globals.css` `@layer components`) is just `width:100%; margin-inline:auto; padding-inline:1rem;` plus `max-lg:max-w-full!` — no per-breakpoint max-width steps. Use it as-is.
- Reusable utility classes already defined — reuse instead of redeclaring: `.title_1`, `.text_1`, `.cmnFlx`, `.leftBx` / `.rtBx` (sidebar two-column layout, see below), `.cmn_Title`, `.cmn_Txt`, `.base-gradient`, `.typography` (styles h1–h6/p/ul/ol inside CMS rich text), `.cardFlip` keyframe animation.
- Brand accent is a red→orange gradient exposed as CSS vars `--basecolor`/`--basecolor2` (`#DC2626` → `#F97316`), used constantly as `bg-linear-to-r from-(--basecolor) to-(--basecolor2)`, and for gradient text via `bg-clip-text text-transparent`.
- Dark mode: `.dark` class strategy via `next-themes` (`attribute="class"`, `defaultTheme="light"`, `enableSystem`). Style with `dark:` variants throughout (see e.g. footer logo swap, `about-welcome.jsx` text colors).
- Styling is almost entirely inline Tailwind utility classes with arbitrary values (`text-[25px] xl:text-[36px] ...`), not extracted component CSS.
- Sidebar listing pattern (`why-us/*`, `regulatory-approval/*`, `NIRF`, `SDG-initiative`): two-column `.leftBx` (fixed-width sidebar nav) + `.rtBx` (fluid content) layout, with a dedicated `<XSidebarSection>` component per group (e.g. `dsuActSidebarSection.jsx`, `NIRFSidebar.jsx`, `SDGSidebarSection.jsx`, `StudentSupportSidebar.jsx`). Reuse this for new listing/detail pages under a section group.
- Slider libs installed: `embla-carousel-react` (+ autoplay/auto-scroll/fade addons) and `swiper` both present — check which a given section area already uses before introducing a third option. Per the global handbook rule, don't manually set `overflow` on a slider library's own track element.

## Component conventions

- Functional components, default export, props destructured as `{ data }`.
- Defensive rendering via optional chaining everywhere (`data?.field?.sub`, `data?.list?.map(...)`).
- `"use client"` only where actually needed (state/effects/interactivity) — most `layout/` and interactive `sections/` components; otherwise server components by default.
- Variant-driven UI primitives (`components/ui/*`) use `cva()` for variants + `cn()` (clsx + tailwind-merge) to merge classes — follow this for any new reusable primitive.
- Animation/UX libs in use: `motion` (Framer Motion successor) for animations, `lenis` for smooth scroll (via `SmoothScrollProvider` in root layout), `jarallax` for parallax, `react-countup` for animated counters (wrapped as `ui/client-count-up.jsx`), `react-fast-marquee` for marquees/tickers, `usehooks-ts` for misc hooks.

## Fonts

Root layout (`src/app/layout.jsx`) loads `next/font/google` Roboto → `--font-sans` and Roboto_Mono → `--font-mono`. `globals.css` also has a stray `--font-sora` reference in `body`'s `font-family` fallback list that isn't actually loaded anywhere — dead leftover, ignore it; the real sans font is Roboto via `--font-sans`.

## Tooling notes

- `npm run dev` / `build` / `start` / `lint`. ESLint via flat config (`eslint.config.mjs`), `eslint-config-next` core-web-vitals + typescript presets. No Prettier config present.
- `fix.js` at the repo root is a one-off leftover script (generated placeholder files under `src/data/home/`) — not part of the build, not referenced anywhere.
- AGENTS.md's Next.js agent-rules block is **auto-regenerated by `next dev`** on every dev-server start (see `node_modules/next/dist/server/lib/generate-agent-files.js`). It's expected to show as an uncommitted diff after running the dev server — commit it along with other work rather than reverting it.

## Reconciliation with the global Frontend Engineering Handbook

The handbook now resolves at `D:\wamp\www\AI_Build\Frontend-Engineering-Handbook\*.md` (path corrected 2026-09-23; the old `D:\wamp\...` path didn't exist on this machine). Read against it, here's how it maps onto this project:

- **The handbook's literal architecture doesn't apply.** Chapters 04/05/08/13 describe a PHP + SASS multi-page site (`main.php`/`includes/header.php`/`includes/footer.php`, SASS partials/mixins, `assets/js/app.js`, `pageWrapper` scoping). This project has no PHP and no SASS — it's Next.js App Router + Tailwind v4. The *equivalent* structure already exists and should be treated as this project's "approved architecture" per the handbook's own top principle ("reuse/preserve existing architecture"): `src/app/layout.jsx` + `header.jsx`/`footer.jsx` = the shared shell; `src/components/sections/<area>/` = the SASS "Modules" layer; `src/components/ui/` + CSS vars in `globals.css` = the Design Tokens layer. Don't introduce PHP includes or SASS partials to "comply" with the handbook — that would violate the handbook's own reuse-over-invention rule.
- **Responsive breakpoints/container: confirmed no conflict.** The handbook's own Responsive System chapter (09) states the 576–1920px table applies "unless the project explicitly defines a different one" — this project does (custom breakpoints + `.container` in `globals.css`), so use *this project's* system, exactly as already documented above. This isn't a deviation from the handbook; it's the handbook's own carve-out.
- **CMS rich-text rule: confirmed match.** Handbook ch. 12 mandates styling CMS/rich-text output only through a wrapper selector, never by adding classes inside the editor-generated markup, and treating content length/repeater counts as variable. That's exactly what this project's `.typography` wrapper class + `<BlocksRenderer>` pattern already does — keep using it for all new rich-text fields (don't reach for `dangerouslySetInnerHTML` + custom classes, which a couple of older files do).
- **Rules that DO apply directly and should be followed for new work**, since they're framework-agnostic: one `<h1>` per page, meaningful `alt` text (not just `"Icon"`), proper heading hierarchy, semantic HTML, no duplicate IDs; never lazy-load hero/LCP media (already the practice via `next/image priority`) and lazy-load everything else; reuse an existing component in `components/ui/` or `components/sections/<area>/` before writing a new one; avoid duplicate component implementations.
- **`!important` / Tailwind `!`-prefix overrides**: the handbook says avoid `!important` outright. Existing code already uses Tailwind's `!` modifier in a few places to override shadcn/base-ui component defaults (e.g. `!h-auto`, `!text-sm` in header/footer Select usage). Treat that as accepted for existing code, but for new code prefer normal Tailwind specificity or `cn()`-based class merging over reaching for `!` first.
- **Priority order** (handbook ch. 24): user instructions → handbook → existing project architecture → Figma → framework conventions → AI preference. In practice for this repo that resolves to: follow the handbook's universal, framework-agnostic rules (above) on top of this project's existing Next.js/Tailwind/React patterns — not instead of them.
