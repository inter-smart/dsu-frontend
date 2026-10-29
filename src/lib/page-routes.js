import { redirect } from "next/navigation";
import { fetchAPI } from "@/lib/api/strapi";

// page key (as in GET /api/page-slugs) -> the folder it lives in under src/app and its page module
export const PAGE_ROUTES = {
  contact: { route: "contact", load: () => import("@/app/contact/page") },
  history: { route: "history", load: () => import("@/app/history/page") },
  nvidia: { route: "NVIDIA", load: () => import("@/app/NVIDIA/page") },
  "ai-first": { route: "ai-first", load: () => import("@/app/ai-first/page") },
  careers: { route: "career", load: () => import("@/app/career/page") },
  "media-coverage": { route: "media-coverage", load: () => import("@/app/media-coverage/page") },
  gallery: { route: "gallery", load: () => import("@/app/gallery/page") },
  "faculty-directory": { route: "faculty-directory", load: () => import("@/app/faculty-directory/page") },
  "community-activities": { route: "community-activities", load: () => import("@/app/community-activities/page") },
  "regulatory-approval": { route: "regulatory-approval", load: () => import("@/app/regulatory-approval/page") },
  "news-events": { route: "news-events", load: () => import("@/app/news-events/page") },
  "national-ranking": { route: "national-Ranking", load: () => import("@/app/national-Ranking/page") },
  "international-ranking": { route: "international-Ranking", load: () => import("@/app/international-Ranking/page") },
  announcements: { route: "announcements", load: () => import("@/app/announcements/page") },
  accreditation: { route: "accreditions", load: () => import("@/app/accreditions/page") },
};

export const getPageSlugs = () => fetchAPI("/api/page-slugs");

// A page lives at the slug set in the CMS: its own folder sends the visitor there when the slug was changed.
// viaSlug is set when the page is already being served from /<slug>.
export async function redirectToSlug(key, viaSlug) {
  if (viaSlug) return;
  const slugs = await getPageSlugs();
  const slug = slugs?.[key];
  if (slug && slug !== PAGE_ROUTES[key].route) redirect(`/${slug}`);
}

// The page module whose CMS slug is `slug`, if any
export async function getPageModuleBySlug(slug) {
  const slugs = await getPageSlugs();
  const key = Object.keys(PAGE_ROUTES).find((k) => slugs?.[k] === slug);
  return key ? PAGE_ROUTES[key].load() : null;
}
