import AIApplications from "@/components/sections/center-of-excellence/AIApplications";
import AIBenefits from "@/components/sections/center-of-excellence/AIBenefits";
import AICentres from "@/components/sections/center-of-excellence/AICentres";
import AICta from "@/components/sections/center-of-excellence/AICta";
import AIEngagement from "@/components/sections/center-of-excellence/AIEngagement";
import AIEnvironments from "@/components/sections/center-of-excellence/AIEnvironments";
import AIFactoryShowcase from "@/components/sections/center-of-excellence/AIFactoryShowcase";
import AIGallery from "@/components/sections/center-of-excellence/AIGallery";
import AIInnovation from "@/components/sections/center-of-excellence/AIInnovation";
import AIOffer from "@/components/sections/center-of-excellence/AIOffer";
import AIZones from "@/components/sections/center-of-excellence/AIZones";
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

    environments: {
        heading: "Two Connected Environments.\nOne AI Development Pathway.",
        description:
            "Specialist project-facing space and accelerated computing infrastructure support the journey from idea to demonstrable application.",
        items: [
            {
                id: 1,
                imagePosition: "left",
                title: "AI Makerspace",
                description:
                    "Project-facing environment for problem framing, data exploration, application development and model evaluation. Teams work on language, vision, analytics, multimodal systems and AI-enabled engineering applications.",
                bullets: [
                    "Clear Problem Definition",
                    "Measurable Baselines",
                    "Documented Experiments",
                    "Demonstrable Applications",
                ],
                image: {
                    alternativeText: "AI Makerspace meeting room with the NVIDIA Centre for AI & HPC signage",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/pathway-1.jpg",
                },
            },
            {
                id: 2,
                imagePosition: "right",
                title: "AI Data Centre",
                description:
                    "Accelerated computing for demanding training, fine-tuning, inference, simulation and data science, with high-speed interconnects supporting suitable distributed workloads.",
                bullets: [
                    "20 NVIDIA DGX B200 Systems",
                    "CUDA, PyTorch And TensorFlow",
                    "RAPIDS And TensorRT Workflows",
                    "Distributed AI Workloads",
                ],
                image: {
                    alternativeText: "AI Data Centre racks with NVIDIA DGX B200 systems",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/pathway-2.jpg",
                },
            },
        ],
    },

    applications: {
        heading: "AI Application Areas For\nPractical Challenges Across Sectors.",
        description:
            "Explore representative applications spanning enterprise, industry, robotics and interdisciplinary research.",
        items: [
            {
                id: 1,
                title: "Enterprise Knowledge Systems",
                description:
                    "Assistants that retrieve approved organisational information with traceable outputs.",
            },
            {
                id: 2,
                title: "Visual Quality Inspection",
                description:
                    "Computer vision for defect detection, classification and production support.",
            },
            {
                id: 3,
                title: "Predictive Maintenance",
                description:
                    "Equipment signal analysis for abnormal behaviour and maintenance decisions.",
            },
            {
                id: 4,
                title: "Robotics & Autonomous Systems",
                description:
                    "Perception, language and planning models for robots and mobility platforms.",
            },
            {
                id: 5,
                title: "Domain Research",
                description:
                    "Engineering, healthcare, education, science and public-interest AI experiments.",
            },
        ],
    },

    benefits: {
        heading: "How Students And\nResearchers Benefit",
        description:
            "Explore representative applications spanning enterprise, industry, robotics and interdisciplinary research.",
        items: [
            {
                id: 1,
                open: true,
                title: "How Students & Researchers Benefit",
                description:
                    "Learners gain experience in problem framing, data preparation, GPU programming, model evaluation, inference, responsible AI and technical documentation. Projects can contribute to portfolios, research papers, capstones and startup development.",
            },
            {
                id: 2,
                open: true,
                title: "How Industry & Startups Can Engage",
                description:
                    "Partners can engage through AI feasibility studies, proofs of concept, sponsored research, model development, technical training and scoped access to accelerated computing.",
            },
            {
                id: 3,
                open: true,
                title: "Connected Capability Across DSU",
                description:
                    "A model developed in the AI Factory can be integrated with electronics, deployed on a robot, visualised through XR, connected to an industrial system and evaluated for cybersecurity. This connection turns AI development into complete system innovation.",
            },
        ],
    },

    zones: {
        heading: "Mechanical Makerspace\nZones & Infrastructure",
        description:
            "Explore representative applications spanning enterprise, industry, robotics and interdisciplinary research.",
        items: [
            {
                id: 1,
                title: "Design & Ideation Zone",
                description:
                    "Product definition, CAD modelling, assemblies, engineering drawings and preparation of manufacturable files.",
            },
            {
                id: 2,
                title: "Digital Fabrication & PCB Prototyping Zone",
                description:
                    "Laser cutting, CNC routing, vinyl cutting and prototype PCB machining for panels, enclosures, profiles and circuit boards.",
            },
            {
                id: 3,
                title: "Assembly Test & Validation Zone",
                description:
                    "Electro-mechanical integration, fit checks, functional trials, prototype evaluation and design refinement.",
            },
            {
                id: 4,
                title: "Workshop & Machining Zone",
                description:
                    "Supervised cutting, drilling, turning, shaping and surface preparation for prototype parts and assemblies.",
            },
            {
                id: 5,
                title: "Product Finishing & Creative Fabrication Zone",
                description:
                    "Heat-transfer, textile work, graphics and product-facing prototype elements.",
            },
        ],
    },

    centres: {
        heading: "Connected Centres.\nOne Innovation Ecosystem.",
        description:
            "A model developed in the AI Factory can be integrated with electronics, deployed on a robot, visualised through XR, connected to an industrial system and evaluated for cybersecurity.",
        items: [
            {
                id: 1,
                prefix: "DSU Centre for",
                title: "Mechanical Makerspace",
                link: "/centres-of-excellence/mechanical-makerspace",
                isExternal: false,
                image: {
                    alternativeText: "CNC routing machine in the Mechanical Makerspace",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/explore-2.jpg",
                },
            },
            {
                id: 2,
                prefix: "DSU Centre for",
                title: "AR, VR and XR",
                link: "/centres-of-excellence/ar-vr-xr",
                isExternal: false,
                image: {
                    alternativeText: "Student using a VR headset",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/explore-3.jpg",
                },
            },
            {
                id: 3,
                prefix: "DSU Centre for",
                title: "AI Robotics",
                link: "/centres-of-excellence/ai-robotics",
                isExternal: false,
                image: {
                    alternativeText: "Humanoid robot standing in the AI Robotics lab",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/explore-4.jpg",
                },
            },
            {
                id: 4,
                prefix: "DSU Centre for",
                title: "Bosch Rexroth Centre of Excellence",
                link: "/centres-of-excellence/bosch-rexroth",
                isExternal: false,
                image: {
                    alternativeText: "Students working on an industrial automation rig",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/explore-5.jpg",
                },
            },
            {
                id: 5,
                prefix: "DSU Centre for",
                title: "Cybersecurity and Cyber Range Centre",
                link: "/centres-of-excellence/cyber-range",
                isExternal: false,
                image: {
                    alternativeText: "Cyber range operations room with a large display wall",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/explore-6.jpg",
                },
            },
            {
                id: 6,
                prefix: "DSU Centre for",
                title: "Electronics Makerspace",
                link: "/centres-of-excellence/electronics-makerspace",
                isExternal: false,
                image: {
                    alternativeText: "Student working with a robotic arm in the Electronics Makerspace",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/explore-7.jpg",
                },
            },
        ],
    },

    engagement: {
        heading: "Engagement Pathways",
        maxHeight: 320, // px, height of the scroll box
        columns: ["Pathway", "What Partners Can Do"],
        rows: [
            {
                id: 1,
                pathway: "Bench and instrument access",
                description:
                    "Use specialised instrumentation and fabrication equipment for defined development and testing work.",
            },
            {
                id: 2,
                pathway: "Product development",
                description:
                    "Progress from circuit and component selection through PCB fabrication, assembly and bench validation.",
            },
            {
                id: 3,
                pathway: "Technical advisory",
                description:
                    "Obtain faculty-led support for design review, component selection, design for manufacturing and early product development.",
            },
            {
                id: 4,
                pathway: "Testing and validation",
                description:
                    "Evaluate circuits, embedded systems, RF behaviour, sensors and prototype hardware using relevant instruments.",
            },
            {
                id: 5,
                pathway: "Corporate training",
                description:
                    "Build capability in embedded systems, edge AI, automotive networking, instrumentation and related electronics domains.",
            },
            {
                id: 6,
                pathway: "Talent and cohort programmes",
                description:
                    "Upskill students and professionals using the same platforms and equipment used for applied projects.",
            },
        ],
    },

    gallery: {
        heading: "Gallery",
        items: [
            {
                id: 1,
                image: {
                    alternativeText: "AI Data Centre racks with cooling units",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/gallery-1.jpg",
                },
            },
            {
                id: 2,
                image: {
                    alternativeText: "NVIDIA logo on a perforated metal panel",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/gallery-2.jpg",
                },
            },
            {
                id: 3,
                image: {
                    alternativeText: "AI Data Centre aisle with overhead cabling",
                    mime: "image/jpeg",
                    url: "/images/center-of-excellence/gallery-3.jpg",
                },
            }, 
        ],
    },

    cta: {
        eyebrow: "LET'S COLLABORATE",
        heading: "Have An Idea Worth Advancing?",
        description:
            "Connect with DSU to discuss a project, explore facilities or propose a research and industry collaboration.",
        image: {
            alternativeText: "DSU campus building at dusk",
            mime: "image/jpeg",
            url: "/images/center-of-excellence/ctaBanner.jpg",
        },
        button: { label: "Discuss a Project", link: "/contact", isExternal: false },
        secondaryButton: { label: "Propose Collaboration", link: "/contact", isExternal: false },
    },
};

export default function page() {
    return (
        <>
            <HomeHeroSlider data={local_data.heroSlider} />
            <AIFactoryShowcase data={local_data.showcase} />
            <AIInnovation data={local_data.innovation} />
            <AIOffer data={local_data.offer} />
            <AIEnvironments data={local_data.environments} />
            <AIApplications data={local_data.applications} />
            <AIBenefits data={local_data.benefits} />
            <AIZones data={local_data.zones} />
            <AICentres data={local_data.centres} />
            <AIEngagement data={local_data.engagement} />
            <AIGallery data={local_data.gallery} />
            <AICta data={local_data.cta} />
        </>
    );
}