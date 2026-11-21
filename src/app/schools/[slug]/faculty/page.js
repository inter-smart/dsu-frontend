import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import AiFaculty from "@/components/sections/ai-enabled/Ai-faculty";
import { hasContent, loadSchoolTabData, schoolTabMetadata } from "@/lib/schools/tab-page";

const TAB = "faculty";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return schoolTabMetadata(slug, TAB);
}

// Same layout as a department's Faculty tab; the members are the faculty of the school's departments.
export default async function Page({ params }) {
    const { slug } = await params;
    const { data, hero, hasDepartments } = await loadSchoolTabData(slug, TAB);

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={hasDepartments}>
            {hasContent(data.facultiesSection?.categories) && <AiFaculty data={{ facultiesSection: data.facultiesSection }} />}
        </SchoolTabShell>
    );
}
