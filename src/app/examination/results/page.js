import InnerHero from "@/components/layout/common/InnerHero";
import ExaminationResult from "@/components/sections/examination/examination-result";

const local_data = {
  hero: {
    id: 25,
    heroMedia: {
      url: "/images/faculty-banner.jpg",
      alternativeText: "Faculty Directory",
      mime: "image/jpg",
    },
    title: "Examination",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Results",
      },
    ],
  },
  examinationResult: {
    sidebar: [
      {
        label: "Examination Overview",
        slug: "/examination",
      },
      {
        label: "Exam Notifications",
        slug: "/examination/schedule",
      },
      {
        label: "Circulars",
        slug: "/examination/results",
      },
      {
        label: "Results",
        slug: "/examination/notices",
      },
      {
        label: "Exam Timetables ",
        slug: "/examination/rules",
      },
      {
        label: "Student Data Verification",
        slug: "/examination/contact",
      },
      {
        label: "Contact",
        slug: "/examination/contact",
      },
    ],
    title: "Results",
    description:
      "Common certificate and convocation applications, in one place.",
    results: [
      {
        id: 1,
        url: "#",
        label: "Ph.D Coursework Examinations result - April 2026",
        isNew: true,
      },
      {
        id: 2,
        url: "#",
        label: "EMBA Trimester Makeup Examination Result - April 2026",
        isNew: true,
      },
      {
        id: 3,
        url: "#",
        label: "2021 batch B.Sc Summer Term Result - August 2025",
        isNew: true,
      },
      {
        id: 4,
        url: "#",
        label: "B.Sc (N) - March 2025 Examinations Results are Announced",
        isNew: true,
      },
      {
        id: 5,
        url: "#",
        label: "BPT 4th Year Results are Announced",
        isNew: true,
      },
      {
        id: 6,
        url: "#",
        label: "B.Sc 1st semester Backlog Results are announced",
        isNew: true,
      },
      {
        id: 7,
        url: "#",
        label: "Supplementary B.Pharm, M.Pharm & Pharm D Results are announced",
        isNew: true,
      },
      {
        id: 8,
        url: "#",
        label: "BBA/BCom Summer Term Results are announced",
        isNew: true,
      },
      {
        id: 9,
        url: "#",
        label: "BA(JMC) Summer Term Results are announced",
        isNew: true,
      },
      {
        id: 10,
        url: "#",
        label: "M.Sc 4th semester Results are announced",
        isNew: true,
      },
      {
        id: 11,
        url: "#",
        label: "Pharm D Results are announced",
        isNew: true,
      },
      {
        id: 12,
        url: "#",
        label: "BA(JMC) even semester Results are announced",
        isNew: true,
      },
      {
        id: 13,
        url: "#",
        label: "M. Pharm 1st sem Results are announced",
        isNew: true,
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <ExaminationResult data={local_data?.examinationResult} />
    </>
  );
}
