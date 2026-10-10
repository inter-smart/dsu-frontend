import { fetchAPI } from "./strapi";

// ── Admission Page ──────────────────────────────────────────────────────────
// Populate & data formatting handled by the Strapi controller
export async function getAdmissionPage() {
  return fetchAPI("/api/adminssion-page");
}
