import InnerHero from "@/components/layout/common/InnerHero";
import HistoryNewpahse from "@/components/sections/history/history-newpahse";


const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "about page title",
        metaDescription: "about page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "History page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/history/Banner.jpg",
        },
        title: "History",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "Why DSU",
                href: "/why-dsu",
            },
            {
                label: "About DSU",
                href: "/why-dsu/about-dsu",
            },
            {
                label: "History",
                href: "/why-dsu/about-dsu",
            },
        ],

    },
    newPahseSection: {
        title: "Dayananda Sagar University - A New Phase of DSI",
        media: {
            mime: "image/jpg",
            url: "/images/history/newpaseBanner.jpg",
            alternativeText: "Dayananda Sagar University",
        },
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "With its strong foundation in creating Dayananda Sagar Institutions as a great academic centre in previous century, the education provider stepped up to be a State Private University to offer a new canvas for the young global citizens to transform their creative abilities to conquer the world.",
                    },
                    {
                        type: "text",
                        text: "In the advent of Make in India and start-up era, Dayananda Sagar University is moving ahead with time and requirement to enable a ecosystem that nurtures young minds to be a innovator, entrepreneur and a leader. Thus, building a competency in multiple domains, mastering in technology, management and networking, proficient in marketing & finance and ability to appreciate art and culture.",
                    },
                ],
            },
        ],
    }
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <HistoryNewpahse data={local_data.newPahseSection} />
        </>
    )
}
