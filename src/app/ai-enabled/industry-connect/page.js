import InnerHero from "@/components/layout/common/InnerHero";
import AcademicAchievements from "@/components/sections/academics/academic-achievements";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import AiAcademicChapters from "@/components/sections/ai-enabled/Ai-academicChapters";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Industry Connect page title",
        metaDescription: "Industry Connect page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Industry Connect page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "School of Computer Applications",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "AI Enabled Academics",
                href: "/",
            },
            {
                label: "Schools",
                href: "/",
            },
            {
                label: "Computer Applications",
                href: "/",
            },
            {
                label: "Industry Connect",
                href: "/",
            },
        ],
        AimenuBar: true
    },
    achievementSection: {
        heading: "Industry Connect",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our nursing graduates are molded not only by their academic studies but also by their hands-on experiences in various clinical settings. By collaborating with government and affiliated hospitals, as well as simulation partners and international exchange programs, we ensure that our students receive comprehensive supervised clinical exposure. This approach allows them to engage with real patients, honing their skills and building the confidence necessary for safe and competent nursing practice in the ever-evolving healthcare landscape. ",
                    },
                ],
            },
        ],
        stats: [
            {
                id: 1,
                value: "6+",
                label: "Affiliated Government & Parent Hospitals",
            },
            {
                id: 2,
                value: "23+",
                label: "Years of Nursing Education Legacy",
            },
            {
                id: 3,
                value: "1+",
                label: "International MOU — Malaysia",
            },
            {
                id: 4,
                value: "700+",
                label: "Supervised Clinical Training Hours",
            },
        ],
    },
   


}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AcademicMenubar className="md:!hidden block" />
            <AcademicAchievements data={local_data.achievementSection} variant="AiChapter" />
 

        </>
    )
}

