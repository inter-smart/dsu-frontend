import InnerHero from "@/components/layout/common/InnerHero";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import { hasContent } from "@/lib/has-content";

// data: the page API response ({ hero, sidebar, flexiblePage: { sections } })
export default function FlexibleTemplate({ data }) {
    return (
        <>
            {hasContent(data?.hero) && <InnerHero data={data.hero} placementMenuItems={data?.sidebar} />}
            <PlacementmenuBar items={data?.sidebar} className="lg:!hidden block" />
            <FlexibleSections sections={data?.flexiblePage?.sections} />
        </>
    );
}
