import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import DeanMessage from "@/components/sections/academics/dean-message";


const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "Academic page title",
        metaDescription: "Academic page description ",
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
        title: "School of Computer Applications",
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
                label: "Schools",
                href: "/",
            },
            {
                label: "Computer Applications",
                href: "/",
            },
            {
                label: "Dean's message",
                href: "/",
            },
        ],
        menuBar: true
    },

    messageFromDean: {
        heading: "A Message from Our Dean",
        media: {
            alternativeText: "Dr. S. Senthil, Professor & Dean, School of Computer Applications",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/dean.jpg",
        },
        featuredPerson: {
            name: "Dr. S. Senthil.",
            designation: "Professor & Dean, School of Computer Applications.",
            institution: "Dayananda Sagar University, Bengaluru.",
        },
        quote: {
            text: "The best way to predict the future is to create it.",
            author: "Peter Drucker",
        },
        message: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Welcome to the School of Computer Applications, where we are committed to fostering future leaders in computer science through a holistic and innovative educational approach. Our mission is to provide students with a rigorous curriculum, world-class facilities, and unparalleled support to excel in academia, research, and industry.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our comprehensive curriculum, designed to stay at the forefront of technological advancements, blends traditional and contemporary teaching methods, including lectures, hands-on labs, workshops, and industry collaborations.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "As Steve Jobs once said, \"Innovation distinguishes between a leader and a follower,\" and we strive to instill this spirit of innovation in our students. Our dedication to research and innovation is reflected in our state-of-the-art facilities and active engagement in pioneering projects, offering students ample opportunities to participate in research groups, attend conferences, and publish their findings. We echo Albert Einstein's belief that \"Education is not the learning of facts, but the training of the mind to think,\" by emphasizing critical thinking, problem-solving, and creativity.",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Additionally, our world-class infrastructure, featuring modern classrooms, well-equipped laboratories, a vast library, and collaborative spaces, creates an optimal learning environment.",
                    },
                ],
            },
            
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our robust Training and Placement Cell bridges the gap between academia and industry, providing extensive training programs, workshops, internships, and a wide array of placement opportunities. With a consistent record of high placement rates and successful alumni, we are reminded of Henry Ford's words, \"Coming together is a beginning; keeping together is progress; working together is success.\"",
                    },
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "We invite you to explore the exciting opportunities at the Department of Computer Applications and achieve your aspirations in this dynamic field. Together, let's create a brighter future through innovation, research, and excellence in computer applications.",
                    },
                ],
            },
        ],
        closing: "BEST WISHES !",
    },
    
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <AcademicMenubar className="md:!hidden block" />
            <DeanMessage data={local_data.messageFromDean} />
        </>
    )
}
