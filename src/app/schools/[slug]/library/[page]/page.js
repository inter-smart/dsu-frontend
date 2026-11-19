import { SchoolLibrarySubpage, schoolLibraryPageMetadata } from "@/components/sections/academics/school-library-page";

export async function generateMetadata({ params }) {
    const { slug, page } = await params;
    return schoolLibraryPageMetadata(slug, page);
}

export default async function Page({ params }) {
    const { slug, page } = await params;
    return <SchoolLibrarySubpage slug={slug} pageSlug={page} />;
}
