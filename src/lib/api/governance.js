import { fetchAPI, slugPath, NO_STORE } from "./strapi";

// ── Governance Pages ──────────────────────────────────────────────────────────
export async function getGovernancePages() {
  return fetchAPI("/api/governance-pages", {}, NO_STORE);
}

export async function getGovernancePageBySlug(slug) {
  return fetchAPI(slugPath("/api/governance-pages", slug));
}

// ── Leadership Members ────────────────────────────────────────────────────────
export async function getLeadershipMembers(category) {
  return fetchAPI("/api/leadership-members", { category });
}

export async function getLeadershipMemberBySlug(slug) {
  const members = await fetchAPI("/api/leadership-members", { slug });
  return members?.[0] || null;
}

// ── Committees ────────────────────────────────────────────────────────────────
export async function getCommittees(type) {
  return fetchAPI("/api/committees", { type });
}

export async function getCommitteeBySlug(slug) {
  return fetchAPI(slugPath("/api/committees", slug));
}

// ── Compliance & Disclosures (DSU Act, Statutes, IT Policy ...) ──────────────
export async function getComplianceDisclosures() {
  return fetchAPI("/api/compliance-and-disclosures");
}

export async function getComplianceDisclosureBySlug(slug) {
  return fetchAPI(slugPath("/api/compliance-and-disclosures", slug));
}

// ── Regulatory Approvals (UGC Recognition, UGC 2(f), AICTE, Other Approvals) ──
// Landing page (single type): { seo, hero, listSection: [...] }
export async function getRegulatoryApprovalPage() {
  return fetchAPI("/api/regulatory-approval-page");
}

export async function getRegulatoryApprovals() {
  return fetchAPI("/api/regulatory-approvals");
}

export async function getRegulatoryApprovalBySlug(slug) {
  return fetchAPI(slugPath("/api/regulatory-approvals", slug));
}

// ── Accreditations ────────────────────────────────────────────────────────────
// Landing page (single type): { seo, hero, listSection: [...] }
export async function getAccreditationPage() {
  return fetchAPI("/api/accreditation-page");
}

export async function getAccreditationBySlug(slug) {
  return fetchAPI(slugPath("/api/accreditions", slug));
}

// ── IQAC pages ────────────────────────────────────────────────────────────────
export async function getIqacPageBySlug(slug) {
  return fetchAPI(slugPath("/api/iqacs", slug));
}

export async function getAqarPageBySlug(slug) {
  return fetchAPI(slugPath("/api/aqars", slug));
}
