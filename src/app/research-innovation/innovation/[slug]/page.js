import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import InnovationDetail from "@/components/sections/reseach-innovation/InnovationDetail";
import InnovationContent from "@/components/sections/reseach-innovation/InnovationContent";
import InnovationCourses from "@/components/sections/reseach-innovation/InnovationCourses";
import InnovationObjectives from "@/components/sections/reseach-innovation/InnovationObjectives";
import InnovationGallery from "@/components/sections/reseach-innovation/InnovationGallery";


const blocks = (text) => [
    {
        type: "paragraph",
        children: [{ type: "text", text }],
    },
];

const paragraphs = (...texts) =>
    texts.map((text) => ({
        type: "paragraph",
        children: [{ type: "text", text }],
    }));

const makeHero = (id, label, slug) => ({
    id,
    heroMedia: {
        alternativeText: "Innovation page title",
        mime: "image/jpg",
        // if video - mime: "video/mp4",
        url: "/images/academic-banner.jpg",
    },
    title: "Innovation",
    breadcrumb: [
        { label: "Home", href: "/" },
        { label: "Research & Innovations", href: "/" },
        { label: "Innovations", href: "/research-innovation/innovation" },
        { label: label, href: `/research-innovation/innovation/${slug}` },
    ],
});


export const local_data = [
    {
        slug: "etas",
        hero: makeHero(26, "Automotive System Lab By ETAS (BOSCH)", "etas"),
        detail: {
            heading: "Automotive System Lab by ETAS (BOSCH)",
            description: blocks(
                "Today’s automotive system is complex with the extensive use of electronics and software. As per OEMs , in present Day Car, 80% innovation happens in electronics and software. Time to develop the product has reduced significantly and this requires fast development and testing of automotive function. Rapid prototype and thorough understanding of electronic control units is an essential component in the training of future engineers. ETAS (BOSCH) has developed system on which development and testing can be done in short time and the same can be used to train future engineers.",
            ),
            media: {
                url: "/images/research/automotive.jpg",
                alternativeText: "ETAS function development and engine simulation model diagram",
            },
            pdf: { label: "View PDF", url: "/pdf/etas-automotive-system-lab.pdf", newTab: true },
            video: { label: "Watch Video", url: "https://www.youtube.com/watch?v=your-video-id", newTab: true },
        },
        content: {
            heading: "ETAS ( BOSCH) System Lab Comprises of",
            points: [
                "FlexECU-an open and economical ECU platform for the on-target system development of new control concepts. This is based on production-ready versions of Bosch’s world-class ECU hardware with microcontroller.",
                "Hardware-in-the-Loop testing system -ETAS LABCAR and tools which is used for software development and testing.",
                "Modeling tools to develop control model",
            ],
            detailsHeading: "Program Details:",
            columns: [
                {
                    groups: [
                        {
                            title: "For Nursing Students:",
                            items: ["ACLS & BLS, Excellence in Patient Relations."],
                        },
                        {
                            title: "For Paramedical & Medical Imaging Students:",
                            items: [
                                "CT & MRI basics and Advanced Post Processing",
                                "Advanced X-Ray, DXA and Mammography",
                                "Multi Planner Reformation (MPR)",
                                "Maximum Intensity Projection (MIP)",
                                "Minimum Intensity Projection (MinIP)",
                                "Shaded Surface Display (SSD)",
                                "Volume Rendering (VRD)",
                                "3-D Model",
                                "Bone Removal",
                                "Image Fusion",
                                "Vessel Tracking",
                            ],
                        },
                    ],
                },
                {
                    groups: [
                        {
                            title: "For Physiotherapy Students:",
                            items: [
                                "Anaesthesia, Ventilator, Ultrasound",
                                "X-Ray, CT & MRI",
                            ],
                        },
                        {
                            title: "For Biotechnology Students:",
                            items: [
                                "Cellular Technologies and Protein Purification, Application of Protein Purification and Characterization, Genomics/Cellular Research.",
                            ],
                        },
                        {
                            title: "Hardware Assets of the Lab:",
                            items: [
                                "Windows Workstation (Server)",
                                "ECG Machines",
                                "Anaesthesia Machines",
                                "Ventilator",
                                "AKTA Start Chromatography System",
                            ],
                        },
                    ],
                },
            ],
            accordion: [
                {
                    id: 1,
                    title: "B.Tech Computer Science & Engineering (Data Sciences)",
                    duration: "4 Years",
                    description: blocks("Replace this with the programme details for this course."),
                },
                {
                    id: 2,
                    title: "B.Tech Computer Science & Engineering (Data Sciences)",
                    duration: "4 Years",
                    description: blocks("Replace this with the programme details for this course."),
                },
            ],
        },
        courses: {
            heading: "Courses Offered Through VMWare IT ACADEMY For DSU Faculties And Students",
            items: [
                {
                    id: 1,
                    title: "VCLOUD AIR FUNDAMENTALS",
                    description: paragraphs(
                        "Dive into the world of VCloud Air with this comprehensive course designed to give you a solid foundation in its functionalities. You'll explore how businesses can seamlessly transition or enhance their on-premises data centers using VCloud Air.",
                        "This course covers a broad overview of VCloud Air, addressing typical challenges faced with public cloud solutions, the hurdles that often impede public cloud adoption, and the ways in which VCloud Air effectively addresses these obstacles. Get ready to unlock the potential of cloud technology!",
                    ),
                    image: {
                        url: "/images/research/course-1.jpg",
                        alternativeText: "Hand holding a network cable in front of a cloud",
                    },
                    cta: { label: "Read More", url: "/", newTab: false },
                },
                {
                    id: 2,
                    title: "VMWARE CLOUD FUNDAMENTALS",
                    tight: true,
                    description: paragraphs(
                        "The VMware Cloud Fundamentals course is designed to give you a comprehensive understanding of VMware’s Cloud offerings. This course addresses the key business challenges that these products aim to resolve. It consists of three detailed modules: In the first module, you will explore the various types of Cloud computing, gaining insights into their unique characteristics.",
                        "The second module will delve into VMware’s Cloud products, highlighting their features and essential components, ensuring you have a solid grasp of what each product brings to the table. By the end of this course, you will be well-equipped to navigate the Cloud landscape with confidence.",
                    ),
                    image: {
                        url: "/images/research/course-2.jpg",
                        alternativeText: "Cloud computing icons above a hand touching a cloud",
                    },
                    cta: { label: "Read More", url: "/", newTab: false },
                },
                {
                    id: 3,
                    title: "VMWARE NETWORK VIRTUALIZATION FUNDAMENTALS",
                    description: paragraphs(
                        "The VMware Network Virtualization Fundamentals course offers an in-depth exploration of virtual networking concepts and the VMware NSX product. This course is designed to equip you with essential knowledge about how virtual networking operates and the specific business challenges that VMware NSX aims to address.",
                        "By the end of the course, you will have a solid foundation in the principles of network virtualization and an understanding of how these technologies can transform your organization's networking capabilities.",
                    ),
                    image: {
                        url: "/images/research/course-3.jpg",
                        alternativeText: "Connected laptops over a glowing network grid",
                    },
                    cta: { label: "Read More", url: "/", newTab: false },
                },
                {
                    id: 4,
                    title: "VMWARE WORKFORCE MOBILITY FUNDAMENTALS",
                    description: paragraphs(
                        "The VMware Workforce Mobility Fundamentals course offers an in-depth exploration of VMware's Workforce Mobility products. This course is designed to equip students with a comprehensive understanding of how these innovative solutions address various business challenges.",
                        "Participants will learn about the key features and benefits of the products, as well as the specific issues they are designed to resolve in the modern workplace.",
                    ),
                    image: {
                        url: "/images/research/course-4.jpg",
                        alternativeText: "Business professionals walking in an office",
                    },
                    cta: { label: "Read More", url: "/", newTab: false },
                },
                {
                    id: 5,
                    title: "DATA CENTER VIRTUALIZATION FUNDAMENTALS",
                    tight: true,
                    description: paragraphs(
                        "Data Center Virtualization is an essential course designed to give you a comprehensive understanding of VMware's suite of Data Center Virtualization products. Throughout this course, you'll explore the various components and features of vSphere 6.0 in depth. Additionally, you'll learn how the vSphere 6.0 product line effectively addresses the common business and IT challenges that organizations encounter today.",
                        "By the end of the course, you'll be equipped with the knowledge to leverage these tools to enhance operational efficiency and drive innovation within your organization.",
                    ),
                    image: {
                        url: "/images/research/course-5.jpg",
                        alternativeText: "Rows of servers in a data center",
                    },
                    cta: { label: "Read More", url: "/", newTab: false },
                },
            ],
        },
        objectives: {
            heading: "Objective and Fuctioning of COE Project:",
            items: [
                {
                    id: 1,
                    title: "Objective",
                    description: "Assistance in skill development enable students to earn better livelihood for social upliftment.",
                },
                {
                    id: 2,
                    title: "Knowledge, R&D",
                    description: "Equip the skill development center by creatinghigh end assets for human capital formation.",
                },
                {
                    id: 3,
                    title: "Competency",
                    description: "Impact high end modern technical skills and knowledge to create industry ready human capital.",
                },
                {
                    id: 4,
                    title: "Placements",
                    description: "Enhance recruit in CoE, DS/DCS HR direct initiative and collaborate with industry partners.",
                },
                {
                    id: 5,
                    title: "Institute Role",
                    description: "Collaborate with DS, CoE – A & D (GoK) and DCS to establish CoE and facilitate institutional co-operation.",
                },
                {
                    id: 6,
                    title: "Placements",
                    description: "Enhance recruit in CoE, DS/DCS HR direct initiative and collaborate with industry partners.",
                },
            ],
        },
        gallery: {
            images: [
                {
                    id: 1,
                    url: "/images/research/gallery-1.jpg",
                    alternativeText: "Aircraft assembly hall viewed from above",
                },
                {
                    id: 2,
                    url: "/images/research/gallery-2.jpg",
                    alternativeText: "Aircraft fuselage under assembly with scaffolding",
                },
                {
                    id: 3,
                    url: "/images/research/gallery-3.jpg",
                    alternativeText: "Students learning in a lab with an instructor",
                },
                {
                    id: 4,
                    url: "/images/research/gallery-4.jpg",
                    alternativeText: "GE Healthcare DNA and technology slide",
                },
                {
                    id: 5,
                    url: "/images/research/gallery-5.jpg",
                    alternativeText: "Design is how it works slide",
                },
                {
                    id: 6,
                    url: "/images/research/gallery-6.jpg",
                    alternativeText: "GE Healthcare Institute Advanced Healthcare Simulation Lab",
                },
            ],
        },
    },
    {
        slug: "autodesk",
        hero: makeHero(27, "Autodesk: Design & Innovation Centre", "autodesk"),
        detail: {
            heading: "Autodesk: Design & Innovation Centre",
            description: blocks(
                "Centre will focus on providing training to the students & faculty members in the Virtual Design techniques. Replace this with the full Autodesk Design & Innovation Centre content.",
            ),
            media: {
                url: "/images/research/innovation-2.jpg",
                alternativeText: "Autodesk Design & Innovation Centre",
            },
        },
    },
    {
        slug: "vmware",
        hero: makeHero(28, "Vmware IT Academy", "vmware"),
        detail: {
            heading: "Vmware IT Academy",
            description: blocks(
                "VMware is a global leader in cloud infrastructure and business mobility. Replace this with the full Vmware IT Academy content.",
            ),
            media: {
                url: "/images/research/innovation-3.jpg",
                alternativeText: "Vmware IT Academy",
            },
        },

    },
    {
        slug: "bosch-rexroth",
        hero: makeHero(29, "BOSCH Rexroth: Automation Technologies", "bosch-rexroth"),
        detail: {
            heading: "BOSCH Rexroth: Automation Technologies",
            description: blocks(
                "The Centre will work as an independent Centre serving as Centre of competence and Skill development. Replace this with the full BOSCH Rexroth content.",
            ),
            media: {
                url: "/images/research/innovation-4.jpg",
                alternativeText: "BOSCH Rexroth Automation Technologies",
            },
        },
    },
    {
        slug: "ibm",
        hero: makeHero(30, "IBM Software for Emerging Technologies", "ibm"),
        detail: {
            heading: "IBM Software for Emerging Technologies",
            description: blocks(
                "IBM has collaborated with Dayananda Sagar University (DSU), to launch two Post graduate programs. Replace this with the full IBM content.",
            ),
            media: {
                url: "/images/research/innovation-5.jpg",
                alternativeText: "IBM Software for Emerging Technologies",
            },
        },
    },
    {
        slug: "nvidia",
        hero: makeHero(31, "NVIDIA: Boston Innovation Lab", "nvidia"),
        detail: {
            heading: "NVIDIA: Boston Innovation Lab",
            description: blocks(
                "Dayananda Sagar University is named as a GPU education center by NVIDIA, the AI computing company. Replace this with the full NVIDIA content.",
            ),
            media: {
                url: "/images/research/innovation-6.jpg",
                alternativeText: "NVIDIA Boston Innovation Lab",
            },
        },
    },
    {
        slug: "ge-healthcare",
        hero: makeHero(32, "GE Advanced Healthcare Lab", "ge-healthcare"),
        detail: {
            heading: "GE Advanced Healthcare Lab",
            description: blocks(
                "This Lab offers technical education for engineering graduates in Healthcare. Replace this with the full GE Advanced Healthcare Lab content.",
            ),
            media: {
                url: "/images/research/innovation-7.jpg",
                alternativeText: "GE Advanced Healthcare Lab",
            },
        },
    },
    {
        slug: "dassault",
        hero: makeHero(33, "Dassault Systems - AE Lab", "dassault"),
        detail: {
            heading: "Dassault Systems - AE Lab",
            description: blocks(
                "DSU has established a Centre of Excellence (COE) in Aerospace Engineering with M/s. Dassault Systems. Replace this with the full Dassault Systems AE Lab content.",
            ),
            media: {
                url: "/images/research/innovation-8.jpg",
                alternativeText: "Dassault Systems AE Lab",
            },
        },

    },
];

export function generateStaticParams() {
    return local_data.map((item) => ({ slug: item.slug }));
}

export default async function Page({ params }) {
    const { slug } = await params;
    const page = local_data.find((item) => item.slug === slug);
    if (!page) notFound();

    return (
        <>
            <InnerHero data={page.hero} />
            <InnovationDetail data={page.detail} />
            <InnovationContent data={page.content} />
            <InnovationCourses data={page.courses} />
            <InnovationObjectives data={page.objectives} />
            <InnovationGallery data={page.gallery} />
        </>
    );
}