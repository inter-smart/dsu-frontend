import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import NewsEvents from "@/components/sections/news-events/news-events";
import { loadSchoolTabData, schoolTabMetadata } from "@/lib/schools/tab-page";

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
        pagination: null,
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

const TAB = "news-events";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return schoolTabMetadata(slug, TAB);
}

export default async function Page({ params }) {
    const { slug } = await params;
    const { data, hero, hasDepartments } = await loadSchoolTabData(slug, TAB, local_data);

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={hasDepartments}>
            <NewsEvents data={data.newsEvents} schoolSlug={slug} />
        </SchoolTabShell>
    );
}
