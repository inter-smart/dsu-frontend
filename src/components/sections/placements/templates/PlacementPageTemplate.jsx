import InnerHero from "@/components/layout/common/InnerHero";
import PlacementProcess from "@/components/sections/placements/placement-process";
import PlacementDocuments from "@/components/sections/placements/PlacementDocuments";
import PlacementSections from "@/components/sections/academics/PlacementDashboard";
import PlacementReport from "@/components/sections/placements/Placement-report";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import { hasContent } from "@/lib/has-content";

// data: the page API response ({ hero, sidebar, placementPage, ... })
export default function PlacementPageTemplate({ data }) {
    const results = data?.placementPage || {};

    const process = results.placementProcess;
    const documents = results.documentSection;
    const dashboard = results.PlacementSection;
    const report = results.PlacementReport;

    return (
        <>
            {hasContent(data?.hero) && <InnerHero data={data.hero} placementMenuItems={data?.sidebar} />}
            <PlacementmenuBar items={data?.sidebar} className="lg:!hidden block" />
            {hasContent(process) && <PlacementProcess data={process} variant="whiteBg" />}
            {hasContent(documents) && <PlacementDocuments data={documents} />}
            {hasContent(dashboard) && <PlacementSections data={dashboard} />}
            {hasContent(report) && <PlacementReport data={report} />}
        </>
    );
}
