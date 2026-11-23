import InnerHero from "@/components/layout/common/InnerHero"; 
import RulesRegulationsLibrary from "@/components/sections/library/RulesRegulationsLibrary";

const local_data = {
    // ...id, seo stay as you have them

    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Rules And Regulations",
            mime: "image/jpg",
            url: "/images/academic-banner.jpg",
        },
        title: "Library",
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Student Life", href: "/" },
            { label: "Library", href: "/" },
            { label: "Rules And Regulations", href: "/" },
        ],
    },

    rulesRegulations: {
        title: "Rules and Regulations",
        rules: [
            "Users should bring the Smart card compulsorily.",
            "Leave your bags, handbags and personal belongings at the depository/property counter.",
            "Using cell/mobile phones are prohibited.",
            "Strict silence should be maintained.",
            "College dress code applies to library also.",
            "Eatables are not allowed inside the Library.",
            "Do not install or uninstall any software in library computers.",
            "Students are prohibited to carry any notebook inside the reference section except loose sheets.",
            "No person shall write on, damage or make any mark on any book, journal or other material belongs to the library.",
            "Library documents should be handled with great care.",
            "The staff/students are must to return the books as and when they are called back by the Chief Librarian.",
            "Before borrowing the book, the member must make sure that the book lent is in good condition and the page numbers are intact.",
            "Fine will be calculated after the due date.",
            "Books are re-issued only if there are no claims or reservations.",
            "If there is loss of borrower’s card, it should be reported to Chief Librarian.",
            "Photocopying of only one chapter of a book for educational or research purpose is permitted under copyright law. Users should respect copyright law and the library is not responsible for any legal consequences arising due to copyright violation.",
            "Personal laptops are allowed inside the library on the condition that they will not disturb the connections of the library’s desktop computers for recharging/ Internet connections. Plug points and LAN cables are provided in the Private study zones and the users should make use of the same.",
        ],
    },

    menu: [/* same menu data you pass to AboutLibrary */],
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <RulesRegulationsLibrary
                data={local_data.rulesRegulations} 
            />
        </>
    );
}