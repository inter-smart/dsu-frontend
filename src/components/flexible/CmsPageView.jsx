import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import LibrarySidebar from "@/components/sections/ai-enabled/library/library-sidemenubar";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
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
// `sidebarLayout` puts the entry's sidebar links in a side menu next to the sections (Library pages built with the
// "Flexible page" template, whose sections do not draw a sidebar themselves).
export default function CmsPageView({ page, menuBar = null, sidebarLayout = false }) {
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
    const sections = <FlexibleSections sections={page.sections} sidebar={sidebar} menu={sidebar} slug={page.slug} />;

    return (
        <>
            {hero && <InnerHero data={hero} />}
            {/* the banner shows the menu bar from lg up; below that it sits under the banner */}
            {hero && showMenuBar && <AcademicMenubar className="md:!hidden block" items={menuBar.items} homeHref={menuBar.home} />}
            {sidebarLayout && sidebar.length > 0 ? (
                <div className="container py-5 sm:py-7.5 lg:py-15 2xl:py-20">
                    <div className="[--width:100%] lg:[--width:210px] 2xl:[--width:270px] 3xl:[--width:330px] w-full h-auto flex flex-wrap">
                        <div className="w-(--width)">
                            <LibrarySidebar data={sidebar} />
                            <AiAcademicMenubar className="[&>div]:px-0 block lg:hidden" data={sidebar} />
                        </div>
                        {/* sections bring their own .container; flatten it so it fits the column */}
                        <div className="w-full lg:w-[calc(100%-var(--width))] lg:pl-3.75 2xl:pl-5 3xl:pl-7.5 [&_.container]:max-w-none [&_.container]:px-0">
                            {sections}
                        </div>
                    </div>
                </div>
            ) : (
                sections
            )}
        </>
    );
}
