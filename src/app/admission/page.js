import InnerHero from "@/components/layout/common/InnerHero";
import AdmissionMenubar from "@/components/sections/admission/admissionMenubar";
import OverviewSection from "@/components/sections/admission/overviewSection";
import OVerviewSection from "@/components/sections/admission/overviewSection";
import WhySection from "@/components/sections/admission/WhySection";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Placements page title",
        metaDescription: "Placements page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Placements page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "Admission",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },

            {
                label: "Admission @ DSU",
                href: "/",
            },
        ],
        admissionMenubar: true
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
    programOverviewSection: {
        eyebrow: "OVERVIEW",
        heading: "Begin Your Journey at Dayananda Sagar University",
        intro: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "At Dayananda Sagar University, we believe education should prepare you for the opportunities of tomorrow. With industry-aligned programmes, an AI-first approach to learning, modern infrastructure and a vibrant campus environment, DSU offers students a platform to build knowledge, skills and successful careers."
                    },
                ],
            },
        ],

        buttons: [
            {
                id: 1,
                label: "Admissions Open 2026–27",
                href: "#",
                variant: "primary",
            },
            {
                id: 2,
                label: "Download Brochure",
                href: "#",
                variant: "secondary",
                icon: "download",
            },
        ],
        media: [
            {
                alternativeText: "Students collaborating in a modern computer lab with laptops",
                mime: "image/jpg",
                // if video - mime: "video/mp4",
                url: "/images/admissionHome.jpg",
            },
        ],
        stats: [
            {
                id: 1,
                value: "6+",
                label: "Entrance Exams Accepted",
            },
            {
                id: 2,
                value: "50+",
                label: "Programmes",
            },
            {
                id: 3,
                value: "2",
                label: "Bengaluru Campuses",
            },
            {
                id: 4,
                value: "NRI",
                label: "Foreign Admissions Track",
            },
        ],
        marquee: [
            { id: 1, label: "Applications Open for Academic Year 2026–27" },
            { id: 2, label: "Last Date to Submit Online Applications: 30 June 2026" },
            { id: 3, label: "Merit List Publication: 10 July 2026" },
            { id: 4, label: "Counseling & Seat Allotment Begins: 15 July 2026" },
        ],

    },
    whyChoose: {
        heading: "Why Choose Dayananda Sagar University?",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The National Assessment and Accreditation Council (NAAC), established by the University Grants Commission (UGC), evaluates higher education institutions across India on quality and academic excellence. Dayananda Sagar University (DSU) has been awarded NAAC A+ Accreditation, recognizing its commitment to high academic standards, innovative teaching, research excellence, and continuous institutional improvement.",
                    },
                ],
            },
        ],
        media: {
            alternativeText: "DSU AI First University building with digital brain illustration on facade",
            mime: "image/jpg",
            url: "/images/whyImg.jpg",
        },
        points: [
            {
                id: 1,
                title: "AI-First Learning",
                description: "An education ecosystem designed around artificial intelligence, emerging technologies and future skills.",
            },
            {
                id: 2,
                title: "Industry-Aligned Programmes",
                description: "Learn through programmes designed to bridge the gap between academic knowledge and industry requirements.",
            },
            {
                id: 3,
                title: "Innovation & Research",
                description: "Engage with research, innovation and hands-on learning opportunities across disciplines.",
            },
            {
                id: 4,
                title: "Modern Campus & Infrastructure",
                description: "Learn in a vibrant campus supported by modern classrooms, laboratories, learning spaces and student facilities.",
            },
            {
                id: 5,
                title: "Strong Career Opportunities",
                description: "Gain industry exposure, career guidance, internships and placement opportunities to prepare for the professional world.",
            },
        ],
    }

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AdmissionMenubar className="lg:!hidden block" />
            <OverviewSection data={local_data.programOverviewSection} />
            <WhySection data={local_data.whyChoose} />

        </>
    )
}
