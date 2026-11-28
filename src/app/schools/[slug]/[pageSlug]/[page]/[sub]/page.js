import DepartmentLibraryPage, { libraryPageMetadata } from "@/components/sections/academics/department-library-page";

// A Library sub-page owned by a Flexible Page (template "library") of the department:
// /schools/[school]/[department]/[flexible-page]/[sub-page]
export async function generateMetadata({ params }) {
    const { slug, pageSlug, page, sub } = await params;
    return libraryPageMetadata(slug, pageSlug, sub, page);
}

export default async function Page({ params }) {
    const { slug, pageSlug, page, sub } = await params;
    return <DepartmentLibraryPage schoolSlug={slug} departmentSlug={pageSlug} pageSlug={sub} flexSlug={page} />;
}
