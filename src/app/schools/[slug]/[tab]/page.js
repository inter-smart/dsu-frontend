import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import AcademicOverview from "@/components/sections/academics/academic-overview";
import AcademicVisionMission from "@/components/sections/academics/academic-vision-mission";
import DeanMessage from "@/components/sections/academics/dean-message";
import WhyChoose from "@/components/sections/academics/why-choose";
import AcademicProgram from "@/components/sections/academics/academic-program";
import AcademicCollaboration from "@/components/sections/academics/academic-collaboration";
import AcademicPartners from "@/components/sections/academics/academic-partners";
import AcademicFacilities from "@/components/sections/academics/academic-facilities";
import AcademicContact from "@/components/sections/academics/academic-contact";
import NewsEvents from "@/components/sections/news-events/news-events";
import AcademicPlacementReport from "@/components/sections/academics/academic-placement-report";
import AcademicAchievements from "@/components/sections/academics/academic-achievements";
import AcademicFacultyAchievements from "@/components/sections/academics/academic-faculty-achievements";
import { SchoolDepartments } from "@/components/sections/academics/school-directory";
import { getSchoolBySlug } from "@/lib/api";
import { getSchoolTabs } from "@/lib/schools/tabs";

// tab key -> sections rendered for it (same components the old static pages used)
const TAB_SECTIONS = {
  overview: (d) => (
    <>
      <AcademicOverview data={d.programOverviewSection} />
      <AcademicContact data={d.overviewContact ?? d.contact} schoolSlug={d.slug} />
    </>
  ),
  "dean-message": (d) => <DeanMessage data={d.messageFromDean} />,
  "why-choose": (d) => <WhyChoose data={d.whyChooseThisSchool} />,
  programs: (d) => (
    <>
      <AcademicProgram data={d.computerApplicationsPrograms} />
      <AcademicContact data={d.contact} schoolSlug={d.slug} />
    </>
  ),
  departments: (d) => <SchoolDepartments slug={d.slug} departments={d.departments} />,
  "industry-collaborations": (d) => (
    <>
      <AcademicCollaboration data={d.industryCollaborationsSection} />
      <AcademicPartners data={d.partnersSection} />
    </>
  ),
  facilities: (d) => <AcademicFacilities data={d.modernSpacesSection} />,
  "placement-snapshot": (d) => (
    <>
      <AcademicCollaboration data={d.industryCollaborationsSection} />
      <AcademicPartners data={d.partnersSection} />
      <AcademicPlacementReport data={d.placementReportsSection} />
    </>
  ),
  achievements: (d) => (
    <>
      <AcademicAchievements data={d.achievementSection} />
      <AcademicFacultyAchievements
        data={{
          heading: "Faculty Achievements",
          tabToggle: {
            options: [
              { id: 1, label: "Faculty Achievements", isActive: true },
              { id: 2, label: "Student Achievements", isActive: false },
            ],
          },
          monthFilters: [],
          achievements: d.achievements,
        }}
      />
    </>
  ),
  "news-events": (d) => <NewsEvents data={d.newsEvents} />,
  contact: (d) => <AcademicContact data={d.contact} schoolSlug={d.slug} />,
};

async function loadSchool(slug) {
  const school = await getSchoolBySlug(slug);
  return school?.slug ? school : null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const school = await loadSchool(slug);
  return school?.seo ? { title: school.seo.metaTitle, description: school.seo.metaDescription } : {};
}

export default async function Page({ params }) {
  const { slug, tab } = await params;
  const school = await loadSchool(slug);
  if (!school) notFound();

  const tabs = getSchoolTabs(school.hasDepartments);
  const render = TAB_SECTIONS[tab];
  if (!render || !tabs.some((t) => t.key === tab && !t.anchor)) notFound();

  const hero = { ...school.hero, slug, hasDepartments: school.hasDepartments, menuBar: true };

  return (
    <>
      <InnerHero data={hero} />
      <AcademicMenubar
        className="md:!hidden block"
        slug={slug}
        hasDepartments={school.hasDepartments}
      />
      {render(school)}
    </>
  );
}
