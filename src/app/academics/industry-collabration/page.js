import InnerHero from "@/components/layout/common/InnerHero";
import AcademicCollaboration from "@/components/sections/academics/academic-collaboration";
import AcademicPartners from "@/components/sections/academics/academic-partners";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Industry Collaborations page title",
        metaDescription: "Industry Collaborations page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Industry Collaborations page title",
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
                label: "Industry Collaborations ",
                href: "/",
            },
        ],
        menuBar: true
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
            <AcademicCollaboration data={local_data.industryCollaborationsSection} />
            <AcademicPartners data={local_data.partnersSection} />


        </>
    )
}

