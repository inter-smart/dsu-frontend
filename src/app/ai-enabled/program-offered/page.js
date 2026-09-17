import InnerHero from "@/components/layout/common/InnerHero";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
import AcademicContact from "@/components/sections/academics/academic-contact";
import AcademicProgram from "@/components/sections/academics/academic-program";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "College of Nursing Sciences page title",
        metaDescription: "College of Nursing Sciences ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Academic page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "College of Nursing Sciences",
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
                label: "School of Health Sciences",
                href: "/",
            },
            {
                label: "College of Nursing Sciences",
                href: "/",
            },
            {
                label: "Programs Offered",
                href: "/",
            },
        ],
        AimenuBar: true
    },

    computerApplicationsPrograms: {
        heading: "Programs Under College of Nursing Sciences",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The College of Nursing Sciences provides a variety of programs that blend academic rigor with hands-on experience, equipping students for successful careers in the rapidly evolving healthcare sector.",
                    },
                ],
            }
        ],
        categories: [
            {
                id: 1,
                badge: "UG",
                label: "Undergraduate",
                description: "The undergraduate nursing program is meticulously designed to equip students with the knowledge, skills, and competencies necessary to excel as qualified nurses in diverse healthcare settings. The curriculum emphasizes a balanced integration of theoretical foundations and practical clinical exposure to ensure a comprehensive learning experience. To achieve this, the program adopts innovative and modern teaching and learning methodologies that cater to different learning styles and professional requirements. These methodologies include interactive lectures, case-based learning, simulation labs, problem-solving exercises, and evidence-based practices. Students are also exposed to advanced technologies and tools used in the healthcare industry, fostering proficiency in handling real-world challenges. Clinical training is an integral component of the program, offering students hands-on experience in various healthcare environments, such as hospitals, community clinics, and specialty care centers. Under the guidance of experienced faculty and practitioners, students gain practical insights into patient care, medical procedures, and teamwork in high-pressure situations. Additionally, the program emphasizes the development of critical thinking, ethical practices, communication skills, and adaptability, enabling graduates to meet the dynamic demands of the nursing profession. By the end of the program, students are thoroughly prepared to provide safe, effective, and compassionate care, contributing meaningfully to the healthcare sector.",
                programs: [
                    {
                        id: 1,
                        title: "Basic B. Sc Nursing",
                        url: "/programs/bachelor-of-computer-applications",
                    },
                    {
                        id: 2,
                        title: "Post Basic B. Sc Nursing",
                        url: "/programs/bsc-in-data-science",
                    }, 
                ],
            },
            {
                id: 2,
                badge: "PG",
                label: "Postgraduate",
                description: "The Postgraduate Nursing program is designed to equip students with advanced clinical skills, fostering confidence to excel in challenging environments and enabling them to work independently as advanced nurse practitioners or nurse researchers. The program emphasizes a comprehensive approach to nursing education, ensuring that graduates are well-prepared for specialized roles in the healthcare sector. Throughout the course, students are trained to practice patient-centered nursing with compassion and respect, prioritizing the dignity and well-being of individuals under their care. The curriculum instills a strong sense of professionalism and integrity, preparing students to operate within established professional, ethical, and legal frameworks. This approach not only helps maintain high standards of healthcare but also encourages continuous improvement in practices. Graduates of the program will emerge with the knowledge, skills, and ethical grounding necessary to lead in diverse clinical and research settings.",
                programs: [
                    {
                        id: 1,
                        title: "Medical Surgical Nursing",
                        url: "/programs/master-of-computer-applications",
                    },
                    {
                        id: 2,
                        title: "Obstetrics and Gynecological Nursing",
                        url: "/programs/msc-in-data-science",
                    },
                    {
                        id: 3,
                        title: "Child Health Nursing",
                        url: "/programs/msc-in-cyber-history",
                    },
                    {
                        id: 4,
                        title: "Community Health Nursing",
                        url: "/programs/msc-in-cyber-history",
                    },
                    {
                        id: 5,
                        title: "Mental Health Nursing",
                        url: "/programs/msc-in-cyber-history",
                    },
                ],
            },
        ],
    },
    contact: {
        pageTitle: "Contact",
        formTitle: "Enquire Now for More",
        info: {
            title: "Start Your Journey With Us",
            description: "Take the next step toward a future-ready education supported by innovation, research, and industry collaboration.",
            address: "Gate 2, 6th Floor, University Building, Dental Block, Kumaraswamy Layout, Bengaluru - 560 111",
            mapUrl: "https://maps.google.com/?q=Dayananda+Sagar+University+Kumaraswamy+Layout+Bengaluru",
            email: "admissions@dsu.edu.in",
            helpline: "080 46461800 / 080 49092800",
            accreditations: "NAAC A+ Accredited  |  UGC Recognized",
        },
        courses: [
            "Bachelor of Computer Applications (BCA)",
            "Master of Computer Applications (MCA)",
            "B.Tech in Computer Science & Engineering",
            "B.Tech in AI & Machine Learning",
            "B.Tech in Data Science",
            "M.Tech in Computer Science",
            "Ph.D in Computer Applications",
        ],
        states: [
            "Karnataka",
            "Andhra Pradesh",
            "Delhi",
            "Gujarat",
            "Kerala",
            "Maharashtra",
            "Tamil Nadu",
            "Telangana",
            "Uttar Pradesh",
            "West Bengal",
            "Other",
        ],
    },


}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiAcademicMenubar className="md:!hidden block" />
            <AcademicProgram data={local_data.computerApplicationsPrograms} variant="aiprogram"/>
            <AcademicContact data={local_data.contact} />
        </>
    )
}

