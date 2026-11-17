import InnerHero from "@/components/layout/common/InnerHero";
import PhdProgrammes from "@/components/sections/reseach-innovation/PhdProgrammes";
import IndustryCentres from "@/components/sections/reseach-innovation/IndustryCentres";
import { getIncubationPage, INCUBATION_LISTING_PATH } from "@/lib/api/incubation";

const local_data = {
    hero: {
        id: 40,
        heroMedia: {
            alternativeText: "Incubation & Entrepreneurship page title",
            mime: "image/jpg",
            url: "/images/academic-banner.jpg",
        },
        title: "Incubation & Entrepreneurship",
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Research & Innovation", href: "/" },
            { label: "Incubation & Entrepreneurship", href: INCUBATION_LISTING_PATH },
        ],
    },
    intro: {
        heading: "Incubation & Entrepreneurship",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our incubation foundations support student and faculty founders from idea to venture, with mentoring, funding access and industry networks.",
                    },
                ],
            },
        ],
        media: null,
    },
    // Shown until an entry is published: no detail page exists yet, so the cards do not link
    cards: [
        {
            id: 1,
            title: "Entrepreneurship Research &\nBusiness Incubation Foundation",
            description: "DERBI Foundation",
            image: { url: "/images/incubation-1.webp", alternativeText: "DERBI Foundation" },
        },
        {
            id: 2,
            title: "AIC-DSU Innovation\nFoundation",
            description: "AIC-DSU Foundation",
            image: { url: "/images/incubation-2.webp", alternativeText: "AIC-DSU Foundation" },
        },
    ],
};

// The "Incubation & Entrepreneurship Page" single type + a card per published entry; the static
// content above for whatever is not published yet.
const loadPage = async () => {
    const cms = await getIncubationPage();
    return {
        seo: cms?.seo || null,
        hero: cms?.hero || local_data.hero,
        intro: cms?.intro || local_data.intro,
        cards: cms?.cards?.length ? cms.cards : local_data.cards,
    };
};

export async function generateMetadata() {
    const page = await loadPage();
    return {
        title: page.seo?.metaTitle || "Incubation & Entrepreneurship | Dayananda Sagar University",
        description: page.seo?.metaDescription || "Incubation & Entrepreneurship",
    };
}

export default async function page() {
    const cms = await loadPage();
    return (
        <>
            <InnerHero data={cms.hero} />
            <PhdProgrammes data={cms.intro} />
            <IndustryCentres data={{ cards: cms.cards }} />
        </>
    );
}
