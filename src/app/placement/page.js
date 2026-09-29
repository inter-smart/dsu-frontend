import InnerHero from "@/components/layout/common/InnerHero";
import PlacementOverview from "@/components/sections/placements/overview";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
import AiVisionMission from "@/components/sections/ai-enabled/Ai-vision-mission";
import Announcement from "@/components/sections/placements/announcement";
import PlacementProcess from "@/components/sections/placements/placement-process";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import CILsection from "@/components/sections/placements/CILSection";
import Recruiters from "@/components/sections/placements/recruiters";
import PlacementContact from "@/components/sections/placements/placementcontact";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Placements page title",
        metaDescription: "Placements page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Placements page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "Placements",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
           
            {
                label: "Placements",
                href: "/",
            },
        ],
        PlacementmenuBar: true
    },
    programOverviewSection: {

        eyebrow: "OVERVIEW",
        heading: "Training and Placement",
        intro: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The Training and Placement Cell believes in nurturing not just academic excellence but also holistic development that prepares students for the dynamic demands of the professional world. The Placement and Training Cell is a vital part of our vision, working to ensure that every student receives the guidance, exposure, and support necessary to secure a fulfilling and successful career.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The Placement & Training Cell serves as a bridge between academia and industry, equipping students with the right skills and knowledge through a comprehensive approach. From Technical Training to Soft Skills development, we focus on making students industry-ready, empowering them to excel in competitive job markets. With an impressive track record of high-profile placements and strong industry partnerships, we ensure that students have access to a wide array of career opportunities.",
                    },
                ],
            },
        ],
        listHeading: "Some of the key aspects that are considered by the placement cell are as follows:",
        list: [
            {
                id: 1,
                label: "Placement Cell interacts with more than 500 reputed organizations for arranging campus interviews for the final year BE /B.Tech /M.Tech /B.Sc /M.Sc /MBA/ BCA /MCA/ BAJMC students.",
            },
            {
                id: 2,
                label: "Improving the quality of placements in terms of job opportunities, companies of relevance that visit the campus and the highest and average salaries.",
            },
        ],
        media: [
            {
                id: 1,
                alternativeText: "Students smiling and listening during a placement training session",
                mime: "image/jpg",
                url: "/images/placement-overview.jpg",
            },
            {
                id: 2,
                alternativeText: "Student in formal attire attending a placement session",
                mime: "image/jpg",
                url: "/images/placement-2.jpg",
            },
            {
                id: 3,
                alternativeText: "Students seated at a conference table during a placement interaction",
                mime: "image/jpg",
                url: "/images/placement-3.jpg",
            },
        ],

    },
    missionVisionSection: {
        cards: [
            {
                id: 1,
                icon: {
                    alternativeText: "Mission flag icon",
                    mime: "image/svg+xml",
                    url: "/images/mission.svg",
                },
                title: "Mission",
                description: "The mission of the Training and Placement Cell at Dayananda Sagar University is to enable and empower every student to acquire necessary skills, knowledge, and industry exposure to secure meaningful and successful careers."
            },
            {
                id: 2,
                icon: {
                    alternativeText: "Vision target icon",
                    mime: "image/svg+xml",
                    url: "/images/vision.svg",
                },
                title: "Vision",
                description: "To foster a culture of excellence and integrity, empowering students with the skills and opportunities to create a significant impact in the professional world",
            },
        ],
    },
    announcemntSection: {
        heading: "Latest Announcements",
        marquee: [
            { id: 1, label: "Campus Placement Offers – 2026 Batch" },
            { id: 2, label: "Placement Readiness Programme – BCA VI Semester" },
            { id: 3, label: "Placement Training – BCA & M.Sc Data Science" },
        ],
        announcements: [
            {
                id: 1,
                heading: "A campus-to-corporate connect to rewrite your future at Capgemini.",
                description: "Discover Capgemini through a fun and engaging Brand Quest. Students can learn about Capgemini, answer simple questions, participate in the challenge and get an opportunity to win exciting rewards.",
                image: {
                    alternativeText: "Capgemini Brand Quest poster with QR code for registration",
                    mime: "image/jpg",
                    url: "/images/announcement-1.jpg",
                },
            },
            {
                id: 2,
                heading: "Campus to Corporate: Placement Readiness Programme",
                description: "The Campus to Corporate: Placement Readiness Orientation Programme was organised to help BCA VI Semester students prepare for the transition from university to the professional world.",
                image: {
                    alternativeText: "Students attending a placement readiness session in a classroom",
                    mime: "image/jpg",
                    url: "/images/announcement-2.jpg",
                },
            },
            {
                id: 3,
                heading: "Placement Training Programme – Building Career Readiness",
                description: "Dayananda Sagar University's Training & Placement initiatives continue to support students in developing the skills and confidence required to successfully participate in recruitment processes.",
                image: {
                    alternativeText: "Two students smiling and studying together at a table",
                    mime: "image/jpg",
                    url: "/images/announcement-3.jpg",
                },
            },
        ],
    },
    placementProcess: {
        heading: "Placement Process",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "In today's dynamic job market, organizations seek a blend of complex, functional, and soft skills. At DSU, we start with a thorough assessment of students at the program's outset, guiding them to cultivate essential skills through mentorship and targeted training.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our training modules are tailored to meet business demands and employer expectations, covering vital areas such as life skills, communication, problem-solving, leadership, and decision-making. We also provide pre-placement training, including resume writing, group discussions, and mock interviews. Additionally, our Industry Preparedness Programs, held for 4-5 hours weekly, feature industry experts sharing insights on current practices across various fields.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our placement success is impressive, and we guarantee robust placement assistance. Our graduates have secured positions in leading MNCs such as Airbus, APTECH, Cargill, Capgemini, E&Y, Hewlett Packard, Happiest Minds, INFOSYS, ICICI Bank, ICICI Direct, PwC, Société Générale, TCS, Thoucentric, ITPS (Switzerland), and more.",
                    },
                ],
            },
        ],
        steps: [
            {
                id: 1,
                number: "01",
                title: "Student Assessment",
                description: "Students are assessed to understand their skills, strengths, interests and level of career readiness.",
            },
            {
                id: 2,
                number: "02",
                title: "Academics & Industry Preparedness",
                description: "Academic learning is supported with industry-focused preparation to build technical, professional and employability skills.",
            },
            {
                id: 3,
                number: "03",
                title: "Internship & Project Work",
                description: "Students gain practical experience through internships and projects, applying classroom knowledge.",
            },
            {
                id: 4,
                number: "04",
                title: "Placement",
                description: "Students connect with organizations for career opportunities.",
            },
        ],
    },
    CILSection: {
        heading: "Center of Innovation and Leadership (CIL)",
        subheading: "Welcome to the Center of Innovation and Leadership (CIL)",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "CIL provides transformative training that drives success. With a focus on collaboration, excellence & sustainability bridges the gap between academic knowledge and corporate realities. Our focus is on delivering innovative soft skills programs that empower individuals to become exceptional leaders, driving sustained performance both personally and professionally.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "CIL recognizes the challenge of unlocking individual potential to achieve excellence. To meet this challenge, we collaborate with experienced academicians, coaches, mentors, and corporate experts to design impactful training modules that inspire individuals to rediscover their strengths, embrace new opportunities and confidently shape their future.",
                    },
                ],
            },
        ],
        programSection: {
            heading: "Our Program",
            description: [
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "We offer a wide range of industry engagement programs designed to equip individuals and organizations with the skills they need to thrive in today's competitive environment.",
                        },
                    ],
                },
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "We understand that every department has unique needs. That's why we offer tailored training solutions that are designed specifically to meet the challenges and goals of the students. 60 to 120 hours per semester from students of 1st year to 3rd year with complementary training during 7th semester and Internal coding competition and Hackathon. Workshops and Seminars to delve deeper into specific topics related to innovation, industry trends, and skills development. These hands-on sessions offer practical insights that can be instantly applied.",
                        },
                    ],
                },
            ],
        },
        accordion: [
            {
                id: 1,
                question: "Industry Engagement Program (IEP)",
                answer: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Industry Engagement Program (IEP)",
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                question: "Industry Engagement and Higher Education",
                answer: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Industry Engagement and Higher Education",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    placemntContact: {
        heading: "Contact for Training",
        contact: {
            name: "Mr. Girisha MD",
            designation: "Manager – Training",
            organization: "Dayananda Sagar Institutions",
        },
        details: [
            {
                id: 1,
                label: "E-Mail:",
                value: "girisha.md@dsu.edu.in",
                href: "mailto:girisha.md@dsu.edu.in",
            },
            {
                id: 2,
                label: "Phone:",
                value: "9019171767",
                href: "tel:9019171767",
            },
        ],
        button: {
            label: "Placement Contact Us",
            href: "#",
        },
    },
    recruterSection: {
        heading: "Esteemed Recruiters",
        filter: {
            placeholder: "All Schools",
            options: [
                { id: 1, label: "All Schools", value: "all" },
            ],
        },
        recruiters: [
            {
                id: 1,
                name: "Infosys",
                logo: {
                    alternativeText: "Infosys logo",
                    mime: "image/png",
                    url: "/images/recruit-1.png",
                },
            },
            {
                id: 2,
                name: "Wipro",
                logo: {
                    alternativeText: "Wipro logo",
                    mime: "image/png",
                    url: "/images/recruit-2.png",
                },
            },
            {
                id: 3,
                name: "NVIDIA",
                logo: {
                    alternativeText: "NVIDIA logo",
                    mime: "image/png",
                    url: "/images/recruit-3.png",
                },
            },
            {
                id: 4,
                name: "Accenture",
                logo: {
                    alternativeText: "Accenture logo",
                    mime: "image/png",
                    url: "/images/recruit-4.png",
                },
            },
            {
                id: 5,
                name: "Zoho",
                logo: {
                    alternativeText: "Zoho logo",
                    mime: "image/png",
                    url: "/images/recruit-5.png",
                },
            },
            {
                id: 6,
                name: "Tata Consultancy Services",
                logo: {
                    alternativeText: "Tata Consultancy Services logo",
                    mime: "image/png",
                    url: "/images/recruit-6.png",
                },
            },
            {
                id: 7,
                name: "EY",
                logo: {
                    alternativeText: "EY logo",
                    mime: "image/png",
                    url: "/images/recruit-7.png",
                },
            },
            {
                id: 8,
                name: "NatWest Group",
                logo: {
                    alternativeText: "NatWest Group logo",
                    mime: "image/png",
                    url: "/images/recruit-8.png",
                },
            },
            {
                id: 9,
                name: "KPMG",
                logo: {
                    alternativeText: "KPMG logo",
                    mime: "image/png",
                    url: "/images/recruit-9.png",
                },
            },
            {
                id: 10,
                name: "Amazon",
                logo: {
                    alternativeText: "Amazon logo",
                    mime: "image/png",
                    url: "/images/recruit-10.png",
                },
            },
            {
                id: 11,
                name: "Unilever",
                logo: {
                    alternativeText: "Unilever logo",
                    mime: "image/png",
                    url: "/images/recruit-11.png",
                },
            },
            {
                id: 12,
                name: "UST",
                logo: {
                    alternativeText: "UST logo",
                    mime: "image/png",
                    url: "/images/recruit-12.png",
                },
            },
            {
                id: 13,
                name: "TVS",
                logo: {
                    alternativeText: "TVS logo",
                    mime: "image/png",
                    url: "/images/recruit-13.png",
                },
            },
            {
                id: 14,
                name: "Dell",
                logo: {
                    alternativeText: "Dell logo",
                    mime: "image/png",
                    url: "/images/recruit-14.png",
                },
            },
            {
                id: 15,
                name: "Cognizant",
                logo: {
                    alternativeText: "Cognizant logo",
                    mime: "image/png",
                    url: "/images/recruit-15.png",
                },
            },
            {
                id: 16,
                name: "TCL",
                logo: {
                    alternativeText: "TCL logo",
                    mime: "image/png",
                    url: "/images/recruit-16.png",
                },
            },
            {
                id: 17,
                name: "IKEA",
                logo: {
                    alternativeText: "IKEA logo",
                    mime: "image/png",
                    url: "/images/recruit-17.png",
                },
            },
            {
                id: 18,
                name: "Bosch",
                logo: {
                    alternativeText: "Bosch logo",
                    mime: "image/png",
                    url: "/images/recruit-18.png",
                },
            },
        ],
        loadMore: {
            label: "Load More >>",
            initialCount: 18,
        },
    }
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <PlacementmenuBar className="lg:!hidden block" />
            <PlacementOverview data={local_data.programOverviewSection} />
            <AiVisionMission data={local_data.missionVisionSection} />
            <Announcement data={local_data.announcemntSection} />
            <PlacementProcess data={local_data.placementProcess} />
            <CILsection data={local_data.CILSection} />
            <PlacementContact data={local_data.placemntContact} />
            <Recruiters data={local_data.recruterSection} />

        </>
    )
}
