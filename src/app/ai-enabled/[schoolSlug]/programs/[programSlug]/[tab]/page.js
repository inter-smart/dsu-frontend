import ProgramPage, { programMetadata } from "@/components/sections/academics/program-page";
import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import { PROGRAM_TABS, loadProgramFlexPage } from "@/lib/schools/entity";

// a tab that is not one of the programme's own tabs is a Flexible Page created under the programme
const isOwnTab = (tab) => PROGRAM_TABS.some((t) => t.key === tab);

export async function generateMetadata({ params }) {
    const { schoolSlug, programSlug, tab } = await params;
    if (!isOwnTab(tab)) {
        const { page } = await loadProgramFlexPage(schoolSlug, programSlug, tab);
        return { title: page.seo?.metaTitle, description: page.seo?.metaDescription };
    }
    return programMetadata(schoolSlug, programSlug, tab);
}

export default async function Page({ params }) {
    const { schoolSlug, programSlug, tab } = await params;
    if (isOwnTab(tab)) return <ProgramPage schoolSlug={schoolSlug} programmeSlug={programSlug} tab={tab} />;

    const { school, page, hero, menuItems } = await loadProgramFlexPage(schoolSlug, programSlug, tab);
    const sidebar = page.sidebar || [];
    return (
        <SchoolTabShell hero={hero} slug={schoolSlug} hasDepartments={school.template === "department"} menuItems={menuItems} bscMenu>
            <FlexibleSections sections={page.sections} sidebar={sidebar} menu={sidebar} slug={page.slug} />
        </SchoolTabShell>
    );
}
