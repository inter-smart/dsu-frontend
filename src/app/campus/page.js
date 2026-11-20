import CampusFacilities from "@/components/sections/campus/CampusFacilities";
import CampusGreen from "@/components/sections/campus/CampusGreen";
import CampusHero from "@/components/sections/campus/CampusHero";
import CampusLocations from "@/components/sections/campus/CampusLocations";
import CampusOverview from "@/components/sections/campus/CampusOverview";
import CampusSmart from "@/components/sections/campus/CampusSmart";
import CampusSustainability from "@/components/sections/campus/CampusSustainability";


const local_data = {
    id: 31,
    documentId: "campus_page_document_id",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 28,
        metaTitle: "campus page title",
        metaDescription: "campus page description",
        canonicalUrl: null,
    },

    campusHero: {
        id: 1,
        heroMedia: {
            alternativeText: "Dayananda Sagar University campus",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/campus/campus.jpg",
        },
        title: "A Smart, Sustainable Campus for the Future",
        description:
            "A campus designed to bring learning, discovery and responsible living together — creating an environment where people and ideas can thrive.",
        virtualTour: {
            label: "Virtual Tour",
            href: "https://example.com/virtual-tour",
            target: "_blank",
            thumbnail: {
                alternativeText: "360 degree view of the campus",
                mime: "image/jpg",
                url: "/images/campus/campusBanner-1.jpg",
            },
        },
    },
    campusOverview: {
        id: 1,
        eyebrow: "Overview",
        title: "A Campus Designed for Learning & Discovery",
        description: [
            "Dayananda Sagar University’s main campus at Harohalli provides an academic environment supported by modern campus infrastructure, learning spaces and student facilities.",
            "The campus brings together academic, research, healthcare, residential and recreational facilities, supporting the educational and personal development of its community.",
        ],
        items: [
            {
                id: 1,
                type: "image", // image | video | youtube
                size: "narrow", // narrow | wide
                caption: "Main academic block",
                thumbnail: {
                    alternativeText: "DSU main academic block",
                    mime: "image/jpg",
                    url: "/images/campus/campus-1.jpg",
                },
                media: {
                    mime: "image/jpg",
                    url: "/images/campus/campus-1.jpg",
                },
            },
            {
                id: 2,
                type: "video", // uploaded video (mp4)
                size: "narrow",
                caption: "Campus preview",
                thumbnail: {
                    alternativeText: "Aerial view of the campus",
                    mime: "image/jpg",
                    url: "/images/campus/campus-2.jpg",
                },
                media: {
                    mime: "video/mp4",
                    url: "/videos/campus-2.mp4",
                },
            },
            {
                id: 3,
                type: "image",
                size: "wide",
                caption: "Student life at DSU",
                thumbnail: {
                    alternativeText: "Students outside the academic block",
                    mime: "image/jpg",
                    url: "/images/campus/campus-3.jpg",
                },
                media: {
                    mime: "image/jpg",
                    url: "/images/campus/campus-3.jpg",
                },
            },
            // YouTube example (add more items and the slider starts scrolling):
            // {
            //   id: 4,
            //   type: "youtube",
            //   size: "narrow",
            //   caption: "Campus tour",
            //   thumbnail: {
            //     alternativeText: "Campus tour video",
            //     mime: "image/jpg",
            //     url: "/images/campus/overview-youtube.jpg",
            //   },
            //   media: {
            //     mime: "video/youtube",
            //     url: "https://www.youtube.com/watch?v=VIDEO_ID",
            //   },
            // },
        ],
    },

    campusSmart: {
        id: 1,
        eyebrow: "Smart Campus",
        title: "Building an Intelligent and Connected Campus",
        description: [
            "DSU has initiated the Smart Campus Initiative in collaboration with Siemens to support the development of intelligent, efficient and technology-enabled campus operations.",
            "The initiative focuses on smart energy management, intelligent building systems, safety, surveillance and data-driven campus operations. It is intended to improve the way campus infrastructure and resources are monitored and managed, supporting a more efficient and responsive campus environment.",
        ],
        button: {
            label: "Explore",
            href: "/smart-campus",
        },
        // each slide = one wide + one narrow tile, fades to the next slide
        // tile type: image | video (uploaded mp4) | youtube
        slides: [
            {
                id: 1,
                items: [
                    {
                        id: 1,
                        type: "image",
                        size: "wide",
                        caption: "DSU and Siemens Smart Campus Initiative",
                        thumbnail: {
                            alternativeText: "DSU and Siemens team at the Smart Campus launch",
                            mime: "image/jpg",
                            url: "/images/campus/smart-1.jpg",
                        },
                        media: {
                            mime: "image/jpg",
                            url: "/images/campus/smart-1.jpg",
                        },
                    },
                    {
                        id: 2,
                        type: "image",
                        size: "narrow",
                        caption: "Smart lecture hall",
                        thumbnail: {
                            alternativeText: "Smart lecture hall with modern lighting",
                            mime: "image/jpg",
                            url: "/images/campus/smart-2.jpg",
                        },
                        media: {
                            mime: "image/jpg",
                            url: "/images/campus/smart-2.jpg",
                        },
                    },
                ],
            },
            {
                id: 2,
                items: [
                    {
                        id: 3,
                        type: "video", // uploaded video (mp4)
                        size: "wide",
                        caption: "Smart Campus overview",
                        thumbnail: {
                            alternativeText: "Smart campus control room",
                            mime: "image/jpg",
                            url: "/images/campus/campus-3.jpg",
                        },
                        media: {
                            mime: "video/mp4",
                            url: "/videos/smart-campus.mp4",
                        },
                    },
                    {
                        id: 4,
                        type: "youtube",
                        size: "narrow",
                        caption: "Smart Campus tour",
                        thumbnail: {
                            alternativeText: "Smart Campus tour video",
                            mime: "image/jpg",
                            url: "/images/campus/campus-2.jpg",
                        },
                        media: {
                            mime: "video/youtube",
                            url: "https://www.youtube.com/watch?v=VIDEO_ID",
                        },
                    },
                ],
            },
        ],
    },

    // one component renders all of these sections
    // background: "white" | "blue" (optional, alternates by order if missing)
    // item type: image | video (uploaded mp4) | youtube
    // item title is optional (shows over a bottom gradient)
    // for images, media is optional (thumbnail is used in the lightbox)
    campusFacilities: {
        sections: [
            {
                id: 1,
                background: "white",
                eyebrow: "Academic Infrastructure",
                title: "Infrastructure that Supports Learning",
                description:
                    "DSU provides academic infrastructure to support classroom learning, practical training and collaborative academic activities. The University’s campus includes classrooms, laboratories and learning spaces that support its multidisciplinary academic programmes.",
                button: {
                    label: "Explore",
                    href: "/campus/academic-infrastructure",
                },
                items: [
                    {
                        id: 1,
                        type: "image",
                        thumbnail: { alternativeText: "Lecture hall with tiered desks", mime: "image/jpg", url: "/images/campus/camp-1.jpg" },
                    },
                    {
                        id: 2,
                        type: "image",
                        title: "Laboratories",
                        thumbnail: { alternativeText: "Computer laboratory with students", mime: "image/jpg", url: "/images/campus/camp-2.jpg" },
                    },
                    {
                        id: 3,
                        type: "image",
                        thumbnail: { alternativeText: "Student using a VR headset", mime: "image/jpg", url: "/images/campus/camp-3.jpg" },
                    },
                    {
                        id: 4,
                        type: "image",
                        thumbnail: { alternativeText: "Amphitheatre style classroom", mime: "image/jpg", url: "/images/campus/camp-4.jpg" },
                    },
                    {
                        id: 5,
                        type: "video", // uploaded video (mp4)
                        title: "Campus Walkthrough",
                        thumbnail: { alternativeText: "Academic block walkthrough", mime: "image/jpg", url: "/images/campus/camp-5.jpg" },
                        media: { mime: "video/mp4", url: "/videos/camp-infrastructure.mp4" },
                    },
                    {
                        id: 6,
                        type: "youtube",
                        title: "Learning Spaces",
                        thumbnail: { alternativeText: "Learning spaces video", mime: "image/jpg", url: "/images/campus/camp-6.jpg" },
                        media: { mime: "video/youtube", url: "https://www.youtube.com/watch?v=VIDEO_ID" },
                    },
                ],
            },
            {
                id: 2,
                background: "blue",
                eyebrow: "Research Infrastructure",
                title: "Facilities that Support Research & Innovation",
                description:
                    "DSU supports research and innovation through specialised laboratories, research facilities and academic-industry engagement. The University encourages interdisciplinary research and the development of practical solutions to emerging technological and societal challenges.",
                button: {
                    label: "Explore",
                    href: "/campus/research-infrastructure",
                },
                items: [
                    {
                        id: 1,
                        type: "image",
                        thumbnail: { alternativeText: "Researcher working beside a microscope", mime: "image/jpg", url: "/images/campus/camp-7.jpg" },
                    },
                    {
                        id: 2,
                        type: "image",
                        thumbnail: { alternativeText: "Students observing a biosafety cabinet", mime: "image/jpg", url: "/images/campus/camp-8.jpg" },
                    },
                    {
                        id: 3,
                        type: "image",
                        thumbnail: { alternativeText: "High performance computing racks", mime: "image/jpg", url: "/images/campus/camp-9.jpg" },
                    },
                    {
                        id: 4,
                        type: "image",
                        thumbnail: { alternativeText: "Drone research lab", mime: "image/jpg", url: "/images/campus/camp-10.jpg" },
                    },
                    // add video / youtube items here (see the first section)
                ],
            },
            {
                id: 3,
                background: "white",
                eyebrow: "Libraries",
                title: "Learning Resources & Knowledge Centres",
                description:
                    "The University’s library facilities support academic learning, teaching and research by providing access to learning resources and study spaces for students and faculty.",
                button: {
                    label: "Explore",
                    href: "/library",
                },
                items: [
                    {
                        id: 1,
                        type: "image",
                        thumbnail: { alternativeText: "Library book stacks", mime: "image/jpg", url: "/images/campus/camp-11.jpg" },
                    },
                    {
                        id: 2,
                        type: "image",
                        thumbnail: { alternativeText: "Student reading in a library aisle", mime: "image/jpg", url: "/images/campus/camp-12.jpg" },
                    },
                    {
                        id: 3,
                        type: "image",
                        thumbnail: { alternativeText: "Library reading hall with lounge seating", mime: "image/jpg", url: "/images/campus/camp-13.jpg" },
                    },
                    {
                        id: 4,
                        type: "image",
                        thumbnail: { alternativeText: "Library study hall", mime: "image/jpg", url: "/images/campus/camp-14.jpg" },
                    },
                    // add video / youtube items here (see the first section)
                ],
            },
            {
                id: 4,
                background: "blue",
                eyebrow: "Hostel & Dining",
                title: "Residential Facilities & Dining",
                description:
                    "DSU provides hostel accommodation for students, along with dining facilities that support campus residential life. The University’s sustainability assessment also records the availability of affordable student hostel accommodation.",
                button: {
                    label: "Explore",
                    href: "/hostel",
                },
                items: [
                    {
                        id: 1,
                        type: "image",
                        thumbnail: { alternativeText: "Student residences entrance", mime: "image/jpg", url: "/images/campus/camp-15.jpg" },
                    },
                    {
                        id: 2,
                        type: "image",
                        thumbnail: { alternativeText: "Dining and lounge area", mime: "image/jpg", url: "/images/campus/camp-16.jpg" },
                    },
                    {
                        id: 3,
                        type: "image",
                        thumbnail: { alternativeText: "Hostel towers seen from below", mime: "image/jpg", url: "/images/campus/camp-17.jpg" },
                    },
                    {
                        id: 4,
                        type: "image",
                        thumbnail: { alternativeText: "Hostel corridor", mime: "image/jpg", url: "/images/campus/camp-18.jpg" },
                    },
                    // add video / youtube items here (see the first section)
                ],
            },
            {
                id: 5,
                background: "white",
                eyebrow: "Sports Facilities",
                title: "Sports and Recreation",
                description:
                    "DSU provides sports and recreational facilities that encourage students to participate in physical activities and develop teamwork, discipline and sportsmanship.",
                button: {
                    label: "Explore",
                    href: "/sports",
                },
                items: [
                    {
                        id: 1,
                        type: "image",
                        thumbnail: { alternativeText: "Student running on the athletics track", mime: "image/jpg", url: "/images/campus/camp-19.jpg" },
                    },
                    {
                        id: 2,
                        type: "image",
                        thumbnail: { alternativeText: "Students playing on a floodlit court", mime: "image/jpg", url: "/images/campus/camp-20.jpg" },
                    },
                    {
                        id: 3,
                        type: "image",
                        thumbnail: { alternativeText: "Gym with treadmills", mime: "image/jpg", url: "/images/campus/camp-21.jpg" },
                    },
                    {
                        id: 4,
                        type: "image",
                        thumbnail: { alternativeText: "Students playing football", mime: "image/jpg", url: "/images/campus/camp-22.jpg" },
                    },
                    // add video / youtube items here (see the first section)
                ],
            },
            {
                id: 6,
                background: "blue",
                eyebrow: "Healthcare Facilities",
                title: "Healthcare & Campus Well-being",
                description:
                    "Access to healthcare is an important part of the DSU campus environment. The Siemens Advanta assessment records comprehensive on-campus healthcare facilities and identifies the University’s hospital and medical infrastructure as an existing strength.",
                button: {
                    label: "Explore",
                    href: "/healthcare",
                },
                items: [
                    {
                        id: 1,
                        type: "image",
                        thumbnail: { alternativeText: "Hospital emergency entrance", mime: "image/jpg", url: "/images/campus/camp-20.jpg" },
                    },
                    {
                        id: 2,
                        type: "image",
                        thumbnail: { alternativeText: "Hospital ward with medical staff", mime: "image/jpg", url: "/images/campus/camp-21.jpg" },
                    },
                    {
                        id: 3,
                        type: "image",
                        thumbnail: { alternativeText: "Cardiac catheterisation laboratory", mime: "image/jpg", url: "/images/campus/camp-22.jpg" },
                    },
                    {
                        id: 4,
                        type: "image",
                        thumbnail: { alternativeText: "Students in a yoga session", mime: "image/jpg", url: "/images/campus/camp-23.jpg" },
                    },
                    // add video / youtube items here (see the first section)
                ],
            },
        ],
    },
    campusGreen: {
        eyebrow: "Green Campus",
        description: [
            "DSU promotes a campus environment that values green spaces, responsible resource use and environmentally conscious practices. Landscaping, pedestrian-friendly pathways and the use of bicycles or battery-powered vehicles form part of the green campus initiatives reported to NAAC.",
            "The University is working towards its Net Zero Campus vision through initiatives focused on energy efficiency, water conservation, waste management and renewable energy integration.",
        ],
        button: {
            label: "Explore",
            href: "/green-campus",
        },
        background: {
            alternativeText: "DSU academic block at dusk",
            mime: "image/jpg",
            url: "/images/campus/greenBanner.jpg",
        },
        title: "A Greener Campus Environment",
        slides: [
            {
                id: 1,
                items: [
                    {
                        id: 1,
                        thumbnail: {
                            alternativeText: "Twin towers with landscaped gardens",
                            mime: "image/jpg",
                            url: "/images/campus/greenBanner-1.jpg",
                        },
                    },
                    {
                        id: 2,
                        thumbnail: {
                            alternativeText: "Tree-lined campus road",
                            mime: "image/jpg",
                            url: "/images/campus/greenBanner-2.jpg",
                        },
                    },
                    {
                        id: 3,
                        thumbnail: {
                            alternativeText: "Open lawns and auditorium",
                            mime: "image/jpg",
                            url: "/images/campus/greenBanner-3.jpg",
                        },
                    },
                    {
                        id: 4,
                        thumbnail: {
                            alternativeText: "Main building lit up in the evening",
                            mime: "image/jpg",
                            url: "/images/campus/greenBanner-4.jpg",
                        },
                    },
                ],
            },
            {
                id: 2,
                items: [
                    {
                        id: 1,
                        thumbnail: {
                            alternativeText: "Solar panels on the campus roof",
                            mime: "image/jpg",
                            url: "/images/campus/greenBanner-3.jpg",
                        },
                    },
                    {
                        id: 2,
                        thumbnail: {
                            alternativeText: "Rainwater harvesting",
                            mime: "image/jpg",
                            url: "/images/campus/greenBanner-4.jpg",
                        },
                    },
                    {
                        id: 3,
                        thumbnail: {
                            alternativeText: "Waste segregation point",
                            mime: "image/jpg",
                            url: "/images/campus/greenBanner-1.jpg",
                        },
                    },
                    {
                        id: 4,
                        thumbnail: {
                            alternativeText: "Battery-powered campus vehicle",
                            mime: "image/jpg",
                            url: "/images/campus/greenBanner-2.jpg",
                        },
                    },
                ],
            },
        ],
    },
    campusSustainability: {
        background: "blue", // "white" | "blue"
        eyebrow: "Sustainability Initiatives",
        title: "Advancing Towards a Net Zero Campus by 2030",
        description:
            "The University is working towards its Net Zero Campus vision through initiatives focused on water conservation, energy efficiency, waste management, sustainable mobility and smart campus operations.",
        button: {
            label: "Explore",
            href: "/sustainability",
        },
        badge: {
            alternativeText: "2035 The Net-Zero Commitment",
            mime: "image/png",
            url: "/images/campus/net-zero-logo.png",

        },
        items: [
            {
                id: 1,
                title: "Water Conservation and Management",
                description:
                    "DSU has implemented Sewage Treatment Plants (STP), Effluent Treatment Plants (ETP) and rainwater harvesting systems. The Siemens assessment records the use of treated water and the routing of excess harvested rainwater to a natural water body.",
                thumbnail: {
                    alternativeText: "Sewage treatment plant on campus",
                    mime: "image/jpg",
                    url: "/images/campus/net-zero-1.jpg",
                },
            },
            {
                id: 2,
                title: "Energy Efficiency",
                description:
                    "The University has implemented energy-saving measures, replacing induction fans with BLDC fans and using motion lighting. A solar plant project was also in progress during the assessment.",
                thumbnail: {
                    alternativeText: "Classroom with BLDC ceiling fans",
                    mime: "image/jpg",
                    url: "/images/campus/net-zero-2.jpg",
                },
            },
            {
                id: 3,
                title: "Waste Management",
                description:
                    "Waste segregation is done on campus. Organic waste is composted, while medical and hazardous waste is managed by third parties. Corporate partnerships for e-waste are also noted.",
                thumbnail: {
                    alternativeText: "Staff segregating organic waste for composting",
                    mime: "image/jpg",
                    url: "/images/campus/net-zero-3.jpg",
                },
            },
            {
                id: 4,
                title: "Sustainable Mobility",
                description:
                    "Electric vehicles, including campus buggies and a patrolling vehicle, are used for campus mobility. DSU's green campus practices also include the use of bicycles or battery-powered vehicles.",
                thumbnail: {
                    alternativeText: "Electric buggy on a tree-lined campus road",
                    mime: "image/jpg",
                    url: "/images/campus/net-zero-4.jpg",
                },
            },
            {
                id: 5,
                title: "Smart Campus and Digitalisation",
                description:
                    "Through its collaboration with Siemens, DSU is pursuing smart energy management, intelligent building systems and data-driven campus operations.",
                thumbnail: {
                    alternativeText: "Smart campus control room with video wall",
                    mime: "image/jpg",
                    url: "/images/campus/net-zero-5.jpg",
                },
            },
        ],
    },
    campusLocations: {
        eyebrow: "Explore DSU Locations",
        title: "More Campuses. One Vision.",
        description: "A glimpse of DSU’s other Bengaluru locations.",
        button: {
            label: "View More",
            href: "/campus/locations",
        },
        // each tab = one location; each slide = one mosaic of 5 tiles
        // tile type: image | video (uploaded mp4) | youtube
        // tile title is optional (shows over a bottom gradient)
        // for images, media is optional (thumbnail is used in the lightbox)
        tabs: [
            {
                id: 1,
                label: "City Innovation Campus",
                slides: [
                    {
                        id: 1,
                        items: [
                            {
                                id: 1,
                                type: "image",
                                thumbnail: { alternativeText: "City Innovation Campus building", mime: "image/jpg", url: "/images/campus/location-1.jpg" },
                            },
                            {
                                id: 2,
                                type: "image",
                                thumbnail: { alternativeText: "Students sitting together with a laptop", mime: "image/jpg", url: "/images/campus/location-2.jpg" },
                            },
                            {
                                id: 3,
                                type: "image",
                                thumbnail: { alternativeText: "Student standing outside the campus", mime: "image/jpg", url: "/images/campus/location-3.jpg" },
                            },
                            {
                                id: 4,
                                type: "image",
                                thumbnail: { alternativeText: "Computer lab with students", mime: "image/jpg", url: "/images/campus/location-4.jpg" },
                            },
                            {
                                id: 5,
                                type: "image",
                                thumbnail: { alternativeText: "Student reading in the library", mime: "image/jpg", url: "/images/campus/location-5.jpg" },
                            },
                        ],
                    },

                ],
            },
            {
                id: 2,
                label: "City Admissions Office",
                slides: [
                    {
                        id: 1,
                        items: [
                            {
                                id: 1,
                                type: "image",
                                thumbnail: { alternativeText: "Admissions office exterior", mime: "image/jpg", url: "/images/campus/location-1.jpg" },
                            },
                            {
                                id: 2,
                                type: "image",
                                thumbnail: { alternativeText: "Admissions reception area", mime: "image/jpg", url: "/images/campus/location-2.jpg" },
                            },
                            {
                                id: 3,
                                type: "image",
                                thumbnail: { alternativeText: "Counsellor with a student", mime: "image/jpg", url: "/images/campus/location-3.jpg" },
                            },
                            {
                                id: 4,
                                type: "image",
                                thumbnail: { alternativeText: "Counselling room", mime: "image/jpg", url: "/images/campus/location-4.jpg" },
                            },
                            {
                                id: 5,
                                type: "image",
                                thumbnail: { alternativeText: "Parents attending an admissions session", mime: "image/jpg", url: "/images/campus/location-5.jpg" },
                            },
                        ],
                    },
                ],
            },
        ],
    },
    campusAccessibility: {
        sections: [
            {
                id: 1,
                background: "white",
                eyebrow: "Accessibility",
                title: "An Accessible & Inclusive Campus",
                description:
                    "DSU is committed to providing an accessible campus environment that supports the participation and mobility of students, faculty, staff and visitors. The University’s NAAC report records accessibility provisions such as ramps and lifts for access to classrooms and centres.",
                button: {
                    label: "Explore",
                    href: "/campus/accessibility",
                },
                items: [
                    {
                        id: 1,
                        type: "image",
                        thumbnail: { alternativeText: "Glass lifts in a marble-clad atrium", mime: "image/jpg", url: "/images/campus/accesibility-1.jpg" },
                    },
                    {
                        id: 2,
                        type: "image",
                        thumbnail: { alternativeText: "Student using a touch screen kiosk", mime: "image/jpg", url: "/images/campus/accesibility-2.jpg" },
                    },
                    {
                        id: 3,
                        type: "image",
                        thumbnail: { alternativeText: "Wide, level corridor with smooth flooring", mime: "image/jpg", url: "/images/campus/accesibility-3.jpg" },
                    },
                    {
                        id: 4,
                        type: "image",
                        thumbnail: { alternativeText: "Visitor waiting at the lift lobby", mime: "image/jpg", url: "/images/campus/accesibility-4.jpg" },
                    },
                    {
                        id: 5,
                        type: "image",
                        thumbnail: { alternativeText: "Ramp access to the academic block", mime: "image/jpg", url: "/images/campus/accesibility-5.jpg" },
                    },
                    {
                        id: 5,
                        type: "image",
                        thumbnail: { alternativeText: "Ramp access to the academic block", mime: "image/jpg", url: "/images/campus/security-2.jpg" },
                    },
                    // add video / youtube items here (see campusFacilities)
                ],
            },
            {
                id: 2,
                background: "blue",
                eyebrow: "Campus Safety & Security",
                title: "A Safe & Secure Campus Environment",
                description:
                    "DSU recognises campus safety and security as important aspects of the student and staff experience. The Smart Campus Initiative with Siemens includes safety and surveillance among its focus areas.",
                button: {
                    label: "Explore",
                    href: "/campus/safety-security",
                },
                items: [
                    {
                        id: 1,
                        type: "image",
                        thumbnail: { alternativeText: "Security guards patrolling an indoor meeting area", mime: "image/jpg", url: "/images/campus/security-1.jpg" },
                    },
                    {
                        id: 2,
                        type: "image",
                        thumbnail: { alternativeText: "Access control gates with face recognition readers", mime: "image/jpg", url: "/images/campus/security-2.jpg" },
                    },
                    {
                        id: 3,
                        type: "image",
                        thumbnail: { alternativeText: "Medical imaging suite with monitors and examination table", mime: "image/jpg", url: "/images/campus/security-3.jpg" },
                    },
                    {
                        id: 4,
                        type: "image",
                        thumbnail: { alternativeText: "Student in a group wellness session", mime: "image/jpg", url: "/images/campus/security-4.jpg" },
                    },
                    {
                        id: 5,
                        type: "image",
                        thumbnail: { alternativeText: "Surveillance control room", mime: "image/jpg", url: "/images/campus/accesibility-1.jpg" },
                    },
                    // add video / youtube items here (see campusFacilities)
                ],
            },
        ],
    },
};

export default function page() {
    return (
        <>
            <CampusHero data={local_data.campusHero} />
            <CampusOverview data={local_data.campusOverview} />
            <CampusSmart data={local_data.campusSmart} />
            <CampusFacilities data={local_data.campusFacilities} />
            <CampusGreen data={local_data.campusGreen} />
            <CampusSustainability data={local_data.campusSustainability} />
            <CampusFacilities data={local_data.campusAccessibility} />
            <CampusLocations data={local_data.campusLocations} />
        </>
    );
}

export const metadata = {
    title: "Campus | Dayananda Sagar University",
    description: "Campus – A smart, sustainable campus at Dayananda Sagar University.",
};