import { notFound } from "next/navigation";
import { getSchoolTab } from "@/lib/api";
import { getSchoolTabs } from "@/lib/schools/tabs";

const isEmpty = (v) =>
    v === null || v === undefined || v === "" || (Array.isArray(v) && v.length === 0);

const isPlainObject = (v) => v && typeof v === "object" && !Array.isArray(v);

// Field-by-field merge: a CMS value wins unless it is null/empty, then `fallback` is kept.
export function mergeSection(cms, fallback) {
    if (!isPlainObject(fallback)) return isEmpty(cms) ? fallback : cms;
    const merged = { ...fallback };
    if (!isPlainObject(cms)) return merged;
    Object.keys(fallback).forEach((key) => {
        if (!isEmpty(cms[key])) merged[key] = cms[key];
    });
    return merged;
}

// Loads one school tab (404s for a missing school or a tab this school type does not have)
// and merges every section over the page's `local_data` fallback.
export async function loadSchoolTabData(slug, tab, local_data) {
    const school = await getSchoolTab(slug, tab);
    if (!school?.slug) notFound();

    const entry = getSchoolTabs(school.hasDepartments).find((t) => t.key === tab && !t.anchor);
    if (!entry) notFound();

    const cms = school.tab ?? {};
    const data = {};
    Object.keys(local_data).forEach((key) => {
        data[key] = mergeSection(cms[key], local_data[key]);
    });
    // sections that only exist in the CMS response (e.g. departments)
    Object.keys(cms).forEach((key) => {
        if (!(key in data)) data[key] = cms[key];
    });

    const hero = mergeSection(school.hero, local_data.hero ?? {});
    const cmsCrumbs = school.hero?.breadcrumb;
    if (cmsCrumbs?.length) {
        const href = `/schools/${slug}/${tab}`;
        hero.breadcrumb = cmsCrumbs.some((b) => b.label === entry.label)
            ? cmsCrumbs
            : [...cmsCrumbs, { label: entry.label, href }];
    }

    return { data, hero, slug, hasDepartments: Boolean(school.hasDepartments), label: entry.label, school };
}

export async function schoolTabMetadata(slug, tab) {
    const school = await getSchoolTab(slug, tab);
    if (!school?.slug) return {};
    const label = getSchoolTabs(school.hasDepartments).find((t) => t.key === tab)?.label;
    const base = school.seo?.metaTitle || school.name;
    return {
        title: label ? `${label} | ${base}` : base,
        description: school.seo?.metaDescription ?? undefined,
    };
}
