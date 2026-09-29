import InnerHero from "@/components/layout/common/InnerHero";
import PlacementConnect from "@/components/sections/placements/placement-connect";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Placement  page title",
        metaDescription: "Placement  page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Placement  page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "Placements",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "Placement ",
                href: "/",
            },
            {
                label: "Corporate Connect ",
                href: "/",
            },
        ],
        PlacementmenuBar: true
    },
    placementContact: {
        heading: "Contact us",
        subheading: "Dayananda Sagar Placements | Contact us for placement queries at Dayananda Sagar University, Bangalore",
        contactGroups: [
            {
                id: 1,
                heading: "Contact us for Fresher's Hiring :",
                description: "B.Tech / M.Tech / BCA / MCA / BBA / MBA / B.Com / M.Com / B.Sc / M.Sc / B.Pharm / M.Pharm / PharmD / BA (JMC) / B.Design / Nursing / Physiotherapy",
                contacts: [
                    {
                        id: 1,
                        name: "M N Guruvenkatesh",
                        designation: "Senior Vice President - Placements & Skill Development",
                        details: [
                            {
                                id: 1,
                                label: "E-Mail:",
                                values: [
                                    { value: "gm-cr@dayanandasagar.edu", href: "mailto:gm-cr@dayanandasagar.edu" },
                                    { value: "dsi_placement@yahoo.com", href: "mailto:dsi_placement@yahoo.com" },
                                ],
                            },
                            {
                                id: 2,
                                label: "Phone:",
                                values: [
                                    { value: "+91 9844165956", href: "tel:+919844165956" },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        name: "Vijay Kumar S",
                        designation: "Director - Training & Corporate Relations",
                        details: [
                            {
                                id: 1,
                                label: "E-Mail:",
                                values: [
                                    { value: "vijaykumar@dsu.edu.in", href: "mailto:vijaykumar@dsu.edu.in" },
                                    { value: "placements@dsu.edu.in", href: "mailto:placements@dsu.edu.in" },
                                ],
                            },
                            {
                                id: 2,
                                label: "Phone:",
                                values: [
                                    { value: "+91 9886394532", href: "tel:+919886394532" },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                heading: "Contact us for MBA Hiring",
                description: "",
                contacts: [
                    {
                        id: 1,
                        name: "Prof. Sanjay K",
                        designation: "Director ( Corporate Relations & Placement ) Management Schools",
                        details: [
                            {
                                id: 1,
                                label: "E-Mail:",
                                values: [
                                    { value: "sanjay.k@dsu.edu.in", href: "mailto:sanjay.k@dsu.edu.in" },
                                ],
                            },
                            {
                                id: 2,
                                label: "Phone:",
                                values: [
                                    { value: "+91 9880283123", href: "tel:+919880283123" },
                                ],
                            },
                        ],
                    },
                    {
                        id: 2,
                        name: "Prof. Darpana Singh",
                        designation: "Manager - Placement",
                        details: [
                            {
                                id: 1,
                                label: "E-Mail:",
                                values: [
                                    { value: "darpana@dsu.edu.in", href: "mailto:darpana@dsu.edu.in" },
                                ],
                            },
                            {
                                id: 2,
                                label: "Phone:",
                                values: [
                                    { value: "+91 9845108664", href: "tel:+919845108664" },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    }

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <PlacementmenuBar className="lg:!hidden block" />
            <PlacementConnect data={local_data.placementContact} />

        </>
    )
}
