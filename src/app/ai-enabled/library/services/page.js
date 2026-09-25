import InnerHero from "@/components/layout/common/InnerHero";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
import LibraryOverview from "@/components/sections/ai-enabled/library/library-overview";
import LibraryServices from "@/components/sections/ai-enabled/library/library-services";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Library page title",
        metaDescription: "Library page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Library page title",
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
                label: "Library Services",
                href: "/",
            },
        ],
        AimenuBar: true
    },


    libraryServicesSection: {
        heading: "Library Services",
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
            url: "/images/service-1.jpg",
        },
        sections: [
            {
                id: 1,
                title: "Circulation Section",
                intro: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "This section represents the hub of library activities where lending of books to readers is facilitated. Authorized faculty and students of nursing are allowed to use the library and borrow books against their library membership. Each rack in this section has shelf guides which will help our users.",
                            },
                        ],
                    },
                ],
                items: [
                    { label: "Books are issued to all eligible members as per their entitlements Books are issued for 15 days to students and 30 days for faculty." },
                    { label: "Renewal option for student's members for 2 times" },
                ],
                outro: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "This section holds encyclopedias, dictionaries, competitive examination books, and previous year's question papers, etc. Readers need to access these resources from the reference collection. Reference books are not for lending. They can be used inside the library and if needed can be photocopied.",
                            },
                        ],
                    },
                ],
            },
            {
                id: 2,
                title: "Renewal Procedures",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "An issued book can be renewed online for period of 15 days, if online renewal once done, then book has to be brought physically to library for renewal. If the book has been reserved by any other person, then the book cannot be renewed.",
                            },
                        ],
                    },
                ],
            },
            {
                id: 3,
                title: "Online Reservations",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "The library provides the facility to reserve books through our online portal available through OPAC ",
                            },
                            {
                                type: "link",
                                url: "https://dsuunivopac.ltsinformatics.com",
                                children: [
                                    {
                                        type: "text",
                                        text: "https://dsuunivopac.ltsinformatics.com",
                                    },
                                ],
                            },
                            {
                                type: "text",
                                text: " Library members can search for the availability of the required book through the above portal and subsequently reserve them by logging in through their member ID.",
                            },
                        ],
                    },
                ],
            },
            {
                id: 4,
                title: "Reference Section",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "This section holds encyclopedias, dictionaries, competitive examination books, and previous year's question papers, etc. Readers need to access these resources from the reference collection. Reference books are not for lending. They can be used inside the library and if needed can be photocopied.",
                            },
                        ],
                    },
                ],
            },
            {
                id: 5,
                title: "Theses Section",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Theses and mini projects pertaining to M.Sc, P.P.B.Sc, B.Sc, Nursing programs more than 100+ theses and mini projects are available in our library for reference.",
                            },
                        ],
                    },
                ],
            },
            {
                id: 6,
                title: "Digital Library",
                description: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Digital library is having 12 Computers and it is available for the users with high speed internet connection for accessing e-resources such as e-journals, e-books, texts, images etc. Please note that this facility is to be used only for academic and research purposes. Windows 11 operating system is being installed in all the computers in digital library.",
                            },
                        ],
                    },
                ],
            },
        ],


        journalsSection: {
            heading: "Journals",
            items: [
                { label: "The library receives National and International print journals." },
                { label: "The titles of the periodicals have arranged subject wise." },
                { label: "Bound volumes of journals, loose issues of journals and the latest available issue of the journals are to be referred within library premises and are not available for issuing outside the library." },
                { label: "14 National" },
                { label: "02 International Print journals." },
            ],
            printJournals: {
                heading: "Print Journals",
                columns: ["Sl. No.", "Subject", "No. of Journals"],
                rows: [
                    { slNo: 1, subject: "Medical Surgical Nursing", count: "2" },
                    { slNo: 2, subject: "Child Health Nursing", count: "2" },
                    { slNo: 3, subject: "Mental Health Nursing", count: "2" },
                    { slNo: 4, subject: "Obstetrics & Gynecology Nursing", count: "2" },
                    { slNo: 5, subject: "Community Health Nursing", count: "1" },
                    { slNo: 6, subject: "Nursing Education", count: "2" },
                    { slNo: 7, subject: "Nursing Research", count: "2" },
                    { slNo: 8, subject: "General", count: "3" },
                ],
                total: { label: "Total", count: "16" },
            },
        },
        dailiesSection: {
            heading: "Dailies",
            description: "Library subscribes 04 Newspapers (English & Kannada) and 06 popular magazines.",
            columns: ["Sl. No.", "Newspapers", "Magazines"],
            rows: [
                { slNo: 1, newspaper: "The Times of India", magazine: "Woman's Era" },
                { slNo: 2, newspaper: "Deccan Herald", magazine: "Readers Digest" },
                { slNo: 3, newspaper: "Bangalore Mirror", magazine: "Taranga" },
                { slNo: 4, newspaper: "Vijaya Karnataka", magazine: "General Knowledge" },
                { slNo: 5, newspaper: "", magazine: "Competition Success" },
                { slNo: 5, newspaper: "", magazine: "Employment News" },
            ],
        },
        nursingUsefulLinks: {
            heading: "Nursing Useful Links",
            links: [
                { id: 1, url: "https://www.cochranelibrary.com/" },
                { id: 2, url: "http://www.allnurses.com" },
                { id: 3, url: "https://www.ebscohost.com/nursing/products/nursing-reference-center" },
                { id: 4, url: "http://www.ATIlesting.com" },
                { id: 5, url: "http://www.nursing-portal.com/nse.asp" },
                { id: 6, url: "http://www.nurse.com/" },
                { id: 7, url: "http://www.nimr.nih.gov/" },
                { id: 8, url: "http://www.medscape.com/nurses" },
                { id: 9, url: "http://www.nursingworld.org/" },
                { id: 10, url: "http://www.medscape.com/nurses" },
                { id: 11, url: "http://allnurses.com/" },
                { id: 12, url: "www.nursesofindia.net" },
                { id: 13, url: "http://www.ahd.com/inseearch.php" },
                { id: 14, url: "www.tnaionline.org" },
                { id: 15, url: "http://www.nursing-research-editor.com/" },
                { id: 16, url: "www.indiannursingcouncil.org" },
                { id: 17, url: "http://www.webmd.com/" },
                { id: 18, url: "www.nhp.gov.in/nursing_pg" },
            ],
        },
        informationLiteracy: {
            heading: "Information Literacy/Library Orientation:",
            description: "Library will conduct Information Literacy/orientation programmes to all in the beginning of the academic year. Besides this, these awareness programmes should be conducted when requested by users from time to time.",
        },
        newArrivals: {
            heading: "New Arrivals:",
            cta: {
                label: "Click Here..",
                link: "#!",
            },
        },
    },
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiAcademicMenubar className="lg:!hidden block" />
            <LibraryServices data={local_data.libraryServicesSection} />
        </>
    )
}

