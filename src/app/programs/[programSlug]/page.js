import { notFound, permanentRedirect } from "next/navigation";
import { getProgrammeTab } from "@/lib/api";
import { programmeBase } from "@/lib/schools/items";

// Short programme URLs (/programs/[programme]) send visitors to the canonical
// /ai-enabled/[school]/programs/[programme], where the school comes from the programme's CMS entry.
export default async function Page({ params }) {
    const { programSlug } = await params;
    const res = await getProgrammeTab(programSlug, "overview");
    if (!res?.slug || !res.school?.slug) notFound();
    permanentRedirect(programmeBase(res.school.slug, programSlug));
}
