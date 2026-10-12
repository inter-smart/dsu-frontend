import InnerHero from "@/components/layout/common/InnerHero";
import CareerGoal from "@/components/sections/placements/Career-Goal";
import CareerJourney from "@/components/sections/placements/Career-journey";
import CareerPartners from "@/components/sections/placements/Career-Partners";
import CareerPlacement from "@/components/sections/placements/Career-Placement";
import IntershipSupport from "@/components/sections/placements/intership-support";
import KeyFocus from "@/components/sections/placements/Key-Focus";
import PlacementOverview from "@/components/sections/placements/overview";
import PlacementActivities from "@/components/sections/placements/Placement-Activities";
import CampusDrives from "@/components/sections/placements/placement-campusdrive";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import ProfessionalCertification from "@/components/sections/placements/profeesional-section";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Career Development Center page title",
        metaDescription: "Career Development Center page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Career Development Center page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "Placement",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "Placement ",
                href: "/",
            },
            {
                label: "Career Development Center ",
                href: "/",
            },
        ],
        PlacementmenuBar: true
    },
    programOverviewSection: {
        eyeBrow: "Career Readiness",
        heading: "Career Development Center",
        intro: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The Career Development Center plays a vital role in connecting academic learning with the realities of the professional world. It offers a variety of programs and resources aimed at empowering students to improve their job readiness.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Through workshops, networking events, and personalized career counseling, students gain valuable insights and skills that prepare them for a wide array of career opportunities. This comprehensive support system ensures that they are well-equipped to navigate their future careers successfully.",
                    },
                ],
            },
        ],
    },
    KeyFocus: {
        heading: "Key Focus Areas",
        // description: [
        //     {
        //         type: "paragraph",
        //         children: [
        //             {
        //                 type: "text",
        //                 text: "The Career Development Center works to bridge the gap between academic learning and professional expectations, supporting students through focused career initiatives.",
        //             },
        //         ],
        //     },
        // ],
        // media: {
        //     alternativeText: "Students collaborating and studying together in a library",
        //     mime: "image/jpg",
        //     url: "/images/keyfocus-img.jpg",
        // },
        accordion: [
            {
                id: 1,
                question: "Career Panning and Guidance",
                answer: [],
            },
            {
                id: 2,
                question: "Industry-oriented skill development",
                answer: [],
            },
            {
                id: 3,
                question: "Employability and Soft-skill Enhancement",
                answer: [],
            },
            {
                id: 4,
                question: "Technical and Domain-specific Training",
                answer: [],
            },
            {
                id: 5,
                question: "Internship and Industry Exposure",
                answer: [],
            },
            {
                id: 6,
                question: "Resume and Interview Preparation",
                answer: [],
            },
            {
                id: 7,
                question: "Aptitude and Assessment Preparation",
                answer: [],
            },
            {
                id: 8,
                question: "Interaction with Industry Professionals",
                answer: [],
            },
            {
                id: 9,
                question: "Placement Preparation and Support",
                answer: [],
            },
        ],
    },
    careerGoal: {
        heading: "Employability Training",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The Centre provides structured training initiatives to help students strengthen both technical and professional competencies. Training can be organised according to programme requirements, industry trends and student career goals.",
                    },
                ],
            },
        ],

        accordion: [
            {
                id: 1,
                question: "Campus Recruitment Training (CRT)",
                description: "",
                tags: [],
                note: "",
                media: null,
            },
            {
                id: 2,
                question: "Corporate Employment Assessment Test (CEAT)",
                description: "A corporate employability assessment can help students understand their job readiness by evaluating key areas aligned with recruitment expectations.",
                tags: [
                    { id: 1, label: "Aptitude" },
                    { id: 2, label: "Technical Skills" },
                    { id: 3, label: "Communication" },
                    { id: 4, label: "Skill-Gap Identification" },
                    { id: 5, label: "Personalised Training" },
                ],
                note: "Assessment outcomes can help identify skill gaps and guide targeted training before recruitment processes.",
                media: {
                    type: "video",
                    alternativeText: "Group photo of students and faculty with a video play button overlay",
                    mime: "video/mp4",
                    url: "/videos/testimonial-2.mp4",
                    thumbnail: "/images/goal-1.jpg",

                },
            },
            {
                id: 3,
                question: "Career Counselling",
                description: "",
                tags: [],
                note: "",
                media: null,
            },
            {
                id: 4,
                question: "Soft Skills Development",
                description: "",
                tags: [],
                note: "",
                media: null,
            },
            {
                id: 5,
                question: "Language & Communication Development",
                description: "",
                tags: [],
                note: "",
                media: null,
            },
            {
                id: 6,
                question: "Bridge Courses & Competitive Exam Preparation",
                description: "",
                tags: [],
                note: "",
                media: null,
            },
        ],
    },
    internshipSection: {
        heading: "Internship Support",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Internship support plays a crucial role in helping students acquire hands-on experience, familiarize themselves with professional environments, and effectively apply their academic knowledge in practical situations.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The Centre is dedicated to assisting students in various ways, including identifying suitable internship opportunities, crafting compelling application materials, grasping workplace expectations, and linking their internship experiences to their future career aspirations. This comprehensive guidance not only enhances their skills but also boosts their confidence as they transition into the workforce.",
                    },
                ],
            },
        ],
        list: [
            { id: 1, label: "Industry Exposure" },
            { id: 2, label: "Practical Learning" },
            { id: 3, label: "Project Experience" },
            { id: 4, label: "Career Exploration" },
            { id: 5, label: "Professional Skills" },
        ],
        media: {
            alternativeText: "Students working on laptops in a computer lab during an internship training session",
            mime: "image/jpg",
            url: "/images/intenship.jpg",
        },
    },

    careerJorney: {
        heading: "Resources for Your Career Journey",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Keep essential guidance, FAQs and downloadable placement resources together so students can find support quickly.",
                    },
                ],
            },
        ],
        faqSection: {
            heading: "FAQ",
            accordion: [
                {
                    id: 1,
                    question: "How can I prepare for campus placements?",
                    answer: [],
                },
                {
                    id: 2,
                    question: "How should I prepare my resume?",
                    answer: [
                        {
                            type: "paragraph",
                            children: [
                                {
                                    type: "text",
                                    text: "The form has multiple sections designed to understand the applicant comprehensively. Please fill out each section carefully and thoughtfully.",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 3,
                    question: "What should I expect during recruitment?",
                    answer: [],
                },
                {
                    id: 4,
                    question: "How can I improve my interview skills?",
                    answer: [],
                },
            ],
        },
        downloadsSection: {
            heading: "Placement Guidelines & Downloads",
            links: [
                { id: 1, label: "Placement Guidelines", href: "#" },
                { id: 2, label: "Resume Preparation Guide", href: "#" },
                { id: 3, label: "Interview Preparation Guide", href: "#" },
                { id: 4, label: "Aptitude Preparation Resources", href: "#" },
                { id: 5, label: "Placement Report 2021 Batch", href: "#" },
            ],
        },
    },
    placementActivities: {
        heading: "Glimpses of Our Training and Placement Activities",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "A visual gallery for training sessions, workshops, recruitment drives, industry interactions and student career activities.",
                    },
                ],
            },
        ],
        gallery: [
            {
                id: 1,
                label: "Training Session",
                type: "image",
                media: {
                    alternativeText: "Students attending a training session in a classroom with a presentation screen",
                    mime: "image/jpg",
                    url: "/images/gallery-1.jpg",
                },
            },
            {
                id: 2,
                label: "Career Workshop",
                type: "image",
                media: {
                    alternativeText: "Two students discussing during a career workshop",
                    mime: "image/jpg",
                    url: "/images/gallery-2.jpg",
                },
            },
            {
                id: 3,
                label: "Industry Interaction",
                type: "image",
                media: {
                    alternativeText: "Trainer presenting a bar chart to a student in a library setting",
                    mime: "image/jpg",
                    url: "/images/gallery-3.jpg",
                },
            },
            {
                id: 4,
                label: "Recruitment Drive",
                type: "video",
                media: {
                    alternativeText: "Handshake between a recruiter and candidate during a recruitment drive",
                    mime: "video/mp4",
                    url: "/videos/gallery-4.mp4",
                    thumbnail: "/images/gallery-4.jpg",
                },
            },
            {
                id: 5,
                label: "Student Development",
                type: "image",
                media: {
                    alternativeText: "Student smiling while working at a computer during a development session",
                    mime: "image/jpg",
                    url: "/images/gallery-5.jpg",
                },
            },
            {
                id: 6,
                label: "Industry Interaction",
                type: "image",
                media: {
                    alternativeText: "Student using a VR headset during an industry interaction session",
                    mime: "image/jpg",
                    url: "/images/gallery-6.jpg",
                },
            },
        ],
    },
    campusDrive: {
        heading: "Campus Drives",
        tabs: [
            {
                id: 1,
                label: "Videos",
                active: true,
                items: [
                    {
                        id: 1,
                        type: "video",
                        title: "Campus Drive 1",
                        media: {
                            alternativeText: "Group photo of students and placement team with a video play button",
                            mime: "video/mp4",
                            url: "/drive-1.mp4",
                            thumbnail: "/images/drive-1.jpg",
                        },
                    },
                    {
                        id: 2,
                        type: "video",
                        title: "In Time Tec Campus Drive",
                        media: {
                            alternativeText: "In Time Tec campus drive at the DSU placement office with a video play button",
                            mime: "video/mp4",
                            url: "/videos/campus-drive-2.mp4",
                            thumbnail: "/images/drive-2.jpg",
                        },
                    },
                    {
                        id: 3,
                        type: "video",
                        title: "Campus Drive 3",
                        media: {
                            alternativeText: "Recruiters and students posing at the DSU campus entrance with a video play button",
                            mime: "video/mp4",
                            url: "/videos/campus-drive-3.mp4",
                            thumbnail: "/images/drive-3.jpg",
                        },
                    },
                ],
            },
            {
                id: 2,
                label: "Images",
                active: false,
                items: [],
            },
        ],
    },
    professional: {
        heading: "Professional Certification",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The Career Development Center supports students in pursuing industry-relevant professional certifications that complement their academic learning, strengthen domain expertise, and enhance career readiness.",
                    },
                ],
            },
        ],
        categories: [
            {
                id: 1,
                icon: {
                    alternativeText: "Laptop with gear icon representing technology and digital skills",
                    mime: "image/svg+xml",
                    url: "/images/profeesion_Icon1.svg",
                },
                title: "Technology & Digital Skills",
                description: "AI & Machine Learning, Cloud Computing, Data Analytics, Cybersecurity",
            },
            {
                id: 2,
                icon: {
                    alternativeText: "Gears icon representing engineering and technical skills",
                    mime: "image/svg+xml",
                    url: "/images/profeesion_Icon2.svg",
                },
                title: "Engineering & Technical",
                description: "CAD, IoT, Automation, Embedded Systems, Industry 4.0",
            },
            {
                id: 3,
                icon: {
                    alternativeText: "Report with chart and gear icon representing business and management",
                    mime: "image/svg+xml",
                    url: "/images/profeesion_Icon3.svg",
                },
                title: "Business & Management",
                description: "Business Analytics, Digital Marketing, Finance, Project Management",
            },
            {
                id: 4,
                icon: {
                    alternativeText: "Person with idea icons representing professional skills",
                    mime: "image/svg+xml",
                    url: "/images/profeesion_Icon4.svg",
                },
                title: "Professional Skills",
                description: "Communication, Leadership, Design Thinking, Entrepreneurship",
            },
            {
                id: 5,
                icon: {
                    alternativeText: "Checklist with certificate icon representing programme-specific certifications",
                    mime: "image/svg+xml",
                    url: "/images/profeesion_Icon5.svg",
                },
                title: "Programme-Specific Certifications",
                description: "Specialised certifications aligned with individual programmes and career pathways.",
            },
        ],
    },
    partnersSection: {
        label: "Certification Partners",
        partners: [
            {
                id: 1,
                name: "Infosys",
                logo: {
                    alternativeText: "Infosys logo",
                    mime: "image/svg+xml",
                    url: "/images/partner-1.png",
                },
            },
            {
                id: 2,
                name: "Wipro",
                logo: {
                    alternativeText: "Wipro logo",
                    mime: "image/svg+xml",
                    url: "/images/partner-2.png",
                },
            },
            {
                id: 3,
                name: "NVIDIA",
                logo: {
                    alternativeText: "NVIDIA logo",
                    mime: "image/svg+xml",
                    url: "/images/partner-3.png",
                },
            },
            {
                id: 4,
                name: "Accenture",
                logo: {
                    alternativeText: "Accenture logo",
                    mime: "image/svg+xml",
                    url: "/images/partner-4.png",
                },
            },
            {
                id: 5,
                name: "Zoho",
                logo: {
                    alternativeText: "Zoho logo",
                    mime: "image/svg+xml",
                    url: "/images/partner-5.png",
                },
            },
            {
                id: 6,
                name: "TCS",
                logo: {
                    alternativeText: "Tata Consultancy Services logo",
                    mime: "image/svg+xml",
                    url: "/images/partner-6.png",
                },
            },
            {
                id: 7,
                name: "TCS",
                logo: {
                    alternativeText: "Tata Consultancy Services logo",
                    mime: "image/svg+xml",
                    url: "/images/partner-7.png",
                },
            },
            {
                id: 8,
                name: "TCS",
                logo: {
                    alternativeText: "Tata Consultancy Services logo",
                    mime: "image/svg+xml",
                    url: "/images/partner-8.png",
                },
            },
            {
                id: 9,
                name: "TCS",
                logo: {
                    alternativeText: "Tata Consultancy Services logo",
                    mime: "image/svg+xml",
                    url: "/images/partner-9.png",
                },
            },

        ],
    },

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <PlacementmenuBar className="lg:!hidden block" />
            <CareerPlacement data={local_data.programOverviewSection} />
            <KeyFocus data={local_data.KeyFocus} />
            <CareerGoal data={local_data.careerGoal} />
            <CampusDrives data={local_data.campusDrive} />
            <ProfessionalCertification data={local_data.professional} />
            <CareerPartners data={local_data.partnersSection} />
            <CareerJourney data={local_data.careerJorney} />

        </>
    )
}
