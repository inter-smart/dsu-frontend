import DepartmentPage, { departmentMetadata } from "@/components/sections/academics/department-page";

export async function generateMetadata({ params }) {
    const { slug, departmentSlug, tab } = await params;
    return departmentMetadata(slug, departmentSlug, tab);
}

export default async function Page({ params }) {
    const { slug, departmentSlug, tab } = await params;
    return <DepartmentPage schoolSlug={slug} departmentSlug={departmentSlug} tab={tab} />;
}
