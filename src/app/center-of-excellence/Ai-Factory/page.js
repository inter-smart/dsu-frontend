import HomeHeroSlider from "@/components/sections/center-of-excellence/HomeHeroSlider";

const local_data = {
    heroSlider: {
        autoplayDelay: 5000, // for image slides (ms)
        showPagination: false,
        slides: [
            // 1) IMAGE slide
            {
                id: 1,
                mediaType: "image",
                title: "AI Factory",
                description:
                    "Develop, evaluate and advance AI solutions using one of the most advanced academic AI computing environments in South Asia and the Global South.",
                image: {
                    alternativeText: "Centre for Artificial Intelligence & High Performance Computing",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/ai-factory.jpg",
                },
                mobileImage: null,
                // Primary button (filled)
                button: { label: "Discuss an AI Project", link: "/centres-of-excellence", isExternal: false },
                // Secondary button (outline). Optional: remove it and the slide shows only the primary.
                secondaryButton: { label: "Explore the Facilities", link: "/facilities", isExternal: false },
            },
        ],
    },
};

export default function page() {
    return (
        <>
            <HomeHeroSlider data={local_data.heroSlider} />
        </>
    );
}