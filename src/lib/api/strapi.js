const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export const REVALIDATE = { next: { revalidate: 60 } };
export const REVALIDATE_LONG = { next: { revalidate: 300 } };
export const NO_STORE = { cache: "no-store" };


export async function fetchAPI(path, params = {}, options = REVALIDATE) {
  try {
    const mergedOptions = {
      headers: { "Content-Type": "application/json" },
      ...options,
    };

    const query = Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null && value !== "",
    );
    const queryString = new URLSearchParams(query).toString();
    const url = `${STRAPI_URL}${path}${queryString ? `?${queryString}` : ""}`;

    const response = await fetch(url, mergedOptions);

    if (!response.ok || response.status === 204) return null;

    const text = await response.text();
    if (!text || text.trim() === "") return null;

    const json = JSON.parse(text);

    if (json?.error) return null;

    return json;
  } catch {
    return null;
  }
}

export function slugPath(base, slug) {
  return `${base}/${encodeURIComponent(slug)}`;
}

export function getStrapiMedia(media) {
  if (!media) return null;
  const url = typeof media === "string" ? media : media?.url;
  if (!url || typeof url !== "string") return null;
  return url.startsWith("/") ? `${STRAPI_URL}${url}` : url;
}
