import InnerHero from "@/components/layout/common/InnerHero"; 
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar"; 

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Placement  page title",
        metaDescription: "Placement  page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Placement  page title",
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
                label: "Placement ",
                href: "/",
            },
            {
                label: "Corporate Connect ",
                href: "/",
            },
        ],
        PlacementmenuBar: true
    },
   
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <PlacementmenuBar className="lg:!hidden block" /> 

        </>
    )
}
