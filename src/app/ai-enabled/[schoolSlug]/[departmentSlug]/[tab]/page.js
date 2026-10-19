import DepartmentPage, { departmentMetadata } from "@/components/sections/academics/department-page";

export async function generateMetadata({ params }) {
    const { schoolSlug, departmentSlug, tab } = await params;
    return departmentMetadata(schoolSlug, departmentSlug, tab);
}

export default async function Page({ params }) {
    const { schoolSlug, departmentSlug, tab } = await params;
    return <DepartmentPage schoolSlug={schoolSlug} departmentSlug={departmentSlug} tab={tab} />;
}
