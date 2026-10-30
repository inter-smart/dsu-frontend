const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

export const REVALIDATE = { next: { revalidate: 60 } };
export const REVALIDATE_LONG = { next: { revalidate: 300 } };
export const NO_STORE = { cache: "no-store" };


// True while an editor previews from the Strapi admin (Next.js Draft Mode).
// Outside a request (build time) there is no draft mode.
async function isPreview() {
  if (!process.env.PREVIEW_SECRET) return false;
  try {
    const { draftMode } = await import("next/headers");
    return (await draftMode()).isEnabled;
  } catch {
    return false;
  }
}

export async function fetchAPI(path, params = {}, options = NO_STORE) {
  try {
    const mergedOptions = {
      headers: { "Content-Type": "application/json" },
      ...options,
    };

    // Draft Mode: Strapi serves the draft versions to requests carrying the shared secret, never cached
    if (await isPreview()) {
      mergedOptions.headers = {
        ...mergedOptions.headers,
        "x-preview-secret": process.env.PREVIEW_SECRET,
      };
      mergedOptions.cache = "no-store";
      delete mergedOptions.next;
    }

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
