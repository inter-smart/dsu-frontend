import InnerHero from "@/components/layout/common/InnerHero";
import AcademicCollaboration from "@/components/sections/academics/academic-collaboration";
import AcademicHomeOverview from "@/components/sections/academics/academic-home-overview";
import AcademicPartners from "@/components/sections/academics/academic-partners";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import DeanMessage from "@/components/sections/academics/dean-message";
import NewsEvents from "@/components/sections/news-events/news-events";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "School of Computer Applications page title",
        metaDescription: "School of Computer Applications page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "School of Computer Applications page title",
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
        ],
        menuBar: true
    },
    programOverviewSection: {
        eyebrow: "OVERVIEW",
        heading: "About School of Computer Applications",
        intro: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Established in the academic year 2016-17, the School of Computer Applications at Dayananda Sagar University is dedicated to fostering fresh talent and preparing students for successful careers in the dynamic field of Information Technology. Our aim is to nurture fresh talent in the field of Information Technology by equipping students with a wide array of skills, enabling them to choose their area of interest from an early stage."
                    },
                ],
            },
        ],
        cta: {
            label: "Read More  ",
            file: {
                alternativeText: "Placement Report PDF",
                mime: "application/pdf",
                url: "/ ",
            },
        },
        media: [
            {
                alternativeText: "Students collaborating in a modern computer lab with laptops",
                mime: "image/jpg",
                // if video - mime: "video/mp4",
                url: "/images/academic-overview.jpg",
            },
        ],
        stats: [
            {
                id: 1,
                value: "8+",
                label: "Schools",
            },
            {
                id: 2,
                value: "50+",
                label: "Programmes",
            },
            {
                id: 3,
                value: "AI",
                label: "Enabled Learning",
            },
            {
                id: 4,
                value: "100%",
                label: "Skill Focused",
            },
        ],

    },

    messageFromDean: {
        heading: "A Message from Our Dean",
        media: {
            alternativeText: "Dr. S. Senthil, Professor & Dean, School of Computer Applications",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/dean.jpg",
        },
        featuredPerson: {
            name: "Dr. S. Senthil.",
            designation: "Professor & Dean, School of Computer Applications.",
            institution: "Dayananda Sagar University, Bengaluru.",
        },
        quote: {
            text: "The best way to predict the future is to create it.",
            author: "Peter Drucker",
        },
        cta: {
            label: "Read More  ",
            file: {
                alternativeText: "Placement Report PDF",
                mime: "application/pdf",
                url: "/ ",
            },
        },
        message: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Welcome to the School of Computer Applications, where we are committed to fostering future leaders in computer science through a holistic and innovative educational approach. Our mission is to provide students with a rigorous curriculum, world-class facilities, and unparalleled support to excel in academia, research, and industry.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our comprehensive curriculum, designed to stay at the forefront of technological advancements, blends traditional and contemporary teaching methods, including lectures, hands-on labs, workshops, and industry collaborations.",
                    },
                ],
            },

        ],
    },


}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AcademicMenubar className="md:!hidden block" />
            <AcademicHomeOverview data={local_data.programOverviewSection} />
            <DeanMessage data={local_data.messageFromDean}  varient="home" />
        </>
    )
}

