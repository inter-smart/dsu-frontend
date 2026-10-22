import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import flexibleRegistry from "@/components/flexible/registry";
import { getFlexiblePageBySlug } from "@/lib/api/flexible-page";
import { getAboutPage } from "@/lib/api";
import AboutPageView from "@/components/sections/about/about-page-view";
import { hasContent } from "@/lib/has-content";

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

export default async function page({ params }) {
    const { slug } = await params;
    const apiData = await getFlexiblePageBySlug(slug);

    if (!apiData) {
        const about = await getAboutPage();
        if (about?.slug !== slug) notFound();
        return <AboutPageView pageData={about} />;
    }

    const sections = apiData.sections || [];

    return (
        <>
            {hasContent(apiData.hero) && <InnerHero data={apiData.hero} />}
            {sections.map((item) => {
                const entry = flexibleRegistry[item.component];
                if (!entry || !hasContent(item.data)) return null;

                const Component = entry.Component;
                const props = entry.props || {};
                return <Component key={`${item.component}-${item.id}`} data={item.data} {...props} />;
            })}
        </>
    )
}
