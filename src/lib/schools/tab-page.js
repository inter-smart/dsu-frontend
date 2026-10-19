import { notFound } from "next/navigation";
import { getSchoolTab } from "@/lib/api";
import { getSchoolTabs } from "@/lib/schools/tabs";

// True when a CMS section has something to show (not null/empty, and not an object of only empty values).
export function hasContent(v) {
    if (v === null || v === undefined || v === "") return false;
    if (Array.isArray(v)) return v.some(hasContent);
    if (typeof v === "object") return Object.values(v).some(hasContent);
    return true;
}

// True when the school's Programs tab uses the Department template (Departments tab instead of Programs).
export const usesDepartments = (school) => school?.template === "department";

// Loads one school tab (404s for a missing school or a tab this school type does not have).
// Returns the CMS data as-is; sections the CMS leaves empty are simply not rendered.
export async function loadSchoolTabData(slug, tab) {
    const school = await getSchoolTab(slug, tab);
    if (!school?.slug) notFound();

    const hasDepartments = usesDepartments(school);
    const entry = getSchoolTabs(hasDepartments).find((t) => t.key === tab && !t.anchor);
    if (!entry) notFound();

    const data = school.tab ?? {};

    const hero = { ...(school.hero ?? {}) };
    const cmsCrumbs = school.hero?.breadcrumb;
    if (cmsCrumbs?.length) {
        const href = `/schools/${slug}/${tab}`;
        hero.breadcrumb = cmsCrumbs.some((b) => b.label === entry.label)
            ? cmsCrumbs
            : [...cmsCrumbs, { label: entry.label, href }];
    }

    return { data, hero, slug, hasDepartments, label: entry.label, school };
}

export async function schoolTabMetadata(slug, tab) {
    const school = await getSchoolTab(slug, tab);
    if (!school?.slug) return {};
    const label = getSchoolTabs(usesDepartments(school)).find((t) => t.key === tab)?.label;
    const base = school.seo?.metaTitle || school.name;
    return {
        title: label ? `${label} | ${base}` : base,
        description: school.seo?.metaDescription ?? undefined,
        alternates: school.seo?.canonicalUrl ? { canonical: school.seo.canonicalUrl } : undefined,
    };
}
