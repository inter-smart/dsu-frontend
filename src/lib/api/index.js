import { fetchAPI } from "./strapi";

// ── About DSU ────────────────────────────────────────────────────────────────
export async function getAboutPage() {
  return fetchAPI("/api/about-page", {}, { next: { revalidate: 60 } });
}

// ── Home Page ─────────────────────────────────────────────────────────────────
export async function getHomePage() {
  return fetchAPI("/api/home-page", {}, { next: { revalidate: 60 } });
}

// ── Navigation ────────────────────────────────────────────────────────────────
export async function getNavigation() {
  return fetchAPI("/api/navigation", {}, { next: { revalidate: 300 } });
}

// ── History Page ──────────────────────────────────────────────────────────────
export async function getHistoryPage() {
  return fetchAPI("/api/history-page", {}, { next: { revalidate: 60 } });
}

// ── Governance Pages ──────────────────────────────────────────────────────────
export async function getGovernancePages() {
  return fetchAPI("/api/governance-pages", {}, { cache: "no-store" });
}

export async function getGovernancePageBySlug(slug) {
  return fetchAPI(
    `/api/governance-pages/${encodeURIComponent(slug)}`,
    {},
    { next: { revalidate: 60 } },
  );
}

export async function getLeadershipMemberBySlug(slug) {
  const params = new URLSearchParams({ slug }).toString();
  const members = await fetchAPI(
    `/api/leadership-members?${params}`,
    {},
    { next: { revalidate: 60 } },
  );
  return members?.[0] || null;
}

// ── Contact Page ──────────────────────────────────────────────────────────────
export async function getContactPage() {
  return fetchAPI("/api/contact-page", {}, { next: { revalidate: 60 } });
}

// ── NVIDIA / AI CoE Page ──────────────────────────────────────────────────────
export async function getNvidiaPage() {
  return fetchAPI("/api/nvidia-page", {}, { next: { revalidate: 60 } });
}

// ── Compliance & Disclosures (DSU Act, Statutes, IT Policy ...) ──────────────
export async function getComplianceDisclosures() {
  return fetchAPI(
    "/api/compliance-and-disclosures",
    {},
    { next: { revalidate: 60 } },
  );
}

export async function getComplianceDisclosureBySlug(slug) {
  return fetchAPI(
    `/api/compliance-and-disclosures/${encodeURIComponent(slug)}`,
    {},
    { next: { revalidate: 60 } },
  );
}

// ── Regulatory Approvals (UGC Recognition, UGC 2(f), AICTE, Other Approvals) ──
export async function getRegulatoryApprovals() {
  return fetchAPI(
    "/api/regulatory-approvals",
    {},
    { next: { revalidate: 60 } },
  );
}

export async function getRegulatoryApprovalBySlug(slug) {
  return fetchAPI(
    `/api/regulatory-approvals/${encodeURIComponent(slug)}`,
    {},
    { next: { revalidate: 60 } },
  );
}

// Landing page (single type): { seo, hero, listSection: [...] }
export async function getRegulatoryApprovalPage() {
  return fetchAPI(
    "/api/regulatory-approval-page",
    {},
    { next: { revalidate: 60 } },
  );
}

// ── Accreditations ───────────────────────────────────────────────
// Landing page (single type): { seo, hero, listSection: [...] }
export async function getAccreditationPage() {
  return fetchAPI(
    "/api/accreditation-page",
    {},
    { next: { revalidate: 60 } },
  );
}

export async function getAccreditationBySlug(slug) {
  return fetchAPI(
    `/api/accreditions/${encodeURIComponent(slug)}`,
    {},
    { next: { revalidate: 60 } },
  );
}

// ── IQAC pages ───────────────────────────────────────────────────────────────
export async function getIqacPageBySlug(slug) {
  return fetchAPI(
    `/api/iqacs/${encodeURIComponent(slug)}`,
    {},
    { next: { revalidate: 60 } },
  );
}

export async function getAqarPageBySlug(slug) {
  return fetchAPI(
    `/api/aqars/${encodeURIComponent(slug)}`,
    {},
    { next: { revalidate: 60 } },
  );
}

export async function getAcademicQualityBySlug(slug) {
  return fetchAPI(
    `/api/academic-qualities/${encodeURIComponent(slug)}`,
    {},
    { next: { revalidate: 60 } },
  );
}

// ── Schools (Academics Cluster)───────────────────────────────────────────────
export async function getSchools() {
  return fetchAPI("/api/schools", {}, { next: { revalidate: 60 } });
}

export async function getSchoolBySlug(slug) {
  return fetchAPI(`/api/schools/${slug}`, {}, { next: { revalidate: 60 } });
}

// ── Departments ───────────────────────────────────────────────────────────────
export async function getDepartments() {
  return fetchAPI("/api/departments", {}, { next: { revalidate: 60 } });
}

export async function getDepartmentBySlug(slug) {
  return fetchAPI(`/api/departments/${slug}`, {}, { next: { revalidate: 60 } });
}

// ── Programmes ────────────────────────────────────────────────────────────────
export async function getProgrammes(filters = {}) {
  const params = new URLSearchParams(filters).toString();
  return fetchAPI(
    `/api/programmes${params ? "?" + params : ""}`,
    {},
    { next: { revalidate: 60 } },
  );
}

export async function getProgrammeBySlug(slug) {
  return fetchAPI(`/api/programmes/${slug}`, {}, { next: { revalidate: 60 } });
}

// ── Faculty Members ───────────────────────────────────────────────────────────
export async function getFacultyList(filters = {}) {
  const params = new URLSearchParams(filters).toString();
  return fetchAPI(
    `/api/faculty-members${params ? "?" + params : ""}`,
    {},
    { next: { revalidate: 60 } },
  );
}

export async function getFacultyBySlug(slug) {
  return fetchAPI(
    `/api/faculty-members/${slug}`,
    {},
    { next: { revalidate: 60 } },
  );
}

// ── Leadership Members ────────────────────────────────────────────────────────
export async function getLeadershipMembers(category) {
  const params = category ? `?category=${encodeURIComponent(category)}` : "";
  return fetchAPI(
    `/api/leadership-members${params}`,
    {},
    { next: { revalidate: 60 } },
  );
}

// ── Committees ────────────────────────────────────────────────────────────────
export async function getCommittees(type) {
  const params = type ? `?type=${encodeURIComponent(type)}` : "";
  return fetchAPI(`/api/committees${params}`, {}, { next: { revalidate: 60 } });
}

export async function getCommitteeBySlug(slug) {
  return fetchAPI(`/api/committees/${slug}`, {}, { next: { revalidate: 60 } });
}

// ── Research Centres ──────────────────────────────────────────────────────────
export async function getResearchCentres() {
  return fetchAPI("/api/research-centres", {}, { next: { revalidate: 60 } });
}

export async function getResearchCentreBySlug(slug) {
  return fetchAPI(
    `/api/research-centres/${slug}`,
    {},
    { next: { revalidate: 60 } },
  );
}

// ── News & Events ─────────────────────────────────────────────────────────────
// Listing page (single type): { seo, hero, newsEvents: { title, newsEvents: [...] } }
export async function getNewsEventsPage() {
  return fetchAPI("/api/news-and-event", {}, { next: { revalidate: 60 } });
}

// News cards: [{ id, slug, path, title, date, year, link }]
export async function getNewsEvents() {
  return fetchAPI("/api/news-events", {}, { next: { revalidate: 60 } });
}

// Paged news cards ("Load More"): { data: [card], pagination: { page, pageSize, pageCount, total } }
export async function getNewsEventsPaged(page, pageSize = 6) {
  return fetchAPI("/api/news-events", { page, pageSize }, { cache: "no-store" });
}

// Detail page: { seo, hero, newsEventsDetail }
export async function getNewsEventBySlug(slug) {
  return fetchAPI(
    `/api/news-events/${encodeURIComponent(slug)}`,
    {},
    { next: { revalidate: 60 } },
  );
}

// ── Announcements ─────────────────────────────────────────────────────────────
// Listing page (single type): { seo, hero, announcement: { title, announcements: [...], pagination } }
export async function getAnnouncementsPage() {
  return fetchAPI("/api/announcements-page", {}, { next: { revalidate: 60 } });
}

// Announcement cards: [{ id, slug, title, description, announcement_image, link, ... }]
export async function getAnnouncements() {
  return fetchAPI("/api/announcements", {}, { next: { revalidate: 60 } });
}

// Paged announcement cards ("Load More"): { data: [card], pagination: { page, pageSize, pageCount, total } }
export async function getAnnouncementsPaged(page, pageSize = 6) {
  return fetchAPI("/api/announcements", { page, pageSize }, { cache: "no-store" });
}

// Detail page: { seo, hero, newsEventsDetail } (same shape as News & Events)
export async function getAnnouncementBySlug(slug) {
  return fetchAPI(
    `/api/announcements/${encodeURIComponent(slug)}`,
    {},
    { next: { revalidate: 60 } },
  );
}

// ── SDG Goals (/SDG-initiative pages) ─────────────────────────────────────────
// Tiles + sidebar: [{ id, slug, title, heading, order, url, image }]
export async function getSdgGoals() {
  return fetchAPI("/api/sdg-goals", {}, { next: { revalidate: 60 } });
}

// Detail page: tile fields + { seo, hero, description, metrics } (hero is null when not set)
export async function getSdgGoalBySlug(slug) {
  return fetchAPI(
    `/api/sdg-goals/${encodeURIComponent(slug)}`,
    {},
    { next: { revalidate: 60 } },
  );
}


// National ranking page
export async function getNationalRankingPage() {
  return fetchAPI("/api/national-ranking-page", {}, { next: { revalidate: 60 } });
}
// ── Rankings (NIRF, India Today, Outlook ...) ─────────────────────────────────
// Sidebar menu: [{ id, label, slug, order, subItems: [{ label, slug }] }]
export async function getRankings() {
  return fetchAPI("/api/rankings", {}, { next: { revalidate: 60 } });
}

// International ranking page
export async function getInternationalRankingPage() {
  return fetchAPI("/api/international-ranking-page", {}, { next: { revalidate: 60 } });
}

// ── International Rankings (QS, THE ...) - NIRF template only ────────────────
// Sidebar menu: [{ id, label, slug, order, subItems: [] }]
export async function getInternationalRankings() {
  return fetchAPI("/api/international-rankings", {}, { next: { revalidate: 60 } });
}

// Full page: { seo, hero, collegeRanking }
export async function getInternationalRankingBySlug(slug) {
  return fetchAPI(
    `/api/international-rankings/${encodeURIComponent(slug)}`,
    {},
    { next: { revalidate: 60 } },
  );
}

// Full page: { seo, hero, collegeRanking, sdgInitiative, sdgGoal, sdgGoalMenu }
// `goal` is an SDG Goal slug under an SDG discipline (`category`)
export async function getRankingBySlug(slug, category, goal) {
  return fetchAPI(
    `/api/rankings/${encodeURIComponent(slug)}`,
    { ...(category ? { category } : {}), ...(goal ? { goal } : {}) },
    { next: { revalidate: 60 } },
  );
}
