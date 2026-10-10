import { fetchAPI } from "./strapi";

// Returns { seo, hero, ombudsmanMessage } or null
export async function getOmbudsmanPage() {
  return fetchAPI("/api/ombudsman-page", {}, { next: { revalidate: 60 } });
}