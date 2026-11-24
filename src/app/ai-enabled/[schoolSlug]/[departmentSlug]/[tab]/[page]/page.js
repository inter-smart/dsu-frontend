import DepartmentLibraryPage, { libraryPageMetadata } from "@/components/sections/academics/department-library-page";

// A Library sub-page owned by a Flexible Page (template "library") of the department:
// /ai-enabled/[school]/[department]/[flexible-page]/[sub-page]
export async function generateMetadata({ params }) {
    const { schoolSlug, departmentSlug, tab, page } = await params;
    return libraryPageMetadata(schoolSlug, departmentSlug, page, tab);
}

export default async function Page({ params }) {
    const { schoolSlug, departmentSlug, tab, page } = await params;
    return <DepartmentLibraryPage schoolSlug={schoolSlug} departmentSlug={departmentSlug} pageSlug={page} flexSlug={tab} />;
}
