import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import AcademicProgram from "@/components/sections/academics/academic-program";
import AcademicOverview from "@/components/sections/academics/academic-overview";
import AcademicVisionMission from "@/components/sections/academics/academic-vision-mission";
import AcademicContact from "@/components/sections/academics/academic-contact";
import AcademicAchievements from "@/components/sections/academics/academic-achievements";
import AcademicFacultyAchievements from "@/components/sections/academics/academic-faculty-achievements";
import AcademicCollaboration from "@/components/sections/academics/academic-collaboration";
import AcademicPartners from "@/components/sections/academics/academic-partners";
import AcademicPlacementReport from "@/components/sections/academics/academic-placement-report";
import DeanMessage from "@/components/sections/academics/dean-message";
import DepartmentResearchAreas from "@/components/sections/academics/department-research-areas";
import NewsEvents from "@/components/sections/news-events/news-events";
import AiHighlights from "@/components/sections/ai-enabled/Ai-highlights";
import AiFaculty from "@/components/sections/ai-enabled/Ai-faculty";
import AiLaboratory from "@/components/sections/ai-enabled/Ai-laboratory";
import AiFacility from "@/components/sections/ai-enabled/Ai-facility";
import AiClinicalFacility from "@/components/sections/ai-enabled/Ai-clinical-facility";
import AiAcademicCollaboration from "@/components/sections/ai-enabled/Ai-academic-collaboration";
import AiIndustryEngagement from "@/components/sections/ai-enabled/Ai-industry-enagement";
import AiRecentClinic from "@/components/sections/ai-enabled/Ai-recent-clinic";
import AiPartnerwithus from "@/components/sections/ai-enabled/Ai-partnerwithus";
import AiAcademicChapters from "@/components/sections/ai-enabled/Ai-academicChapters";
import LibraryOverview from "@/components/sections/ai-enabled/library/library-overview";
import { departmentProgramsSection, loadDepartmentPage } from "@/lib/schools/entity";
import { hasContent } from "@/lib/schools/tab-page";
import * as adapt from "@/lib/schools/department-adapters";

export async function departmentMetadata(schoolSlug, departmentSlug, tab = "overview") {
    const { school, department, label } = await loadDepartmentPage(schoolSlug, departmentSlug, tab);
    const base = department.seo?.metaTitle || department.name;
    return {
        title: `${tab === "overview" ? base : `${label} | ${base}`} | ${school.name}`,
        description: department.seo?.metaDescription ?? undefined,
    };
}

// Sections of one department tab, in the order of the static /ai-enabled page it replaces.
function Sections({ tab, data, schoolSlug, department }) {
    const show = hasContent;
    switch (tab) {
        case "overview": {
            const highlights = adapt.highlightsSection(data.highlightsSection);
            return (
                <>
                    {show(data.programOverviewSection) && <AcademicOverview data={data.programOverviewSection} />}
                    {show(data.visionMissionSection) && <AcademicVisionMission data={data.visionMissionSection} />}
                    {highlights && <AiHighlights data={highlights} />}
                    {show(data.contact) && <AcademicContact data={data.contact} schoolSlug={schoolSlug} />}
                </>
            );
        }
        case "hod-message":
            return show(data.messageFromDean) && <DeanMessage data={data.messageFromDean} />;
        case "programs": {
            const programs = departmentProgramsSection(schoolSlug, department, data.programmes);
            return programs && <AcademicProgram data={programs} variant="aiprogram" />;
        }
        case "faculty":
            return show(data.facultiesSection?.categories) && <AiFaculty data={{ facultiesSection: data.facultiesSection }} />;
        case "laboratories": {
            const clinical = adapt.clinicalFacilitiesSection(data.facilitiesSection);
            return (
                <>
                    {show(data.labsIntroSection) && <AiLaboratory data={data.labsIntroSection} />}
                    {show(data.specializedLabsSection) && <AiFacility data={data.specializedLabsSection} />}
                    {show(clinical) && <AiClinicalFacility data={clinical} />}
                </>
            );
        }
        case "research-areas":
            return show(data.researchAreasSection) && <DepartmentResearchAreas data={data.researchAreasSection} />;
        case "industry-connect": {
            const recent = adapt.recentEngagementSection(data.recentEngagementSection);
            const partner = adapt.partnerWithUsSection(data.partnerWithUsSection);
            return (
                <>
                    {show(data.achievementSection) && <AcademicAchievements data={data.achievementSection} variant="AiChapter" />}
                    {show(data.partnersSection) && <AcademicPartners data={data.partnersSection} varient="AiChapter" />}
                    {show(data.keyCollaborationsSection) && <AiAcademicCollaboration data={data.keyCollaborationsSection} />}
                    {show(data.industryEngagementSection) && <AiIndustryEngagement data={data.industryEngagementSection} />}
                    {recent && <AiRecentClinic data={recent} />}
                    {partner && <AiPartnerwithus data={partner} />}
                </>
            );
        }
        case "library": {
            const library = adapt.librarySection(data.librarySection);
            return library && <LibraryOverview data={library} />;
        }
        case "student-chapters": {
            const chapters = adapt.chaptersSection(data.chaptersSection);
            return (
                <>
                    {show(data.achievementSection) && <AcademicAchievements data={data.achievementSection} variant="AiChapter" />}
                    {chapters && <AiAcademicChapters data={chapters} />}
                </>
            );
        }
        case "placements":
            return (
                <>
                    {show(data.industryCollaborationsSection) && <AcademicCollaboration data={data.industryCollaborationsSection} />}
                    {show(data.partnersSection) && <AcademicPartners data={data.partnersSection} />}
                    {show(data.placementReportsSection) && <AcademicPlacementReport data={data.placementReportsSection} />}
                </>
            );
        case "achievements":
            return (
                <>
                    {show(data.achievementSection) && <AcademicAchievements data={data.achievementSection} />}
                    {show(data.facultyAchievementsSection) && <AcademicFacultyAchievements data={data.facultyAchievementsSection} />}
                </>
            );
        case "news-events":
            return show(data.newsEvents) && <NewsEvents data={data.newsEvents} departmentSlug={department.slug} />;
        case "contact":
            return show(data.contact) && <AcademicContact data={data.contact} schoolSlug={schoolSlug} />;
        default:
            return null;
    }
}

// One tab of a department page; tabs are listed in DEPARTMENT_TABS (lib/schools/entity.js).
export default async function DepartmentPage({ schoolSlug, departmentSlug, tab = "overview" }) {
    const { school, department, data, hero, menuItems, menuHome } = await loadDepartmentPage(schoolSlug, departmentSlug, tab);

    return (
        <SchoolTabShell hero={hero} slug={schoolSlug} hasDepartments={school.template === "department"} menuItems={menuItems} menuHome={menuHome} aiMenu>
            <Sections tab={tab} data={data} schoolSlug={schoolSlug} department={department} />
        </SchoolTabShell>
    );
}
