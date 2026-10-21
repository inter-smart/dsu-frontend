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
export async function getDepartments(params) {
  return fetchAPI("/api/departments", params);
}

// One department page: shell (school, hero, seo, `availableTabs`) + only that tab's data under `tab`.
export async function getDepartmentTab(slug, tab, params) {
  return fetchAPI(`${slugPath("/api/departments", slug)}/${encodeURIComponent(tab)}`, params);
}

// One Library sub-page: department shell + `page` (title, slug, template, seo, content) + the library `sidebar`.
export async function getDepartmentLibraryPage(slug, page, params) {
  return fetchAPI(`${slugPath("/api/departments", slug)}/library/${encodeURIComponent(page)}`, params);
}

// Paged images of a Library gallery sub-page ("Load More"): { data: [image], pagination }
export async function getDepartmentLibraryGalleryPaged(slug, page, pageNumber, pageSize) {
  const res = await getDepartmentLibraryPage(slug, page, { page: pageNumber, pageSize });
  const content = res?.page?.content;
  if (!content?.images || !content?.pagination) return null;
  return { data: content.images, pagination: content.pagination };
}

// Paged news cards for a department's News & Events tab ("Load More"): { data: [card], pagination }
export async function getDepartmentNewsPaged(slug, page, pageSize = 6) {
  const res = await getDepartmentTab(slug, "news-events", { page, pageSize });
  const section = res?.tab?.newsEvents;
  if (!section?.newsEvents || !section?.pagination) return null;
  return { data: section.newsEvents, pagination: section.pagination };
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

// ── Hierarchy lookups (School → Department → Programme) ───────────────────────
// Departments of one school (`?school=` filter; each item carries its `school` and `programmes`).
export async function getSchoolDepartments(schoolSlug) {
  const list = await getDepartments({ school: schoolSlug });
  return Array.isArray(list) ? list.filter((d) => d?.school?.slug === schoolSlug) : [];
}

// Programmes owned directly by the school (no department), via the filtered programme list.
export async function getSchoolDirectProgrammes(schoolSlug) {
  const list = await getProgrammes({ school: schoolSlug });
  return Array.isArray(list) ? list.filter((p) => !p?.department) : [];
}

// ── Research Centres ──────────────────────────────────────────────────────────
export async function getResearchCentres() {
  return fetchAPI("/api/research-centres");
}

export async function getResearchCentreBySlug(slug) {
  return fetchAPI(slugPath("/api/research-centres", slug));
}
