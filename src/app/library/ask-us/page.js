import InnerHero from "@/components/layout/common/InnerHero"; 
import AskUsLibrary from "@/components/sections/library/AskUsLibrary";

const local_data = { 

    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Ask Us",
            mime: "image/jpg",
            url: "/images/academic-banner.jpg",
        },
        title: "Library",
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Student Life", href: "/" },
            { label: "Library", href: "/" },
            { label: "Ask Us", href: "/" },
        ],
    },

    askUs: {
        title: "Ask Us",
        intro: "Have a question? Our library team is here to help you.",
        topCards: [
            {
                title: "Ask Librarian",
                lines: [
                    "Library staff will respond to your query by email as soon as possible.",
                    "Your question will be forwarded to the appropriate librarian for a response.",
                ],
                link: { label: "library@dsu.edu.in", email: "library@dsu.edu.in" },
            },
            {
                title: "Give us Feedback:",
                lines: [
                    "We value your feedback and suggestions. Share your experience, comments, or concerns with our library services, resources, and facilities.",
                    "Your input helps us enhance our services and provide a better learning and research environment for all users.",
                ],
                link: { label: "Click Here...", url: "/", isExternal: false },
            },
        ],
        infoCards: [
            {
                title: "Address",
                lines: [
                    "Dayananda Sagar University",
                    "Main Campus, Harohalli,",
                    "Bangalore-562112 Karnataka, India.",
                ],
            },
            {
                title: "Contact us",
                lines: [
                    "Chief Librarian Office: 080-49092920",
                    "Circulation Section: 7411616995",
                ],
            },
            {
                title: "Email",
                lines: ["library@dsu.edu.in"],
            },
        ],
    },

    menu: [/* same menu data you pass to AboutLibrary */],
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AskUsLibrary data={local_data.askUs}   />
        </>
    );
}