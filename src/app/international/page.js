import InnerHero from "@/components/layout/common/InnerHero";
import InternationalHero from "@/components/sections/international/InternationalHero";
import TopMenu from "@/components/sections/international/TopMenu";
import AwardsSlider from "@/components/sections/international/AwardsSlider";

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
};

export default function Page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <TopMenu data={local_data.topMenu} />
            <InternationalHero data={local_data.internationalHero} />
            <AwardsSlider data={local_data.awardsSlider} />
        </>
    );
}