import { fetchAPI, slugPath, NO_STORE } from "./strapi";

// ── Examination (Overview, Results, Timetables, Contact ...) ──────────────────
// Sidebar menu: [{ id, documentId, title, slug, template }]
export async function getExaminations() {
  return fetchAPI("/api/examinations");
}

// Full page: { title, slug, template, seo, hero, sidebar, examination, results, timetables, contact }
export async function getExaminationBySlug(slug) {
  return fetchAPI(slugPath("/api/examinations", slug));
}

// /examination -> the Examination entry using the "examination" (overview) template
// (null when no such entry is published)
export async function getExaminationLandingPage() {
  const entries = await getExaminations();
  const entry = (entries || []).find((e) => e.template === "examination");

  return entry?.slug ? getExaminationBySlug(entry.slug) : null;
}

// Paged timetable links ("Load More"): { data: [link], pagination: { page, pageSize, pageCount, total } }
export async function getExaminationTimetablePaged(slug, sectionId, page, pageSize = 6) {
  return fetchAPI(
    `${slugPath("/api/examinations", slug)}/timetables/${encodeURIComponent(sectionId)}`,
    { page, pageSize },
    NO_STORE,
  );
}
