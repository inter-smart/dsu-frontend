import { permanentRedirect } from "next/navigation";
import DepartmentPage, { departmentMetadata } from "@/components/sections/academics/department-page";
import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import { SchoolLibrarySubpage, schoolLibraryPageMetadata } from "@/components/sections/academics/school-library-page";
import { DEPARTMENT_TABS, loadDepartmentFlexPage } from "@/lib/schools/entity";
import { resolveSchoolChild } from "@/lib/schools/route";

// /schools/[school]/[x]/[y] is either
//   - a department tab (or a Flexible Page created under the department): x = department, y = tab / page slug, or
//   - a Library sub-page owned by a Flexible Page of the school: x = flexible page, y = sub-page.
const isOwnTab = (tab) => DEPARTMENT_TABS.some((t) => t.key === tab);

export async function generateMetadata({ params }) {
    const { slug, pageSlug, page } = await params;
    const target = await resolveSchoolChild(slug, pageSlug);
    if (target.kind === "department") {
        if (!isOwnTab(page)) {
            const { page: flex } = await loadDepartmentFlexPage(slug, pageSlug, page);
            return { title: flex.seo?.metaTitle, description: flex.seo?.metaDescription };
        }
        return departmentMetadata(slug, pageSlug, page);
    }
    if (target.kind === "other-school") return {};
    return schoolLibraryPageMetadata(slug, page, pageSlug);
}

export default async function Page({ params }) {
    const { slug, pageSlug, page } = await params;
    const target = await resolveSchoolChild(slug, pageSlug);
    if (target.kind === "other-school") permanentRedirect(`/schools/${target.schoolSlug}/${pageSlug}/${page}`);
    if (target.kind === "page") return <SchoolLibrarySubpage slug={slug} pageSlug={page} flexSlug={pageSlug} />;

    if (isOwnTab(page)) return <DepartmentPage schoolSlug={slug} departmentSlug={pageSlug} tab={page} />;

    const { school, page: flex, hero, menuItems, menuHome, libraryMenu } = await loadDepartmentFlexPage(slug, pageSlug, page);
    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={school.template === "department"} menuItems={menuItems} menuHome={menuHome} aiMenu>
            <FlexibleSections sections={flex.sections} sidebar={flex.sidebar || []} menu={libraryMenu} slug={flex.slug} />
        </SchoolTabShell>
    );
}
