import { fetchAPI, slugPath, NO_STORE } from "./strapi";
import { getNewsEventsByType } from "./news-events";

// ── Alumni (Welcome Note ...) ─────────────────────────────────────────────────
// Sidebar menu: [{ id, documentId, title, slug, template }]
export async function getAlumnis() {
  return fetchAPI("/api/alumnis");
}

// Full page: { title, slug, template, seo, hero, sidebar, alumni, alumniEvents, alumniNewsletter }
export async function getAlumniBySlug(slug) {
  return fetchAPI(slugPath("/api/alumnis", slug));
}

// Fixed-route Alumni pages (/alumni, /alumni/events, /alumni/newsletter, /alumni/contact): the Alumni entry
// using the given template -> { pageData, landingSlug }
// (pageData is null when no such entry is published)
export async function getAlumniTemplatePage(template) {
  const entries = await getAlumnis();
  const landingSlug = entries?.[0]?.slug || null;
  const entry = (entries || []).find((e) => e.template === template);

  return {
    landingSlug,
    pageData: entry?.slug ? await getAlumniBySlug(entry.slug) : null,
  };
}

// /alumni -> the Alumni entry using the "alumni" (Welcome Note) template
export async function getAlumniLandingPage() {
  return getAlumniTemplatePage("alumni");
}

export async function getAlumniEventsPage() {
  return getAlumniTemplatePage("alumni-events");
}

// Paged Alumni event cards ("Load More"): { data: [card], pagination: { page, pageSize, pageCount, total } }
export async function getAlumniEventsPaged(page, pageSize = 6) {
  return getNewsEventsByType("Alumni", { page, pageSize }, NO_STORE);
}

export async function getAlumniNewsletterPage() {
  return getAlumniTemplatePage("alumni-newsletter");
}

export async function getAlumniContactPage() {
  return getAlumniTemplatePage("alumni-contact");
}
