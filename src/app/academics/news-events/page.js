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
        menuBar: true
    },

    newsEvents: {
        title: "News & Events",
        newsEvents: [
            {
                id: 1,
                path: "/images/news-event-1.jpg",
                title:
                    "AI Adoption in Higher Education: Key for Building a Net-Zero Future Enabled Viksit Bharat 2047   ",
                date: "29th",
                year: "Dec 2025",
                link: "#!",
            },
            {
                id: 2,
                path: "/images/news-event-2.jpg",
                title:
                    "DSU is hosting FICCI-MERCEDES BENZ roadshow on 16th Dec 2025, at DSU Main campus, Harohalli",
                date: "29th",
                year: "Dec 2025",
                link: "#!",
            },
            {
                id: 3,
                path: "/images/news-event-3.jpg",
                title:
                    "DSU is participating as EDUTECH Sponsor in the Bengaluru Tech Summit-2025",
                date: "29th",
                year: "Dec 2025",
                link: "#!",
            },
            {
                id: 4,
                path: "/images/news-event-4.jpg",
                title:
                    "Five Days Faculty Development Program on“Entangle 25: A Hands-on workshop on Quantum Computing & its emerging paradigms",
                date: "15th",
                year: "Dec 2025",
                link: "#!",
            },
            {
                id: 5,
                path: "/images/news-event-5.jpg",
                title:
                    "International Conference on Translational and Technological Advances in Health Sciences",
                date: "15th",
                year: "Dec 2025",
                link: "#!",
            },
            {
                id: 6,
                path: "/images/news-event-6.jpg",
                title: "5th National Pharmacovigilance Week Celebrations",
                date: "15th",
                year: "Dec 2025",
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
            <NewsEvents data={local_data?.newsEvents} />


        </>
    )
}

