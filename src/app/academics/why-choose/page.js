import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import WhyChoose from "@/components/sections/academics/why-choose";


const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Academic page title",
        metaDescription: "Academic page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Academic page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "School of Computer Applications",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "AI Enabled Academics",
                href: "/",
            },
            {
                label: "Schools",
                href: "/",
            },
            {
                label: "Computer Applications",
                href: "/",
            },
            {
                label: "Why Choose",
                href: "/",
            },
        ],
        menuBar: true
    },

    whyChooseThisSchool: {
        heading: "Why Choose this School",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our comprehensive curriculum, designed to stay at the forefront of technological advancements, blends traditional and contemporary teaching methods, including lectures, hands-on labs, workshops, and industry collaborations.",
                    },
                ],
            }
        ],
        points: [
            {
                id: 1,
                title: "Future-Ready Curriculum Aligned with Industry 4.0",
                description: "Our dynamic, multi-disciplinary curriculum across all programs is meticulously designed to match the evolving demands of Industry 4.0, ensuring graduates are future-ready.",
            },
            {
                id: 2,
                title: "Specialized Learning Tracks for Career Customization",
                description: "Programs offer distinct specialization tracks, allowing students to tailor their academic journey in areas like Artificial Intelligence, Data Science, Cyber Security, Cloud Computing, & Web & Mobile Application Development.",
            },
            {
                id: 3,
                title: "Cutting-Edge Labs and Technology Infrastructure",
                description: "The school offers access to modern laboratories & advanced technology infrastructure, providing students with hands-on experience in emerging tools, software, & industry-relevant technologies.",
            },
            {
                id: 4,
                title: "Industry Immersion and Experiential Learning",
                description: "Structured industry immersion programs, internships, and collaborative projects with leading tech companies provide real-world exposure and practical insights across all programs.",
            },
            {
                id: 5,
                title: "Emphasis on Research and Innovation",
                description: "A thriving research culture encourages students & faculty to engage in innovative projects, publish in reputed journals, & contribute to solving real-world problems through interdisciplinary research.",
            },
            {
                id: 6,
                title: "Global Certifications and International Exposure",
                description: "Students have access to globally recognized certifications, international hackathons, seminars, and collaborative workshops, enhancing their global employability and cross-cultural competencies.",
            },
            {
                id: 7,
                title: "Entrepreneurship and Startup Ecosystem",
                description: "Strong support for aspiring entrepreneurs through the Dayananda Sagar Entrepreneurship Research & Business Incubator (DERBI), nurturing innovative ideas into successful ventures.",
            },
            {
                id: 8,
                title: "Personalized Mentorship and Career Support",
                description: "A dedicated one-on-one mentoring system ensures personalized academic and career guidance, while a robust placement cell connects students with top-tier companies for internships and placements.",
            },
            {
                id: 9,
                title: "Holistic Skill Development Focus",
                description: "Comprehensive programs on soft skills, leadership, critical thinking, and teamwork are embedded into the curriculum, ensuring students excel both technically and personally.",
            },
            {
                id: 10,
                title: "Multi-Stage Capstone and Live Projects",
                description: "Programs feature multi-stage capstone projects mentored by industry professionals, enabling students to tackle real-world challenges from ideation to deployment.",
            },
            {
                id: 11,
                title: "Vibrant Student Community and Tech Clubs",
                description: "A rich blend of technical clubs, coding challenges, hackathons, and cultural activities fosters a collaborative, innovative, and inclusive campus culture.",
            },
            {
                id: 12,
                title: "Strong Alumni and Industry Network",
                description: "Our ever-growing network of successful alumni and strong industry collaborations provide students with invaluable networking opportunities, mentorship, and career guidance throughout their journey.",
            },
        ],
    }
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AcademicMenubar className="md:!hidden block" />
            <WhyChoose data={local_data.whyChooseThisSchool} />
        </>
    )
}
