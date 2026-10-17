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

// The "student-success" entry (the /placement/student-success page)
export async function getPlacementStudentSuccessPage() {
  const entries = await getPlacements();
  const entry = (entries || []).find((e) => e.template === "student-success");
  return entry?.slug ? getPlacementBySlug(entry.slug) : null;
}

// The "recruiters-industry" entry (the /placement/recruiters-industry page)
export async function getPlacementRecruitersIndustryPage() {
  const entries = await getPlacements();
  const entry = (entries || []).find((e) => e.template === "recruiters-industry");
  return entry?.slug ? getPlacementBySlug(entry.slug) : null;
}

// The "recruit" entry (the /placement/recruit page)
export async function getPlacementRecruitPage() {
  const entries = await getPlacements();
  const entry = (entries || []).find((e) => e.template === "recruit");
  return entry?.slug ? getPlacementBySlug(entry.slug) : null;
}

// The "placement-contact" entry (the /placement/placement-contact page)
export async function getPlacementContactPage() {
  const entries = await getPlacements();
  const entry = (entries || []).find((e) => e.template === "placement-contact");
  return entry?.slug ? getPlacementBySlug(entry.slug) : null;
}
