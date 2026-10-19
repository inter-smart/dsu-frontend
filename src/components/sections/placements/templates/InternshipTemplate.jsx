import InnerHero from "@/components/layout/common/InnerHero";
import CorporateConnect from "@/components/sections/placements/corporate-connect";
import InternshipOpportunities from "@/components/sections/placements/Intership-Opertunities";
import InternshipPartners from "@/components/sections/placements/Placement-Partners";
import IndustryProjects from "@/components/sections/placements/IndustryProjects";
import StudentSuccessStories from "@/components/sections/placements/student-success-stories";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import { hasContent } from "@/lib/has-content";

// data: the page API response ({ hero, sidebar, internshipPage, ... })
export default function InternshipTemplate({ data }) {
    const internship = data?.internshipPage || {};

    const overview = internship.programOverviewSection;
    const opportunities = internship.intershipOpertunities;
    const partners = internship.internshipPartners;
    const projects = internship.industryProjects;
    const stories = internship.successStoriesSection;

    return (
        <>
            {hasContent(data?.hero) && <InnerHero data={data.hero} placementMenuItems={data?.sidebar} />}
            <PlacementmenuBar items={data?.sidebar} className="lg:!hidden block" />
            {hasContent(overview) && <CorporateConnect data={overview} />}
            {hasContent(opportunities) && <InternshipOpportunities data={opportunities} />}
            {hasContent(partners) && <InternshipPartners data={partners} />}
            {hasContent(projects) && <IndustryProjects data={projects} />}
            {hasContent(stories) && <StudentSuccessStories data={stories} />}
        </>
    );
}
