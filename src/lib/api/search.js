import { fetchAPI, NO_STORE } from "./strapi";

// Site-wide search:
// { query, data: [{ id, type, typeLabel, title, description, url, image, date }],
//   types: [{ key, label, count }], pagination: { page, pageSize, pageCount, total } }
export async function searchSite({ q, type, page = 1, pageSize = 10 } = {}) {
  return fetchAPI("/api/search", { q, type, page, pageSize }, NO_STORE);
}
