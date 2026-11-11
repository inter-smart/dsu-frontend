import { fetchAPI, slugPath } from "./strapi";

// Page list: [{ title, slug }]
export async function getDoctoralResearchPages() {
  return fetchAPI("/api/doctoral-researches");
}

// Full page by slug, shaped like a Flexible Page: { title, slug, seo, hero, sections: [{ id, component, data }] }
export async function getDoctoralResearchPageBySlug(slug) {
  return fetchAPI(slugPath("/api/doctoral-researches", slug));
}
