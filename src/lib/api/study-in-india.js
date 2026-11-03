import { fetchAPI, REVALIDATE } from "./strapi";

// The /study-in-india page: { title, seo, banner, hero, courses, ctaBanner, contactDetails, catalog }.
// A section is null when it is switched off or empty.
// catalog: { schools: [{ id, number, title, courseCount, programs: [{ id, title, shortLabel, courses }] }] }
// null when the request failed or the page has no published entry.
export async function getStudyInIndiaPage() {
  return fetchAPI("/api/study-india-page", {}, REVALIDATE);
}
