import AIFactoryShowcase from "@/components/sections/center-of-excellence/AIFactoryShowcase";
import AIInnovation from "@/components/sections/center-of-excellence/AIInnovation";
import AIOffer from "@/components/sections/center-of-excellence/AIOffer";
import HomeHeroSlider from "@/components/sections/center-of-excellence/HomeHeroSlider";

const local_data = {
    heroSlider: {
        autoplayDelay: 5000,
        showPagination: false,
        slides: [
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
                button: { label: "Discuss an AI Project", link: "/centres-of-excellence", isExternal: false },
                secondaryButton: { label: "Explore the Facilities", link: "/facilities", isExternal: false },
            },
        ],
    },

    showcase: {
        title: "Where Ambitious AI Ideas Become Real-world Solutions.",
        description:
            "The DSU AI Factory combines an application-focused AI Makerspace with a high-performance AI Data Centre built around 20 NVIDIA DGX B200 systems. The environment enables students, researchers, startups and industry teams to move from an AI idea to an evaluated model, integrated prototype or scoped proof of concept.",
        autoplayDelay: 0, // ms, 0 = off
        showArrows: true,
        showPagination: true,
        slides: [
            {
                id: 1,
                size: "wide",
                caption: null,
                image: {
                    alternativeText: "NVIDIA Centre for Artificial Intelligence & High Performance Computing signage",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/ambition-1.jpg",
                },
            },
            {
                id: 2,
                size: "narrow",
                caption: null,
                image: {
                    alternativeText: "AI Data Centre aisle with NVIDIA DGX B200 racks",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/ambition-2.jpg",
                },
            },
        ],
    },

    innovation: {
        heading: "Powering the Next\nGeneration of AI Innovation.",
        description:
            "Accelerated computing infrastructure and a project-focused development environment, connected within the wider DSU innovation ecosystem.",
        stats: [
            { id: 1, value: "20", unit: "", label: "NVIDIA DGX B200 Systems" },
            { id: 2, value: "160", unit: "", label: "NVIDIA Blackwell GPUs" },
            { id: 3, value: "28.8", unit: "TB", label: "Total HBM3e GPU memory" },
            { id: 4, value: "1.44", unit: "exaFLOPS", label: "Sparse FP8 AI performance" },
            { id: 5, value: "2", unit: "", label: "Connected Environments,\nAI Makerspace and AI Data Centre" },
        ],
        processHeading: "From Concept To Creation",
        processDescription:
            "Explore representative applications spanning enterprise, industry, robotics and interdisciplinary research.",
        steps: [
            {
                id: 1,
                title: "Ideate",
                description: "Define the user need, engineering problem, constraints and success criteria.",
            },
            {
                id: 2,
                title: "Design",
                description: "Create CAD models, assemblies, drawings and the fabrication plan.",
            },
            {
                id: 3,
                title: "Fabricate",
                description: "Use additive manufacturing, laser cutting, CNC routing, machining or creative processes.",
            },
            {
                id: 4,
                title: "Assemble",
                description: "Integrate fabricated parts, electronics, fasteners and electro-mechanical interfaces.",
            },
            {
                id: 5,
                title: "Test & Validate",
                description: "Evaluate fit, function, usability and performance, then refine the design.",
            },
            {
                id: 6,
                title: "Innovate",
                description:
                    "Advance the prototype towards research, competition, industry demonstration or startup development.",
            },
        ],
    },

    offer: {
        heading: "What We Offer",
        description:
            "From problem framing and data exploration to model evaluation, optimisation and integration with real-world systems.",
        items: [
            {
                id: 1,
                title: "Generative AI & Language Systems",
                description:
                    "Domain assistants, retrieval-augmented generation, multilingual applications, multimodal models and AI agents.",
            },
            {
                id: 2,
                title: "Computer Vision",
                description:
                    "Image and video analysis for inspection, recognition, monitoring, automation and scientific applications.",
            },
            {
                id: 3,
                title: "Data Science & Intelligent Analytics",
                description:
                    "Forecasting, anomaly detection, optimisation and decision-support workflows.",
            },
            {
                id: 4,
                title: "Model Development & Evaluation",
                description:
                    "Data preparation, baselines, training or fine-tuning, benchmarking and inference optimisation.",
            },
            {
                id: 5,
                title: "GPU-Accelerated Research",
                description:
                    "AI, simulation, scientific computing and large-scale data processing workloads.",
            },
            {
                id: 6,
                title: "AI Engineering & Integration",
                description:
                    "Connect models with embedded devices, robots, industrial systems, immersive applications and enterprise workflows.",
            },
        ],
    },
};

export default function page() {
    return (
        <>
            <HomeHeroSlider data={local_data.heroSlider} />
            <AIFactoryShowcase data={local_data.showcase} />
            <AIInnovation data={local_data.innovation} />
            <AIOffer data={local_data.offer} />
        </>
    );
}