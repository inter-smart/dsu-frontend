
import InternationalHero from "@/components/sections/international/InternationalHero";
import TopMenu from "@/components/sections/international/TopMenu";
import AwardsSlider from "@/components/sections/international/AwardsSlider";
import CoursesOffered from "@/components/sections/international/CoursesOffered";
import InnovationCenters from "@/components/sections/international/InnovationCenters";
import InstructionsAccordion from "@/components/sections/international/InstructionsAccordion";
import Gallery from "@/components/sections/international/Gallery";
import AdmissionProcess from "@/components/sections/international/AdmissionProcess";
import InternationalBanner from "@/components/sections/international/InternationalBanner";
import CtaBanner from "@/components/sections/international/CtaBanner";
import ContactDetails from "@/components/sections/international/ContactDetails";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "about page title",
        metaDescription: "about page description ",
        canonicalUrl: null,
    },

    internationalBanner: {
        id: 90,
        image: {
            alternativeText: "Graduates celebrating on campus",
            url: "/images/study-india.jpg",
        },
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Study in India", href: "/Study-in-India" },
        ],
        subtitle: "Study in India",
        title: "Study in India. Succeed Across the World.",
        button: { label: "Admissions Open 2026–27", href: "/admissions/apply" },
        studyLogo: {
            alternativeText: "Graduates celebrating on campus",
            url: "/images/study-logo.png",
        }
    },

    internationalHero: {
        id: 40,
        title: "Welcome International Students to Dayananda Sagar University",
        // Each item is one paragraph. A paragraph is a string, or an array where
        // { bold: "..." } marks the bold part.
        description: [
            "Dayananda Sagar University extends a warm invitation to international students to apply for our diverse undergraduate and postgraduate programs across multiple disciplines. At DSU, we seek students from around the world who demonstrate a commitment to academic excellence, creativity, and innovation.",
            [
                "In collaboration with the Government of India's Study in India initiative, DSU proudly offers a world-class education with the guiding philosophy of ",
                { bold: "“वसधु वै कुटुंबकम | Vasudhaiva Kutumbakam” “The world is one family.”" },
                " Our inclusive and vibrant community is a place where diverse perspectives meet, enriching each student’s learning experience.",
            ],
        ],
        button: {
            label: "For more information on e-student VISA, Click Here",
            href: "/e-student-visa",
            newTab: false,
        },
        image: {
            alternativeText: "Dayananda Sagar University campus at night",
            url: "/images/welcome-1.jpg",
        },
        badge: {
            logo: { alternativeText: "NAAC A+ Grade", url: "/images/naac1.png" },
            text: "India's AI-First University",
        },
        // announcements is optional now, so this section has none
    },

    coursesOffered: {
        id: 60,
        title: "Courses Offered",
        subtitle: "Have questions about admissions? Our support team is here to guide you through every step.",
        sections: [
            {
                id: 1,
                title: "School of Engineering",
                description: "Innovation-driven education for the tech-savvy world.",
                groups: [
                    {
                        id: 1,
                        title: "Undergraduate Program",
                        tag: "UG Programs",
                        courses: [
                            { id: 1, title: "B.Tech Computer Science & Engineering", href: "#!" },
                            { id: 2, title: "B.Tech Computer Science & Engineering (Data Sciences)", href: "#!" },
                            { id: 3, title: "B.Tech Computer Science & Engineering (Cyber Security)", href: "#!" },
                            { id: 4, title: "B.Tech Computer Science & Engineering (Artificial Intelligence and Machine Learning)", href: "#!" },
                            { id: 5, title: "B.Tech Robotics & AI", href: "#!" },
                            { id: 6, title: "B.Tech Electronics & Communication Engineering", href: "#!" },
                            { id: 7, title: "B.Tech Mechanical Engineering", href: "#!" },
                        ],
                    },
                ],
            },
            {
                id: 2,
                title: "School of Law",
                description: "Training tomorrow’s legal minds with a focus on justice and impact.",
                groups: [],
            },
            {
                id: 3,
                title: "School of Medicine",
                description: "Excellence in healthcare education and leadership.",
                groups: [
                    {
                        id: 1,
                        title: "Undergraduate Program",
                        tag: "UG Programs",
                        courses: [{ id: 1, title: "MBBS", href: "#!" }],
                    },
                ],
            },
            {
                id: 4,
                title: "School of Basic and Applied Science",
                description: "Practical approaches rooted in foundational sciences.",
                groups: [
                    {
                        id: 1,
                        title: "Undergraduate Program",
                        tag: "UG Programs",
                        courses: [{ id: 1, title: "B.Sc Physics", href: "#!" }],
                    },
                ],
            },
            {
                id: 5,
                title: "School of Health Sciences",
                description: "Equipping future leaders in global health and wellness.",
                groups: [
                    {
                        id: 1,
                        title: "Undergraduate Program",
                        tag: "UG Programs",
                        courses: [{ id: 1, title: "B.Sc Medical Laboratory Technology", href: "#!" }],
                    },
                ],
            },
            {
                id: 6,
                title: "School of Computer Applications",
                description: "Cutting-edge IT education for the digital age.",
                groups: [
                    {
                        id: 1,
                        title: "Undergraduate Program",
                        tag: "UG Programs",
                        courses: [{ id: 1, title: "BCA", href: "#!" }],
                    },
                ],
            },
            {
                id: 7,
                title: "School of Commerce and Management",
                description: "Shaping tomorrow’s business and industry leaders.",
                groups: [
                    {
                        id: 1,
                        title: "Undergraduate Program",
                        tag: "UG Programs",
                        courses: [{ id: 1, title: "BBA", href: "#!" }],
                    },
                ],
            },
            {
                id: 8,
                title: "School of Arts, Design, and Humanities",
                description: "Cultivating creativity, culture, and critical thinking.",
                groups: [
                    {
                        id: 1,
                        title: "Undergraduate Program",
                        tag: "UG Programs",
                        courses: [{ id: 1, title: "B.A. Journalism and Mass Communication", href: "#!" }],
                    },
                ],
            },
            {
                id: 9,
                title: "School of Design and Digital Trans-media",
                description: "Bringing creativity to reality.",
                groups: [
                    {
                        id: 1,
                        title: "Undergraduate Program",
                        tag: "UG Programs",
                        courses: [{ id: 1, title: "B.Des", href: "#!" }],
                    },
                ],
            },
        ],
    },
    ctaBanner: {
        id: 100,
        text: "Join us at DSU, where a transformative academic journey awaits, offering global perspectives and a community dedicated to learning, leadership, and creativity.",
        prompt: "Interested in learning more?",
        link: {
            label: "Click here for details and take your first step toward an impactful education at DSU.",
            href: "/admissions/apply",
        },
    },

    contactDetails: {
        id: 101,
        // \n marks the line break shown in the design
        title: "Contacts Details:\nInternational Admissions Office",
        image: {
            alternativeText: "Dayananda Sagar University campus aerial view",
            url: "/images/contact-1.jpg",
        },
        items: [
            {
                id: 1,
                icon: { alternativeText: "Email", url: "/images/email_icon.svg" },
                label: "E-Mail:",
                values: [
                    { text: "international-admissions@dsu.edu.in", href: "mailto:international-admissions@dsu.edu.in" },
                ],
            },
            {
                id: 2,
                icon: { alternativeText: "WhatsApp", url: "/images/phone-icon.svg" },
                label: "Whatsapp:",
                values: [
                    { text: "+91 9606022152", href: "https://wa.me/919606022152" },
                    { text: "+91 9606022149", href: "https://wa.me/919606022149" },
                ],
            },
        ],
    },

};

export default function Page() {
    return (
        <>
            <InternationalBanner data={local_data.internationalBanner} />
            <InternationalHero data={local_data.internationalHero} />
            <CoursesOffered data={local_data.coursesOffered} />
            <CtaBanner data={local_data.ctaBanner} />
            <ContactDetails data={local_data.contactDetails} />
        </>
    );
}