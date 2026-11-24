import InnerHero from "@/components/layout/common/InnerHero"; 
import ConstituentLibrariesLibrary from "@/components/sections/library/ConstituentLibrariesLibrary";

const local_data = {
    // ...id, seo stay as you have them

    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Constituent Libraries",
            mime: "image/jpg",
            url: "/images/academic-banner.jpg",
        },
        title: "Library",
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Student Life", href: "/" },
            { label: "Library", href: "/" },
            { label: "Constituent Libraries", href: "/" },
        ],
    },

    constituentLibraries: {
        title: "Constituent Libraries",
        intro:
            "The following Objectives and Responsibilities of the Library Advisory Committee Members",
        libraries: [
            { label: "School of Engineering", url: "/" },
            { label: "School of Commerce & Management Studies", url: "/" },
            { label: "School of Law", url: "/" },
            { label: "School of Basic & Applied Sciences", url: "/" },
            { label: "College of Physiotherapy", url: "/" },
            { label: "School of Computer Application", url: "/" },
            { label: "College of Journalism & Mass Communication", url: "/" },
            { label: "School of Basic & Applied Sciences", url: "/" },
            { label: "College of Pharmaceutical Sciences", url: "/" },
            { label: "College of Nursing Sciences", url: "/" },
        ],
    },

    menu: [/* same menu data you pass to AboutLibrary */],
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <ConstituentLibrariesLibrary
                data={local_data.constituentLibraries} 
            />
        </>
    );
}