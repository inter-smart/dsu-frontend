import InnerHero from "@/components/layout/common/InnerHero"; 
import AiBSCMenubar from "@/components/sections/ai-enabled/BSC-nursing/bsc-Menubar";
import BscDownloads from "@/components/sections/ai-enabled/BSC-nursing/downloads";
 
const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Admission page title",
        metaDescription: "Admission page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Admission page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "Basic B. Sc Nursing",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "AI Enabled Academics",
                href: "/",
            },
            {
                label: "School of Health Sciences",
                href: "/",
            },
            {
                label: "College of Nursing Sciences",
                href: "/",
            },
            {
                label: "Basic B. Sc Nursing",
                href: "/",
            },
            {
                label: "Admissions",
                href: "/",
            },
        ],
        AiBscmenuBar: true
    },
    downloadsSection: {
        heading: "Admission Notification",
        description: "Stay updated with the latest admission announcements for the Basic B.Sc. Nursing programme, including application dates, eligibility requirements, important deadlines, and admission procedures.",
        files: [
            {
                id: 1,
                label: "Admission Notification for  B.Sc. Nursing",
                file: {
                    alternativeText: "Admission Notification for  B.Sc. Nursing",
                    mime: "application/pdf",
                    url: "/documents/library/library-brochure-2024.pdf",
                },
            },
                        
        ],
    },
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiBSCMenubar className="lg:!hidden block" />
            <BscDownloads data={local_data.downloadsSection}  varient="Bsc-nursing"/>

        </>
    )
}

