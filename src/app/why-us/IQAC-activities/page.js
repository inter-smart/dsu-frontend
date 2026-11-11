import InnerHero from "@/components/layout/common/InnerHero";
import IQAC from "@/components/sections/why-us/IQAC";
import { getIqacPageBySlug } from "@/lib/api";

const local_data = {
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "IQAC Activities",
            mime: "image/jpg",
            url: "/images/ugc/ugc-banner.jpg",
        },
        title: "IQAC Activities",
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Why DSU", href: "/why-dsu" },
            { label: "Excellence & Quality Assurance", href: "/" },
            { label: "IQAC", href: "/why-us/IQAC" },
            { label: "IQAC Activities", href: "/why-us/IQAC-activities" },
        ],
    },
    iqacSection: {
        activities: {
            heading: "IQAC Activities",
            description: "The Internal Quality Assurance Cell (IQAC) organizes and supports a wide range of academic, research, and quality enhancement initiatives throughout the year. These activities, including workshops, seminars, faculty development programmes, conferences, and awareness sessions, foster continuous improvement, innovation, and excellence across the University.",
            items: [
                {
                    id: 1,
                    title: "Interaction Meeting on NAAC Criteria.",
                    poster: "/images/iqac-activity-1.jpg",
                    description: "Dayananda Sagar University In association with Board for IT Education Standards (BITES) cordially invites parents and DSU students to the Interaction Meeting on NAAC Criteria. Join us to interact with our eminent speakers Dr. K.N.B Murthy, Vice Chancellor, Dayananda Sagar University, Bangalore , Dr. B.V. Ravishankar, Principal, BMS College of Engineering (BMSCE) and Dr. Mangala Keshava, Associate Professor, Department of Civil Engineering BMS College of Engineering (BMSCE).",
                    date: "2026-11-24",
                    endDate: "2026-11-25",
                    startTime: "14:30:00.000",
                    endTime: "16:00:00.000",
                    readMoreUrl: "/why-us/IQAC-activities",
                    zoomUrl: "https://zoom.us",
                    youtubeUrl: "https://youtube.com",
                },
                {
                    id: 2,
                    title: '"NAAC- IQAC Seminar on "NAAC Pathway for Quality Assurance in Higher Educational Institutions (HEIs)".',
                    poster: "/images/iqac-activity-2.jpg",
                    description: 'Dayananda Sagar University invites parents and DSU students to the "NAAC- IQAC Seminar on "NAAC Pathway for Quality Assurance in Higher Educational Institutions (HEIs)". Join us to interact with our eminent speakers Dr. K.N.B Murthy, Vice Chancellor, Dayananda Sagar University, Bangalore, India., and Dr. Ganesh A. Hegde, Adviser- National Assessment and Accreditation Council (NAAC).',
                    date: "2020-10-21",
                    startTime: "15:00:00.000",
                    endTime: "16:00:00.000",
                    readMoreUrl: "/why-us/IQAC-activities",
                    zoomUrl: "https://zoom.us",
                    youtubeUrl: "https://youtube.com",
                },
                {
                    id: 3,
                    title: 'NAAC- IQAC Seminar on" Green/ Energy audit and its importance in energy management".',
                    poster: "/images/iqac-activity-3.jpg",
                    description: 'Dayananda Sagar University invites parents and DSU students to the "NAAC- IQAC Seminar on" Green/ Energy audit and its importance in energy management". Join us to interact with our eminent Guest speakers Mr. Ramesh Dharmaraj, Senior Fellow – Industrial Efficiency Group - TERI.',
                    date: "2020-10-21",
                    startTime: "15:00:00.000",
                    endTime: "16:00:00.000",
                    readMoreUrl: "/why-us/IQAC-activities",
                    zoomUrl: "https://zoom.us",
                    youtubeUrl: "https://youtube.com",
                },
            ],
        },
    },
};

export const revalidate = 60;

export default async function page() {
    // CMS entry (slug "IQAC-activities", template "IQAC-activities") when published, otherwise local_data
    const cms = await getIqacPageBySlug("IQAC-activities");
    const apiPage = cms?.template === "IQAC-activities" && cms.activitiesSection ? cms : null;

    return (
        <>
            <InnerHero data={apiPage?.hero || local_data.hero} className="leadership-detail-hero" />
            <IQAC data={apiPage?.activitiesSection || local_data.iqacSection} view="activities" />
        </>
    );
}

export const metadata = {
    title: "IQAC Activities | Why Us | Dayananda Sagar University",
    description: "Internal Quality Assurance Cell (IQAC) activities, seminars, workshops, and quality enhancement initiatives at Dayananda Sagar University.",
};
