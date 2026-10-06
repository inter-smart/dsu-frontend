import InnerHero from "@/components/layout/common/InnerHero";
import AcademicAchievements from "@/components/sections/academics/academic-achievements";
import AcademicPartners from "@/components/sections/academics/academic-partners"; 
import AiAcademicCollaboration from "@/components/sections/ai-enabled/Ai-academic-collaboration"; 
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
import AiIndustryEngagement from "@/components/sections/ai-enabled/Ai-industry-enagement";
import AiPartnerwithus from "@/components/sections/ai-enabled/Ai-partnerwithus";
import AiRecentClinic from "@/components/sections/ai-enabled/Ai-recent-clinic";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Industry Connect page title",
        metaDescription: "Industry Connect page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Industry Connect page title",
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
                label: "Industry Connect",
                href: "/",
            },
        ],
        AimenuBar: true
    },
    achievementSection: {
        heading: "Industry Connect",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our nursing graduates are molded not only by their academic studies but also by their hands-on experiences in various clinical settings. By collaborating with government and affiliated hospitals, as well as simulation partners and international exchange programs, we ensure that our students receive comprehensive supervised clinical exposure. This approach allows them to engage with real patients, honing their skills and building the confidence necessary for safe and competent nursing practice in the ever-evolving healthcare landscape. ",
                    },
                ],
            },
        ],
        stats: [
            {
                id: 1,
                value: "6+",
                label: "Affiliated Government & Parent Hospitals",
            },
            {
                id: 2,
                value: "23+",
                label: "Years of Nursing Education Legacy",
            },
            {
                id: 3,
                value: "1+",
                label: "International MOU — Malaysia",
            },
            {
                id: 4,
                value: "700+",
                label: "Supervised Clinical Training Hours",
            },
        ],
    },
    partnersSection: {
        label: "Our Clinical & Healthcare Network",
        description: "We partner with leading hospitals, research institutes and simulation-technology providers to give every student structured, real-world clinical exposure.",
        partners: [
            {
                id: 1,
                name: "Infosys",
                logo: {
                    alternativeText: "Infosys logo",
                    mime: "image/svg+xml",
                    url: "/images/health-1.png",
                },
            },
            {
                id: 2,
                name: "Wipro",
                logo: {
                    alternativeText: "Wipro logo",
                    mime: "image/svg+xml",
                    url: "/images/health-2.png",
                },
            },
            {
                id: 3,
                name: "NVIDIA",
                logo: {
                    alternativeText: "NVIDIA logo",
                    mime: "image/svg+xml",
                    url: "/images/health-3.png",
                },
            },
            {
                id: 4,
                name: "Accenture",
                logo: {
                    alternativeText: "Accenture logo",
                    mime: "image/svg+xml",
                    url: "/images/health-4.png",
                },
            },
            {
                id: 5,
                name: "Zoho",
                logo: {
                    alternativeText: "Zoho logo",
                    mime: "image/svg+xml",
                    url: "/images/health-5.png",
                },
            },
            {
                id: 6,
                name: "TCS",
                logo: {
                    alternativeText: "Tata Consultancy Services logo",
                    mime: "image/svg+xml",
                    url: "/images/health-6.png",
                },
            },

        ],
    },

    keyCollaborationsSection: {
        heading: "Key Collaborations",
        description: "Strong clinical and academic partnerships that drive training quality, research, and international exposure.",
        collaborations: [
            {
                id: 1,
                badge: "Parent Hospital",
                image: {
                    alternativeText: "Dr. Chandramma Dayananda Sagar Institute of Medical Education & Research Centre building",
                    mime: "image/jpeg",
                    url: "/images/collab-1.jpg",
                },
                title: "Dr. Chandramma Dayananda Sagar Institute of Medical Education & Research Centre",
                description: "Our on-campus parent hospital gives students structured clinical postings across departments, from fundamentals of nursing to specialty care.",
            },
            {
                id: 2,
                badge: "Clinical Affiliation",
                image: {
                    alternativeText: "National Institute of Mental Health & Neurosciences building",
                    mime: "image/jpeg",
                    url: "/images/collab-2.jpg",
                },
                title: "National Institute of Mental Health & Neurosciences",
                description: "Affiliated clinical training in psychiatric and mental health nursing, exposing students to specialised neuroscience care settings.",
            },
            {
                id: 3,
                badge: "International MOU",
                image: {
                    alternativeText: "Hospital ward at Partner Institutions, Malaysia",
                    mime: "image/jpeg",
                    url: "/images/collab-3.jpg",
                },
                title: "Partner Institutions, Malaysia",
                description: "An institutional MOU that opens pathways for student exchange and international clinical placement, building global-standard practice.",
            },
        ],
    },
    industryEngagementSection: {
        heading: "Industry Engagement Initiatives",
        description: "Multiple avenues for students to train, engage and grow within real healthcare settings.",
        stats: [
            {
                id: 1,
                value: "65+",
                label: "Guest Lectures & CMEs",
            },
            {
                id: 2,
                value: "40+",
                label: "Hospital Clinical Postings",
            },
            {
                id: 3,
                value: "300+",
                label: "Supervised Practical",
            },
            {
                id: 4,
                value: "80+",
                label: "Skill Lab Simulations",
            },
            {
                id: 5,
                value: "70+",
                label: "Health Camps & Outreach",
            },
            {
                id: 6,
                value: "50+",
                label: "Preceptor Mentorships",
            },
        ],
    },
    recentClinicalEngagement: {
        heading: "Recent Clinical Engagements",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Snapshots of recent activities and interactions with our hospital and research partners.",
                    },
                ],
            },
        ],
        events: [
            {
                id: 1,
                path: "/images/engageclinic-1.jpg",
                title: "CME on Advanced Patient Care",
                description: "A continuing education session on evidence-based nursing practice and complex patient management.",
                date: "18th",
                year: "Mar 2026",
                partner: "CDSIMER",
                link: "#!",
            },
            {
                id: 2,
                path: "/images/engageclinic-1.jpg",
                title: "Community Health Screening Camp",
                description: "Students conducted community screening and health education alongside faculty and partner clinicians.",
                date: "18th",
                year: "Mar 2026",
                partner: "NIMHANS",
                link: "#!",
            },
            {
                id: 3,
                path: "/images/engageclinic-1.jpg",
                title: "Simulation-Based Skills Workshop",
                description: "Hands-on training using high-fidelity manikins to build clinical decision-making before real-patient exposure.",
                date: "18th",
                year: "Mar 2026",
                partner: "GE Healthcare Simulation Lab",
                link: "#!",
            },
        ],
    },
    partnerWithUsSection: {
        heading: "Partner With us",
        description: "We welcome organisations and professionals to collaborate with us in creating impactful learning experiences and building the future together",
        buttons: [
            {
                id: 1,
                label: "Partner With Us",
                type: "primary",
                link: "#!",
            },
            {
                id: 2,
                label: "Get in Touch",
                type: "secondary",
                link: "#!",
            },
        ],
    },

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiAcademicMenubar className="lg:!hidden block" />
            <AcademicAchievements data={local_data.achievementSection} variant="AiChapter" />
            <AcademicPartners data={local_data.partnersSection} varient="AiChapter" />
            <AiAcademicCollaboration data={local_data.keyCollaborationsSection} />
            <AiIndustryEngagement data={local_data.industryEngagementSection} />
            <AiRecentClinic data={local_data.recentClinicalEngagement} />
            <AiPartnerwithus data={local_data.partnerWithUsSection} />

        </>
    )
}

