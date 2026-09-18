import InnerHero from "@/components/layout/common/InnerHero";
import AcademicAchievements from "@/components/sections/academics/academic-achievements";
import AcademicCollaboration from "@/components/sections/academics/academic-collaboration";
import AcademicFacultyAchievements from "@/components/sections/academics/academic-faculty-achievements";
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
        AimenuBar: true
    },
    achievementSection: {
        heading: "Achievements",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Celebrating the research, recognition, and results earned by the faculty and students of the School of Computer Applications — an NAAC A+ institution and India's AI-First University. Celebrating the research, recognition, and results earned by the faculty and students of the School of Computer Applications — an NAAC A+ institution and  ",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "India's AI-First University.Celebrating the research, recognition, and results earned by the faculty and students of the School of Computer Applications — an NAAC A+ institution and India's AI-First University.",
                    },
                ],
            },
        ],
        stats: [
            {
                id: 1,
                value: "54+",
                label: "Research Projects & Dissertations",
            },
            {
                id: 2,
                value: "7+",
                label: "Nursing Book Chapters",
            },
            {
                id: 3,
                value: "5+",
                label: "Industry & Academic Partners",
            },
            {
                id: 4,
                value: "3+",
                label: "Research Presentation Awards",
            },
        ],
    },
    facultyAchievementsSection : {
        heading: "Faculty Achievements",
        tabToggle: {
            options: [
                {
                    id: 1,
                    label: "Faculty Achievements",
                    isActive: true,
                },
                {
                    id: 2,
                    label: "Student Achievements",
                    isActive: false,
                },
            ],
        },
        monthFilters: [
            { id: 1, label: "June 2026", isActive: false },
            { id: 2, label: "May 2026", isActive: false },
            { id: 3, label: "Apr 2026", isActive: false },
            { id: 4, label: "Mar 2026", isActive: false },
            { id: 5, label: "Feb 2026", isActive: false },
            { id: 6, label: "Jan 2026", isActive: true },
            { id: 7, label: "2025", isActive: false },
            { id: 8, label: "2024", isActive: false },
            { id: 9, label: "2023", isActive: false },
        ],
        achievements: [
            {
                id: 1,
                date: "January 8–10, 2026.",
                title: "Research Paper Presented at National Nursing Conference",
                description: "Dr. Sharmila J, Professor & Principal, College of Nursing Sciences, presented her research work at a national-level nursing conference, contributing to academic discussions in Mental Health Nursing and nursing education. Her research and professional contributions reflect the college's commitment to advancing evidence-based nursing practice.",
                media: {
                    alternativeText: "Certificate of Participation for ICCIDS 2026 conference",
                    mime: "image/jpg",
                    // if video - mime: "video/mp4",
                    url: "/images/achievement-1.jpg",
                },
            },
            
           
        ],
    }


}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AcademicMenubar className="md:!hidden block" />
            <AcademicAchievements data={local_data.achievementSection} />
            <AcademicFacultyAchievements data={local_data.facultyAchievementsSection} />

        </>
    )
}

