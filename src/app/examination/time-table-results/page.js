import InnerHero from "@/components/layout/common/InnerHero";
import ExaminationTimeTable from "@/components/sections/examination/examination-time-table";

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
        label: "Examination",
        href: "/",
      },
      {
        label: "Timetable",
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
    title: "Time Table for Theory Examinations",
    description:
      "Common certificate and convocation applications, in one place.",
    results: [
      {
        id: 1,
        url: "#",
        label:
          " Timetable for M.Pharm 1st Semester Theory Summer Term Theory Examination - Aug 2026",
        isNew: true,
      },
      {
        id: 2,
        url: "#",
        label:
          "Circular for M.Sc Odd Summer Term Theory Examination - Aug 2026",
        isNew: true,
      },
      {
        id: 3,
        url: "#",
        label: " Timetable for M.Sc Summer Term Theory Examination - Sept 2026",
        isNew: true,
      },
      {
        id: 4,
        url: "#",
        label: "Timetable for MPH Theory Supplementary Examination - Sept 2026",
        isNew: true,
      },
      {
        id: 5,
        url: "#",
        label:
          "Timetable for B.Sc (AHS) Supplementary Theoty Examination - Sept 2026",
        isNew: true,
      },
      {
        id: 6,
        url: "#",
        label: "Timetable for Ph.D Coursework Examination - Sept 2026",
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
      <ExaminationTimeTable data={local_data?.examinationResult} />
    </>
  );
}
