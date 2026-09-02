import InnerHero from "@/components/layout/common/InnerHero"
import DSUAct from "@/components/sections/why-us/DSU-act"


const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Dsu act page title",
        metaDescription: "Dsu act page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "DSU Act",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/ugc/ugc-banner.jpg",
        },
        title: "DSU Act",
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
                label: "Compliance & Disclosures",
                href: "/",
            },
            {
                label: "DSU Act",
                href: "/",
            },
        ],
    },
    dsuActSection: {
        heading: "DSU Act",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The DSU ACT is committed to fostering a safe, respectful, and inclusive campus environment. Through awareness programs, preventive measures, and grievance redressal mechanisms, the committee ensures the well-being, dignity, and safety of all students and staff while promoting a culture of mutual respect and responsibility.",
                    },
                ],
            },
        ],
        points: [
            {
                id: 1,
                text: "Ensures a safe, secure, and respectful campus environment for all students and staff.",
            },
            {
                id: 2,
                text: "Prevents ragging, harassment, and any form of discrimination through strict policies and awareness programs.",
            },
            {
                id: 3,
                text: "Provides a confidential platform for reporting concerns and grievances.",
            },
            {
                id: 4,
                text: "Promotes inclusivity, dignity, and mutual respect across the university community.",
            },
        ],
        document: {
            label: "DSU Act PDF",
            file: {
                alternativeText: "DSU Act PDF document",
                mime: "application/pdf",
                url: "/documents/dsu-act.pdf",
            },
        },
    }
}
export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <DSUAct data={local_data.dsuActSection}/>
        </>
    )
}
