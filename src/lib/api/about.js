import { fetchAPI } from "./strapi";

// ── About DSU ────────────────────────────────────────────────────────────────
// Populate & data formatting handled by the Strapi controller
export async function getAboutPage() {
  return fetchAPI("/api/about-page");
}

// ── History Page ──────────────────────────────────────────────────────────────
export async function getHistoryPage() {
  return fetchAPI("/api/history-page");
}
