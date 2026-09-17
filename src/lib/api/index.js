import { fetchAPI } from './strapi';

// ── About DSU ────────────────────────────────────────────────────────────────
export async function getAboutPage() {
  return fetchAPI('/api/about-page', {}, { next: { revalidate: 60 } });
}

// ── Home Page ─────────────────────────────────────────────────────────────────
export async function getHomePage() {
  return fetchAPI('/api/home-page', {}, { next: { revalidate: 60 } });
}

// ── Navigation ────────────────────────────────────────────────────────────────
export async function getNavigation() {
  return fetchAPI('/api/navigation', {}, { next: { revalidate: 300 } });
}

// ── History Page ──────────────────────────────────────────────────────────────
export async function getHistoryPage() {
  return fetchAPI('/api/history-page', {}, { next: { revalidate: 60 } });
}

export async function getLeadershipMemberBySlug(slug) {
  const params = new URLSearchParams({ slug }).toString();
  const members = await fetchAPI(`/api/leadership-members?${params}`, {}, { next: { revalidate: 60 } });
  return members?.[0] || null;
}

// ── Contact Page ──────────────────────────────────────────────────────────────
export async function getContactPage() {
  return fetchAPI('/api/contact-page', {}, { next: { revalidate: 60 } });
}

// ── NVIDIA / AI CoE Page ──────────────────────────────────────────────────────
export async function getNvidiaPage() {
  return fetchAPI('/api/nvidia-page', {}, { next: { revalidate: 60 } });
}

// ── DSU Act Page ──────────────────────────────────────────────────────────────
export async function getDsuActPage() {
  return fetchAPI('/api/dsu-act-page', {}, { next: { revalidate: 60 } });
}

// ── UGC Recognition Page ──────────────────────────────────────────────────────
export async function getUgcRecognitionPage() {
  return fetchAPI('/api/ugc-recognition-page', {}, { next: { revalidate: 60 } });
}

// ── Schools (Academics Cluster) ───────────────────────────────────────────────
export async function getSchools() {
  return fetchAPI('/api/schools', {}, { next: { revalidate: 60 } });
}

export async function getSchoolBySlug(slug) {
  return fetchAPI(`/api/schools/${slug}`, {}, { next: { revalidate: 60 } });
}

// ── Departments ───────────────────────────────────────────────────────────────
export async function getDepartments() {
  return fetchAPI('/api/departments', {}, { next: { revalidate: 60 } });
}

export async function getDepartmentBySlug(slug) {
  return fetchAPI(`/api/departments/${slug}`, {}, { next: { revalidate: 60 } });
}

// ── Programmes ────────────────────────────────────────────────────────────────
export async function getProgrammes(filters = {}) {
  const params = new URLSearchParams(filters).toString();
  return fetchAPI(`/api/programmes${params ? '?' + params : ''}`, {}, { next: { revalidate: 60 } });
}

export async function getProgrammeBySlug(slug) {
  return fetchAPI(`/api/programmes/${slug}`, {}, { next: { revalidate: 60 } });
}

// ── Faculty Members ───────────────────────────────────────────────────────────
export async function getFacultyList(filters = {}) {
  const params = new URLSearchParams(filters).toString();
  return fetchAPI(`/api/faculty-members${params ? '?' + params : ''}`, {}, { next: { revalidate: 60 } });
}

export async function getFacultyBySlug(slug) {
  return fetchAPI(`/api/faculty-members/${slug}`, {}, { next: { revalidate: 60 } });
}

// ── Leadership Members ────────────────────────────────────────────────────────
export async function getLeadershipMembers(category) {
  const params = category ? `?category=${encodeURIComponent(category)}` : '';
  return fetchAPI(`/api/leadership-members${params}`, {}, { next: { revalidate: 60 } });
}

// ── Committees ────────────────────────────────────────────────────────────────
export async function getCommittees(type) {
  const params = type ? `?type=${encodeURIComponent(type)}` : '';
  return fetchAPI(`/api/committees${params}`, {}, { next: { revalidate: 60 } });
}

export async function getCommitteeBySlug(slug) {
  return fetchAPI(`/api/committees/${slug}`, {}, { next: { revalidate: 60 } });
}

// ── Research Centres ──────────────────────────────────────────────────────────
export async function getResearchCentres() {
  return fetchAPI('/api/research-centres', {}, { next: { revalidate: 60 } });
}

export async function getResearchCentreBySlug(slug) {
  return fetchAPI(`/api/research-centres/${slug}`, {}, { next: { revalidate: 60 } });
}

// ── News & Events ─────────────────────────────────────────────────────────────
export async function getNewsEvents() {
  return fetchAPI('/api/news-events', {}, { next: { revalidate: 60 } });
}

export async function getNewsEventBySlug(slug) {
  return fetchAPI(`/api/news-events/${slug}`, {}, { next: { revalidate: 60 } });
}

// ── Announcements ─────────────────────────────────────────────────────────────
export async function getAnnouncements() {
  return fetchAPI('/api/announcements', {}, { next: { revalidate: 60 } });
}

// ── SDG Initiatives ───────────────────────────────────────────────────────────
export async function getSdgInitiatives() {
  return fetchAPI('/api/sdg-initiatives', {}, { next: { revalidate: 60 } });
}

export async function getSdgInitiativeBySlug(slug) {
  return fetchAPI(`/api/sdg-initiatives/${slug}`, {}, { next: { revalidate: 60 } });
}
