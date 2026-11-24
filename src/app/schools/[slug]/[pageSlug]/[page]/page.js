import { SchoolLibrarySubpage, schoolLibraryPageMetadata } from "@/components/sections/academics/school-library-page";

// A Library sub-page owned by a Flexible Page (template "library") of the school: /schools/[slug]/[flexible-page]/[sub-page]
export async function generateMetadata({ params }) {
    const { slug, pageSlug, page } = await params;
    return schoolLibraryPageMetadata(slug, page, pageSlug);
}

export default async function Page({ params }) {
    const { slug, pageSlug, page } = await params;
    return <SchoolLibrarySubpage slug={slug} pageSlug={page} flexSlug={pageSlug} />;
}
