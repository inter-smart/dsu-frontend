
import InnerHero from '@/components/layout/common/InnerHero'
import NAACAquarSection from '@/components/sections/NAAC/NAAC-AquarSection'
import NAACJourney from '@/components/sections/NAAC/NAAC-journey'
import NBABoard from '@/components/sections/NBA/NBA-board'
import { Button } from '@base-ui/react/button'

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "NAAC page title",
        metaDescription: "NAAC page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "NAAC page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/ugc/ugc-banner.jpg",
        },
        title: "NAAC",
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
                label: "NAAC",
                href: "/NAAC",
            },
        ],
    },
    naccAccreditationData: {

        title: "The National Assessment & Accreditation Council",
        Button: {
            title: "View Certificate",
            slug: "#"
        },
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        "type": "text",
                        "text": "The National Assessment and Accreditation Council (NAAC), an autonomous body established by the University Grants Commission (UGC), assesses and accredits higher education institutions across India. ",

                    }
                ]
            }
        ],
        logo: "/images/naac.png",

    },

    dsuNaacJourneyData: {
        title: "DSU & NAAC Journey",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        "type": "text",
                        "text": "The National Assessment and Accreditation Council (NAAC), established by the University Grants Commission (UGC), evaluates higher education institutions across India on quality and academic excellence. Dayananda Sagar University (DSU) has been awarded NAAC A+ Accreditation, recognizing its commitment to high academic standards, innovative teaching, research excellence, and continuous institutional improvement.",

                    }
                ]
            }
        ],
        certificateCycles: [
            { id: 1, label: "Certificate Cycle -1", url: "#" },
            { id: 2, label: "Certificate Cycle -2", url: "#" },
            { id: 3, label: "Certificate Cycle -3", url: "#" }
        ],
    },

    aqarSection: {
        title: "AQAR",

        academicYears: [
            { id: 1, label: "2023 - 2024", value: "2023-2024", active: true },
            { id: 2, label: "2022-2023", value: "2022-2023", active: false },
            { id: 3, label: "2021-2022", value: "2021-2022", active: false }
        ],

        tabs: [
            { id: 1, label: "Profile", value: "profile", active: true },
            { id: 2, label: "Criteria", value: "criteria", active: false },
            { id: 3, label: "AQAR Report", value: "aqar-report", active: false }
        ],

        yearData: {
            "2023-2024": {
                year: {
                    description: "The Annual Quality Assurance Report (AQAR) is an annual report prepared by the IQAC and submitted to NAAC, documenting the university's quality initiatives, academic achievements, research, governance, and continuous improvement efforts for each academic year."
                },
                tabs: [
                    {
                        id: 1,
                        label: "Profile",
                        value: "profile",
                        active: true
                    },
                    {
                        id: 2,
                        label: "Criteria",
                        value: "criteria",
                        active: false
                    },
                    {
                        id: 3,
                        label: "AQAR Report",
                        value: "aqar-report",
                        active: false
                    }
                ],

                profile: {
                    sectionTitle: "Profile of the University",
                    parts: [
                        {
                            id: 1,
                            value: "part-a",
                            title: "Part A",
                            expanded: true,
                            documents: [
                                { id: 1, label: "Academic Calendar", url: "#" }
                            ]
                        },
                        {
                            id: 2,
                            value: "part-b",
                            title: "Part B",
                            expanded: true,
                            documents: [
                                { id: 1, label: "3.3 Number of sanctioned posts during the year.", url: "#" },
                                { id: 2, label: "4.1 Number of eligible applications received for admissions to all the Programmes during the year", url: "#" },
                                { id: 3, label: "4.2 number seats earmarked for reserved category as per GOI", url: "#" }
                            ]
                        }
                    ]
                },

                criteria: {
                    sectionTitle: "Criteria",
                    parts: []
                },

                aqarReport: {
                    sectionTitle: "AQAR Report",
                    parts: []
                }
            },

            "2022-2023": {
                year: {
                    description: "..."
                },
                tabs: [
                    {
                        id: 1,
                        label: "Profile",
                        value: "profile",
                        active: true
                    },
                    {
                        id: 2,
                        label: "Criteria",
                        value: "criteria",
                        active: false
                    },
                    {
                        id: 3,
                        label: "AQAR Report",
                        value: "aqar-report",
                        active: false
                    }
                ],

                profile: {
                    sectionTitle: "Profile of the University",
                    parts: []
                },

                criteria: {
                    sectionTitle: "Criteria",
                    parts: []
                },

                aqarReport: {
                    sectionTitle: "AQAR Report",
                    parts: []
                }
            },

            "2021-2022": {
                year: {
                    description: "..."
                },
                tabs: [
                    {
                        id: 1,
                        label: "Profile",
                        value: "profile",
                        active: true
                    },
                    {
                        id: 2,
                        label: "Criteria",
                        value: "criteria",
                        active: false
                    },
                    {
                        id: 3,
                        label: "AQAR Report",
                        value: "aqar-report",
                        active: false
                    }
                ],

                profile: {
                    sectionTitle: "Profile of the University",
                    parts: []
                },

                criteria: {
                    sectionTitle: "Criteria",
                    parts: []
                },

                aqarReport: {
                    sectionTitle: "AQAR Report",
                    parts: []
                }
            }
        }
    }

}
export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <NBABoard data={local_data.naccAccreditationData} />
            <NAACJourney data={local_data.dsuNaacJourneyData} />
            <NAACAquarSection data={local_data.aqarSection} />
        </>
    )
}
