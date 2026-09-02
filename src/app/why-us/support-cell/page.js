import InnerHero from "@/components/layout/common/InnerHero" 
import DSUCell from "@/components/sections/why-us/DSU-Cell"


const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Dsu Cell page title",
        metaDescription: "Dsu Cell page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "DSU Cell",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/ugc/ugc-banner.jpg", 
        },
        title: "Cell",
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
                label: "Student Support & Welfare",
                href: "/",
            },
            {
                label: "Cell",
                href: "/",
            },
        ],
    },
    dsuActSection: {
        heading: "Cell",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "DSU’s institutional cells serve as dedicated platforms that support student welfare, academic excellence, innovation, entrepreneurship, social responsibility, and campus inclusivity. These cells work collaboratively to create a vibrant university ecosystem, empowering students with opportunities for personal growth, leadership development, skill enhancement, and meaningful community engagement beyond the classroom.",
                    },
                ],
            },
        ],
        points: [
            {
                id: 1,
                text: "Entrepreneurship Cell",
            },
            {
                id: 2,
                text: "Anti Ragging Cell",
            },
            {
                id: 3,
                text: "Equal Opportunity Cell",
            }, 
        ],
        
    }
}
export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <DSUCell data={local_data.dsuActSection}/>
        </>
    )
}
