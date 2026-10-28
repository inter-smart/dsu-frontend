import { fetchAPI, slugPath, NO_STORE } from "./strapi";

// News & Event entries filtered by type ("Announcement", "Community Activities", "Alumni" ...)
export async function getNewsEventsByType(type, params = {}, options) {
  return fetchAPI("/api/news-events", { type, ...params }, options);
}

// ── News & Events ─────────────────────────────────────────────────────────────
// Listing page (single type): { seo, hero, newsEvents: { title, newsEvents: [...] } }
export async function getNewsEventsPage() {
  return fetchAPI("/api/news-and-event");
}

// News cards: [{ id, slug, path, title, date, year, link }]
export async function getNewsEvents() {
  return fetchAPI("/api/news-events");
}

// Paged news cards ("Load More"): { data: [card], pagination: { page, pageSize, pageCount, total } }
export async function getNewsEventsPaged(page, pageSize = 6) {
  return fetchAPI("/api/news-events", { page, pageSize }, NO_STORE);
}

// Detail page: { seo, hero, newsEventsDetail }
export async function getNewsEventBySlug(slug) {
  return fetchAPI(slugPath("/api/news-events", slug));
}

// ── Community Activities ──────────────────────────────────────────────────────
// Page (single type): { seo, hero, activities: { title, description, items: [...] }, getInvolved }
// `items` are the News & Events entries with type "Community Activities"
export async function getCommunityActivitiesPage() {
  return fetchAPI("/api/community-activities-page");
}

// Items: [{ id, documentId, slug, date, title, description, link, image, defaultOpen }]
export async function getCommunityActivities() {
  return getNewsEventsByType("Community Activities");
}

// Detail page: { seo, hero, newsEventsDetail } (same endpoint as News & Events)
export const getCommunityActivityBySlug = getNewsEventBySlug;

// ── Announcements ─────────────────────────────────────────────────────────────
// Listing page (single type): { seo, hero, announcement: { title, announcements: [...], pagination } }
export async function getAnnouncementsPage() {
  return fetchAPI("/api/announcements-page");
}

// Announcement cards: [{ id, slug, title, description, announcement_image, link, ... }]
export async function getAnnouncements() {
  return getNewsEventsByType("Announcement");
}

// Paged announcement cards ("Load More"): { data: [card], pagination: { page, pageSize, pageCount, total } }
export async function getAnnouncementsPaged(page, pageSize = 4) {
  return getNewsEventsByType("Announcement", { page, pageSize }, NO_STORE);
}

// Detail page: { seo, hero, newsEventsDetail } (same endpoint as News & Events)
export const getAnnouncementBySlug = getNewsEventBySlug;
