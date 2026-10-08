import InnerHero from "@/components/layout/common/InnerHero";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import Recruiters from "@/components/sections/placements/recruiters";
import IndustryPartnerships from "@/components/sections/placements/industry-partnerships";
import IndustryEngagement from "@/components/sections/placements/industry-engagement";
import RecruiterTestimonials from "@/components/sections/placements/recruiter-testimonials";
import RecruitmentGallery from "@/components/sections/placements/recruitment-gallery";

const IMG = "/images/recruiters-industry";

const recruiterNames = [
    "Infosys", "Wipro", "NVIDIA", "Accenture", "Zoho", "Tata Consultancy Services",
    "EY", "NatWest Group", "KPMG", "Amazon", "Unilever", "UST",
    "TVS", "Dell", "Cognizant", "TCL", "IKEA", "Bosch",
];

const local_data = {
    seo: {
        metaTitle: "Recruiters & Industry | Placements | DSU",
        metaDescription: "Esteemed recruiters, industry partnerships, engagements and recruiter testimonials at Dayananda Sagar University.",
        canonicalUrl: null,
    },
    hero: {
        heroMedia: {
            alternativeText: "Dayananda Sagar University campus",
            mime: "image/jpg",
            url: "/images/academic-banner.jpg",
        },
        title: "Placements",
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Placements", href: "/placement" },
            { label: "Recruiters & Industry", href: "/placement/recruiters-industry" },
        ],
        PlacementmenuBar: true,
    },
    recruitersSection: {
        heading: "Esteemed Recruiters",
        filter: {
            placeholder: "All Schools",
            options: [{ id: 1, label: "All Schools", value: "all" }],
        },
        recruiters: recruiterNames.map((name, i) => ({
            id: i + 1,
            name,
            logo: { alternativeText: `${name} logo`, mime: "image/png", url: `/images/recruit-${i + 1}.png` },
        })),
        loadMore: { label: "Load More >>", initialCount: 18 },
    },
    partnershipsSection: {
        eyebrow: "Industry Partnerships",
        title: "Building Stronger Industry Partnerships",
        description: [
            {
                type: "paragraph",
                children: [{ type: "text", text: "DSU is dedicated to fostering strong partnerships with top organizations, aiming to bridge the gap between academic education and real-world industry experiences. This collaboration encompasses a diverse array of initiatives, including comprehensive training programs, groundbreaking research projects, innovative creative endeavors, valuable internships, and hands-on projects that immerse students in practical scenarios." }],
            },
            {
                type: "paragraph",
                children: [{ type: "text", text: "These efforts are meticulously crafted to open up a wealth of career opportunities for students. By seamlessly integrating theoretical knowledge with practical skills, DSU empowers students to develop the expertise and self-assurance necessary to excel in their chosen professions, ensuring they are well-prepared to navigate the challenges of the modern workforce." }],
            },
        ],
        features: [
            { id: 1, title: "Industry Training", description: "Skill development through industry-led programmes", icon: { url: `${IMG}/icon-industry-training.png` } },
            { id: 2, title: "Research & Innovation", description: "Joint research, labs and innovation initiatives", icon: { url: `${IMG}/icon-research-innovation.png` } },
            { id: 3, title: "Live Projects", description: "Real-world industry challenges", icon: { url: `${IMG}/icon-live-projects.png` } },
            { id: 4, title: "Internships", description: "Industry exposure and mentorship", icon: { url: `${IMG}/icon-internships.png` } },
            { id: 5, title: "Curriculum Collaboration", description: "Industry input in curriculum design and delivery", icon: { url: `${IMG}/icon-curriculum.png` } },
            { id: 6, title: "Career Opportunities", description: "Placement and recruitment opportunities", icon: { url: `${IMG}/icon-career.png` } },
        ],
        schools: [
            { label: "All Schools", value: "all" },
            { label: "Engineering", value: "engineering" },
            { label: "Commerce & Management", value: "commerce-management" },
            { label: "Computer Applications", value: "computer-applications" },
            { label: "Basic & Applied Sciences", value: "basic-applied-sciences" },
            { label: "Health Sciences", value: "health-sciences" },
            { label: "Design", value: "design" },
            { label: "Law", value: "law" },
            { label: "Arts & Humanities", value: "arts-humanities" },
        ],
        emptyText: "No partnerships listed for this school yet.",
        partners: [
            {
                id: 1,
                name: "NVIDIA",
                school: "engineering",
                school_label: "School of Engineering",
                description: "Strategic collaboration for AI infrastructure, research and skill development, enabling students and faculty to work on cutting-edge technologies in artificial intelligence.",
                tags: ["Technology", "Research", "Skill Development"],
                image: { url: `${IMG}/partner-nvidia.jpg`, alternativeText: "NVIDIA headquarters building" },
                logo: { url: "/images/recruit-3.png", alternativeText: "NVIDIA logo" },
            },
            {
                id: 2,
                name: "Quest Global",
                school: "engineering",
                school_label: "Aerospace Engineering",
                description: "Collaboration for joint programmes, engineering education, internships, campus hiring and research initiatives.",
                tags: ["Internship", "Research", "Joint Programmes"],
                image: { url: `${IMG}/partner-quest.jpg`, alternativeText: "Quest Global office building" },
                logo: { url: `${IMG}/logo-quest.png`, alternativeText: "Quest Global logo" },
            },
            {
                id: 3,
                name: "Bosch",
                school: "engineering",
                school_label: "Electronics & Communication Engineering",
                description: "Industry collaboration through Bosch ETAS Lab, industry-oriented projects, fellowships and research in automotive and embedded systems.",
                tags: ["Industry Lab", "Projects", "Research"],
                image: { url: `${IMG}/partner-bosch.jpg`, alternativeText: "Bosch office building" },
                logo: { url: "/images/recruit-18.png", alternativeText: "Bosch logo" },
            },
        ],
    },
    engagementSection: {
        title: "Industry Engagement",
        description: "Explore our engagements with industry through visits, expert interactions, workshops and more.",
        categories: [
            { label: "Industry Visits", value: "industry-visits" },
            { label: "Expert Talks", value: "expert-talks" },
            { label: "Workshops & Masterclasses", value: "workshops" },
            { label: "Leadership/CEO Interactions", value: "leadership" },
            { label: "Hackathons & Industry Challenges", value: "hackathons" },
        ],
        emptyText: "No engagements listed in this category yet.",
        items: [
            {
                id: 1,
                category: "industry-visits",
                date: "2025-03-12",
                displayDate: "12 Mar 2025",
                title: "Industrial Visit to TVS Motor Company",
                description: "MBA students gained insights into manufacturing operations, supply chain and industry best practices.",
                image: { url: `${IMG}/engagement-tvs.jpg`, alternativeText: "DSU students on the TVS Motor Company assembly floor" },
            },
            {
                id: 2,
                category: "industry-visits",
                date: "2025-03-12",
                displayDate: "12 Mar 2025",
                title: "Industry Visit to BEML Ltd.",
                description: "Students explored advanced manufacturing processes and engineering technologies.",
                image: { url: `${IMG}/engagement-beml.jpg`, alternativeText: "DSU students with an engineer at BEML Ltd." },
            },
            {
                id: 3,
                category: "industry-visits",
                date: "2025-03-12",
                displayDate: "12 Mar 2025",
                title: "Industrial Visit to IKEA",
                description: "An immersive learning experience on global retail operations, supply chain and customer experience.",
                image: { url: `${IMG}/engagement-ikea.jpg`, alternativeText: "DSU students with an IKEA staff member in the store" },
            },
        ],
    },
    testimonialsSection: {
        title: "Recruiter Testimonials",
        description: "Hear from our hiring partners about their experience with DSU students.",
        testimonials: [
            {
                id: 1,
                quote: "DSU students bring strong technical foundations, problem-solving skills and a genuine eagerness to learn. We value our continued association with the university.",
                name: "Talent Acquisition Team",
                company: "Infosys",
                logo: { url: "/images/recruit-1.png", alternativeText: "Infosys logo" },
            },
            {
                id: 2,
                quote: "Our collaboration with DSU has been very rewarding. The students demonstrate excellent domain knowledge and are quick to adapt to real-world challenges.",
                name: "HR Team",
                company: "BOSCH",
                logo: { url: "/images/recruit-18.png", alternativeText: "Bosch logo" },
            },
            {
                id: 3,
                quote: "DSU students are well-prepared, curious and demonstrate strong analytical and communication skills, making them valuable members of our teams.",
                name: "Campus Hiring Team",
                company: "KPMG",
                logo: { url: "/images/recruit-9.png", alternativeText: "KPMG logo" },
            },
        ],
    },
    gallerySection: {
        title: "Recruitment Gallery",
        description: "Hear from our hiring partners about their experience with DSU students.",
        images: [
            { id: 1, caption: "Recruitment Drive 2026", image: { url: `${IMG}/gallery-1.jpg`, alternativeText: "Students in discussion during the recruitment drive" } },
            { id: 2, caption: "Recruitment Drive 2026", image: { url: `${IMG}/gallery-3.jpg`, alternativeText: "Recruiter shaking hands with a candidate" } },
            { id: 3, caption: "Recruitment Drive 2026", image: { url: `${IMG}/gallery-2.jpg`, alternativeText: "Student at a computer during an assessment" } },
        ],
    },
};

export const metadata = {
    title: local_data.seo.metaTitle,
    description: local_data.seo.metaDescription,
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <PlacementmenuBar className="lg:!hidden block" />
            <Recruiters data={local_data.recruitersSection} />
            <IndustryPartnerships data={local_data.partnershipsSection} />
            <IndustryEngagement data={local_data.engagementSection} />
            <RecruiterTestimonials data={local_data.testimonialsSection} />
            <RecruitmentGallery data={local_data.gallerySection} />
        </>
    );
}
