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
        metaTitle: "Women Redressal Cell page title",
        metaDescription: "Women Redressal Cell page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Women Redressal Cell",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/ugc/ugc-banner.jpg",
        },
        title: "Women Redressal Cell",
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
                label: "Women Redressal Cell",
                href: "/",
            },
        ],
    },
}
export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} /> 
        </>
    )
}
