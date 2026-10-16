import { fetchAPI, slugPath } from "./strapi";

// Menu list: [{ id, documentId, title, slug, template }]
export async function getPlacements() {
  return fetchAPI("/api/placements");
}

// Full page by slug
export async function getPlacementBySlug(slug) {
  return fetchAPI(slugPath("/api/placements", slug));
}

// The "about-placement-cell" entry (the /placement page)
export async function getPlacementAboutPage() {
  const entries = await getPlacements();
  const entry = (entries || []).find((e) => e.template === "about-placement-cell");
  return entry?.slug ? getPlacementBySlug(entry.slug) : null;
}