import InnerHero from "@/components/layout/common/InnerHero";
import AcademicAchievements from "@/components/sections/academics/academic-achievements";
import PlacementSections from "@/components/sections/academics/PlacementDashboard";
import PlacementDashboard from "@/components/sections/academics/PlacementDashboard";
import CorporateConnect from "@/components/sections/placements/corporate-connect";
import IndustryProjects from "@/components/sections/placements/IndustryProjects";
import InternshipOpportunities from "@/components/sections/placements/Intership-Opertunities";
import InternshipPartners from "@/components/sections/placements/Placement-Partners";
import PlacementProcess from "@/components/sections/placements/placement-process";
import PlacementReport from "@/components/sections/placements/Placement-report";
import PlacementDocuments from "@/components/sections/placements/PlacementDocuments";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import SchoolPlacement from "@/components/sections/placements/School-placement";
import StudentSuccessStories from "@/components/sections/placements/student-success-stories";

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
    programOverviewSection:
    {
        eyeBrow: "Internship",
        heading: "Internship Programme",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Internship support plays a crucial role in helping students acquire hands-on experience, familiarize themselves with professional environments, and effectively apply their academic knowledge in practical situations. ",
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
            alternativeText: "Recruiters shaking hands during a campus recruitment interaction",
            mime: "image/jpg",
            url: "/images/intershipBg.jpg",
        },
    },
    internshipPartners: {
        heading: "Our Internship Partners Include",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Discover the internship partners that provide valuable industry exposure and opportunities across the various schools and programs at DSU.",
                    },
                ],
            },
        ],
        partners: [
            { id: 1, name: "Department of Students Aairs" },
            { id: 2, name: "Chetal International Group LLC" },
            { id: 3, name: "Gizmo Plugs" },
            { id: 4, name: "DERBI / MentorLink" },
            { id: 5, name: "WE DEZIN" },
            { id: 6, name: "Real Foundation & many more" },
        ],
    },
    successStoriesSection: {
        heading: "Internship Success Stories",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Discover inspiring internship success stories and the valuable industry experiences offered through DSU's diverse schools and programs.",
                    },
                ],
            },
        ],
        stories: [
            {
                id: 1,
                title: "From DSU to Industry",
                quote: "The placement training at DSU helped me improve my technical knowledge, communication and interview skills. The guidance and practical exposure gave me the confidence to take on the recruitment process.",
                name: "Arjun Menon",
                role: "Infosys",
                degree: "B.Tech CSE, 2023",
                avatar: "/images/avatar-1.jpg"
            },
            {
                id: 2,
                title: "Turning Preparation into Opportunity",
                quote: "The combination of academics, projects and placement preparation helped me understand what the industry expects. The experience gave me the confidence to perform well during the recruitment process.",
                name: "Ravi Sharma",
                role: "Advisor at Bain & Company",
                degree: "B.Sc Computer Science, 2023",
                avatar: "/images/avatar-1.jpg",
            },
            {
                id: 3,
                title: "Building Skills, Creating Opportunities",
                quote: "The combination of technical learning, hands-on projects and placement preparation at DSU helped me develop the confidence to face industry interviews. The support from the faculty and placement team made the recruitment journey",
                name: "Nisha Patel",
                role: "Analyst at Deloitte",
                degree: "B.Tech CSE, 2023",
                avatar: "/images/avatar-1.jpg",
            },
            {
                id: 4,
                title: "Preparing for a Professional Journey",
                quote: "My experience at DSU helped me grow beyond academics. Industry-oriented training, practical exposure and interview preparation helped me understand my strengths and approach the placement process with greater confidence.",
                name: "Karan Singh",
                role: "Strategist at Accenture",
                degree: "B.Tech in CSE, 2023",
                avatar: "/images/avatar-1.jpg",
            },
        ],
    },
    industryProjects: {
        heading: "Work on Real-World Industry Projects",
        subheading: "Turn classroom knowledge into practical solutions through industry-linked projects, experiential learning and hands-on problem solving.",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "At Dayananda Sagar University, students get opportunities to apply their academic knowledge to real-world challenges through mini projects, minor projects and major projects. Students are encouraged to work on projects in societal, cutting-edge and research areas, with opportunities to undertake projects with industries and reputed organisations.",
                    },
                ],
            },
        ],
        media: {
            alternativeText: "Students assembling a robotic vehicle in an engineering lab",
            mime: "image/jpg",
            url: "/images/industryPartner.jpg",
        },
        cards: [
            {
                id: 1,
                title: "Industry Projects",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Engage in hands-on experiences by tackling real-world challenges and collaborating on projects with esteemed industry partners and well-known organizations. This approach not only enhances your skills but also provides valuable insights into the professional landscape.",
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                title: "Experiential Learning",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Gain practical understanding through industry visits, live assignments and interactions with industry professionals. DSU's students have, for example, explored operations, supply chains, manufacturing and business practices through visits to organisations such as ",
                            },
                            {
                                type: "text",
                                text: "TVS Motor Company, BEML, IKEA, HAL and Bangalore Dairy.",
                                bold: true,
                            },
                        ],
                    },
                ],
            },
            {
                id: 3,
                title: "Major & Research Projects",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Enhance your technical and professional skills by engaging in significant projects that tackle pressing societal challenges. These projects will not only focus on emerging technologies but also delve into various research areas, providing you with a comprehensive learning experience that prepares you for the future.",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    intershipOpertunities: {
        heading: "Internship Opportunities",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Explore internship opportunities and industry exposure available across DSU's schools and programmes.",
                    },
                ],
            },
        ],
        tabs: [
            {
                id: 1,
                label: "Engineering",
                title: "School of Engineering",
                description: "Internship opportunities for engineering programmes",
                programmes: [],
            },
            {
                id: 2,
                label: "Commerce & Management",
                title: "School of Commerce & Management",
                description: "Internship opportunities for management and commerce programmes",
                programmes: [
                    {
                        id: 1,
                        name: "BBA",
                        description: "DSU SCMS integrates two structured internships into the BBA program to ensure students gain both social awareness and corporate exposure",
                        internships: [
                            {
                                id: 1,
                                title: "Social Immersion Internship (Semester III)",
                                duration: "Duration: 4 - 6 weeks (1 month to 1.5 months)",
                            },
                            {
                                id: 2,
                                title: "Corporate Internship (Semester V)",
                                duration: "Duration: 6–8 weeks (1 month to 1.5 months)",
                            },
                        ],
                        cta: {
                            label: "Download/View Brochure",
                            file: {
                                alternativeText: "BBA internship brochure PDF",
                                mime: "application/pdf",
                                url: "/documents/bba-internship-brochure.pdf",
                            },
                        },
                    },
                    {
                        id: 2,
                        name: "BBA",
                        description: "",
                        internships: [],
                        cta: null,
                    },
                ],
            },
            { id: 3, label: "Computer Applications", title: "School of Computer Applications", description: "Internship opportunities for computer applications programmes", programmes: [] },
            { id: 4, label: "Basic & Applied Sciences", title: "School of Basic & Applied Sciences", description: "Internship opportunities for science programmes", programmes: [] },
            { id: 5, label: "Health Sciences", title: "School of Health Sciences", description: "Internship opportunities for health sciences programmes", programmes: [] },
            { id: 6, label: "Design", title: "School of Design", description: "Internship opportunities for design programmes", programmes: [] },
            { id: 7, label: "Law", title: "School of Law", description: "Internship opportunities for law programmes", programmes: [] },
            { id: 8, label: "Arts & Humanities", title: "School of Arts & Humanities", description: "Internship opportunities for arts and humanities programmes", programmes: [] },
        ],
    }
}
export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <PlacementmenuBar className="lg:!hidden block" />
            <CorporateConnect data={local_data.programOverviewSection} />
            <InternshipOpportunities data={local_data.intershipOpertunities} />
            <InternshipPartners data={local_data.internshipPartners} />
            <IndustryProjects data={local_data.industryProjects} />
            <StudentSuccessStories data={local_data.successStoriesSection} />
        </>
    )
}