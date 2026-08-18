import InnerHero from '@/components/layout/common/InnerHero'
import AboutHistory from '@/components/sections/about/about-history';
import AboutLeadership from '@/components/sections/about/about-leadership';
import AboutLegacy from '@/components/sections/about/about-legacy';
import AboutRecognition from '@/components/sections/about/about-recognition';
import AboutVision from '@/components/sections/about/about-vision';
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
    },

    aboutVision: {
        label: "VISION · MISSION · VALUES",
        heading: "Throwing Light on the Way Forward",
        heroMedia: {
            alternativeText: "Vision title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/about/visionBanner.jpg",
        },
        items: [
            {
                title: "Mission",
                icon: "/images/about/vision_icon.svg",
                alt: "mision",
                description: "To be a centre of excellence in education, research & training, innovation & entrepreneurship and to produce citizens with exceptional leadership qualities to serve national and global needs."
            },
            {
                title: "Vision",
                icon: "/images/about/vision_icon1.svg",
                alt: "vision",
                description: "To achieve our objectives in an environment that enhances creativity, innovation and scholarly pursuits while adhering to our vision."
            },

        ],

        values:
        {
            title: "Values",
            icon: "/images/about/vision_icon3.svg",
            alt: "value",
            description: null,
            principles: [
                {
                    title: "The Pursuit of Excellence",
                    description: "A commitment to strive continuously to improve ourselves and our systems with the aim of becoming the best in our field."
                },
                {
                    title: "Fairness",
                    description: "A commitment to objectivity and impartiality, to earn the trust and respect of society."
                },
                {
                    title: "Leadership",
                    description: "A commitment to lead responsively and creatively in educational and research processes."
                },
                {
                    title: "Integrity and Transparency",
                    description: "A commitment to be ethical, sincere and transparent in all activities and to treat all individuals with dignity and respect."
                }
            ]
        }
    },

    recognitionSection: {
        heading: "Recognition and Rankings",
        subheading: [
            {
                type: "paragraph",
                children: [
                    { type: "text", text: "Access all official regulatory, accreditation and Statutory documents" }
                ]
            }
        ],
        columns: [
            {
                title: "Recognition",
                items: [
                    { label: "UGC Recognition", icon: "document", active: false, url: "" },
                    { label: "UGC 2(f)", icon: "document", active: true, url: "" },
                    { label: "AICTE Approval", icon: "document", active: false, url: "" },
                    { label: "Accreditations", icon: "document", active: false, url: "" },
                    { label: "Awards & Recognitions", icon: "document", active: false, url: "" }
                ]
            },
            {
                title: "Rankings",
                items: [
                    { label: "NIRF Overall", icon: "document", active: false, url: "" },
                    { label: "NIRF Engineering", icon: "document", active: false, url: "" },
                    { label: "NIRF Management", icon: "document", active: false, url: "" },
                    { label: "NIRF Pharmacy", icon: "document", active: false, url: "" },
                    { label: "NIRF Innovation", icon: "document", active: false, url: "" },

                    { label: "NIRF SDG", icon: "document", active: false, url: "" },
                    { label: "Impact Rankings", icon: "document", active: false, url: "" },
                    { label: "Ranking Reports", icon: "document", active: false, url: "" }
                ]
            }
        ]
    },


    historySection: {
        timeline: [
            {
                period: "1960s–2000s",
                description: "The Dayananda Sagar Institutions (DSI) expanded rapidly across multiple disciplines including Engineering, Management, Medical Sciences, & Arts."
            },
            {
                period: "2012",
                description: "The Karnataka Government passed the Dayananda Sagar University Act, paving the way for the university's establishment"
            },
            {
                period: "2014",
                description: "Dayananda Sagar University was officially established as a private university in"
            },
            {
                period: "2020",
                description: "DSU strengthened its focus on innovation, research, entrepreneurship, and global collaborations, emerging as a modern technology-driven university."
            },
            {
                period: "2025",
                description: "DSU continues to grow as a premier institution known for industry-oriented education, advanced infrastructure, research excellence, and global learning opportunities."
            },
        ],
        media: {
            url: "/images/about/about-history.jpg",
            alternativeText: "Aerial view of Dayananda Sagar University campus building"
        },
        heading: "Our History",
        description: [
            {
                type: "paragraph",
                children: [
                    { type: "text", text: "Dayananda Sagar University (DSU), inspired by Late Sri R. Dayananda Sagar, is a top multidisciplinary university in Bengaluru. Since the 1960s, it has blended innovation, research, and industry-focused education to prepare leaders in engineering, management, healthcare, and tech." }
                ]
            }
        ],
        foundersLabel: "FOUNDERS",
        founders: [
            {
                name: "LATE SHRI R DAYANANDA SAGAR",
                role: "Founding Father",
                photo: {
                    url: "/images/about/avatar-1.jpg",
                    alternativeText: "Late Shri R Dayananda Sagar"
                }
            },
            {
                name: "LATE SMT CHANDRAMMA SAGAR",
                role: "Wife of the Founder",
                photo: {
                    url: "/images/about/avatar-2.jpg",
                    alternativeText: "Late Smt Chandramma Sagar"
                }
            }
        ],
        cta: {
            label: "Explore Our Legacy",
            url: "/",
            icon: "sparkle"
        }
    },

    leadershipSection: {
        label: "LEADERSHIP",
        heading: "Leadership",

        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Visionary leaders guiding DSU towards academic excellence, innovation, and global impact.",
                    },
                ],
            },
        ],
        leaders: [
            {
                id: 1,
                name: "Dr. D. HemanChandra Sagar",
                designation: "Chancellor, DSU",
                image: {
                    url: "/images/about/leader-1.jpg",
                    alternativeText: "Dr. D. HemanChandra Sagar",
                },
                description:
                    "Dr. D. HemanChandra Sagar, Chancellor of DSU, is a visionary leader fostering innovation and academic excellence. His leadership empowers future-ready professionals through transformative education.",
                featured: true,
                link: "",
            },
            {
                id: 2,
                name: "Dr. D. Premachandra Sagar",
                designation: "Pro Chancellor, DSU",
                image: {
                      url: "/images/about/leader-2.jpg",
                    alternativeText: "Dr. D. Premachandra Sagar",
                },
                description:
                    "Dr. D. Premachandra Sagar, Pro Chancellor of DSU, is an innovative leader shaping the university into a future-focused institution that empowers the leaders of tomorrow.",
                featured: true,
                link: "",
            },
            {
                id: 3,
                name: "Prof B. S. Satyanarayana",
                designation: "Vice Chancellor, DSU",
                image: {
                      url: "/images/about/leader-3.jpg",
                    alternativeText: "Prof B. S. Satyanarayana",
                },
                description: "",
                featured: false,
                link: "",
            },
            {
                id: 4,
                name: "Prof. R Janardhan",
                designation: "Pro-Vice Chancellor, DSU",
                image: {
                     url: "/images/about/leader-4.jpg",
                    alternativeText: "Prof. R Janardhan",
                },
                description: "",
                featured: false,
                link: "",
            },
            {
                id: 5,
                name: "Dr. Prakash Sheelvanthmath",
                designation: "Pro-Vice Chancellor, DSU",
                image: {
                      url: "/images/about/leader-5.jpg",
                    alternativeText: "Dr. Prakash Sheelvanthmath",
                },
                description: "",
                featured: false,
                link: "",
            },
            {
                id: 6,
                name: "Dr. Puttamadappa C",
                designation: "Registrar, DSU",
                image: {
                     url: "/images/about/leader-6.jpg",
                    alternativeText: "Dr. Puttamadappa C",
                },
                description: "",
                featured: false,
                link: "",
            },
            {
                id: 7,
                name: "Dr. S N Prasad",
                designation: "Controller of Examinations, DSU",
                image: {
                      url: "/images/about/leader-7.jpg",
                    alternativeText: "Dr. S N Prasad",
                },
                description: "",
                featured: false,
                link: "",
            },
            {
                id: 8,
                name: "Mr. Ramanathan",
                designation: "Finance Officer, DSU",
                image: {
                      url: "/images/about/leader-8.jpg",
                    alternativeText: "Mr. Ramanathan",
                },
                description: "",
                featured: false,
                link: "",
            },
        ],
    },
};



export default function Page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AboutWelcome data={local_data.welcomeSection} />
            <AboutLegacy data={local_data.legacySection} />
            <AboutVision data={local_data.aboutVision} />
            <AboutHistory data={local_data.historySection} />
            <AboutLeadership data={local_data.leadershipSection} />
            <AboutRecognition data={local_data.recognitionSection} />
        </>
    )
}
