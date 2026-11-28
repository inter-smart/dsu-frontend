import { fetchAPI } from "@/lib/api/strapi";

// Rebuilt at most once an hour so new CMS entries appear without a redeploy.
export const revalidate = 3600;

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

// Static pages (no dynamic segment). Utility/demo pages (search, custom-layout,
// career/apply, ai-enabled/*) are intentionally left out.
const STATIC_PATHS = [
  "/", "/about", "/history", "/Vision-Mission", "/chancellor", "/ourTeam", "/Advisory-committee",
  "/campus", "/gallery", "/contact", "/ask-us", "/brochure", "/useful-urls", "/ai-first", "/NVIDIA",
  "/NAAC", "/SDG-initiative", "/Anti-Plagiarism", "/rules-regulations", "/regulatory-approval",
  "/accreditions", "/national-ranking", "/international-Ranking",
  "/academics", "/academics/overview", "/academics/why-choose", "/academics/dean-message",
  "/academics/facilities", "/academics/achievements", "/academics/industry-collabration",
  "/academics/news-events", "/academics/contact",
  "/schools", "/schools/programs", "/schools/placement-snapshot",
  "/admission", "/international", "/international-admission", "/international-services", "/study-in-india",
  "/placement", "/placement/placement", "/placement/Statistics", "/placement/corporate-connect",
  "/placement/internship", "/placement/placement-contact", "/placement/recruit",
  "/placement/recruiters-industry", "/placement/student-success",
  "/research-innovation/doctoral-research", "/research-innovation/incubation", "/research-innovation/innovation",
  "/centres-of-excellence", "/faculty-directory", "/career", "/examination/career",
  "/library", "/library-gallery", "/constituent-libraries", "/E-resource", "/collection", "/corporate-membership",
  "/why-us/CEADC", "/why-us/IQAC", "/why-us/IQAC-activities", "/why-us/committe", "/why-us/ombudsman",
  "/why-us/support-cell", "/why-us/women-Redressal", "/governance/finance-commitee",
  "/alumni", "/alumni/events", "/alumni/newsletter", "/alumni/contact",
  "/news-events", "/announcements", "/community-activities", "/media-coverage",
];

const list = (res) => (Array.isArray(res) ? res : Array.isArray(res?.data) ? res.data : []);

export default async function sitemap() {
  const [schools, departments, programmes, news, faculty, centres, activities] = await Promise.all([
    fetchAPI("/api/schools"),
    fetchAPI("/api/departments"),
    fetchAPI("/api/programmes"),
    fetchAPI("/api/news-events"),
    fetchAPI("/api/faculties"),
    fetchAPI("/api/centre-of-excellences"),
    fetchAPI("/api/news-events", { type: "Community Activities" }),
  ]);

  const entries = new Map();
  const add = (path, lastModified, priority = 0.6) => {
    if (!path) return;
    entries.set(path, {
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      lastModified: lastModified ? new Date(lastModified) : new Date(),
      priority,
    });
  };

  STATIC_PATHS.forEach((p) => add(p, null, p === "/" ? 1 : 0.7));

  list(schools).forEach((s) => s.slug && add(`/schools/${s.slug}`, s.updatedAt, 0.8));
  list(departments).forEach((d) => d.slug && add(`/departments/${d.slug}`, d.updatedAt, 0.7));
  list(programmes).forEach((p) => {
    if (!p.slug) return;
    add(p.school?.slug ? `/schools/${p.school.slug}/programs/${p.slug}` : `/programs/${p.slug}`, p.updatedAt, 0.8);
  });
  list(news).forEach((n) => n.slug && add(`/news-events/${n.slug}`, n.updatedAt, 0.5));
  list(activities).forEach((n) => n.slug && add(`/community-activities/${n.slug}`, n.updatedAt, 0.5));
  list(faculty).forEach((f) => f.slug && add(`/faculty-directory/${f.slug}`, f.updatedAt, 0.4));
  list(centres).forEach((c) => c.slug && add(`/centres-of-excellence/${c.slug}`, c.updatedAt, 0.6));

  return [...entries.values()];
}
