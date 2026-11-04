import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import DSUAct from "@/components/sections/why-us/DSU-act";
import IQAC from "@/components/sections/why-us/IQAC";
import IQACReport from "@/components/sections/why-us/IQAC-reports";
import WhyusAQAR from "@/components/sections/why-us/Whyus-AQAR";
import AcademicQualitySection from "@/components/sections/why-us/AcademicQualitySection";
import DSUWomenRedressal from "@/components/sections/why-us/DSU-womenredressal";
import DSUOmbudsman from "@/components/sections/why-us/DSU-Ombudsman";
import DSUDEADC from "@/components/sections/why-us/DSU-DEADC";
import { getStudentSupportMenu, getStudentSupportPageBySlug } from "@/lib/api/women-redressal";
import { hasContent } from "@/lib/has-content";
import {
    getAcademicQualityBySlug,
    getComplianceDisclosureBySlug,
    getComplianceDisclosures,
    getAqarPageBySlug,
    getIqacPageBySlug,
} from "@/lib/api";



// Student Support & Welfare templates shown on this route: template -> component and the response key holding its data.
// Add one line here for every new template that has no fixed route.
// Entries with slug "women-redressal" / "ombudsman" are also served by their fixed routes.
const studentSupportTemplates = {
    squad: { Component: DSUWomenRedressal, dataKey: "squad" },
    "women-redressal": { Component: DSUWomenRedressal, dataKey: "womenRedressalCell" },
    ombudsman: { Component: DSUOmbudsman, dataKey: "ombudsmanMessage" },
    ceadc: { Component: DSUDEADC, dataKey: "capabilityEnhancementCells" },
};

export async function generateStaticParams() {
    const menu = (await getComplianceDisclosures()) || [];
    return menu
        .filter((item) => item.slug)
        .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const [academicQualityPage, aqarPage, iqacPage, disclosurePage, studentSupportPage] = await Promise.all([
        getAcademicQualityBySlug(slug),
        getAqarPageBySlug(slug),
        getIqacPageBySlug(slug),
        getComplianceDisclosureBySlug(slug),
        getStudentSupportPageBySlug(slug),
    ]);
    const pageData = academicQualityPage || aqarPage || iqacPage || disclosurePage || studentSupportPage;

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
                {academicQualityPage.hero && <InnerHero data={academicQualityPage.hero} className="leadership-detail-hero" />}
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
                {aqarPage.hero && <InnerHero data={aqarPage.hero} className="leadership-detail-hero" />}
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
                    {iqacPage.hero && <InnerHero data={iqacPage.hero} className="leadership-detail-hero" />}
                    {iqacPage.iqacSection && <IQAC data={iqacPage.iqacSection} />}
                </>
            );
        }

        if (iqacPage.template === "reports") {
            return (
                <>
                    {iqacPage.hero && <InnerHero data={iqacPage.hero} className="leadership-detail-hero" />}
                    {iqacPage.reportsSection && <IQACReport data={iqacPage.reportsSection} />}
                </>
            );
        }

        if (iqacPage.template === "flexible-page") {
            return (
                <>
                    {iqacPage.hero && <InnerHero data={iqacPage.hero} className="leadership-detail-hero" />}
                    <FlexibleSections sections={iqacPage.flexiblePage?.sections} />
                </>
            );
        }

        notFound();
    }

    const [pageData, menu] = await Promise.all([
        getComplianceDisclosureBySlug(slug),
        getComplianceDisclosures(),
    ]);

    if (!pageData) {
        const studentSupportPage = await getStudentSupportPageBySlug(slug);

        if (studentSupportPage?.template === "flexible-page") {
            const studentSupportMenu = await getStudentSupportMenu();
            return (
                <>
                    {hasContent(studentSupportPage.hero) && <InnerHero data={studentSupportPage.hero} />}
                    <FlexibleSections sections={studentSupportPage.flexiblePage?.sections} menu={studentSupportMenu} />
                </>
            );
        }

        const template = studentSupportTemplates[studentSupportPage?.template];
        if (!template) notFound();

        const studentSupportMenu = await getStudentSupportMenu();
        const content = studentSupportPage[template.dataKey];

        return (
            <>
                {hasContent(studentSupportPage.hero) && <InnerHero data={studentSupportPage.hero} />}
                {hasContent(content) && <template.Component data={content} menu={studentSupportMenu} />}
            </>
        );
    }

    return (
        <>
            {pageData.hero && <InnerHero data={pageData.hero} />}
            {pageData.section && <DSUAct data={pageData.section} menu={menu || []} />}
        </>
    );
}
