import InnerHero from "@/components/layout/common/InnerHero";
import OurTeamLibrary from "@/components/sections/library/OurTeamLibrary";

const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Overview page title",
        metaDescription: "Overview page description ",
        canonicalUrl: null,
    },
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
        ],
    },

    ourTeam: {
        title: "Our Team",
        groups: [
            {
                title: "Chief Librarian",
                members: [
                    {
                        name: "Dr. Johnson C. David,",
                        qualification: "M.L.I.Sc., M.Phil., Ph.D, M.I.S.T.E",
                        designation: "Chief Librarian",
                        contactFor: "Administration and Services",
                        phone: "080-49092920",
                        email: "libdavid@yahoo.co.in",
                        photo: { url: "/images/library/team-1.jpg" },
                    },
                ],
            },
            {
                title: "School of Engineering",
                members: [
                    {
                        name: "Mr. Ambaresh H",
                        qualification: "M.L.I.Sc",
                        designation: "Assistant Librarian, SoE, DSU",
                        contactFor: "All Queries related to SOE Library",
                        phone: "7411616995",
                        email: "ambaresh-library@dsu.edu.in",
                        photo: { url: "/images/library/team-2.jpg" },
                    },
                    {
                        name: "Mr. Mahesh Gouripur,",
                        qualification: "M.L.I.Sc.",
                        designation: "Assistant Librarian, SoE, DSU",
                        contactFor: "Digital Library, OPAC and E-Resources",
                        phone: "7411616995",
                        email: "maheshgouripur-library@dsu.edu.in",
                          photo: { url: "/images/library/team-3.jpg" },
                    },
                    {
                        name: "Ms. Joicy Joseph",
                        qualification: "M.L.I.Sc., NET",
                        designation: "Assistant Librarian, SoE, DSU",
                        contactFor: "Circulation, ILL and Library Membership",
                        phone: "7411616995",
                        email: "joicy.joseph-library@dsu.edu.in",
                          photo: { url: "/images/library/team-4.jpg" },
                    },
                    {
                        name: "Ms. Priyanka B K",
                        qualification: "M.L.I.Sc",
                        designation: "Assistant Librarian, SoE, DSU",
                        contactFor: "Periodical Section and Reference Section",
                        phone: "7411616995",
                        email: "priyanka.bk-library@dsu.edu.in",
                          photo: { url: "/images/library/team-5.jpg" },
                    },
                    {
                        name: "Ms. Anusha K C",
                        qualification: "M.L.I.Sc",
                        designation: "Library Assistant, SOE, DSU",
                        contactFor: "Circulation",
                        phone: "7411616995",
                        email: "anusha.kc-library@dsu.edu.in",
                          photo: { url: "/images/library/team-6.jpg" },
                    },
                ],
            },
            {
                title: "DSU City Innovation Campus",
                members: [
                    {
                        name: "Mr. Shivappa,",
                        qualification: "M.L.I.Sc",
                        designation: "Library Assistant, Innovation Campus, DSU",
                        contactFor: "Print Journals and Book Acquisition",
                        phone: "080-49092921",
                        email: "shivabh-library@dsu.edu.in",
                         photo: { url: "/images/library/team-7.jpg" },
                    },
                    {
                        name: "Ms. Ramya G,",
                        qualification: "D.L.I.Sc",
                        designation: "Library Assistant, Innovation Campus, DSU",
                        contactFor: "Circulation, ILL and Library Membership",
                        phone: "080-49092921",
                        email: "ramya.g-library@dsu.edu.in",
                       photo: { url: "/images/library/team-8.jpg" },
                    },
                    {
                        name: "Ms. Nikhitha M N",
                        qualification: "M.L.I.Sc",
                        designation: "Library Assistant, Innovation Campus, DSU",
                        contactFor: "Circulation",
                        phone: "080-49092921",
                        email: "nikhitha.mn-library@dsu.edu.in",
                          photo: { url: "/images/library/team-9.jpg" },
                    },
                    {
                        name: "Mr. Nagarjuna Y K",
                        qualification: "M.L.I.Sc",
                        designation: "Assistant Librarian, Innovation Campus, DSU",
                        contactFor: "Digital Library, Reference Section & E-Learning",
                        phone: "080-49092921",
                        email: "nagarjuna.yk-library@dsu.edu.in",
                          photo: { url: "/images/library/team-10.jpg" },
                    },
                ],
            },
            {
                title: "College of Nursing Sciences",
                members: [
                    {
                        name: "Ms. Kavya H J,",
                        qualification: "M.Sc. (L.I.Sc.), M.Phil.",
                        designation: "Librarian, College of Nursing Sciences,",
                        contactFor: "All Queries related to Nursing Library",
                        phone: "080-42161760",
                        email: "kavyahj@gmail.com",
                       photo: { url: "/images/library/team-11.jpg" },
                    },
                ],
            },
            {
                title: "College of Pharmaceutical Sciences",
                members: [
                    {
                        name: "Mr. Vithal Naragund,",
                        qualification: "M.L.I. Sc.",
                        designation: "Asst. Librarian, College of Pharmaceutical Sciences",
                        contactFor: "All Queries related to Pharmacy Library",
                        phone: "9986363009",
                        email: "vithalnaragund@gmail.com",
                         photo: { url: "/images/library/team-12.jpg" },
                    },
                ],
            },
            {
                title: "College of Physiotherapy",
                members: [
                    {
                        name: "Ms. Megha MS",
                        qualification: "M.L.I.Sc",
                        designation: "Assistant Librarian, College of Physiotherapy Library",
                        contactFor: "All Queries of College of Physiotherapy Library",
                        email: "megha-physio@dsu.edu.in",
                          photo: { url: "/images/library/team-13.jpg" },
                    },
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
            <OurTeamLibrary data={local_data.ourTeam} />
        </>
    );
}