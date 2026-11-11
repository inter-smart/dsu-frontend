import InnerHero from "@/components/layout/common/InnerHero";
import CareerPlacement from "@/components/sections/placements/Career-Placement";
import KeyFocus from "@/components/sections/placements/Key-Focus";
import CareerGoal from "@/components/sections/placements/Career-Goal";
import CampusDrives from "@/components/sections/placements/placement-campusdrive";
import ProfessionalCertification from "@/components/sections/placements/profeesional-section";
import CareerPartners from "@/components/sections/placements/Career-Partners";
import CareerJourney from "@/components/sections/placements/Career-journey";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import { hasContent } from "@/lib/has-content";

// data: the page API response ({ hero, sidebar, careerDevelopment, ... })
export default function CareerDevelopmentTemplate({ data }) {
    const career = data?.careerDevelopment || {};

    const overview = career.programOverviewSection;
    const keyFocus = career.KeyFocus;
    const careerGoal = career.careerGoal;
    const campusDrive = career.campusDrive;
    const professional = career.professional;
    const partners = career.partnersSection;
    const journey = career.careerJorney;

    return (
        <>
            {hasContent(data?.hero) && <InnerHero data={data.hero} placementMenuItems={data?.sidebar} />}
            <PlacementmenuBar items={data?.sidebar} className="lg:!hidden block" />
            {hasContent(overview) && <CareerPlacement data={overview} />}
            {hasContent(keyFocus) && <KeyFocus data={keyFocus} />}
            {hasContent(careerGoal) && <CareerGoal data={careerGoal} />}
            {hasContent(campusDrive) && <CampusDrives data={campusDrive} />}
            {hasContent(professional) && <ProfessionalCertification data={professional} />}
            {hasContent(partners) && <CareerPartners data={partners} />}
            {hasContent(journey) && <CareerJourney data={journey} />}
        </>
    );
}
