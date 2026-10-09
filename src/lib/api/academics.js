import { fetchAPI, slugPath } from "./strapi";

// ── Schools (Academics Cluster) ───────────────────────────────────────────────
export async function getSchools() {
  return fetchAPI("/api/schools");
}

export async function getSchoolBySlug(slug) {
  return fetchAPI(slugPath("/api/schools", slug));
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
