import InnerHero from "@/components/layout/common/InnerHero";
import AlumniNewsletter from "@/components/sections/alumni/alumni-newsletter";

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
  alumniNewsLetter: {
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
        slug: "/alumni/newsletter",
      },
      {
        label: "Contact",
        slug: "/examination/rules",
      },
    ],
    title: "Alumni Newsletter",
    button: {
      label: "Alumni Register / Login",
      link: "/alumni/events",
    },
    description:
      "On behalf of the entire Dayananda Sagar University community, it is our privilege and pleasure to warmly welcome you back to your alma mater. Your association with DSU is lifelong, and we deeply appreciate the continued pride, support, and inspiration you bring to our institution.",
    newsLetter: [
      {
        id: 1,
        title: "July - September 2025, Volume - 9",
        link: "/alumni/newsletter",
      },
      {
        id: 2,
        title: "April - June 2025, Volume - 8",
        link: "/alumni/newsletter",
      },
      {
        id: 3,
        title: "January - March 2025, Volume - 7",
        link: "/alumni/newsletter",
      },
      {
        id: 4,
        title: "October - December 2024, Volume - 6",
        link: "/alumni/newsletter",
      },
      {
        id: 5,
        title: "July - September 2024, Volume - 5",
        link: "/alumni/newsletter",
      },
      {
        id: 6,
        title: "April - June 2024, Volume - 4",
        link: "/alumni/newsletter",
      },
      {
        id: 7,
        title: "January - March 2024, Volume - 3",
        link: "/alumni/newsletter",
      },
      {
        id: 8,
        title: "October - December 2023, Volume - 2",
        link: "/alumni/newsletter",
      },
      {
        id: 9,
        title: "July - September 2023, Volume - 1",
        link: "/alumni/newsletter",
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <AlumniNewsletter data={local_data?.alumniNewsLetter} />
    </>
  );
}
