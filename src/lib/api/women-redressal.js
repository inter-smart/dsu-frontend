import { fetchAPI, slugPath } from "./strapi";

// The "women-redressal" entry of Student Support & Welfare (collection with a template field).
// Returns { seo, hero, womenRedressalCell } or null.
export async function getWomenRedressalPage() {
  const options = { next: { revalidate: 60 } };

  // the entry with slug "women-redressal" first (when it uses the template), otherwise the first entry of the template
  const bySlug = await fetchAPI(slugPath("/api/student-supports", "women-redressal"), {}, options);
  if (bySlug && bySlug.template === "women-redressal") return bySlug;

  const entries = await fetchAPI("/api/student-supports", {}, options);
  const entry = (entries || []).find((e) => e.template === "women-redressal");
  return entry?.slug ? fetchAPI(slugPath("/api/student-supports", entry.slug), {}, options) : null;
}

// Left side menu of the /why-us pages: published Student Support & Welfare entries
// [{ id, title, slug, template, menuLabel, href }] or null when the request fails.
export async function getStudentSupportMenu() {
  return fetchAPI("/api/student-supports", {}, { next: { revalidate: 60 } });
}

// A Student Support & Welfare page by slug (used by /why-us/[slug] for templates without a fixed route).
// Returns { slug, template, seo, hero, ...template data } or null.
export async function getStudentSupportPageBySlug(slug) {
  return fetchAPI(slugPath("/api/student-supports", slug), {}, { next: { revalidate: 60 } });
}
