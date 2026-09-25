import InnerHero from "@/components/layout/common/InnerHero";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
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
        ],
        AimenuBar: true
    },

    librarySection: {
        heading: "College of Nursing Sciences - Library",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The College of Nursing Sciences - Library has a huge collection of books, CD's and DVD's apart from latest periodicals with access to online resources through the Digital Library. The achievements are reflecting through the acknowledgements and positive remarks by the visiting faculties and dignitaries. The intellectual standards are truly reflected in its high standard Library. Library is accessible to all Undergraduates, Postgraduates, Research Scholars & faculty members. Library consists of skilled, professional and compassionate library staff members who are always pleased to help the users.",
                    },
                ],
            },
        ],
        image: {
            alternativeText: "Students studying at the College of Nursing Sciences library",
            mime: "image/jpeg",
            url: "/images/library-img-1.jpg",
        },
        infoCards: [
            {
                id: 1,
                title: "Library Working Hours:",
                items: [
                    { label: "Monday to Saturday: 09:00 am to 04:00 pm (On all working Days)" },
                    { label: "1st and 3rd Saturday Holiday" },
                ],
            },
            {
                id: 2,
                title: "Library Carpet Area and Seating Capacity:",
                items: [
                    { label: "Nursing college library is 3,836 sq. ft." },
                    { label: "with seating capacity 120+" },
                ],
            },
        ],
        libraryCollections: {
            heading: "Library Collections",
            statisticsDate: "* Statistics Date :31-01-2026",
            items: [
                { label: "Titles", value: "2263" },
                { label: "Volumes", value: "6519" },
                { label: "Book Bank", value: "-" },
                { label: "Bound Volumes", value: "205" },
                { label: "Book CD's", value: "131" },
                { label: "Periodical CD's", value: "-" },
                { label: "Educational Video's", value: "-" },
                { label: "National & International Print Journals", value: "16" },
                { label: "News Papers", value: "04" },
                { label: "Magazines", value: "06" },
                { label: "E-Books", value: "1518+" },
            ],
        },
        membershipSection: {
            heading: "Membership:",
            description: [
                {
                    type: "paragraph",
                    children: [
                        {
                            type: "text",
                            text: "Students and Faculty members are eligible to become the members of the library. Without the membership registration no documents can be borrowed. Prescribed Membership forms are made available in the circulation and also download from the website( ",
                        },
                        {
                            type: "text",
                            text: "CLick here..",
                            bold: true,
                            link: "#!",
                        },
                        {
                            type: "text",
                            text: ")",
                        },
                    ],
                },
            ],
            membershipTable: {
                heading: "Membership:",
                note: "* 1 Reference Book for Overnight",
                items: [
                    { label: "Faculty Members", value: "3 Books" },
                    { label: "UG Students", value: "2 Books" },
                    { label: "PG Students", value: "2 Books" },
                ],
            },
            documentsRequired: {
                description: "To get the Library membership students have to produce the below mentioned documents:",
                items: [
                    { label: "One pass port size photo" },
                    { label: "Photo copy of the Library caution deposit fee receipt" },
                ],
            },
        },
    },



}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiAcademicMenubar className="lg:!hidden block" />
            <LibraryOverview data={local_data.librarySection} />

        </>
    )
}

