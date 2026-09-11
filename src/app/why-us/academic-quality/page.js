import InnerHero from "@/components/layout/common/InnerHero";
import AcademicQualitySection from "@/components/sections/why-us/AcademicQualitySection";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Academic Quality page title",
        metaDescription: "Academic Quality page description",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Academic Quality",
            mime: "image/jpg",
            url: "/images/ugc/ugc-banner.jpg",
        },
        title: "Academic Quality",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "Why DSU",
                href: "/why-dsu",
            },
            {
                label: "Excellence & Quality Assurance",
                href: "/",
            },
            {
                label: "IQAC",
                href: "/",
            },
            {
                label: "Academic Quality",
                href: "/why-us/academic-quality",
            },
        ],
    },

    academicQualitySection: {
        tabs: [
            { id: 1, label: "Academic Audit", value: "academic-audit", active: false },
            { id: 2, label: "Administrative Audit", value: "administrative-audit", active: false },
            { id: 3, label: "Best Practices", value: "best-practices", active: true },
            { id: 4, label: "Institutional Distinctiveness", value: "institutional-distinctiveness", active: false },
        ],
        tabContent: {
            "academic-audit": {
                heading: "Academic Audit",
                description: "Dayananda Sagar University conducts rigorous academic audits to ensure quality and continuous improvement across all programmes. These audits evaluate curriculum design, teaching methodology, assessment practices, and learning outcomes to maintain national and international academic standards.",
                quickLinks: [],
                bestPractices: [],
            },
            "administrative-audit": {
                heading: "Administrative Audit",
                description: "The administrative audit process at DSU ensures transparency, efficiency, and accountability in governance. It reviews institutional policies, financial management, infrastructure utilization, and compliance with regulatory frameworks.",
                quickLinks: [],
                bestPractices: [],
            },
            "best-practices": {
                heading: "Best Practices",
                description: "Dayananda Sagar University is committed to fostering a culture of continuous quality enhancement through innovative academic practices, industry collaboration, research excellence, and community engagement. Guided by the Internal Quality Assurance Cell (IQAC), the University adopts best practices that promote student success, institutional excellence, and sustainable development while aligning with national and international quality benchmarks.",
                quickLinks: [
                    { label: "Interdisciplinary research and innovation initiatives.", url: "#" },
                    { label: "Faculty and student research publications.", url: "#" },
                    { label: "Community outreach and extension programmes.", url: "#" },
                ],
                bestPractices: [
                    {
                        id: 1,
                        value: "best-practice-1",
                        title: "Best Practice 1 : AI-Driven and Industry-Integrated Learning Ecosystem",
                        expanded: false,
                        description: "DSU leverages artificial intelligence and industry partnerships to create an innovative learning ecosystem. Through smart classrooms, AI-powered analytics, and industry-integrated curricula, students gain practical skills aligned with evolving market demands.",
                        highlights: [
                            "AI-powered learning analytics and adaptive assessment tools.",
                            "Industry-integrated curricula co-designed with corporate partners.",
                            "Smart classroom technology and digital learning platforms.",
                            "Regular industry mentorship and internship programmes.",
                            "Innovation labs and incubation centres for student startups.",
                        ],
                        documents: [
                            { id: 1, label: "Best Practice Document 1 (PDF)", url: "#" },
                            { id: 2, label: "Best Practice Document 2 (PDF)", url: "#" },
                        ],
                    },
                    {
                        id: 2,
                        value: "best-practice-2",
                        title: "Best Practice 2 : Research, Innovation and Sustainable Community Engagement",
                        expanded: true,
                        description: "The University promotes interdisciplinary research, innovation, and social responsibility by encouraging students and faculty to address real-world challenges. Through research centres, innovation initiatives, outreach programmes, environmental sustainability projects, and community development activities, DSU nurtures responsible leaders committed to societal progress.",
                        highlights: [
                            "Interdisciplinary research and innovation initiatives.",
                            "Faculty and student research publications.",
                            "Community outreach and extension programmes.",
                            "Environmental sustainability and green campus initiatives.",
                            "Health, education, and rural development campaigns.",
                            "Collaboration with industries, government, and international institutions.",
                            "Ethical leadership and social responsibility initiatives.",
                        ],
                        documents: [
                            { id: 1, label: "Best Practice Document 1 (PDF)", url: "#" },
                            { id: 2, label: "Best Practice Document 2 (PDF)", url: "#" },
                        ],
                    },
                    {
                        id: 3,
                        value: "best-practice-3",
                        title: "Best Practice 3 : Student-Centric Learning and Holistic Development",
                        expanded: false,
                        description: "DSU emphasizes holistic student development through mentorship programmes, experiential learning, and co-curricular activities that build well-rounded graduates.",
                        highlights: [
                            "Personalized mentorship and career guidance programmes.",
                            "Experiential and project-based learning methodologies.",
                            "Student clubs, cultural events, and sports activities.",
                            "Mental health and wellness support services.",
                            "Leadership development and soft skills training.",
                        ],
                        documents: [
                            { id: 1, label: "Best Practice Document 1 (PDF)", url: "#" },
                        ],
                    },
                ],
            },
            "institutional-distinctiveness": {
                heading: "Institutional Distinctiveness",
                description: "Dayananda Sagar University stands distinguished for its unique integration of innovation, sustainability, and industry-readiness in higher education. The University's commitment to holistic education, research excellence, and community service sets it apart as a leading institution in India.",
                quickLinks: [],
                bestPractices: [],
            },
        },
    },
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AcademicQualitySection data={local_data.academicQualitySection} />
        </>
    );
}
