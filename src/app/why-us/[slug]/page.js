import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import DSUAct from "@/components/sections/why-us/DSU-act";
import {
    getComplianceDisclosureBySlug,
    getComplianceDisclosures,
} from "@/lib/api/index";

export const revalidate = 60;

export async function generateStaticParams() {
    const menu = (await getComplianceDisclosures()) || [];
    return menu
        .filter((item) => item.slug)
        .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const pageData = await getComplianceDisclosureBySlug(slug);

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
