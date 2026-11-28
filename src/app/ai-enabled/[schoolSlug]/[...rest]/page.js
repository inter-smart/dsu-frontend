import { permanentRedirect } from "next/navigation";

// Department and programme pages moved from /ai-enabled/[school]/... to /schools/[school]/...
// The static /ai-enabled pages (overview, library, BSC-nursing, ...) win over this route, so only old
// school-scoped addresses reach it.
export default async function Page({ params }) {
    const { schoolSlug, rest } = await params;
    permanentRedirect(`/schools/${[schoolSlug, ...rest].join("/")}`);
}
