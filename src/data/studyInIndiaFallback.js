// Shown on /study-in-india only while Strapi has no page for it (same shape as getStudyInIndiaPage)
const ugProgram = (id, titles) => ({
    id: "ug",
    title: "Undergraduate Program",
    shortLabel: "UG Programs",
    courses: titles.map((title, i) => ({ id: `${id}-${i + 1}`, title })),
});

export const studyInIndiaFallback = {
    title: "Study in India",
    seo: { metaTitle: "Study in India", metaDescription: null, canonicalUrl: null },
    banner: {
        image: { alternativeText: "Graduates celebrating on campus", url: "/images/study-india.jpg" },
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Study in India", href: "/study-in-india" },
        ],
        subtitle: "Study in India",
        title: "Study in India. Succeed Across the World.",
        button: { label: "Admissions Open 2026–27", href: "/admissions/apply" },
        studyLogo: { alternativeText: "Study in India", url: "/images/study-logo.png" },
    },
    hero: {
        title: "Welcome International Students to Dayananda Sagar University",
        description: [
            "Dayananda Sagar University extends a warm invitation to international students to apply for our diverse undergraduate and postgraduate programs across multiple disciplines. At DSU, we seek students from around the world who demonstrate a commitment to academic excellence, creativity, and innovation.",
            [
                "In collaboration with the Government of India's Study in India initiative, DSU proudly offers a world-class education with the guiding philosophy of ",
                { bold: "“वसधु वै कुटुंबकम | Vasudhaiva Kutumbakam” “The world is one family.”" },
                " Our inclusive and vibrant community is a place where diverse perspectives meet, enriching each student’s learning experience.",
            ],
        ],
        button: { label: "For more information on e-student VISA, Click Here", href: "/e-student-visa", newTab: false },
        image: { alternativeText: "Dayananda Sagar University campus at night", url: "/images/welcome-1.jpg" },
        badge: {
            logo: { alternativeText: "NAAC A+ Grade", url: "/images/naac1.png" },
            text: "India's AI-First University",
        },
        announcements: [],
    },
    courses: {
        title: "Courses Offered",
        subtitle: "Have questions about admissions? Our support team is here to guide you through every step.",
    },
    catalog: {
        schools: [
            {
                id: "1",
                number: "01",
                title: "School of Engineering",
                courseCount: 7,
                programs: [
                    ugProgram("1", [
                        "B.Tech Computer Science & Engineering",
                        "B.Tech Computer Science & Engineering (Data Sciences)",
                        "B.Tech Computer Science & Engineering (Cyber Security)",
                        "B.Tech Computer Science & Engineering (Artificial Intelligence and Machine Learning)",
                        "B.Tech Robotics & AI",
                        "B.Tech Electronics & Communication Engineering",
                        "B.Tech Mechanical Engineering",
                    ]),
                ],
            },
            { id: "3", number: "02", title: "School of Medicine", courseCount: 1, programs: [ugProgram("3", ["MBBS"])] },
            { id: "4", number: "03", title: "School of Basic and Applied Science", courseCount: 1, programs: [ugProgram("4", ["B.Sc Physics"])] },
            { id: "5", number: "04", title: "School of Health Sciences", courseCount: 1, programs: [ugProgram("5", ["B.Sc Medical Laboratory Technology"])] },
            { id: "6", number: "05", title: "School of Computer Applications", courseCount: 1, programs: [ugProgram("6", ["BCA"])] },
            { id: "7", number: "06", title: "School of Commerce and Management", courseCount: 1, programs: [ugProgram("7", ["BBA"])] },
            { id: "8", number: "07", title: "School of Arts, Design, and Humanities", courseCount: 1, programs: [ugProgram("8", ["B.A. Journalism and Mass Communication"])] },
            { id: "9", number: "08", title: "School of Design and Digital Trans-media", courseCount: 1, programs: [ugProgram("9", ["B.Des"])] },
        ],
    },
    ctaBanner: {
        text: "Join us at DSU, where a transformative academic journey awaits, offering global perspectives and a community dedicated to learning, leadership, and creativity.",
        prompt: "Interested in learning more?",
        link: {
            label: "Click here for details and take your first step toward an impactful education at DSU.",
            href: "/admissions/apply",
        },
    },
    contactDetails: {
        title: "Contacts Details:\nInternational Admissions Office",
        image: { alternativeText: "Dayananda Sagar University campus aerial view", url: "/images/contact-1.jpg" },
        items: [
            {
                id: 1,
                icon: { alternativeText: "Email", url: "/images/email_icon.svg" },
                label: "E-Mail:",
                values: [{ text: "international-admissions@dsu.edu.in", href: "mailto:international-admissions@dsu.edu.in" }],
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
