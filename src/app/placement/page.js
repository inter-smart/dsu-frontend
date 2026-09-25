import InnerHero from "@/components/layout/common/InnerHero";
import PlacementOverview from "@/components/sections/placements/overview";   
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar"; 

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Overview page title",
        metaDescription: "Overview page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Overview page title",
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
                label: "Overview",
                href: "/",
            },
        ],
        AimenuBar: true
    },
    programOverviewSection: {
        eyebrow: "OVERVIEW",
        heading: "Training and Placement",
        intro: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The Training and Placement Cell believes in nurturing not just academic excellence but also holistic development that prepares students for the dynamic demands of the professional world. The Placement and Training Cell is a vital part of our vision, working to ensure that every student receives the guidance, exposure, and support necessary to secure a fulfilling and successful career. ",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The Placement & Training Cell serves as a bridge between academia and industry, equipping students with the right skills and knowledge through a comprehensive approach. From Technical Training to Soft Skills development, we focus on making students industry-ready, empowering them to excel in competitive job markets. With an impressive track record of high-profile placements and strong industry partnerships, we ensure that students have access to a wide array of career opportunities.",
                    },
                ],
            },
        ],
        media: [
            {
                alternativeText: "Students collaborating in a modern computer lab with laptops",
                mime: "image/jpg",
                // if video - mime: "video/mp4",
                url: "/images/placement-overview.jpg",
            },
        ],
    }
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiAcademicMenubar className="lg:!hidden block" />
            <PlacementOverview data={local_data.programOverviewSection} />

        </>
    )
}

