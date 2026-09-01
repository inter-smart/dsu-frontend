import InnerHero from "@/components/layout/common/InnerHero"
import DSUAct from "@/components/sections/why-us/DSU-act"
import DSUOmbudsman from "@/components/sections/why-us/DSU-Ombudsman"


const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Ombudsman page title",
        metaDescription: "Ombudsman page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Ombudsman",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/ugc/ugc-banner.jpg",
        },
        title: "Ombudsman",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "Why DSU",
                href: "/why-dsu",
            },
            {
                label: "Student Support & Welfares",
                href: "/",
            },
            {
                label: "Ombudsman",
                href: "/",
            },
        ],
    },
    ombudsmanMessage: {
        title: "Ombudsman" ,
        name: "Prof P Subrahmanya Yadapadithaya",
        designation: "Former Vice Chancellor, Mangalore University",
        email: "vadapadithayaps@gmail.com",
        phone: "9449207503",
        linkText: "View Detailed Biodata",
        linkUrl: "#",
        image: {
            url: "/images/ombudsman.jpg",
            alternativeText: "Dayananda Sagar University",
        },
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Prof. P. Subrahmanya Yadapadithaya is a distinguished academician and administrator with over four decades of experience in higher education, academic governance, and institutional leadership. He served as the Vice Chancellor of Mangalore University from 2019 to 2023 and has played a pivotal role in advancing quality education and university administration."
                    },
                    
                ],
            },
            {
                type: "paragraph",
                children: [
                    
                    {
                        type: "text",
                        text: "Throughout his illustrious career, he has held several key positions including Registrar (Administration), Registrar (Evaluation), Finance Officer, Dean of the Faculty of Commerce, and Chairman of various academic and statutory bodies. "
                    }, 
                ],
            },
            {
                type: "paragraph",
                children: [
                    
                    {
                        type: "text",
                        text: "His contributions have significantly strengthened academic excellence, institutional development, and governance practices in higher education."
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    
                    {
                        type: "text",
                        text: "A recipient of academic distinction from his student days, Prof. Yadapadithaya earned his Ph.D. from Mangalore University and has been actively involved in accreditation, quality assurance, policy development, and educational reforms. His vast experience and commitment to academic integrity make him a respected figure in the field of higher education."
                    },
                ],
            },
        ], 
    }
   
}
export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} /> 
            <DSUOmbudsman data={local_data.ombudsmanMessage} />
        </>
    )
}
