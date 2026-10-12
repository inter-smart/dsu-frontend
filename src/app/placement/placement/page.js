import InnerHero from "@/components/layout/common/InnerHero";
import AcademicAchievements from "@/components/sections/academics/academic-achievements";
import PlacementSections from "@/components/sections/academics/PlacementDashboard";
import PlacementDashboard from "@/components/sections/academics/PlacementDashboard";
import PlacementProcess from "@/components/sections/placements/placement-process";
import PlacementReport from "@/components/sections/placements/Placement-report";
import PlacementDocuments from "@/components/sections/placements/PlacementDocuments";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import SchoolPlacement from "@/components/sections/placements/School-placement";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "placement page title",
        metaDescription: "placement page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "placement page title",
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
                label: "Placement ",
                href: "/",
            },
            {
                label: "placement ",
                href: "/",
            },
        ],
        PlacementmenuBar: true
    },
    placementProcess: {
        eyeBrow: "Process",
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
    achievementSection: {
        heading: "Building Careers, Creating Opportunities",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "At Dayananda Sagar University, we are committed to preparing students for successful careers through industry-focused learning, professional development, and strong corporate connections. Our dedicated placement team works closely with leading organisations to create diverse career opportunities and help students transition confidently from campus to the professional world.",
                    },
                ],
            },
        ],
        stats: [
            {
                id: 1,
                value: "450+",
                label: "Companies Visited ",
            },
            {
                id: 2,
                value: "₹56 LPA",
                label: "Highest Package ",
            },
            {
                id: 3,
                value: "₹10 LPA",
                label: "Average Package ",
            },
            {
                id: 4,
                value: "500+",
                label: "Recruiting Organisations",
            },
        ],
        note: "Placement statistics are based on the 2026 placement report."
    },
    schoolPlacement: {
        heading: "School Wise Placement",
        accordion: [
            {
                id: 1,
                question: "School of Engineering",
                answer: [],
            },
            {
                id: 2,
                question: "School of Commerce & Management Studies",
                answer: [
                    { id: 1, label: "Placement Report 2025 Batch", href: "#" },
                    { id: 2, label: "Placement Report 2024 Batch", href: "#" },
                    { id: 3, label: "Placement Report 2023 Batch", href: "#" },
                    { id: 4, label: "Placement Report 2022 Batch", href: "#" },
                    { id: 5, label: "Placement Report 2021 Batch", href: "#" },
                    { id: 6, label: "Placement Report 2020 Batch", href: "#" },
                    { id: 7, label: "Placement Report 2019 Batch", href: "#" },
                ],
            },
            {
                id: 3,
                question: "School of Basic & Applied Sciences",
                answer: [],
            },
            {
                id: 4,
                question: "School of Health Sciences",
                answer: [],
            },
            {
                id: 5,
                question: "School of Arts, Design & Humanities",
                answer: [],
            },
            {
                id: 6,
                question: "School of Computer Application",
                answer: [],
            },
        ],
    },
    documentSection: {
        cards: [
            {
                id: 1,
                title: "Placement Policy",
                description: "Access the Placement Policy and guidelines governing the campus recruitment process at DSU.",
                cta: {
                    label: "View/Download",
                    file: {
                        alternativeText: "Placement Policy PDF",
                        mime: "application/pdf",
                        url: "/documents/placement-policy.pdf",
                    },
                },
            },
            {
                id: 2,
                title: "Placement Calendar",
                description: "View the placement calendar to stay updated on key recruitment dates, schedules, and important placement activities at DSU.",
                cta: {
                    label: "View/Download",
                    file: {
                        alternativeText: "Placement Calendar PDF",
                        mime: "application/pdf",
                        url: "/documents/placement-calendar.pdf",
                    },
                },
            },
        ],
    },
    PlacementReport: {
        heading: "Placement Report",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Explore placement reports and outcomes from previous academic years.",
                    },
                ],
            },
        ],
        columns: ["Academic Year", "Report"],
        rows: [
            {
                id: 1,
                year: "2025-26",
                title: "Annual Placement Report 2025–26",
                file: { alternativeText: "Placement Report 2025-26 PDF", mime: "application/pdf", url: "/documents/placement-report-2025-26.pdf" },
            },
            {
                id: 2,
                year: "2024-25",
                title: "Annual Placement Report 2024–25",
                file: { alternativeText: "Placement Report 2024-25 PDF", mime: "application/pdf", url: "/documents/placement-report-2024-25.pdf" },
            },
            {
                id: 3,
                year: "2023-24",
                title: "Annual Placement Report 2023–24",
                file: { alternativeText: "Placement Report 2023-24 PDF", mime: "application/pdf", url: "/documents/placement-report-2023-24.pdf" },
            },
            {
                id: 4,
                year: "2022-23",
                title: "Annual Placement Report 2022–23",
                file: { alternativeText: "Placement Report 2022-23 PDF", mime: "application/pdf", url: "/documents/placement-report-2022-23.pdf" },
            },
            {
                id: 5,
                year: "2021-22",
                title: "Annual Placement Report 2021–22",
                file: { alternativeText: "Placement Report 2021-22 PDF", mime: "application/pdf", url: "/documents/placement-report-2021-22.pdf" },
            },
            {
                id: 6,
                year: "2020-21",
                title: "Annual Placement Report 2020–21",
                file: { alternativeText: "Placement Report 2020-21 PDF", mime: "application/pdf", url: "/documents/placement-report-2020-21.pdf" },
            },
        ],
    },
    PlacementSection: {
        sections: [
            {
                id: 1,
                eyebrow: "Placement Dashboard",
                heading: "Building Careers, Creating Opportunities",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "At Dayananda Sagar University, we are committed to providing students with successful outcomes through placement-led learning, skill development and strong industry partnerships.",
                            },
                        ],
                    },
                ],
                stats: [
                    { id: 1, value: "450+", label: "Companies Visited" },
                    { id: 2, value: "₹56 LPA", label: "Highest Package" },
                    { id: 3, value: "₹10 LPA", label: "Average Package" },
                    { id: 4, value: "500+", label: "Recruiting Organisations" },
                ],
                note: "Placement statistics are based on the 2026 placement report.",
                statitics: {
                    id: 1,
                    heading: "Placement Statistics",
                    accordion: [
                        { id: 1, question: "Highest Package", answer: [], links: [] },
                        { id: 2, question: "Average Package", answer: [], links: [] },
                        { id: 3, question: "Median Package", answer: [], links: [] },
                        { id: 4, question: "Placement Percentage", answer: [], links: [] },
                    ],
                },
                groups: [

                    {
                        id: 1,
                        heading: "School-wise Placements",
                        accordion: [
                            { id: 1, question: "School of Engineering", answer: [], links: [] },
                            {
                                id: 2,
                                question: "School of Commerce & Management Studies",
                                answer: [],
                                links: [
                                    { id: 1, label: "Placement Report 2025 Batch", href: "#" },
                                    { id: 2, label: "Placement Report 2024 Batch", href: "#" },
                                    { id: 3, label: "Placement Report 2023 Batch", href: "#" },
                                    { id: 4, label: "Placement Report 2022 Batch", href: "#" },
                                    { id: 5, label: "Placement Report 2021 Batch", href: "#" },
                                    { id: 6, label: "Placement Report 2020 Batch", href: "#" },
                                    { id: 7, label: "Placement Report 2019 Batch", href: "#" },
                                ],
                            },
                            { id: 3, question: "School of Basic & Applied Sciences", answer: [], links: [] },
                            { id: 4, question: "School of Health Sciences", answer: [], links: [] },
                            { id: 5, question: "School of Arts, Design & Humanities", answer: [], links: [] },
                            { id: 6, question: "School of Computer Application", answer: [], links: [] },
                        ],
                    },
                ],
            },
            {
                id: 2,
                eyebrow: "",
                heading: "International Placements",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "DSU students have received opportunities from reputed international organisations, reflecting the University's global connections and strong industry ties.",
                            },
                        ],
                    },
                ],
                stats: [
                    { id: 1, value: "450+", label: "Companies Visited" },
                    { id: 2, value: "₹56 LPA", label: "Highest Package" },
                    { id: 3, value: "₹10 LPA", label: "Average Package" },
                    { id: 4, value: "500+", label: "Recruiting Organisations" },
                ],
                note: "",
                groups: [
                    {
                        id: 1,
                        heading: "School-wise Placements",
                        accordion: [
                            { id: 1, question: "School of Engineering", answer: [], links: [] },
                            {
                                id: 2,
                                question: "School of Commerce & Management Studies",
                                answer: [],
                                links: [
                                    { id: 1, label: "Placement Report 2025 Batch", href: "#" },
                                    { id: 2, label: "Placement Report 2024 Batch", href: "#" },
                                    { id: 3, label: "Placement Report 2023 Batch", href: "#" },
                                    { id: 4, label: "Placement Report 2022 Batch", href: "#" },
                                    { id: 5, label: "Placement Report 2021 Batch", href: "#" },
                                    { id: 6, label: "Placement Report 2020 Batch", href: "#" },
                                    { id: 7, label: "Placement Report 2019 Batch", href: "#" },
                                ],
                            },
                            { id: 3, question: "School of Basic & Applied Sciences", answer: [], links: [] },
                            { id: 4, question: "School of Health Sciences", answer: [], links: [] },
                            { id: 5, question: "School of Arts, Design & Humanities", answer: [], links: [] },
                            { id: 6, question: "School of Computer Application", answer: [], links: [] },
                        ],
                    },
                ],
            },
        ],
    }


}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <PlacementmenuBar className="lg:!hidden block" />
            <PlacementProcess data={local_data.placementProcess} variant="whiteBg" />
            <PlacementDocuments data={local_data.documentSection} />
            <PlacementSections data={local_data.PlacementSection} />
            <PlacementReport data={local_data.PlacementReport} /> 
        </>
    )
}
