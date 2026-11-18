import InnerHero from "@/components/layout/common/InnerHero"; 
import CorporateMembershipLibrary from "@/components/sections/library/CorporateMembershipLibrary";

const local_data = {
    // ...id, seo stay as you have them

    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Corporate Membership",
            mime: "image/jpg",
            url: "/images/academic-banner.jpg",
        },
        title: "Library",
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Student Life", href: "/" },
            { label: "Library", href: "/" },
            { label: "Corporate Membership", href: "/" },
        ],
    },

    corporateMembership: {
        title: "Corporate Membership",
        intro:
            "The following Objectives and Responsibilities of the Library Advisory Committee Members",
        members: [
            {
                institution: "British Council",
                url: "https://www.britishcouncil.in/library",
                note: "For Borrowing/ Ref. Cards Contact Library Staff For More Information",
                services: [
                    "1. Books",
                    "2. Back volume Journals",
                    "3. Education in UK counseling",
                    "4. IELTS & BEC exams",
                ],
            },
            {
                institution: "DELNET (Developing Library Network)",
                url: "www.delnet.in",
                note: "Contact for access of ILL services: Contact Library Staff For More Information",
                services: [
                    "1. Inter library loan services.",
                    "2. Resource sharing.",
                    "3. Users can exchange any kind of reading materials.",
                    "4. Online union catalogue search",
                ],
            },
            {
                institution: "CMTI",
                url: "https://cmti.res.in/",
                services: ["1. Resources can be accessed in the CMTI Library"],
            },
            {
                institution: "IIMB",
                url: "http://www.iimb.ac.in/newlibrary",
                services: [
                    "Its electronic collection comprises about 79 resources accessible 24 x 7 on and off campus to its faculty, research scholars and students.",
                ],
            },
            {
                institution: "IISc",
                url: "http://library.iisc.ac.in/",
                services: [
                    "Members are entitled to avail",
                    "Reference Service · Photocopying facilities are chargeable extra as per rates prescribed by the library.",
                ],
            },
            {
                institution: "NAL",
                url: "https://www.nal.res.in/",
                services: ["Resources can be accessed in the NAL Library"],
            },
        ],
    },

    menu: [/* same menu data you pass to AboutLibrary */],
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <CorporateMembershipLibrary
                data={local_data.corporateMembership}             />
        </>
    );
}