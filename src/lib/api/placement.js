import { fetchAPI, slugPath } from "./strapi";

// Menu list: [{ id, documentId, title, slug, template, menuLabel, menuOrder, href }]
export async function getPlacements() {
  return fetchAPI("/api/placements");
}

// Pill menu items [{ label, href }] in menu order. null when the request failed.
export async function getPlacementMenuItems() {
  const entries = await getPlacements();
  if (!Array.isArray(entries)) return null;

  return entries
    .filter((entry) => entry.href)
    .map((entry) => ({ label: entry.menuLabel || entry.title, href: entry.href }));
}

// Full page by slug
export async function getPlacementBySlug(slug) {
  return fetchAPI(slugPath("/api/placements", slug));
}

// The /placement page: the entry with slug "placement" (when it uses the about template),
// otherwise the first entry that uses the template.
export async function getPlacementAboutPage() {
  const bySlug = await getPlacementBySlug("placement");
  if (bySlug && bySlug.template === "about-placement-cell") return bySlug;

  const entries = await getPlacements();
  const entry = (entries || []).find((e) => e.template === "about-placement-cell");
  return entry?.slug ? getPlacementBySlug(entry.slug) : null;
}

// Fixed pages: the entry with the page's own slug first (when it uses the page's template),
// otherwise the first entry that uses the template.
async function getFixedPlacementPage(slug, template) {
  const bySlug = await getPlacementBySlug(slug);
  if (bySlug && bySlug.template === template) return bySlug;

  const entries = await getPlacements();
  const entry = (entries || []).find((e) => e.template === template);
  return entry?.slug ? getPlacementBySlug(entry.slug) : null;
}

// /placement/placement (its entry slug is "placement-results")
export async function getPlacementResultsPage() {
  return getFixedPlacementPage("placement-results", "placement-page");
}

// /placement/internship
export async function getPlacementInternshipPage() {
  return getFixedPlacementPage("internship", "internship");
}

// /placement/student-success
export async function getPlacementStudentSuccessPage() {
  return getFixedPlacementPage("student-success", "student-success");
}

// /placement/recruiters-industry
export async function getPlacementRecruitersIndustryPage() {
  return getFixedPlacementPage("recruiters-industry", "recruiters-industry");
}

// /placement/recruit
export async function getPlacementRecruitPage() {
  return getFixedPlacementPage("recruit", "recruit");
}

// /placement/placement-contact
export async function getPlacementContactPage() {
  return getFixedPlacementPage("placement-contact", "placement-contact");
}
