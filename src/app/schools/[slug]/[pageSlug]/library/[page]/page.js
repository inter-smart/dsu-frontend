import DepartmentLibraryPage, { libraryPageMetadata } from "@/components/sections/academics/department-library-page";

// /schools/[school]/[department]/library/[sub-page]
export async function generateMetadata({ params }) {
    const { slug, pageSlug, page } = await params;
    return libraryPageMetadata(slug, pageSlug, page);
}

export default async function Page({ params }) {
    const { slug, pageSlug, page } = await params;
    return <DepartmentLibraryPage schoolSlug={slug} departmentSlug={pageSlug} pageSlug={page} />;
}
