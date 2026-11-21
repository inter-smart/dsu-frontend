import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import LibrarySidebar from "@/components/sections/ai-enabled/library/library-sidemenubar";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
import AiBSCMenubar from "@/components/sections/ai-enabled/BSC-nursing/bsc-Menubar";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import { loadEntityMenu } from "@/lib/schools/entity";
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

// Programme / department / school tab pages keep their tab menu under the banner (unless the banner's
// "menuBar" is switched off in the CMS).
const getMenu = async (searchParams, page) => {
    const { path } = await searchParams;
    if (!path || page.hero?.showMenuBar === false || page.topBar !== "none") return null;
    try {
        return await loadEntityMenu(path);
    } catch {
        return null;
    }
};

export async function generateMetadata({ searchParams }) {
    const page = await getPage(searchParams);
    return { title: page?.seo?.metaTitle, description: page?.seo?.metaDescription };
}

export default async function CustomLayoutPage({ searchParams }) {
    const page = await getPage(searchParams);
    if (!page) notFound();

    const flag = TOP_BAR_FLAGS[page.topBar];
    const menu = await getMenu(searchParams, page);
    const menuFlags = !menu
        ? {}
        : menu.kind === "programme"
          ? { AiBscmenuBar: true, menuItems: menu.items }
          : menu.kind === "department"
            ? { AimenuBar: true, menuItems: menu.items }
            : { menuBar: true, menuItems: menu.items, slug: menu.slug, hasDepartments: menu.hasDepartments };
    const hero = hasContent(page.hero) ? { ...page.hero, ...(flag ? { [flag]: true } : menuFlags) } : null;
    const sidebar = page.sidebar || [];
    // alumni sections draw their own sidebar, so the page must not add a second one
    const ownSidebar = (page.sections || []).some((s) => s.component?.startsWith("alumni."));
    const showSidebar = sidebar.length > 0 && !ownSidebar;

    const sections = <FlexibleSections sections={page.sections} sidebar={sidebar} menu={sidebar} slug={page.slug} />;

    return (
        <>
            {hero && <InnerHero data={hero} />}
            {hero && menu && !flag && (
                menu.kind === "programme" ? (
                    <AiBSCMenubar className="lg:!hidden block" items={menu.items} title={page.hero?.title} />
                ) : menu.kind === "department" ? (
                    <AiAcademicMenubar className="lg:!hidden block" data={menu.items} />
                ) : (
                    <AcademicMenubar className="md:!hidden block" slug={menu.slug} hasDepartments={menu.hasDepartments} items={menu.items} />
                )
            )}
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
