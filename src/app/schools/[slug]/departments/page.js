import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import { SchoolItemList } from "@/components/sections/academics/school-directory";
import { hasContent, loadSchoolTabData, schoolTabMetadata } from "@/lib/schools/tab-page";

const TAB = "departments";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return schoolTabMetadata(slug, TAB);
}

// Only schools with departments have this tab; loadSchoolTabData 404s for the others.
export default async function Page({ params }) {
    const { slug } = await params;
    const { data, hero, hasDepartments } = await loadSchoolTabData(slug, TAB);

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={hasDepartments}>
            <SchoolItemList title="Departments" items={data.departments} />
        </SchoolTabShell>
    );
}
