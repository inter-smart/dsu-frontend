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

    innovationEcosystem: {
        heading: "An Integrated Innovation Ecosystem",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Great ideas move forward when the right capabilities come together. At DSU, AI, engineering, applied research and specialist facilities connect to help turn ambitious thinking into real-world solutions.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our ecosystem brings students, researchers, startups and industry partners together to design, build, test and advance solutions across disciplines.",
                    },
                ],
            },
        ],
        images: [
            {
                id: 1,
                alternativeText: "Students working with a robotic arm in the lab",
                url: "/images/center-of-excellence/eco-1.jpg",
            },
            {
                id: 2,
                alternativeText: "Humanoid robot in the innovation lab",
                url: "/images/center-of-excellence/eco-2.jpg",
            },
        ],
        stats: [
            { id: 1, end: 20, decimals: 0, unit: "", label: "NVIDIA DGX B200 Systems" },
            { id: 2, end: 160, decimals: 0, unit: "", label: "Blackwell GPUs" },
            { id: 3, end: 28.8, decimals: 1, unit: "TB", label: "HBM3e GPU Memory" },
            { id: 4, end: 7, decimals: 0, unit: "", label: "Connected Capability Areas" },
        ],
    },
    exploreCentres: {
        heading: "Explore Our Centres",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Explore unique specialist spaces that foster collaboration and innovation. Discover the tools and resources you need to elevate your ideas and transform them into reality.",
                    },
                ],
            },
        ],
        centres: [
            {
                id: 1,
                prefix: "DSU Centre for",
                title: "NVIDIA AI Factory",
                link: "#!",
                isExternal: false,
                mediaType: "image",
                image: { alternativeText: "NVIDIA AI Factory", url: "/images/center-of-excellence/explore-1.jpg" },
                poweredBy: {
                    label: "Powered By",
                    logo: { alternativeText: "NVIDIA", url: "/images/center-of-excellence/nvidia.png" },
                },
            },
            {
                id: 2,
                prefix: "DSU Centre for",
                title: "Mechanical Makerspace",
                link: "#!",
                isExternal: false,
                mediaType: "image",
                image: { alternativeText: "Mechanical Makerspace", url: "/images/center-of-excellence/explore-2.jpg" },
            },
            {
                id: 3,
                prefix: "DSU Centre for",
                title: "AR, VR and XR",
                link: "#!",
                isExternal: false,
                mediaType: "image",
                image: { alternativeText: "AR, VR and XR", url: "/images/center-of-excellence/explore-3.jpg" },
            },
            {
                id: 4,
                prefix: "DSU Centre for",
                title: "AI Robotics",
                link: "#!",
                isExternal: false,
                mediaType: "image",
                image: { alternativeText: "AI Robotics", url: "/images/center-of-excellence/explore-4.jpg" },
            },
            {
                id: 5,
                prefix: "DSU Centre for",
                title: "Bosch Rexroth Centre of Excellence",
                link: "#!",
                isExternal: false,
                mediaType: "image",
                image: { alternativeText: "Bosch Rexroth Centre of Excellence", url: "/images/center-of-excellence/explore-5.jpg" },
            },
            {
                id: 6,
                prefix: "DSU Centre for",
                title: "Cybersecurity and Cyber Range Centre",
                link: "#!",
                isExternal: false,
                mediaType: "image",
                image: { alternativeText: "Cybersecurity and Cyber Range Centre", url: "/images/center-of-excellence/explore-6.jpg" },
            },
            {
                id: 7,
                prefix: "DSU Centre for",
                title: "Electronics Makerspace",
                link: "#!",
                isExternal: false,
                mediaType: "image",
                image: { alternativeText: "Electronics Makerspace", url: "/images/center-of-excellence/explore-7.jpg" },
            },
        ],
        highlight: {
            heading: "Seven Centres. Connected Possibilities",
            description: [
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "Artificial intelligence, along with state-of-the-art engineering and dedicated facilities, creates a dynamic environment that significantly boosts learning, propels research, and inspires innovative solutions to real-world challenges. This collaborative framework not only empowers students and researchers but also lays the groundwork for transformative advancements across diverse fields.",
                        },
                    ],
                },
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "By fostering teamwork and creativity, we can tackle complex issues and drive progress in ways that were previously unimaginable.",
                        },
                    ],
                },
            ],
        },
    },
    ideaToExecution: {
        heading: "From Idea to Execution",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The journey consists of seven distinct stages that unite our diverse capabilities. Each stage plays a crucial role in transforming innovative ideas into thoroughly tested and reliable solutions, ensuring that we not only create but also validate our concepts effectively.",
                    },
                ],
            },
        ],
        media: {
            mediaType: "image", // "image" or "video"
            image: {
                alternativeText: "Students and faculty working on a drone prototype",
                url: "/images/center-of-excellence/idea-to-execution.jpg", // also the poster when mediaType is "video"
            },
            // video: { mime: "video/mp4", url: "/videos/idea-to-execution.mp4" },
        },
        steps: [
            { id: 1, title: "Define", description: "Identify the problem and objectives." },
            { id: 2, title: "Design", description: "Develop concepts, models and simulations." },
            { id: 3, title: "Build", description: "Fabricate physical or virtual prototypes." },
            { id: 4, title: "Develop Intelligence", description: "Apply AI and computing." },
            { id: 5, title: "Integrate", description: "Connect systems, devices and technologies." },
            { id: 6, title: "Validate & Secure", description: "Test performance and security." },
            { id: 7, title: "Demonstrate & Advance", description: "Present solutions and plan the next stage." },
        ],
    },
    ideaToExecution: {
        heading: "From Idea to Execution",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The journey consists of seven distinct stages that unite our diverse capabilities. Each stage plays a crucial role in transforming innovative ideas into thoroughly tested and reliable solutions, ensuring that we not only create but also validate our concepts effectively.",
                    },
                ],
            },
        ],
        media: {
            mediaType: "image",
            image: {
                alternativeText: "Students and faculty working on a drone prototype",
                url: "/images/center-of-excellence/execution.jpg",
            },
        },
        steps: [
            { id: 1, title: "Define", description: "Identify the problem and objectives." },
            { id: 2, title: "Design", description: "Develop concepts, models and simulations." },
            { id: 3, title: "Build", description: "Fabricate physical or virtual prototypes." },
            { id: 4, title: "Develop Intelligence", description: "Apply AI and computing." },
            { id: 5, title: "Integrate", description: "Connect systems, devices and technologies." },
            { id: 6, title: "Validate & Secure", description: "Test performance and security." },
            { id: 7, title: "Demonstrate & Advance", description: "Present solutions and plan the next stage." },
        ],
    },
    whoCanEngage: {
        heading: "Who Can Engage?",
        subheading: "Real projects with real impact, using real technology",
        items: [
            {
                id: 1,
                // option A: icon as an image (SVG or PNG), used when iconImage is present
                iconImage: {
                    alternativeText: "Graduation cap",
                    url: "/images/center-of-excellence/icon_engage-1.svg",
                },
                title: "Students",
                description: "Hands-on learning and projects.",
                link: "#!",
                isExternal: false,
                mediaType: "image",
                image: { alternativeText: "Students", url: "/images/center-of-excellence/engage-1.jpg" },
            },
            {
                id: 2,
                // option B: lucide icon by name (graduation, flask, rocket, factory, users)
                iconImage: {
                    alternativeText: "Graduation cap",
                    url: "/images/center-of-excellence/icon_engage-2.svg",
                },
                title: "Researchers",
                description: "Interdisciplinary research & sponsored programmes.",
                link: "#!",
                isExternal: false,
                mediaType: "image",
                image: { alternativeText: "Researchers", url: "/images/center-of-excellence/engage-2.jpg" },
            },
            {
                id: 3,
                // keep the icon's own colours instead of turning it white
                iconImage: {
                    alternativeText: "Rocket",
                    url: "/images/center-of-excellence/icon_engage-3.svg",
                },
                iconKeepColor: true,
                title: "Startups",
                description: "Prototyping and product development.",
                link: "#!",
                isExternal: false,
                mediaType: "image",
                image: { alternativeText: "Startups", url: "/images/center-of-excellence/engage-3.jpg" },
            },
            {
                id: 4,
                iconImage: {
                    alternativeText: "Factory",
                    url: "/images/center-of-excellence/icon_engage-4.svg",
                },
                title: "Industry",
                description: "Proofs of concept, training & collaborative projects.",
                link: "#!",
                isExternal: false,
                mediaType: "image",
                image: { alternativeText: "Industry", url: "/images/center-of-excellence/engage-4.jpg" },
            },
        ],
    },
    takeIdeasForward: {
        heading: "Take Your Ideas Forward",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Explore how DSU’s connected capabilities can support your next project, research initiative or collaboration.",
                    },
                ],
            },
        ],
        buttons: [
            {
                id: 1,
                label: "Discuss a Project",
                link: "#!",
                isExternal: false,
                variant: "primary", // filled gradient
            },
            {
                id: 2,
                label: "Request a Guided Visit",
                link: "#!",
                isExternal: false,
                variant: "outline", // outlined, fills on hover
                // iconImage: { url: "/images/icons/dots.svg" }, // optional: replaces the built-in dots icon
            },
        ],
    },
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <HomeHeroSlider data={local_data.heroSlider} />
            <InnovationEcosystem data={local_data.innovationEcosystem} />
            <ExploreCentres data={local_data.exploreCentres} />
            <IdeaToExecution data={local_data.ideaToExecution} />
            <WhoCanEngage data={local_data.whoCanEngage} />
            <TakeIdeasForward data={local_data.takeIdeasForward} />
        </>
    );
}