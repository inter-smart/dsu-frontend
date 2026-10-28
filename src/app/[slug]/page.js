import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import { getFlexiblePageBySlug } from "@/lib/api/flexible-page";
import { getAboutPage } from "@/lib/api";
import AboutPageView from "@/components/sections/about/about-page-view";
import { hasContent } from "@/lib/has-content";

// "Top Menu Bar" choice of the entry -> the flag InnerHero reads to show that menu bar
const TOP_BAR_FLAGS = {
    placement: "PlacementmenuBar",
    admission: "admissionMenubar",
    "ai-enabled": "AimenuBar",
    "nursing-bsc": "AiBscmenuBar",
};

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const apiData = await getFlexiblePageBySlug(slug);
    if (!apiData) {
        const about = await getAboutPage();
        if (about?.slug !== slug) return {};
        return { title: about.seo?.metaTitle, description: about.seo?.metaDescription };
    }

    return {
        title: apiData.seo?.metaTitle,
        description: apiData.seo?.metaDescription,
    };
}

// A Flexible Page entry (a new common page built from any mix of sections) is shown at /<slug>;
// the About page keeps its slug as the fallback.
export default async function page({ params }) {
    const { slug } = await params;
    const apiData = await getFlexiblePageBySlug(slug);

    if (!apiData) {
        const about = await getAboutPage();
        if (about?.slug !== slug) notFound();
        return <AboutPageView pageData={about} />;
    }

    const topBarFlag = TOP_BAR_FLAGS[apiData.topBar];
    const hero = hasContent(apiData.hero) ? { ...apiData.hero, ...(topBarFlag ? { [topBarFlag]: true } : {}) } : null;
    // the entry's own sidebar links are what the sections read as their sidebar / menu
    const sidebar = apiData.sidebar || [];

    return (
        <>
            {hero && <InnerHero data={hero} />}
            <FlexibleSections sections={apiData.sections} sidebar={sidebar} menu={sidebar} slug={apiData.slug} />
        </>
    );
}
