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
                title: "Research Paper Presented at ICCIDS 2026 on AI-Based Named Entity Recognition",
                description: "A research paper titled \"Comparative Evaluation of Transformer-Based and Baseline NER Models for Kenyan Financial Text\" was presented by Mr. Chandaka Giri Babu and Ms priyanka soni, Assistant Professor, SCA at the 9th International Conference on Computational Intelligence and Data Science (ICCIDS 2026). The conference was organized by the Department of Computer Science and Engineering, Sri Sivasubramaniya Nadar College of Engineering, and held from January 8–10, 2026.",
                media: {
                    alternativeText: "Certificate of Participation for ICCIDS 2026 conference",
                    mime: "image/jpg",
                    // if video - mime: "video/mp4",
                    url: "/images/achievement-1.jpg",
                },
            },
            {
                id: 2,
                date: "9th January 2026",
                title: "Dr. Kokila R Delivers Invited Talk at ICAIDF 2026",
                description: "An invited talk was delivered by Dr. Kokila R, Associate Professor, School of Computer Applications, Dayananda Sagar University, as part of the international conference \"AI-Driven Digital Futures: Leveraging Intelligent Systems for Inclusive Sustainable Societies (ICAIDF-2026)\" held on 9th January 2026 at CTTE College for Women. The session highlighted the role of intelligent systems in building inclusive and sustainable societies and provided valuable academic and research insights to participants. The talk was well received and contributed significantly to the objectives of the conference.",
                media: {
                    alternativeText: "Invited talk banner for Dr. Kokila R at ICAIDF 2026 conference",
                    mime: "image/jpg",
                    // if video - mime: "video/mp4",
                    url: "/images/achievement-2.jpg",
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

