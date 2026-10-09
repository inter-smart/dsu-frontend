import ExaminationTemplate from "@/components/sections/examination/examination-template";
import { getExaminationLandingPage } from "@/lib/api";


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
      },
    ],
  },
  template: "examination",
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
  examination: {
    title: "Examination",
    description:
      "The Examination Section has long realized the need for a credible, valid, effective and transparent evaluation system. In this pursuit, we have taken giant leaps in technology to ensure seamless processes for Question Paper setting, conduct of the examination, valuation & tabulation of results.",
    button: {
      label: "Student Data Verification",
      href: "/examination",
    },
    unversity: {
      title: "The University Has Implemented:",
      universityList: [
        "Computerized generation of Hall Tickets with ID recognition.",
        "Model/Synoptic answers and Marking Scheme for uniformity in the assessment, moderation/ revaluation.",
        "Coding/ bar coding of the answer books.",
        "100% digital valuation",
        "Double Blind Digital valuation on random selection.",
        "Scrutiny of the assessed/moderated answer books.",
        "Seamless & error-free computation of results.",
        "Stringent vigilance and penal measures against lapses & malpractices.",
      ],
    },
  },
};

export async function generateMetadata() {
  const pageData = await getExaminationLandingPage();

  return {
    title:
      pageData?.seo?.metaTitle || "Examination | Dayananda Sagar University",
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page() {
  let pageData = await getExaminationLandingPage();

  pageData = pageData;
  if (!pageData) return null;

  return <ExaminationTemplate pageData={pageData} />;
}
