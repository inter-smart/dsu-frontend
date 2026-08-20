
import InnerHero from '@/components/layout/common/InnerHero'
import OtherApproval from '@/components/sections/regulatory-approval/other-approval'


const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Other Approval page title",
        metaDescription: "Other Approval page description ",
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
        title: "Regulatory Approvals",
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
                label: "Regulatory Approvals",
                href: "/regulatory-approval",
            },
        ],
    },
    otherApproval: {
        title: "Other Approval",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Dayananda Sagar University (DSU) is recognized by the University Grants Commission (UGC), the statutory body of the Government of India responsible for maintaining standards of higher education. This recognition affirms our commitment to academic excellence, quality education, and holistic development of students."
                    }
                ]
            }
        ],
        items: [
            {
                id: 1,
                title: "Bar Council of India (BCI)",
                shortDescription: "Approval for Law programmes.",
                logo: "/images/ugc/approval_icon1.png",
                content: {
                    description: "",
                    approvedProgrammes: [],
                    documents: []
                }
            },
            {
                id: 2,
                title: "Pharmacy Council of India (PCI)",
                shortDescription: "Approval for Pharmacy programmes.",
                logo: "/images/ugc/approval_icon2.png",
                content: {
                    description: "The Pharmacy Council of India (PCI) is the statutory authority responsible for regulating pharmacy education and the pharmacy profession in India. PCI approval ensures that pharmacy programmes meet the required educational standards.",
                    approvedProgrammesTitle: "Approved Programme(s)",
                    approvedProgrammes: [
                        "B.Pharm",
                        "Pharm.D",
                        "M.Pharm"
                    ],
                    documents: [
                        {
                            title: "PCI Approval Letter (PDF)",
                            url: "/documents/pci-approval-letter.pdf", 
                        },
                        {
                            title: "Annual Approval Order (PDF)",
                            url: "/documents/annual-approval-order.pdf", 
                        }
                    ]
                }
            },
            {
                id: 3,
                title: "Indian Nursing Council (INC)",
                shortDescription: "Approval for Nursing programmes.",
                logo: "/images/ugc/approval_icon3.png",
                content: {
                    description: "",
                    approvedProgrammes: [],
                    documents: []
                }
            },
            {
                id: 4,
                title: "Karnataka State Nursing Council (KSNC)",
                shortDescription: "Recognition for Nursing education.",
                logo: "/images/ugc/approval_icon4.png",
                content: {
                    description: "",
                    approvedProgrammes: [],
                    documents: []
                }
            }
        ]
    }
}
export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <OtherApproval data={local_data.otherApproval} />
        </>
    )
}
