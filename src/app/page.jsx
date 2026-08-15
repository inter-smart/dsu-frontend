import Hero from "@/components/sections/home/home-hero";
import News from "@/components/sections/home/home-news";
import Events from "@/components/sections/home/home-events";
import Journey from "@/components/sections/home/home-journey";
import HomeAbout from "@/components/sections/home/home-about";
import HomeExcellence from "@/components/sections/home/home-excellence";
import HomeCampusLife from "@/components/sections/home/home-campus-life";
import Rankings from "@/components/sections/home/home-research-innovation";
import HomeTestimonials from "@/components/sections/home/home-testimonials";
import ResearchInnovation from "@/components/sections/home/home-research-innovation";
import HomeIndustry from "@/components/sections/home/home-industry";
import HomeAcademic from "@/components/sections/home/home-academic-programs";

const homePageData = {
  hero: {
    hero: [
      {
        id: 1,
        title: "Powering the Future with AI-Driven Innovation",
        description:
          "Driven by our <b>AI Factory and Multidisciplinary Centers of Excellence</b>",
        poweredBy: {
          url: "/images/home-hero-1.jpg",
          alternativeText: "home-hero-1",
        },
      },
      {
        id: 2,
        title: "Powering the Future with AI-Driven Innovation",
        description:
          "Driven by our <b>AI Factory and Multidisciplinary Centers of Excellence</b>",
        poweredBy: {
          url: "/images/home-hero-1.jpg",
          alternativeText: "home-hero-1",
        },
      },
    ],
    heroNavigation: [
      {
        id: 1,
        icon: {
          url: "/images/home-banner-item-1.svg",
          alternativeText: "home-banner-item-1",
        },
        label: "Admission Helpline",
        url: "/academics",
      },
      {
        id: 2,
        icon: {
          url: "/images/home-banner-item-2.svg",
          alternativeText: "home-banner-item-2",
        },
        label: "International Students",
        url: "/academics",
      },
      {
        id: 3,
        icon: {
          url: "/images/home-banner-item-3.svg",
          alternativeText: "home-banner-item-3",
        },
        label: "Events",
        url: "/academics",
      },
    ],
    marqueeText: [
      { id: 1, label: "Net zero Conclave on 29/12/2025", url: "/" },
      {
        id: 2,
        label: " Academic Calendar for 2025-26 Even Semester (SOE)",
        url: "/",
      },
      { id: 3, label: "Academic Calendar for 2025-26  CLICK HERE", url: "/" },
      { id: 4, label: "DSU AI Conclave on 29/12/2025", url: "/" },
      { id: 5, label: "AI Summit 2026 March 25 2026 2PM", url: "/" },
    ],
  },
  centresOfExcellence: {
    data: {
      id: 1,
      documentId: "centres-of-excellence-1",
      attributes: {
        title: "Centres of Excellence",
        description:
          "Our Centers of Excellence bring together advanced infrastructure, expert faculty, and industry collaboration to solve real-world challenges.",
        infoItems: [
          {
            id: 1,
            gpuSpec: {
              title: "DGX B200",
              description: "Supercomputers with a combined 160 GPUs",
            },
            familySpec: {
              title: "Jetson Family",
              description: "Edge AI Deployment",
            },
            workstationSpec: {
              title: "GPU Workstations",
              description: "Peak Performance Development",
            },
            nvlinkSpec: {
              title: "NVLink",
              description: "Ultra-fast GPU-to-GPU communication",
            },
            featuredImage: {
              url: "/images/home-about-1.jpg",
              alternativeText: "DGX B200 Supercomputers",
            },
            subtitle: "DSU Centre for",
            title: "NVIDIA AI Factory & Generative AI",
            poweredByLogo: {
              url: "/images/home-about-nvidea-1.png",
              alternativeText: "NVIDIA",
            },
            description:
              "Our Centers of Excellence bring together advanced infrastructure, expert faculty, and industry collaboratio solve real-world challenges.</p>",
            // cta: { label: "View All Centers", url: "/centres-of-excellence" },
          },
          {
            id: 2,
            gpuSpec: {
              title: "DGX B200",
              description: "Supercomputers with a combined 160 GPUs",
            },
            familySpec: {
              title: "Jetson Family",
              description: "Edge AI Deployment",
            },
            workstationSpec: {
              title: "GPU Workstations",
              description: "Peak Performance Development",
            },
            nvlinkSpec: {
              title: "NVLink",
              description: "Ultra-fast GPU-to-GPU communication",
            },
            featuredImage: {
              url: "/images/home-about-1.jpg",
              alternativeText: "DGX B200 Supercomputers",
            },
            subtitle: "DSU Centre for",
            title: "Advanced Robotics & Automation",
            poweredByLogo: {
              url: "/images/home-about-nvidea-1.png",
              alternativeText: "NVIDIA",
            },
            description:
              "The robotics center provides students hands-on experience with industrial automation and autonomous systems.",
          },
          {
            id: 3,
            gpuSpec: {
              title: "DGX B200",
              description: "Supercomputers with a combined 160 GPUs",
            },
            familySpec: {
              title: "Jetson Family",
              description: "Edge AI Deployment",
            },
            workstationSpec: {
              title: "GPU Workstations",
              description: "Peak Performance Development",
            },
            nvlinkSpec: {
              title: "NVLink",
              description: "Ultra-fast GPU-to-GPU communication",
            },
            featuredImage: {
              url: "/images/home-about-1.jpg",
              alternativeText: "DGX B200 Supercomputers",
            },
            subtitle: "DSU Centre for",
            title: "Global Cybersecurity & Defense",
            poweredByLogo: {
              url: "/images/home-about-nvidea-1.png",
              alternativeText: "NVIDIA",
            },
            description:
              "Train in advanced threat detection, ethical hacking, and secure system architecture alongside industry leaders.",
          },
          {
            id: 3,
            gpuSpec: {
              title: "DGX B200",
              description: "Supercomputers with a combined 160 GPUs",
            },
            familySpec: {
              title: "Jetson Family",
              description: "Edge AI Deployment",
            },
            workstationSpec: {
              title: "GPU Workstations",
              description: "Peak Performance Development",
            },
            nvlinkSpec: {
              title: "NVLink",
              description: "Ultra-fast GPU-to-GPU communication",
            },
            featuredImage: {
              url: "/images/home-about-1.jpg",
              alternativeText: "DGX B200 Supercomputers",
            },
            subtitle: "DSU Centre for",
            title: "Global Cybersecurity & Defense",
            poweredByLogo: {
              url: "/images/home-about-nvidea-1.png",
              alternativeText: "NVIDIA",
            },
            description:
              "Train in advanced threat detection, ethical hacking, and secure system architecture alongside industry leaders.",
          },
          {
            id: 3,
            gpuSpec: {
              title: "DGX B200",
              description: "Supercomputers with a combined 160 GPUs",
            },
            familySpec: {
              title: "Jetson Family",
              description: "Edge AI Deployment",
            },
            workstationSpec: {
              title: "GPU Workstations",
              description: "Peak Performance Development",
            },
            nvlinkSpec: {
              title: "NVLink",
              description: "Ultra-fast GPU-to-GPU communication",
            },
            featuredImage: {
              url: "/images/home-about-1.jpg",
              alternativeText: "DGX B200 Supercomputers",
            },
            subtitle: "DSU Centre for",
            title: "Global Cybersecurity & Defense",
            poweredByLogo: {
              url: "/images/home-about-nvidea-1.png",
              alternativeText: "NVIDIA",
            },
            description:
              "Train in advanced threat detection, ethical hacking, and secure system architecture alongside industry leaders.",
          },
        ],
      },
    },
  },
  academicPrograms: {
    data: {
      id: 1,
      documentId: "academic-programs-1",
      attributes: {
        title: "Industry-Integrated Academic Programs",
        description:
          "Designed to align with real-world industry and emerging technologies",
        programItems: [
          {
            id: 1,
            slug: "school-of-engineering",
            icon: {
              url: "/images/home-academicPrograms-item-1.svg",
              alternativeText: "NVIDIA",
            },
            featuredImage: {
              url: "/images/home-academicPrograms-item1.jpg",
              alternativeText: "DGX B200 Supercomputers",
            },
            title: "School of Engineering",
            programs: [
              {
                label: "Undergraduate (UG)",
                courseList: [
                  { label: "BCA", slug: "/" },
                  { label: "B.Sc", slug: "/" },
                ],
              },
              {
                label: "Postgraduate (PG)",
                courseList: [
                  { label: "MCA", slug: "/" },
                  { label: "M.Sc", slug: "/" },
                ],
              },
            ],
          },
          {
            id: 1,
            slug: "school-of-engineering",
            icon: {
              url: "/images/home-academicPrograms-item-2.svg",
              alternativeText: "NVIDIA",
            },
            featuredImage: {
              url: "/images/home-academicPrograms-item2.jpg",
              alternativeText: "DGX B200 Supercomputers",
            },
            title: "School of Computer Applications",
            programs: [
              {
                label: "Undergraduate (UG)",
                courseList: [
                  { label: "BCA", slug: "/" },
                  { label: "B.Sc", slug: "/" },
                ],
              },
              {
                label: "Postgraduate (PG)",
                courseList: [
                  { label: "MCA", slug: "/" },
                  { label: "M.Sc", slug: "/" },
                ],
              },
            ],
          },
          {
            id: 1,
            slug: "school-of-engineering",
            icon: {
              url: "/images/home-academicPrograms-item-1.svg",
              alternativeText: "NVIDIA",
            },
            featuredImage: {
              url: "/images/home-academicPrograms-item1.jpg",
              alternativeText: "DGX B200 Supercomputers",
            },
            title: "School of Law",
            programs: [
              {
                label: "Undergraduate (UG)",
                courseList: [
                  { label: "BCA", slug: "/" },
                  { label: "B.Sc", slug: "/" },
                ],
              },
              {
                label: "Postgraduate (PG)",
                courseList: [
                  { label: "MCA", slug: "/" },
                  { label: "M.Sc", slug: "/" },
                ],
              },
            ],
          },
          {
            id: 1,
            slug: "school-of-engineering",
            icon: {
              url: "/images/home-academicPrograms-item-1.svg",
              alternativeText: "NVIDIA",
            },
            featuredImage: {
              url: "/images/home-academicPrograms-item1.jpg",
              alternativeText: "DGX B200 Supercomputers",
            },
            title: "School of Commerce & Management",
            programs: [
              {
                label: "Undergraduate (UG)",
                courseList: [
                  { label: "BCA", slug: "/" },
                  { label: "B.Sc", slug: "/" },
                ],
              },
              {
                label: "Postgraduate (PG)",
                courseList: [
                  { label: "MCA", slug: "/" },
                  { label: "M.Sc", slug: "/" },
                ],
              },
            ],
          },
          {
            id: 1,
            slug: "school-of-engineering",
            icon: {
              url: "/images/home-academicPrograms-item-1.svg",
              alternativeText: "NVIDIA",
            },
            featuredImage: {
              url: "/images/home-academicPrograms-item1.jpg",
              alternativeText: "DGX B200 Supercomputers",
            },
            title: "School of Basic & Applied Sciences",
            programs: [
              {
                label: "Undergraduate (UG)",
                courseList: [
                  { label: "BCA", slug: "/" },
                  { label: "B.Sc", slug: "/" },
                ],
              },
              {
                label: "Postgraduate (PG)",
                courseList: [
                  { label: "MCA", slug: "/" },
                  { label: "M.Sc", slug: "/" },
                ],
              },
            ],
          },
          {
            id: 1,
            slug: "school-of-engineering",
            icon: {
              url: "/images/home-academicPrograms-item-1.svg",
              alternativeText: "NVIDIA",
            },
            featuredImage: {
              url: "/images/home-academicPrograms-item1.jpg",
              alternativeText: "DGX B200 Supercomputers",
            },
            title: "School of Arts, Design & Humanities",
            programs: [
              {
                label: "Undergraduate (UG)",
                courseList: [
                  { label: "BCA", slug: "/" },
                  { label: "B.Sc", slug: "/" },
                ],
              },
              {
                label: "Postgraduate (PG)",
                courseList: [
                  { label: "MCA", slug: "/" },
                  { label: "M.Sc", slug: "/" },
                ],
              },
            ],
          },
          {
            id: 1,
            slug: "school-of-engineering",
            icon: {
              url: "/images/home-academicPrograms-item-1.svg",
              alternativeText: "NVIDIA",
            },
            featuredImage: {
              url: "/images/home-academicPrograms-item1.jpg",
              alternativeText: "DGX B200 Supercomputers",
            },
            title: "School of Design & Digital Transmedia",
            programs: [
              {
                label: "Undergraduate (UG)",
                courseList: [
                  { label: "BCA", slug: "/" },
                  { label: "B.Sc", slug: "/" },
                ],
              },
              {
                label: "Postgraduate (PG)",
                courseList: [
                  { label: "MCA", slug: "/" },
                  { label: "M.Sc", slug: "/" },
                ],
              },
            ],
          },
          {
            id: 1,
            slug: "school-of-engineering",
            icon: {
              url: "/images/home-academicPrograms-item-1.svg",
              alternativeText: "NVIDIA",
            },
            featuredImage: {
              url: "/images/home-academicPrograms-item1.jpg",
              alternativeText: "DGX B200 Supercomputers",
            },
            title: "School of Health Sciences",
            programs: [
              {
                label: "Undergraduate (UG)",
                courseList: [
                  { label: "BCA", slug: "/" },
                  { label: "B.Sc", slug: "/" },
                ],
              },
              {
                label: "Postgraduate (PG)",
                courseList: [
                  { label: "MCA", slug: "/" },
                  { label: "M.Sc", slug: "/" },
                ],
              },
            ],
          },
          {
            id: 1,
            slug: "school-of-engineering",
            icon: {
              url: "/images/home-academicPrograms-item-1.svg",
              alternativeText: "NVIDIA",
            },
            featuredImage: {
              url: "/images/home-academicPrograms-item1.jpg",
              alternativeText: "DGX B200 Supercomputers",
            },
            title: "Online Degree Programs",
            programs: [
              {
                label: "Undergraduate (UG)",
                courseList: [
                  { label: "BCA", slug: "/" },
                  { label: "B.Sc", slug: "/" },
                ],
              },
              {
                label: "Postgraduate (PG)",
                courseList: [
                  { label: "MCA", slug: "/" },
                  { label: "M.Sc", slug: "/" },
                ],
              },
            ],
          },
          {
            id: 1,
            slug: "school-of-engineering",
            icon: {
              url: "/images/home-academicPrograms-item-1.svg",
              alternativeText: "NVIDIA",
            },
            featuredImage: {
              url: "/images/home-academicPrograms-item1.jpg",
              alternativeText: "DGX B200 Supercomputers",
            },
            title:
              "Dr. Chandramma Dayananda Sagar Institute of Medical Education & Research",
            programs: [
              {
                label: "Undergraduate (UG)",
                courseList: [
                  { label: "BCA", slug: "/" },
                  { label: "B.Sc", slug: "/" },
                ],
              },
              {
                label: "Postgraduate (PG)",
                courseList: [
                  { label: "MCA", slug: "/" },
                  { label: "M.Sc", slug: "/" },
                ],
              },
            ],
          },
        ],
      },
    },
  },
  researchInnovation: {
    data: {
      id: 1,
      documentId: "research-innovation-1",
      attributes: {
        title: "Research & Innovation",
        description:
          "We foster a strong research culture through interdisciplinary collaboration, funded projects, and industry partnerships.",
        tabs: [
          {
            id: 1,
            value: "research",
            trigger: {
              icon: {
                url: "/images/research-icon-1.svg",
                alternativeText: "Research",
              },
              label: "Research",
            },
            content: {
              slug: "/",
              featuredTitle: "Research",
              title: "Research at DSU",
              description:
                "In the five decades since the establishment of Dayananda Sagar Institutions in 1960, the group has grown into one of India’s leading educational institutions today.This growth is the result of the institutions focused effort to advance knowledge and educate students in.",
              button: {
                label: "UG Research Forum",
                url: "/",
                icon: {
                  url: "/images/research-icon-3.svg",
                  alternativeText: "Research",
                },
              },
              gallery: [],
              statistics: [
                {
                  id: 1,
                  icon: {
                    url: "/images/research-icon-1.svg",
                    alternativeText: "Research",
                  },
                  value: 200,
                  suffix: "+",
                  label: "Publications",
                },
                {
                  id: 2,
                  icon: {
                    url: "/images/research-icon-2.svg",
                    alternativeText: "Research",
                  },
                  value: 85,
                  suffix: "+",
                  label: "Funded Research Projects",
                },
                {
                  id: 3,
                  icon: {
                    url: "/images/research-icon-3.svg",
                    alternativeText: "Research",
                  },
                  value: 24,
                  suffix: "+",
                  label: "Innovation Driven Labs",
                },
              ],
              featuredCards: [
                {
                  id: 1,
                  slug: "/school-of-engineering",
                  title: "Ph.D Admissions",
                  image: {
                    url: "/images/researchItem-1.jpg",
                    alternativeText: "researchItem-1",
                  },
                },
                {
                  id: 2,
                  slug: "/school-of-engineering",
                  title: "Research Supervisors",
                  image: {
                    url: "/images/researchItem-2.jpg",
                    alternativeText: "researchItem-2",
                  },
                },
                {
                  id: 3,
                  slug: "/school-of-engineering",
                  title: "Ph.D Regulations",
                  image: {
                    url: "/images/researchItem-3.jpg",
                    alternativeText: "researchItem-3",
                  },
                },
                {
                  id: 4,
                  slug: "/school-of-engineering",
                  title: "Ph.D Course Work Syllabus",
                  image: {
                    url: "/images/researchItem-4.jpg",
                    alternativeText: "researchItem-4",
                  },
                },
              ],
            },
          },
          {
            id: 2,
            value: "incubation",
            trigger: {
              icon: {
                url: "/images/research-icon-1.svg",
                alternativeText: "Incubation",
              },
              label: "Incubation & Entrepreneurship",
            },
            content: {
              slug: "/",
              featuredTitle: "Incubation & Entrepreneurship",
              title: "Incubation & Entrepreneurship",
              description:
                "In the five decades since the establishment of Dayananda Sagar Institutions in 1960, the group has grown into one of India’s leading educational institutions today.This growth is the result of the institutions focused effort to advance knowledge and educate students in.",
              button: {
                label: "Incubation Center",
                url: "/",
                icon: {
                  url: "/images/research-icon-3.svg",
                  alternativeText: "Research",
                },
              },
              gallery: [],
              statistics: [
                {
                  id: 1,
                  icon: {
                    url: "/images/research-icon-1.svg",
                    alternativeText: "Research",
                  },
                  value: 200,
                  suffix: "+",
                  label: "Publications",
                },
                {
                  id: 2,
                  icon: {
                    url: "/images/research-icon-2.svg",
                    alternativeText: "Research",
                  },
                  value: 85,
                  suffix: "+",
                  label: "Funded Research Projects",
                },
                {
                  id: 3,
                  icon: {
                    url: "/images/research-icon-3.svg",
                    alternativeText: "Research",
                  },
                  value: 24,
                  suffix: "+",
                  label: "Innovation Driven Labs",
                },
              ],
              featuredCards: [
                {
                  id: 1,
                  slug: "/school-of-engineering",
                  title: "Ph.D Admissions",
                  image: {
                    url: "/images/researchItem-1.jpg",
                    alternativeText: "researchItem-1",
                  },
                },
                {
                  id: 2,
                  slug: "/school-of-engineering",
                  title: "Research Supervisors",
                  image: {
                    url: "/images/researchItem-2.jpg",
                    alternativeText: "researchItem-2",
                  },
                },
                {
                  id: 3,
                  slug: "/school-of-engineering",
                  title: "Ph.D Regulations",
                  image: {
                    url: "/images/researchItem-3.jpg",
                    alternativeText: "researchItem-3",
                  },
                },
                {
                  id: 4,
                  slug: "/school-of-engineering",
                  title: "Ph.D Course Work Syllabus",
                  image: {
                    url: "/images/researchItem-4.jpg",
                    alternativeText: "researchItem-4",
                  },
                },
              ],
            },
          },
          {
            id: 3,
            value: "innovation-labs",
            trigger: {
              icon: {
                url: "/images/research-icon-1.svg",
                alternativeText: "Innovation",
              },
              label: "Innovation Labs",
            },
            content: {
              slug: "/",
              featuredTitle: "Innovation Labs",
              title: "Innovation Labs",
              description:
                "In the five decades since the establishment of Dayananda Sagar Institutions in 1960, the group has grown into one of India’s leading educational institutions today.This growth is the result of the institutions focused effort to advance knowledge and educate students in.",
              button: {
                label: "Explore Labs",
                url: "/",
                icon: {
                  url: "/images/research-icon-3.svg",
                  alternativeText: "Research",
                },
              },
              gallery: [],
              statistics: [
                {
                  id: 1,
                  icon: {
                    url: "/images/research-icon-1.svg",
                    alternativeText: "Research",
                  },
                  value: 200,
                  suffix: "+",
                  label: "Publications",
                },
                {
                  id: 2,
                  icon: {
                    url: "/images/research-icon-2.svg",
                    alternativeText: "Research",
                  },
                  value: 85,
                  suffix: "+",
                  label: "Funded Research Projects",
                },
                {
                  id: 3,
                  icon: {
                    url: "/images/research-icon-3.svg",
                    alternativeText: "Research",
                  },
                  value: 24,
                  suffix: "+",
                  label: "Innovation Driven Labs",
                },
              ],
              featuredCards: [
                {
                  id: 1,
                  slug: "/school-of-engineering",
                  title: "Ph.D Admissions",
                  image: {
                    url: "/images/researchItem-1.jpg",
                    alternativeText: "researchItem-1",
                  },
                },
                {
                  id: 2,
                  slug: "/school-of-engineering",
                  title: "Research Supervisors",
                  image: {
                    url: "/images/researchItem-2.jpg",
                    alternativeText: "researchItem-2",
                  },
                },
                {
                  id: 3,
                  slug: "/school-of-engineering",
                  title: "Ph.D Regulations",
                  image: {
                    url: "/images/researchItem-3.jpg",
                    alternativeText: "researchItem-3",
                  },
                },
                {
                  id: 4,
                  slug: "/school-of-engineering",
                  title: "Ph.D Course Work Syllabus",
                  image: {
                    url: "/images/researchItem-4.jpg",
                    alternativeText: "researchItem-4",
                  },
                },
              ],
            },
          },
        ],
      },
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
    data: {
      id: 1,
      documentId: "international-collaboration-1",
      attributes: { title: "internationalCollaboration" },
    },
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
      <Hero data={homePageData.hero} />
      <HomeExcellence data={homePageData.centresOfExcellence.data.attributes} />
      <Rankings />
      <HomeAcademic />
      {/* <ResearchInnovation
        data={homePageData.researchInnovation.data.attributes}
      /> */}
      <HomeIndustry data={homePageData?.industryCollaboration} />
      <HomeAbout data={homePageData?.homeAbout} />
      <HomeTestimonials data={homePageData?.studentSuccess} />
      <HomeCampusLife data={homePageData?.campusLife} />
      <Events />
      <News data={homePageData.latestNews} />
      <Journey />
    </main>
  );
}
