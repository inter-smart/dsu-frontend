
import InnerHero from '@/components/layout/common/InnerHero'
import NBAAccreditedProgram from '@/components/sections/NBA/NBA-accredited-program'
import NBABoard from '@/components/sections/NBA/NBA-board'

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "NBA page title",
        metaDescription: "NBA page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "goverenance page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/ugc/ugc-banner.jpg",
        },
        title: "NBA",
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
                label: "Recognition, Accreditation & Rankings",
                href: "/",
            },
            {
                label: "Accreditation  ",
                href: "/",
            },
            {
                label: "NBA",
                href: "/NBA",
            },
        ],
    },

    nbaAccreditationData: {

        title: "The National Board of Accreditation (NBA)",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        "type": "text",
                        "text": "NBA accreditation recognizes programmes that meet high standards in curriculum, leadership processes, faculty, infrastructure, and graduate outcomes, reflecting a commitment to continuous quality improvement and academic excellence.",

                    }
                ]
            }
        ],
        logo: "/images/nba.png",

    },
    nbaProgram: {
        title: "NBA Accredited Programmes",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        "type": "text",
                        "text": "Browse all NBA accredited programmes offered by Dayananda Sagar University. Expand each programme to view accreditation certificates, approval letters and supporting documents.",
                    }
                ]
            }
        ],
        programmes: [
            {
                id: 1,
                title: "B.Tech Computer Science & Engineering",
                validity: "Validity : 2023 - 2026",
                keyHighlights: null,
                certificates: []
            },
            {
                id: 2,
                title: "B.Tech Electronics & Communication Engineering",
                validity: "Validity : 2023 - 2026",
                expanded: true,
                keyHighlights: "This programme combines strong theoretical knowledge with practical exposure in electronics, communication systems, embedded technologies, and innovation, supported by modern laboratories, experienced faculty, and industry-oriented learning.",
                certificates: [
                    {
                        id: 1,
                        label: "Certificate 1",
                        url: "#"
                    },
                    {
                        id: 2,
                        label: "Certificate 2",
                        url: "#"
                    },
                    {
                        id: 3,
                        label: "Certificate 3",
                        url: "#"
                    }
                ]
            },
            {
                id: 3,
                title: "B.Tech Mechanical Engineering",
                validity: "Validity : 2023 - 2026",
                keyHighlights: null,
                certificates: []
            },
            {
                id: 4,
                title: "B.Tech Civil Engineering",
                validity: "Validity : 2023 - 2026",
                keyHighlights: null,
                certificates: []
            },
            {
                id: 5,
                title: "B.Tech Aerospace Engineering",
                validity: "Validity : 2023 - 2026",
                keyHighlights: null,
                certificates: []
            }
        ]
    }

}
export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <NBABoard data={local_data.nbaAccreditationData} />
            <NBAAccreditedProgram data={local_data.nbaProgram} />
        </>
    )
}
