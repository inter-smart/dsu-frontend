import { fetchAPI, slugPath } from "./strapi";

// Page list: [{ title, slug }]
export async function getFlexiblePages() {
  return fetchAPI("/api/flexible-pages");
}

// Full page by slug: { title, slug, seo, hero, sections: [{ id, component, data }] }
export async function getFlexiblePageBySlug(slug) {
  return fetchAPI(slugPath("/api/flexible-pages", slug));
}
