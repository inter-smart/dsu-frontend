import DepartmentPage, { departmentMetadata } from "@/components/sections/academics/department-page";

export async function generateMetadata({ params }) {
    const { slug, departmentSlug } = await params;
    return departmentMetadata(slug, departmentSlug);
}

export default async function Page({ params }) {
    const { slug, departmentSlug } = await params;
    return <DepartmentPage schoolSlug={slug} departmentSlug={departmentSlug} />;
}
