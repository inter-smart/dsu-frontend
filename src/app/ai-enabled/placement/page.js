import InnerHero from "@/components/layout/common/InnerHero";
import AcademicCollaboration from "@/components/sections/academics/academic-collaboration";
import AcademicPartners from "@/components/sections/academics/academic-partners";
import AcademicPlacementReport from "@/components/sections/academics/academic-placement-report";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Placements Snapshot page title",
        metaDescription: "Placements Snapshot page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Placements Snapshot page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "School of Computer Applications",
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
                label: "Schools",
                href: "/",
            },
            {
                label: "Computer Applications",
                href: "/",
            },
            {
                label: "Placements Snapshot",
                href: "/",
            },
        ],
        AimenuBar: true
    },
    industryCollaborationsSection: {
        heading: "Career Success at a Glance",
        description: "Our students continue to secure rewarding career opportunitieswith leading organizations across diverse industries. Throughindustry-oriented learning, practical exposure, internships,and dedicated placement support, graduates are well prepared to excel in today's competitive job market.",
        cta: {
            label: "View Placement Report PDF",

            alternativeText: "View Placement Report PDF",
            mime: "application/pdf",
            url: "/documents/placement-report.pdf",

        },
        stats: [
            {
                id: 1,
                value: "98%",
                label: "Placement Rate",
            },
            {
                id: 2,
                value: "1200+",
                label: "Students Placed",
            },
            {
                id: 3,
                value: "350+",
                label: "Placement Offers",
            },
            {
                id: 4,
                value: "₹18 LPA",
                label: "Highest Package",
            },
            {
                id: 5,
                value: "₹6.8 LPA",
                label: "₹6.8 LPA",
            },
            {
                id: 5,
                value: "5+",
                label: "Government Hospitals",
            },
        ],
    },
    partnersSection: {
        label: "Our Healthcare Recruiters Include",
        partners: [
            {
                id: 1,
                name: "Infosys",
                logo: {
                    alternativeText: "Infosys logo",
                    mime: "image/svg+xml",
                    url: "/images/health-1.png",
                },
            },
            {
                id: 2,
                name: "Wipro",
                logo: {
                    alternativeText: "Wipro logo",
                    mime: "image/svg+xml",
                    url: "/images/health-2.png",
                },
            },
            {
                id: 3,
                name: "NVIDIA",
                logo: {
                    alternativeText: "NVIDIA logo",
                    mime: "image/svg+xml",
                    url: "/images/health-3.png",
                },
            },
            {
                id: 4,
                name: "Accenture",
                logo: {
                    alternativeText: "Accenture logo",
                    mime: "image/svg+xml",
                    url: "/images/health-4.png",
                },
            },
            {
                id: 5,
                name: "Zoho",
                logo: {
                    alternativeText: "Zoho logo",
                    mime: "image/svg+xml",
                    url: "/images/health-5.png",
                },
            },
            {
                id: 6,
                name: "TCS",
                logo: {
                    alternativeText: "Tata Consultancy Services logo",
                    mime: "image/svg+xml",
                    url: "/images/health-6.png",
                },
            },
           
        ],
    },
    placementReportsSection: {
        heading: "Placement Reports",
        description: "Our students continue to secure rewarding career opportunitieswith leading organizations across diverse industries. Throughindustry-oriented learning, practical exposure, internship ",
        documents: [
            {
                id: 1,
                label: "Placement Report 2024–25",
                file: {
                    alternativeText: "Placement Report 2024-25 PDF",
                    mime: "application/pdf",
                    url: "/documents/placement-report-2024-25.pdf",
                },
            },
            {
                id: 2,
                label: "Placement Report 2023–24",
                file: {
                    alternativeText: "Placement Report 2023-24 PDF",
                    mime: "application/pdf",
                    url: "/documents/placement-report-2023-24.pdf",
                },
            },
            {
                id: 3,
                label: "Placement Report 2022–23",
                file: {
                    alternativeText: "Placement Report 2022-23 PDF",
                    mime: "application/pdf",
                    url: "/documents/placement-report-2022-23.pdf",
                },
            },
            {
                id: 4,
                label: "Placement Report 2021–22",
                file: {
                    alternativeText: "Placement Report 2021-22 PDF",
                    mime: "application/pdf",
                    url: "/documents/placement-report-2021-22.pdf",
                },
            },
        ],
        media: {
            alternativeText: "Placement Reports ",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/placement-img.jpg",
        },
    }


}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AcademicMenubar className="md:!hidden block" />
            <AcademicCollaboration data={local_data.industryCollaborationsSection} />
            <AcademicPartners data={local_data.partnersSection} />
            <AcademicPlacementReport data={local_data.placementReportsSection} />
        </>
    )
}

