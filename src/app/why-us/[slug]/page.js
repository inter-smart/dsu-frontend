import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import DSUAct from "@/components/sections/why-us/DSU-act";
import IQAC from "@/components/sections/why-us/IQAC";
import IQACReport from "@/components/sections/why-us/IQAC-reports";
import WhyusAQAR from "@/components/sections/why-us/Whyus-AQAR";
import AcademicQualitySection from "@/components/sections/why-us/AcademicQualitySection";
import {
    getAcademicQualityBySlug,
    getComplianceDisclosureBySlug,
    getComplianceDisclosures,
    getAqarPageBySlug,
    getIqacPageBySlug,
} from "@/lib/api";

export const revalidate = 60;

export async function generateStaticParams() {
    const menu = (await getComplianceDisclosures()) || [];
    return menu
        .filter((item) => item.slug)
        .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const [academicQualityPage, aqarPage, iqacPage, disclosurePage] = await Promise.all([
        getAcademicQualityBySlug(slug),
        getAqarPageBySlug(slug),
        getIqacPageBySlug(slug),
        getComplianceDisclosureBySlug(slug),
    ]);
    const pageData = academicQualityPage || aqarPage || iqacPage || disclosurePage;

    return {
        title: pageData?.seo?.metaTitle || "Compliance & Disclosures | Dayananda Sagar University",
        description: pageData?.seo?.metaDescription || undefined,
        alternates: pageData?.seo?.canonicalUrl
            ? { canonical: pageData.seo.canonicalUrl }
            : undefined,
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const academicQualityPage = await getAcademicQualityBySlug(slug);

    if (academicQualityPage) {
        return (
            <>
                {academicQualityPage.hero && <InnerHero data={academicQualityPage.hero} />}
                {academicQualityPage.academicQualitySection && (
                    <AcademicQualitySection data={academicQualityPage.academicQualitySection} />
                )}
            </>
        );
    }

    const aqarPage = await getAqarPageBySlug(slug);

    if (aqarPage) {
        return (
            <>
                {aqarPage.hero && <InnerHero data={aqarPage.hero} />}
                {aqarPage.aqarReportsSection && (
                    <WhyusAQAR data={aqarPage.aqarReportsSection} />
                )}
            </>
        );
    }

    const iqacPage = await getIqacPageBySlug(slug);

    if (iqacPage) {
        if (iqacPage.template === "IQAC") {
            return (
                <>
                    {iqacPage.hero && <InnerHero data={iqacPage.hero} />}
                    {iqacPage.iqacSection && <IQAC data={iqacPage.iqacSection} />}
                </>
            );
        }

        if (iqacPage.template === "reports") {
            return (
                <>
                    {iqacPage.hero && <InnerHero data={iqacPage.hero} />}
                    {iqacPage.reportsSection && <IQACReport data={iqacPage.reportsSection} />}
                </>
            );
        }

        notFound();
    }

    const [pageData, menu] = await Promise.all([
        getComplianceDisclosureBySlug(slug),
        getComplianceDisclosures(),
    ]);

    if (!pageData) notFound();

    return (
        <>
            {pageData.hero && <InnerHero data={pageData.hero} />}
            {pageData.section && <DSUAct data={pageData.section} menu={menu || []} />}
        </>
    );
}
