import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import AcademicCollaboration from "@/components/sections/academics/academic-collaboration";
import AcademicPartners from "@/components/sections/academics/academic-partners";
import AcademicPlacementReport from "@/components/sections/academics/academic-placement-report";
import { loadSchoolTabData, schoolTabMetadata } from "@/lib/schools/tab-page";

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
        menuBar: true
    },
    industryCollaborationsSection: {
        heading: "Career Success at a Glance",
        description: "Our students continue to secure rewarding career opportunitieswith leading organizations across diverse industries. Throughindustry-oriented learning, practical exposure, internships,and dedicated placement support, graduates are well prepared to excel in today's competitive job market.",
        file: {
            label: "View Placement Report PDF",
            url: "/documents/placement-report.pdf",
            isExternal: false,
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
                value: "85%",
                label: "Internship Conversion",
            },
        ],
    },
    partnersSection: {
        label: "Our Industry Partners Include",
        partners: [
            {
                id: 1,
                logo: {
                    alternativeText: "Infosys logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/infosys.svg",
                },
            },
            {
                id: 2,
                logo: {
                    alternativeText: "Wipro logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/wipro.svg",
                },
            },
            {
                id: 3,
                logo: {
                    alternativeText: "NVIDIA logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/nvidia.svg",
                },
            },
            {
                id: 4,
                logo: {
                    alternativeText: "Accenture logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/accenture.svg",
                },
            },
            {
                id: 5,
                logo: {
                    alternativeText: "Zoho logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/zoho.svg",
                },
            },
            {
                id: 6,
                logo: {
                    alternativeText: "Tata Consultancy Services logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/tcs.svg",
                },
            },
            {
                id: 7,
                logo: {
                    alternativeText: "EY logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/ey.svg",
                },
            },
            {
                id: 8,
                logo: {
                    alternativeText: "NatWest Group logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/natwest.svg",
                },
            },
            {
                id: 9,
                logo: {
                    alternativeText: "KPMG logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/kpmg.svg",
                },
            },
            {
                id: 10,
                logo: {
                    alternativeText: "Amazon logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/amazon.svg",
                },
            },
            {
                id: 11,
                logo: {
                    alternativeText: "UST logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/ust.svg",
                },
            },
            {
                id: 12,
                logo: {
                    alternativeText: "TVS logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/tvs.svg",
                },
            },
        ],
    },
    placementReportsSection: {
        heading: "Placement Reports",
        description: "Our students continue to secure rewarding career opportunities with leading organizations across diverse industries. Through industry-oriented learning, practical exposure, internship",
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
            alternativeText: "Recruiter handing placement documents to a student during an interview",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/report-img.jpg",
        },
    }
}

const TAB = "placement-snapshot";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return schoolTabMetadata(slug, TAB);
}

export default async function Page({ params }) {
    const { slug } = await params;
    const { data, hero, hasDepartments } = await loadSchoolTabData(slug, TAB, local_data);

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={hasDepartments}>
            <AcademicCollaboration data={data.industryCollaborationsSection} />
            <AcademicPartners data={data.partnersSection} />
            <AcademicPlacementReport data={data.placementReportsSection} />
        </SchoolTabShell>
    );
}
