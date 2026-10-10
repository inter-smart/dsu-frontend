import { fetchAPI } from "./strapi";

// Returns { seo, hero, womenRedressalCell } or null
export async function getWomenRedressalPage() {
  return fetchAPI("/api/women-redressal-page", {}, { next: { revalidate: 60 } });
}