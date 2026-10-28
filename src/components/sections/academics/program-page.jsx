import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import AcademicContact from "@/components/sections/academics/academic-contact";
import BscOverview from "@/components/sections/ai-enabled/BSC-nursing/overview";
import Aieligibility from "@/components/sections/ai-enabled/BSC-nursing/eligibility";
import BscCurriculum from "@/components/sections/ai-enabled/BSC-nursing/curriculum";
import PoPsoSection from "@/components/sections/ai-enabled/BSC-nursing/po-pso";
import CareerSection from "@/components/sections/ai-enabled/BSC-nursing/career";
import BscDownloads from "@/components/sections/ai-enabled/BSC-nursing/downloads";
import AiFaculty from "@/components/sections/ai-enabled/Ai-faculty";
import { permanentRedirect } from "next/navigation";
import { loadProgramPage } from "@/lib/schools/entity";
import { hasContent } from "@/lib/has-content";

export async function programMetadata(schoolSlug, programmeSlug, tab = "overview", departmentSlug) {
    const { programme, canonical } = await loadProgramPage(schoolSlug, programmeSlug, tab, departmentSlug);
    // the API gives every tab its own SEO (the tab entry's, else generated from the programme and tab names)
    const { metaTitle, metaDescription, canonicalUrl } = programme.seo ?? {};
    const title = metaTitle || programme.title;
    return {
        title,
        description: metaDescription ?? undefined,
        alternates: { canonical: canonicalUrl || canonical },
        openGraph: { title, description: metaDescription ?? undefined },
    };
}

// The old programme URLs (/schools/[school]/programs/... and /ai-enabled/[school]/[department]/programs/...)
// send visitors to the canonical /ai-enabled/[school]/programs/[programme]/[tab].
export async function redirectToProgramPage(schoolSlug, programmeSlug, tab = "overview", departmentSlug) {
    const { canonical } = await loadProgramPage(schoolSlug, programmeSlug, tab, departmentSlug);
    permanentRedirect(canonical);
}

// One tab of a programme page; tabs are listed in PROGRAM_TABS (lib/schools/entity.js). The API returns each tab
// in the shape of the matching ai-enabled/BSC-nursing `local_data` key, so the BSC-nursing section components
// render it as is. Every tab stays listed and clickable; a tab with nothing to show renders just the hero and menu.
export default async function ProgramPage({ schoolSlug, programmeSlug, tab = "overview", departmentSlug }) {
    const { school, data, hero, menuItems } = await loadProgramPage(schoolSlug, programmeSlug, tab, departmentSlug);

    const contact = hasContent(data.contact) ? <AcademicContact data={data.contact} schoolSlug={schoolSlug} /> : null;
    // an outcome group shows when it has outcomes or a PDF / link
    const outcomes = (group) => group?.items?.length > 0 || Boolean(group?.button?.href);

    return (
        <SchoolTabShell hero={hero} slug={schoolSlug} hasDepartments={school.template === "department"} menuItems={menuItems} bscMenu>
            {tab === "overview" && (
                <>
                    {hasContent(data.OverviewSection) && <BscOverview data={data.OverviewSection} />}
                    {contact}
                </>
            )}
            {tab === "eligibility" && (
                <>
                    {hasContent(data.eligibility) && <Aieligibility data={data.eligibility} />}
                    {contact}
                </>
            )}
            {tab === "curriculum" && data.curriculumData?.semesters?.length > 0 && <BscCurriculum data={data.curriculumData} />}
            {tab === "peo" && outcomes(data.peoData?.peo) && <PoPsoSection data={data.peoData} />}
            {tab === "po-pso" && (outcomes(data.poPsoData?.po) || outcomes(data.poPsoData?.pso)) && <PoPsoSection data={data.poPsoData} />}
            {tab === "faculty" && data.facultiesCollegeNursing?.facultiesSection?.categories?.length > 0 && <AiFaculty data={data.facultiesCollegeNursing} />}
            {tab === "career-opportunities" && hasContent(data.career) && <CareerSection data={data.career} />}
            {tab === "admissions" && data.downloadsSection?.files?.length > 0 && <BscDownloads data={data.downloadsSection} varient="Bsc-nursing" />}
            {tab === "downloads" && data.downloadsSection?.files?.length > 0 && <BscDownloads data={data.downloadsSection} />}
        </SchoolTabShell>
    );
}
