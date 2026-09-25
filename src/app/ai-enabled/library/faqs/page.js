import InnerHero from "@/components/layout/common/InnerHero";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
import LibraryFaq from "@/components/sections/ai-enabled/library/library-Faq";
import LibraryOverview from "@/components/sections/ai-enabled/library/library-overview";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Industry Collaborations page title",
        metaDescription: "Industry Collaborations page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Industry Collaborations page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "Library",
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
                label: "School of Health Sciences",
                href: "/",
            },
            {
                label: "College of Nursing Sciences",
                href: "/",
            },
            {
                label: "Library",
                href: "/",
            },
            {
                label: "FAQ's",
                href: "/",
            },
        ],
        AimenuBar: true
    },
    faqSection: {
        heading: "FAQ's",
        faq: [
            {
                id: 1,
                question: "How quickly can Falcon LuxWho is authorized to use the DSU Nursing Library?e arrange a charter?",
                answer: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "",
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                question: "Is there any separate Library Card issued for using the Library?",
                answer: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "No separate ID card is issued for using the Library. The Institute ID card is sufficient to enter the Library.",
                            },
                        ],
                    },
                ],
            },
            {
                id: 3,
                question: "Can I borrow books by sending borrowers card through someone?",
                answer: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "",
                            },
                        ],
                    },
                ],
            },
            {
                id: 4,
                question: "Can I renew issued book(s)?",
                answer: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "",
                            },
                        ],
                    },
                ],
            },
            {
                id: 5,
                question: "I am going on academic leave or temporarily withdrawing from a semester. Do I need to return the books which I borrowed?",
                answer: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "",
                            },
                        ],
                    },
                ],
            },
            {
                id: 6,
                question: "How do I get No Dues from the Library?",
                answer: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "",
                            },
                        ],
                    },
                ],
            },
            {
                id: 7,
                question: "What Should I do if the book I borrowed got lost?",
                answer: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "",
                            },
                        ],
                    },
                ],
            },
            {
                id: 8,
                question: "How do I access the Eresources subscribed by the Library? Do I need any separate login/password?",
                answer: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "",
                            },
                        ],
                    },
                ],
            },
            {
                id: 9,
                question: "How do I search Library collection/ resources?",
                answer: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "",
                            },
                        ],
                    },
                ],
            },
        ],
    },

}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiAcademicMenubar className="lg:!hidden block" />
            <LibraryFaq data={local_data.faqSection} />

        </>
    )
}

