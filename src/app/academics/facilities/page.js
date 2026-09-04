import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import AcademicContact from "@/components/sections/academics/academic-contact";
import AcademicProgram from "@/components/sections/academics/academic-program";
import AcademicFacilities from "@/components/sections/academics/academic-facilities";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Departments page title",
        metaDescription: "Departments page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Departments page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "School of Computer Applications",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "AI Enabled Academics",
                href: "/",
            },
            {
                label: "Schools",
                href: "/",
            },
            {
                label: "Computer Applications",
                href: "/",
            },
            {
                label: "Departments",
                href: "/",
            },
        ],
        menuBar: true
    },
    modernSpacesSection: {
        heading: "Modern Spaces for Learning & Experimentation",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The School of Computer Applications at DSU boasts a dynamic faculty team, blending experienced professionals and passionate educators, all well versed in various disciplines such as Computer Science, Mathematics, and Information Technology. The faculty specializes in areas including Artificial Intelligence, Machine learning, Data Analytics, Cloud Computing, and Wireless Networks. The school's infrastructure is meticulously designed to equip students with the necessary knowledge and practical skills essential for today's competitive landscape.",
                    },
                ],
            }
        ],
        points: [
            {
                id: 1,
                title: "Smart Classrooms",
                description: "DSU features over 100 smart classrooms with state-of-the-art infrastructure. The School of Computer Applications itself has 15 digital classrooms, each outfitted with advanced projectors, WiFi connectivity, and modern facilities to support hybrid learning models.",
                media: [
                    {
                        alternativeText: "Students in a smart classroom with modern infrastructure",
                        mime: "image/jpg",
                        // if video - mime: "video/mp4",
                        url: "/images/facility-1.jpg",
                    },
                    {
                        alternativeText: "Students in a smart classroom with modern infrastructure",
                        mime: "image/jpg",
                        // if video - mime: "video/mp4",
                        url: "/images/facility-2.jpg",
                    },
                    {
                        alternativeText: "Students in a smart classroom with modern infrastructure",
                        mime: "image/jpg",
                        // if video - mime: "video/mp4",
                        url: "/images/facility-3.jpg",
                    },
                ]
            },
            {
                id: 2,
                title: "Library",
                description: "The university's cutting-edge library houses over 2,500 books related to Computer Science and Applications, along with a wealth of e-books, international journals, publications, and research papers.",
                media: [
                    {
                        alternativeText: "Students browsing books in the library",
                        mime: "image/jpg",
                        // if video - mime: "video/mp4",
                        url: "/images/facility-2.jpg",
                    },
                    {
                        alternativeText: "Students browsing books in the library",
                        mime: "image/jpg",
                        // if video - mime: "video/mp4",
                        url: "/images/facility-3.jpg",
                    },
                ]
            },
            {
                id: 3,
                title: "Student Clubs",
                description: "The school offers five vibrant student clubs dedicated to fostering project-based learning, promoting social outreach programs, encouraging peer learning, developing skills, and hosting cultural activities.",
                media: [
                    {
                        alternativeText: "Students collaborating at student club activities",
                        mime: "image/jpg",
                        // if video - mime: "video/mp4",
                        url: "/images/facility-3.jpg",
                    },
                ]
            },
            {
                id: 4,
                title: "Computer Labs",
                description: "With six fully equipped, forward-thinking computer labs, the School enables students to work on advanced technologies, including Internet of Things (IoT) projects.",
                media: [{
                    alternativeText: "Students working in a computer lab",
                    mime: "image/jpg",
                    // if video - mime: "video/mp4",
                    url: "/images/facility-4.jpg",
                },]
            },
            {
                id: 5,
                title: "Research Centers",
                description: "The School also hosts a dedicated research center that provides students with the resources and guidance needed to pursue groundbreaking research, paving the way for high-quality doctoral studies.",
                media: [{
                    alternativeText: "Student working at a research center computer station",
                    mime: "image/jpg",
                    // if video - mime: "video/mp4",
                    url: "/images/facility-5.jpg",
                },
                ]
            },
        ],
    }


}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AcademicMenubar className="md:!hidden block" />
            <AcademicFacilities data={local_data.modernSpacesSection} />

        </>
    )
}

