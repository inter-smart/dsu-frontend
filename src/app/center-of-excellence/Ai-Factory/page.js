import InnerHero from "@/components/layout/common/InnerHero";
import ExploreCentres from "@/components/sections/center-of-excellence/ExploreCentres";
import HomeHeroSlider from "@/components/sections/center-of-excellence/HomeHeroSlider";
import IdeaToExecution from "@/components/sections/center-of-excellence/IdeaToExecution";
import InnovationEcosystem from "@/components/sections/center-of-excellence/InnovationEcosystem";
import TakeIdeasForward from "@/components/sections/center-of-excellence/TakeIdeasForward";
import WhoCanEngage from "@/components/sections/center-of-excellence/WhoCanEngage";

const local_data = {
    heroSlider: {
        autoplayDelay: 5000, // for image slides (ms)
        showPagination: false,
        slides: [
            // 1) IMAGE slide
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

            // 2) UPLOADED VIDEO slide (moves on when the video ends, or after `duration` seconds if set)
            {
                id: 2,
                mediaType: "video",
                title: "Life at DSU",
                description: "Sample text: replace with your video slide description.",
                image: {
                    alternativeText: "Campus video poster",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/banner-1.jpg", // optional poster shown while the video loads
                },
                video: {
                    mime: "video/mp4",
                    url: "/videos/home-hero.mp4",
                },
                duration: null, // optional, in seconds
                button: { label: "Take a Virtual Tour", link: "/virtual-tour", isExternal: false },
            },

            // 3) YOUTUBE slide (any youtube link works: watch?v=, youtu.be/, embed/, shorts/)
            {
                id: 3,
                mediaType: "youtube",
                title: "Admissions Open",
                description: "Sample text: replace with your YouTube slide description.",
                image: {
                    alternativeText: "Admissions poster",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/banner-1.jpg", // optional poster
                },
                youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                duration: 15, // seconds this slide stays on screen
                button: { label: "Apply Now", link: "/admissions", isExternal: false },
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