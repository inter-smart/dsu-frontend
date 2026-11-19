import InnerHero from "@/components/layout/common/InnerHero";
import AboutLibrary from "@/components/sections/library/About-Library";

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
        ],
    },
    library: {
        id: 1,
        title: "About Library",
        image: {
            alternativeText: "Student picking a book from the library shelves",
            mime: "image/jpg",
            url: "/images/library/academic-banner.jpg",
        },
        notice: {
            linkLabel: "For E-Resources Click Here...",
            linkUrl: "#!",
            isExternal: false,
            text: "Faculty members and students of DSU are here by informed to note that, the DSU library has made additional services in access to online resources.",
        },
        description: [
            "The library came into existence with the establishment of DSI and further expanded with the genesis of the Dayananda Sagar Institutions in the year 1969, Dayananda Sagar College of Engineering in 1979 and Dayananda Sagar University in 2014. Late Sri R. Dayananda Sagar, founder of the Dayananda Sagar group, took special interest in establishing a world class Library. The library is built and equipped steadily and systematically. The Library has a seating capacity of 560 students at a time.",
            "Books are chief instrument of education and Library is the center of intellectual life. Dayananda Sagar University takes pride in building good and comprehensive Library with most modern facilities catering to the academic needs of the students and teaching community.",
            "The Library has a huge collection of books, CD's and DVD's apart from latest periodicals with access to online resources through the Digital Library. The achievements are reflecting through the acknowledgements and positive remarks by the visiting faculties and dignitaries. The intellectual standards are truly reflected in its high standard Library. Library is accessible to all Undergraduates, Postgraduates, Research Scholars & faculty members. Library consists of skilled, professional and compassionate library staff members who are always pleased to help the users.",
        ],
        constituent: {
            title: "Constituent Libraries",
            // listed row by row: left column, right column, left column, right column ...
            items: [
                { id: 1, label: "School of Engineering", url: "#!" },
                { id: 2, label: "School of Computer Application", url: "#!" },
                { id: 3, label: "School of Commerce & Management Studies", url: "#!" },
                { id: 4, label: "College of Journalism & Mass Communication", url: "#!" },
                { id: 5, label: "School of Law", url: "#!" },
                { id: 6, label: "School of Basic & Applied Sciences", url: "#!" },
                { id: 7, label: "School of Basic & Applied Sciences", url: "#!" },
                { id: 8, label: "College of Pharmaceutical Sciences", url: "#!" },
                { id: 9, label: "College of Physiotherapy", url: "#!" },
                { id: 10, label: "College of Nursing Sciences", url: "#!" },
            ],
        },
    },
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AboutLibrary data={local_data.library} />
        </>
    )
}