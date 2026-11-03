import { fetchAPI, REVALIDATE } from "./strapi";

// The /international-services page: { title, seo, hero, intro, features, campus, support, team, faq, cta }.
// A section is null when it is switched off or empty. Every link is { label, url, isExternal } in
// Strapi and reaches the components as href + isExternal.
// null when the request failed or the page has no published entry.
export async function getInternationalServicesPage() {
  return fetchAPI("/api/international-services-page", {}, REVALIDATE);
}
