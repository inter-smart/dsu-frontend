import InnerHero from "@/components/layout/common/InnerHero";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
import LibraryDownloads from "@/components/sections/ai-enabled/library/library-download";
import LibraryOverview from "@/components/sections/ai-enabled/library/library-overview";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Industry Collaborations page title",
        metaDescription: "Industry Collaborations page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Industry Collaborations page title",
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
                label: "Library",
                href: "/",
            },
        ],
        AimenuBar: true
    },
    downloadsSection: {
        heading: "Downloads",
        description: "Access essential programme resources, including the B.Sc. Nursing handbook, curriculum, academic guidelines, admission information, and other important documents to help students plan and understand their academic journey.",
        files: [
            {
                id: 1,
                label: "Library Brochure 2024",
                file: {
                    alternativeText: "Library Brochure 2024",
                    mime: "application/pdf",
                    url: "/documents/library/library-brochure-2024.pdf",
                },
            },
            {
                id: 2,
                label: "Library Membership Form (Staff)",
                file: {
                    alternativeText: "Library Membership Form (Staff)",
                    mime: "application/pdf",
                    url: "/documents/library/library-membership-form-staff.pdf",
                },
            },
            {
                id: 3,
                label: "Library Membership Form (Student)",
                file: {
                    alternativeText: "Library Membership Form (Student)",
                    mime: "application/pdf",
                    url: "/documents/library/library-membership-form-student.pdf",
                },
            },
            {
                id: 4,
                label: "Library Event Calendar 2024",
                file: {
                    alternativeText: "Library Event Calendar 2024",
                    mime: "application/pdf",
                    url: "/documents/library/library-event-calendar-2024.pdf",
                },
            },
            {
                id: 5,
                label: "Book Indent",
                file: {
                    alternativeText: "Book Indent",
                    mime: "application/pdf",
                    url: "/documents/library/book-indent.pdf",
                },
            },
            {
                id: 6,
                label: "Plagiarism Form",
                file: {
                    alternativeText: "Plagiarism Form",
                    mime: "application/pdf",
                    url: "/documents/library/plagiarism-form.pdf",
                },
            },
            {
                id: 7,
                label: "Library fine form",
                file: {
                    alternativeText: "Library fine form",
                    mime: "application/pdf",
                    url: "/documents/library/library-fine-form.pdf",
                },
            },
            {
                id: 8,
                label: "Library Caution Deposit Refund Form",
                file: {
                    alternativeText: "Library Caution Deposit Refund Form",
                    mime: "application/pdf",
                    url: "/documents/library/library-caution-deposit-refund-form.pdf",
                },
            },
            {
                id: 9,
                label: "Library Lost Book Replacement Letter",
                file: {
                    alternativeText: "Library Lost Book Replacement Letter",
                    mime: "application/pdf",
                    url: "/documents/library/library-lost-book-replacement-letter.pdf",
                },
            },
        ],
    },
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiAcademicMenubar className="lg:!hidden block" />
            <LibraryDownloads data={local_data.downloadsSection} />

        </>
    )
}

