import InnerHero from "@/components/layout/common/InnerHero";
import AcademicAchievements from "@/components/sections/academics/academic-achievements";
import AdmissionAccomodation from "@/components/sections/admission/AdmissionAccomodation";
import AdmissionDates from "@/components/sections/admission/AdmissionDates";
import AdmissionDining from "@/components/sections/admission/AdmissionDining";
import AdmissionHostelFacility from "@/components/sections/admission/admissionHostelFacility";
import AdmissionMenubar from "@/components/sections/admission/admissionMenubar";
import AdmissionPlanning from "@/components/sections/admission/AdmissionPlanning";
import AdmissionSafety from "@/components/sections/admission/AdmissionSafety";
import AdmissionTransportation from "@/components/sections/admission/AdmissionTransportation";

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
    },
    facility: {
        eyebrow: "HOSTEL FACILITIES",
        heading: "Everything Students Need, in One Place",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The published S' Residences facilities combine study spaces, recreation, convenience services and everyday support.",
                    },
                ],
            },
        ],
        facilities: [
            {
                id: 1,
                title: "24/7 Security",
                description: "Dedicated security and monitored access.",
                icon: {
                    alternativeText: "24/7 security icon",
                    mime: "image/svg+xml",
                    url: "/images/h-facility-1.svg",
                },
            },
            {
                id: 2,
                title: "Face Recognition & Biometrics",
                description: "Monitored student entry and exit.",
                icon: {
                    alternativeText: "Face recognition and biometrics icon",
                    mime: "image/svg+xml",
                    url: "/images/h-facility-2.svg",
                },
            },
            {
                id: 3,
                title: "Laundry Service",
                description: "On-site laundry convenience.",
                icon: {
                    alternativeText: "Laundry service icon",
                    mime: "image/svg+xml",
                    url: "/images/h-facility-3.svg",
                },
            },
            {
                id: 4,
                title: "Wi-Fi & Internet",
                description: "Fast connectivity for learning & communication.",
                icon: {
                    alternativeText: "Wi-Fi and internet icon",
                    mime: "image/svg+xml",
                    url: "/images/h-facility-4.svg",
                },
            },
            {
                id: 5,
                title: "Study Zones",
                description: "Quiet study areas and discussion rooms.",
                icon: {
                    alternativeText: "Study zones icon",
                    mime: "image/svg+xml",
                    url: "/images/h-facility-5.svg",
                },
            },
            {
                id: 6,
                title: "RO Drinking Water",
                description: "RO drinking-water facilities.",
                icon: {
                    alternativeText: "RO drinking water icon",
                    mime: "image/svg+xml",
                    url: "/images/h-facility-6.svg",
                },
            },
            {
                id: 7,
                title: "CCTV Monitoring",
                description: "Security cameras across the residence.",
                icon: {
                    alternativeText: "CCTV monitoring icon",
                    mime: "image/svg+xml",
                    url: "/images/h-facility-7.svg",
                },
            },
            {
                id: 8,
                title: "Resident Warden",
                description: "On-site residential support.",
                icon: {
                    alternativeText: "Resident warden icon",
                    mime: "image/svg+xml",
                    url: "/images/h-facility-8.svg",
                },
            },
            {
                id: 9,
                title: "Gym & Yoga",
                description: "Fitness, yoga and wellness spaces.",
                icon: {
                    alternativeText: "Gym and yoga icon",
                    mime: "image/svg+xml",
                    url: "/images/h-facility-9.svg",
                },
            },
            {
                id: 10,
                title: "Indoor & Outdoor Sports",
                description: "Indoor games and access to outdoor sports facilities.",
                icon: {
                    alternativeText: "Indoor and outdoor sports icon",
                    mime: "image/svg+xml",
                    url: "/images/h-facility-10.svg",
                },
            },
            {
                id: 11,
                title: "Parcel Service",
                description: "Convenient parcel handling for residents.",
                icon: {
                    alternativeText: "Parcel service icon",
                    mime: "image/svg+xml",
                    url: "/images/h-facility-11.svg",
                },
            },
            {
                id: 12,
                title: "Medical Support",
                description: "Access to health clinic and counsellors.",
                icon: {
                    alternativeText: "Medical support icon",
                    mime: "image/svg+xml",
                    url: "/images/h-facility-12.svg",
                },
            },
        ],
    },
    dining: {
        eyebrow: "DINING",
        heading: "Food that Fits Student Life",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "S' Residences lists SSquare as its designated mess service, with vegetarian and non-vegetarian Indian meals. The residence also has food and beverage options for snacks and casual dining.",
                    },
                ],
            },
        ],
        cards: [
            {
                id: 1,
                title: "SSquare",
                description: "SSquare Mess Halls is a catering service that provides Indian vegetarian and non-vegetarian cuisine for students of S' Residences, a popular student housing community. The company was founded with the goal of providing high-quality, nutritious food that is both tasty and affordable. With a focus on fresh, healthy ingredients and a commitment to customer satisfaction, SSquare Mess Halls has quickly become a popular choice for students looking for a delicious and convenient meal option.",
            },
            {
                id: 2,
                title: "Grains & Gossip",
                description: "Grains & Gossip: A Cafeteria That Satisfies Your Cravings. There is something truly satisfying about a cafeteria that can cater to everyone's taste buds. Whether you are in the mood for a quick bite or a full meal, Grains & Gossip has something for everyone. From juicy burgers to freshly baked puffs, this cafeteria serves up international fast food in a way that is both satisfying and affordable.",
            },
        ],
        button: {
            label: "Explore Now",
            href: "#",
        },
    },
    transportation: {
        eyebrow: "TRANSPORTATION",
        heading: "Easy Access to Campus and the City",
        points: [
            {
                id: 1,
                title: "Campus Access",
                description: "S' Residences is located next to DSU and within walking distance of the university, reducing the need for daily commuting between the residence and campus.",
            },
            {
                id: 2,
                title: "University transport",
                description: "DSU has published that it provides transport facilities to students from the city. Route details and availability should be checked with the university before enrolment.",
            },
        ],
    },
    safety: {
        eyebrow: "SAFETY & STUDENT SUPPORT",
        heading: "A Structured & Supported Living Environment",
        cards: [
            {
                id: 1,
                title: "Safety & Security",
                list: [
                    { id: 1, label: "24/7 security staff" },
                    { id: 2, label: "CCTV monitoring" },
                    { id: 3, label: "Monitored entry and exit" },
                    { id: 4, label: "Face-recognition and biometric access" },
                    { id: 5, label: "Visitor policy and registered visitor controls" },
                ],
            },
            {
                id: 2,
                title: "Student Support",
                list: [
                    { id: 1, label: "Resident warden and 24/7 assistance" },
                    { id: 2, label: "Access to health clinic and counsellors" },
                    { id: 3, label: "Study zones and discussion rooms" },
                    { id: 4, label: "Recreation, fitness and wellness spaces" },
                    { id: 5, label: "DSU support systems including counselling and student grievance mechanisms" },
                ],
            },
        ],
    },
    planning: {
        heading: "Planning to Stay at DSU?",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Check the latest hostel availability, accommodation charges and application process before making your reservation. Hostel terms and charges can change by academic year.",
                    },
                ],
            },
        ],
        button: {
            label: "Enquire Now",
            href: "#",
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
            <AdmissionHostelFacility data={local_data.facility} />
            <AdmissionDining data={local_data.dining} />
            <AdmissionTransportation data={local_data.transportation} />
            <AdmissionSafety data={local_data.safety} />
            <AdmissionPlanning data={local_data.planning} />
        </>
    )
}
