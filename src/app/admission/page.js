import InnerHero from "@/components/layout/common/InnerHero"; 
import AdmissionMenubar from "@/components/sections/admission/admissionMenubar";
import OVerviewSection from "@/components/sections/admission/overviewSection";

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
        cta: {
            label: "Admissions Open 2026–27",
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

    },
    
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AdmissionMenubar className="lg:!hidden block" /> 
            <OVerviewSection data={local_data.programOverviewSection} />
        </>
    )
}
