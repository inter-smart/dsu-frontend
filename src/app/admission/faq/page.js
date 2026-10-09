import InnerHero from "@/components/layout/common/InnerHero";
import AdmissionMenubar from "@/components/sections/admission/admissionMenubar"; 
import AdmissionPolicies from "@/components/sections/admission/AdmissionPolicies";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Frequently Asked Questions page title",
        metaDescription: "Frequently Asked Questions page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Frequently Asked Questions page title",
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
                label: "Faq",
                href: "/",
            },
        ],
        admissionMenubar: true
    },

    faq: {
        heading: "Frequently Asked Questions",
        accordion: [
            {
                id: 1,
                question: "How do I apply to DSU?",
                answer: [],
            },
            {
                id: 2,
                question: "What documents do I need for the application?",
                answer: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Typically your 10+2/graduation marks card, transcripts, category certificate (if applicable), entrance exam scorecard, ID proof, and passport-size photographs. Exact requirements vary by programme and are confirmed during the application process.",
                            },
                        ],
                    },
                ],
            },
            {
                id: 3,
                question: "Is there an application fee?",
                answer: [],
            },
            {
                id: 4,
                question: "How long does the selection process take?",
                answer: [],
            },
            {
                id: 5,
                question: "Can I apply for more than one programme?",
                answer: [],
            },
            {
                id: 6,
                question: "What happens after I submit my application?",
                answer: [],
            },
            {
                id: 7,
                question: "Who can I contact if I have questions during the process?",
                answer: [],
            },
        ],
    }

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AdmissionMenubar className="lg:!hidden block" />
            <AdmissionPolicies data={local_data.faq} />
        </>
    )
}
