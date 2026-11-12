import { fetchAPI, slugPath } from "./strapi";

// The listing lives at /research-innovation/<slug of the Innovation Page>, each Innovation below it
export const DEFAULT_INNOVATION_SLUG = "innovation";
export const innovationListingPath = (slug) => `/research-innovation/${slug || DEFAULT_INNOVATION_SLUG}`;
export const innovationDetailPath = (listingSlug, slug) => `${innovationListingPath(listingSlug)}/${slug}`;

// Listing page: { title, slug, path, seo, hero, intro, industryCentres: { cards } }
// (seo, hero and intro are null while the page is not published)
export async function getInnovationPage() {
  return fetchAPI("/api/innovation-page");
}

// The slug the listing lives at (the default while the CMS is unreachable)
export async function getInnovationListingSlug() {
  return (await getInnovationPage())?.slug || DEFAULT_INNOVATION_SLUG;
}

// Full Innovation page by slug, shaped like a Flexible Page: { title, slug, listingSlug, seo, hero, sections }
export async function getInnovationBySlug(slug) {
  return fetchAPI(slugPath("/api/innovations", slug));
}
