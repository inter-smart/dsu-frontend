import ArchitectureSection from "@/components/sections/NVIDIA/architecture-section"
import BannerSection from "@/components/sections/NVIDIA/banner-section"
import JourneySection from "@/components/sections/NVIDIA/journey-section"
import StackSection from "@/components/sections/NVIDIA/stack-section"
import TechnologySection from "@/components/sections/NVIDIA/technology-section"
import AiTrainingSection from "@/components/sections/NVIDIA/ai-training-section"


const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "NVIDIA page title",
        metaDescription: "NVIDIA page description ",
        canonicalUrl: null,
    },
    heroBanner: {
        poweredBy: {
            label: "Powered By",
            logo: {
                alternativeText: "logo",
                mime: "image/jpg",
                // if video - mime: "video/mp4",
                url: "/images/nvidia-logo.png",
            },
        },
        heading: "The World is Building AI. We are Building the Factory.",
        subheading: "Invitation To Experience India's First AI-Native Research Ecosystem.",
        stats: [
            {
                value: "20 NVIDIA",
                label: "DGX B200 Nodes"
            },
            {
                value: "160",
                label: "GPUs"
            }
        ],
        cta: {
            text: "Explore the Stack",
            url: "/"
        },
        heroMedia: {
            alternativeText: "AI research ecosystem hero banner",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/nvidia-banner.jpg",
        },
    },
    technologySection: {
        heading: "The Technology Behind Your AI Future",
        subheading: "NVIDIA technology and DSU's world-class infrastructure empower every student to build, train, deploy and innovate.",
        media: {
            url: "/images/technology_img.jpg",
            alternativeText: "NVIDIA AI Software Stack and Hardware Architecture"
        },
        features: [
            {
                id: 1,
                title: "AI Infrastructure"
            },
            {
                id: 2,
                title: "High Performance Computing"
            },
            {
                id: 3,
                title: "NVIDIA GPUs"
            },
            {
                id: 4,
                title: "Learning Platform"
            },
            {
                id: 5,
                title: "Real-world Impact"
            }
        ]
    },
    ArchitectureSection: {
        heading: "DSU's NVIDIA AI Architecture",
        subheading: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "In a landmark collaboration with NVIDIA, DSU has built a production-grade AI Factory - giving students hands-on access to the infrastructure needed to develop and deploy large-scale AI systems across vision, language, and data-intensive applications.",
                    },
                ],
            },
        ],
        contentBlock: {
            heading: "What DSU Has Built",
            description: [
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "DSU's AI infrastructure represents a significant investment in creating a world-class environment where students, faculty, and researchers can work with the same technology used by leading AI companies globally. This isn't a classroom simulation—it's the real deal.",
                        },
                    ],
                },
            ],
            highlightBox: {
                title: "A Rare Distinction",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "This complete NVIDIA AI infrastructure stack is available at only a handful of elite institutions across India. DSU is proud to be among them—offering students access to world-class research and learning infrastructure that matches top universities globally.",
                            },
                        ],
                    },
                ],
            },
        },
        media: {
            alternativeText: "DSU AI Factory server room with staff and students reviewing data on interactive display",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/dsu-art.jpg",
        },
    },
    nvidiaAiStackSection: {
        sectionHeading: "The Complete NVIDIA AI Stack at DSU",
        media: {
            alternativeText: "Layered 3D render of NVIDIA AI stack chip architecture with glowing circuit layers",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/stack-dsu.png",
        },
        layers: [
            {
                layerNumber: "04",
                layerLabel: "Layer",
                title: "AI Applications",
                description: "Build real-world AI applications and solutions across various domains",
                points: [
                    [
                        { type: "text", text: "Natural Language Processing applications" },
                    ],
                    [
                        { type: "text", text: "Computer vision and autonomous systems" },
                    ],
                    [
                        { type: "text", text: "Healthcare and biomedical AI solutions" },
                    ],
                    [
                        { type: "text", text: "Enterprise AI systems and products" },
                    ],
                ],
            },
            {
                layerNumber: "03",
                layerLabel: "Layer",
                title: "AI & Deep Learning Frameworks",
                description: "Industry-standard frameworks optimized to run on NVIDIA GPUs",
                points: [
                    [
                        { type: "text", text: "PyTorch", medium: true },
                        { type: "text", text: " - Deep learning research and production" },
                    ],
                    [
                        { type: "text", text: "TensorFlow", medium: true },
                        { type: "text", text: " - Scalable machine learning" },
                    ],
                    [
                        { type: "text", text: "RAPIDS", medium: true },
                        { type: "text", text: " - GPU-accelerated data science" },
                    ],
                    [
                        { type: "text", text: "TensorRT", medium: true },
                        { type: "text", text: " - High-performance inference" },
                    ],
                ],
            },
            {
                layerNumber: "02",
                layerLabel: "Layer",
                title: "CUDA - The Parallel Computing Platform",
                description: "NVIDIA's core computing platform that enables massive parallel processing",
                points: [
                    [
                        { type: "text", text: "CUDA Cores", medium: true },
                        { type: "text", text: " - Thousands of processors working in parallel" },
                    ],
                    [
                        { type: "text", text: "cuDNN", medium: true },
                        { type: "text", text: " - Optimized neural network operations" },
                    ],
                    [
                        { type: "text", text: "CUTLASS", medium: true },
                        { type: "text", text: " - Fast matrix operations for deep learning" },
                    ],
                    [
                        { type: "text", text: "cuBLAS", medium: true },
                        { type: "text", text: " - GPU-accelerated linear algebra" },
                    ],
                ],
            },
            {
                layerNumber: "01",
                layerLabel: "Layer",
                title: "Hardware Foundation",
                description: "Enterprise-grade NVIDIA GPU infrastructure designed for AI acceleration",
                points: [
                    [
                        { type: "text", text: "DGX B200", medium: true },
                        { type: "text", text: " - Supercomputer for training massive models" },
                    ],
                    [
                        { type: "text", text: "Jetson Family", medium: true },
                        { type: "text", text: " - Edge AI devices for real-world deployment" },
                    ],
                    [
                        { type: "text", text: "GPU Workstations", medium: true },
                        { type: "text", text: " - High-performance individual development" },
                    ],
                    [
                        { type: "text", text: "NVLink", medium: true },
                        { type: "text", text: " - Ultra-fast GPU-to-GPU communication" },
                    ],
                ],
            },
        ],
        whyItMatters: {
            heading: "Why This Stack Matters",
            description: [
                {
                    type: "paragraph",
                    children: [
                        { type: "text", text: "This isn't just hardware. It's a complete, integrated ecosystem where every layer is optimized to work together. CUDA enables " },
                        { type: "text", text: "PyTorch", medium: true },
                        { type: "text", text: " to run at lightning speed on GPUs. " },
                        { type: "text", text: "TensorRT", medium: true },
                        { type: "text", text: " takes trained models and makes them 10X faster. Students experience this integration firsthand, understanding how real AI systems are built, deployed, and scaled in production environments. This is how " },
                        { type: "text", text: "Google, Meta, and OpenAI", medium: true },
                        { type: "text", text: " build their AI systems." },
                    ],
                },
            ],
        },
    },
    journey: {
        heading: "From Day One: Your Learning Journey",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Starting with fundamentals, building to mastery—with the same tools used by AI researchers and companies worldwide",
                    },
                ],
            },
        ],
        stages: [
            {
                id: 1,
                icon: {
                    alternativeText: "Code icon representing foundation stage",
                    mime: "image/svg+xml",
                    url: "/images/journey-1.svg",
                },
                label: "Semester 1:",
                title: "Foundation",
                points: [
                    { id: 1, label: "Learn Python and AI fundamentals on commodity hardware" },
                    { id: 2, label: "Explore popular frameworks like PyTorch and TensorFlow" },
                    { id: 3, label: "Work with small AI models and datasets" },
                ],
            },
            {
                id: 2,
                icon: {
                    alternativeText: "Rocket icon representing acceleration stage",
                    mime: "image/svg+xml",
                    url: "/images/journey-2.svg",
                },
                label: "Semester 2-3:",
                title: "Acceleration",
                points: [
                    { id: 1, label: "Access Jetson edge devices for real-world projects" },
                    { id: 2, label: "Learn GPU acceleration and CUDA basics" },
                    { id: 3, label: "Build autonomous systems and vision applications" },
                ],
            },
            {
                id: 3,
                icon: {
                    alternativeText: "Server stack icon representing mastery stage",
                    mime: "image/svg+xml",
                    url: "/images/journey-3.svg",
                },
                label: "Semester 4+:",
                title: "Mastery",
                points: [
                    { id: 1, label: "Work on DGX B200 for large-scale model training" },
                    { id: 2, label: "Conduct research with industry partners" },
                    { id: 3, label: "Deploy production AI systems at scale" },
                ],
            },
        ],
    },
    AiTraining: {
        heading: "Your AI Training Arsenal",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Enterprise-grade hardware that makes complex AI tasks possible",
                    },
                ],
            },
        ],
        dgxSection: {
            icon: {
                alternativeText: "Chip icon representing DGX B200",
                mime: "image/svg+xml",
                url: "/images/dgx-200-1.svg",
            },
            title: "DGX B200",
            description: "A complete supercomputer in a box, designed specifically for training massive AI models",
            media: {
                alternativeText: "DGX B200 hardware unit being held",
                mime: "image/jpg",
                url: "/images/dgx-200.jpg",
            },
            features: [
                {
                    id: 1,
                    icon: {
                        alternativeText: "GPU icon",
                        mime: "image/svg+xml",
                        url: "/images/dgx-200-2.svg",
                    },
                    title: "What's Inside?",
                    description: "8 extremely powerful processors (GPUs) that work together to solve AI problems incredibly fast. Think of it like having 8 super-brains instead of 1.",
                    note: "NVIDIA calls this: 8x Blackwell GPUs",
                },
                {
                    id: 2,
                    icon: {
                        alternativeText: "Memory icon",
                        mime: "image/svg+xml",
                        url: "/images/idgx-200-3.svg",
                    },
                    title: "Speed Between Processors",
                    description: "1.4 trillion bytes of memory (TB). For perspective, that's enough to hold an entire library—and access it in milliseconds.",
                    note: "Why it matters: Train models with 100+ billion parameters",
                },
                {
                    id: 3,
                    icon: {
                        alternativeText: "Lightning bolt icon",
                        mime: "image/svg+xml",
                        url: "/images/dgx-200-4.svg",
                    },
                    title: "Speed Between Processors",
                    description: "The 8 GPUs communicate at lightning speed (1.8 TB/s), sharing information instantly to coordinate on massive problems.",
                    note: "NVIDIA calls this: NVLink technology",
                },
            ],
            whatYouCanDo: {
                title: "What You Can Do:",
                list: [
                    { id: 1, label: "Train the latest large language models" },
                    { id: 2, label: "Process massive datasets in hours instead of weeks" },
                    { id: 3, label: "Conduct cutting-edge AI research" },
                    { id: 4, label: "Collaborate on real industry projects" },
                ],
            },
            stats: [
                {
                    id: 1,
                    icon: {
                        alternativeText: "Rocket icon",
                        mime: "image/svg+xml",
                        url: "/images/tr-1.svg",
                    },
                    value: "3X faster",
                    label: "than previous generation",
                    title: "Training Speed",
                },
                {
                    id: 2,
                    icon: {
                        alternativeText: "Speedometer icon",
                        mime: "image/svg+xml",
                        url: "/images/tr-2.svg",
                    },
                    value: "15X faster",
                    label: "running trained models",
                    title: "Inference Speed",
                },
                {
                    id: 3,
                    icon: {
                        alternativeText: "Power bolt icon",
                        mime: "image/svg+xml",
                        url: "/images/tr-3.svg",
                    },
                    value: "~14.3 kW",
                    label: "entire supercomputer",
                    title: "Power Used",
                },
                {
                    id: 4,
                    icon: {
                        alternativeText: "Server rack icon",
                        mime: "image/svg+xml",
                        url: "/images/tr-4.svg",
                    },
                    value: "10U Chassis",
                    label: "fits in any data center",
                    title: "Physical Size",
                },
            ],
        },
        jetsonSection: {
            heading: "Jetson: AI in Your Hands",
            description: [
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "Small, powerful computers for building AI applications in the real world—robots, drones, smart devices, and autonomous systems.",
                        },
                    ],
                },
            ],
            devices: [
                {
                    id: 1,
                    badge: "Nano",
                    title: "Jetson Orin Nano",
                    media: {
                        alternativeText: "Jetson Orin Nano device",
                        mime: "image/jpg",
                        url: "/images/jetson-1.png",
                    },
                    powerUsage: "7-10W",
                    powerNote: "Like a small phone",
                    bestFor: "Learning, hobby projects, edge devices",
                },
                {
                    id: 2,
                    badge: "NX",
                    title: "Jetson Orin NX",
                    media: {
                        alternativeText: "Jetson Orin NX device",
                        mime: "image/jpg",
                        url: "/images/jetson-3.png",
                    },
                    powerUsage: "10-25W",
                    powerNote: "Tablet equivalent",
                    bestFor: "Autonomous robots, drones, smart devices",
                },
                {
                    id: 3,
                    badge: "AGX",
                    title: "Jetson AGX Orin",
                    media: {
                        alternativeText: "Jetson AGX Orin device",
                        mime: "image/jpg",
                        url: "/images/jetson-4.png",
                    },
                    powerUsage: "15-60W",
                    powerNote: "Desktop computer",
                    bestFor: "Advanced research, complex applications",
                },
                {
                    id: 4,
                    badge: "Xavier",
                    title: "Jetson AGX Xavier",
                    media: {
                        alternativeText: "Jetson AGX Xavier device",
                        mime: "image/jpg",
                        url: "/images/jetson-5.png",
                    },
                    powerUsage: "10-30W",
                    powerNote: "Efficient & capable",
                    bestFor: "Industrial deployments, automotive",
                },
            ],
        },
    },
    aiTools: {
        heading: "The Tools You'll Master",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Industry-standard software that accelerates every step of your AI journey",
                    },
                ],
            },
        ],
        realWorldExamples: {
            heading: "Real-World Examples",
            list: [
                { id: 1, label: "Training neural networks 50X faster" },
                { id: 2, label: "Processing billions of data points" },
                { id: 3, label: "Rendering graphics in video games" },
                { id: 4, label: "Analyzing medical images instantly" },
                { id: 5, label: "Training self-driving cars" },
            ],
        },
        media: {
            alternativeText: "3D illustration of stacked AI chip hardware",
            mime: "image/jpg",
            url: "/images/tool-bg.png",
        },
        keySoftware: {
            heading: "Key Software You'll Use",
            items: [
                {
                    id: 1,
                    icon: {
                        alternativeText: "Framework icon",
                        mime: "image/svg+xml",
                        url: "/images/tool-1.svg",
                    },
                    label: "Framework",
                    title: "PyTorch & TensorFlow",
                    description: "Popular AI frameworks that work great on NVIDIA GPUs",
                },
                {
                    id: 2,
                    icon: {
                        alternativeText: "Data tools icon",
                        mime: "image/svg+xml",
                        url: "/images/tool-2.svg",
                    },
                    label: "Data Tools",
                    title: "NVIDIA RAPIDS",
                    description: "Process data 50X faster using GPU acceleration",
                },
                {
                    id: 3,
                    icon: {
                        alternativeText: "Deployment icon",
                        mime: "image/svg+xml",
                        url: "/images/tool-3.svg",
                    },
                    label: "Deployment",
                    title: "TensorRT",
                    description: "Make trained models run 10X faster in production",
                },
            ],
        },
        cudaSection: {
            icon: {
                alternativeText: "Code icon representing CUDA",
                mime: "image/svg+xml",
                url: "/images/icons/cuda.svg",
            },
            title: "CUDA: Supercharging Your Code",
            description: "CUDA is a technology that lets you write code that runs on NVIDIA GPUs. Instead of using just one processor, your code can use thousands of tiny processors working together in parallel—like having a thousand workers tackling a problem simultaneously.",
            highlights: [
                {
                    id: 1,
                    icon: {
                        alternativeText: "Play icon",
                        mime: "image/svg+xml",
                        url: "/images/play.svg",
                    },
                    title: "Write Once, Run Anywhere",
                    description: "Your CUDA code works on all NVIDIA GPUs",
                },
                {
                    id: 2,
                    icon: {
                        alternativeText: "Fingerprint icon",
                        mime: "image/svg+xml",
                        url: "/images/fingerprint.svg",
                    },
                    title: "Industry Standard",
                    description: "Used by researchers and companies worldwide",
                },
                {
                    id: 3,
                    icon: {
                        alternativeText: "Speed gauge icon",
                        mime: "image/svg+xml",
                        url: "/images/speed.svg",
                    },
                    title: "10-100X Speed Boost",
                    description: "Same code runs much faster on GPUs",
                },
            ],
        },
    }
}
export default function page() {
    return (
        <>
            <BannerSection data={local_data.heroBanner} />
            <TechnologySection data={local_data.technologySection} />
            <ArchitectureSection data={local_data.ArchitectureSection} />
            <StackSection data={local_data.nvidiaAiStackSection} />
            <JourneySection data={local_data.JourneySection} />
            <AiTrainingSection data={local_data.AiTraining} />
            
        </>
    )
}

