import InnerHero from "@/components/layout/common/InnerHero";
import PhdProgrammes from "@/components/sections/reseach-innovation/PhdProgrammes";
import IndustryCentres from "@/components/sections/reseach-innovation/IndustryCentres";
import { redirect } from "next/navigation";
import { DEFAULT_INNOVATION_SLUG, getInnovationPage, innovationListingPath } from "@/lib/api/innovation";


export const local_data = {
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Industry Collaborations page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "Innovation",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "Research & innovations",
                href: "/",
            },
            {
                label: "Innovation",
                href: "/research-innovation/innovation",
            },

        ],
    },
    PhdProgrammes: {

        heading: "Innovations",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Explore a vast array of Ph.D. programs tailored for both full-time and part-time students, featuring an exciting Direct Ph.D. pathway for those eager to accelerate their academic pursuits. Our offerings span across eight esteemed schools and colleges, each providing unique research opportunities and dedicated academic support to help you achieve your individual interests and career goals.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Whether your ambition is to engage in pioneering research or to refine your professional skills, we are committed to guiding you toward the perfect program that meets your aspirations. ",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Join us on this transformative journey and unlock your potential!",
                    },
                ],
            },
        ],
        media: {
            url: "/images/research/innovation.jpg",
            alternativeText: "Researcher working in a lab",
        },
    },
    industryCentres: {
        cards: [
            {
                id: 1,
                title: "ETAS: Automotive\nSystem Labs",
                description: "Today’s automotive system is complex with the extensive use of electronics and software.",
                image: { url: "/images/research/innovation-1.jpg", alternativeText: "ETAS Automotive System Labs" },
                cta: { url: "/research-innovation/innovation/etas", newTab: false },
            },
            {
                id: 2,
                title: "Autodesk: Design &\nInnovation Centre",
                description: "Centre will focus on providing training to the students & faculty members in the Virtual Design techniques.",
                image: { url: "/images/research/innovation-2.jpg", alternativeText: "Autodesk Design & Innovation Centre" },
                cta: { url: "/research-innovation/innovation/autodesk", newTab: false },
            },
            {
                id: 3,
                title: "Vmware\nIT Academy",
                description: "VMware is a global leader in cloud infrastructure and business mobility",
                image: { url: "/images/research/innovation-3.jpg", alternativeText: "Vmware IT Academy" },
                cta: { url: "/research-innovation/innovation/vmware", newTab: false },
            },
            {
                id: 4,
                title: "BOSCH Rexroth:Automation\nTechnologies",
                description: "The Centre will work as an independent Centre serving as Centre of competence and Skill development.",
                image: { url: "/images/research/innovation-4.jpg", alternativeText: "BOSCH Rexroth Automation Technologies" },
                cta: { url: "/research-innovation/innovation/bosch-rexroth", newTab: false },
            },
            {
                id: 5,
                title: "IBM Software for Emerging\nTechnologies",
                description: "IBM has collaborated with Dayananda Sagar University (DSU), to launch two Post graduate programs",
                image: { url: "/images/research/innovation-5.jpg", alternativeText: "IBM Software for Emerging Technologies" },
                cta: { url: "/research-innovation/innovation/ibm", newTab: false },
            },
            {
                id: 6,
                title: "NVIDIA: Boston\nInnovation Lab",
                description: "Dayananda Sagar University is named as a GPU education center by NVIDIA, the AI computing company.",
                image: { url: "/images/research/innovation-6.jpg", alternativeText: "NVIDIA Boston Innovation Lab" },
                cta: { url: "/research-innovation/innovation/nvidia", newTab: false },
            },
            {
                id: 7,
                title: "GE Advanced\nHealthcare Lab",
                description: "This Lab offers technical education for engineering graduates in Healthcare.",
                image: { url: "/images/research/innovation-7.jpg", alternativeText: "GE Advanced Healthcare Lab" },
                cta: { url: "/research-innovation/innovation/ge-healthcare", newTab: false },
            },
            {
                id: 8,
                title: "Dassault Systems -\nAE Lab",
                description: "DSU has established a Centre of Excellence (COE) in Aerospace Engineering with M/s. Dassault Systems.",
                image: { url: "/images/research/innovation-8.jpg", alternativeText: "Dassault Systems AE Lab" },
                cta: { url: "/research-innovation/innovation/dassault", newTab: false },
            },
        ],
    },

};

// The "Innovation Page" single type + a card per published "Innovation" entry; the static content
// above for whatever is not published yet.
const loadPage = async () => {
    const cms = await getInnovationPage();
    return {
        slug: cms?.slug || DEFAULT_INNOVATION_SLUG,
        seo: cms?.seo || null,
        hero: cms?.hero || local_data.hero,
        intro: cms?.intro || local_data.PhdProgrammes,
        industryCentres: cms?.industryCentres?.cards?.length ? cms.industryCentres : local_data.industryCentres,
    };
};

export async function generateMetadata() {
    const page = await loadPage();
    return {
        title: page.seo?.metaTitle || "Innovation | Dayananda Sagar University",
        description: page.seo?.metaDescription || "Innovation",
    };
}

// The listing lives at /research-innovation/<slug set in the CMS>: this folder sends the visitor there
// when the slug was changed. viaSlug is set when it is already served from that path.
export default async function page({ viaSlug } = {}) {
    const cms = await loadPage();
    if (!viaSlug && cms.slug !== DEFAULT_INNOVATION_SLUG) redirect(innovationListingPath(cms.slug));

    return (
        <>
            <InnerHero data={cms.hero} />
            <PhdProgrammes data={cms.intro} />
            <IndustryCentres data={cms.industryCentres} />
        </>
    )
}
