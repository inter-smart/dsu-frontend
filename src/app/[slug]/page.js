import { notFound } from "next/navigation";
import CmsPageView from "@/components/flexible/CmsPageView";
import { getFlexiblePageBySlug } from "@/lib/api/flexible-page";
import { getPdfReportPageBySlug } from "@/lib/api/pdf-report-page";
import { getAboutPage, getAccreditationBySlug } from "@/lib/api";
import AccreditationPage, { generateMetadata as accreditationMetadata } from "../accreditions/[slug]/page";
import AboutPageView from "@/components/sections/about/about-page-view";
import { getPageModuleBySlug } from "@/lib/page-routes";

// A Pdf Reports entry is built like a Flexible Page and shown at /<slug> too
// (Doctoral Research entries live at /research-innovation/<slug>)
async function getCmsPageBySlug(slug) {
    return (await getFlexiblePageBySlug(slug)) ?? (await getPdfReportPageBySlug(slug));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const apiData = await getCmsPageBySlug(slug);
    if (!apiData) {
        const about = await getAboutPage();
        if (about?.slug !== slug) {
            const pageModule = await getPageModuleBySlug(slug);
            if (!pageModule && (await getAccreditationBySlug(slug))) {
                return accreditationMetadata({ params: Promise.resolve({ slug }) });
            }
            return pageModule?.generateMetadata ? pageModule.generateMetadata() : {};
        }
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
    const apiData = await getCmsPageBySlug(slug);

    if (!apiData) {
        const about = await getAboutPage();
        if (about?.slug !== slug) {
            // a page whose slug was set in the CMS
            const pageModule = await getPageModuleBySlug(slug);
            if (!pageModule) {
                // an Accredition entry (NAAC, NBA ...) whose slug was set in the CMS
                if (await getAccreditationBySlug(slug)) {
                    return <AccreditationPage params={Promise.resolve({ slug })} />;
                }
                notFound();
            }
            const PageView = pageModule.default;
            return <PageView viaSlug />;
        }
        return <AboutPageView pageData={about} />;
    }

    return <CmsPageView page={apiData} />;
}
