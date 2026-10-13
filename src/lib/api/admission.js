import { fetchAPI, slugPath } from "./strapi";

// ── Admission Collection (template-based collection) ─────────────────────────
// Menu list: [{ id, documentId, title, slug, template }]
export async function getAdmissions() {
  return fetchAPI("/api/admissions");
}

// Full page by slug: { title, slug, template, seo, hero, sidebar, ...templateData }
export async function getAdmissionBySlug(slug) {
  return fetchAPI(slugPath("/api/admissions", slug));
}

// Get the "overview" template entry (the main /admission page)
export async function getAdmissionOverviewPage() {
  const entries = await getAdmissions();
  const entry = (entries || []).find((e) => e.template === "overview");
  return entry?.slug ? getAdmissionBySlug(entry.slug) : null;
}

// Get the "process" template entry (/admission/process)
export async function getAdmissionProcessPage() {
  const entries = await getAdmissions();
  const entry = (entries || []).find((e) => e.template === "process");
  return entry?.slug ? getAdmissionBySlug(entry.slug) : null;
}

// Get the "hostel" template entry (/admission/hostel)
export async function getAdmissionHostelPage() {
  const entries = await getAdmissions();
  const entry = (entries || []).find((e) => e.template === "hostel");
  return entry?.slug ? getAdmissionBySlug(entry.slug) : null;
}

// Get the "download" template entry (/admission/download)
export async function getAdmissionDownloadPage() {
  const entries = await getAdmissions();
  const entry = (entries || []).find((e) => e.template === "download");
  return entry?.slug ? getAdmissionBySlug(entry.slug) : null;
}


// faqs
export async function getAdmissionFaqPage() {
  const entries = await getAdmissions();
  const entry = (entries || []).find((e) => e.template === "faqs");
  return entry?.slug ? getAdmissionBySlug(entry.slug) : null;
}