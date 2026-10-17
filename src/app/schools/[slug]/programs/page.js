import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import AcademicProgram from "@/components/sections/academics/academic-program";
import { SchoolItemList } from "@/components/sections/academics/school-directory";
import { getSchoolDirectProgrammes } from "@/lib/api";
import { programmeItems } from "@/lib/schools/items";
import { hasContent, loadSchoolTabData, schoolTabMetadata } from "@/lib/schools/tab-page";

const TAB = "programs";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return schoolTabMetadata(slug, TAB);
}

export default async function Page({ params }) {
    const { slug } = await params;
    const { data, hero, hasDepartments, hasPrograms } = await loadSchoolTabData(slug, TAB);

    // Programmes owned directly by the school; the tab's curated list is the fallback.
    const direct = await getSchoolDirectProgrammes(slug);
    const items = direct.length
        ? programmeItems(slug, direct)
        : (data.programmes ?? []).map((p) => ({ ...p, href: p.slug ? `/schools/${slug}/programs/${p.slug}` : undefined }));

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={hasDepartments} hasPrograms={hasPrograms}>
            <SchoolItemList title="Programmes" items={items} groupByLevel />
            {!hasDepartments && hasContent(data.computerApplicationsPrograms) && <AcademicProgram data={data.computerApplicationsPrograms} />}
        </SchoolTabShell>
    );
}
