import { fetchAPI } from "./strapi";

// Page: { seo, hero, intro, openings } or null
export async function getCareersPage() {
  return fetchAPI("/api/careers-page", {}, { next: { revalidate: 60 } });
}

// Jobs: [{ id, slug, title, department, stats, qualifications, description }] or null
export async function getJobOpenings() {
  const jobs = await fetchAPI("/api/job-openings", {}, { next: { revalidate: 60 } });
  return Array.isArray(jobs) && jobs.length > 0 ? jobs : null;
}

// Single published job by slug: { id, slug, title, department, ... } or null (unknown slug / error)
export async function getJobOpening(slug) {
  if (!slug) return null;
  const job = await fetchAPI(`/api/job-openings/${encodeURIComponent(slug)}`);
  return job?.slug ? job : null;
}