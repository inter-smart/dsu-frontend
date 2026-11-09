import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import LibrarySidebar from "@/components/sections/ai-enabled/library/library-sidemenubar";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
import { fetchAPI } from "@/lib/api/strapi";
import { hasContent } from "@/lib/has-content";

// Served by proxy.js for pages whose "Page Layout" is "Flexible page": built from the page's own sections.
const TOP_BAR_FLAGS = {
    placement: "PlacementmenuBar",
    admission: "admissionMenubar",
    "ai-enabled": "AimenuBar",
    "nursing-bsc": "AiBscmenuBar",
};

const getPage = async (searchParams) => {
    const { path } = await searchParams;
    return path ? fetchAPI("/api/flexible-overrides/page", { path }) : null;
};

export async function generateMetadata({ searchParams }) {
    const page = await getPage(searchParams);
    return { title: page?.seo?.metaTitle, description: page?.seo?.metaDescription };
}

export default async function CustomLayoutPage({ searchParams }) {
    const page = await getPage(searchParams);
    if (!page) notFound();

    const flag = TOP_BAR_FLAGS[page.topBar];
    const hero = hasContent(page.hero) ? { ...page.hero, ...(flag ? { [flag]: true } : {}) } : null;
    const sidebar = page.sidebar || [];
    // alumni sections draw their own sidebar, so the page must not add a second one
    const ownSidebar = (page.sections || []).some((s) => s.component?.startsWith("alumni."));
    const showSidebar = sidebar.length > 0 && !ownSidebar;

    const sections = <FlexibleSections sections={page.sections} sidebar={sidebar} menu={sidebar} slug={page.slug} />;

    return (
        <>
            {hero && <InnerHero data={hero} />}
            {showSidebar ? (
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
