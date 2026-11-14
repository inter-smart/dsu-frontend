import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
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
// `menuBar` ({ items: [{ label, href }], home }) shows a menu bar under the banner, like the academic pages.
export default function CmsPageView({ page, menuBar = null }) {
    const topBarFlag = TOP_BAR_FLAGS[page.topBar];
    const showMenuBar = !topBarFlag && menuBar?.items?.length > 0;
    const hero = hasContent(page.hero)
        ? {
              ...page.hero,
              ...(topBarFlag ? { [topBarFlag]: true } : {}),
              ...(showMenuBar ? { menuBar: true, menuItems: menuBar.items, menuHome: menuBar.home } : {}),
          }
        : null;
    // the entry's own sidebar links are what the sections read as their sidebar / menu
    const sidebar = page.sidebar || [];

    return (
        <>
            {hero && <InnerHero data={hero} />}
            {/* the banner shows the menu bar from lg up; below that it sits under the banner */}
            {hero && showMenuBar && <AcademicMenubar className="md:!hidden block" items={menuBar.items} homeHref={menuBar.home} />}
            <FlexibleSections sections={page.sections} sidebar={sidebar} menu={sidebar} slug={page.slug} />
        </>
    );
}
