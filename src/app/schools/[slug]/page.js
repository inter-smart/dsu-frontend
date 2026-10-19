import InnerHero from "@/components/layout/common/InnerHero";
import AcademicCollaboration from "@/components/sections/academics/academic-collaboration";
import AcademicHomeOverview from "@/components/sections/academics/academic-home-overview";
import AcademicPartners from "@/components/sections/academics/academic-partners";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import AcademicVisionMission from "@/components/sections/academics/academic-vision-mission";
import DeanMessage from "@/components/sections/academics/dean-message";
import AcademicWhychoose from "@/components/sections/academics/academic-whychoose";
import AcademicProgram from "@/components/sections/academics/academic-program";
import AcademicContact from "@/components/sections/academics/academic-contact";
import AcademicNews from "@/components/sections/academics/academic-news";
import AcademicInfrastructure from "@/components/sections/academics/academic-infrastructure";
import { notFound } from "next/navigation";
import { hasContent, schoolHasPrograms } from "@/lib/schools/tab-page";
import { getSchoolBySlug } from "@/lib/api";

export default async function Page({ params }) {
  const { slug } = await params;
  const pageData = await getSchoolBySlug(slug);
  // hero/seo come from the school, the home sections from its Main Page tab (`home`)
  if (!pageData?.slug) notFound();
  const data = { ...pageData, ...pageData.home };
  const hasPrograms = await schoolHasPrograms(slug, pageData.hasDepartments);

  return (
    <>
      <InnerHero
        data={{
          ...data.hero,
          slug,
          hasDepartments: pageData?.hasDepartments,
          hasPrograms,
          menuBar: true,
        }}
      />
      <AcademicMenubar
        className="md:!hidden block"
        slug={slug}
        hasDepartments={pageData?.hasDepartments}
        hasPrograms={hasPrograms}
      />
      {hasContent(data.programOverviewSection) && (
        <AcademicHomeOverview data={data.programOverviewSection} />
      )}
      {hasContent(data.visionMissionSection) && (
        <div id="vision-mission" className="scroll-mt-[100px]">
          <AcademicVisionMission data={data.visionMissionSection} />
        </div>
      )}
      {hasContent(data.messageFromDean) && (
        <DeanMessage data={data.messageFromDean} varient="home" />
      )}
      {hasContent(data.whyChooseThisSchool) && (
        <AcademicWhychoose data={data.whyChooseThisSchool} />
      )}

      {hasContent(data.computerApplicationsPrograms) && (
        <AcademicProgram data={data.computerApplicationsPrograms} />
      )}

      {hasContent(data.businessManagementPrograms) && (
        <AcademicCollaboration
          data={data.industryCollaborationsSection}
          varient="home"
        />
      )}

      {hasContent(data.partnersSection) && (
        <AcademicPartners data={data.partnersSection} varient="home" />
      )}
      {hasContent(data.modernSpacesSection) && (
        <AcademicInfrastructure data={data.modernSpacesSection} />
      )}

      {hasContent(data.newsEvents) && <AcademicNews data={data.newsEvents} />}
      {hasContent(data.contact) && <AcademicContact data={data.contact} />}
    </>
  );
}
