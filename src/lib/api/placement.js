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

// The "career-development" entry (the /placement/career page)
export async function getPlacementCareerPage() {
  const entries = await getPlacements();
  const entry = (entries || []).find((e) => e.template === "career-development");
  return entry?.slug ? getPlacementBySlug(entry.slug) : null;
}


// The "placement-page" entry (the /placement/placement page). Its slug differs
// from the route, so it is found by template.
export async function getPlacementResultsPage() {
  const entries = await getPlacements();
  const entry = (entries || []).find((e) => e.template === "placement-page");
  return entry?.slug ? getPlacementBySlug(entry.slug) : null;
}

// The "internship" entry (the /placement/internship page)
export async function getPlacementInternshipPage() {
  const entries = await getPlacements();
  const entry = (entries || []).find((e) => e.template === "internship");
  return entry?.slug ? getPlacementBySlug(entry.slug) : null;
}
