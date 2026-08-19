import InnerHero from "@/components/layout/common/InnerHero"
import ChancellorMessage from "@/components/sections/chancellor/chancellor-message"



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
        title: "Chancellor",
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
                href: "/why-dsu/Chancellor",
            },
        ],

    },
    chancellorMessage: {
        name: "Dr. D. Hemachandra Sagar",
        designation: "Chancellor, DSU",
        email: "Sagar333@hotmail.com",
        phone: "080- 2449 6999",
        linkText: "Click Here...",
        linkUrl: "#",
        image: {
            url: "/images/chancellor/chancellor.jpg",
            alternativeText: "Dayananda Sagar University",
        },
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Join me in taking the first steps as we set up the Dayananda Sagar University (DSU) that is backed by the legacy of Dayananda Sagar Institutions. The Year 2015 would be one more major milestone in our pursuit of excellence in the higher education space opening up a significant opportunity to the community that we belong to."
                    },
                    
                ],
            },
            {
                type: "paragraph",
                children: [
                    
                    {
                        type: "text",
                        text: "DSU is committed to give more now and in the days to come by designing academic programs that reflect present societal needs and that of the distant future. This knowledge would vest a new power and intellect in an individual. The education and training at DSU allows a young graduate to be seen as a proficient & master, in a chosen domain. "
                    }, 
                ],
            },
            {
                type: "paragraph",
                children: [
                    
                    {
                        type: "text",
                        text: "The journey of the past five decades in our campuses is one of great fulfillment witnessed by the successes that we have achieved; encouraging us to develop a new vision – to achieve newer goals to be realized in the years to come. Welcome to Dayananda Sagar University and wishing all of you a great future!"
                    },
                ],
            },
        ],
        closingNote: "BEST WISHES !"
    }
}
export default function Page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <ChancellorMessage data={local_data.chancellorMessage} />
        </>
    )
}
