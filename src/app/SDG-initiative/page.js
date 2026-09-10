import InnerHero from "@/components/layout/common/InnerHero"; 
import SdgIntroduction from "@/components/sections/SDG/SdgInroduction";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "SDG Initiatives page title",
        metaDescription: "SDG Initiatives page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "SDG Initiatives",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/ugc/ugc-banner.jpg",
        },
        title: "SDG Initiatives",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "About",
                href: "/why-dsu",
            },
            {
                label: "Institutional Framework",
                href: "/",
            },
            {
                label: "SDG Initiatives",
                href: "/",
            },
        ],
    },
    sdgIntroductionSection: {
        heading: "SDG Introduction",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "At Dayananda Sagar University (DSU), sustainability is embedded in our vision of creating responsible global citizens through education, innovation, and community engagement. Guided by the United Nations Sustainable Development Goals (SDGs), the University integrates sustainable practices into teaching, research, campus operations, and outreach initiatives. By fostering interdisciplinary collaboration and encouraging innovative solutions, DSU prepares students to address global challenges while contributing to a more inclusive, equitable, and sustainable future.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "At Dayananda Sagar University (DSU), sustainability is embedded in our vision of creating responsible global citizens through education, innovation, and community engagement. Guided by the United Nations Sustainable Development Goals (SDGs), the University integrates sustainable practices into teaching, research, campus operations, and outreach initiatives. By fostering interdisciplinary collaboration and encouraging innovative solutions, DSU prepares students to address global challenges while contributing to a more inclusive, equitable, and sustainable future.",
                    },
                ],
            },
        ],
        media: {
            alternativeText: "United Nations Sustainable Development Goals logo",
            mime: "image/png",
            // if video - mime: "video/mp4",
            url: "/images/sdg-logo.png",
        },
        goals: [
            {
                image: {
                    alternativeText: "Goal 1: No Poverty",
                    mime: "image/jpg",
                    url: "/images/sdg-1.jpg",
                }, 
            },
            {
                image: {
                    alternativeText: "Goal 2: Zero Hunger",
                    mime: "image/jpg",
                    url: "/images/sdg-2.jpg",
                }, 
            },
            {
                image: {
                    alternativeText: "Goal 3: Good Health and Well-being",
                    mime: "image/jpg",
                    url: "/images/sdg-3.jpg",
                }, 
            },
            {
                image: {
                    alternativeText: "Goal 4: Quality Education",
                    mime: "image/jpg",
                    url: "/images/sdg-4.jpg",
                }, 
            },
            {
                image: {
                    alternativeText: "Goal 5: Gender Equality",
                    mime: "image/jpg",
                    url: "/images/sdg-5.jpg",
                }, 
            },
            {
                image: {
                    alternativeText: "Goal 6: Clean Water and Sanitation",
                    mime: "image/jpg",
                    url: "/images/sdg-6.jpg",
                }, 
            },
            {
                image: {
                    alternativeText: "Goal 7: Affordable and Clean Energy",
                    mime: "image/jpg",
                    url: "/images/sdg-7.jpg",
                }, 
            },
            {
                image: {
                    alternativeText: "Goal 8: Decent Work and Economic Growth",
                    mime: "image/jpg",
                    url: "/images/sdg-8.jpg",
                }, 
            },
            {
                image: {
                    alternativeText: "Goal 9: Industry, Innovation and Infrastructure",
                    mime: "image/jpg",
                    url: "/images/sdg-9.jpg",
                }, 
            },
            {
                image: {
                    alternativeText: "Goal 10: Reduced Inequalities",
                    mime: "image/jpg",
                    url: "/images/sdg-10.jpg",
                }, 
            },
            {
                image: {
                    alternativeText: "Goal 11: Sustainable Cities and Communities",
                    mime: "image/jpg",
                    url: "/images/sdg-11.jpg",
                }, 
            },
            {
                image: {
                    alternativeText: "Goal 12: Responsible Consumption and Production",
                    mime: "image/jpg",
                    url: "/images/sdg-12.jpg",
                }, 
            },
            {

                image: {
                    alternativeText: "Goal 13: Climate Action",
                    mime: "image/jpg",
                    url: "/images/sdg-13.jpg",
                }, 
            },
            {

                image: {
                    alternativeText: "Goal 14: Life Below Water",
                    mime: "image/jpg",
                    url: "/images/sdg-14.jpg",
                }, 
            },
            {

                image: {
                    alternativeText: "Goal 15: Life on Land",
                    mime: "image/jpg",
                    url: "/images/sdg-15.jpg",
                }, 
            },
            {
                image: {
                    alternativeText: "Goal 16: Peace, Justice and Strong Institutions",
                    mime: "image/jpg",
                    url: "/images/sdg-16.jpg",
                }, 
            },
            {
                image: {
                    alternativeText: "Goal 17: Partnerships for the Goals",
                    mime: "image/jpg",
                    url: "/images/sdg-17.jpg",
                }, 
            },
        ],
    }

};
export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <SdgIntroduction data={local_data.sdgIntroductionSection} />
        </>
    );
}
