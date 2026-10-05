import InnerHero from "@/components/layout/common/InnerHero";
import AcademicAchievements from "@/components/sections/academics/academic-achievements";
import AdmissionAccomodation from "@/components/sections/admission/AdmissionAccomodation";
import AdmissionDates from "@/components/sections/admission/AdmissionDates";
import AdmissionMenubar from "@/components/sections/admission/admissionMenubar";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Hostel & Campus Life page title",
        metaDescription: "Hostel & Campus Life page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Hostel & Campus Life page title",
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
            {
                label: "Hostel & Campus Life",
                href: "/",
            },
        ],
        admissionMenubar: true
    },
    achievementSection: {
        heading: "Hostel & Campus Life",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Experience the vibrant atmosphere of university life at DSU Main Campus in Harohalli. With convenient accommodation options just a stone's throw away from campus, you can study in a comfortable environment that fosters learning and growth. ",
                    },
                ],
            },
        ],
        cta: {

            label: "Explore Now",
            alternativeText: "Explore Now",
            mime: "application/pdf",
            file: {

                url: "/documents/placement-report.pdf",
            }

        },
        stats: [
            {
                id: 1,
                value: "5,000+",
                label: "Student Accommodation Capacity",
            },
            {
                id: 2,
                value: "24/7",
                label: "Security, Assistance & Monitored Access",
            },
            {
                id: 3,
                value: "Next to DSU",
                label: "Residences within Walking Distance of the University",
            },
            {
                id: 4,
                value: "2023–25",
                label: "Achievement Window",
            },
        ],

    },
    accomodation: {
        heroSection: {
            eyebrow: "ACCOMMODATION",
            heading: "S' Residences",
            description: [
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "S' Residences is a purpose-built student residence in Harohalli, located next to Dayananda Sagar University. For 2026–27, the residence states a capacity of 5,000 student beds, with accommodation for male and female students.",
                        },
                    ],
                },
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "A home-away-from-home designed around student comfort, study and community living. The residences provide furnished living spaces, study areas, recreation and on-site support, while keeping students within walking distance of DSU.",
                        },
                    ],
                },
            ],
            list: [
                { id: 1, label: "Harohalli, Bengaluru South" },
                { id: 2, label: "Next to DSU Main Campus Accommodation" },
                { id: 3, label: "Study" },
                { id: 4, label: "Recreation" },
                { id: 5, label: "Community" },
            ],
            media: {
                alternativeText: "Entrance of S' Residences student accommodation building",
                mime: "image/jpg",
                url: "/images/accomodation.jpg",
            },
            highlights: [
                {
                    id: 1,
                    title: "Furnished living",
                    description: "S' Residences describes its rooms as furnished, spacious, well-lit and well ventilated, with study and storage provisions.",
                },
                {
                    id: 2,
                    title: "Walk to Campus",
                    description: "The residence is located within walking distance of Dayananda Sagar University, making daily travel between accommodation and classes convenient.",
                },
            ],
        },
        accommodationOptionsSection: {
            eyebrow: "ACCOMMODATION OPTIONS",
            heading: "Choose the Room Type that Fits You",
            description: [
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "S' Residences currently describes four accommodation tiers. Availability and eligibility can vary by academic year.",
                        },
                    ],
                },
            ],
            rooms: [
                {
                    id: 1,
                    category: "S' DORM",
                    tier: "4 Tier",
                    description: "Four female students share accommodation with access to a common bathroom on each floor and common facilities.",
                    tag: "*Female Accommodation",
                },
                {
                    id: 2,
                    category: "APARTMENT",
                    tier: "4 Tier",
                    description: "Four students share a furnished en-suite apartment with access to common facilities.",
                    tag: "*4 Sharing",
                },
                {
                    id: 3,
                    category: "APARTMENT",
                    tier: "3 Tier",
                    description: "Three students share an en-suite apartment with access to the residence's common facilities.",
                    tag: "*Limited Availability · Male Students",
                },
                {
                    id: 4,
                    category: "APARTMENT",
                    tier: "2 Tier",
                    description: "Two students share an en-suite apartment with access to the residence's common facilities.",
                    tag: "*2 Sharing · Female Accommodation",
                },
            ],
        },
    }

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AdmissionMenubar className="lg:!hidden block" />
            <AcademicAchievements data={local_data.achievementSection} variant="hostel" />
            <AdmissionAccomodation data={local_data.accomodation} />
        </>
    )
}
