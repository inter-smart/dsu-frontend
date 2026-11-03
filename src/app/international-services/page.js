import { getInternationalServicesPage } from "@/lib/api/international-services";
import { hasContent } from "@/lib/has-content";
import CampusLife from "@/components/sections/international/CampusLife";
import CtaSection from "@/components/sections/international/CtaSection";
import InternationalTeam from "@/components/sections/international/InternationalTeam";
import ServiceBanner from "@/components/sections/international/ServiceBanner";
import ServiceFaq from "@/components/sections/international/ServiceFaq";
import ServiceFeature from "@/components/sections/international/ServiceFeature";
import ServiceIntro from "@/components/sections/international/ServiceIntro";
import SupportServices from "@/components/sections/international/SupportServices";

export async function generateMetadata() {
    const page = await getInternationalServicesPage();
    const metadata = {
        title: page?.seo?.metaTitle || page?.title || "International Student Services",
    };
    if (page?.seo?.metaDescription) metadata.description = page.seo.metaDescription;
    if (page?.seo?.canonicalUrl) metadata.alternates = { canonical: page.seo.canonicalUrl };
    return metadata;
}

export default async function Page() {
    const page = await getInternationalServicesPage();

    // The content lives in Strapi only: without it there is nothing true to show
    if (!page) {
        return (
            <section className="container py-[160px] text-center">
                <h1 className="text-[28px] font-bold text-[#1a1a1a]">International Student Services</h1>
                <p className="mt-3 text-[16px] text-[#555]">
                    This page is temporarily unavailable. Please try again in a few minutes.
                </p>
            </section>
        );
    }

    const features = hasContent(page.features) ? page.features.items : [];

    return (
        <>
            {hasContent(page.hero) && <ServiceBanner data={page.hero} />}
            {hasContent(page.intro) && <ServiceIntro data={page.intro} />}
            {features.map((feature) => (
                <ServiceFeature key={feature.id} data={feature} />
            ))}
            {hasContent(page.campus) && <CampusLife data={page.campus} />}
            {hasContent(page.support) && <SupportServices data={page.support} />}
            {hasContent(page.team) && <InternationalTeam data={page.team} />}
            {hasContent(page.faq) && <ServiceFaq data={page.faq} />}
            {hasContent(page.cta) && <CtaSection data={page.cta} />}
        </>
    );
}
