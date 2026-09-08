import InnerHero from "@/components/layout/common/InnerHero";
import AcademicAchievements from "@/components/sections/academics/academic-achievements";
import AcademicCollaboration from "@/components/sections/academics/academic-collaboration";
import AcademicPartners from "@/components/sections/academics/academic-partners";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Industry Collaborations page title",
        metaDescription: "Industry Collaborations page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Industry Collaborations page title",
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
                label: "Industry Collaborations ",
                href: "/",
            },
        ],
        menuBar: true
    },
    achievementSection: {
        heading: "Achievements",
          description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Celebrating the research, recognition, and results earned by the faculty and students of the School of Computer Applications — an NAAC A+ institution and India's AI-First University. Celebrating the research, recognition, and results earned by the faculty and students of the School of Computer Applications — an NAAC A+ institution and ",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "India's AI-First University.Celebrating the research, recognition, and results earned by the faculty and students of the School of Computer Applications — an NAAC A+ institution and India's AI-First University. ",
                    },
                ],
            },
        ],
        stats: [
            {
                id: 1,
                value: "12+",
                label: "Faculty Honours & Publications",
            },
            {
                id: 2,
                value: "40+",
                label: "Student Wins & Certifications",
            },
            {
                id: 3,
                value: "8+",
                label: "Industry & Academic Partners",
            },
            {
                id: 4,
                value: "2023–25",
                label: "Achievement Window",
            }, 
        ],
    },
    


}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AcademicMenubar className="md:!hidden block" /> 
            <AcademicAchievements data={local_data.achievementSection} />


        </>
    )
}

