import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import AcademicProgram from "@/components/sections/academics/academic-program";
import AcademicContact from "@/components/sections/academics/academic-contact";
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
            {hasContent(data.computerApplicationsPrograms) && <AcademicProgram data={data.computerApplicationsPrograms} />}
            {hasContent(data.contact) && <AcademicContact data={data.contact} schoolSlug={slug} />}
        </SchoolTabShell>
    );
}
