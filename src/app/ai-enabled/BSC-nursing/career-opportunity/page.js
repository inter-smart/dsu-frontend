import InnerHero from "@/components/layout/common/InnerHero";
import AiBSCMenubar from "@/components/sections/ai-enabled/BSC-nursing/bsc-Menubar";
import CareerSection from "@/components/sections/ai-enabled/BSC-nursing/career";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Career Opportunities page title",
        metaDescription: "Career Opportunities page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Career Opportunities page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "Library",
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
                label: "School of Health Sciences",
                href: "/",
            },
            {
                label: "College of Nursing Sciences",
                href: "/",
            },
            {
                label: "Basic B. Sc Nursing",
                href: "/",
            },
            {
                label: "Career Opportunities",
                href: "/",
            },
        ],
        AiBscmenuBar: true
    },
    career: {
        heading: "Career Opportunities",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "A B.Sc. Nursing degree opens diverse career pathways across hospitals, healthcare institutions, community health services, specialised care, education, research, and public health. Graduates can build rewarding careers as skilled nursing professionals while contributing to quality patient care and healthcare delivery.",
                    },
                ],
            },
        ],
        opportunity: [
            {
                id: 1,
                description: [
                    { text: "Staff Nurse: ", bold: true },
                    { text: "Direct Patient Care", bold: false },
                ],
            },
            {
                id: 2,
                description: [
                    { text: "Nurse Specialist: ", bold: true },
                    {
                        text: "Ambulatory care nurse, Critical care nurse, School Health nurse, Industrial Nurse, Military Nurse, OT nurse, orthopedic nurse, Diabetic nurse, Oncology nurse, cardiothoracic nurse, Disaster nurse, Neuro nursing.",
                        bold: false,
                    },
                ],
            },
            {
                id: 3,
                description: [
                    { text: "Clinical instructor / tutor in educational institutions.", bold: true },
                ],
            },
            {
                id: 4,
                description: [
                    { text: "Can pursue clinical research, hospital administration, public health, nursing informatics.", bold: true },
                ],
            },
        ],
    }

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiBSCMenubar className="lg:!hidden block" />
            <CareerSection data={local_data.career} />

        </>
    )
}

