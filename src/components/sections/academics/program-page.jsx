import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import EntityHtmlSection from "@/components/sections/academics/entity-html-section";
import BscCurriculum from "@/components/sections/ai-enabled/BSC-nursing/curriculum";
import BscDownloads from "@/components/sections/ai-enabled/BSC-nursing/downloads";
import PoPsoSection from "@/components/sections/ai-enabled/BSC-nursing/po-pso";
import AiFaculty from "@/components/sections/ai-enabled/Ai-faculty";
import { curriculumSection, htmlOrNull, loadProgramPage } from "@/lib/schools/entity";

export async function programMetadata(schoolSlug, programmeSlug, tab = "overview", departmentSlug) {
    const { school, programme, label, canonical } = await loadProgramPage(schoolSlug, programmeSlug, tab, departmentSlug);
    const base = programme.seo?.metaTitle || programme.title;
    return {
        title: `${tab === "overview" ? base : `${label} | ${base}`} | ${school.name}`,
        description: programme.seo?.metaDescription ?? undefined,
        // one programme, two reachable URLs (school and department): search engines get the canonical one
        alternates: { canonical },
    };
}

// One tab of a programme page; tabs are listed in PROGRAM_TABS (lib/schools/entity.js). A tab with
// nothing to show is not listed and 404s (see loadProgramPage), so every branch has content.
export default async function ProgramPage({ schoolSlug, programmeSlug, tab = "overview", departmentSlug }) {
    const { school, programme, hero, menuItems, menuHome } = await loadProgramPage(schoolSlug, programmeSlug, tab, departmentSlug);

    const facts = [
        programme.level && { label: "Level", value: programme.level },
        programme.duration && { label: "Duration", value: programme.duration },
    ].filter(Boolean);

    return (
        <SchoolTabShell hero={hero} slug={schoolSlug} hasDepartments={school.hasDepartments} menuItems={menuItems} menuHome={menuHome}>
            {tab === "overview" && (
                <EntityHtmlSection eyebrow="Overview" heading={`About ${programme.title}`} html={htmlOrNull(programme.overview)} facts={facts} />
            )}
            {tab === "eligibility" && <EntityHtmlSection heading="Eligibility" html={htmlOrNull(programme.eligibility)} />}
            {tab === "curriculum" && <BscCurriculum data={curriculumSection(programme)} />}
            {tab === "peo" && <PoPsoSection data={programme.peoData} />}
            {tab === "po-pso" && <PoPsoSection data={programme.poPsoData} />}
            {tab === "faculty" && <AiFaculty data={programme.facultiesCollegeNursing} />}
            {tab === "career-opportunities" && (
                <EntityHtmlSection heading="Career Opportunities" html={htmlOrNull(programme.careerOpportunities)} />
            )}
            {tab === "admissions" && <BscDownloads data={{ heading: programme.admissionsSection?.heading, description: programme.admissionsSection?.description, files: programme.admissionsSection?.files ?? [] }} varient="Bsc-nursing" />}
            {tab === "downloads" && <BscDownloads data={{ heading: "Downloads", ...programme.downloadsSection }} />}
        </SchoolTabShell>
    );
}
