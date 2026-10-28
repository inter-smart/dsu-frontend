import { fetchAPI, REVALIDATE } from "./strapi";

// ── Global layout (Header / Footer single types) ─────────────────────────────
export async function getHeader() {
  return fetchAPI("/api/header", {}, REVALIDATE);
}

export async function getFooter() {
  return fetchAPI("/api/footer", {}, REVALIDATE);
}
