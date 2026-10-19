import InnerHero from "@/components/layout/common/InnerHero";
import CorporateConnect from "@/components/sections/placements/corporate-connect";
import PlacementProcess from "@/components/sections/placements/placement-process";
import CampusFacility from "@/components/sections/placements/campus-facility";
import PlacementDocuments from "@/components/sections/placements/PlacementDocuments";
import PlacementTeam from "@/components/sections/placements/placement-team";
import RecruiteDsu from "@/components/sections/placements/recruteDsu";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import { hasContent } from "@/lib/has-content";

// data: the page API response ({ hero, sidebar, recruitPage, ... })
export default function RecruitTemplate({ data }) {
    const recruit = data?.recruitPage || {};

    const overview = recruit.programOverviewSection;
    const process = recruit.placementProcess;
    const campus = recruit.campusSection;
    const documents = recruit.documentSection;
    const team = recruit.placementTeam;
    const enquiry = recruit.recruiteSection;

    return (
        <>
            {hasContent(data?.hero) && <InnerHero data={data.hero} placementMenuItems={data?.sidebar} />}
            <PlacementmenuBar items={data?.sidebar} className="lg:!hidden block" />
            {hasContent(overview) && <CorporateConnect data={overview} />}
            {hasContent(process) && <PlacementProcess data={process} variant="corporate" />}
            {hasContent(campus) && <CampusFacility data={campus} />}
            {hasContent(documents) && <PlacementDocuments data={documents} />}
            {hasContent(team) && <PlacementTeam data={team} />}
            {hasContent(enquiry) && <RecruiteDsu data={enquiry} />}
        </>
    );
}
