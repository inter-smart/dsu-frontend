import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import AcademicContact from "@/components/sections/academics/academic-contact";
import AcademicProgram from "@/components/sections/academics/academic-program";
import { getSchoolDirectProgrammes } from "@/lib/api";
import { programmeItems } from "@/lib/schools/items";
import { hasContent, loadSchoolTabData, schoolTabMetadata } from "@/lib/schools/tab-page";

const TAB = "programs";
const LEVEL_LABELS = { UG: "Undergraduate", PG: "Postgraduate" };

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return schoolTabMetadata(slug, TAB);
}

export default async function Page({ params }) {
    const { slug } = await params;
    const { data, hero, hasDepartments } = await loadSchoolTabData(slug, TAB);

    // The Programs template (CMS-defined groups) wins when filled; otherwise the school's own programmes by level.
    const tpl = data.programsTemplate;
    const toRows = (programmes, departmentSlug) =>
        programmeItems(slug, programmes, departmentSlug).map((i) => ({ title: i.title, url: i.href, academicLevel: i.academicLevel }));

    let categories = (tpl?.groups ?? [])
        .map((g) => ({
            id: g.id,
            badge: g.shortForm || (g.title ?? "").slice(0, 2).toUpperCase(),
            label: g.title,
            programs: (g.programmes ?? []).flatMap((p) => toRows([p], p.departmentSlug)),
        }))
        .filter((c) => c.programs.length);

    if (!categories.length) {
        const rows = toRows(await getSchoolDirectProgrammes(slug));
        const levels = [...new Set(rows.map((r) => r.academicLevel || "Other"))];
        categories = levels.map((level) => ({
            id: level,
            badge: level.slice(0, 2).toUpperCase(),
            label: LEVEL_LABELS[level] ?? level,
            programs: rows.filter((r) => (r.academicLevel || "Other") === level),
        }));
    }

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={hasDepartments}>
            {categories.length > 0 && (
                <AcademicProgram
                    data={{
                        heading: (tpl?.groups?.length && tpl.title) || "Programmes",
                        description: tpl?.description,
                        categories,
                    }}
                />
            )}
            {hasContent(data.contact) && <AcademicContact data={data.contact} schoolSlug={slug} />}
        </SchoolTabShell>
    );
}
