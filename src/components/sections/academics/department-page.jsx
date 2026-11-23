import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import AcademicProgram from "@/components/sections/academics/academic-program";
import AcademicOverview from "@/components/sections/academics/academic-overview";
import AiVisionMission from "@/components/sections/ai-enabled/Ai-vision-mission";
import AcademicContact from "@/components/sections/academics/academic-contact";
import AcademicAchievements from "@/components/sections/academics/academic-achievements";
import AcademicFacultyAchievements from "@/components/sections/academics/academic-faculty-achievements";
import AcademicCollaboration from "@/components/sections/academics/academic-collaboration";
import AcademicPartners from "@/components/sections/academics/academic-partners";
import AcademicPlacementReport from "@/components/sections/academics/academic-placement-report";
import DeanMessage from "@/components/sections/academics/dean-message";
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
import { librarySidebarItems } from "@/lib/schools/items";
import SectionBoundary from "@/components/flexible/SectionBoundary";
import { hasContent } from "@/lib/schools/tab-page";
import * as adapt from "@/lib/schools/department-adapters";

export async function departmentMetadata(schoolSlug, departmentSlug, tab = "overview") {
    const { school, department, label } = await loadDepartmentPage(schoolSlug, departmentSlug, tab);
    const base = department.seo?.metaTitle || department.name;
    // the API fills an unset Meta Title with the department name, so anything else was typed in Strapi: use it as is
    const custom = department.seo?.metaTitle && department.seo.metaTitle !== department.name;
    return {
        title: custom ? department.seo.metaTitle : `${tab === "overview" ? base : `${label} | ${base}`} | ${school.name}`,
        description: department.seo?.metaDescription ?? undefined,
        alternates: department.seo?.canonicalUrl ? { canonical: department.seo.canonicalUrl } : undefined,
    };
}

const B = SectionBoundary;

// Sections of one department tab, in the order of the static /ai-enabled page it replaces.
function Sections({ tab, data, schoolSlug, department }) {
    const show = hasContent;
    switch (tab) {
        case "overview": {
            return (
                <>
                    {show(data.programOverviewSection) && <B><AcademicOverview data={data.programOverviewSection} /></B>}
                    {show(data.missionVisionSection?.cards) && <B><AiVisionMission data={data.missionVisionSection} /></B>}
                    {show(data.departmentHighlightsSection?.items) && <B><AiHighlights data={data.departmentHighlightsSection} /></B>}
                    {show(data.contact) && <B><AcademicContact data={data.contact} schoolSlug={schoolSlug} /></B>}
                </>
            );
        }
        case "hod-message":
            return show(data.messageFromDean) && <B><DeanMessage data={data.messageFromDean} /></B>;
        case "programs": {
            const programs = departmentProgramsSection(schoolSlug, department, data.programmes, data.programsSection);
            return programs && <B><AcademicProgram data={programs} variant="aiprogram" /></B>;
        }
        case "faculty":
            return show(data.facultiesSection?.categories) && <B><AiFaculty data={{ facultiesSection: data.facultiesSection }} /></B>;
        case "laboratories": {
            const clinical = adapt.clinicalFacilitiesSection(data.facilitiesSection);
            return (
                <>
                    {show(data.labsIntroSection) && <B><AiLaboratory data={data.labsIntroSection} /></B>}
                    {show(data.specializedLabsSection) && <B><AiFacility data={data.specializedLabsSection} /></B>}
                    {show(clinical) && <B><AiClinicalFacility data={clinical} /></B>}
                </>
            );
        }
        case "industry-connect": {
            const recent = adapt.recentEngagementSection(data.recentEngagementSection);
            const partner = adapt.partnerWithUsSection(data.partnerWithUsSection);
            return (
                <>
                    {show(data.achievementSection) && <B><AcademicAchievements data={data.achievementSection} variant="Ai-achievements" /></B>}
                    {show(data.partnersSection) && <B><AcademicPartners data={data.partnersSection} varient="AiChapter" /></B>}
                    {show(data.keyCollaborationsSection) && <B><AiAcademicCollaboration data={data.keyCollaborationsSection} /></B>}
                    {show(data.industryEngagementSection) && <B><AiIndustryEngagement data={data.industryEngagementSection} /></B>}
                    {recent && <B><AiRecentClinic data={recent} /></B>}
                    {partner && <B><AiPartnerwithus data={partner} /></B>}
                </>
            );
        }
        case "library": {
            const library = adapt.librarySection(data.librarySection);
            return library && <B><LibraryOverview data={library} menu={librarySidebarItems(schoolSlug, department.slug, data.sidebar)} /></B>;
        }
        case "student-chapters": {
            const chapters = adapt.chaptersSection(data.chaptersSection);
            return (
                <>
                    {show(data.achievementSection) && <B><AcademicAchievements data={data.achievementSection} variant="AiChapter" /></B>}
                    {chapters && <B><AiAcademicChapters data={chapters} /></B>}
                </>
            );
        }
        case "placements":
            return (
                <>
                    {show(data.industryCollaborationsSection) && <B><AcademicCollaboration data={data.industryCollaborationsSection} /></B>}
                    {show(data.partnersSection) && <B><AcademicPartners data={data.partnersSection} /></B>}
                    {show(data.placementReportsSection) && <B><AcademicPlacementReport data={data.placementReportsSection} /></B>}
                </>
            );
        case "achievements":
            return (
                <>
                    {show(data.achievementSection) && <B><AcademicAchievements data={data.achievementSection} /></B>}
                    {show(data.facultyAchievementsSection) && <B><AcademicFacultyAchievements data={data.facultyAchievementsSection} /></B>}
                </>
            );
        case "news-events":
            return show(data.newsEvents) && <B><NewsEvents data={data.newsEvents} departmentSlug={department.slug} /></B>;
        case "contact":
            return show(data.contact) && <B><AcademicContact data={data.contact} schoolSlug={schoolSlug} /></B>;
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
