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
    quickAbbreviationsSection: {
        heading: "Quick Abbreviations",
        description: "Access essential programme resources, including the B.Sc. Nursing handbook, curriculum, academic guidelines, admission information, and other important documents to help students plan and understand their academic journey.",
        files: [
            {
                id: 1,
                label: "Abbreviations for Nursing Students",
                file: {
                    alternativeText: "Abbreviations for Nursing Students",
                    mime: "application/pdf",
                    url: "/documents/quick-abbreviations/abbreviations-for-nursing-students.pdf",
                },
            },
            {
                id: 2,
                label: "Common Drug Name Stems",
                file: {
                    alternativeText: "Common Drug Name Stems",
                    mime: "application/pdf",
                    url: "/documents/quick-abbreviations/common-drug-name-stems.pdf",
                },
            },
            {
                id: 3,
                label: "Drug Calculations Refresher Sheet",
                file: {
                    alternativeText: "Drug Calculations Refresher Sheet",
                    mime: "application/pdf",
                    url: "/documents/quick-abbreviations/drug-calculations-refresher-sheet.pdf",
                },
            },
            {
                id: 4,
                label: "Lab Values",
                file: {
                    alternativeText: "Lab Values",
                    mime: "application/pdf",
                    url: "/documents/quick-abbreviations/lab-values.pdf",
                },
            },
            {
                id: 5,
                label: "Medical Terminology",
                file: {
                    alternativeText: "Medical Terminology",
                    mime: "application/pdf",
                    url: "/documents/quick-abbreviations/medical-terminology.pdf",
                },
            },
            {
                id: 6,
                label: "Medication Abbreviations",
                file: {
                    alternativeText: "Medication Abbreviations",
                    mime: "application/pdf",
                    url: "/documents/quick-abbreviations/medication-abbreviations.pdf",
                },
            },
            {
                id: 7,
                label: "Nursing Mnemonics",
                file: {
                    alternativeText: "Nursing Mnemonics",
                    mime: "application/pdf",
                    url: "/documents/quick-abbreviations/nursing-mnemonics.pdf",
                },
            },
            {
                id: 8,
                label: "Nursing Metric Conversions",
                file: {
                    alternativeText: "Nursing Metric Conversions",
                    mime: "application/pdf",
                    url: "/documents/quick-abbreviations/nursing-metric-conversions.pdf",
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
            <LibraryDownloads data={local_data.quickAbbreviationsSection} />

        </>
    )
}

