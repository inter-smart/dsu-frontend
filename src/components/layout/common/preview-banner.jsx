import { draftMode } from "next/headers";

// Shown only while Draft Mode is on (opened from the Strapi admin Preview button)
export default async function PreviewBanner() {
  const { isEnabled } = await draftMode();
  if (!isEnabled) return null;

  return (
    <aside
      role="status"
      className="fixed bottom-4 left-4 z-[9999] flex items-center gap-3 rounded-md bg-black px-4 py-2 text-sm text-white shadow-lg"
    >
      <span>Preview mode: showing draft content</span>
      <form action="/api/preview/exit" method="POST">
        <button type="submit" className="rounded bg-white px-2 py-1 font-medium text-black">
          Exit preview
        </button>
      </form>
    </aside>
  );
}
