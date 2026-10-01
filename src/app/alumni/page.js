import InnerHero from "@/components/layout/common/InnerHero";
import Alumni from "@/components/sections/alumni/alumni";

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
      },
    ],
  },
  alumni: {
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
        slug: "/examination/results",
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
    title: "Welcome to Dayananda Sagar University Alumni Council",
    logo: {
      url: "/images/alumni-logo.png",
      alternativeText: "Alumni Council Logo",
    },
    alumniContent: `
    <p>On behalf of the entire Dayananda Sagar University community, it is our privilege and pleasure to warmly welcome you back to your alma mater. Your association with DSU is lifelong, and we deeply appreciate the continued pride, support, and inspiration you bring to our institution.</p>
    <p>
      Your time at DSU was marked by invaluable learning, personal growth, and enduring memories. We recognize the profound impact that your education and experiences here have had on your personal and professional journeys. We take great pride in your achievements and eagerly look forward to celebrating your future successes together.</p>
      <p>
      To facilitate your ongoing connection with DSU, the Alumni Section on our website provides regular updates on university news, upcoming events, alumni achievements, and ways to stay involved.</p>
    `,
    button: {
      label: "Alumni Register / Login",
      link: "/alumni",
    },
    alumniTitle:
      "As a cherished member of the DSU alumni community, you are invited to:",
    alumniContentList: `
      <ul>
        <li>Engage with fellow alumni through exclusive social platforms and university-hosted events.</li>
        <li>Stay informed about the latest campus developments, academic advancements, and institutional milestones.</li>
        <li>Participate in alumni-led projects and share your expertise to support DSU’s mission.</li>
        <li>Expand your professional network by connecting with DSU alumni across diverse industries and sectors.</li>
        <li>Contribute to the future of DSU by supporting scholarships, awards, and mentorship programs for current students.</li>
      </ul>
      <p>
        We look forward to your active participation and are excited to have you as an integral part of DSU’s vibrant and evolving journey.
    </p>
    <p>
    Best Regards <br />
    DSU Alumni Council <br />
    Dayananda Sagar University
    </p>
      `,
    missionVisionImage: {
      url: "/images/mission-vision.jpg",
      alternativetext: "Alumni Council Logo",
    },
    misionVision: [
      {
        id: 1,
        icon: {
          url: "/images/mission-icon.svg",
          alt: "mission-icon",
        },
        title: "Mission",
        description:
          "To undertake programmes that promote Alumni-Student interaction, a culture of sharing, and to cultivate a durable relationship between Alumni and the University",
      },
      {
        id: 2,
        icon: {
          url: "/images/vission-icon.svg",
          alt: "vission-icon",
        },
        title: "Vision",
        description:
          "To nurture in our Alumni a sense of community and life-long bonding with the University",
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <Alumni data={local_data?.alumni} />
    </>
  );
}
