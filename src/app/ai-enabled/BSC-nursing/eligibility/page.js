import InnerHero from "@/components/layout/common/InnerHero"; 
import AcademicContact from "@/components/sections/academics/academic-contact";  
import AiBSCMenubar from "@/components/sections/ai-enabled/BSC-nursing/bsc-Menubar";
import Aieligibility from "@/components/sections/ai-enabled/BSC-nursing/eligibility";

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
    eligibility: {
        heading: "Seats & Eligibility",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our nursing programmes are designed to develop competent, compassionate and skilled professionals who can deliver safe, ethical and evidence-based care across diverse healthcare settings.",
                    },
                ],
            },
        ],
        seatsSection: {
            heading: "Seats:",
            tableHeaders: ["Programme", "Level", "Duration", "Intake", "Eligibility"],
            tableRows: [
                {
                    id: 1,
                    programme: "B.Sc Nursing",
                    level: "UG",
                    duration: "4 Years",
                    intake: "200",
                    eligibility: "Pass in 10+2, A Level, IB, American 12th grade or equivalent with Physics, Chemistry, Biology and English and a minimum of 45% marks taken together in Physics, Chemistry, Biology and English",
                },
            ],
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
            <Aieligibility data={local_data.eligibility} />
            <AcademicContact data={local_data.contact} />
        </>
    )
}

