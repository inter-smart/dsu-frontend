import InnerHero from "@/components/layout/common/InnerHero";
import AcademicCollaboration from "@/components/sections/academics/academic-collaboration";
import AcademicPartners from "@/components/sections/academics/academic-partners";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import NewsEvents from "@/components/sections/news-events/news-events";

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
                label: "News & Events",
                href: "/",
            },
        ],
        AimenuBar: true
    },

    newsEvents: {
        title: "News & Events",
        newsEvents: [   
            {
                id: 1,
                path: "/images/ai-news-1.jpg",
                title: "Newly elected student leaders took the oath of office, marking the beginning of their leadership journey at DSU.",
                date: "18th",
                year: "Mar 2026",
                link: "#!",
            },
            {
                id: 2,
                path: "/images/ai-news-2.jpg",
                title: "ENBC & FBNC Workshop: A  2 day workshop strengthened nursing students' practical skills & competency in essential & facility-based",
                date: "9th",
                year: "Mar 2025",
                link: "#!",
            },
            {
                id: 3,
                path: "/images/ai-news-3.jpg",
                title: "CBT Workshop: A two-day workshop enhanced participants' therapeutic skills through evidence-based Cognitive Behavioural Therapy techniques.",
                date: "16th",
                year: "Mar 2026",
                link: "#!",
            },
            {
                id: 4,
                path: "/images/ai-news-4.jpg",
                title: "Idea to Impact: A  motivational session inspired nursing students &faculty to explore healthcare entrepreneurship, innovation, and leadership.",
                date: "29th",
                year: "Dec 2025",
                link: "#!",
            },
            {
                id: 5,
                path: "/images/ai-news-5.jpg",
                title: "Sustainable Development Goals: A session highlighted sustainability, social responsibility, and nursing education's role in a better future.",
                date: "19th",
                year: "Feb 2026",
                link: "#!",
            },
            {
                id: 6,
                path: "/images/ai-news-6.jpg",
                title: "Mindful Learning: A wellness session promoted focus, stress management, and emotional wellbeing among school students.",
                date: "23rd",
                year: "Jun 2025",
                link: "#!",
            },

        ],
    },

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AcademicMenubar className="lg:!hidden block" />
            <NewsEvents data={local_data?.newsEvents} />


        </>
    )
}

