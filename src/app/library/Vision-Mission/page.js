import InnerHero from "@/components/layout/common/InnerHero"; 
import VisionMissionLibrary from "@/components/sections/library/VisionMission";

const local_data = {
     
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "library page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "Library",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "Student Life",
                href: "/",
            },
            {
                label: "Library",
                href: "/",
            },
            {
                label: "Library Vision & Mission",
                href: "/",
            },
        ],
    },
    visionMission: {
        title: "Library Vision & Mission",
        vision: {
            title: "Vision",
            icon: { url: "/images/library/mission-icon-1.svg", alternativeText: "Vision" },
            description:
                "The vision of Library and Information Centre at Dayananda Sagar University is to be a world-class University Library that caters to the needs of students and faculty members for academic excellence.",
        },
        mission: {
            title: "Mission",
            icon: { url: "/images/library/vision-icon-1.svg", alternativeText: "Mission" },
            items: [
                "The mission of Library and Information Centre of Dayananda Sagar University is to provide many services and various modes of activities to its user community in a wide range.",
                "Mainly to support teaching, learning, research and innovative activities in becoming active & discerning users for promotion of their knowledge.",
                "To establish learning environment for the Library users as well as encouraging and supporting the professional growth & individual growth for staff, students and every individual in his treasure of knowledge of great name, fame & reputation earned by its great extended services.",
                "To fulfil this mission we are committed to build collections, create tools and render services.",
            ],
        },
    },

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <VisionMissionLibrary data={local_data.visionMission} />
        </>
    )
}