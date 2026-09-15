import InnerHero from "@/components/layout/common/InnerHero";
import IQACReport from "@/components/sections/why-us/IQAC-reports";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Reports page title",
        metaDescription: "Reports page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Reports",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/ugc/ugc-banner.jpg",
        },
        title: "Reports",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "Why DSU",
                href: "/why-dsu",
            },
            {
                label: "Excellence & Quality Assurance",
                href: "/",
            },
            {
                label: "IQAC",
                href: "/",
            },
            {
                label: "Reports",
                href: "/",
            },
        ],
    },
    reportsSection: {
        heading: "Reports",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The Internal Quality Assurance Cell (IQAC) at Dayananda Sagar University maintains comprehensive reports and records that reflect the University's commitment to academic excellence, quality assurance, and continuous institutional improvement. Browse and download reports organized by academic year for easy access to quality-related documentation.",
                    },
                ],
            },
        ],
        academicYears: [
            {
                id: 1,
                year: "2025-2026",
             
            },
            {
                id: 2,
                year: "2024-2025", 
                reports: [
                    {
                        id: 1,
                        title: "AQAR Report",
                        file: {
                            alternativeText: "AQAR Report 2024-2025",
                            mime: "application/pdf",
                            url: "/documents/reports/2024-2025/aqar-report.pdf",
                        },
                    },
                    {
                        id: 2,
                        title: "IQAC Annual Report",
                        file: {
                            alternativeText: "IQAC Annual Report 2024-2025",
                            mime: "application/pdf",
                            url: "/documents/reports/2024-2025/iqac-annual-report.pdf",
                        },
                    },
                    {
                        id: 3,
                        title: "IQAC Minutes Meeting",
                        file: {
                            alternativeText: "IQAC Minutes Meeting 2024-2025",
                            mime: "application/pdf",
                            url: "/documents/reports/2024-2025/iqac-minutes-meeting.pdf",
                        },
                    },
                    {
                        id: 4,
                        title: "Action taken Report",
                        file: {
                            alternativeText: "Action taken Report 2024-2025",
                            mime: "application/pdf",
                            url: "/documents/reports/2024-2025/action-taken-report.pdf",
                        },
                    },
                    {
                        id: 5,
                        title: "Feedback Analysis Report",
                        file: {
                            alternativeText: "Feedback Analysis Report 2024-2025",
                            mime: "application/pdf",
                            url: "/documents/reports/2024-2025/feedback-analysis-report.pdf",
                        },
                    },
                ],
            },
            { id: 3, year: "2023-2024",  },
            { id: 4, year: "2022-2023", },
            { id: 5, year: "2021-2022", },
            { id: 6, year: "2020-2021", },
            { id: 7, year: "2019-2020", },
            { id: 8, year: "2018-2019", },
            { id: 9, year: "2017-2018", },
            { id: 10, year: "2016-2017", },
        ],
    },
}
export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <IQACReport data={local_data.reportsSection} />
        </>
    );
}
