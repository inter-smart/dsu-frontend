import { fetchAPI, REVALIDATE } from "@/lib/api/strapi";
import { PAGE_ROUTES } from "@/lib/page-routes";

// Rebuilt at most once an hour so new CMS entries appear without a redeploy.
export const revalidate = 3600;

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

// Fixed pages. Pages whose slug is editable in the CMS (PAGE_ROUTES) are added from /api/page-slugs instead.
// Utility pages (search, custom-layout, career/apply) are left out.
const STATIC_PATHS = [
  "/", "/about", "/Vision-Mission", "/chancellor", "/ourTeam", "/Advisory-committee",
  "/ask-us", "/brochure", "/useful-urls", "/NAAC", "/SDG-initiative", "/Anti-Plagiarism", "/rules-regulations",
  "/accreditions",
  "/academics", "/academics/overview", "/academics/why-choose", "/academics/dean-message",
  "/academics/facilities", "/academics/achievements", "/academics/industry-collabration",
  "/academics/news-events", "/academics/contact",
  "/schools", "/schools/programs", "/schools/placement-snapshot",
  "/admission", "/international", "/international-admission", "/international-services", "/study-in-india",
  "/placement", "/placement/placement", "/placement/Statistics", "/placement/corporate-connect",
  "/placement/internship", "/placement/placement-contact", "/placement/recruit",
  "/placement/recruiters-industry", "/placement/student-success",
  "/research-innovation/doctoral-research", "/research-innovation/incubation", "/research-innovation/innovation",
  "/examination/career", "/library", "/library-gallery", "/constituent-libraries", "/E-resource", "/collection",
  "/corporate-membership",
  "/why-us/CEADC", "/why-us/IQAC", "/why-us/IQAC-activities", "/why-us/committe", "/why-us/ombudsman",
  "/why-us/support-cell", "/why-us/women-Redressal", "/governance/finance-commitee",
  "/alumni", "/alumni/events", "/alumni/newsletter", "/alumni/contact",
];

const get = (path, params) => fetchAPI(path, params, REVALIDATE);
const list = (res) => (Array.isArray(res) ? res : Array.isArray(res?.data) ? res.data : []);
const slugs = (items) => list(items).filter((i) => i?.slug);

// Faculty is paged (the API caps pageSize at 50), so walk every page.
async function getAllFaculty() {
  const PAGE_SIZE = 50;
  const first = await get("/api/faculties", { page: 1, pageSize: PAGE_SIZE });
  const rest = Math.max(0, (first?.pagination?.pageCount || 1) - 1);
  const pages = await Promise.all(
    Array.from({ length: rest }, (_, i) => get("/api/faculties", { page: i + 2, pageSize: PAGE_SIZE }))
  );
  return [first, ...pages].flatMap(list);
}

export default async function sitemap() {
  const entries = new Map();
  const add = (path, lastModified, priority = 0.6) => {
    if (!path || typeof path !== "string" || !path.startsWith("/")) return;
    const url = `${SITE_URL}${path === "/" ? "" : path}`;
    if (!entries.has(url)) {
      entries.set(url, { url, lastModified: lastModified ? new Date(lastModified) : new Date(), priority });
    }
  };
  // add `<base>/<slug>` for every entry of a collection
  const addAll = (base, items, priority = 0.5) =>
    slugs(items).forEach((i) => add(`${base}/${i.slug}`, i.updatedAt, priority));
  // add the internal `link` of every card of a collection
  const addLinks = (items, priority = 0.5) =>
    list(items).forEach((i) => add(i?.link && !i.isExternal ? i.link : null, i.updatedAt, priority));

  const [
    pageSlugs, schools, departments, programmes, flexible, pdfReports,
    news, announcements, community, alumniEvents, alumnis, faculty, centresPage, accreditation,
    admissions, examinations, governance, international, rankings, intlRankings, regulatory,
    compliance, support, innovations, incubations, doctoral, placements, media, leadership,
  ] = await Promise.all([
    get("/api/page-slugs"), get("/api/schools"), get("/api/departments"), get("/api/programmes"),
    get("/api/flexible-pages"), get("/api/pdf-report-pages"),
    get("/api/news-events"), get("/api/news-events", { type: "Announcement" }),
    get("/api/news-events", { type: "Community Activities" }), get("/api/news-events", { type: "Alumni" }),
    get("/api/alumnis"), getAllFaculty(), get("/api/centre-of-excellence-page"),
    get("/api/accreditions/accredition"),
    get("/api/admissions"), get("/api/examinations"), get("/api/governance-pages"),
    get("/api/international-pages"), get("/api/rankings"), get("/api/international-rankings"),
    get("/api/regulatory-approvals"), get("/api/compliance-and-disclosures"), get("/api/student-supports"),
    get("/api/innovations"), get("/api/incubations"), get("/api/doctoral-researches"),
    get("/api/placements"), get("/api/media-coverage-items"), get("/api/leadership-members"),
  ]);

  // ── fixed pages + CMS-renamed pages ──
  STATIC_PATHS.forEach((p) => add(p, null, p === "/" ? 1 : 0.7));
  Object.keys(PAGE_ROUTES).forEach((key) => {
    const slug = pageSlugs?.[key];
    add(`/${typeof slug === "string" && slug ? slug : PAGE_ROUTES[key].route}`, null, 0.7);
  });

  // ── simple collections ──
  addAll("/admission", admissions);
  addAll("/examination", examinations);
  addAll("/governance", governance);
  addAll("/national-ranking", rankings);
  // NIRF discipline sub-pages come from the ranking sidebar menu
  slugs(await get("/api/rankings", { sidebar: true })).forEach((r) =>
    (r.subItems || []).forEach((sub) => sub?.slug && add(`/national-ranking/${r.slug}/${sub.slug}`, r.updatedAt))
  );
  addAll("/international-Ranking", intlRankings);
  addAll("/regulatory-approval", regulatory);
  addAll("/why-us", compliance);
  addAll("/why-us", support);
  addAll("/research-innovation/innovation", innovations);
  addAll("/research-innovation/incubation", incubations);
  addAll("/research-innovation/doctoral-research", doctoral);
  addAll("/placement", placements);
  addAll("/media-coverage", media);
  addAll("/alumni", alumnis);
  addAll("/leadership", leadership);
  addAll("/faculty-directory", faculty, 0.4);
  addAll("/accreditions", accreditation?.accreditationsData?.cards);
  slugs(international).forEach((i) =>
    add(i.template === "international-admission" ? "/international" : `/international/${i.slug}`, i.updatedAt)
  );
  slugs(pdfReports).forEach((p) => add(`/${p.slug}`, p.updatedAt));

  // ── news, announcements, community activities, alumni events ──
  addAll("/news-events", news);
  addAll("/announcements", announcements);
  addAll("/community-activities", community);
  addAll("/alumni/events", alumniEvents);

  // ── centres of excellence (the listing page links to each centre) ──
  addLinks(centresPage?.exploreCentres?.centres, 0.6);

  // ── schools: main page + every tab ──
  await Promise.all(
    slugs(schools).map(async (s) => {
      add(`/schools/${s.slug}`, s.updatedAt, 0.8);
      const detail = await get(`/api/schools/${encodeURIComponent(s.slug)}`);
      (detail?.tabs || []).forEach((t) => {
        if (t.href) add(t.href, s.updatedAt, 0.6);
        else if (t.key && !t.anchor) add(`/schools/${s.slug}/${t.key}`, s.updatedAt, 0.6);
      });
      if ((detail?.tabs || []).some((t) => t.key === "library")) {
        const lib = await get(`/api/schools/${encodeURIComponent(s.slug)}/library`);
        slugs(lib?.sidebar).forEach((p) => add(`/schools/${s.slug}/library/${p.slug}`, s.updatedAt, 0.5));
      }
    })
  );

  // ── departments: main page + every tab (canonical URL lives under /schools) ──
  await Promise.all(
    slugs(departments).map(async (d) => {
      if (!d.school?.slug) return;
      const base = `/schools/${d.school.slug}/${d.slug}`;
      add(base, d.updatedAt, 0.7);
      const detail = await get(`/api/departments/${encodeURIComponent(d.slug)}/overview`);
      (detail?.availableTabs || []).forEach((t) => add(`${base}/${t}`, d.updatedAt, 0.6));
      if ((detail?.availableTabs || []).includes("library")) {
        const lib = await get(`/api/departments/${encodeURIComponent(d.slug)}/library`);
        slugs(lib?.sidebar).forEach((p) => add(`${base}/library/${p.slug}`, d.updatedAt, 0.5));
      }
    })
  );

  // ── programmes: every tab ──
  await Promise.all(
    slugs(programmes).map(async (p) => {
      if (!p.school?.slug) return;
      const base = `/schools/${p.school.slug}/programs/${p.slug}`;
      add(`${base}/overview`, p.updatedAt, 0.8);
      const detail = await get(`/api/programmes/${encodeURIComponent(p.slug)}/overview`);
      (detail?.availableTabs || []).forEach((t) => add(`${base}/${t}`, p.updatedAt, 0.6));
    })
  );

  // ── flexible pages: at /<slug>, or under the school / department / programme they belong to ──
  await Promise.all(
    slugs(flexible).map(async (f) => {
      const d = await get(`/api/flexible-pages/${encodeURIComponent(f.slug)}`);
      if (!d) return;
      if (d.school?.slug) add(`/schools/${d.school.slug}/${d.slug}`, d.updatedAt);
      else if (d.department?.slug && d.department.school?.slug)
        add(`/schools/${d.department.school.slug}/${d.department.slug}/${d.slug}`, d.updatedAt);
      else if (d.programme?.slug && d.programme.school?.slug)
        add(`/schools/${d.programme.school.slug}/programs/${d.programme.slug}/${d.slug}`, d.updatedAt);
      else add(`/${d.slug}`, d.updatedAt);
    })
  );

  return [...entries.values()];
}
