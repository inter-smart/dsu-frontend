const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

/**
 * Fetch data from Strapi v5 API.
 * Always returns null on any error or non-200 — never throws.
 *
 * @param {string} path      - e.g. '/api/about-page'
 * @param {object} params    - URL query params to append
 * @param {object} options   - fetch options (next, cache, headers …)
 */
export async function fetchAPI(path, params = {}, options = {}) {
  try {
    const mergedOptions = {
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 60 },
      ...options,
    };

    const queryString = new URLSearchParams(params).toString();
    const url = `${STRAPI_URL}${path}${queryString ? `?${queryString}` : ''}`;

    const response = await fetch(url, mergedOptions);

    // Silently swallow 204, 403, 404, 500, etc. — return null so pages fall back gracefully
    if (!response.ok || response.status === 204) return null;

    const text = await response.text();
    if (!text || text.trim() === '') return null;

    const json = JSON.parse(text);

    // If controller returned { error: "…" } treat it as no content
    if (json?.error) return null;

    return json;
  } catch {
    // Network down, Strapi offline, parse error — silently return null
    return null;
  }
}

/**
 * Prefix relative Strapi media URLs with the base URL.
 */
export function getStrapiMedia(media) {
  if (!media) return null;
  const url = typeof media === 'string' ? media : media?.url;
  if (!url || typeof url !== 'string') return null;
  return url.startsWith('/') ? `${STRAPI_URL}${url}` : url;
}
