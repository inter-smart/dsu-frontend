import { fetchAPI } from "./strapi";

// ── Home Page ─────────────────────────────────────────────────────────────────
export async function getHomePage() {
  return fetchAPI("/api/home-page");
}

// ── Navigation ────────────────────────────────────────────────────────────────
export async function getNavigation() {
  return fetchAPI("/api/navigation", {});
}

// ── Contact Page ──────────────────────────────────────────────────────────────
export async function getContactPage() {
  return fetchAPI("/api/contact-page");
}

// ── NVIDIA / AI CoE Page ──────────────────────────────────────────────────────
export async function getNvidiaPage() {
  return fetchAPI("/api/nvidia-page");
}
