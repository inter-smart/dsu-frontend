import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

// Opened by the Strapi admin "Preview" button: /api/preview?secret=..&path=/page&status=draft|published
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const path = searchParams.get("path");
  const status = searchParams.get("status");

  if (!process.env.PREVIEW_SECRET || secret !== process.env.PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }
  // only paths of this site (no //host or absolute URLs)
  if (!path || !path.startsWith("/") || path.startsWith("//")) {
    return new Response("Invalid path", { status: 400 });
  }

  const draft = await draftMode();
  if (status === "published") draft.disable();
  else draft.enable();

  redirect(path);
}
