import { fetchAPI, slugPath, NO_STORE } from "./strapi";

// ── Faculty Members ───────────────────────────────────────────────────────────
// Listing page (single type): { seo, hero, facultyListing: { filters, faculty, pagination } }
export async function getFacultyDirectoryPage() {
  return fetchAPI("/api/faculty-directory-page");
}

// Paged faculty cards (search / filters / "Load More"):
// { data: [card], pagination: { page, pageSize, pageCount, total, showing } }
export async function getFacultyList(filters = {}) {
  return fetchAPI("/api/faculties", filters, NO_STORE);
}

export async function getFacultyBySlug(slug) {
  return fetchAPI(slugPath("/api/faculties", slug));
}
