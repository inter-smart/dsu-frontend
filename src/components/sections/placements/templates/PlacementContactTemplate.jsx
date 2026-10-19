import InnerHero from "@/components/layout/common/InnerHero";
import PlacementConnect from "@/components/sections/placements/placement-connect";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import { hasContent } from "@/lib/has-content";

// data: the page API response ({ hero, sidebar, placementContactPage, ... })
export default function PlacementContactTemplate({ data }) {
    const page = data?.placementContactPage || {};

    const contact = page.placementContact;

    return (
        <>
            {hasContent(data?.hero) && <InnerHero data={data.hero} placementMenuItems={data?.sidebar} />}
            <PlacementmenuBar items={data?.sidebar} className="lg:!hidden block" />
            {hasContent(contact) && <PlacementConnect data={contact} />}
        </>
    );
}
