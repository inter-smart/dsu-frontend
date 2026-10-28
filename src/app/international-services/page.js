
import CampusLife from "@/components/sections/international/CampusLife";
import CtaSection from "@/components/sections/international/CtaSection";
import InternationalBanner from "@/components/sections/international/InternationalBanner";
import InternationalTeam from "@/components/sections/international/InternationalTeam";
import ServiceFaq from "@/components/sections/international/ServiceFaq";
import ServiceFeature from "@/components/sections/international/ServiceFeature";
import ServiceIntro from "@/components/sections/international/ServiceIntro";
import SupportServices from "@/components/sections/international/SupportServices";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "internationl page title",
        metaDescription: "internationl page description ",
        canonicalUrl: null,
    },


    internationalBanner: {
        id: 90,
        image: { alternativeText: "International students on campus", url: "/images/service-Banner.jpg" },
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "International Student Services", href: "/international-student-services" },
        ],
        subtitle: "International Student Services",
        title: "Supporting You at Every Step of Your DSU Journey",
        button: { label: "Apply Now", href: "/admissions/apply" },
    },

    studentServices: {
        intro: {
            title: "Supporting You at Every Step of Your DSU Journey",
            description:
                "At Dayananda Sagar University, we welcome students from across the world and are committed to making their transition to India, campus life, and academic journey smooth and comfortable. Our International Student Services team provides guidance and support from your arrival in India through your journey at DSU.",
        },

        features: [
            {
                id: 1,
                number: "01",
                tone: "blue",
                eyebrow: "Arrival & Orientation",
                title: "Begin Your Journey with Confidence",
                description:
                    "Moving to a new country is an exciting experience. Our team helps international students prepare for their arrival and settle into the DSU community.",
                listTitle: "Our Support Includes",
                items: [
                    "Pre-arrival guidance and essential information",
                    "Assistance with arrival and campus orientation",
                    "Guidance on university procedures and facilities",
                    "Introduction to academic and student support services",
                    "Campus familiarisation and orientation activities",
                    "Assistance in getting connected with the DSU community",
                ],
                media: {
                    type: "image",
                    thumbnail: "/images/arrival-1.jpg",
                    alt: "International students meeting a DSU staff member",
                },
            },
            {
                id: 2,
                number: "02",
                tone: "white",
                eyebrow: "Accommodation",
                title: "A Comfortable Place to Call Home",
                description:
                    "DSU offers a variety of accommodation options designed specifically for international students, ensuring they have a safe, comfortable, and convenient living experience on campus.",
                listTitle: "Students Can Receive Guidance Regarding:",
                items: [
                    "Hostel accommodation options",
                    "Room facilities and amenities",
                    "Dining and essential services",
                    "Accommodation procedures",
                    "Hostel rules and guidelines",
                    "Assistance with accommodation-related queries",
                ],
                media: {
                    type: "video",
                    thumbnail: "/videos/campus-2.mp4",
                    alt: "International students meeting a DSU staff member",
                },

            },
            {
                id: 3,
                number: "03",
                tone: "blue",
                eyebrow: "Visa Assistance",
                title: "Guidance for Your Journey to India",
                description:
                    "International students may require a student visa and other necessary documentation to study in India. Our team provides guidance to help students understand the relevant requirements and procedures.",
                listTitle: "Our Assistance Includes",
                items: [
                    "Student visa guidance",
                    "Documentation and application support",
                    "Guidance on university-related documentation",
                    "Assistance with visa-related queries",
                    "Guidance on arrival and applicable registration procedures",
                    "Students are advised to verify the latest visa and immigration requirements with the relevant Government of India authorities.",
                ],
                media: {
                    thumbnail: "/images/guidance.jpg",
                    alt: "Advisor helping a student with visa documents"
                },
            },
        ],

        campus: {
            number: "04",
            eyebrow: "Discover Our Campus",
            title: "Experience Life at DSU",
            description:
                "DSU is a vibrant campus where students learn, connect, and create experiences. Explore our modern facilities, learning spaces, and recreational areas.",
            button: { label: "Explore Campus", href: "/campus-life" },
            cards: [
                {
                    id: 1,
                    layout: "intro",
                    span: 2,
                    label: "Vibrant Campus Culture",
                    icon: "/images/campus-1.svg",
                    media: { type: "image", thumbnail: "/images/campus-1.jpg", alt: "Student on campus" },
                },
                {
                    id: 2,
                    layout: "media",
                    span: 1,
                    label: "Sports & Recreation",
                    icon: "/images/campus-2.svg",
                    media: { type: "video", thumbnail: "/videos/campus-2.mp4", src: "/videos/campus-2.mp4", alt: "Sports and recreation" },
                },
                {
                    id: 3,
                    layout: "media",
                    span: 1,
                    label: "Hostel & Residential",
                    icon: "/images/campus-3.svg",
                    media: { type: "image", thumbnail: "/images/campus-3.jpg", alt: "Hostel dining hall" },
                },
                {
                    id: 4,
                    layout: "media",
                    span: 2,
                    label: "Modern Infrastructure",
                    icon: "/images/campus-4.svg",
                    media: { type: "image", thumbnail: "/images/campus-4.jpg", lightbox: true, alt: "DSU campus buildings" },
                },
                {
                    id: 5,
                    layout: "stats",
                    span: 1,
                    text: "A future-ready campus designed to spark learning, creativity, and student well-being.",
                    stats: [
                        { value: "50+", label: "Clubs" },
                        { value: "10+", label: "Sports Facilities" },
                        { value: "5000+", label: "Residents" },
                        { value: "200+", label: "Annual Events" },
                    ],
                },
                {
                    id: 6,
                    layout: "media",
                    span: 1,
                    label: "Clubs & Student Activities",
                    icon: "/images/campus-5.svg",
                    media: { type: "image", thumbnail: "/images/campus-5.jpg", alt: "Students in a club activity" },
                },
            ],
        },

        support: {
            number: "05",
            tone: "blue",
            eyebrow: "Student Support Services",
            title: "We’re Here to Support You",
            description:
                "Our support services help international students adapt to a new academic and cultural environment and make the most of their time at DSU.",
            cards: [
                { id: 1, title: "Academic Support", description: "Guidance on academic processes, university systems and student requirements." },
                { id: 2, title: "Administrative Support", description: "Assistance with university procedures, documentation and related queries." },
                { id: 3, title: "Student Wellbeing", description: "Support to help students feel comfortable, connected and confident throughout their university journey." },
                { id: 4, title: "Campus & Community Support", description: "Opportunities to participate in student activities, clubs, events and the wider DSU community." },
            ],
        },

        team: {
            number: "06",
            eyebrow: "Connect with Our International Team",
            title: "We’re Here to Help",
            description:
                "Have questions about studying at DSU, admissions, visas, accommodation or campus life? Our International Team is here to assist you. Whether you are planning your journey to DSU or have already joined our campus, you can reach out to us for guidance and support.",
            card: {
                title: "International Admissions / International Student Services",
                text: "Speak with our International Team for guidance and support throughout your DSU journey.",
                button: { label: "Contact Us", href: "/contact" },
                contacts: [
                    { id: 1, label: "E-Mail:", value: "admissions@dsu.edu.in", href: "mailto:admissions@dsu.edu.in", icon: { url: "/images/email_icon.svg", alternativeText: "Email" } },
                    { id: 2, label: "Admissions Helpline:", value: "080 46461800 / 080 49092800", href: "tel:08046461800", icon: { url: "/images/phone-icon.svg", alternativeText: "Phone" } },
                ],
            },
        },

        faq: {
            number: "07",
            tone: "blue",
            eyebrow: "FAQ",
            title: "Frequently Asked Questions",
            description:
                "Have questions about studying at DSU, admissions, visas, accommodation or campus life? Our International Team is here to assist you. Whether you are planning your journey to DSU or have already joined our campus, you can reach out to us for guidance and support.",
            defaultOpenId: 2,
            items: [
                { id: 1, question: "How can international students apply to DSU?", answer: "International students can apply online through the DSU admissions portal. Our International Team will guide you through each step of the application." },
                { id: 2, question: "What documents are required for admission?", answer: "The required documents may vary depending on the programme and applicant category. Students will be guided on the documents required during the admission process." },
                { id: 3, question: "Does DSU provide accommodation for international students?", answer: "Yes. DSU offers hostel accommodation designed for international students, with guidance on room facilities, dining, procedures and hostel rules." },
                { id: 4, question: "Can DSU help with student visa-related queries?", answer: "Yes. Our team provides guidance on student visa requirements and documentation. Students should also verify the latest requirements with the relevant Government of India authorities." },
                { id: 5, question: "Is orientation provided for international students?", answer: "Yes. Students receive pre-arrival guidance, arrival assistance and campus orientation activities to help them settle in." },
                { id: 6, question: "Who can I contact for international student assistance?", answer: "You can reach the International Team at admissions@dsu.edu.in or on the admissions helpline, 080 46461800 / 080 49092800." },
                { id: 7, question: "Who can I contact if I have questions during the process?", answer: "Write to admissions@dsu.edu.in or call the International Admissions numbers listed on this page. We will respond as soon as possible." },
            ],
        },
    },
    ctaBanner: {
        id: 100,
        title: "Start Your Journey With Us",
        description:
            "Take the next step toward a future-ready education supported by innovation, research, and industry collaboration.",
        background: {
            alternativeText: "DSU campus courtyard",
            mime: "image/jpg",
            // if video - mime: "video/mp4", plus optional poster: "/images/cta-poster.jpg"
            url: "/images/cta-banner.jpg",
        },
        buttons: [
            {
                id: 1,
                label: "Apply Now",
                href: "/admissions/apply",
                variant: "light",
                icon: { alternativeText: "", url: "/images/dot-icon.svg" },
            },
            {
                id: 2,
                label: "Talk to an Advisor",
                href: "/contact",
                variant: "accent",
                icon: { alternativeText: "", url: "/images/chat_icon.svg" },
            },
            {
                id: 3,
                label: "Book a Campus Visit",
                href: "/campus-visit",
                variant: "outline",
                icon: { alternativeText: "", url: "/images/calender_icon.svg" },
            },
        ],
        badges: [
            { id: 1, text: "NAAC A+ Accredited", stars: 5 },
            { id: 2, text: "UGC Recognized", stars: 0 },
        ],
    },
};
const s = local_data.studentServices;
export default function Page() {
    return (
        <>
            <InternationalBanner data={local_data.internationalBanner} />
            <ServiceIntro data={s.intro} />
            {s.features.map((feature) => (
                <ServiceFeature key={feature.id} data={feature} />
            ))}
            <CampusLife data={s.campus} />
            <SupportServices data={s.support} />
            <InternationalTeam data={s.team} />
            <ServiceFaq data={s.faq} />
            <CtaSection data={local_data.ctaBanner} />

        </>
    );
}