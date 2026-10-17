import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import AcademicCollaboration from "@/components/sections/academics/academic-collaboration";
import AcademicPartners from "@/components/sections/academics/academic-partners";
import AcademicPlacementReport from "@/components/sections/academics/academic-placement-report";
import { hasContent, loadSchoolTabData, schoolTabMetadata } from "@/lib/schools/tab-page";

const TAB = "placement-snapshot";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return schoolTabMetadata(slug, TAB);
}

export default async function Page({ params }) {
    const { slug } = await params;
    const { data, hero, hasDepartments } = await loadSchoolTabData(slug, TAB);

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={hasDepartments}>
            {hasContent(data.industryCollaborationsSection) && <AcademicCollaboration data={data.industryCollaborationsSection} />}
            {hasContent(data.partnersSection) && <AcademicPartners data={data.partnersSection} />}
            {hasContent(data.placementReportsSection) && <AcademicPlacementReport data={data.placementReportsSection} />}
        </SchoolTabShell>
    );
}
