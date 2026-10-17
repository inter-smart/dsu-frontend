import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import { SchoolItemList } from "@/components/sections/academics/school-directory";
import { getSchoolDepartments } from "@/lib/api";
import { departmentHref, departmentItems } from "@/lib/schools/items";
import { loadSchoolTabData, schoolTabMetadata } from "@/lib/schools/tab-page";

const TAB = "departments";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return schoolTabMetadata(slug, TAB);
}

// Only schools with departments have this tab; loadSchoolTabData 404s for the others.
export default async function Page({ params }) {
    const { slug } = await params;
    const { data, hero, hasDepartments, hasPrograms } = await loadSchoolTabData(slug, TAB);

    // Real departments of the school (with their programmes); the tab's curated list is the fallback.
    const departments = await getSchoolDepartments(slug);
    const items = departments.length
        ? departmentItems(slug, departments)
        : (data.departments ?? []).map((d) => ({ ...d, href: d.slug ? departmentHref(slug, d.slug) : undefined }));

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={hasDepartments} hasPrograms={hasPrograms}>
            <SchoolItemList title="Departments" items={items} />
        </SchoolTabShell>
    );
}
