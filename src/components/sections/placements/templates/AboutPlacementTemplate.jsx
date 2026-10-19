import InnerHero from "@/components/layout/common/InnerHero";
import PlacementOverview from "@/components/sections/placements/overview";
import AiVisionMission from "@/components/sections/ai-enabled/Ai-vision-mission";
import Announcement from "@/components/sections/placements/announcement";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import CILsection from "@/components/sections/placements/CILSection";
import Recruiters from "@/components/sections/placements/recruiters";
import PlacementContact from "@/components/sections/placements/placementcontact";
import DirectorMessage from "@/components/sections/placements/directors-message";
import TeamSection from "@/components/sections/placements/Team-section";
import { hasContent } from "@/lib/has-content";

// data: the page API response ({ hero, sidebar, aboutPlacementCell, ... })
export default function AboutPlacementTemplate({ data }) {
    const about = data?.aboutPlacementCell || {};

    const overview = about.programOverviewSection;
    const missionVision = about.missionVisionSection;
    const announcements = about.announcemntSection;
    const director = about.chairmanMessage;
    const team = about.placementTeam;
    const cil = about.CILSection;
    const contact = about.placemntContact;
    const recruiters = about.recruterSection;

    return (
        <>
            {hasContent(data?.hero) && <InnerHero data={data.hero} placementMenuItems={data?.sidebar} />}
            <PlacementmenuBar items={data?.sidebar} className="lg:!hidden block" />
            {hasContent(overview) && <PlacementOverview data={overview} />}
            {hasContent(missionVision) && <AiVisionMission data={missionVision} />}
            {hasContent(announcements) && <Announcement data={announcements} />}
            {hasContent(director) && <DirectorMessage data={director} />}
            {hasContent(team) && <TeamSection data={team} />}
            {hasContent(cil) && <CILsection data={cil} />}
            {hasContent(contact) && <PlacementContact data={contact} />}
            {hasContent(recruiters) && <Recruiters data={recruiters} />}
        </>
    );
}
