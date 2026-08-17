import InnerHero from '@/components/layout/common/InnerHero'
import AboutLegacy from '@/components/sections/about/about-legacy';
import AboutWelcome from '@/components/sections/about/about-welcome';
import React from 'react'

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
            alternativeText: "about page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/about-Banner.jpg",
        },
        title: "About Dayananda Sagar University",
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
        ],

    },

    welcomeSection: {
        title: "Welcome to Dayananda Sagar University",

        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Dayananda Sagar Institutions founded in the 60s by one such visionary, late Sri Dayananda Sagar committed to take knowledge to the people, transforms today's students into responsible citizens and professional leaders of tomorrow. Dayananda Sagar University created by an Act of the Karnataka State in 2014, built on this admirable legacy and inspired by its own milestones, meeting the needs of quality higher education in this part of the world.",
                    },
                ],
            },
        ],

        media: {
            type: "image",
            image: {
                url: "/images/about/about-welcome-1.jpg",
                alternativeText: "Dayananda Sagar University",
            },
            video: null,
        },

        innovationPanel: {
            title: "Powering the Future with AI-Driven Innovation",

            backgroundMedia: {
                type: "image",
                image: {
                    url: "/images/about/about-welcome-2.jpg",
                    alternativeText: "AI-driven innovation at Dayananda Sagar University",
                },
                video: null,
            },
            items: [
                {
                    id: 1,
                    title: "NVIDIA's",
                    description: [
                        {
                            type: "paragraph",
                            children: [
                                {
                                    type: "text",
                                    text: "An Architectural AI Architecture",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 2,
                    title: "AI-First",
                    description: [
                        {
                            type: "paragraph",
                            children: [
                                {
                                    type: "text",
                                    text: "@ DSU",
                                },
                            ],
                        },
                    ],
                },
                {
                    id: 3,
                    title: "DSU's",
                    description: [
                        {
                            type: "paragraph",
                            children: [
                                {
                                    type: "text",
                                    text: "Centre of Excellence",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    },
    legacySection: {
        legacyHighlights: [
            {
                id: 1,
                title: "Unveiling a Legacy",
                icon: "/images/about/about_icon1.svg",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Universities of global legacy across the world are invaluable contribution of certain visionaries to the world. Universities don’t manufacture products with specific use and defined life cycle. They share & impart multitudes of streams of knowledge and create wonderful human beings – learned practitioners & Disseminators of knowledge to make the world a better place to be. These Universities of great significance have lived through the centuries building centers of knowledge and great alumni of such Universities.",
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                title: "Proud to be Part of DSI",
                icon: "/images/about/about_icon2.svg",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "DSU is a proud member of the Dayananda Sagar Institutions family. Founded by Late Sri Dayananda Sagar in the early sixties (with just four students), DSI has morphed into global education power house, spread over five campuses, catering to the education needs of over 17,000 students. Operating under the aegis of the Mahatma Gandhi Vidya Peetha Trust Bengaluru, DSI has enabled the transformation of tens of thousands of young Indian and international citizens into professionals in diverse specializations.",
                            },
                        ],
                    },
                ],
            },
            {
                id: 3,
                title: "Best-in-class Facilities",
                icon: "/images/about/about_icon3.svg",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Besides our high-calibre teaching staff, the students are given a challenging academic environment with well-equipped lecture theatres, laboratories, excellent libraries and computer networking facilities. DSU also has exceptional infrastructure for students who possess a passion for sports and games. The hostel facilities, encompassing cultural and recreational needs, cater to both local and international students.",
                            },
                        ],
                    },
                ],
            },
            {
                id: 4,
                title: "Inspired by Innovators",
                icon: "/images/about/about_icon4.svg",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Research, Innovation and Incubation (spread over 25,000 sft of industry quality labs) form the core of DSU. So it isn’t surprising that DSU has taken the next logical step: Laying the foundation to transform the entrepreneurial dream of every young Indian and global citizen into a reality. Enabling this transformation is the active support of industry leaders, industry bodies and a dedicated 1 lakh square feet modern ready-to-move-in infrastructure!",
                            },
                        ],
                    },
                ],
            },
            {
                id: 5,
                title: "Stellar Performance – Time and Again",
                icon: "/images/about/about_icon5.svg",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Dayananda Sagar Institutions (DSI) have consistently topped the academic charts in every area of knowledge, standing out from the midst of a sea of institutions of repute. Its accomplishments are unparalleled. In the recent past, DSI secured 58 ranks from Visvesvaraya Technological University among 220 engineering colleges in Karnataka (in 2014).",
                            },
                        ],
                    },
                ],
            },
            {
                id: 6,
                title: "Different Courses for Different Passions",
                icon: "/images/about/about_icon6.svg",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Beginning Academic Year 2015–16, Dayananda Sagar University would offer courses in Engineering, Computer Applications, Sciences, Arts and Management in the Bachelors, Masters and Ph.D levels. Supporting the academic activities are the Centers of Excellence in ICT, Health Care, Energy and Life Science, among other fast evolving fields of study.",
                            },
                        ],
                    },
                ],
            },
        ],
    }


};
export default function Page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AboutWelcome data={local_data.welcomeSection} />
            <AboutLegacy data={local_data.legacySection} />
        </>
    )
}
