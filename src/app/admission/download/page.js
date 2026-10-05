import InnerHero from "@/components/layout/common/InnerHero";
import AdmissionDownload from "@/components/sections/admission/AdmissionDownload";
import AdmissionMenubar from "@/components/sections/admission/admissionMenubar";


const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Downloads page title",
        metaDescription: "Downloads page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Downloads page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "Admission",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },

            {
                label: "Admission @ DSU",
                href: "/",
            },
            {
                label: "Downloads",
                href: "/",
            },
        ],
        admissionMenubar: true
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
                    { id: 2, label: "Document 1", href: "#" },
                    { id: 3, label: "Document 1", href: "#" },
                    { id: 4, label: "Document 1", href: "#" },
                ],
            },
            {
                id: 2,
                label: "Admission Brochure",
                active: false,
                documents: [],
            },
            {
                id: 3,
                label: "Fee Structure",
                active: false,
                documents: [],
            },
            {
                id: 4,
                label: "Hostel Handbook",
                active: false,
                documents: [],
            },
            {
                id: 5,
                label: "Forms",
                active: false,
                documents: [],
            },
            {
                id: 6,
                label: "Information Bulletins",
                active: false,
                documents: [],
            },
        ],
    }


}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AdmissionMenubar className="lg:!hidden block" />
            <AdmissionDownload data={local_data.download} />
        </>
    )
}
