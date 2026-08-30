import News from "@/components/sections/home/home-news";
import Events from "@/components/sections/home/home-events";
import Journey from "@/components/sections/home/home-journey";
import HomeAbout from "@/components/sections/home/home-about";
import HomeExcellence from "@/components/sections/home/home-excellence";
import HomeCampusLife from "@/components/sections/home/home-campus-life";
import HomeTestimonials from "@/components/sections/home/home-testimonials";
import HomeIndustry from "@/components/sections/home/home-industry";
import HomeAcademic from "@/components/sections/home/home-academic";
import HomeHero from "@/components/sections/home/home-hero";
import HomeResearch from "@/components/sections/home/home-research-innovation";
import HomeCollaborations from "@/components/sections/home/home-collaborations";

const homePageData = {
  heroSlides: {
    hero: [
      {
        id: 1,
        poweredBy: {
          url: "/images/hero-powered.svg",
          alternativeText: "hero image",
        },
        media: {
          type: "video",
          url: "/videos/home-hero-1.mp4",
          alternativeText: "Hero image",
        },
        title: "Powering the Future with AI-Driven Innovation",
        description: {
          text: "Driven by our",
          highlightText:
            " AI Factory and Multidisciplinary Centers of Excellence",
        },
        featuredItems: [
          {
            id: 1,
            url: "/academics",
            icon: {
              url: "/images/home-banner-item-1.svg",
              alternativeText: "home-banner-item-1",
            },
            title: "Admission Helpline",
          },
          {
            id: 2,
            url: "/academics",
            icon: {
              url: "/images/home-banner-item-2.svg",
              alternativeText: "home-banner-item-2",
            },
            title: "International Students",
          },
          {
            id: 3,
            url: "/academics",
            icon: {
              url: "/images/home-banner-item-3.svg",
              alternativeText: "home-banner-item-3",
            },
            title: "Events",
          },
        ],
      },
      {
        id: 2,
        poweredBy: {
          url: "/images/hero-powered.svg",
          alternativeText: "hero image",
        },
        media: {
          type: "image",
          url: "/images/home-excellence-1.jpg",
          alternativeText: "Hero image",
        },
        title: "Powering the Future with AI-Driven Innovation 2",
        description: {
          text: "Driven by our 2",
          highlightText:
            " AI Factory and Multidisciplinary Centers of Excellence 2",
        },
        featuredItems: [
          {
            id: 1,
            url: "/academics",
            icon: {
              url: "/images/home-banner-item-1.svg",
              alternativeText: "home-banner-item-1",
            },
            title: "Admission Helpline 2",
          },
          {
            id: 2,
            url: "/academics",
            icon: {
              url: "/images/home-banner-item-2.svg",
              alternativeText: "home-banner-item-2",
            },
            title: "International Students 2",
          },
          {
            id: 3,
            url: "/academics",
            icon: {
              url: "/images/home-banner-item-3.svg",
              alternativeText: "home-banner-item-3",
            },
            title: "Events 2",
          },
        ],
      },
    ],
    heroMarquee: [
      {
        id: 1,
        url: "/",
        label: "Net zero Conclave on 29/12/2025",
      },
      {
        id: 2,
        url: "/",
        label: " Academic Calendar for 2025-26 Even Semester (SOE)",
      },
      {
        id: 3,
        label: "Academic Calendar for 2025-26  CLICK HERE",
        url: "/",
      },
      {
        id: 4,
        label: "DSU AI Conclave on 29/12/2025",
        url: "/",
      },
      {
        id: 5,
        label: "AI Summit 2026 March 25 2026 2PM",
        url: "/",
      },
    ],
  },
  centresOfExcellence: {
    title: "Centres of Excellence",
    description:
      "Our Centers of Excellence bring together advanced infrastructure, expert faculty, and industry collaboration to solve real-world challenges.",
    excellence: [
      {
        id: 1,
        specifications: [
          {
            title: "DGX B200",
            text: "Supercomputers with a combined GPUs",
          },
          {
            title: "Jetson Family",
            text: "Edge AI Deployment",
          },
          {
            title: "GPU Workstations",
            text: "Peak Performance Development",
          },
          {
            title: "NVLink",
            text: "Ultra-fast GPU-to-GPU communication",
          },
        ],
        excellenceImage: {
          url: "/images/home-excellence-1.jpg",
          alternativeTxt: "DGX B200 Supercomputer",
        },
        excellenceContent: {
          heading: {
            title: "DSU Centre for",
            highlightTxt: "NVIDIA AI Factory & Generative AI",
          },
          description:
            "We have partnered with NVIDIA to create an AI architecture that enables students to build, train & deploy large-scale AI systems across vision, language, and data-intensive domains.",
          poweredImage: {
            url: "/images/powered-nvidia.svg",
            alternativeTxt: "NVIDIA Logo",
          },
          button: {
            link: "#",
            label: "View All Centers",
          },
        },
      },
      {
        id: 2,
        specifications: [
          {
            title: "DGX B2002 2",
            text: "Supercomputers with a combined 160 GPUs",
          },
          {
            title: "Jetson Family 2",
            text: "Edge AI Deployment",
          },
          {
            title: "GPU Workstations 2",
            text: "Peak Performance Development",
          },
          {
            title: "NVLink 2",
            text: "Ultra-fast GPU-to-GPU communication",
          },
        ],
        excellenceImage: {
          url: "/images/home-excellence-2.jpg",
          alternativeTxt: "DGX B200 Supercomputer",
        },
        excellenceContent: {
          heading: {
            title: "DSU Centre for",
            highlightTxt: "NVIDIA AI Factory & Generative AI 2",
          },
          description:
            "We have partnered with NVIDIA to create an AI architecture that enables students to build, train & deploy large-scale AI systems across vision, language, and data-intensive domains.",
          poweredImage: {
            url: "/images/powered-nvidia.svg",
            alternativeTxt: "NVIDIA Logo",
          },
          button: {
            link: "#",
            label: "View All Centers",
          },
        },
      },
      {
        id: 3,
        specifications: [
          {
            title: "DGX B2002 3",
            text: "Supercomputers with a combined 160 GPUs",
          },
          {
            title: "Jetson Family 3",
            text: "Edge AI Deployment",
          },
          {
            title: "GPU Workstations 3",
            text: "Peak Performance Development",
          },
          {
            title: "NVLink 3",
            text: "Ultra-fast GPU-to-GPU communication",
          },
        ],
        excellenceImage: {
          url: "/images/home-excellence-3.jpg",
          alternativeTxt: "DGX B200 Supercomputer",
        },
        excellenceContent: {
          heading: {
            title: "DSU Centre for",
            highlightTxt: "NVIDIA AI Factory & Generative AI 3",
          },
          description:
            "We have partnered with NVIDIA to create an AI architecture that enables students to build, train & deploy large-scale AI systems across vision, language, and data-intensive domains.",
          poweredImage: {
            url: "/images/powered-nvidia.svg",
            alternativeTxt: "NVIDIA Logo",
          },
          button: {
            link: "#",
            label: "View All Centers",
          },
        },
      },
      {
        id: 4,
        specifications: [
          {
            title: "DGX B2002 4",
            text: "Supercomputers with a combined 160 GPUs",
          },
          {
            title: "Jetson Family 4",
            text: "Edge AI Deployment",
          },
          {
            title: "GPU Workstations 4",
            text: "Peak Performance Development",
          },
          {
            title: "NVLink 4",
            text: "Ultra-fast GPU-to-GPU communication",
          },
        ],
        excellenceImage: {
          url: "/images/home-excellence-4.jpg",
          alternativeTxt: "DGX B200 Supercomputer",
        },
        excellenceContent: {
          heading: {
            title: "DSU Centre for",
            highlightTxt: "NVIDIA AI Factory & Generative AI 4",
          },
          description:
            "We have partnered with NVIDIA to create an AI architecture that enables students to build, train & deploy large-scale AI systems across vision, language, and data-intensive domains.",
          poweredImage: {
            url: "/images/powered-nvidia.svg",
            alternativeTxt: "NVIDIA Logo",
          },
          button: {
            link: "#",
            label: "View All Centers",
          },
        },
      },
      {
        id: 5,
        specifications: [
          {
            title: "DGX B2002 5",
            text: "Supercomputers with a combined 160 GPUs",
          },
          {
            title: "Jetson Family 5",
            text: "Edge AI Deployment",
          },
          {
            title: "GPU Workstations 5",
            text: "Peak Performance Development",
          },
          {
            title: "NVLink 5",
            text: "Ultra-fast GPU-to-GPU communication",
          },
        ],
        excellenceImage: {
          url: "/images/home-excellence-5.jpg",
          alternativeTxt: "DGX B200 Supercomputer",
        },
        excellenceContent: {
          heading: {
            title: "DSU Centre for",
            highlightTxt: "NVIDIA AI Factory & Generative AI 5",
          },
          description:
            "We have partnered with NVIDIA to create an AI architecture that enables students to build, train & deploy large-scale AI systems across vision, language, and data-intensive domains.",
          poweredImage: {
            url: "/images/powered-nvidia.svg",
            alternativeTxt: "NVIDIA Logo",
          },
          button: {
            link: "#",
            label: "View All Centers",
          },
        },
      },
      {
        id: 6,
        specifications: [
          {
            title: "DGX B2002 6",
            text: "Supercomputers with a combined 160 GPUs",
          },
          {
            title: "Jetson Family 6",
            text: "Edge AI Deployment",
          },
          {
            title: "GPU Workstations 6",
            text: "Peak Performance Development",
          },
          {
            title: "NVLink 6",
            text: "Ultra-fast GPU-to-GPU communication",
          },
        ],
        excellenceImage: {
          url: "/images/home-excellence-3.jpg",
          alternativeTxt: "DGX B200 Supercomputer",
        },
        excellenceContent: {
          heading: {
            title: "DSU Centre for",
            highlightTxt: "NVIDIA AI Factory & Generative AI 6",
          },
          description:
            "We have partnered with NVIDIA to create an AI architecture that enables students to build, train & deploy large-scale AI systems across vision, language, and data-intensive domains.",
          poweredImage: {
            url: "/images/powered-nvidia.svg",
            alternativeTxt: "NVIDIA Logo",
          },
          button: {
            link: "#",
            label: "View All Centers",
          },
        },
      },
    ],
  },
  academicPrograms: {
    title: "Industry-Integrated Academic Programs",
    description:
      "Designed to align with real-world industry and emerging technologies",
    academics: [
      {
        id: 1,
        academicImage: {
          url: "/images/home-academic-1.webp",
          alternativeTxt: "Academic Programs",
        },
        icon: {
          url: "/images/home-academic-icon-1.svg",
          alternativeTxt: "Academic Programs",
        },
        title: "School of Engineering",
        courses_list: [
          {
            id: 1,
            title: "Undergraduate (UG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "BCA",
              },
            ],
          },
          {
            id: 2,
            title: "Postgraduate (PG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "MCA",
              },
              {
                id: 2,
                link: "#",
                label: "M.Sc",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        academicImage: {
          url: "/images/home-academic-2.webp",
          alternativeTxt: "Academic Programs",
        },
        icon: {
          url: "/images/home-academic-icon-2.svg",
          alternativeTxt: "Academic Programs",
        },
        title: "School of Computer Applications",
        courses_list: [
          {
            id: 1,
            title: "Undergraduate (UG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "BCA",
              },
            ],
          },
          {
            id: 2,
            title: "Postgraduate (PG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "MCA",
              },
              {
                id: 2,
                link: "#",
                label: "M.Sc",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        academicImage: {
          url: "/images/home-academic-3.webp",
          alternativeTxt: "Academic Programs",
        },
        icon: {
          url: "/images/home-academic-icon-3.svg",
          alternativeTxt: "Academic Programs",
        },
        title: "School of Law",
        courses_list: [
          {
            id: 1,
            title: "Undergraduate (UG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "BCA",
              },
            ],
          },
          {
            id: 2,
            title: "Postgraduate (PG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "MCA",
              },
              {
                id: 2,
                link: "#",
                label: "M.Sc",
              },
            ],
          },
        ],
      },
      {
        id: 4,
        academicImage: {
          url: "/images/home-academic-4.webp",
          alternativeTxt: "Academic Programs",
        },
        icon: {
          url: "/images/home-academic-icon-4.svg",
          alternativeTxt: "Academic Programs",
        },
        title: "School of Commerce & Management",
        courses_list: [
          {
            id: 1,
            title: "Undergraduate (UG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "BCA",
              },
            ],
          },
          {
            id: 2,
            title: "Postgraduate (PG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "MCA",
              },
              {
                id: 2,
                link: "#",
                label: "M.Sc",
              },
            ],
          },
        ],
      },
      {
        id: 5,
        academicImage: {
          url: "/images/home-academic-5.webp",
          alternativeTxt: "Academic Programs",
        },
        icon: {
          url: "/images/home-academic-icon-5.svg",
          alternativeTxt: "Academic Programs",
        },
        title: "School of Basic & Applied Sciences",
        courses_list: [
          {
            id: 1,
            title: "Undergraduate (UG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "BCA",
              },
            ],
          },
          {
            id: 2,
            title: "Postgraduate (PG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "MCA",
              },
              {
                id: 2,
                link: "#",
                label: "M.Sc",
              },
            ],
          },
        ],
      },
      {
        id: 6,
        academicImage: {
          url: "/images/home-academic-6.webp",
          alternativeTxt: "Academic Programs",
        },
        icon: {
          url: "/images/home-academic-icon-6.svg",
          alternativeTxt: "Academic Programs",
        },
        title: "School of Arts, Design & Humanities",
        courses_list: [
          {
            id: 1,
            title: "Undergraduate (UG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "BCA",
              },
            ],
          },
          {
            id: 2,
            title: "Postgraduate (PG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "MCA",
              },
              {
                id: 2,
                link: "#",
                label: "M.Sc",
              },
            ],
          },
        ],
      },
      {
        id: 7,
        academicImage: {
          url: "/images/home-academic-7.webp",
          alternativeTxt: "Academic Programs",
        },
        icon: {
          url: "/images/home-academic-icon-7.svg",
          alternativeTxt: "Academic Programs",
        },
        title: "School of Design & Digital Transmedia",
        courses_list: [
          {
            id: 1,
            title: "Undergraduate (UG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "BCA",
              },
            ],
          },
          {
            id: 2,
            title: "Postgraduate (PG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "MCA",
              },
              {
                id: 2,
                link: "#",
                label: "M.Sc",
              },
            ],
          },
        ],
      },
      {
        id: 8,
        academicImage: {
          url: "/images/home-academic-8.webp",
          alternativeTxt: "Academic Programs",
        },
        icon: {
          url: "/images/home-academic-icon-8.svg",
          alternativeTxt: "Academic Programs",
        },
        title: "School of Health Sciences",
        courses_list: [
          {
            id: 1,
            title: "Undergraduate (UG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "BCA",
              },
            ],
          },
          {
            id: 2,
            title: "Postgraduate (PG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "MCA",
              },
              {
                id: 2,
                link: "#",
                label: "M.Sc",
              },
            ],
          },
        ],
      },
      {
        id: 9,
        academicImage: {
          url: "/images/home-academic-9.webp",
          alternativeTxt: "Academic Programs",
        },
        icon: {
          url: "/images/home-academic-icon-9.svg",
          alternativeTxt: "Academic Programs",
        },
        title: "Online Degree Programs",
        courses_list: [
          {
            id: 1,
            title: "Undergraduate (UG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "BCA",
              },
            ],
          },
          {
            id: 2,
            title: "Postgraduate (PG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "MCA",
              },
              {
                id: 2,
                link: "#",
                label: "M.Sc",
              },
            ],
          },
        ],
      },
      {
        id: 10,
        academicImage: {
          url: "/images/home-academic-10.webp",
          alternativeTxt: "Academic Programs",
        },
        icon: {
          url: "/images/home-academic-icon-10.svg",
          alternativeTxt: "Academic Programs",
        },
        title:
          "Dr. Chandramma Dayananda Sagar Institute of Medical Education & Research",
        courses_list: [
          {
            id: 1,
            title: "Undergraduate (UG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "BCA",
              },
            ],
          },
          {
            id: 2,
            title: "Postgraduate (PG)",
            courses: [
              {
                id: 1,
                link: "#",
                label: "MCA",
              },
              {
                id: 2,
                link: "#",
                label: "M.Sc",
              },
            ],
          },
        ],
      },
    ],
  },
  researchInnovation: {
    title: "Research & Innovation",
    description:
      "We foster a strong research culture through interdisciplinary collaboration, funded projects, and industry partnerships.",
    research: {
      header: {
        title: "Research at DSU",
        description:
          "In the five decades since the establishment of Dayananda Sagar Institutions in 1960, the group has grown into one of India's leading educational institutions today. This growth is the result of the institutions focused effort to advance knowledge and educate students in..",
        button: {
          label: "Explore More",
          link: "#",
        },
      },
      featuredCards: [
        {
          id: 1,
          title: "Ph.D Admissions",
          media: {
            url: "/images/researchItem-1.jpg",
            alt: "Media-1",
          },
          link: "/",
        },
        {
          id: 2,
          title: "Research Supervisors",
          media: {
            url: "/images/researchItem-2.jpg",
            alt: "Media-2",
          },
          link: "/",
        },
        {
          id: 3,
          title: "Ph.D Regulations",
          media: {
            url: "/images/researchItem-3.jpg",
            alt: "Media-3",
          },
          link: "/",
        },
        {
          id: 4,
          title: "Ph.D Course Work Syllabus",
          media: {
            url: "/images/researchItem-4.jpg",
            alt: "Media-4",
          },
          link: "/",
        },
      ],
      statistics: [
        {
          id: 1,
          value: "200",
          label: "Publications",
          icon: {
            url: "/images/research-icon-1.svg",
            alt: "Icon-1",
          },
        },
        {
          id: 2,
          value: "85",
          label: "Funded Research <br> Projects",
          icon: {
            url: "/images/research-icon-2.svg",
            alt: "Icon-1",
          },
        },
        {
          id: 3,
          value: "24",
          label: "Innovation Driven Labs",
          icon: {
            url: "/images/research-icon-3.svg",
            alt: "Icon-1",
          },
        },
      ],
      ctaButton: {
        label: "UG Research Forum",
        link: "#",
        icon: "/images/research-researchForumBtn-1.svg",
      },
    },
    incubation: {
      header: {
        title: "Incubation & Entrepreneurship",
        description:
          "DSU promotes innovation and entrepreneurship through incubation support, industry mentorship, startup guidance, and innovation labs—empowering students to build impactful real-world solutions.",
        button: {
          label: "Explore More",
          link: "#",
        },
      },
      featuredCards: [
        {
          id: 1,
          link: "/",
          tag: "DERBI Foundation",
          title: "Entrepreneurship Research & Business Incubation Foundation",
          description:
            "Dayananda Sagar Entrepreneurship Research & Business Incubator (DERBI) Foundation is a Technology Business Incubator with the objective of incubating technology ventures.",
          media: {
            url: "/images/incubation-1.webp",
            alt: "Media-1",
          },
        },
        {
          id: 2,
          link: "/",
          tag: "AIC-DSU Foundation",
          title: "AIC-DSU Innovation Foundation",
          description:
            "AIC-DSU Innovation Foundation is an initiative of Atal Incubation Center & Dayananda Sagar University with active support from Atal Innovation Mission (AIM), NITI Aayog & GoI.",
          media: {
            url: "/images/incubation-2.webp",
            alt: "Media-1",
          },
        },
      ],
    },
    innovation: {
      header: {
        title: "Transformational Opportunities Of Cloud, Big Data & Analytics",
        description:
          "IBM collaborates with Dayananda Sagar University in Post graduate programs: Computer Science Engineering with specialization in Cloud Computing, Big Data & Analytics and Internet of Things (IoT). These Post Graduate M.Tech. programs....",
        button: {
          label: "Explore More",
          link: "#",
        },
      },
      featuredCards: [
        {
          id: 1,
          link: "/",
          title: "ETAS: Automotive <br> System Labs",
          description:
            "Today's automotive system is complex with the extensive use of electronics and software.",
          media: {
            url: "/images/home-innovation-1.jpg",
            alt: "Media-1",
          },
        },
        {
          id: 2,
          link: "/",
          title: "Autodesk: Design & <br> Innovation Centre",
          description:
            "Centre will focus on providing training to the students & faculty members in the Virtual Design techniques.",
          media: {
            url: "/images/home-innovation-2.jpg",
            alt: "Media-1",
          },
        },
        {
          id: 3,
          link: "/",
          title: "Vmware <br> IT Academy",
          description:
            "VMware is a global leader in cloud infrastructure and business mobility.",
          media: {
            url: "/images/home-innovation-3.jpg",
            alt: "Media-1",
          },
        },
      ],
    },
  },
  industryCollaboration: {
    sectionBackgroundImage: {
      url: "/images/home-industry-overlay.webp",
      alternativeTxt: "Industry Background",
    },
    title: "Industry Collaboration",
    description: "Built with Industry, Not Just for Industry",
    collaborations: [
      {
        id: 1,
        tag: "400+ Annual Internships",
        title: "Internship & Training Opportunities",
        collaborationImage: {
          url: "/images/home-industry-1.webp",
          alternativeTxt: "Internship & Training Opportunities",
        },
        link: "/#",
      },
      {
        id: 2,
        tag: "18+ Sponsored Labs",
        title: "Industry-sponsored Labs",
        collaborationImage: {
          url: "/images/home-industry-2.webp",
          alternativeTxt: "Internship & Training Opportunities",
        },
        link: "/#",
      },
      {
        id: 3,
        tag: "₹3.2 Cr Consultancy Revenue",
        title: "Consultancy & Innovation Projects",
        collaborationImage: {
          url: "/images/home-industry-3.webp",
          alternativeTxt: "Internship & Training Opportunities",
        },
        link: "/#",
      },
      {
        id: 4,
        tag: "18+ Sponsored Labs",
        title: "Industry-sponsored Labs",
        collaborationImage: {
          url: "/images/home-industry-2.webp",
          alternativeTxt: "Internship & Training Opportunities",
        },
        link: "/#",
      },
    ],
    industryPartners: [
      {
        id: 1,
        partnerImage: {
          url: "/images/home-partner-1.png",
          alternativeTxt: "Industry Partner",
        },
      },
      {
        id: 2,
        partnerImage: {
          url: "/images/home-partner-2.png",
          alternativeTxt: "Industry Partner",
        },
      },
      {
        id: 3,
        partnerImage: {
          url: "/images/home-partner-3.png",
          alternativeTxt: "Industry Partner",
        },
      },
      {
        id: 4,
        partnerImage: {
          url: "/images/home-partner-4.png",
          alternativeTxt: "Industry Partner",
        },
      },
      {
        id: 5,
        partnerImage: {
          url: "/images/home-partner-5.png",
          alternativeTxt: "Industry Partner",
        },
      },
      {
        id: 6,
        partnerImage: {
          url: "/images/home-partner-6.png",
          alternativeTxt: "Industry Partner",
        },
      },
      {
        id: 7,
        partnerImage: {
          url: "/images/home-partner-7.png",
          alternativeTxt: "Industry Partner",
        },
      },
      {
        id: 8,
        partnerImage: {
          url: "/images/home-partner-8.png",
          alternativeTxt: "Industry Partner",
        },
      },
      {
        id: 9,
        partnerImage: {
          url: "/images/home-partner-9.png",
          alternativeTxt: "Industry Partner",
        },
      },
      {
        id: 10,
        partnerImage: {
          url: "/images/home-partner-5.png",
          alternativeTxt: "Industry Partner",
        },
      },
      {
        id: 11,
        partnerImage: {
          url: "/images/home-partner-7.png",
          alternativeTxt: "Industry Partner",
        },
      },
    ],
  },
  homeAbout: {
    statistics: [
      {
        id: 1,
        value: 5,
        suffix: "K+",
        label: "Students Enrolled",
        icon: {
          url: "/images/home-about-icon-1.svg",
          alternativeText: "home-about-icon",
        },
      },
      {
        id: 2,
        value: 36,
        suffix: "+",
        label: "UG Courses",
        icon: {
          url: "/images/home-about-icon-2.svg",
          alternativeText: "home-about-icon",
        },
      },
      {
        id: 3,
        value: 10,
        suffix: "+",
        label: "PG Courses",
        icon: {
          url: "/images/home-about-icon-3.svg",
          alternativeText: "home-about-icon",
        },
      },
      {
        id: 4,
        value: 1000,
        suffix: "+",
        label: "Faculties",
        icon: {
          url: "/images/home-about-icon-4.svg",
          alternativeText: "home-about-icon",
        },
      },
      {
        id: 5,
        value: 10,
        suffix: "+",
        label: "Colleges",
        icon: {
          url: "/images/home-about-icon-5.svg",
          alternativeText: "home-about-icon",
        },
      },
    ],
    virtualTour: {
      link:"/",
      media:{
        url:"/images/virtualtour.jpg",
        alternativeText:"Virtual Tour"
      },
      label: "VIRTUAL TOUR",
    },
    leadership: {
      subTitle: "THE VISIONARIES",
      title: "Our Leadership",
      leaders: [
        {
          id: 1,
          name: "LATE SHRI R DAYANANDA SAGAR",
          designation: "Founding Father",
          description:
            "Our founding father, late Sri R Dayananda Sagar, was a graduate in Arts & Commerce from India & a barrister-at-law from England.",
          avatarImage: {
            url: "/images/home-about-avatar-1.jpg",
            alt: "leadership-1",
          },
        },
        {
          id: 2,
          name: "LATE SHRI R DAYANANDA SAGAR -2",
          designation: "Founding Father",
          description:
            "Our founding father, late Sri R Dayananda Sagar, was a graduate in Arts & Commerce from India & a barrister-at-law from England.",
          avatarImage: {
            url: "/images/home-leadership.jpg",
            alt: "leadership-1",
          },
        },
      ],
      leaderShipImage: {
        url: "/images/home-leadership.jpg",
        alt: "leadership",
      },
    },
    aboutInfo: {
      subTitle: "ABOUT DSU",
      title: "Honouring Our Legacy, Inspiring Tomorrow",
      description:
        "Dayananda Sagar University is built on a legacy of academic excellence, innovation, and industry relevance. With world-class infrastructure, experienced faculty, and a strong focus on research and placements, DSU prepares students to excel globally.",
      statistics: {
        value: 50,
        suffix: "+",
        label: "Years of <br> Educational Excellence",
      },
    },
  },
  leadership: {
    data: {
      id: 1,
      documentId: "leadership-1",
      attributes: { title: "leadership" },
    },
  },
  studentSuccess: {
    title: "Celebrating Student Success",
    description: "Achievements that inspire the future generation.",
    statistics: [
      {
        id: 1,
        value: 95,
        suffix: "% Placed",
        label: "Placement Success Stories",
      },
      {
        id: 2,
        value: 10000,
        suffix: "+ Alumni",
        label: "Alumni Achievements",
      },
      {
        id: 3,
        value: 50,
        suffix: "+ Startups",
        label: "Student-led startups",
      },
      {
        id: 4,
        value: 100,
        suffix: "+ Recruiters",
        label: "Esteemed Organisations",
      },
    ],
    successStories: [
      {
        id: 1,
        media: {
          type: "video",
          url: "/videos/home-testimonial-1.mp4",
          alternativeText: "Success Story",
        },
        avatar: {
          url: "/images/home-testimonial-avatar-1.jpg",
          alternativeText: "Avatar",
        },
        badge: {
          url: "/images/home-badge-1.png",
          alternativeText: "Badge",
          title: "Alumni",
        },
        name: "Arjun Menon",
        designation: "Consultant at McKinsey",
        education: "B.Tech CSE, 2023",
      },
      {
        id: 2,
        media: {
          type: "video",
          url: "/videos/home-testimonial-2.mp4",
          alternativeText: "Success Story",
        },
        avatar: {
          url: "/images/home-testimonial-avatar-2.png",
          alternativeText: "Avatar",
        },
        badge: {
          url: "/images/home-badge-2.png",
          alternativeText: "Badge",
          title: "Placement",
        },
        name: "Priya Sharma",
        designation: "Systems Engineer at Infosys",
        education: "B.Tech CSE, 2025",
      },
      {
        id: 3,
        media: {
          type: "video",
          url: "/videos/home-testimonial-3.mp4",
          alternativeText: "Success Story",
        },
        avatar: {
          url: "/images/home-testimonial-avatar-3.png",
          alternativeText: "Avatar",
        },
        badge: {
          url: "/images/home-badge-1.png",
          alternativeText: "Badge",
          title: "Alumni",
        },
        name: "Arjun Rao",
        designation: "Consultant at BCG",
        education: "B.Tech ECE, 2022",
      },
      {
        id: 4,
        media: {
          type: "video",
          url: "/videos/home-testimonial-4.mp4",
          alternativeText: "Success Story",
        },
        avatar: {
          url: "/images/home-testimonial-avatar-4.jpg",
          alternativeText: "Avatar",
        },
        badge: {
          url: "/images/home-badge-1.png",
          alternativeText: "Badge",
          title: "Startup",
        },
        name: "Justin Jose",
        designation: "Founder, MyHealthAI",
        education: "B.Tech CSE, 2024",
      },
      {
        id: 5,
        media: {
          type: "video",
          url: "/videos/home-testimonial-2.mp4",
          alternativeText: "Success Story",
        },
        avatar: {
          url: "/images/home-testimonial-avatar-2.png",
          alternativeText: "Avatar",
        },
        badge: {
          url: "/images/home-badge-2.png",
          alternativeText: "Badge",
          title: "Placement",
        },
        name: "Priya Sharma",
        designation: "Systems Engineer at Infosys",
        education: "B.Tech CSE, 2025",
      },
    ],
  },
  campusLife: {
    campusInfo: {
      title: "Campus Life",
      heading: {
        text: "Campus",
        highlight: "Life",
      },
      description:
        "A dynamic campus environment that supports academic growth, creativity, & overall well-being.",
    },
    featureCards: [
      {
        title: "Campus Life",
        media: {
          type: "image",
          url: "/images/home-campus-life-2.webp",
        },
        icon: {
          url: "/images/home-campus-icon-1.svg",
          alt: "Campus Life Icon",
        },
      },
      {
        title: "Modern Infrastructure",
        media: {
          type: "image",
          url: "/images/home-campus-life-4.webp",
        },
        icon: {
          url: "/images/home-campus-icon-4.svg",
          alt: "Campus Life Icon",
        },
      },
      {
        title: "Sports & Recreation",
        media: {
          type: "video",
          url: "/videos/home-campus-life-1.mp4",
          poster: "/images/home-thumbnail-poster.webp",
        },
        icon: {
          url: "/images/home-campus-icon-2.svg",
          alt: "Campus Life Icon",
        },
      },
      {
        title: "Hostel & Residential",
        media: {
          type: "image",
          url: "/images/home-campus-life-3.webp",
        },
        icon: {
          url: "/images/home-campus-icon-3.svg",
          alt: "Campus Life Icon",
        },
      },
      {
        title: "Clubs & Student Activities",
        media: {
          type: "image",
          url: "/images/home-campus-life-5.webp",
        },
        icon: {
          url: "/images/home-campus-icon-5.svg",
          alt: "Campus Life Icon",
        },
      },
    ],
    statistics: {
      description:
        "A future-ready campus designed to spark learning, creativity, and student well-being.",
      items: [
        {
          id: 1,
          label: "Clubs",
          value: 50,
          symbol: "+",
        },
        {
          id: 2,
          label: "Sports Facilities",
          value: 10,
          symbol: "+",
        },
        {
          id: 3,
          label: "Residents",
          value: 5000,
          symbol: "+",
        },
        {
          id: 4,
          label: "Annual Events",
          value: 200,
          symbol: "+",
        },
      ],
    },
  },
  internationalCollaboration: {
    title: "International Collaborations",
  description: "Click on any item Flag to view DSU's partner universities.",
  statistics: [
    {
      id: 1,
      value: 50,
      suffix: "+",
      label: "Partner Universities",
    },
    {
      id: 2,
      value: 9,
      suffix: "+",
      label: "Countries",
    },
    {
      id: 3,
      title: "Student",
      label: "Exchange Programs",
    },
    {
      id: 4,
      title: "Global",
      label: "Research Initiatives",
    },
    {
      id: 5,
      title: "Faculty",
      label: "Exchange Collaboration",
    },
  ],
  countries: [
    {
      id: 1,
      flagImage: {
        url: "/images/home-flag-1.svg",
        alternativeText: "home-flag-1",
      },
      position: {
        axisX: "18%",
        axisY: "38%",
      },
      featuredImage: {
        url: "/images/home-colab-1.webp",
        alternativeText: "collab-usa",
      },
      title: "United States of America",
      description:
        "USA collaborations give students access to world-class education, advanced research, and strong industry networks, enhancing global learning and career opportunities.",
      partners: [
        "Northeastern University",
        "University of Evansville",
        "LeTourneau University",
        "University of South Carolina Aiken",
        "Worcester Polytechnic Institute",
        "Georgia Institute of Technology",
      ],
      moreLink: "/collaborations/usa",
    },
    {
      id: 2,
      flagImage: {
        url: "/images/home-flag-2.svg",
        alternativeText: "home-flag-2",
      },
      position: {
        axisX: "50%",
        axisY: "30%",
      },
      featuredImage: {
        url: "/images/home-excellence-1.jpg",
        alternativeText: "collab-usa",
      },
      title: "Country-2",
      description:
        "USA collaborations give students access to world-class education, advanced research, and strong industry networks, enhancing global learning and career opportunities.2",
      partners: [
        "Northeastern University2",
        "University of Evansville2",
        "LeTourneau University2",
      ],
    },
    {
      id: 3,
      flagImage: {
        url: "/images/home-flag-3.svg",
        alternativeText: "home-flag-3",
      },
      position: {
        axisX: "53%",
        axisY: "40%",
      },
      featuredImage: {
        url: "/images/home-excellence-3.jpg",
        alternativeText: "collab-usa",
      },
      title: "Country-3",
      description:
        "USA collaborations give students access to world-class education, advanced research, and strong industry networks, enhancing global learning and career opportunities.3",
      partners: [
        "Northeastern University3",
        "University of Evansville3",
        "LeTourneau University3",
        "University of South Carolina Aiken3",
        "Worcester Polytechnic Institute3",
        "Georgia Institute of Technology3",
      ],
      moreLink: "/collaborations/usa",
    },
    {
      id: 4,
      flagImage: {
        url: "/images/home-flag-4.svg",
        alternativeText: "home-flag-4",
      },
      position: {
        axisX: "75%",
        axisY: "23%",
      },
      featuredImage: {
        url: "/images/home-excellence-4.jpg",
        alternativeText: "collab-usa",
      },
      title: "Country-4",
      description:
        "USA collaborations give students access to world-class education, advanced research, and strong industry networks, enhancing global learning and career opportunities.4",
      partners: [
        "Northeastern University4",
        "University of Evansville4",
      ],
    },
    {
      id: 5,
      flagImage: {
        url: "/images/home-flag-5.svg",
        alternativeText: "home-flag-5",
      },
      position: {
        axisX: "75%",
        axisY: "57%",
      },
      featuredImage: {
        url: "/images/home-excellence-5.jpg",
        alternativeText: "collab-usa",
      },
      title: "Country-5",
      description:
        "USA collaborations give students access to world-class education, advanced research, and strong industry networks, enhancing global learning and career opportunities.5",
      partners: [
        "Northeastern University5",
        "University of Evansville5",
        "LeTourneau University5",
        "University of South Carolina Aiken5",
        "Worcester Polytechnic Institute5",
        "Georgia Institute of Technology5",
      ],
      moreLink: "/collaborations/usa",
    },
    {
      id: 6,
      flagImage: {
        url: "/images/home-flag-6.svg",
        alternativeText: "home-flag-6",
      },
      position: {
        axisX: "70%",
        axisY: "62%",
      },
      featuredImage: {
        url: "/images/home-excellence-2.jpg",
        alternativeText: "collab-usa",
      },
      title: "Country-6",
      description:
        "USA collaborations give students access to world-class education, advanced research, and strong industry networks, enhancing global learning and career opportunities.6",
      partners: [
        "Northeastern University6",
        "University of Evansville6",
        "Worcester Polytechnic Institute6",
        "Georgia Institute of Technology6",
      ],
      moreLink: "/collaborations/usa",
    },
    {
      id: 7,
      flagImage: {
        url: "/images/home-flag-7.svg",
        alternativeText: "home-flag-7",
      },
      position: {
        axisX: "95%",
        axisY: "90%",
      },
      featuredImage: {
        url: "/images/home-excellence-3.jpg",
        alternativeText: "collab-usa",
      },
      title: "Country-7",
      description:
        "USA collaborations give students access to world-class education, advanced research, and strong industry networks, enhancing global learning and career opportunities.7",
      partners: [
        "Northeastern University7",
        "University of Evansville7",
        "LeTourneau University7",
        "University of South Carolina Aiken7",
        "Worcester Polytechnic Institute7",
        "Georgia Institute of Technology7",
      ],
      moreLink: "/collaborations/usa",
    },
    {
      id: 8,
      flagImage: {
        url: "/images/home-flag-8.svg",
        alternativeText: "home-flag-8",
      },
      position: {
        axisX: "55%",
        axisY: "75%",
      },
      featuredImage: {
        url: "/images/home-excellence-4.jpg",
        alternativeText: "collab-usa",
      },
      title: "Country-8",
      description:
        "USA collaborations give students access to world-class education, advanced research, and strong industry networks, enhancing global learning and career opportunities.8",
      partners: [
        "Northeastern University8",
        "University of Evansville8",
        "LeTourneau University8",
        "University of South Carolina Aiken8",
        "Worcester Polytechnic Institute8",
        "Georgia Institute of Technology8",
      ],
      moreLink: "/collaborations/usa",
    },
  ],
  },
  latestNews: {
    data: {
      id: 1,
      documentId: "latest-news-1",
      attributes: { title: "latestNews" },
    },
  },
  announcements: {
    data: {
      id: 1,
      documentId: "announcements-1",
      attributes: { title: "announcements" },
    },
  },
  events: {
    data: { id: 1, documentId: "events-1", attributes: { title: "events" } },
  },
  cta: { data: { id: 1, documentId: "cta-1", attributes: { title: "cta" } } },
};

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HomeHero data={homePageData?.heroSlides} />
      <HomeExcellence data={homePageData?.centresOfExcellence} />
      <HomeAcademic data={homePageData?.academicPrograms} />
      <HomeResearch data={homePageData?.researchInnovation} />
      <HomeIndustry data={homePageData?.industryCollaboration} />
      <HomeAbout data={homePageData?.homeAbout} />
      <HomeTestimonials data={homePageData?.studentSuccess} />
      <HomeCampusLife data={homePageData?.campusLife} />
      <HomeCollaborations data={homePageData?.internationalCollaboration} />
      <Events />
      <hr></hr>
      <News data={homePageData.latestNews} />
      <Journey />
    </main>
  );
}
