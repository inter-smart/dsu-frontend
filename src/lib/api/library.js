import { fetchAPI, slugPath } from "./strapi";

// Full Library page by slug: { title, slug, template, seo, hero, sections: [{ id, component, data }] }
export async function getLibraryBySlug(slug) {
  return fetchAPI(slugPath("/api/libraries", slug));
}
