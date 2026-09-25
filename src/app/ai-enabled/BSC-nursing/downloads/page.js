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
        title: "Library",
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
                label: "Downloads",
                href: "/",
            },
        ],
        AiBscmenuBar: true
    },
    downloadsSection: {
        heading: "Downloads / Program Handbooks",
        description: "Access essential programme resources, including the B.Sc. Nursing handbook, curriculum, academic guidelines, admission information, and other important documents to help students plan and understand their academic journey.",
        files: [
            {
                id: 1,
                label: "B.Sc. Nursing 2026–30",
                file: {
                    alternativeText: "B.Sc. Nursing 2026–30",
                    mime: "application/pdf",
                    url: "/documents/library/library-brochure-2024.pdf",
                },
            },
            {
                id: 2,
                label: "B.Sc. Nursing 2025–29",
                file: {
                    alternativeText: "B.Sc. Nursing 2025–29",
                    mime: "application/pdf",
                    url: "/documents/library/library-membership-form-staff.pdf",
                },
            },
            {
                id: 3,
                label: "B.Sc. Nursing 2024–28",
                file: {
                    alternativeText: "B.Sc. Nursing 2024–28",
                    mime: "application/pdf",
                    url: "/documents/library/library-membership-form-student.pdf",
                },
            },
            {
                id: 4,
                label: "B.Sc. Nursing 2023–27",
                file: {
                    alternativeText: "B.Sc. Nursing 2023–27",
                    mime: "application/pdf",
                    url: "/documents/library/library-event-calendar-2024.pdf",
                },
            },
            {
                id: 5,
                label: "B.Sc. Nursing 2022–26",
                file: {
                    alternativeText: "B.Sc. Nursing 2022–26",
                    mime: "application/pdf",
                    url: "/documents/library/book-indent.pdf",
                },
            },
            {
                id: 6,
                label: "B.Sc. Nursing 2021–25",
                file: {
                    alternativeText: "B.Sc. Nursing 2021–25",
                    mime: "application/pdf",
                    url: "/documents/library/plagiarism-form.pdf",
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

