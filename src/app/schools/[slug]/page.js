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
import { hasContent } from "@/lib/schools/tab-page";
import { getSchoolBySlug } from "@/lib/api";




export default async function Page({params}) {
    const { slug } = await params;
    const pageData = await getSchoolBySlug(slug);
    // hero/seo come from the school, the home sections from its Main Page tab (`home`)
    if (!pageData?.slug) notFound();
    const data = { ...pageData, ...pageData.home };

    return (
        <>
            <InnerHero data={{ ...data.hero, slug, hasDepartments: pageData?.hasDepartments, menuBar: true }} />
            <AcademicMenubar className="md:!hidden block" slug={slug} hasDepartments={pageData?.hasDepartments} />
            {hasContent(data.programOverviewSection) && <AcademicHomeOverview data={data.programOverviewSection} />}
            {hasContent(data.visionMissionSection) && (
                <div id="vision-mission" className="scroll-mt-[100px]">
                    <AcademicVisionMission data={data.visionMissionSection} />
                </div>
            )}
            {/* <DeanMessage data={data.messageFromDean} varient="home" />
            <AcademicWhychoose data={data.whyChooseThisSchool} />
            <AcademicProgram data={data.computerApplicationsPrograms} />
            <AcademicCollaboration data={data.industryCollaborationsSection} varient="home" />
            <AcademicPartners data={data.partnersSection} varient="home" />
            <AcademicInfrastructure data={data.modernSpacesSection} />
            <AcademicNews data={data.newsEvents} />
            <AcademicContact data={data.contact} /> */}
        </>
    )
}
