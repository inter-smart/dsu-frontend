import InnerHero from "@/components/layout/common/InnerHero"; 
import AntiPlagiarismLibrary from "@/components/sections/library/AntiPlagiarismLibrary";

const local_data = {
    // ...id, seo stay as you have them

    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Anti-Plagiarism Tools",
            mime: "image/jpg",
            url: "/images/academic-banner.jpg",
        },
        title: "Library",
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Student Life", href: "/" },
            { label: "Library", href: "/" },
            { label: "Anti-Plagiarism Tools", href: "/" },
        ],
    },

    antiPlagiarism: {
        title: "Anti-Plagiarism Tools @ DSU",
        description: [
            "The library offers plagiarism detection services using Turnitin and Drillbit tools to ensure academic integrity and originality in research work. Turnitin and Drillbit primarily used for checking plagiarism in general academic submissions like Ph.D thesis, dissertations, Project Reports, Journal Articles, Conference Papers, Book Chapters etc.",
            "Users who wish to check plagiarism for their work must submit a duly filled application form, signed by the applicant, their guide, and the Head of Department. After submitting the application, the soft copy of the work, in either PDF or Word format, should be sent to the library’s official email ID. The plagiarism report will be sent to the user via email. Plagiarism checking is free of cost for the first two checks for each paper; from the third check onwards, a fee will be applicable.",
        ],
        tools: [
            {
                logo: { url: "/images/library/anti-1.png", alternativeText: "DrillBit" },
                provider: "DrillBit - Plagiarism",
                url: "https://www.drillbitplagiarism.com/",
                loginDetails: "Password Based",
            },
            {
                logo: { url: "/images/library/anti-2.png", alternativeText: "Turnitin" },
                provider: "Turnitin",
                url: "https://www.turnitin.com/login_page.asp",
                loginDetails: "Password Based",
            },
        ],
    },

    
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AntiPlagiarismLibrary data={local_data.antiPlagiarism}  />
        </>
    );
}