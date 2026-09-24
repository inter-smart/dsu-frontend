import InnerHero from "@/components/layout/common/InnerHero"; 
import AcademicContact from "@/components/sections/academics/academic-contact"; 
import BscOverview from "@/components/sections/ai-enabled/BSC-nursing/overview";
import AiBSCMenubar from "@/components/sections/ai-enabled/BSC-nursing/bsc-Menubar";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Overview page title",
        metaDescription: "Overview page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Overview page title",
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
                label: "Overview",
                href: "/",
            },
        ],
        AiBscmenuBar: true
    },
    OverviewSection: {
        eyebrow: "OVERVIEW",
        heading: "About Basic B. Sc Nursing",
        intro: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Dayananda Sagar College of Nursing Sciences has run its undergraduate nursing programme since 2002, attached to Sagar Hospital — a multi-specialty hospital on campus — so clinical practicum happens alongside coursework rather than after it. ",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The programme blends classroom instruction with case-based learning, simulation labs and hands-on rotations across hospital, community and specialty-care settings, building the critical thinking, ethical grounding and communication skills expected of a practising nurse",
                    },
                ],
            },
        ],
        media: 
            {
                alternativeText: "Students collaborating in a modern computer lab with laptops",
                mime: "image/jpg",
                // if video - mime: "video/mp4",
                url: "/images/bsc-overview.jpg",
            }, 
        

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
    
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiBSCMenubar className="lg:!hidden block" /> 
            <BscOverview data={local_data.OverviewSection} />
            <AcademicContact data={local_data.contact} />
        </>
    )
}

