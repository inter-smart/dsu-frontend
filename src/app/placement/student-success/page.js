import InnerHero from "@/components/layout/common/InnerHero";
import AlumniWorld from "@/components/sections/placements/alumni-world";
import PlacementExcellence from "@/components/sections/placements/placement-excellence";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import StudentSuccess from "@/components/sections/placements/student-success";
import StudentSuccessStories from "@/components/sections/placements/student-success-stories";

const local_data = {
  seo: {
    metaTitle: "Student Success | Placements | DSU",
    metaDescription:
      "Real stories, meaningful journeys and career milestones from DSU students.",
    canonicalUrl: null,
  },
  hero: {
    heroMedia: {
      alternativeText: "Dayananda Sagar University campus",
      mime: "image/jpg",
      url: "/images/academic-banner.jpg",
    },
    title: "Placements",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Placements", href: "/placement" },
      {
        label: "Student Success",
        href: "/placement/student-success",
      },
    ],
    PlacementmenuBar: true,
  },
  studentSuccess: {
    sucessStories: [
      {
        id: 1,
        label: "Placements · Student Success",
        title: "Student Success",
        description:
          "Real stories. Meaningful journeys. A thriving future.From rewarding careers and industry exposure to entrepreneurial ventures and global opportunities, DSU students continue to build meaningful journeys across diverse fields.",
      },
      {
        id: 2,
        label: "Placement Stories",
        title: "Building Careers with Leading Organisations",
        description:
          "Our students are making their mark across industries, taking on diverse roles and building rewarding careers through campus recruitment and industry connections.",
        stories: [
          {
            id: 1,
            title: "Ravi Sharma",
            description: "Placed at",
            media: {
              url: "/images/sucess-stories-1.jpg",
              alt: "Placement Stories",
            },
            logo: {
              url: "/images/sucess-stories-logo-1.png",
              alt: "Placement Stories",
            },
          },
          {
            id: 2,
            title: "Arjun Mehta",
            description: "Placed at",
            media: {
              url: "/images/sucess-stories-2.jpg",
              alt: "Placement Stories",
            },
            logo: {
              url: "/images/sucess-stories-logo-2.png",
              alt: "Placement Stories",
            },
          },
          {
            id: 3,
            title: "Sanjay Kapoor",
            description: "Placed at",
            media: {
              url: "/images/sucess-stories-3.jpg",
              alt: "Placement Stories",
            },
            logo: {
              url: "/images/sucess-stories-logo-3.png",
              alt: "Placement Stories",
            },
          },
          {
            id: 4,
            title: "Vikram Joshi",
            description: "Placed at",
            media: {
              url: "/images/sucess-stories-2.jpg",
              alt: "Placement Stories",
            },
            logo: {
              url: "/images/sucess-stories-logo-4.png",
              alt: "Placement Stories",
            },
          },
        ],
      },
      {
        id: 3,
        label: "Internship Stories",
        title: "Learning Through Real-World Experience",
        description:
          "Internships give students valuable industry exposure, helping them apply classroom learning, develop professional skills and understand real workplace environments.",
        stories: [
          {
            id: 1,
            title: "Ravi Sharma",
            description: "Placed at",
            media: {
              url: "/images/sucess-story-1.jpg",
              alt: "Placement Stories",
            },
            logo: {
              url: "/images/sucess-story-logo-1.png",
              alt: "Placement Stories",
            },
          },
          {
            id: 2,
            title: "Arjun Mehta",
            description: "Placed at",
            media: {
              url: "/images/sucess-story-2.jpg",
              alt: "Placement Stories",
            },
            logo: {
              url: "/images/sucess-story-logo-2.png",
              alt: "Placement Stories",
            },
          },
          {
            id: 3,
            title: "Sanjay Kapoor",
            description: "Placed at",
            media: {
              url: "/images/sucess-story-3.jpg",
              alt: "Placement Stories",
            },
            logo: {
              url: "/images/sucess-story-logo-3.png",
              alt: "Placement Stories",
            },
          },
          {
            id: 4,
            title: "Vikram Joshi",
            description: "Placed at",
            media: {
              url: "/images/sucess-story-2.jpg",
              alt: "Placement Stories",
            },
            logo: {
              url: "/images/sucess-story-logo-4.png",
              alt: "Placement Stories",
            },
          },
        ],
      },
    ],
  },
  alumniWorld: {
    label: "Alumni Success",
    title: "DSU Alumni <br> Around the World",
    description:
      "Our alumni are contributing to diverse industries and communities across the globe, building a strong DSLJ network,",
    alumniWorld: [
      {
        id: 1,
        media: {
          url: "/images/alumni-world-1.jpg",
          alt: "Image-1",
        },
        logo: {
          url: "/images/alumni-world-logo-1.png",
          alt: "Image-1",
        },
        title: "Aishwarya Nair",
        description:
          "B.Sc Computer Science, 2023 <br> Software Engineer. Infosys",
      },
      {
        id: 2,
        media: {
          url: "/images/alumni-world-2.jpg",
          alt: "Image-1",
        },
        logo: {
          url: "/images/alumni-world-logo-2.png",
          alt: "Image-1",
        },
        title: "Rajesh Kumar",
        description:
          "B.Sc Computer Science, 2015 <br> Indian Marketing head, Amazon",
      },
      {
        id: 3,
        media: {
          url: "/images/alumni-world-3.jpg",
          alt: "Image-1",
        },
        logo: {
          url: "/images/alumni-world-logo-3.png",
          alt: "Image-1",
        },
        title: "Kavya",
        description: "B.Sc Computer Science, 2023 <br> Manager, Zoho",
      },
      {
        id: 4,
        media: {
          url: "/images/alumni-world-4.jpg",
          alt: "Image-1",
        },
        logo: {
          url: "/images/alumni-world-logo-4.png",
          alt: "Image-1",
        },
        title: "Sunil Chetri",
        description: "B.Sc Computer Science, 2013 <br> System Engineer,  NVDIA",
      },
      {
        id: 5,
        media: {
          url: "/images/alumni-world-5.jpg",
          alt: "Image-1",
        },
        logo: {
          url: "/images/alumni-world-logo-5.png",
          alt: "Image-1",
        },
        title: "Rahul KL",
        description:
          "B.Sc Computer Science, 2023 <br> Software Engineer, Quest",
      },
      {
        id: 6,
        media: {
          url: "/images/alumni-world-2.jpg",
          alt: "Image-1",
        },
        logo: {
          url: "/images/alumni-world-logo-2.png",
          alt: "Image-1",
        },
        title: "Rajesh Kumar",
        description:
          "B.Sc Computer Science, 2015 <br> Indian Marketing head, Amazon",
      },
    ],
  },
  excellence: {
    eyebrow: "AWARDS & ACHIEVEMENTS",
    heading: "Recognising Excellence",
    description: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Celebrate student achievements across academic excellence, innovation, competitions, research, leadership and other areas of accomplishment.",
          },
        ],
      },
    ],
    achievements: [
      {
        id: 1,
        title: "Warriors Boxing Tournament - Silver",
        subtitle: "Asif Saleem, BCA",
        media: {
          alternativeText: "Asif Saleem, Warriors Boxing Tournament silver medallist",
          mime: "image/jpg",
          url: "/images/award-1.jpg"
        }
      },
      {
        id: 2,
        title: "Republic Debate Competition- Runners",
        subtitle: "Team from School Of Engineering",
        media: {
          alternativeText: "Debate competition runners-up team",
          mime: "image/jpg",
          url: "/images/award-2.jpg"
        }
      },
      {
        id: 3,
        title: "Women's Table Tennis - 1st Prize",
        subtitle: "Upasna M S, MBA",
        media: {
          alternativeText: "Upasna M S with table tennis prize",
          mime: "image/jpg",
          url: "/images/award-3.jpg"
        }
      },
      {
        id: 4,
        title: "National Volleyball Championship – 1st Place",
        subtitle: "Nupur, BBA LLB",
        media: {
          alternativeText: "Volleyball championship winning team",
          mime: "image/jpg",
          url: "/images/award-4.jpg"
        }
      },
      {
        id: 5,
        title: "Winners — Smart India Hackathon 2024",
        subtitle: "Team from School Of Engineering",
        media: {
          alternativeText: "Smart India Hackathon 2024 winners with cheque",
          mime: "image/jpg",
          url: "/images/award-5.jpg"
        }
      },
      {
        id: 6,
        title: "Solo Dance- 1st Prize",
        subtitle: "Sneha Pathra, CSE (AI & ML)",
        media: {
          alternativeText: "Solo dance first prize winners",
          mime: "image/jpg",
          url: "/images/award-6.jpg"
        }
      },
      {
        id: 7,
        title: "RAP Competition, - 2nd Prize",
        subtitle: "Tej Sundara, BCA,",
        media:
        {
          alternativeText: "RAP competition second prize winners",
          mime: "image/jpg",
          url: "/images/award-7.jpg"
        }
      },

    ],
  },
  successStoriesSection: {
    heading: "Voices of Our Students",
    description: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "Hear from students about their learning journey, placement preparation, industry exposure and overall experience at DSU.",
          },
        ],
      },
    ],
    stories: [
      {
        id: 1,
        title: "From DSU to Industry",
        quote: "The placement training at DSU helped me improve my technical knowledge, communication and interview skills. The guidance and practical exposure gave me the confidence to take on the recruitment process.",
        name: "Arjun Menon",
        role: "Infosys",
        degree: "B.Tech CSE, 2023",
        avatar: "/images/avatar-1.jpg"
      },
      {
        id: 2,
        title: "Turning Preparation into Opportunity",
        quote: "The combination of academics, projects and placement preparation helped me understand what the industry expects. The experience gave me the confidence to perform well during the recruitment process.",
        name: "Ravi Sharma",
        role: "Advisor at Bain & Company",
        degree: "B.Sc Computer Science, 2023",
        avatar: "/images/avatar-1.jpg",
      },
      {
        id: 3,
        title: "Building Skills, Creating Opportunities",
        quote: "The combination of technical learning, hands-on projects and placement preparation at DSU helped me develop the confidence to face industry interviews. The support from the faculty and placement team made the recruitment journey",
        name: "Nisha Patel",
        role: "Analyst at Deloitte",
        degree: "B.Tech CSE, 2023",
        avatar: "/images/avatar-1.jpg",
      },
      {
        id: 4,
        title: "Preparing for a Professional Journey",
        quote: "My experience at DSU helped me grow beyond academics. Industry-oriented training, practical exposure and interview preparation helped me understand my strengths and approach the placement process with greater confidence.",
        name: "Karan Singh",
        role: "Strategist at Accenture",
        degree: "B.Tech in CSE, 2023",
        avatar: "/images/avatar-1.jpg",
      },
    ],
  },
};

export const metadata = {
  title: local_data.seo.metaTitle,
  description: local_data.seo.metaDescription,
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data.hero} />
      <PlacementmenuBar className="lg:hidden! block" />
      <StudentSuccess data={local_data?.studentSuccess} />
      <AlumniWorld data={local_data?.alumniWorld} />
      <PlacementExcellence data={local_data.excellence} />
      <StudentSuccessStories data={local_data.successStoriesSection} variant="bg-gradient"/>
    </>
  );
}
