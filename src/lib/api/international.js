import { fetchAPI, REVALIDATE } from "./strapi";

// The /international page: { title, seo, hero, about, awards, courses, innovation, instructions, gallery,
// admissionProcess, enquiryForm, catalog }. A section is null when it is switched off or empty.
// catalog: { schools: [{ id, number, title, courseCount, programs: [{ id, title, shortLabel, courses }] }] }
// null when the request failed or the page has no published entry.
export async function getInternationalPage() {
  return fetchAPI("/api/international-page", {}, REVALIDATE);
}
