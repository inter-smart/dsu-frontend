import { notFound, permanentRedirect } from "next/navigation";
import { getDepartmentBySlug } from "@/lib/api";
import { departmentHref } from "@/lib/schools/items";

// Short department URLs (/departments/[department]) send visitors to the canonical
// /ai-enabled/[school]/[department], where the school comes from the department's CMS entry.
export default async function Page({ params }) {
    const { slug } = await params;
    const res = await getDepartmentBySlug(slug);
    if (!res?.slug || !res.school?.slug) notFound();
    permanentRedirect(departmentHref(res.school.slug, res.slug));
}
