import { fetchAPI, slugPath } from "./strapi";

// ── National Rankings (NIRF, India Today, Outlook ...) ────────────────────────
export async function getNationalRankingPage() {
  return fetchAPI("/api/national-ranking-page");
}

// Sidebar menu: [{ id, label, slug, order, subItems: [{ label, slug }] }]
export async function getRankings() {
  return fetchAPI("/api/rankings");
}

// Full page: { seo, hero, collegeRanking, sdgInitiative, sdgGoal, sdgGoalMenu }
// `goal` is an SDG Goal slug under an SDG discipline (`category`)
export async function getRankingBySlug(slug, category, goal) {
  return fetchAPI(slugPath("/api/rankings", slug), { category, goal });
}

// ── International Rankings (QS, THE ...) - NIRF template only ────────────────
export async function getInternationalRankingPage() {
  return fetchAPI("/api/international-ranking-page");
}

// Sidebar menu: [{ id, label, slug, order, subItems: [] }]
export async function getInternationalRankings() {
  return fetchAPI("/api/international-rankings");
}

// Full page: { seo, hero, collegeRanking }
export async function getInternationalRankingBySlug(slug) {
  return fetchAPI(slugPath("/api/international-rankings", slug));
}

// ── SDG Goals (/SDG-initiative pages) ─────────────────────────────────────────
// Tiles + sidebar: [{ id, slug, title, heading, order, url, image }]
export async function getSdgGoals() {
  return fetchAPI("/api/sdg-goals");
}

// Detail page: tile fields + { seo, hero, description, metrics } (hero is null when not set)
export async function getSdgGoalBySlug(slug) {
  return fetchAPI(slugPath("/api/sdg-goals", slug));
}
