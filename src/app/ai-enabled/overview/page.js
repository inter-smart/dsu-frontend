import InnerHero from "@/components/layout/common/InnerHero";
import AcademicOverview from "@/components/sections/academics/academic-overview";
import AcademicContact from "@/components/sections/academics/academic-contact";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
import AiVisionMission from "@/components/sections/ai-enabled/Ai-vision-mission";
import AiHighlights from "@/components/sections/ai-enabled/Ai-highlights";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Overview page title",
        metaDescription: "Overview page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Overview page title",
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
                label: "Overview",
                href: "/",
            },
        ],
        AimenuBar: true
    },
    programOverviewSection: {
        eyebrow: "OVERVIEW",
        heading: "About College of Nursing Sciences",
        intro: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The College of Nursing Sciences, with a legacy of 23 years, operates under the aegis of the Dayananda Sagar University, a State Private University. It is accredited by the Indian Nursing Council and approved by the Karnataka State Nursing Council. We offer Undergraduate, Postgraduate and Doctoral programs. The undergraduate program equips students with theoretical knowledge and clinical experience, utilizing modern teaching and learning methodologies to prepare them as competent nurses. The postgraduate program focuses on developing advanced clinical skills, fostering confidence to thrive in challenging environments, and enabling graduates to work independently as advanced nurse practitioners and researchers. ",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The doctoral program prepares postgraduate nurses for careers in nursing education, research, administrative leadership, and private nursing practice. At Dayananda Sagar University, nursing courses are designed to impart the knowledge, skills, and attitudes necessary for delivering high-quality, complex patient care. With a commitment to education, practice, research, innovation, and collaboration, the institution strives to train nurses to meet international standards as efficient and safe practitioners in the healthcare field.",
                    },
                ],
            },
        ],
        media: [
            {
                alternativeText: "Students collaborating in a modern computer lab with laptops",
                mime: "image/jpg",
                // if video - mime: "video/mp4",
                url: "/images/overview-img.jpg",
            },
        ],
        nursingBannerSection: {

            description: [
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "Nursing course at Dayananda Sagar University will equip the graduate nurse with the knowledge, skills and attitude to deliver high quality complex essential care to patients.",
                        },
                    ],
                },
            ],
            badge: {
                label: "INC Recognition",
                link: "/",
                icon: {
                    alternativeText: "INC recognition medal icon",
                    mime: "image/svg+xml",
                    url: "/images/badge.png",
                },
            },
        },

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
    missionVisionSection: {
        cards: [
            {
                id: 1,
                icon: {
                    alternativeText: "Mission flag icon",
                    mime: "image/svg+xml",
                    url: "/images/mission.svg",
                },
                title: "Mission",
                items: [
                    { label: "To inspire students to become professionals who would strengthen and advance health of individuals and communities worldwide." },
                    { label: "To offer interactive education within an environment that enhances integrity, creativity, innovation and scholarly pursuits." },
                    { label: "To enhance academic standards through use of latest pedagogy of training methodology by proficient faculty." },
                    { label: "To promote lifelong learning through innovation and scholarly engagement." },
                ],
            },
            {
                id: 2,
                icon: {
                    alternativeText: "Vision target icon",
                    mime: "image/svg+xml",
                    url: "/images/vision.svg",
                },
                title: "Vision",
                description: "College of Nursing Sciences of Dayananda Sagar University, Bangalore has a vision to be a center of excellence in nursing education supporting interdisciplinary teaching, research and innovation to create human resource of exceptional quality to serve global health care needs.",
            },
        ],
    },
    departmentHighlightsSection: {
        heading: "Highlights of the Department",
        items: [
            { label: "State-of the art infra-structure with modern amenities for training." },
            { label: "Special training in English and foreign languages." },
            { label: "Innovative teaching learning methods for curriculum delivery." },
            { label: "Clinical Facilities with Parent Hospital, CDSIMER for clinical training." },
            { label: "Affiliation to Government hospitals like Victoria Hospital, Vanivilas Hospital, Kidwai Cancer Institute, Indira Gandhi Institute of Child Health and NIMHANS." },
            { label: "Experienced faculty to implement systematic and well-designed teaching learning sessions and clinical training." },
            { label: "MOU with our partner institutions in Malaysia." },
            { label: "Placements to various hospitals are facilitated." },
        ],
    },
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiAcademicMenubar className="md:!hidden block" />
            <AcademicOverview data={local_data.programOverviewSection} />
            <AiVisionMission data={local_data.missionVisionSection} />
            <AiHighlights data={local_data.departmentHighlightsSection} />
            <AcademicContact data={local_data.contact} />

        </>
    )
}

