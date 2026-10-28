import { notFound } from "next/navigation";
import placementTemplates from "@/components/sections/placements/templates/registry";
import { getPlacementBySlug } from "@/lib/api/placement";

export const revalidate = 60;

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const page = await getPlacementBySlug(slug);

    return {
        title: page?.seo?.metaTitle || "Placement | Dayananda Sagar University",
        description: page?.seo?.metaDescription || undefined,
        alternates: page?.seo?.canonicalUrl ? { canonical: page.seo.canonicalUrl } : undefined,
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const page = await getPlacementBySlug(slug);

    // a missing entry, or one whose template is not in the registry, is a 404
    const Template = placementTemplates[page?.template];
    if (!Template) notFound();

    return <Template data={page} />;
}
