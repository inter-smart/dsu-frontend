import InnerHero from "@/components/layout/common/InnerHero"; 
import AdvisoryCommitteeLibrary from "@/components/sections/library/AdvisoryCommitteeLibrary";

const local_data = {
    
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "library page title",
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
                label: "Student Life",
                href: "/",
            },
            {
                label: "Library",
                href: "/",
            },
            {
                label: "Advisory Committee",
                href: "/",
            },
        ],
    },

    advisoryCommittee: {
        title: "Advisory Committee",
        headers: ["Sl No", "Designation", "Role"],
        members: [
            { designation: "The Registrar", role: "Chairman" },
            { designation: "Dean, School of Engineering", role: "Member" },
            { designation: "Dean, School of Commerce & Management Studies", role: "Member" },
            { designation: "Dean, School of Basic & Applied Sciences", role: "Member" },
            { designation: "Dean, School of Health Sciences", role: "Member" },
            { designation: "Dean, School of Law", role: "Member" },
            { designation: "Chief Finance Officer", role: "Member" },
            { designation: "Chief Librarian", role: "Member Secretary" },
        ],
        intro: "The following Objectives and Responsibilities of the Library Advisory Committee Members",
        sections: [
            {
                title: "Objectives:",
                items: [
                    "To support the library activities which are beneficial for the all stakeholders",
                    "To help librarian to design and formulate the library policies for smooth functioning of the library",
                    "To outline the library collection development policy as and when required, for its implementation.",
                    "Evaluating the books procurement department- wise and allocation of budget accordingly.",
                    "To advise the library on policy matters concerning services, resources and facilities.",
                    "To facilitate communication between the Library and the community it serves.",
                ],
            },
            {
                title: "Responsibilities:",
                items: [
                    "Discuss and evaluate budgetary issues for books, e-books, journals, databases, e- resources etc.",
                    "Providing input on library collections, services, facilities and infrastructures.",
                    "To work towards modernization and improvement of Library and documentation Services.",
                    "To formulate policies and procedures for efficient use of Library resources.",
                    "To prepare budget and proposals for the development of the Library.",
                    "To take measures to increase the membership of the Library beyond the boundaries of the University.",
                    "Advises and reviews library policies for instruction, resources, services, and the facility.",
                    "Advises regarding library services, especially innovation, for the campus community.",
                ],
            },
        ],
    },

    menu: [/* same menu data you pass to AboutLibrary */],
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AdvisoryCommitteeLibrary
                data={local_data.advisoryCommittee}
            />
        </>
    );
}