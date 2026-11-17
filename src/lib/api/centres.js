import { fetchAPI, slugPath } from "./strapi";

// ── Centres of Excellence ─────────────────────────────────────────────────────
// Listing: { seo, heroSlider, innovationEcosystem, exploreCentres, ideaToExecution,
//            whoCanEngage, takeIdeasForward, sections }
export async function getCentresPage() {
  return fetchAPI("/api/centre-of-excellence-page");
}

// Detail: { title, slug, seo, heroSlider, showcase, innovation, offer, environments,
//           applications, benefits, zones, centres, engagement, gallery, cta }
export async function getCentreBySlug(slug) {
  return fetchAPI(slugPath("/api/centre-of-excellences", slug));
}
