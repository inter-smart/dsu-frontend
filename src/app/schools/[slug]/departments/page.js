import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import AcademicProgram from "@/components/sections/academics/academic-program";
import { getSchoolDepartments } from "@/lib/api";
import { departmentItems } from "@/lib/schools/items";
import { loadSchoolTabData, schoolTabMetadata } from "@/lib/schools/tab-page";

const TAB = "departments";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return schoolTabMetadata(slug, TAB);
}

// Only schools with departments have this tab; loadSchoolTabData 404s for the others.
export default async function Page({ params }) {
    const { slug } = await params;
    const { data, hero, hasDepartments } = await loadSchoolTabData(slug, TAB);

    // The Department template wins when it links departments; otherwise the school's own departments.
    const tpl = data.departmentTemplate;
    const linked = departmentItems(slug, tpl?.departments ?? []);
    const fromTemplate = linked.length > 0;
    const items = fromTemplate ? linked : departmentItems(slug, await getSchoolDepartments(slug));

    const half = Math.ceil(items.length / 2);

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={hasDepartments}>
            {items.length > 0 && (
                <AcademicProgram
                    data={{
                        heading: (fromTemplate && tpl.title) || "Departments",
                        description: fromTemplate ? tpl.description : undefined,
                        // two untitled columns (no UG/PG-style badge or label), same layout as /schools/programs
                        categories: [items.slice(0, half), items.slice(half)]
                            .filter((col) => col.length)
                            .map((col) => ({ programs: col.map((i) => ({ title: i.title, url: i.href })) })),
                    }}
                />
            )}
        </SchoolTabShell>
    );
}
