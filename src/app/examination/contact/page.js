import InnerHero from "@/components/layout/common/InnerHero";
import ExaminationContact from "@/components/sections/examination/examination-contact";

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
        label: "Contact",
      },
    ],
  },
  examinationContact: {
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
    title: "Contact",
    contacts: [
      {
        id: 1,
        title: "Controller of Examinations",
        addressDetail: {
          title: "DSU Main Campus,",
          address: `Devarakaggalahalli, Harohalli,<br />
                  Kanakapura Road, Ramanagara Dt.,<br />
                  Bengaluru – 562 112, Karnataka, India.`,
        },
        contactDetail: [
          {
            id: 1,
            icon: {
              url: "/images/examination-contact-icon-1.svg",
              alternativeText: "Contact Icon",
            },
            title: "Contact Details - Examination Department:",
            details: [
              {
                id: 1,
                type: "call",
                label: "School of Engineering",
                value: "+919606022151",
              },
              {
                id: 2,
                type: "call",
                label: "School of Health Sciences & MBBS",
                value: "+919606022147",
              },
            ],
          },
          {
            id: 2,
            icon: {
              url: "/images/examination-contact-icon-2.svg",
              alternativeText: "Contact Icon",
            },
            title: "E-Mail:",
            details: [
              {
                id: 1,
                type: "email",
                value: "coe@dsu.edu.in",
              },
            ],
          },
        ],
        contactTime: "09:00 AM to 04:00 PM",
      },
      {
        id: 2,
        title: "DSU City Innovation Campus,",
        addressDetail: {
          address: `Kudlu Gate, Hosur Road,<br />
                  Bengaluru - 560 068 <br />
                  Karnataka, India.`,
        },
        contactDetail: [
          {
            id: 2,
            details: [
              {
                id: 1,
                type: "call",
                label: "Ph",
                value: "080 - 49092979/78",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <ExaminationContact data={local_data?.examinationContact} />
    </>
  );
}
