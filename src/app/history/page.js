import InnerHero from "@/components/layout/common/InnerHero";
import HistoryDetails from "@/components/sections/history/history-Details";
import HistoryNewpahse from "@/components/sections/history/history-newpahse";
import HistoryPillers from "@/components/sections/history/history-pillers";
import HistoryTimeline from "@/components/sections/history/history-Timeline";


const local_data = {
    id: 24,
    documentId: "a67zp5r21a35cb8qlzrjp54s",
    createdAt: "2026-06-05T05:56:45.609Z",
    updatedAt: "2026-06-11T06:26:08.249Z",
    publishedAt: "2026-06-11T06:26:08.337Z",
    seo: {
        id: 21,
        metaTitle: "about page title",
        metaDescription: "about page description ",
        canonicalUrl: null,
    },
    hero: {
        id: 25,
        heroMedia: {
            alternativeText: "History page title",
            mime: "image/jpg",
            // if video - mime: "video/mp4",
            url: "/images/history/Banner.jpg",
        },
        title: "History",
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
                label: "About DSU",
                href: "/why-dsu/about-dsu",
            },
            {
                label: "History",
                href: "/why-dsu/about-dsu",
            },
        ],

    },
    historyTimeline: {
        title: "Our History of Timeline",
        subtitle: "The Dayananda Sagar Schools and Colleges of Science, Arts and Commerce are pioneering institutions",
        decades: [
            {
                id: "1960-1970",
                decadeLabel: "1960 - 1970",
                events: [
                    {
                        id: 1,
                        title: "1960 – The Beginning",
                        description: "The foundation was laid by Late Sri R. Dayananda Sagar with a vision to make quality education accessible to all."
                    },
                    {
                        id: 2,
                        title: "1963 – Academic Expansion",
                        description: "Introduced new academic programmes to meet growing educational needs."
                    },
                    {
                        id: 3,
                        title: "1965 – Infrastructure Development",
                        description: "Modern classrooms and labs were created to accommodate more students and improve academic experiences."
                    },
                    {
                        id: 4,
                        title: "1968 – Growing Reputation",
                        description: "The institution is recognized for its academic discipline and quality education, attracting learners from the region."
                    },
                    {
                        id: 5,
                        title: "1970 – Solid Education Base",
                        description: "By the decade's end, the institution built a strong academic foundation for future growth."
                    }
                ]
            },
            {
                id: "1970-1980",
                decadeLabel: "1970 - 1980",
                events: [
                    {
                        id: 1,
                        title: "1972 – Science & Arts Wings Launch",
                        description: "Expanded faculties in basic sciences and humanities to promote comprehensive undergraduate education."
                    },
                    {
                        id: 2,
                        title: "1975 – Campus Expansion",
                        description: "Acquired additional land and constructed dedicated modern laboratory blocks and library facilities."
                    },
                    {
                        id: 3,
                        title: "1978 – Professional Education Programs",
                        description: "Introduced diploma courses and specialized technical education programs to empower youth with industry-ready skills."
                    },
                    {
                        id: 4,
                        title: "1980 – Excellence Milestone",
                        description: "Crossed two decades of academic contribution with thousands of graduates serving across Karnataka and India."
                    }
                ]
            },
            {
                id: "1980-1990",
                decadeLabel: "1980 - 1990",
                events: [
                    {
                        id: 1,
                        title: "1982 – Engineering & Technology Foundation",
                        description: "Established Dayananda Sagar College of Engineering, marking a monumental step into professional technical education."
                    },
                    {
                        id: 2,
                        title: "1985 – Dental & Health Sciences Growth",
                        description: "Launched Dayananda Sagar College of Dental Sciences to nurture healthcare professionals and research."
                    },
                    {
                        id: 3,
                        title: "1988 – Pharmacy & Nursing Colleges",
                        description: "Instituted College of Pharmacy and Nursing to fulfill urgent regional needs for medical and pharmaceutical care."
                    },
                    {
                        id: 4,
                        title: "1990 – Multi-Disciplinary Campus Hub",
                        description: "Evolved into one of South India's largest composite education hubs spanning engineering, health, and arts."
                    }
                ]
            },
            {
                id: "1990-2000",
                decadeLabel: "1990 - 2000",
                events: [
                    {
                        id: 1,
                        title: "1992 – Post-Graduate Studies Launch",
                        description: "Introduced Master's degree programs in Engineering, Computer Applications (MCA), and Management (MBA)."
                    },
                    {
                        id: 2,
                        title: "1995 – IT Infrastructure & Digital Labs",
                        description: "Established high-speed campus computer networking and advanced computing centers during the IT revolution."
                    },
                    {
                        id: 3,
                        title: "1998 – International Student Collaborations",
                        description: "Began welcoming international students from over 20 countries, fostering global cultural diversity."
                    },
                    {
                        id: 4,
                        title: "2000 – Millennium Growth Milestone",
                        description: "Celebrated 40 years of educational excellence with an alumni community exceeding 50,000 global professionals."
                    }
                ]
            },
            {
                id: "2000-2010",
                decadeLabel: "2000 - 2010",
                events: [
                    {
                        id: 1,
                        title: "2002 – Research & Doctoral Centers",
                        description: "Recognized as research centers for Ph.D. programs across engineering, biological sciences, and management."
                    },
                    {
                        id: 2,
                        title: "2005 – Innovation & Incubation Cells",
                        description: "Initiated student startup incubators and innovation centers backed by industry leaders in Silicon Valley of India."
                    },
                    {
                        id: 3,
                        title: "2008 – Biological & Health Research Wings",
                        description: "Upgraded research laboratories with state-of-the-art microbiology, biotechnology, and health research setups."
                    },
                    {
                        id: 4,
                        title: "2010 – Golden Jubilee Era",
                        description: "Commemorated 50 years of Mahatma Gandhi Vidya Peetha Trust's transformative impact on higher education."
                    }
                ]
            },
            {
                id: "2010-2020",
                decadeLabel: "2010 - 2020",
                events: [
                    {
                        id: 1,
                        title: "2014 – Dayananda Sagar University Charter",
                        description: "Dayananda Sagar University (DSU) was formally established as a State Private University by the Karnataka Act."
                    },
                    {
                        id: 2,
                        title: "2016 – Modern Smart Campus Launch",
                        description: "Inaugurated state-of-the-art smart campus equipped with modern AI research centers and smart learning spaces."
                    },
                    {
                        id: 3,
                        title: "2018 – Global Industry Partnerships",
                        description: "Partnered with global tech giants including IBM, VMware, NVIDIA, and Autodesk for specialized industry labs."
                    },
                    {
                        id: 4,
                        title: "2020 – Multi-Disciplinary Digital Learning",
                        description: "Seamlessly integrated digital learning platforms and expanded research capabilities across emerging technology domains."
                    }
                ]
            },
            {
                id: "2020-Present",
                decadeLabel: "2020 - Present",
                events: [
                    {
                        id: 1,
                        title: "2021 – Harohalli Main Campus Expansion",
                        description: "Expanded university footprint with a world-class 140+ acre green campus featuring advanced medical and tech faculties."
                    },
                    {
                        id: 2,
                        title: "2023 – Dr. Chandramma Sagar Institute of Medical Sciences",
                        description: "Established landmark 1350-bed super-specialty hospital and medical college delivering healthcare and medical education."
                    },
                    {
                        id: 3,
                        title: "2025 – Next-Gen AI & Robotics Centers",
                        description: "Pioneering research labs in AI, Robotics, Cyber Security, and Green Energy for futuristic global education."
                    },
                    {
                        id: 4,
                        title: "Present – 100,000+ Alumni Global Legacy",
                        description: "Continuing the visionary legacy of Late Sri R. Dayananda Sagar, inspiring generations of leaders worldwide."
                    }
                ]
            }
        ]
    },
    newPahseSection: {
        title: "Dayananda Sagar University - A New Phase of DSI",
        media: {
            mime: "image/jpg",
            url: "/images/history/newpaseBanner.jpg",
            alternativeText: "Dayananda Sagar University",
        },
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "With its strong foundation in creating Dayananda Sagar Institutions as a great academic centre in previous century, the education provider stepped up to be a State Private University to offer a new canvas for the young global citizens to transform their creative abilities to conquer the world.",
                    }
                ],
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "In the advent of Make in India and start-up era, Dayananda Sagar University is moving ahead with time and requirement to enable a ecosystem that nurtures young minds to be a innovator, entrepreneur and a leader. Thus, building a competency in multiple domains, mastering in technology, management and networking, proficient in marketing & finance and ability to appreciate art and culture.",
                    },
                ],
            },
        ],
    },

    foundingPillars: {
        title: "Our Founding Pillars :",
        subtitle: "Inspiring the shape of things to come",
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Dayananda Sagar Institutions founded in the 60s by one such visionary, late Sri Dayananda Sagar committed to take knowledge to the people, transforms today's students into responsible citizens and professional leaders of tomorrow.",
                    }
                ],
            },
        ],
        items: [
            {
                id: 1,
                name: "Late Shri R Dayananda Sagar",
                designation: "Founding Father",
                image: "/images/piller-1.png",
                description: "Our founding father, late Sri R Dayananda Sagar, was a graduate in Arts & Commerce from India & a barrister-at-law from England. He was a visionary, an educationist, a powerhouse of knowledge and a believer in transforming the world besides a leader par excellence who saw no reason to stay away from his responsibilities in setting up Mahatma Gandhi Vidya Peetha Education Trust in the 60s, the trust that contributed to educate the world for over 60 years carefully building an alumni of over 100,000 including accomplished professionals, law makers, sports personalities, celebrities spread all over the world."
            },
            {
                id: 2,
                name: "Late Smt Chandramma Sagar",
                designation: "Wife of the Founder",
                image: "/images/piller-2.png",
                description: "Wife of the founder, Late Smt Chandramma Sagar was a doctor by profession, the first Indian woman to have acquired a triple fellowship from the Royal College of Surgeons (FRCS) from London, Edinburgh & Glasgow. She was in the panel of doctors to the President of India."
            }
        ]
    },
    aboutInstitutions: {
        description: [
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "The Dayananda Sagar Schools and Colleges of Science, Arts and Commerce are pioneering institutions founded by late Sri Dayananda Sagar in the early sixties. One of the India's leading educational institutions, a front-runner in the field of education today, Dayananda Sagar Institutions (DSI) operates under the aegis of the Mahatma Gandhi Vidya Peetha Trust, in Bangalore- described as the Silicon Valley of India."
                    }
                ]
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Our institutions are characterized by the quality of education across a broad range of disciplines from pre-university courses to post-graduation and doctoral programs covering "
                    },
                    {
                        type: "text",
                        text: "Engineering, Dental Sciences, Biological Sciences Arts, Commerce, Sciences, Pharmacy, Nursing, Allied Health, as well as Business Management and Information Technology.",
                        italic: true,
                        semibold: true
                    }
                ]
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Progressively a number of institutions offering diploma, degree and postgraduate courses in Engineering, Dental Sciences, and Pharmacy were added. Keeping pace with technological growth, Management, Information Technology education programmes, courses in Biotechnology and Microbiology have been introduced. Facilities for doctoral and post-doctoral work are now being introduced."
                    }
                ]
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Health care education has been gaining prominence at the DSI campus through the diploma and graduate programs in Nursing with its well-equipped laboratories and modern infrastructure. The Allied Health College offers a few programs that are in demand with several in the pipeline."
                    }
                ]
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "DSI's commitment to internationalization is expressed in its collaborative research and exchange programmes involving institutions from across the globe."
                    }
                ]
            },
            {
                type: "paragraph",
                children: [
                    {
                        type: "text",
                        text: "Besides our high-calibre teaching staff, the students are given a challenging academic environment with well-equipped lecture theatres, laboratories, excellent libraries and computer networking facilities. Besides academics, we also have exceptional sports facilities. The hostel facilities cater to local and international students, encompassing the cultural and recreational needs of our students."
                    }
                ]
            }
        ],
        image: {
            url: "/images/history-about.jpg",
            alternativeText: "Dayananda Sagar Institutions Campus",
            mime: "image/jpg",
        }
    }
}

export default function page() {
    return (
        <>
            <InnerHero data={local_data.hero} />
            <HistoryTimeline data={local_data.historyTimeline} />
            <HistoryDetails data={local_data.aboutInstitutions} />
            <HistoryPillers data={local_data.foundingPillars} />
            <HistoryNewpahse data={local_data.newPahseSection} />
        </>
    )
}

