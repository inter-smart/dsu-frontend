import Hero from "@/components/sections/home/hero";
import About from "@/components/sections/home/about";
import Programs from "@/components/sections/home/programs";
import Rankings from "@/components/sections/home/rankings";
import News from "@/components/sections/home/news";
import Events from "@/components/sections/home/events";
import Journey from "@/components/sections/home/journey";
import Testimonials from "@/components/sections/home/testimonials";
import CTA from "@/components/sections/home/cta";

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
        programItems: [
          {
            id: 1,
            icon: {
              url: "/images/research-item-1.svg",
              alternativeText: "Research",
            },
            featuredTitle: "Research",
            featuredImage: {
              url: "/images/home-academicPrograms-item1.jpg",
              alternativeText: "DGX B200 Supercomputers",
            },
            slug: "/",
            title: "Research at DSU",
            description:
              "In the five decades since the establishment of Dayananda Sagar Institutions in 1960, the group has grown into one of India’s leading educational institutions today.This growth is the result of the institutions focused effort to advance knowledge and educate students in.",
            researchItem: [
              {
                id: 1,
                slug: "/school-of-engineering",
                featuredImage: {
                  url: "/images/researchItem-1.jpg",
                  alternativeText: "researchItem-1",
                },
                title: "Ph.D Admissions",
              },
              {
                id: 2,
                slug: "/school-of-engineering",
                featuredImage: {
                  url: "/images/researchItem-2.jpg",
                  alternativeText: "researchItem-2",
                },
                title: "Research Supervisors",
              },
              {
                id: 3,
                slug: "/school-of-engineering",
                featuredImage: {
                  url: "/images/researchItem-3.jpg",
                  alternativeText: "researchItem-3",
                },
                title: "Ph.D Regulations",
              },
              {
                id: 4,
                slug: "/school-of-engineering",
                featuredImage: {
                  url: "/images/researchItem-4.jpg",
                  alternativeText: "researchItem-4",
                },
                title: "Ph.D Course Work Syllabus",
              },
            ],
            publicationsInfo: {
              icon: {
                url: "/images/research-icon-1.svg",
                alternativeText: "Research",
              },
              label: "Publications",
              count: 200,
              suffix: "+",
            },
            fundedResearchInfo: {
              icon: {
                url: "/images/research-icon-2.svg",
                alternativeText: "Research",
              },
              label: "Funded Research Projects",
              count: 85,
              suffix: "+",
            },
            innovationInfo: {
              icon: {
                url: "/images/research-icon-3.svg",
                alternativeText: "Research",
              },
              label: "Innovation Driven Labs",
              count: 24,
              suffix: "+",
            },
            researchForumBtn: {
              icon: {
                url: "/images/research-icon-3.svg",
                alternativeText: "Research",
              },
              label: "UG Research Forum",
              count: 24,
              suffix: "+",
            },
          },
        ],
      },
    },
  },
  industryCollaboration: {
    data: {
      id: 1,
      documentId: "industry-collaboration-1",
      attributes: { title: "industryCollaboration" },
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
    data: {
      id: 1,
      documentId: "student-success-1",
      attributes: { title: "studentSuccess" },
    },
  },
  campusLife: {
    data: {
      id: 1,
      documentId: "campus-life-1",
      attributes: { title: "campusLife" },
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
      <About data={homePageData.centresOfExcellence.data.attributes} />
      <Programs data={homePageData.academicPrograms.data.attributes} />
      {/* <Rankings />
      <Events data={homePageData.events} />
      <Testimonials data={homePageData.studentSuccess} />
      <CTA data={homePageData.cta} />
      <News data={homePageData.latestNews} />
      <Journey /> 
      */}
    </main>
  );
}
