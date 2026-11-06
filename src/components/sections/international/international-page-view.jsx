import InnerHero from "@/components/layout/common/InnerHero";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import InternationalAdmissionView from "@/components/sections/international/international-admission-view";
import { hasContent } from "@/lib/has-content";

// "Top Menu Bar" choice of a flexible entry -> the flag InnerHero reads to show that menu bar
const TOP_BAR_FLAGS = {
    placement: "PlacementmenuBar",
    admission: "admissionMenubar",
    "ai-enabled": "AimenuBar",
    "nursing-bsc": "AiBscmenuBar",
};

// Renders an International entry by its `template`
export default function InternationalPageView({ page }) {
    if (page.template === "flexible-page") {
        const topBarFlag = TOP_BAR_FLAGS[page.topBar];
        const hero = hasContent(page.hero) ? { ...page.hero, ...(topBarFlag ? { [topBarFlag]: true } : {}) } : null;
        const sidebar = page.sidebar || [];

        return (
            <>
                {hero && <InnerHero data={hero} />}
                <FlexibleSections sections={page.sections} sidebar={sidebar} menu={sidebar} slug={page.slug} />
            </>
        );
    }

    return <InternationalAdmissionView page={page} />;
}
