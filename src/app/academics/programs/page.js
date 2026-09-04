import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import AcademicContact from "@/components/sections/academics/academic-contact";
import AcademicProgram from "@/components/sections/academics/academic-program";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Departments page title",
        metaDescription: "Departments page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Departments page title",
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
                label: "Departments",
                href: "/",
            },
        ],
        menuBar: true
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


}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AcademicMenubar className="md:!hidden block" />
            <AcademicProgram data={local_data.computerApplicationsPrograms} />
            <AcademicContact data={local_data.contact} />
        </>
    )
}

