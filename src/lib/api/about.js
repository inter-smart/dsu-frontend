import { fetchAPI } from './strapi';

/**
 * Fetch About DSU page data from Strapi v5
 * (Populate & data formatting handled cleanly by the Strapi controller)
 */
export async function getAboutPage() {
  const response = await fetchAPI('/api/about-page', {}, {
    next: { revalidate: 60 },
  });

  return response || null;
}
