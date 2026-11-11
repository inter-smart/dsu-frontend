import InnerHero from "@/components/layout/common/InnerHero";
import PhdProgrammes from "@/components/sections/reseach-innovation/PhdProgrammes";


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
                href: "/",
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
    }

};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <PhdProgrammes data={local_data.PhdProgrammes} />
        </>
    )
}
