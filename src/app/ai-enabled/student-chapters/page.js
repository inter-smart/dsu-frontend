import InnerHero from "@/components/layout/common/InnerHero";
import AcademicAchievements from "@/components/sections/academics/academic-achievements";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import AiAcademicChapters from "@/components/sections/ai-enabled/Ai-academicChapters";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Student Chapters page title",
        metaDescription: "Student Chapters page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Student Chapters page title",
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
                label: "Student Chapters",
                href: "/",
            },
        ],
        AimenuBar: true
    },
    achievementSection: {
        heading: "Student Chapters",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "At DSU, our engineering chapters are at the forefront of innovation, bridging the gap between students and the professional organizations that influence various engineering fields. From cutting-edge robotics to sustainable renewable energy solutions, we offer a plethora of opportunities. Engage in hands-on workshops, participate in exciting competitions, and build valuable connections through our extensive technical networks. Join us to explore the dynamic world of engineering and enhance your career prospects!  ",
                    },
                ],
            },
        ],
        stats: [
            {
                id: 1,
                value: "08+",
                label: "Active Chapters",
            },
            {
                id: 2,
                value: "1200+",
                label: "Student Members",
            },
            {
                id: 3,
                value: "60+",
                label: "Events / Year",
            },
            {
                id: 4,
                value: "25+",
                label: "National Awards",
            },
        ],
    },
    departmentChapters: {
        heading: "Chapters in this Department",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Each chapter is affiliated with a national student or service body and mentored by a faculty coordinator. Figures marked * are placeholders — confirm with the department before publishing.",
                    },
                ],
            },
        ],
        chapters: [
            {
                id: 1,
                code: "SNA",
                image: {
                    alternativeText: "Student Nurse Association members",
                    mime: "image/jpeg",
                    url: "/images/chapter-1.jpg",
                },
                title: "Student Nurse Association",
                description: "National body under TNAI (est. 1929) for professional ethics, leadership and nursing advocacy.",
                stats: {
                    members: "310 MEMBERS",
                    events: "EVENTS: 18",
                    established: "ESTABLISHED: 2024",
                },
                link: "#!",
            },
            {
                id: 2,
                code: "YRC",
                image: {
                    alternativeText: "Youth Red Cross first aid banner",
                    mime: "image/jpeg",
                    url: "/images/chapter-2.jpg",
                },
                title: "Youth Red Cross",
                description: "Blood donation drives, disaster-response and first-aid training with the Indian Red Cross Society.",
                stats: {
                    members: "310 MEMBERS",
                    events: "EVENTS: 18",
                    established: "ESTABLISHED: 2024",
                },
                link: "#!",
            },
            {
                id: 3,
                code: "NSS",
                image: {
                    alternativeText: "National Service Scheme community health camp",
                    mime: "image/jpeg",
                    url: "/images/chapter-3.jpg",
                },
                title: "National Service Scheme",
                description: "Community health camps, rural health surveys and public health outreach.",
                stats: {
                    members: "310 MEMBERS",
                    events: "EVENTS: 18",
                    established: "ESTABLISHED: 2024",
                },
                link: "#!",
            },
            {
                id: 4,
                code: "NCC",
                image: {
                    alternativeText: "National Cadet Corps students in uniform",
                    mime: "image/jpeg",
                    url: "/images/chapter-4.jpg",
                },
                title: "National Cadet Corps",
                description: "Discipline, leadership and emergency-response training under India's tri-service cadet organisation.",
                stats: {
                    members: "310 MEMBERS",
                    events: "EVENTS: 18",
                    established: "ESTABLISHED: 2024",
                },
                link: "#!",
            },
            {
                id: 5,
                code: "RC",
                image: {
                    alternativeText: "Rotaract Club emblem",
                    mime: "image/jpeg",
                    url: "/images/chapter-5.jpg",
                },
                title: "Rotaract Club",
                description: "Service projects and leadership development with Rotary International's collegiate wing.",
                stats: {
                    members: "310 MEMBERS",
                    events: "EVENTS: 18",
                    established: "ESTABLISHED: 2024",
                },
                link: "#!",
            },
            {
                id: 6,
                code: "NRF",
                image: {
                    alternativeText: "Nursing Research Forum student reviewing documents",
                    mime: "image/jpeg",
                    url: "/images/chapter-6.jpg",
                },
                title: "Nursing Research Forum*",
                description: "Student research circle for paper-writing, journal clubs and evidence-based practice — confirm this exists at DSU.",
                stats: {
                    members: "310 MEMBERS",
                    events: "EVENTS: 18",
                    established: "ESTABLISHED: 2024",
                },
                link: "#!",
            },
        ],
    },     

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AcademicMenubar className="md:!hidden block" />
            <AcademicAchievements data={local_data.achievementSection} variant="AiChapter" />
            <AiAcademicChapters data={local_data.departmentChapters} />

        </>
    )
}

