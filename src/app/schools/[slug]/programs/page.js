import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import AcademicProgram from "@/components/sections/academics/academic-program";
import { SchoolItemList } from "@/components/sections/academics/school-directory";
import { hasContent, loadSchoolTabData, schoolTabMetadata } from "@/lib/schools/tab-page";

const TAB = "programs";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return schoolTabMetadata(slug, TAB);
}

export default async function Page({ params }) {
    const { slug } = await params;
    const { data, hero, hasDepartments } = await loadSchoolTabData(slug, TAB);

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={hasDepartments}>
            <SchoolItemList title="Programmes" items={data.programmes} groupByLevel />
            {!hasDepartments && hasContent(data.computerApplicationsPrograms) && <AcademicProgram data={data.computerApplicationsPrograms} />}
        </SchoolTabShell>
    );
}
