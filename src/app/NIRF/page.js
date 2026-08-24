
import InnerHero from '@/components/layout/common/InnerHero'
import NIRFRanking from '@/components/sections/NIRF/NIRF-ranking'
import OtherApproval from '@/components/sections/regulatory-approval/other-approval'


const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "NIRF page title",
        metaDescription: "NIRF page description ",
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
        title: "NIRF Rankings",
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
                href: "/",
            },
            {
                label: "NIRF Rankings",
                href: "/regulatory-approval",
            },
        ],
    },

    collegeRanking: {
        title: "NIRF Rankings",
        name: "India Today Best College Rankings" ,
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "India Today ranks India’s best universities across various disciplines based on academic excellence, infrastructure, faculty quality, placements and overall performance"
                    }
                ]
            },
            {
                type: "paragraph",                
                children: [
                    {
                        type: "text",
                        text: "National Institutional Ranking Framework by Ministry of Education, Govemment of India"
                    }
                ]
            },
        ],
        ranking: {
            year: 2025,
            rank: 88,
            title: "Engineering Rank ",
            cat_year: "NIRF 2025",
            category: "Engineering",
            recognizingAuthority: "Minister of Education Government of India",
            description: [
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "Dayananda Sagar University has secured the  88th Rank", 
                        },
                        {
                            type: "text",
                            text: " in the NIRF Engineering Ranking 2025. Published by the Ministry of Education, Government of India, the ranking evaluates engineering institutions across the country."
                        }
                    ]
                },
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "It reflects DSU's excellence in  teaching, research, innovation and industry engagement. This achievement reinforces the University's commitment to producing skilled and future-ready engineers."
                        }
                    ]
                }
            ],
            report: {
                label: "Download NIRF Report 2025",
                url: "#"
            }
        }
    }

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <NIRFRanking data={local_data.collegeRanking}/>
        </>
    )
}
