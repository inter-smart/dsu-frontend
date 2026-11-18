import InnerHero from "@/components/layout/common/InnerHero"; 
import BrochureLibrary from "@/components/sections/library/BrochureLibrary";

const local_data = {
    // ...id, seo stay as you have them

    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Brochure",
            mime: "image/jpg",
            url: "/images/academic-banner.jpg",
        },
        title: "Library",
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Student Life", href: "/" },
            { label: "Library", href: "/" },
            { label: "Brochure", href: "/" },
        ],
    },

    brochure: {
        title: "Brochure",
        intro:
            "The following Objectives and Responsibilities of the Library Advisory Committee Members",
        brochures: [
            { label: "Brochure 1", url: "/pdf/library/brochure-1.pdf", isExternal: true },
            { label: "Brochure 2", url: "/pdf/library/brochure-2.pdf", isExternal: true },
            { label: "Brochure 3", url: "/pdf/library/brochure-3.pdf", isExternal: true },
            { label: "Brochure 4", url: "/pdf/library/brochure-4.pdf", isExternal: true },
        ],
    },

    menu: [/* same menu data you pass to AboutLibrary */],
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <BrochureLibrary data={local_data.brochure}  />
        </>
    );
}