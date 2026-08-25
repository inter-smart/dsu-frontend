import InnerHero from "@/components/layout/common/InnerHero";
import HistoryNewpahse from "@/components/sections/history/history-newpahse";
import HistoryPillers from "@/components/sections/history/history-pillers";


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
                    }
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "In the advent of Make in India and start-up era, Dayananda Sagar University is moving ahead with time and requirement to enable a ecosystem that nurtures young minds to be a innovator, entrepreneur and a leader. Thus, building a competency in multiple domains, mastering in technology, management and networking, proficient in marketing & finance and ability to appreciate art and culture.",
                    },
                ],
            },
        ],
    },

    foundingPillars: {
        title: "Our Founding Pillars :",
        subtitle: "Inspiring the shape of things to come",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Dayananda Sagar Institutions founded in the 60s by one such visionary, late Sri Dayananda Sagar committed to take knowledge to the people, transforms today's students into responsible citizens and professional leaders of tomorrow.",
                    }
                ],
            },
        ],
        items: [
            {
                id: 1,
                name: "Late Shri R Dayananda Sagar",
                designation: "Founding Father",
                image: "/images/piller-1.png",
                description: "Our founding father, late Sri R Dayananda Sagar, was a graduate in Arts & Commerce from India & a barrister-at-law from England. He was a visionary, an educationist, a powerhouse of knowledge and a believer in transforming the world besides a leader par excellence who saw no reason to stay away from his responsibilities in setting up Mahatma Gandhi Vidya Peetha Education Trust in the 60s, the trust that contributed to educate the world for over 60 years carefully building an alumni of over 100,000 including accomplished professionals, law makers, sports personalities, celebrities spread all over the world."
            },
            {
                id: 2,
                name: "Late Smt Chandramma Sagar",
                designation: "Wife of the Founder",
                image: "/images/piller-2.png",
                description: "Wife of the founder, Late Smt Chandramma Sagar was a doctor by profession, the first Indian woman to have acquired a triple fellowship from the Royal College of Surgeons (FRCS) from London, Edinburgh & Glasgow. She was in the panel of doctors to the President of India."
            }
        ]
    }

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <HistoryPillers data={local_data.foundingPillars} />
            <HistoryNewpahse data={local_data.newPahseSection} />
        </>
    )
}
