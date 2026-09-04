import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import AcademicFacilities from "@/components/sections/academics/academic-facilities";
import AcademicOverview from "@/components/sections/academics/academic-overview";

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
        menuBar: true
    },
    programOverviewSection: {
        eyebrow: "OVERVIEW",
        heading: "Program Overview: School of Computer Applications",
        intro: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Established in the academic year 2016-17, the School of Computer Applications at Dayananda Sagar University is dedicated to fostering fresh talent and preparing students for successful careers in the dynamic field of Information Technology. Our aim is to nurture fresh talent in the field of Information Technology by equipping students with a wide array of skills, enabling them to choose their area of interest from an early stage.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our 3-year BCA program provides a robust curriculum designed to combine theoretical knowledge with extensive practical experience. We believe that a solid understanding of fundamental concepts, coupled with hands-on training, is essential for students to thrive in the ever-evolving IT landscape. The program offers a variety of courses that allow students to explore different areas of interest, laying a strong foundation for future specialization.",
                    },
                ],
            },
        ],
        media: [
            {
                alternativeText: "Students collaborating in a modern computer lab with laptops",
                mime: "image/jpg",
                // if video - mime: "video/mp4",
                url: "/images/program-overview-1.jpg",
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
        secondaryMedia: [
            {
                alternativeText: "Student using a VR headset in an immersive learning session",
                mime: "image/jpg",
                // if video - mime: "video/mp4",
                url: "/images/program-overview-2.jpg",
            },
            {
                alternativeText: "Student working at a computer workstation in a lab",
                mime: "image/jpg",
                // if video - mime: "video/mp4",
                url: "/images/program-overview-3.jpg",
            },
        ],
        outro: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Launched in the academic year 2021-22, our 2-year MCA program is tailored for graduates who aspire to deepen their expertise in computer applications and advance their careers. The MCA curriculum is meticulously crafted to cover advanced topics in software development, data analytics, network security, and more. It includes industry-aligned projects and internships that provide real-world experience and enhance employability.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "As global demand for fresh and energetic IT talent continues to rise, our mission is to shape the next generation of IT professionals. We provide a solid foundation in computer applications, foster employable skills, and instill strong ethical values in our students.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The School of Computer Applications is dedicated to producing well-rounded, innovative, and ethically-minded professionals who are ready to make significant contributions to the IT industry and society at large.",
                    },
                ],
            },
        ],
    }


}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AcademicMenubar className="md:!hidden block" />
            <AcademicOverview data={local_data.programOverviewSection} />

        </>
    )
}

