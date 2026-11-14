import InnerHero from "@/components/layout/common/InnerHero"; 

const local_data = {
    heroSlider: {
        autoplayDelay: 5000,  
        showPagination: false,
        slides: [ 
            {
                id: 1,
                mediaType: "image",
                title: "DSU AI Factory & Centres of Excellence",
                description:
                    "Advanced computing and connected engineering capabilities from idea to execution.",
                image: {
                    alternativeText: "Centre for Artificial Intelligence & High Performance Computing",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/banner-1.jpg",
                },
                mobileImage: null,
                button: { label: "Explore Our Centres", link: "/centres-of-excellence", isExternal: false },
            },             
        ],
    },

    
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} /> 
        </>
    );
}