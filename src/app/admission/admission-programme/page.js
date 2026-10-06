import InnerHero from "@/components/layout/common/InnerHero";
import AdmissionMenubar from "@/components/sections/admission/admissionMenubar";
import AdmissionProgramme from "@/components/sections/admission/admission-programme";

const local_data = {
  id: 24,
  documentId: "a67zp5r21a35cb8qlzrjp54s",
  createdAt: "2026-06-05T05:56:45.609Z",
  updatedAt: "2026-06-11T06:26:08.249Z",
  publishedAt: "2026-06-11T06:26:08.337Z",
  seo: {
    id: 21,
    metaTitle: "Placements page title",
    metaDescription: "Placements page description ",
    canonicalUrl: null,
  },
  hero: {
    id: 25,
    heroMedia: {
      alternativeText: "Placements page title",
      mime: "image/jpg",
      // if video - mime: "video/mp4",
      url: "/images/academic-banner.jpg",
    },
    title: "Admission",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },

      {
        label: "Admission @ DSU",
        href: "/",
      },
      {
        label: "Programme",
      },
    ],
    admissionMenubar: true,
  },
  admissionProgramme: {
    title: "Find a programme that Fits Your Goals",
    description:
      "Explore undergraduate, postgraduate, doctoral, certificate, online and medical programmes at Dayananda Sagar University.",
    categories: [
      {
        id: "undergraduate",
        label: "UG Program",
        courses: [
          {
            id: "engineering",
            name: "School of Engineering",
            items: [
              {
                title: "B.Tech Computer Science & Engineering",
                link: "/items/btech-computer-science-and-engineering",
              },
              {
                title: "B.Tech Computer Science & Engineering (Data Sciences)",
                link: "/items/btech-computer-science-and-engineering-data-sciences",
              },
              {
                title: "B.Tech Computer Science & Engineering (Cyber Security)",
                link: "/items/btech-computer-science-and-engineering-cyber-security",
              },
              {
                title:
                  "B.Tech Computer Science & Engineering (Artificial Intelligence and Machine Learning)",
                link: "/items/btech-computer-science-and-engineering-artificial-intelligence-and-machine-learning",
              },
              {
                title: "B.Tech Robotics & AI",
                link: "/items/btech-robotics-and-ai",
              },
              {
                title: "B.Tech Electronics & Communication Engineering",
                link: "/items/btech-electronics-and-communication-engineering",
              },
              {
                title: "B.Tech Mechanical Engineering",
                link: "/items/btech-mechanical-engineering",
              },
              {
                title: "B.Tech Computer Science & Technology",
                link: "/items/btech-computer-science-and-technology",
              },
              {
                title: "B.Tech Aerospace Engineering",
                link: "/items/btech-aerospace-engineering",
              },
            ],
          },
          {
            id: "computer-applications",
            name: "School of Computer Applications",
            items: [
              {
                title: "Bachelor of Computer Applications",
                link: "/items/bachelor-of-computer-applications",
              },
              {
                title: "B.Sc. Data Science",
                link: "/items/bsc-in-data-science",
              },
            ],
          },
          {
            id: "law",
            name: "School of Law",
            items: [
              { title: "B.A. LL.B.", link: "/items/ba-llb" },
              { title: "B.B.A. LL.B.", link: "/items/bba-llb" },
              { title: "LL.B.", link: "/items/llb" },
            ],
          },
          {
            id: "basic-applied-sciences",
            name: "School of Basic & Applied Sciences",
            items: [
              {
                title: "B.Sc. Biotechnology",
                link: "/items/bsc-biotechnology",
              },
              { title: "B.Sc. Chemistry", link: "/items/bsc-chemistry" },
              { title: "B.Sc. Physics", link: "/items/bsc-physics" },
            ],
          },
        ],
      },
      {
        id: "postgraduate",
        label: "Postgraduate",
        courses: [
          {
            id: "engineering",
            name: "School of Engineering",
            items: [
              {
                title: "M.Tech Computer Science & Engineering",
                link: "/items/mtech-computer-science-and-engineering",
              },
              {
                title: "M.Tech Structural Engineering",
                link: "/items/mtech-structural-engineering",
              },
            ],
          },
          {
            id: "computer-applications",
            name: "School of Computer Applications",
            items: [
              {
                title: "Master of Computer Applications",
                link: "/items/master-of-computer-applications",
              },
              {
                title: "M.Sc. Data Science",
                link: "/items/msc-in-data-science",
              },
            ],
          },
          {
            id: "law",
            name: "School of Law",
            items: [{ title: "LL.M.", link: "/items/llm" }],
          },
        ],
      },
      {
        id: "doctoral",
        label: "Doctoral",
        courses: [
          {
            id: "engineering",
            name: "School of Engineering",
            items: [
              {
                title: "Ph.D. in Engineering",
                link: "/items/phd-engineering",
              },
            ],
          },
          {
            id: "management",
            name: "School of Commerce & Management Studies",
            items: [
              { title: "Ph.D. in Management", link: "/items/phd-management" },
            ],
          },
          {
            id: "basic-applied-sciences",
            name: "School of Basic & Applied Sciences",
            items: [
              {
                title: "Ph.D. in Basic & Applied Sciences",
                link: "/items/phd-basic-and-applied-sciences",
              },
            ],
          },
        ],
      },
      {
        id: "online",
        label: "Online Programmes",
        courses: [
          {
            id: "online-programmes",
            name: "Online Programmes",
            items: [
              { title: "Online MBA", link: "/items/online-mba" },
              { title: "Online BBA", link: "/items/online-bba" },
              { title: "Online BCA", link: "/items/online-bca" },
            ],
          },
        ],
      },
      {
        id: "medical",
        label: "Medical Programmes",
        courses: [
          {
            id: "health-sciences",
            name: "School of Health Sciences",
            items: [
              { title: "B.Sc. Nursing", link: "/items/bsc-nursing" },
              {
                title: "Bachelor of Physiotherapy",
                link: "/items/bachelor-of-physiotherapy",
              },
              { title: "M.Sc. Nursing", link: "/items/msc-nursing" },
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
      <InnerHero data={local_data.hero} />
      <AdmissionMenubar className="lg:!hidden block" />
      <AdmissionProgramme data={local_data?.admissionProgramme} />
    </>
  );
}
