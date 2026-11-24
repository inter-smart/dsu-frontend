import FlexibleSections from "@/components/flexible/FlexibleSections";
import { getCampusPage } from "@/lib/api";

// The Campus page comes from the "Campus Page" single type. Every section is a block of its "Sections"
// dynamic zone (Campus category: Hero, Overview, Smart Campus, Facility Section, Green Campus, Sustainability,
// Locations), shown in the order set in the admin.
export async function generateMetadata() {
    const pageData = await getCampusPage();

    return {
        title: pageData?.seo?.metaTitle || `${pageData?.title || "Campus"} | Dayananda Sagar University`,
        description: pageData?.seo?.metaDescription || "Campus – A smart, sustainable campus at Dayananda Sagar University.",
        alternates: pageData?.seo?.canonicalUrl ? { canonical: pageData.seo.canonicalUrl } : undefined,
    };
}

export default async function Page() {
    const pageData = await getCampusPage();
    if (!pageData) return null;

    return <FlexibleSections sections={pageData.sections} slug={pageData.slug} />;
}
