import { fetchAPI } from "./strapi";

// ── Campus ────────────────────────────────────────────────────────────────────
// Page: { title, slug, seo, sections: [{ id, component, data }] } - the Campus blocks in editor order
export async function getCampusPage() {
  return fetchAPI("/api/campus-page");
}
