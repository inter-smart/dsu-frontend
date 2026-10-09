import InnerHero from "@/components/layout/common/InnerHero";
import HistoryDetails from "@/components/sections/history/history-Details";
import HistoryNewpahse from "@/components/sections/history/history-newpahse";
import HistoryPillers from "@/components/sections/history/history-pillers";
import HistoryTimeline from "@/components/sections/history/history-Timeline";
import { getHistoryPage } from "@/lib/api";



export async function generateMetadata() {
    const pageData = await getHistoryPage();

    return {
        title: pageData?.seo?.metaTitle || "History | Dayananda Sagar University",
        description: pageData?.seo?.metaDescription || undefined,
        alternates: pageData?.seo?.canonicalUrl
            ? { canonical: pageData.seo.canonicalUrl }
            : undefined,
    };
}

export default async function Page() {
    const pageData = await getHistoryPage();

    if (!pageData) return null;

    return (
        <>
            {pageData.hero && <InnerHero data={pageData.hero} />}
            {pageData.historyTimeline && <HistoryTimeline data={pageData.historyTimeline} />}
            {pageData.aboutInstitutions && <HistoryDetails data={pageData.aboutInstitutions} />}
            {pageData.foundingPillars && <HistoryPillers data={pageData.foundingPillars} />}
            {pageData.newPahseSection && <HistoryNewpahse data={pageData.newPahseSection} />}
        </>
    );
}