import InnerHero from "@/components/layout/common/InnerHero";
import AcademicAchievements from "@/components/sections/academics/academic-achievements";
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
        metaTitle: "Statistics page title",
        metaDescription: "Statistics page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Statistics page title",
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
                label: "Statistics ",
                href: "/",
            },
        ],
        PlacementmenuBar: true
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
        note: "Note: Placement statistics are based on the 2026 placement report."
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
    successStoriesSection: {
        heading: "Student Success Stories",
        videosHeading: "Videos",
        otherHeading: "Other",
        videos: [
            {
                id: 1,
                title: "Student Success Story 1",
                videoUrl: "/videos/home-testimonial-1.mp4",
                poster: "/images/home-about-1.jpg",
            },
            {
                id: 2,
                title: "Student Success Story 2",
                videoUrl: "/videos/home-testimonial-2.mp4",
                poster: "/images/chapter-1.jpg",
            },
            {
                id: 3,
                title: "Student Success Story 3",
                videoUrl: "/videos/home-testimonial-3.mp4",
                poster: "/images/chapter-2.jpg",
            },
            {
                id: 4,
                title: "Student Success Story 4",
                videoUrl: "/videos/home-testimonial-4.mp4",
                poster: "/images/facility-1.jpg",
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
                avatar: "/images/home-testimonial-avatar-1.jpg",
                badge: "/images/home-badge-2.png",
            },
            {
                id: 2,
                title: "Turning Preparation into Opportunity",
                quote: "The combination of academics, projects and placement preparation helped me understand what the industry expects. The experience gave me the confidence to perform well during the recruitment process.",
                name: "Ravi Sharma",
                role: "Advisor at Bain & Company",
                degree: "B.Sc Computer Science, 2023",
                avatar: "/images/home-testimonial-avatar-2.png",
                badge: "/images/home-badge-2.png",
            },
            {
                id: 3,
                title: "Building Skills, Creating Opportunities",
                quote: "The combination of technical learning, hands-on projects and placement preparation at DSU helped me develop the confidence to face industry interviews. The support from the faculty and placement team made the recruitment journey",
                name: "Nisha Patel",
                role: "Analyst at Deloitte",
                degree: "B.Tech CSE, 2023",
                avatar: "/images/home-testimonial-avatar-3.png",
                badge: "/images/home-badge-2.png",
            },
            {
                id: 4,
                title: "Preparing for a Professional Journey",
                quote: "My experience at DSU helped me grow beyond academics. Industry-oriented training, practical exposure and interview preparation helped me understand my strengths and approach the placement process with greater confidence.",
                name: "Karan Singh",
                role: "Strategist at Accenture",
                degree: "B.Tech in CSE, 2023",
                avatar: "/images/home-testimonial-avatar-4.jpg",
                badge: "/images/home-badge-2.png",
            },
        ],
    }

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <PlacementmenuBar className="lg:!hidden block" />
            <AcademicAchievements data={local_data.achievementSection} variant="AiChapter" />
            <SchoolPlacement data={local_data.schoolPlacement} />
            <StudentSuccessStories data={local_data.successStoriesSection} />
        </>
    )
}
