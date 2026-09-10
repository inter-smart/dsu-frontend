import InnerHero from "@/components/layout/common/InnerHero";
import DSUDEADC from "@/components/sections/why-us/DSU-DEADC";
import WhyusAQAR from "@/components/sections/why-us/Whyus-AQAR";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "AQAR Reports page title",
        metaDescription: "AQAR Reports page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "AQAR Reports",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/ugc/ugc-banner.jpg",
        },
        title: "AQAR Reports",
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
                label: "AQAR Reports",
                href: "/",
            },
        ],
    },

    aqarReportsSection: {
        heading: "AQAR Reports",
        description: "The Annual Quality Assurance Report (AQAR) is an annual report prepared by the IQAC and submitted to NAAC, documenting the university's quality initiatives, academic achievements, research, governance, and continuous improvement efforts for each academic year.",
        yearFilters: [
            {
                id: 1,
                label: "2023 - 2024",
                slug: "2023-2024",
                documents: [
                    {
                        id: 1,
                        label: "AQAR Reports 2023 -2024 (1)",
                        file: {
                            alternativeText: "AQAR Report 2023-2024 Part 1",
                            mime: "application/pdf",
                            url: "/documents/aqar-2023-2024-1.pdf",
                        },
                    },
                    {
                        id: 2,
                        label: "AQAR Reports 2023 -2024 (3)",
                        file: {
                            alternativeText: "AQAR Report 2023-2024 Part 3",
                            mime: "application/pdf",
                            url: "/documents/aqar-2023-2024-3.pdf",
                        },
                    },
                ],
            },
            {
                id: 2,
                label: "2022-2023",
                slug: "2022-2023",
                documents: [],
            },
            {
                id: 3,
                label: "2021-2022",
                slug: "2021-2022",
                documents: [],
            },
        ],
    }

};
export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <WhyusAQAR data={local_data.aqarReportsSection }/>
    </>
    );
}
