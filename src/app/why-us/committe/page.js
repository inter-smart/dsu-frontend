import InnerHero from "@/components/layout/common/InnerHero"
import DSUAct from "@/components/sections/why-us/DSU-act"
import DSUCommitee from "@/components/sections/why-us/DSU-Commitee"


const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Dsu Committee page title",
        metaDescription: "Dsu Committee page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "DSU Committee",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/ugc/ugc-banner.jpg",
        },
        title: "Committee",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "Why DSU",
                href: "/why-dsu",
            },
            {
                label: "Student Support & Welfare",
                href: "/",
            },
            {
                label: "Committee",
                href: "/",
            },
        ],
    },
    dsuCommiteeSection: {
        heading: "Committee",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "DSU’s institutional cells serve as dedicated platforms that support student welfare, academic excellence, innovation, entrepreneurship, social responsibility, and campus inclusivity. These cells work collaboratively to create a vibrant university ecosystem, empowering students with opportunities for personal growth, leadership development, skill enhancement, and meaningful community engagement beyond the classroom.",
                    },
                ],
            },
        ],

        committeeMembers: {
            columns: ["Name", "Designation", "Email ID"],
            rows: [
                {
                    id: 1,
                    name: "Mr. Abhishek Srinivas",
                    designation: "President",
                    email: "abhisheks2898@gmail.com",
                },
                {
                    id: 2,
                    name: "Ms. Apoorva D",
                    designation: "Vice President",
                    email: "apurwa6.am@gmail.com",
                },
                {
                    id: 3,
                    name: "Ms. Arpitha Ganesh",
                    designation: "Secretary",
                    email: "Arpithaganesh17@gmail.com",
                },
                {
                    id: 4,
                    name: "Ms. Suman S",
                    designation: "Treasurer",
                    email: "Sumansunil3105@gmail.com",
                },
                {
                    id: 5,
                    name: "Ms. Fiona Aljo",
                    designation: "Member",
                    email: "fionaaljo08781@gmail.com",
                },
                {
                    id: 6,
                    name: "Ms. Umi Salma",
                    designation: "Member",
                    email: "umisalma1298@gmail.com",
                },
                {
                    id: 7,
                    name: "Mr. Suman SK",
                    designation: "Member",
                    email: "sumansomu08@gmail.com",
                },
            ],
        }


    }
}
export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <DSUCommitee data={local_data.dsuCommiteeSection} />
        </>
    )
}
