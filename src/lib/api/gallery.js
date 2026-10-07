import { fetchAPI, getStrapiMedia } from "./strapi";

export async function getGalleryPage() {
  const response = await fetchAPI(
    "/api/gallery-page",
    {
      "populate[seo]": "true",
      "populate[hero][populate]": "*",
    },
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

export async function getGalleryItems() {
  const response = await fetchAPI(
    "/api/gallery-items",
    {
      populate: "*",
      "pagination[pageSize]": "100",
      sort: "createdAt:asc",
    },
    { next: { revalidate: 60 } }
  );

  const items = response?.data;
  if (!Array.isArray(items) || items.length === 0) return null;

  return items.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    isVideo: item.isVideo,
    videoUrl: item.videoUrl,
    images: (item.images || []).map((img) => getStrapiMedia(img)).filter(Boolean),
  }));
}