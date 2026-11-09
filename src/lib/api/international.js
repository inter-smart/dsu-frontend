import { fetchAPI, slugPath, REVALIDATE } from "./strapi";

// International collection menu: [{ id, documentId, title, slug, template }]
// template: "international-admission" | "flexible-page" | "undergraduate-masters" (shaped like flexible-page)
export async function getInternationalPages() {
  return fetchAPI("/api/international-pages", {}, REVALIDATE);
}

// Full entry by slug. Its shape depends on `template`:
//  - "international-admission": { title, slug, template, seo, hero, about, awards, courses, innovation, instructions,
//    gallery, admissionProcess, enquiryForm, catalog }. A section is null when it is switched off or empty.
//    catalog: { schools: [{ id, number, title, courseCount, programs: [{ id, title, shortLabel, courses }] }] }
//  - "flexible-page": { title, slug, template, seo, hero, topBar, sidebar, sections: [{ id, component, data }] }
// null when the request failed or the entry is not published.
export async function getInternationalPageBySlug(slug) {
  return fetchAPI(slugPath("/api/international-pages", slug), {}, REVALIDATE);
}

// The main /international page: the first published entry that uses the International Admission template
export async function getInternationalPage() {
  const entries = await getInternationalPages();
  const entry = (entries || []).find((e) => e.template === "international-admission");
  return entry?.slug ? getInternationalPageBySlug(entry.slug) : null;
}
