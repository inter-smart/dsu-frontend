import { fetchAPI, slugPath } from "./strapi";

// Page list: [{ title, slug }]
export async function getPdfReportPages() {
  return fetchAPI("/api/pdf-report-pages");
}

// Full page by slug, shaped like a Flexible Page: { title, slug, seo, hero, sections: [{ id, component, data }] }
export async function getPdfReportPageBySlug(slug) {
  return fetchAPI(slugPath("/api/pdf-report-pages", slug));
}
