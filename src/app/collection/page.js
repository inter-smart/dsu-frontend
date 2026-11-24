import InnerHero from "@/components/layout/common/InnerHero";
import CollectionsLibrary from "@/components/sections/library/CollectionsLibrary";

const LABELS = [
    "Titles",
    "Volumes",
    "Book Bank",
    "Bound Volumes",
    "Book CD’s",
    "Periodical CD's",
    "Educational Video’s",
    "National & International Print Journals",
    "News Papers",
    "Magazines",
    "E-Books",
];

// values go in the same order as LABELS, so each row stays short
const stats = (...values) =>
    LABELS.map((label, i) => ({ label, value: values[i] ?? "-" }));

const local_data = {
   
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Overview page title",
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
                label: "Collections",
                href: "/",
            },
        ],
    },

    collections: {
        title: "Collections",
        schools: [
            { title: "School of Engineering", stats: stats("7,063", "22978", "433", "139", "647", "17", "47", "60", "10", "15", "15680") },
            { title: "School of Basic & Applied Sciences", stats: stats("1289", "2749", "-", "-", "50", "-", "-", "6", "-", "-", "250") },
            { title: "School of Commerce & Management", stats: stats("719", "2204", "-", "-", "170", "-", "132", "10", "-", "-", "376") },
            { title: "School of Law", stats: stats("1408", "5123", "-", "1902", "-", "-", "-", "9", "-", "-", "-") },
            { title: "School of Computer Applications", stats: stats("627", "1428", "-", "-", "-", "-", "-", "12", "-", "-", "86") },
            {
                title: "School of Health Sciences",
                colleges: [
                    { title: "College of Nursing", stats: stats("2263", "6519", "-", "205", "131", "-", "-", "16", "04", "06", "1518+") },
                    { title: "College of Pharmacy", stats: stats("1898", "8791", "-", "69", "10", "-", "14", "12", "-", "-", "301") },
                    { title: "College of Physio Therapy", stats: stats("737", "2294", "-", "-", "10", "-", "-", "11", "04", "02", "100") },
                ],
            },
            {
                title: "School of Arts & Humanities",
                colleges: [
                    { title: "College of Journalism & Mass Communication", stats: stats("2263", "6519", "-", "205", "131", "-", "-", "16", "04", "06", "1518+") },
                    { title: "College of Design & Digital Transmedia", stats: stats("230", "404", "-", "-", "-", "-", "-", "-", "-", "-", "41") },
                ],
            },
        ],
        eResources:
            "E-RESOURCES: IEEE ASPP + POP ALL, SCC Online, Hein Online, AIR Online, EBSCO- Business Source Elite, NDLI, NPTEL,DELNET, DSPACE, EBC Reader",
    },

    menu: [/* same menu data you pass to AboutLibrary */],
};

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <CollectionsLibrary data={local_data.collections} />
        </>
    );
}