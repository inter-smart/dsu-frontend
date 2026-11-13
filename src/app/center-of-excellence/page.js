import InnerHero from "@/components/layout/common/InnerHero"; 


export const local_data = {
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Industry Collaborations page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "Doctoral Research",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "Research & innovations",
                href: "/",
            },
            {
                label: "Doctoral Research",
                href: "/",
            },

        ],
    },
    
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} /> 
        </>
    )
}
