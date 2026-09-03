import InnerHero from "@/components/layout/common/InnerHero";
import DSUDEADC from "@/components/sections/why-us/DSU-DEADC";

const local_data = {
  id: 24,
  documentId: "a67zp5r21a35cb8qlzrjp54s",
  createdAt: "2026-06-05T05:56:45.609Z",
  updatedAt: "2026-06-11T06:26:08.249Z",
  publishedAt: "2026-06-11T06:26:08.337Z",
  seo: {
    id: 21,
    metaTitle: "Women Redressal Cell page title",
    metaDescription: "Women Redressal Cell page description ",
    canonicalUrl: null,
  },
  hero: {
    id: 25,
    heroMedia: {
      alternativeText: "Women Redressal Cell",
      mime: "image/jpg",
      // if video - mime: "video/mp4",
      url: "/images/ugc/ugc-banner.jpg",
    },
    title: "Women Redressal Cell",
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
        label: "Student Support & Welfare",
        href: "/",
      },
      {
        label: "Women Redressal Cell",
        href: "/",
      },
    ],
  },
  capabilityEnhancementCells: {
    heading: "Capability Enhancement & Development Cells / Centres",
    description: [
      {
        type: "paragraph",
        children: [
          {
            type: "text",
            text: "DSU runs a set of dedicated cells and centres that support students beyond the classroom — from competitive-exam coaching and placement training to wellness, counselling and grievance redressal. Together these centres exist to build capability, confidence and well-being across every stage of a student's time at the university.",
          },
        ],
      },
    ],
    items: [
      {
        id: 1,
        title: "Guidance for Competitive Examinations",
        content: null,
        document: null,
        media: null,
      },
      {
        id: 2,
        title: "Training and Placement cell",
        content:
          "Coordinates campus recruitment, internship drives, resume building and interview preparation for final-year students.",
        document: {
          label: "View Document",
          file: {
            mime: "application/pdf",
            url: "/documents/training-and-placement-cell.pdf",
          },
        },
        media: null,
      },
      {
        id: 3,
        title: "Soft skill Development",
        content: null,
        document: null,
        media: null,
      },
      {
        id: 4,
        title: "Bridge Courses",
        content: null,
        document: null,
        media: null,
      },
      {
        id: 5,
        title: "Yoga and Meditation",
        content:
          "Join us for regular sessions designed to enhance both your physical and mental well-being. Our classes incorporate a blend of yoga, breathing exercises, and meditation techniques, providing a holistic approach to wellness. Whether you're a beginner or an experienced practitioner, these sessions will help you find balance, reduce stress, and cultivate mindfulness in your daily life.",
        document: {
          label: "View Document",
          file: {
            mime: "application/pdf",
            url: "/documents/yoga-and-meditation.pdf",
          },
        },
        media: {
          alternativeText:
            "Students practicing yoga and meditation outdoors on mats",
          mime: "image/jpg",
          // if video - mime: "video/mp4",
          url: "/images/yoga.jpg",
        },
      },
      {
        id: 6,
        title: "Personal Counselling",
        content: null,
        document: null,
        media: null,
      },
      {
        id: 7,
        title: "Student Grievances Redressal Cell",
        content: null,
        document: null,
        media: null,
      },
      {
        id: 8,
        title: "Anti-Ragging committee",
        content: null,
        document: null,
        media: null,
      },
      {
        id: 9,
        title: "Sexual harassment committee",
        content: null,
        document: null,
        media: null,
      },
      {
        id: 10,
        title: "NSS and Red Cross Society",
        content: null,
        document: null,
        media: null,
      },
      {
        id: 11,
        title: "Women Redressal Cell",
        content: null,
        document: null,
        media: null,
      },
      {
        id: 12,
        title: "Research Council",
        content: null,
        document: null,
        media: null,
      },
      {
        id: 13,
        title: "DERBI Incubation centre/Innovation Centre.",
        content: null,
        document: null,
        media: null,
      },
      {
        id: 14,
        title: "SWAYAM, MOOC & Development of E-content.",
        content: null,
        document: null,
        media: null,
      },
    ],
  },
};
export default function page() {
  return (
    <>
      <InnerHero data={local_data.hero} />
      <DSUDEADC data={local_data.capabilityEnhancementCells} />
    </>
  );
}
