import { cache } from "react";
import { getDepartmentBySlug } from "@/lib/api";

// /schools/[school]/[child] is either a department of that school or one of the school's own Flexible Pages.
// Resolves which one (departments win; their slugs are unique). Returns the department's school slug when the
// child is a department of a different school, so the caller can send the visitor to the right address.
export const resolveSchoolChild = cache(async (schoolSlug, child) => {
    const dept = await getDepartmentBySlug(child).catch(() => null);
    if (!dept?.slug || !dept.school?.slug) return { kind: "page" };
    if (dept.school.slug !== schoolSlug) return { kind: "other-school", schoolSlug: dept.school.slug };
    return { kind: "department" };
});
