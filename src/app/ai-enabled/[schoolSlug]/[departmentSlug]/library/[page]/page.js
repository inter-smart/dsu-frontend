import DepartmentLibraryPage, { libraryPageMetadata } from "@/components/sections/academics/department-library-page";

export async function generateMetadata({ params }) {
    const { schoolSlug, departmentSlug, page } = await params;
    return libraryPageMetadata(schoolSlug, departmentSlug, page);
}

export default async function Page({ params }) {
    const { schoolSlug, departmentSlug, page } = await params;
    return <DepartmentLibraryPage schoolSlug={schoolSlug} departmentSlug={departmentSlug} pageSlug={page} />;
}
