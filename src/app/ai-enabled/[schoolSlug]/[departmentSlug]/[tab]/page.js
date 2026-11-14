import DepartmentPage, { departmentMetadata } from "@/components/sections/academics/department-page";
import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import { DEPARTMENT_TABS, loadDepartmentFlexPage } from "@/lib/schools/entity";

// a tab that is not one of the department's own tabs is a Flexible Page created under the department
const isOwnTab = (tab) => DEPARTMENT_TABS.some((t) => t.key === tab);

export async function generateMetadata({ params }) {
    const { schoolSlug, departmentSlug, tab } = await params;
    if (!isOwnTab(tab)) {
        const { page } = await loadDepartmentFlexPage(schoolSlug, departmentSlug, tab);
        return { title: page.seo?.metaTitle, description: page.seo?.metaDescription };
    }
    return departmentMetadata(schoolSlug, departmentSlug, tab);
}

export default async function Page({ params }) {
    const { schoolSlug, departmentSlug, tab } = await params;
    if (isOwnTab(tab)) return <DepartmentPage schoolSlug={schoolSlug} departmentSlug={departmentSlug} tab={tab} />;

    const { school, page, hero, menuItems, menuHome } = await loadDepartmentFlexPage(schoolSlug, departmentSlug, tab);
    const sidebar = page.sidebar || [];
    return (
        <SchoolTabShell hero={hero} slug={schoolSlug} hasDepartments={school.template === "department"} menuItems={menuItems} menuHome={menuHome} aiMenu>
            <FlexibleSections sections={page.sections} sidebar={sidebar} menu={sidebar} slug={page.slug} />
        </SchoolTabShell>
    );
}
