import { fetchAPI, slugPath } from "./strapi";

// The "ombudsman" entry of Student Support & Welfare (collection with a template field).
// Returns { seo, hero, ombudsmanMessage } or null.
export async function getOmbudsmanPage() {
  const options = { next: { revalidate: 60 } };

  // the entry with slug "ombudsman" first (when it uses the template), otherwise the first entry of the template
  const bySlug = await fetchAPI(slugPath("/api/student-supports", "ombudsman"), {}, options);
  if (bySlug && bySlug.template === "ombudsman") return bySlug;

  const entries = await fetchAPI("/api/student-supports", {}, options);
  const entry = (entries || []).find((e) => e.template === "ombudsman");
  return entry?.slug ? fetchAPI(slugPath("/api/student-supports", entry.slug), {}, options) : null;
}
