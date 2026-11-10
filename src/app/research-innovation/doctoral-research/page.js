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
        title: "Doctoral Research",
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
                label: "Doctoral Research",
                href: "/",
            },
           
        ],
    },
    PhdProgrammes: {

        heading: "Ph.D. Programmes",
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
                        text: "Whether your ambition is to engage in pioneering research or to refine your professional skills, we are committed to guiding you toward the perfect program that meets your aspirations.",
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
            url: "/images/research/phd-program.jpg",
            alternativeText: "Researcher working in a lab",
        },
        programmesHeading: "Programmes Offered",
        programmesDescription: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Dayananda Sagar University (DSU) invites applications for admission to its PhD program (Full-Time/Part-Time) and Direct Ph.D. programs across various disciplines. The University has a strong pool of qualified faculty members who guide research scholars toward their doctoral degrees. DSU promotes interdisciplinary and socially relevant research across diverse domains.",
                    },
                ],
            },
        ],
        tableHeaders: {
            number: "#",
            course: "PhD Course",
            department: "Department and Area of Research",
        },
        programmes: [
            {
                course: "PhD in Computer Science & Engineering",
                department: "Computer Science and Engineering",
                area: "CSE, AI & ML",
                cta: { label: "Know More", url: "/schools/engineering/phd", newTab: false },
            },
            {
                course: "PhD in Computer Science & Engineering (AI & ML)",
                department: "Computer Science and Engineering (AI & ML)",
                area: "Artificial Intelligence & Machine Learning (AI & ML)",
                cta: null,
            },
            {
                course: "PhD in Mechanical Engineering",
                department: "Mechanical Engineering",
                area: "Mechanical Engineering",
                cta: null,
            },
            {
                course: "Ph.D. In Aerospace Engineering",
                department: "Aerospace Engineering",
                area: "Aerospace",
                cta: null,
            },
            {
                course: "Ph.D., in Law",
                department: "School of Law",
                area: "Law",
                cta: null,
            },
            {
                course: "Ph.D. in School of Commerce and Management",
                department: "School of Commerce and Management",
                area: "Commerce and Management",
                cta: null,
            },
            {
                course: "Doctoral Program (Ph.D)",
                department: "College of Physiotherapy",
                area: "Biochemistry, Biotechnology",
                cta: null,
            },
            {
                course: "Ph.D. in Nursing",
                department: "College of Nursing Sciences",
                area: "Nursing",
                cta: null,
            },
        ],
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
