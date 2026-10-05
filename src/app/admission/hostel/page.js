import InnerHero from "@/components/layout/common/InnerHero";
import AcademicAchievements from "@/components/sections/academics/academic-achievements";
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

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AdmissionMenubar className="lg:!hidden block" />
            <AcademicAchievements data={local_data.achievementSection} variant="hostel" />
        </>
    )
}
