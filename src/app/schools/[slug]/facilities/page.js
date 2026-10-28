import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import AcademicFacilities from "@/components/sections/academics/academic-facilities";
import { hasContent, loadSchoolTabData, schoolTabMetadata } from "@/lib/schools/tab-page";

const TAB = "facilities";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return schoolTabMetadata(slug, TAB);
}

export default async function Page({ params }) {
    const { slug } = await params;
    const { data, hero, hasDepartments } = await loadSchoolTabData(slug, TAB);

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={hasDepartments}>
            {hasContent(data.modernSpacesSection) && <AcademicFacilities data={data.modernSpacesSection} />}
        </SchoolTabShell>
    );
}
