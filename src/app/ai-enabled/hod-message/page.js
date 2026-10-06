import InnerHero from "@/components/layout/common/InnerHero";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
import DeanMessage from "@/components/sections/academics/dean-message";


const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "College of Nursing Sciences page title",
        metaDescription: "College of Nursing Sciences ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "Academic page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/academic-banner.jpg",
        },
        title: "College of Nursing Sciences",
        breadcrumb: [
            {
                label: "Home",
                href: "/",
            },
            {
                label: "AI Enabled Academics",
                href: "/",
            },
            {
                label: "School of Health Sciences",
                href: "/",
            },
            {
                label: "College of Nursing Sciences",
                href: "/",
            },
            {
                label: "HoD Message",
                href: "/",
            },
        ],
        AimenuBar: true
    },

    messageFromDean: {
        heading: "A Message from Our HoD",
        media: {
            alternativeText: "Dr. Sharmila J",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/hod.jpg",
        },
        featuredPerson: {
            name: "Dr. Sharmila J",
            designation: "Professor & HOD, Mental Health Nursing",
            institution: "College of Nursing Sciences, DSU",
        },
        quote: {
            text: "Nursing is not just a job; it's a calling to care for others with compassion and dedication.",
            author: "Peter Drucker",
        },
        message: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "It gives me immense pleasure to welcome you to the College of Nursing Sciences, Dayananda Sagar University. Nursing is a noble profession that combines knowledge, compassion, clinical expertise and a strong commitment to patient care.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "At DSU, we are committed to nurturing competent, confident and compassionate nursing professionals through quality education, hands-on clinical training, research and continuous professional development. Our learning environment encourages students to think critically, embrace innovation and uphold the highest standards of ethical and professional practice.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "We believe that every student has the potential to make a meaningful difference in healthcare and society. Through dedicated faculty mentorship, diverse learning opportunities and industry-relevant training, we strive to prepare our students to meet the evolving needs of healthcare with confidence and integrity.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our goal is to empower every student with the confidence and competence to serve with compassion and lead with purpose. Together, we strive to shape the next generation of nursing professionals who contribute meaningfully to the advancement of healthcare.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "I invite you to explore the opportunities at DSU and become part of a community committed to excellence in nursing education and patient care. We also encourage our students to actively engage in research, community health initiatives and collaborative learning, enabling them to develop a deeper understanding of healthcare beyond the classroom. With the guidance of our experienced faculty and access to diverse clinical learning experiences, we aim to foster lifelong learning, leadership and a strong sense of responsibility towards individuals and communities.",
                    },
                ],
            },
           
        ], 
    },
    
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AiAcademicMenubar className="lg:!hidden block" />
            <DeanMessage data={local_data.messageFromDean} />
        </>
    )
}
