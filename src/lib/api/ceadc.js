import { fetchAPI, slugPath } from "./strapi";

// The "ceadc" entry of Student Support & Welfare (collection with a template field).
// Returns { seo, hero, capabilityEnhancementCells } or null.
export async function getCeadcPage() {
  const options = { next: { revalidate: 60 } };

  // the entry with slug "ceadc" first (when it uses the template), otherwise the first entry of the template
  const bySlug = await fetchAPI(slugPath("/api/student-supports", "ceadc"), {}, options);
  if (bySlug && bySlug.template === "ceadc") return bySlug;

  const entries = await fetchAPI("/api/student-supports", {}, options);
  const entry = (entries || []).find((e) => e.template === "ceadc");
  return entry?.slug ? fetchAPI(slugPath("/api/student-supports", entry.slug), {}, options) : null;
}
