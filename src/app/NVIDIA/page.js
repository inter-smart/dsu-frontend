import ArchitectureSection from "@/components/sections/NVIDIA/architecture-section"
import BannerSection from "@/components/sections/NVIDIA/banner-section"
import StackSection from "@/components/sections/NVIDIA/stack-section"
import TechnologySection from "@/components/sections/NVIDIA/technology-section"


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
    }

}
export default function page() {
    return (
        <>
            <BannerSection data={local_data.heroBanner} />
            <TechnologySection data={local_data.technologySection} />
            <ArchitectureSection data={local_data.ArchitectureSection} />
            <StackSection data={local_data.nvidiaAiStackSection} />

        </>
    )
}

