import { fetchAPI, slugPath } from "./strapi";

// The listing lives at /research-innovation/incubation, each entry below it
export const INCUBATION_LISTING_PATH = "/research-innovation/incubation";
export const incubationDetailPath = (slug) => `${INCUBATION_LISTING_PATH}/${slug}`;

// Listing page: { title, path, seo, hero, intro, cards }
// (seo, hero and intro are null while the page is not published)
export async function getIncubationPage() {
  return fetchAPI("/api/incubation-page");
}

// Full Incubation & Entrepreneurship page by slug, shaped like a Flexible Page: { title, slug, seo, hero, sections }
export async function getIncubationBySlug(slug) {
  return fetchAPI(slugPath("/api/incubations", slug));
}
