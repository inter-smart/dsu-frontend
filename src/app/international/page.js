 
import InternationalHero from "@/components/sections/international/InternationalHero";
import TopMenu from "@/components/sections/international/TopMenu";
import AwardsSlider from "@/components/sections/international/AwardsSlider";
import CoursesOffered from "@/components/sections/international/CoursesOffered";
import InnovationCenters from "@/components/sections/international/InnovationCenters";
import InstructionsAccordion from "@/components/sections/international/InstructionsAccordion";
import Gallery from "@/components/sections/international/Gallery";
import AdmissionProcess from "@/components/sections/international/AdmissionProcess";
import InternationalBanner from "@/components/sections/international/InternationalBanner";

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
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "History page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/history/Banner.jpg",
        },
        title: "History",
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
                label: "About DSU",
                href: "/why-dsu/about-dsu",
            },
            {
                label: "History",
                href: "/why-dsu/about-dsu/history",
            },
        ],
    },

    topMenu: [
        { id: 1, label: "About Us", href: "#about-us" },
        { id: 2, label: "Awards", href: "#awards" },
        { id: 3, label: "Courses Offered", href: "#courses" },
        { id: 4, label: "Innovation Centres", href: "#innovation-centres" },
        { id: 5, label: "Gallery", href: "#gallery" },
        { id: 6, label: "Admission Process", href: "#admission-process" },
    ],

    internationalHero: {
        id: 40,
        title: "Perfect for International Students Seeking a World-Class Education in Bangalore (On Campus)",
        description:
            "Experience the pinnacle of academic excellence at our multidisciplinary and interdisciplinary university, where innovation flourishes and students are inspired to grow, excel, invent, and innovate. Our vibrant community, comprising over 50,000 alumni, coupled with on-campus hostel facilities and a focus on interactive learning, creates a dynamic environment for personal and professional development. Our state-of-the-art infrastructure supports cutting-edge research and technology, offering unparalleled opportunities for students to engage in groundbreaking discoveries. Recognized as a premier institution for placements and internships, we provide a world-class education in a global setting, shaping the leaders of tomorrow.",
        button: { label: "Apply Now", href: "/admissions/apply" },
        image: {
            alternativeText: "International students talking on campus",
            url: "/images/internation-1.jpg",
        },
        badge: {
            logo: { alternativeText: "NAAC A+ Grade", url: "/images/naac1.png" },
            text: "India's AI-First University",
        },
        announcements: [
            { id: 1, text: "Applications Open for Academic Year 2026–27", highlight: "" },
            { id: 2, text: "Last Date to Submit Online Applications:", highlight: "30 June 2026" },
            { id: 3, text: "Merit List Publication:", highlight: "10 July 2026" },
            { id: 4, text: "Counseling & Seat Allotment Begins:", highlight: "15 July 2026" },
        ],
    },

    awardsSlider: {
        id: 50,
        title: "Awards",
        items: [
            {
                id: 1,
                image: {
                    alternativeText: "KSURF Teaching Excellence and Research Excellence",
                    url: "/images/award-1.png",
                },
            },
            {
                id: 2,
                image: {
                    alternativeText: "Educational Excellence Awards & Conference 2021",
                    url: "/images/award-2.png",
                },
            },
            {
                id: 3,
                image: {
                    alternativeText: "Emerging Engineering Institute Rank No. 1 by Times of India 2022",
                    url: "/images/award-3.png",
                },
            },
            {
                id: 4,
                image: {
                    alternativeText: "Times Business Awards Best Emerging University 2021",
                    url: "/images/award-4.png",
                },
            },
            {
                id: 5,
                image: {
                    alternativeText: "Silicon India B School Survey 2021 Ranked A+++",
                    url: "/images/award-5.png",
                },
            },
            {
                id: 6,
                image: {
                    alternativeText: "IIRF 2023 National Rank 10",
                    url: "/images/award-6.png",
                },
            },
            {
                id: 7,
                image: {
                    alternativeText: "Careers360 AAA Ranking 2021",
                    url: "/images/award-7.png",
                },
            },
        ],
    },
    coursesOffered: {
        id: 60,
        title: "Courses Offered",
        subtitle: "Have questions about admissions? Our support team is here to guide you through every step.",
        sections: [
            {
                id: 1,
                title: "School of Engineering",
                groups: [
                    {
                        id: 1,
                        title: "Undergraduate Program",
                        tag: "UG Programs",
                        courses: [
                            {
                                id: 1,
                                title: "B.Tech Computer Science & Engineering",
                                href: "#!"
                            },
                            {
                                id: 2,
                                title: "B.Tech Computer Science & Engineering (Data Science)",
                                href: "#!"
                            },
                            {
                                id: 3,
                                title: "B.Tech Computer Science & Engineering (Cyber Security)",
                                href: "#!"
                            },
                            {
                                id: 4,
                                title: "B.Tech Computer Science & Engineering (Artificial Intelligence and Machine Learning)",
                                href: "#!"
                            },
                            {
                                id: 5,
                                title: "B.Tech Robotics & AI",
                                href: "#!"
                            },
                            {
                                id: 6,
                                title: "B.Tech Electronics & Communication Engineering",
                                href: "#!"
                            },
                            {
                                id: 7,
                                title: "B.Tech Mechanical Engineering",
                                href: "#!"
                            },
                            {
                                id: 8,
                                title: "B.Tech Computer Science & Technology",
                                href: "#!"
                            },
                            {
                                id: 9,
                                title: "B.Tech Aerospace Engineering",
                                href: "#!"
                            },
                            {
                                id: 10,
                                title: "B.Tech Mechatronics",
                                href: "#!"
                            },
                            {
                                id: 11,
                                title: "B.Tech CSE (Data Analytics)",
                                href: "#!"
                            },
                            {
                                id: 12,
                                title: "B.Tech Civil Engineering",
                                href: "#!"
                            },
                            {
                                id: 13,
                                title: "B.Tech Pharmaceutical Manufacturing Technologies",
                                href: "#!"
                            },
                            {
                                id: 14,
                                title: "B.Tech CSE (Computer Engineering and IT Infrastructure)",
                                href: "#!"
                            },
                            {
                                id: 15,
                                title: "BCA - Bachelor of Computer Applications",
                                href: "#!"
                            },
                            {
                                id: 16,
                                title: "B.Tech - Computer Science & Engineering (AI & Data Science)",
                                href: "#!"
                            },
                            {
                                id: 17,
                                title: "B.Tech - Computer Science & Engineering and Medical Engineering",
                                href: "#!"
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "PG Programs",
                        tag: "PG Programs",
                        courses: [
                            {
                                id: 1,
                                title: "M.Tech - Computer Science & Engineering",
                                href: "#!"
                            },
                            {
                                id: 2,
                                title: "M.Tech - Embedded Systems",
                                href: "#!"
                            },
                            {
                                id: 3,
                                title: "M.Tech - Design Engineering",
                                href: "#!"
                            },
                            {
                                id: 4,
                                title: "MCA - Master of Computer Applications",
                                href: "#!"
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: "School of Law",
                groups: []
            },
            {
                id: 3,
                title: "School of Basic and Applied Sciences",
                groups: []
            },
            {
                id: 4,
                title: "School of Commerce and Management",
                groups: []
            },
            {
                id: 5,
                title: "College Of Allied Health Sciences",
                groups: []
            },
            {
                id: 6,
                title: "College of Pharmaceutical Sciences",
                groups: []
            },
            {
                id: 7,
                title: "College of Nursing Sciences",
                groups: []
            },
            {
                id: 8,
                title: "College of Physiotherapy",
                groups: []
            },
            {
                id: 9,
                title: "School of Arts, Design and Humanities",
                groups: []
            },
            {
                id: 10,
                title: "School of Medicine",
                groups: []
            },
            {
                id: 11,
                title: "Faculty of Engineering",
                groups: []
            },
            {
                id: 12,
                title: "Faculty of Health Sciences (College of Pharmaceutical Sciences)",
                groups: []
            },
            {
                id: 13,
                title: "Faculty of School of Law",
                groups: []
            },
            {
                id: 14,
                title: "Faculty of School of Arts, Design and Humanities",
                groups: []
            },
            {
                id: 15,
                title: "School of Computer Applications",
                groups: []
            },
            {
                id: 16,
                title: "School of Medical Education and Research",
                groups: []
            },
            {
                id: 17,
                title: "School of Design and Digital Trans Media",
                groups: []
            },
            {
                id: 18,
                title: "Faculty of Health Sciences (College of Physiotherapy)",
                groups: []
            },
            {
                id: 19,
                title: "Faculty of Health Sciences (College of Nursing Sciences)",
                groups: []
            },
            {
                id: 20,
                title: "Faculty of Journalism and Mass Communication",
                groups: []
            },
            {
                id: 21,
                title: "Faculty of Technical Computer Applications",
                groups: []
            }
        ]
    },
    innovationCenters: {
        id: 70,
        title: "Innovation Centers",
        description:
            "Move the innovation-centre content out of a long list and turn it into visual cards. Each card can open a dedicated centre page, project story or external link.",
        cards: [
            {
                id: 1,
                title: "AI & Robotics",
                description: "Showcase technology, research, student projects and innovation activities.",
                href: "#!",
                image: {
                    alternativeText: "Human hand touching a robotic hand",
                    url: "/images/why-card-1.jpg",
                },
            },
            {
                id: 2,
                title: "Digital Innovation",
                description: "Highlight computing, emerging technology & digital transformation initiatives.",
                href: "#!",
                image: {
                    alternativeText: "Student using a VR headset",
                    url: "/images/why-card-2.jpg",
                },
            },
            {
                id: 3,
                title: "Industry Collaboration",
                description: "Connect international applicants to practical learning and industry engagement.",
                href: "#!",
                image: {
                    alternativeText: "Students working together on a project",
                    url: "/images/why-card-3.jpg",
                },
            },
            {
                id: 4,
                title: "Research Centres",
                description: "Present multidisciplinary research areas and opportunities for collaboration.",
                href: "#!",
                image: {
                    alternativeText: "Student working in a research laboratory",
                    url: "/images/why-card-4.jpg",
                },
            },
            {
                id: 5,
                title: "Blockchain Applications",
                description: "Discuss various uses of blockchain in finance, supply chain, and data security.",
                href: "#!",
                image: {
                    alternativeText: "IBM logo on a dark wall",
                    url: "/images/why-card-5.jpg",
                },
            },
        ],
    },
    instructions: {
        id: 80,
        title: "Important Instructions",
        defaultOpen: "application-sections",
        items: [
            {
                id: "eligibility",
                title: "Eligibility",
                content: "Check the eligibility criteria for your chosen programme before you apply.",
            },
            {
                id: "application-sections",
                title: "Application Sections",
                content:
                    "The form has multiple sections designed to understand the applicant comprehensively. Please fill out each section carefully and thoughtfully.",
            },
            {
                id: "contact-information",
                title: "Contact Information",
                content: "Provide a valid email address and mobile number. All updates are sent to these contacts.",
            },
            {
                id: "accurate-details",
                title: "Accurate Details",
                content: "Enter details exactly as they appear in your academic and identity documents.",
            },
            {
                id: "registration-fee",
                title: "Registration Fee",
                content: "A non-refundable registration fee is required to complete your application.",
            },
            {
                id: "mandatory-documents",
                title: "Mandatory Documents",
                content: "Keep scanned copies of all mandatory documents ready before you start the form.",
            },
            {
                id: "required-documents",
                title: "Required Documents For Admission",
                content: "Original documents must be presented for verification at the time of admission.",
            },
            {
                id: "fee-payment-options",
                title: "Fee Payment Options",
                content: "Fees can be paid online by card, net banking or UPI, or offline by demand draft.",
            },
            {
                id: "welcome",
                title: "Welcome",
                content: "Welcome to the university. Our admissions team is here to help at every step.",
            },
        ],
    },
    gallery: {
        id: 70,
        title: "Gallery",
        items: [
            { id: 1, type: "image", thumbnail: "/images/gallery-1.jpg", src: "/images/gallery-1.jpg", caption: "Campus night aerial view" },
            { id: 2, type: "image", thumbnail: "/images/gallery-2.jpg", src: "/images/gallery-2.jpg", caption: "Central courtyard" },
            { id: 3, type: "image", thumbnail: "/images/gallery-3.jpg", src: "/images/gallery-3.jpg", caption: "Main academic building" },
            { id: 4, type: "video", thumbnail: "/images/gallery-4.jpg", src: "/videos/campus-top-view.mp4", caption: "Campus top view" },
            { id: 5, type: "image", thumbnail: "/images/gallery-5.jpg", src: "/images/gallery-4.jpg", caption: "Students on campus" },
            { id: 6, type: "image", thumbnail: "/images/gallery-6.jpg", src: "/images/gallery-5.jpg", caption: "Campus at dusk" },
            { id: 7, type: "video", thumbnail: "/images/gallery-4.jpg", src: "/videos/campus-top-view.mp4", caption: "Campus top view" },
            { id: 7, type: "image", thumbnail: "/images/gallery-5.jpg", src: "/images/gallery-6.jpg", caption: "Students on campus" },
            { id: 8, type: "image", thumbnail: "/images/gallery-6.jpg", src: "/images/gallery-7jpg", caption: "Campus at dusk" },
            { id: 9, type: "image", thumbnail: "/images/gallery-6.jpg", src: "/images/gallery-8.jpg", caption: "Campus at dusk" },
            { id: 10, type: "image", thumbnail: "/images/gallery-6.jpg", src: "/images/gallery-9.jpg", caption: "Campus at dusk" },
            // add more items here. Each new swipe shows the next column
        ],
    },
    admissionProcess: {
        id: 80,
        title: "Admission Process",
        subtitle: "Our admission process is designed to make your application simple and convenient.",
        button: { label: "Start Your Applications", href: "/admissions/apply" },
        steps: [
            {
                id: 1,
                title: "Registration",
                description: "Sign up and pay $25 Registration",
            },
            {
                id: 2,
                title: "Online Application Form",
                description: "Fill in the details, pay the programme fee and upload relevant documents",
            },
            {
                id: 3,
                title: "Document Verification",
                description: "Sit back and wait for the approval",
            },
            {
                id: 4,
                title: "Student Registration & LMS Activation",
                description: "Get your LMS credentials over the email",
            },
        ],
    },
    internationalBanner: {
        id: 90,
        image: {
            alternativeText: "Graduates celebrating on campus",
            url: "/images/internationl-banner.jpg",
        },
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "International Admission", href: "/international" },
        ],
        subtitle: "International Admission",
        title: "Empowering Students with Knowledge, Discovery & Healing",
        button: { label: "Admissions Open 2026–27", href: "/admissions/apply" },
        scholarship: {
            icon: { alternativeText: "Scholarship", url: "/images/scholar.svg" },
            title: "Scholarship Up-to 40%",
            note: "*For Eligible Students",
        },
    },

    enquiryForm: {
        id: 91,
        title: "Enquire Now for More",
        consent:
            "I authorize Dayananda Sagar University & its representative to contact me with updates/notification via emails,sms,whatsapp, & call. This will override the registry on DND/NDNC.",
        submitLabel: "Submit",
        countryCodes: ["+91", "+1", "+44", "+61", "+971", "+977", "+880", "+94"],
        countries: ["India", "Nepal", "Bangladesh", "Sri Lanka", "United Arab Emirates", "Nigeria", "Other"],
        schools: ["School of Engineering", "School of Basic and Applied Sciences", "School of Commerce and Management", "College of Allied Health Sciences"],
        programs: ["Undergraduate", "Postgraduate", "Doctoral"],
        courses: ["B.Tech Computer Science & Engineering", "B.Tech Robotics & AI", "BBA", "M.Tech Data Science"],
        // Webhook or API route that receives the form
        action: "/api/enquiry",
    },
};

export default function Page() {
    return (
        <>
            <InternationalBanner data={local_data.internationalBanner} formData={local_data.enquiryForm}/>
            <TopMenu data={local_data.topMenu} />
            <InternationalHero data={local_data.internationalHero} />
            <AwardsSlider data={local_data.awardsSlider} />
            <CoursesOffered data={local_data.coursesOffered} />
            <InnovationCenters data={local_data.innovationCenters} />
            <InstructionsAccordion data={local_data.instructions} />
            <Gallery data={local_data.gallery} />
            <AdmissionProcess data={local_data.admissionProcess} />
        </>
    );
}