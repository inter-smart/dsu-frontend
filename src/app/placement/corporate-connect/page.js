import InnerHero from "@/components/layout/common/InnerHero"; 
import PlacementProcess from "@/components/sections/placements/placement-process";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar"; 
import CorporateConnect from "@/components/sections/placements/corporate-connect";
import CampusFacility from "@/components/sections/placements/campus-facility";
import PlacementTeam from "@/components/sections/placements/placement-team";
import RecruiteDsu from "@/components/sections/placements/recruteDsu";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Corporate Connect page title",
        metaDescription: "Corporate Connect page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Corporate Connect page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "Placements",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "Placement ",
                href: "/",
            },
            {
                label: "Corporate Connect ",
                href: "/",
            },
        ],
        PlacementmenuBar: true
    },
    programOverviewSection:
    {
        heading: "Why Recruit from DSU",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Dayananda Sagar University brings together academic learning, practical exposure and industry interaction to develop graduates who are prepared to contribute from day one.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our Training & Placement Cell works as a bridge between the university and industry, supporting employers throughout the recruitment journey — from identifying relevant talent and coordinating campus engagement to facilitating selection processes.",
                    },
                ],
            },
        ],
        list: [
            { id: 1, label: "Industry-ready students across diverse disciplines" },
            { id: 2, label: "Strong academic and practical foundation" },
            { id: 3, label: "Technical, aptitude and soft-skill preparation" },
            { id: 4, label: "Industry interaction and pre-placement engagement" },
            { id: 5, label: "Dedicated placement coordination" },
            { id: 6, label: "Access to students from multiple schools" },
            { id: 7, label: "Structured campus recruitment support" },
            { id: 8, label: "Opportunities for internships and projects" },
        ],
        media: {
            alternativeText: "Recruiters shaking hands during a campus recruitment interaction",
            mime: "image/jpg",
            url: "/images/corporate-connect.jpg",
        },
    },
    placementProcess: {
        heading: "A Simple, Structured Recruitment Process",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our placement team coordinates each stage with the organisation to make campus hiring efficient for recruiters and students.",
                    },
                ],
            },
        ],
        steps: [
            {
                id: 1,
                number: "01",
                title: "Connect With Us",
                description: "Share your hiring requirements, roles, eligibility and preferred recruitment timeline.",
            },
            {
                id: 2,
                number: "02",
                title: "Profile & Requirement",
                description: "Our team aligns the opportunity with relevant programmes and eligible student groups.",
            },
            {
                id: 3,
                number: "03",
                title: "Campus Selection",
                description: "Conduct tests, interviews, group discussions, presentations or other selection rounds.",
            },
            {
                id: 4,
                number: "04",
                title: "Offer & Onboarding",
                description: "Complete selection formalities and coordinate offer communication with successful candidates.",
            },
        ],
    },
    campusSection: {
        heading: "Campus Facilities for Recruitment",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "DSU provides the infrastructure required to conduct professional recruitment drives, assessments, interviews and industry engagement activities.",
                    },
                ],
            },
        ],
        facilities: [
            {
                id: 1,
                title: "Computer Labs",
                description: "Technology-enabled spaces for online assessments, coding tests and digital recruitment processes.",
            },
            {
                id: 2,
                title: "Seminar Halls & Auditorium",
                description: "Suitable for pre-placement talks, company presentations, orientation sessions and large recruitment events.",
            },
            {
                id: 3,
                title: "Wi-Fi Enabled Campus",
                description: "Connected campus infrastructure supporting digital interactions and online recruitment activities.",
            },
            {
                id: 4,
                title: "Classrooms & Interview Spaces",
                description: "Dedicated spaces for interviews, group discussions, presentations and one-to-one interactions.",
            },
            {
                id: 5,
                title: "Centre for Excellence",
                description: "Industry-oriented learning and training environments supporting professional development.",
            },
            {
                id: 6,
                title: "Industry Connect",
                description: "Infrastructure and academic ecosystem that facilitate meaningful corporate engagement.",
            },
        ],
        media: {
            alternativeText: "Classroom set up with chairs, tables and projector screen for recruitment activities",
            mime: "image/jpg",
            url: "/images/campus-facilities-recruitment.jpg",
            overlay: {
                heading: "Spaces Built for Industry Interaction",
                description: "Flexible learning, meeting and event spaces designed to support corporate engagement and campus recruitment",
            },
        },
    },
    placementTeam: {
        heading: "Meet the Placement Team",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "A dedicated team coordinates corporate relationships, recruitment requirements and campus hiring activities.",
                    },
                ],
            },
        ],
        team: [
            {
                id: 1,
                name: "M N Guruvenkatesh",
                designation: "Senior Vice President - ",
                post: "Placements & Skill Development",
                details: [
                    {
                        id: 1,
                        label: "E-Mail:",
                        values: [
                            { value: "gm-cr@dayanandasagar.edu", href: "mailto:gm-cr@dayanandasagar.edu" },
                            { value: "dsi_placement@yahoo.com", href: "mailto:dsi_placement@yahoo.com" },
                        ],
                    },
                    {
                        id: 2,
                        label: "Phone:",
                        values: [
                            { value: "+91 9844165956", href: "tel:+919844165956" },
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: "Vijay Kumar S",
                designation: "Director - ",
                post: "Training & Corporate Relations" ,
                details: [
                    {
                        id: 1,
                        label: "E-Mail:",
                        values: [
                            { value: "vijaykumar@dsu.edu.in", href: "mailto:vijaykumar@dsu.edu.in" },
                            { value: "placements@dsu.edu.in", href: "mailto:placements@dsu.edu.in" },
                        ],
                    },
                    {
                        id: 2,
                        label: "Phone:",
                        values: [
                            { value: "+91 9886394532", href: "tel:+919886394532" },
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: "Prof. Sanjay K",
                designation: "Director ( Corporate Relations & Placement ) Management Schools",
                details: [
                    {
                        id: 1,
                        label: "E-Mail:",
                        values: [
                            { value: "sanjay.k@dsu.edu.in", href: "mailto:sanjay.k@dsu.edu.in" },
                        ],
                    },
                    {
                        id: 2,
                        label: "Phone:",
                        values: [
                            { value: "+91 9880283123", href: "tel:+919880283123" },
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: "Prof. Darpana Singh",
                designation: "Manager - ",
                post: "Placement" ,
                details: [
                    {
                        id: 1,
                        label: "E-Mail:",
                        values: [
                            { value: "darpana@dsu.edu.in", href: "mailto:darpana@dsu.edu.in" },
                        ],
                    },
                    {
                        id: 2,
                        label: "Phone:",
                        values: [
                            { value: "+91 9845108664", href: "tel:+919845108664" },
                        ],
                    },
                ],
            },
        ],
    },
    recruiteSection: {
        leftCard: {
            title: "Recruit the Talent That Moves Your Organisation Forward.",
            description:
                "Tell us about your hiring requirements and our Training & Placement team will connect with you to plan the next steps.",
            whatsappLabel: "WhatsApp / Placement Enquiry",
            phone: "+91 98863 94532",
            image: "/images/recruiteDsu.jpg",
        },
        formCard: {
            title: "Recruit at DSU",
            description:
                "Share your organisation and hiring requirements with our placement team.",
            buttonText: "SUBMIT RECRUITMENT ENQUIRY",
        },
    },
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <PlacementmenuBar className="lg:!hidden block" />
            <CorporateConnect data={local_data.programOverviewSection} />
            <PlacementProcess data={local_data.placementProcess} variant="corporate" />
            <CampusFacility data={local_data.campusSection} />
            <PlacementTeam data={local_data.placementTeam} />
            <RecruiteDsu data={local_data.recruiteSection} />
        </>
    )
}
