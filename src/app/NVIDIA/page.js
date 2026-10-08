import ArchitectureSection from "@/components/sections/NVIDIA/architecture-section"
import BannerSection from "@/components/sections/NVIDIA/banner-section"
import JourneySection from "@/components/sections/NVIDIA/journey-section"
import StackSection from "@/components/sections/NVIDIA/stack-section"
import TechnologySection from "@/components/sections/NVIDIA/technology-section"
import AiTrainingSection from "@/components/sections/NVIDIA/ai-training-section"
import AiTools from "@/components/sections/NVIDIA/ai-Tools"
import BuildSection from "@/components/sections/NVIDIA/build-section"
import WhysetupSection from "@/components/sections/NVIDIA/Whysetup-Section"
import GatewaySection from "@/components/sections/NVIDIA/gateway-section"
import MasterAi from "@/components/sections/NVIDIA/MasterAi"


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
    },
    build: {
        heading: "What You'll Build Here",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Real projects with real impact, using real technology",
                    },
                ],
            },
        ],
        projects: [
            {
                id: 1,
                title: "Autonomous Robots",
                description: "Build robots that see, learn, and decide using edge AI",
                icon: {
                    alternativeText: "Robot icon",
                    mime: "image/svg+xml",
                    url: "/images/build_icon-1.svg",
                },
                media: {
                    alternativeText: "Humanoid robot being examined by students in a lab",
                    mime: "image/jpg",
                    url: "/images/build-1.jpg",
                },
            },
            {
                id: 2,
                title: "Medical AI",
                description: "Analyze medical images and predict diagnoses",
                icon: {
                    alternativeText: "Medical cross icon",
                    mime: "image/svg+xml",
                    url: "/images/build_icon-2.svg",
                },
                media: {
                    alternativeText: "Student working with medical imaging data",
                    mime: "image/jpg",
                    url: "/images/build-2.jpg",
                },
            },
            {
                id: 3,
                title: "Natural Language",
                description: "Train and deploy large language models",
                icon: {
                    alternativeText: "Chat bubble icon",
                    mime: "image/svg+xml",
                    url: "/images/build_icon-3.svg",
                },
                media: {
                    alternativeText: "Students discussing natural language processing on screen",
                    mime: "image/jpg",
                    url: "/images/build-3.jpg",
                },
            },
            {
                id: 4,
                title: "Computer Vision",
                description: "Build systems that understand video & images",
                icon: {
                    alternativeText: "Eye/camera icon",
                    mime: "image/svg+xml",
                    url: "/images/build_icon-4.svg",
                },
                media: {
                    alternativeText: "Students working on computer vision hardware and screens",
                    mime: "image/jpg",
                    url: "/images/build-4.jpg",
                },
            },
            {
                id: 5,
                title: "Data Science",
                description: "Process and analyze massive datasets instantly",
                icon: {
                    alternativeText: "Chart/graph icon",
                    mime: "image/svg+xml",
                    url: "/images/build_icon-5.svg",
                },
                media: {
                    alternativeText: "Students analyzing data on a laptop",
                    mime: "image/jpg",
                    url: "/images/build-5.jpg",
                },
            },
            {
                id: 6,
                title: "Industry Research",
                description: "Partner with companies on real problems",
                icon: {
                    alternativeText: "Research/lab icon",
                    mime: "image/svg+xml",
                    url: "/images/build_icon-6.svg",
                },
                media: {
                    alternativeText: "Student working on industry research with mentor",
                    mime: "image/jpg",
                    url: "/images/build-6.jpg",
                },
            },
        ],
    },
    whySetup: {
        heading: "Why This Setup Matters",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "This infrastructure bridges rigorous academic foundations with production-scale AI systems used in global research and industry.",
                    },
                ],
            },
        ],
        media: {
            alternativeText: "Dark circuit board background with glowing blue connections",
            mime: "image/jpg",
            url: "/images/why-nvidia.jpg",
        },
        cards: [
            {
                id: 1,
                icon: {
                    alternativeText: "Graduation cap icon",
                    mime: "image/svg+xml",
                    url: "/images/why_icon1.svg",
                },
                title: "For Your Learning",
                list: [
                    { id: 1, label: "You learn on the same tools used by AI researchers at leading universities and companies worldwide." },
                    { id: 2, label: "When you graduate, you'll have hands-on experience with production-grade infrastructure." },
                    { id: 3, label: "No 're-learning' new tools—you're already proficient in what matters most." },
                ],
            },
            {
                id: 2,
                icon: {
                    alternativeText: "Briefcase icon",
                    mime: "image/svg+xml",
                    url: "/images/why_icon2.svg",
                },
                title: "For Your Career",
                list: [
                    { id: 1, label: "Leading AI companies prioritize hiring engineers with hands-on NVIDIA experience." },
                    { id: 2, label: "Build a portfolio of real AI projects on enterprise hardware." },
                    { id: 3, label: "Network with industry professionals and researchers who collaborate with DSU." },
                ],
            },
        ],
    },
    gateWay: {
        heading: "Your Gateway to Top Placements",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "This infrastructure isn't just impressive—it directly transforms your career prospects and placement outcomes.",
                    },
                ],
            },
        ],
        columns: [
            {
                id: 1,
                heading: "What Employers Want",
                points: [
                    {
                        id: 1,
                        title: "Hands-on NVIDIA Experience",
                        description: "Experience with CUDA, DGX systems, and GPU-accelerated workflows used across the AI industry",
                    },
                    {
                        id: 2,
                        title: "Production-Ready Skills",
                        description: "Exposure to real training, inference, optimization, and deployment pipelines",
                    },
                    {
                        id: 3,
                        title: "Demonstrated Capability",
                        description: "Portfolio projects trained and deployed on enterprise-grade NVIDIA infrastructure",
                    },
                ],
            },
            {
                id: 2,
                heading: "Your Competitive Advantage",
                points: [
                    {
                        id: 1,
                        title: "Immediate Job Readiness",
                        description: "While peers are learning tools on the job, you're already proficient—hiring managers value candidates who can contribute from day one",
                    },
                    {
                        id: 2,
                        title: "Higher Compensation",
                        description: "NVIDIA-certified and GPU-experienced engineers often command significantly higher compensation in the AI industry",
                    },
                    {
                        id: 3,
                        title: "Exclusive Opportunities",
                        description: "Leading AI companies such as Google, Meta, Microsoft, and others actively recruit from universities with advanced GPU infrastructure",
                    },
                ],
            },
        ],
        graduates: {
            heading: "Why DSU Graduates Stand Out",
            points: [
                {
                    id: 1,
                    icon: {
                        alternativeText: "Gear/target icon representing targeted skills",
                        mime: "image/svg+xml",
                        url: "/images/graduate-1.svg",
                    },
                    title: "Targeted Skills",
                    description: "You learn exactly what industry needs, not what textbooks say",
                },
                {
                    id: 2,
                    icon: {
                        alternativeText: "Server stack icon representing real scale",
                        mime: "image/svg+xml",
                        url: "/images/graduate-2.svg",
                    },
                    title: "Real Scale",
                    description: "Experience with infrastructure that handles real AI workloads, not simulations",
                },
                {
                    id: 3,
                    icon: {
                        alternativeText: "Shield/badge icon representing proven track record",
                        mime: "image/svg+xml",
                        url: "/images/graduate-3.svg",
                    },
                    title: "Proven Track Record",
                    description: "Your projects are proof of capability—not just theory",
                },
                {
                    id: 4,
                    icon: {
                        alternativeText: "Person with flag icon representing first-mover advantage",
                        mime: "image/svg+xml",
                        url: "/images/graduate-4.svg",
                    },
                    title: "First-Mover Advantage",
                    description: "Few Indian universities have this. You're competing with elite peers globally",
                },
            ],
        },
        recruitment: {
            heading: "The Recruitment Pipeline",
            description: [
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "DSU's NVIDIA-powered ecosystem creates a clear pathway from learning to recruitment.",
                        },
                    ],
                },
            ],
            steps: [
                {
                    id: 1,
                    number: "01",
                    title: "Industry Partnerships",
                    description: "DSU's NVIDIA partnership attracts direct recruitment from AI teams at major companies",
                },
                {
                    id: 2,
                    number: "02",
                    title: "Research Opportunities",
                    description: "Collaborate on real industry problems → Paper publications → Fast-track interviews",
                },
                {
                    id: 3,
                    number: "03",
                    title: "Portfolio Projects",
                    description: "Train models on DGX B200 → Deploy on Jetson → Showcase on your resume",
                },
                {
                    id: 4,
                    number: "04",
                    title: "Expert Network",
                    description: "Learn from visiting NVIDIA researchers and industry partners → Build professional relationships",
                },
            ],
        },
        note:
        {
            description: "Top AI companies recruit from universities with world-class infrastructure. Your degree from DSU isn't just a credential—it's proof that you've mastered the tools and infrastructure used by leading AI teams. That significantly strengthens your placement outcomes.",

        },
    },
    readySection: {
        title: "Ready to Master AI?",
        description:
            "This is the infrastructure. This is the opportunity. The question is: what will you build?",
        image: {
            url: "/images/masterAi.jpg",
            alternativeText: "Ready to build your future with AI",
        },
        ctas: [
            { label: "Explore AI First @DSU", href: "#", variant: "white" },
            { label: "View All Programs", href: "#", variant: "gradient" },
        ],
    },
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
            <AiTools data={local_data.aiTools} />
            <BuildSection data={local_data.build} />
            <WhysetupSection data={local_data.whySetup} />
            <GatewaySection data={local_data.gateWay} />
            <MasterAi data={local_data.readySection}/>

        </>
    )
}

