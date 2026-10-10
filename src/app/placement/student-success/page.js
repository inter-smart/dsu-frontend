import InnerHero from "@/components/layout/common/InnerHero";
import AlumniWorld from "@/components/sections/placements/alumni-world";
import PlacementExcellence from "@/components/sections/placements/placement-excellence";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import StudentSuccess from "@/components/sections/placements/student-success";

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
      <PlacementExcellence />
    </>
  );
}
