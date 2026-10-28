import { fetchAPI, getStrapiMedia } from "./strapi";

// Listing page (single type): title, description, hero
export async function getMediaCoveragePage() {
  const response = await fetchAPI(
    "/api/media-coverage-page",
    { "populate[seo]": "true", "populate[hero][populate]": "*" },
    { next: { revalidate: 60 } }
  );
  const page = response?.data;
  if (!page) return null;
  return {
    ...page,
    hero: page.hero
      ? {
          ...page.hero,
          heroMedia: page.hero.heroMedia
            ? { ...page.hero.heroMedia, url: getStrapiMedia(page.hero.heroMedia) }
            : null,
        }
      : null,
  };
}

// Cards: [{ id, slug, path, title, source, date, link }]
export async function getMediaCoverageItems() {
  const items = await fetchAPI("/api/media-coverage-items", {}, { next: { revalidate: 60 } });
  return Array.isArray(items) && items.length > 0 ? items : null;
}

// Detail: { seo, hero, newsEventsDetail }
export async function getMediaCoverageBySlug(slug) {
  return fetchAPI(
    `/api/media-coverage-items/${encodeURIComponent(slug)}`,
    {},
    { next: { revalidate: 60 } }
  );
}

export const MEDIA_PAGE_SIZE = 6;

export async function getMediaCoverageItemsPaged(
  page = 1,
  pageSize = MEDIA_PAGE_SIZE,
  options = { cache: "no-store" }
) {
  return fetchAPI("/api/media-coverage-items", { page, pageSize }, options);
}