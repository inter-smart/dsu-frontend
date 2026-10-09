import InnerHero from "@/components/layout/common/InnerHero";
import AdmissionDates from "@/components/sections/admission/AdmissionDates";
import AdmissionMenubar from "@/components/sections/admission/admissionMenubar";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Important Dates page title",
        metaDescription: "Important Dates page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Important Dates page title",
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
                label: "Important Dates",
                href: "/",
            },
        ],
        admissionMenubar: true
    },
    dates: {
        heading: "Important Dates",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Keep track of admission, entrance examination and course commencement information.",
                    },
                ],
            },
        ],
        groups: [
            {
                id: 1,
                heading: "Admission Schedule",
                items: [
                    {
                        id: 1,
                        date: "06 AUG 2026",
                        title: "Applications Open 2026-2027",
                        description: "Application window opens for the applicable 2026–27 programme.",
                    },
                    {
                        id: 2,
                        date: "06 AUG 2026",
                        title: "Application Deadline",
                        description: "Final application date depends on the programme and admission route.",
                    },
                    {
                        id: 3,
                        date: "06 AUG 2026",
                        title: "Selection / Shortlisting",
                        description: "Selection timeline depends on the applicable admissions route.",
                    },
                    {
                        id: 4,
                        date: "01 SEP 2026",
                        title: "Fee Payment & Seat Confirmation",
                        description: "Complete the required admission formalities after selection.",
                    },
                ],
            },
            {
                id: 2,
                heading: "Entrance Examination Dates",
                items: [
                    {
                        id: 1,
                        date: "06 AUG 2026",
                        title: "DSAT Examination",
                        description: "Check the latest DSU DSAT notification for the examination date.",
                    },
                    {
                        id: 2,
                        date: "As per authority",
                        title: "KCET / CET",
                        description: "Date is published by the respective examination authority.",
                    },
                    {
                        id: 3,
                        date: "As per authority",
                        title: "COMEDK",
                        description: "Date is published by the respective examination authority.",
                    },
                    {
                        id: 4,
                        date: "As per authority",
                        title: "Uni-GAUGE",
                        description: "Date is published by the respective examination authority.",
                    },
                    {
                        id: 5,
                        date: "As per authority",
                        title: "PGCET",
                        description: "Date is published by the respective examination authority.",
                    },
                ],
            },
            {
                id: 3,
                heading: "Counselling & Admission",
                items: [
                    {
                        id: 1,
                        date: "TBA",
                        title: "Selection / Merit Announcement",
                        description: "Applicants are informed according to the applicable selection process.",
                    },
                    {
                        id: 2,
                        date: "TBA",
                        title: "Counselling",
                        description: "Counselling schedule is communicated for the applicable programme or route.",
                    },
                    {
                        id: 3,
                        date: "TBA",
                        title: "Seat Allotment",
                        description: "Seat allotment follows the applicable admissions process.",
                    },
                    {
                        id: 4,
                        date: "TBA",
                        title: "Fee Payment Deadline",
                        description: "Complete fee payment within the communicated deadline.",
                    },
                    {
                        id: 5,
                        date: "TBA",
                        title: "Admission Confirmation",
                        description: "Complete document and admission formalities to confirm the seat.",
                    },
                ],
            },
            {
                id: 4,
                heading: "Orientation & Course Commencement",
                items: [
                    {
                        id: 1,
                        date: "06 AUG 2026",
                        title: "BBA / B.Com",
                        description: "Applicants are informed according to the applicable selection process.",
                    },
                    {
                        id: 2,
                        date: "10 AUG 2026",
                        title: "BCA / B.Sc Data Science / B.Sc Cybersecurity",
                        description: "Course commencement date published by DSU.",
                    },
                    {
                        id: 3,
                        date: "11 AUG 2026",
                        title: "B.Design",
                        description: "Course commencement date published by DSU.",
                    },
                    {
                        id: 4,
                        date: "12 AUG 2026",
                        title: "B.Tech / School of Law",
                        description: "Course commencement date published by DSU.",
                    },
                    {
                        id: 5,
                        date: "17 AUG 2026",
                        title: "M.Tech",
                        description: "Course commencement date published by DSU.",
                    },
                ],
            },
        ],
        note: {
            title: "Dates may vary by programme",
            description: "Admission deadlines and entrance examination schedules can change by programme or admission route. Check the official DSU site for the latest updates before applying or making travel arrangements.",
        },
    }
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AdmissionMenubar className="lg:!hidden block" />
            <AdmissionDates data={local_data.dates} />
        </>
    )
}
