import { fetchAPI, slugPath } from "./strapi";

// ── Schools (Academics Cluster) ───────────────────────────────────────────────
export async function getSchools() {
  return fetchAPI("/api/schools");
}

export async function getSchoolBySlug(slug) {
  return fetchAPI(slugPath("/api/schools", slug));
}

// One tab page: school shell + only that tab's data under `tab`.
export async function getSchoolTab(slug, tab, params) {
  return fetchAPI(`${slugPath("/api/schools", slug)}/${encodeURIComponent(tab)}`, params);
}

// Paged news cards for a school's News & Events tab ("Load More"): { data: [card], pagination }
export async function getSchoolNewsPaged(slug, page, pageSize = 6) {
  const res = await getSchoolTab(slug, "news-events", { page, pageSize });
  const section = res?.tab?.newsEvents;
  if (!section?.newsEvents || !section?.pagination) return null;
  return { data: section.newsEvents, pagination: section.pagination };
}

// ── Departments ───────────────────────────────────────────────────────────────
export async function getDepartments() {
  return fetchAPI("/api/departments");
}

export async function getDepartmentBySlug(slug) {
  return fetchAPI(slugPath("/api/departments", slug));
}

// ── Programmes ────────────────────────────────────────────────────────────────
export async function getProgrammes(filters = {}) {
  return fetchAPI("/api/programmes", filters);
}

export async function getProgrammeBySlug(slug) {
  return fetchAPI(slugPath("/api/programmes", slug));
}

// ── Research Centres ──────────────────────────────────────────────────────────
export async function getResearchCentres() {
  return fetchAPI("/api/research-centres");
}

export async function getResearchCentreBySlug(slug) {
  return fetchAPI(slugPath("/api/research-centres", slug));
}
