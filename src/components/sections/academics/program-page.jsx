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

// One tab of a programme page; tabs are listed in PROGRAM_TABS (lib/schools/entity.js). Every tab stays
// listed and clickable; a tab with nothing to show renders just the hero and menu.
export default async function ProgramPage({ schoolSlug, programmeSlug, tab = "overview", departmentSlug }) {
    const { school, programme, hero, menuItems, menuHome } = await loadProgramPage(schoolSlug, programmeSlug, tab, departmentSlug);

    const facts = [
        programme.level && { label: "Level", value: programme.level },
        programme.duration && { label: "Duration", value: programme.duration },
    ].filter(Boolean);

    const curriculum = curriculumSection(programme);
    const admissions = programme.admissionsSection;
    const downloads = programme.downloadsSection;

    return (
        <SchoolTabShell hero={hero} slug={schoolSlug} hasDepartments={school.template === "department"} menuItems={menuItems} menuHome={menuHome}>
            {tab === "overview" && (
                <EntityHtmlSection eyebrow="Overview" heading={`About ${programme.title}`} html={htmlOrNull(programme.overview)} facts={facts} />
            )}
            {tab === "eligibility" && <EntityHtmlSection heading="Eligibility" html={htmlOrNull(programme.eligibility)} />}
            {tab === "curriculum" && programme.curriculum?.some((c) => c?.courses?.length) && <BscCurriculum data={curriculum} />}
            {tab === "peo" && programme.peoData?.peo?.items?.length > 0 && <PoPsoSection data={programme.peoData} />}
            {tab === "po-pso" && (programme.poPsoData?.po?.items?.length > 0 || programme.poPsoData?.pso?.items?.length > 0) && <PoPsoSection data={programme.poPsoData} />}
            {tab === "faculty" && programme.facultiesCollegeNursing?.facultiesSection?.categories?.length > 0 && <AiFaculty data={programme.facultiesCollegeNursing} />}
            {tab === "career-opportunities" && (
                <EntityHtmlSection heading="Career Opportunities" html={htmlOrNull(programme.careerOpportunities)} />
            )}
            {tab === "admissions" && (admissions?.files?.length > 0 || admissions?.description) && <BscDownloads data={{ heading: programme.admissionsSection?.heading, description: programme.admissionsSection?.description, files: programme.admissionsSection?.files ?? [] }} varient="Bsc-nursing" />}
            {tab === "downloads" && downloads?.files?.length > 0 && <BscDownloads data={{ heading: "Downloads", ...programme.downloadsSection }} />}
        </SchoolTabShell>
    );
}
