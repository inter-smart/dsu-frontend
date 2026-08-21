
import InnerHero from '@/components/layout/common/InnerHero'
import NationalBanking from '@/components/sections/national-banking/national-banking'
import NationalBankingStats from '@/components/sections/national-banking/national-banking-stats'
import ProfessionalAccredition from '@/components/sections/professional-accredition/professional-accredition'

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "National Rankings page title",
        metaDescription: "National Rankings page description ",
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
        title: "National Rankings",
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
                label: "National Rankings",
                href: "/national-banking",
            },
        ],
    },

    nationalRankingsData: {
        sectionTitle: "National Rankings",
        sectionDescription: [
            {
                type: "paragraph",
                children: [
                    {
                        "type": "text",
                        "text": "Dayananda Sagar University is consistently recognized by leading national ranking agencies for its commitment to academic excellence, research, innovation, and student success. These rankings reflect the University's focus on quality education and institutional performance."
                    }
                ]
            }
        ],
        rankingAgencies: [
            {
                id: 1,
                name: "NIRF",
                description: "National ranking framework by the Ministry of Education, Government of India.",
                logo: "/images/rank-1.png",
                linkText: "View Rankings",
                linkUrl: "#"
            },
            {
                id: 2,
                name: "India Today",
                description: "Annual ranking of India's leading universities and higher education institutions.",
                logo: "/images/rank-2.png",
                linkText: "View Rankings",
                linkUrl: "#"
            },
            {
                id: 3,
                name: "Outlook",
                description: "Independent rankings evaluating academic excellence and institutional performance.",
                logo: "/images/rank-3.png",
                linkText: "View Rankings",
                linkUrl: "#"
            },
            {
                id: 4,
                name: "IIRF",
                description: "University rankings based on academics, research, and reputation.",
                logo: "/images/rank-4.png",
                linkText: "View Rankings",
                linkUrl: "#"
            }
        ],

    },
    
    stats: [
        {
            id: 1,
            value: "20+",
            label: "Ranking Across Categories",
            icon: "/images/stats_icon.svg"
        },
        {
            id: 2,
            value: "TOP 100",
            label: "NIRF Overall Rank Band",
            icon: "/images/stats_icon.svg"
        },
        {
            id: 3,
            value: "Consistence",
            label: "Improvement Year on Year",
            icon: "/images/stats_icon.svg"
        },
        {
            id: 4,
            value: "Recognized",
            label: "by Leading National Ranking Bodies",
            icon: "/images/stats_icon.svg"
        }
    ]
}
export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <NationalBanking data={local_data.nationalRankingsData} />
            <NationalBankingStats data={local_data.stats} />
        </>
    )
}
