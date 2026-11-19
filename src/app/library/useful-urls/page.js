import InnerHero from "@/components/layout/common/InnerHero"; 
import UsefulUrlsLibrary from "@/components/sections/library/UsefulUrlsLibrary";

const local_data = {
    // ...id, seo stay as you have them

    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Useful URL’s",
            mime: "image/jpg",
            url: "/images/academic-banner.jpg",
        },
        title: "Library",
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Student Life", href: "/" },
            { label: "Library", href: "/" },
            { label: "Useful URL’s", href: "/" },
        ],
    },

    usefulUrls: {
        title: "Useful URL’s",
        sections: [
            {
                title: "E - Journals",
                items: [
                    { description: "NISCAIR", url: "http://www.niscair.res.in/sciencecommunication/ResearchJournals/rejour/rejour1.htm" },
                    { description: "Springer Journals", url: "https://www.springeropen.com/journals" },
                    { description: "Elsevier", url: "https://www.elsevier.com/about/open-science/open-access/open-access-journals" },
                    { description: "Open Access Journals Search Engine (OAJSE)", url: "http://www.kkhsou.in/library/oajse/" },
                    { description: "Open Access Journals", url: "https://www.openaccessjournals.com/" },
                    { description: "Open Access Library Search Engine", url: "http://www.oalib.com/" },
                    { description: "Nature.com", url: "https://www.nature.com/" },
                    { description: "African Journals Online", url: "https://www.ajol.info/" },
                    { description: "OSTI", url: "https://www.osti.gov/" },
                    { description: "INSPIRE HEP", url: "http://inspirehep.net/?ln=en" },
                    { description: "Scientific information Database", url: "http://www.sid.ir/En/Journal/" },
                    { description: "Research search engine", url: "https://www.djvu-pdf.com/" },
                    { description: "Semantic scholar", url: "https://www.semanticscholar.org/" },
                    { description: "Tomorrow's Research Today", url: "https://www.ssrn.com/en/" },
                ],
            },
            { title: "E-Learning / Course Materials:", items: [] },
            { title: "E-Books", items: [] },
            { title: "Career Information Resources", items: [] },
            { title: "Research Funding Agencies", items: [] },
            { title: "Government Websites", items: [] },
            { title: "Educational Websites", items: [] },
            { title: "Reference Sources", items: [] },
            { title: "Search Engines", items: [] },
            { title: "E - Newspapers", items: [] },
        ],
    },

    menu: [/* same menu data you pass to AboutLibrary */],
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <UsefulUrlsLibrary data={local_data.usefulUrls}   />
        </>
    );
}