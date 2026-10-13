import { getAdmissionDownloadPage } from "@/lib/api";
import InnerHero from "@/components/layout/common/InnerHero";
import AdmissionMenubar from "@/components/sections/admission/admissionMenubar";
import AdmissionDownload from "@/components/sections/admission/AdmissionDownload";

// Fallback data used when the CMS entry is not yet available
const FALLBACK = {
    hero: {
        heroMedia: {
            alternativeText: "Downloads",
            mime: "image/jpg",
            url: "/images/academic-banner.jpg",
        },
        title: "Admission",
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Admission @ DSU", href: "/" },
            { label: "Downloads", href: "/" },
        ],
        admissionMenubar: true,
    },
    download: {
        heading: "Downloads",
        tabs: [
            {
                id: 1,
                label: "Prospectus",
                active: true,
                documents: [
                    { id: 1, label: "Document 1", href: "#" },
                    { id: 2, label: "Document 2", href: "#" },
                    { id: 3, label: "Document 3", href: "#" },
                    { id: 4, label: "Document 4", href: "#" },
                ],
            },
            { id: 2, label: "Admission Brochure", active: false, documents: [] },
            { id: 3, label: "Fee Structure", active: false, documents: [] },
            { id: 4, label: "Hostel Handbook", active: false, documents: [] },
            { id: 5, label: "Forms", active: false, documents: [] },
            { id: 6, label: "Information Bulletins", active: false, documents: [] },
        ],
    },
};

export async function generateMetadata() {
    const pageData = await getAdmissionDownloadPage();
    return {
        title: pageData?.seo?.metaTitle || "Downloads | Dayananda Sagar University",
        description: pageData?.seo?.metaDescription || undefined,
        alternates: pageData?.seo?.canonicalUrl
            ? { canonical: pageData.seo.canonicalUrl }
            : undefined,
    };
}

export default async function page() {
    const pageData = await getAdmissionDownloadPage();

    const hero = pageData?.hero ?? FALLBACK.hero;
    const download = pageData?.download ?? FALLBACK.download;

    return (
        <>
            <InnerHero data={hero} />
            <AdmissionMenubar className="lg:!hidden block" />
            <AdmissionDownload data={download} />
        </>
    );
}
