import InnerHero from "@/components/layout/common/InnerHero";
import AlumniEvents from "@/components/sections/alumni/alumni-events";

const local_data = {
  hero: {
    id: 25,
    heroMedia: {
      url: "/images/faculty-banner.jpg",
      alternativeText: "Faculty Directory",
      mime: "image/jpg",
    },
    title: "Alumni",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Alumni",
        href: "/",
      },
      {
        label: "Alumni Events",
      },
    ],
  },
  alumniEvents: {
    sidebar: [
      {
        label: "Welcome Note",
        slug: "/alumni",
      },
      {
        label: "Mission & Vision",
        slug: "/examination/schedule",
      },
      {
        label: "Alumni Events",
        slug: "/alumni/events",
      },
      {
        label: "Alumni Newsletter",
        slug: "/examination/notices",
      },
      {
        label: "Contact",
        slug: "/examination/rules",
      },
    ],
    title: "Alumni Events",
    button: {
      label: "Alumni Register / Login",
      link: "/alumni/events",
    },
    description:
      "On behalf of the entire Dayananda Sagar University community, it is our privilege and pleasure to warmly welcome you back to your alma mater. Your association with DSU is lifelong, and we deeply appreciate the continued pride, support, and inspiration you bring to our institution.",
    events: [
      {
        id: 1,
        media: {
          url: "/images/alumni-events-1.jpg",
          alternativeText: "Alumni Events",
        },
        title: "DSU Gobal Alumni Meet",
        link: "/alumni/events",
      },
      {
        id: 2,
        media: {
          url: "/images/alumni-events-2.jpg",
          alternativeText: "Alumni Events",
        },
        title: "Excellence in Alma Connect",
        link: "/alumni/events",
      },
      {
        id: 3,
        media: {
          url: "/images/alumni-events-3.jpg",
          alternativeText: "Alumni Events",
        },
        title: "Nominations for Entrepreneurial Excellence",
        link: "/alumni/events",
      },
      {
        id: 4,
        media: {
          url: "/images/alumni-events-4.jpg",
          alternativeText: "Alumni Events",
        },
        title: "Excellence in Career Progression",
        link: "/alumni/events",
      },
      {
        id: 5,
        media: {
          url: "/images/alumni-events-5.jpg",
          alternativeText: "Alumni Events",
        },
        title: "Alumni Guest Session-SCMS 30 Nov 2024",
        link: "/alumni/events",
      },
      {
        id: 6,
        media: {
          url: "/images/alumni-events-5.jpg",
          alternativeText: "Alumni Events",
        },
        title: "Career Guidance-SOHS - 25 Oct 2024",
        link: "/alumni/events",
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <AlumniEvents data={local_data?.alumniEvents} />
    </>
  );
}
