import { NextResponse } from "next/server";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const TTL = 30_000;
let cache = { at: 0, paths: [] };

// Paths of the pages whose "Page Layout" is "Flexible page" in the CMS.
// Cached briefly; preview (Draft Mode) requests always read the drafts.
async function getPaths(preview) {
  if (!preview && Date.now() - cache.at < TTL) return cache.paths;
  try {
    const res = await fetch(`${STRAPI_URL}/api/flexible-overrides`, {
      cache: "no-store",
      headers: preview && process.env.PREVIEW_SECRET ? { "x-preview-secret": process.env.PREVIEW_SECRET } : {},
    });
    const paths = res.ok ? await res.json() : [];
    if (!preview) cache = { at: Date.now(), paths };
    return paths;
  } catch {
    return preview ? [] : cache.paths;
  }
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
