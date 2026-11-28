// Health check for the load balancer: Nginx proxies /healthz here, so HAProxy only marks this
// server healthy while Next.js is actually running. Kept free of CMS calls so a slow Strapi
// never takes the frontend out of rotation. (src/proxy.js skips /api, so it doesn't run here.)
export const dynamic = "force-dynamic";

export function GET() {
  return new Response("ok", {
    status: 200,
    headers: { "Content-Type": "text/plain", "Cache-Control": "no-store" },
  });
}
