import { fetchAPI, getStrapiMedia } from "./strapi";

// Gallery uses Strapi's default core controllers, so populate + media URLs are handled here

// Page (single type): { title, description, seo, hero: { ..., heroMedia: { url } } }
export async function getGalleryPage() {
  const response = await fetchAPI("/api/gallery-page", {
    "populate[seo]": "true",
    "populate[hero][populate]": "*",
  });

  const page = response?.data;
  if (!page) return null;

  const { hero } = page;
  return {
    ...page,
    hero: hero
      ? {
          ...hero,
          heroMedia: hero.heroMedia
            ? { ...hero.heroMedia, url: getStrapiMedia(hero.heroMedia) }
            : null,
        }
      : null,
  };
}

// Items: [{ id, title, category, isVideo, videoUrl, images: [url] }] (null when empty)
export async function getGalleryItems() {
  const response = await fetchAPI("/api/gallery-items", {
    populate: "*",
    "pagination[pageSize]": "100",
    sort: "createdAt:asc",
  });

  const items = response?.data;
  if (!Array.isArray(items) || items.length === 0) return null;

  return items.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    isVideo: item.isVideo,
    videoUrl: item.videoUrl,
    images: (item.images || []).map(getStrapiMedia).filter(Boolean),
  }));
}
