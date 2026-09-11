import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import AcademicVisionMission from "@/components/sections/academics/academic-vision-mission";
import AcademicContact from "@/components/sections/academics/academic-contact";

const local_data = {
    hero: {
        heroMedia: {
            alternativeText: "Vision & Mission",
            mime: "image/jpg",
            url: "/images/academic-banner.jpg",
        },
        title: "Vision & Mission",
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "AI Enabled Academics", href: "/" },
            { label: "Schools", href: "/" },
            { label: "Computer Applications", href: "/academics" },
            { label: "Vision & Mission", href: "/academics/vision-mission" },
        ],
        menuBar: true
    },
    visionMissionSection: {
        eyebrow: "VISION & MISSION",
        heading: "Purpose-Driven Academic Excellence",
        media: {
            alternativeText: "Illuminated campus building at night with starry sky background",
            mime: "image/jpg",
            url: "/images/vision-mission-bg.jpg",
        },
        mission: {
            heading: "Mission",
            description: "To develop innovative and skilled computer professionals through cutting-edge research, education, and entrepreneurial initiatives, fostering leadership qualities to address the evolving challenges of emerging technologies and contribute to societal advancements nationally and globally.",
        },
        vision: {
            heading: "Vision",
            description: "The Department of Computer Applications is committed to:",
            points: [
                {
                    id: 1,
                    code: "M1",
                    text: "To deliver cutting-edge education and research opportunities that drive innovation in computer science and applications.",
                },
                {
                    id: 2,
                    code: "M2",
                    text: "To maintain state-of-the-art facilities and attract internationally recognized faculty to support advanced learning and research.",
                },
                {
                    id: 3,
                    code: "M3",
                    text: "To continuously update our curriculum to reflect the dynamic landscape of emerging technologies and industry needs.",
                },
                {
                    id: 4,
                    code: "M4",
                    text: "To foster strong partnerships with industry and the community, enhancing practical experiences and entrepreneurial initiatives.",
                },
                {
                    id: 5,
                    code: "M5",
                    text: "To develop graduates who are not only skilled and innovative computer professionals but also ethical leaders, equipped to tackle global and national challenges and contribute to societal advancements.",
                },
            ],
        },
    },
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AcademicMenubar className="md:!hidden block" />
            <AcademicVisionMission data={local_data.visionMissionSection} />
        </>
    );
}
