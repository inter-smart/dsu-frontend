import InnerHero from "@/components/layout/common/InnerHero";
import AdmissionMenubar from "@/components/sections/admission/admissionMenubar";
import AdmissionProcess from "@/components/sections/admission/AdmissionProcess";
import AdmissionThrough from "@/components/sections/admission/AdmissionThrough";
import AdmissionDocument from "@/components/sections/admission/AdmissionDocument";
import AdmissionSection from "@/components/sections/admission/admissionSection";
import OverviewSection from "@/components/sections/admission/overviewSection";
import SchoolCampus from "@/components/sections/admission/SchoolCampus";
import WhySection from "@/components/sections/admission/WhySection";
import AdmissionSeatcapacity from "@/components/sections/admission/AdmissionSeatcapacity";
import AdmissionPolicies from "@/components/sections/admission/AdmissionPolicies";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Admission page title",
        metaDescription: "Admission page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Admission page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "Admission",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },

            {
                label: "Admission @ DSU",
                href: "/",
            },
            {
                label: "Admission Process",
                href: "/",
            },
        ],
        admissionMenubar: true
    },
    Process: {
        heading: "Your Journey to DSU Starts Here",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our admission process is designed to make your application simple and convenient.",
                    },
                ],
            },
        ],
        steps: [
            {
                id: 1,
                number: "01",
                title: "Choose Your Program",
                description: "Our admission process is designed to make your application simple and convenient.",
            },
            {
                id: 2,
                number: "02",
                title: "Check Eligibility",
                description: "Review the academic qualifications, entrance requirements and eligibility criteria for your chosen programme.",
            },
            {
                id: 3,
                number: "03",
                title: "Submit Your Application",
                description: "Complete the online application form and provide the required academic and personal details.",
            },
            {
                id: 4,
                number: "04",
                title: "Selection Process",
                description: "Depending on the programme, admission may be based on DSAT, qualifying entrance examinations, academic merit or other applicable selection criteria.",
            },
            {
                id: 5,
                number: "05",
                title: "Complete Admission",
                description: "Once selected, complete the required admission formalities and secure your place at DSU.",
            },
        ],
        button: {
            label: "Start Your Applications",
            href: "#",
        },
    },
    admissionThrough: {
        heading: "Admission Through",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The National Assessment and Accreditation Council (NAAC), established by the University Grants Commission (UGC), evaluates higher education institutions across India on quality and academic excellence. Dayananda Sagar University (DSU) has been awarded NAAC A+ Accreditation, recognizing its commitment to high academic standards, innovative teaching, research excellence, and continuous institutional improvement.",
                    },
                ],
            },
        ],
        exams: [
            {
                id: 1,
                title: "DSAT",
                subtitle: "Dayananda Sagar Admission Test",
                code: "",
            },
            {
                id: 2,
                title: "COMEDK",
                subtitle: "",
                code: "E182",
            },
            {
                id: 3,
                title: "Uni-GAUGE",
                subtitle: "",
                code: "UNI-010",
            },
            {
                id: 4,
                title: "CET",
                subtitle: "",
                code: "DSU-E240",
            },
            {
                id: 5,
                title: "PGCET – M.Tech",
                subtitle: "",
                code: "DSU-E240",
            },
            {
                id: 6,
                title: "PGCET – MBA",
                subtitle: "",
                code: "B365MB",
            },
        ],
    },
    document: {
        heading: "Document Verification",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Upload the required documents and wait for DSU to complete the verification process.",
                    },
                ],
            },
        ],
        requiredDocuments: {
            heading: "Required Documents",
            items: [
                { id: 1, label: "Passport-size color photograph" },
                { id: 2, label: "Scanned signature" },
                { id: 3, label: "Qualification documents from 10th grade to the highest qualification" },
                { id: 4, label: "Diplomas or degrees, where applicable" },
                { id: 5, label: "Valid government-issued photo ID" },
                { id: 6, label: "Residence / address proof, if different from ID" },
                { id: 7, label: "Disability certificate, if applicable" },
            ],
        },
        note: {
            title: "* DSU instructions Before you upload",
            description: "Ensure your photograph, government ID and mark sheets are clear and not password-protected. DSU also instructs international applicants to scan the original documents, not photocopies.",
        },
    },
    seatCapacity: {
        heading: "Seat Confirmation",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "After the applicable selection, verification and fee-payment steps, complete the seat-confirmation process.",
                    },
                ],
            },
        ],
        note: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "DSU's published admission-flow document lists Seat Selection → Fee Payment → Seat Confirmation for applicable admission routes.",
                    },
                ],
            },
        ],
        steps: [
            {
                id: 1,
                number: "01",
                title: "Seat Selection",
            },
            {
                id: 2,
                number: "02",
                title: "Fee Payment",
            },
            {
                id: 3,
                number: "03",
                title: "Seat Confirmation",
            },
        ],
    },
    policies: {
        heading: "Admission Policies",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Important information to check before you apply.",
                    },
                ],
            },
        ],
        accordion: [
            {
                id: 1,
                question: "Eligibility & Fees",
                answer: [],
            },
            {
                id: 2,
                question: "Admission Routes",
                answer: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "The applicable admission route depends on the programme. DSU publishes routes including DSAT, CET, COMEDK, Uni-GAUGE and PGCET.",
                            },
                        ],
                    },
                ],
            },
            {
                id: 3,
                question: "Document Verification",
                answer: [],
            },
            {
                id: 4,
                question: "Fee Payment",
                answer: [],
            },
            {
                id: 5,
                question: "International Applicants",
                answer: [],
            },
            {
                id: 6,
                question: "Check Current Information",
                answer: [],
            },
        ],
    },


}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AdmissionMenubar className="lg:!hidden block" />
            <AdmissionProcess data={local_data.Process} />
            <AdmissionThrough data={local_data.admissionThrough} />
            <AdmissionDocument data={local_data.document} />
            <AdmissionSeatcapacity data={local_data.seatCapacity} />
            <AdmissionPolicies data={local_data.policies} />
        </>
    )
}
