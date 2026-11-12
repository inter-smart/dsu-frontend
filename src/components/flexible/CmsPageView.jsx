import InnerHero from "@/components/layout/common/InnerHero";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import { hasContent } from "@/lib/has-content";

// "Top Menu Bar" choice of the entry -> the flag InnerHero reads to show that menu bar
const TOP_BAR_FLAGS = {
    placement: "PlacementmenuBar",
    admission: "admissionMenubar",
    "ai-enabled": "AimenuBar",
    "nursing-bsc": "AiBscmenuBar",
};

// A page built like a Flexible Page (Flexible Page, Pdf Reports, Doctoral Research): banner + its sections.
export default function CmsPageView({ page }) {
    const topBarFlag = TOP_BAR_FLAGS[page.topBar];
    const hero = hasContent(page.hero) ? { ...page.hero, ...(topBarFlag ? { [topBarFlag]: true } : {}) } : null;
    // the entry's own sidebar links are what the sections read as their sidebar / menu
    const sidebar = page.sidebar || [];

    return (
        <>
            {hero && <InnerHero data={hero} />}
            <FlexibleSections sections={page.sections} sidebar={sidebar} menu={sidebar} slug={page.slug} />
        </>
    );
}
