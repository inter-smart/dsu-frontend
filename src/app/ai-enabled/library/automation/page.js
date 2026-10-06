import InnerHero from "@/components/layout/common/InnerHero";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
import LibraryAutomation from "@/components/sections/ai-enabled/library/library-automation"; 

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
        AimenuBar: true,
    },
    automationSection: {
        heading: "Library Automation",
        subheading: "ILMS (INTEGRATED LIBRARY MANAGEMENT SOFTWARE):",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The Library is automated using Koha, Integrated Library management software for housekeeping jobs in different sections viz. Acquisition, Technical, Reference and Circulation for the Issue/Returns. The Integrated Library management software is upgraded to its latest version and the Web OPAC (Online Public Access Catalogue) provided for Users. Through web OPAC users can find availability of all library resources and can download PDF's of e-books.",
                    },
                ],
            },
        ],
        webOpac: {
            heading: "Web OPAC:",
            items: [
                { label: "Web OPAC is the Online Public Access Catalogue which allows users avail the services of the library." },
                { label: "Search & find the available books in the library" },
                { label: "E-Books- Users can directly search and download PDF's of available E-books." },
                { label: "Public IP for Library Web OPAC https://dsuunivopac.ltsinformatics.com" },
            ],
        },
    },
};

export default function Page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiAcademicMenubar className="lg:!hidden block" />
            <LibraryAutomation data={local_data.automationSection} />
        </>
    );
}