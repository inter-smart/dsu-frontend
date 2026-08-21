
import InnerHero from '@/components/layout/common/InnerHero'
import ProfessionalAccredition from '@/components/sections/professional-accredition/professional-accredition'

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Professional Accredition page title",
        metaDescription: "Professional Accredition page description ",
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
        title: "Professional Accreditations",
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
                label: "Accreditations",
                href: "/",
            },
            {
                label: "Professional Accreditations",
                href: "/Professional Accreditations",
            },
        ],
    },

    accreditationsData: { 
        cards: [
            {
                id: 1,
                title: "UGC Recognition",
                description: "Recognised under the University Grants Commission framework, supporting DSU's academic credibility and university-level governance.",
                logo: "/images/accred-1.png", 
            },
            {
                id: 2,
                title: "NAAC Accreditation",
                description: "Reflects the university's commitment to quality education, institutional processes, academic delivery, and student-centric development.",
                logo: "/images/accred-2.png",
                 
            },
            {
                id: 3,
                title: "AICTE Approval",
                description: "Relevant programmes are aligned with statutory and professional education requirements prescribed by national regulatory bodies.",
                logo: "/images/accred-3.png",
            },
            {
                id: 4,
                title: "UGC 2(f)",
                description: "Indicates recognition under the appropriate UGC provisions, strengthening institutional standing in higher education.",
                logo: "/images/accred-4.png",
            },
            {
                id: 5,
                title: "NIRF Participation",
                description: "DSU participates in national ranking frameworks that evaluate institutional performance across teaching, research, outreach, and outcomes.",
                logo: "/images/accred-5.png",
            },
            {
                id: 6,
                title: "Internal Quality Assurance",
                description: "IQAC drives continuous improvement through academic audits, feedback systems, reporting, best practices, and institutional quality initiatives.",
                logo: "/images/accred-6.png",
            }
        ]
    } 

}
export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <ProfessionalAccredition  data={local_data.accreditationsData}/>
        </>
    )
}
