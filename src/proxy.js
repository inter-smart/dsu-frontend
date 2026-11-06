import { NextResponse } from "next/server";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const TTL = 30_000; // how long the list counts as fresh
const TIMEOUT = 3_000; // never hold a page request longer than this on the CMS
let cache = { at: 0, paths: [], loaded: false };
let inFlight = null; // one shared refresh at a time, so requests never pile up on the CMS

async function fetchPaths(preview) {
  const res = await fetch(`${STRAPI_URL}/api/flexible-overrides`, {
    cache: "no-store",
    signal: AbortSignal.timeout(TIMEOUT),
    headers: preview && process.env.PREVIEW_SECRET ? { "x-preview-secret": process.env.PREVIEW_SECRET } : {},
  });
  if (!res.ok) throw new Error(`flexible-overrides ${res.status}`);
  return res.json();
}

function refresh() {
  if (!inFlight) {
    inFlight = fetchPaths(false)
      .then((paths) => {
        cache = { at: Date.now(), paths, loaded: true };
        return paths;
      })
      .catch(() => cache.paths) // keep the last known list if the CMS is slow or down
      .finally(() => {
        inFlight = null;
      });
  }
  return inFlight;
}

// Paths of the pages whose "Page Layout" is "Flexible page" in the CMS.
// Visitors are served from the cached list while it refreshes in the background (only the very
// first request waits). Preview (Draft Mode) requests always read the drafts.
async function getPaths(preview) {
  if (preview) {
    try {
      return await fetchPaths(true);
    } catch {
      return [];
    }
  }
  if (!cache.loaded) return refresh();
  if (Date.now() - cache.at >= TTL) refresh();
  return cache.paths;
}

export async function proxy(request) {
  const path = decodeURIComponent(request.nextUrl.pathname).replace(/\/+$/, "") || "/";
  const preview = request.cookies.has("__prerender_bypass");
  if (!(await getPaths(preview)).includes(path)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/custom-layout";
  url.search = `?path=${encodeURIComponent(path)}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!api|_next|uploads|preview-mode|custom-layout|favicon.ico|robots.txt|.*\\..*).*)"],
};
