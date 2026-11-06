import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import FlexibleSections from "@/components/flexible/FlexibleSections";
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

    return (
        <>
            {hero && <InnerHero data={hero} />}
            <FlexibleSections sections={page.sections} sidebar={sidebar} menu={sidebar} slug={page.slug} />
        </>
    );
}
