import InnerHero from "@/components/layout/common/InnerHero";
import AcademicCollaboration from "@/components/sections/academics/academic-collaboration";
import AcademicHomeOverview from "@/components/sections/academics/academic-home-overview";
import AcademicPartners from "@/components/sections/academics/academic-partners";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import AcademicVisionMission from "@/components/sections/academics/academic-vision-mission";
import DeanMessage from "@/components/sections/academics/dean-message";
import NewsEvents from "@/components/sections/news-events/news-events";
import AcademicWhychoose from "@/components/sections/academics/academic-whychoose";
import AcademicProgram from "@/components/sections/academics/academic-program";
import AcademicContact from "@/components/sections/academics/academic-contact";
import AcademicNews from "@/components/sections/academics/academic-news";

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

    visionMissionSection: {
        eyebrow: "VISION & MISSION",
        heading: "Purpose-Driven Academic Excellence",
        media: {
            alternativeText: "Illuminated campus building at night with starry sky background",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-vision.jpg",
        },
        mission: {
            icon: {
                alternativeText: "Mission flag icon",
                mime: "image/svg+xml",
                icon: "/images/about/vision_icon.svg",
            },
            heading: "Mission",
            description: "To develop innovative and skilled computer professionals through cutting-edge research, education, and entrepreneurial initiatives, fostering leadership qualities to address the evolving challenges of emerging technologies and contribute to societal advancements nationally and globally.",
        },
        vision: {
            icon: {
                alternativeText: "Vision target icon",
                mime: "image/svg+xml",
                url: "/images/about/vision_icon1.svg",
            },
            heading: "Vision",
            description: "The Department of Computer Applications is committed to:",
            points: [
                {
                    id: 1,
                    code: "M1",
                    text: "To deliver cutting-edge education and research opportunities that drive innovation in computer science and applications.",
                },
                {
                    id: 2,
                    code: "M2",
                    text: "To maintain state-of-the-art facilities and attract internationally recognized faculty to support advanced learning and research.",
                },
                {
                    id: 3,
                    code: "M3",
                    text: "To continuously update our curriculum to reflect the dynamic landscape of emerging technologies and industry needs.",
                },
                {
                    id: 4,
                    code: "M4",
                    text: "To foster strong partnerships with industry and the community, enhancing practical experiences and entrepreneurial initiatives.",
                },
                {
                    id: 5,
                    code: "M5",
                    text: "To develop graduates who are not only skilled and innovative computer professionals but also ethical leaders, equipped to tackle global and national challenges and contribute to societal advancements.",
                },
            ],
        },
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
    whyChooseThisSchool: {
        heading: "Why Choose this School",
        description: "Our comprehensive curriculum, designed to stay at the forefront of technological advancements, blends traditional and contemporary teaching methods, including lectures, hands-on labs, workshops, and industry collaborations.",
        cta: {
            label: "Read More",
            url: "/why-choose-this-school",
        },
        points: [
            {
                id: 1,
                title: "Future-Ready Curriculum Aligned with Industry 4.0",
            },
            {
                id: 2,
                title: "Specialized Learning Tracks for Career Customization",
            },
            {
                id: 3,
                title: "Cutting-Edge Labs and Technology Infrastructure",
            },
            {
                id: 4,
                title: "Industry Immersion and Experiential Learning",
            },
            {
                id: 5,
                title: "Emphasis on Research and Innovation",
            },
            {
                id: 6,
                title: "Global Certifications and International Exposure",
            },
            {
                id: 7,
                title: "Entrepreneurship and Startup Ecosystem",
            },
            {
                id: 8,
                title: "Personalized Mentorship and Career Support",
            },
            {
                id: 9,
                title: "Holistic Skill Development Focus",
            },
            {
                id: 10,
                title: "Multi-Stage Capstone and Live Projects",
            },
            {
                id: 11,
                title: "Vibrant Student Community & Tech Clubs",
            },
            {
                id: 12,
                title: "Strong Alumni and Industry Network",
            },
        ],
    },


    computerApplicationsPrograms: {
        heading: "Computer Applications Programs @DSU",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The School of Computer Applications offers a range of programmes that combine academic excellence with practical learning, helping students prepare for careers in the fast-growing technology industry.",
                    },
                ],
            }
        ],
        cta: {
            label: "Read More",
            url: "/why-choose-this-school",
        },
        categories: [
            {
                id: 1,
                badge: "UG",
                label: "Undergraduate",
                programs: [
                    {
                        id: 1,
                        title: "Bachelor of Computer Applications",
                        url: "/programs/bachelor-of-computer-applications",
                    },
                    {
                        id: 2,
                        title: "B.SC in Data Science",
                        url: "/programs/bsc-in-data-science",
                    },
                    {
                        id: 3,
                        title: "B.SC in Cyber History",
                        url: "/programs/bsc-in-cyber-history",
                    },
                    {
                        id: 4,
                        title: "BCA in AI & DS",
                        url: "/programs/bca-in-ai-ds",
                    },
                ],
            },
            {
                id: 2,
                badge: "PG",
                label: "Postgraduate",
                programs: [
                    {
                        id: 1,
                        title: "Master of Computer Applications",
                        url: "/programs/master-of-computer-applications",
                    },
                    {
                        id: 2,
                        title: "M.SC in Data Science",
                        url: "/programs/msc-in-data-science",
                    },
                    {
                        id: 3,
                        title: "M.SC in Cyber History",
                        url: "/programs/msc-in-cyber-history",
                    },
                ],
            },

        ],
    },
    contact: {
        pageTitle: "Contact",
        formTitle: "Enquire Now for More",
        info: {
            title: "Start Your Journey With Us",
            description: "Take the next step toward a future-ready education supported by innovation, research, and industry collaboration.",
            address: "Gate 2, 6th Floor, University Building, Dental Block, Kumaraswamy Layout, Bengaluru - 560 111",
            mapUrl: "https://maps.google.com/?q=Dayananda+Sagar+University+Kumaraswamy+Layout+Bengaluru",
            email: "admissions@dsu.edu.in",
            helpline: "080 46461800 / 080 49092800",
            accreditations: "NAAC A+ Accredited  |  UGC Recognized",
        },
        courses: [
            "Bachelor of Computer Applications (BCA)",
            "Master of Computer Applications (MCA)",
            "B.Tech in Computer Science & Engineering",
            "B.Tech in AI & Machine Learning",
            "B.Tech in Data Science",
            "M.Tech in Computer Science",
            "Ph.D in Computer Applications",
        ],
        states: [
            "Karnataka",
            "Andhra Pradesh",
            "Delhi",
            "Gujarat",
            "Kerala",
            "Maharashtra",
            "Tamil Nadu",
            "Telangana",
            "Uttar Pradesh",
            "West Bengal",
            "Other",
        ],
    },
    newsEvents: {
        title: "News & Events",
        cta: {
            label: "Read More",
            url: "/why-choose-this-school",
        },
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
    industryCollaborationsSection: {
        heading: "Industry Collaborations & Programmes",
        description: "The School of Computer Applications at Dayananda Sagar University collaborates with leading technology companies and industry pioneers to bridge the gap between academics and real-world innovation. Through internships, live industry projects, expert mentoring, certifications, research initiatives, and campus recruitment, students gain practical exposure that prepares them for successful careers in the rapidly evolving digital world.",
        stats: [
            {
                id: 1,
                value: "150+",
                label: "Industry Partners",
            },
            {
                id: 2,
                value: "500+",
                label: "Internship Opportunities",
            },
            {
                id: 3,
                value: "100+",
                label: "Industry Experts",
            },
            {
                id: 4,
                value: "95%",
                label: "Placement Assistance",
            },
            {
                id: 5,
                value: "25+",
                label: "AI Industry Collaborations",
            },
        ],
    },
    partnersSection: {
        label: "Our Industry Partners Include",
        partners: [
            {
                id: 1,
                name: "Infosys",
                logo: {
                    alternativeText: "Infosys logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/infosys.svg",
                },
            },
            {
                id: 2,
                name: "Wipro",
                logo: {
                    alternativeText: "Wipro logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/wipro.svg",
                },
            },
            {
                id: 3,
                name: "NVIDIA",
                logo: {
                    alternativeText: "NVIDIA logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/nvidia.svg",
                },
            },
            {
                id: 4,
                name: "Accenture",
                logo: {
                    alternativeText: "Accenture logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/accenture.svg",
                },
            },
            {
                id: 5,
                name: "Zoho",
                logo: {
                    alternativeText: "Zoho logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/zoho.svg",
                },
            },
            {
                id: 6,
                name: "TCS",
                logo: {
                    alternativeText: "Tata Consultancy Services logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/tcs.svg",
                },
            },
            {
                id: 7,
                name: "EY",
                logo: {
                    alternativeText: "EY logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/ey.svg",
                },
            },
            {
                id: 8,
                name: "NatWest Group",
                logo: {
                    alternativeText: "NatWest Group logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/natwest.svg",
                },
            },
            {
                id: 9,
                name: "KPMG",
                logo: {
                    alternativeText: "KPMG logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/kpmg.svg",
                },
            },
            {
                id: 10,
                name: "Amazon",
                logo: {
                    alternativeText: "Amazon logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/amazon.svg",
                },
            },
            {
                id: 11,
                name: "UST",
                logo: {
                    alternativeText: "UST logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/ust.svg",
                },
            },
            {
                id: 12,
                name: "TVS",
                logo: {
                    alternativeText: "TVS logo",
                    mime: "image/svg+xml",
                    url: "/images/logos/tvs.svg",
                },
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
            <AcademicVisionMission data={local_data.visionMissionSection} />
            <DeanMessage data={local_data.messageFromDean} varient="home" />
            <AcademicWhychoose data={local_data.whyChooseThisSchool} />
            <AcademicProgram data={local_data.computerApplicationsPrograms} />
            <AcademicCollaboration data={local_data.industryCollaborationsSection} varient="home" />
            <AcademicPartners data={local_data.partnersSection} varient="home"/>
            <AcademicContact data={local_data.contact} />
            <AcademicNews data={local_data.newsEvents} />
        </>
    )
}

