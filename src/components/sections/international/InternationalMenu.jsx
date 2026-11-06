import { getInternationalPages } from "@/lib/api/international";
import InternationalMenubar from "./InternationalMenubar";

// Menu items for the International pages: one per International entry
export async function getInternationalMenuItems() {
    const entries = (await getInternationalPages()) || [];
    const mainSlug = entries.find((e) => e.template === "international-admission")?.slug;

    return entries
        .filter((e) => e.slug)
        .map((e) => ({
            label: e.title,
            href: e.slug === mainSlug ? "/international" : `/international/${e.slug}`,
        }));
}

// Server wrapper for pages that have no InnerHero to carry the menu (the International Admission template)
export default async function InternationalMenu() {
    return <InternationalMenubar items={await getInternationalMenuItems()} />;
}
