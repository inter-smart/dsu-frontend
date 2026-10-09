import InnerHero from "@/components/layout/common/InnerHero";
import AdmissionMenubar from "@/components/sections/admission/admissionMenubar"; 
import AdmissionContact from "@/components/sections/admission/AdmissionContact";

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
                label: "Contact Admissions",
                href: "/",
            },
        ],
        admissionMenubar: true
    },

    admissionContact: {
        heading: "Contact Admissions",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Have questions about admissions? Connect with the appropriate DSU campus or admission office.",
                    },
                ],
            },
        ],
        mainOffice: {
            heading: "Administrative & Main Admission Office",
            subtitle: "Dayananda Sagar University · City Innovation Campus",
            columns: [
                {
                    id: 1,
                    label: "ADDRESS",
                    value: "Kudlu Gate, Hosur Road, Bengaluru – 560 114",
                    directions: {
                        label: "Get Directions",
                        href: "#",
                    },
                },
                {
                    id: 2,
                    label: "ADMISSIONS HELPLINE",
                    values: [
                        { value: "+91 80 4646 1800", href: "tel:+918046461800" },
                        { value: "+91 6366 88 5507", href: "tel:+916366885507" },
                    ],
                },
                {
                    id: 3,
                    label: "EMAIL",
                    values: [
                        { value: "admissions@dsu.edu.in", href: "mailto:admissions@dsu.edu.in" },
                    ],
                },
            ],
            buttons: [
                {
                    id: 1,
                    label: "Enquire Now",
                    href: "#",
                    variant: "primary",
                },
                {
                    id: 2,
                    label: "WhatsApp",
                    href: "#",
                    variant: "secondary",
                    icon: "whatsapp",
                },
            ],
        },
        campuses: [
            {
                id: 1,
                icon: {
                    alternativeText: "Main campus building icon",
                    mime: "image/svg+xml",
                    url: "/images/icons/campus-main.svg",
                },
                name: "DSU Main Campus",
                subtitle: "Dayananda Sagar University",
                address: "Devarakaggalahalli, Harohalli, Kanakapura Road, Bengaluru South Dt. – 562 112",
                directions: {
                    label: "Get Directions",
                    href: "#",
                },
                email: {
                    label: "E-Mail:",
                    values: [
                        { value: "admissions@dsu.edu.in", href: "mailto:admissions@dsu.edu.in" },
                    ],
                },
                contacts: [
                    {
                        id: 1,
                        label: "Office of Registrar :",
                        values: [
                            { value: "080 24496999(Extn-2)", href: "tel:08024496999" },
                        ],
                    },
                    {
                        id: 2,
                        label: "Reception:",
                        values: [
                            { value: "080 24496999(Extn-1)", href: "tel:08024496999" },
                        ],
                    },
                    {
                        id: 3,
                        label: "Registrar:",
                        values: [
                            { value: "080 24496999(Extn-3)", href: "tel:08024496999" },
                        ],
                    },
                    {
                        id: 4,
                        label: "Dean, SOE:",
                        values: [
                            { value: "080 24496999(Extn-4)", href: "tel:08024496999" },
                        ],
                    },
                ],
            },
            {
                id: 2,
                icon: {
                    alternativeText: "City campus building icon",
                    mime: "image/svg+xml",
                    url: "/images/icons/campus-city.svg",
                },
                name: "DSU City Innovation Campus",
                subtitle: "Innovation Campus",
                address: "Administrative & Main Admission office, Kudlu Gate, Hosur Road, Bengaluru – 560 068",
                directions: {
                    label: "Get Directions",
                    href: "#",
                },
                email: {
                    label: "E-Mail:",
                    values: [
                        { value: "admissions@dsu.edu.in", href: "mailto:admissions@dsu.edu.in" },
                        { value: "dsat@dsu.edu.in", href: "mailto:dsat@dsu.edu.in" },
                    ],
                },
                contacts: [
                    {
                        id: 1,
                        label: "Office of Registrar :",
                        values: [
                            { value: "080 4909 2910 / 11", href: "tel:08049092910" },
                        ],
                    },
                    {
                        id: 2,
                        label: "Office of Dean (School of Engineering):",
                        values: [
                            { value: "080 4909 2986 / 32 / 33", href: "tel:08049092986" },
                        ],
                    },
                    {
                        id: 3,
                        label: "Dean - MBA:",
                        values: [
                            { value: "080 4909 2931", href: "tel:08049092931" },
                        ],
                    },
                    {
                        id: 4,
                        label: "Research Cell:",
                        values: [
                            { value: "080 4909 2912 / 91 97390 17462", href: "tel:08049092912" },
                        ],
                    },
                ],
            },
        ],
    }



}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AdmissionMenubar className="lg:!hidden block" />
            <AdmissionContact data={local_data.admissionContact} />
        </>
    )
}
