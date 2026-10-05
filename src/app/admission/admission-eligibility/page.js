import InnerHero from "@/components/layout/common/InnerHero";
import AdmissionMenubar from "@/components/sections/admission/admissionMenubar";
import AdmissionCriteria from "@/components/sections/admission/admission-criteria";
import AdmissionEntrance from "@/components/sections/admission/admission-entrance";
import AdmissionEligibility from "@/components/sections/admission/admission-eligibility";

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
        label: "Eligibility & Selection",
      },
    ],
    admissionMenubar: true,
  },
  admissionEligibility: {
    title: "Find a programme that Fits Your Goals",
    description:
      "Explore undergraduate, postgraduate, doctoral, certificate, online and medical programmes at Dayananda Sagar University.",
    categories: [
      {
        id: "undergraduate",
        label: "Undergraduate",
        courses: [
          {
            id: "engineering",
            name: "School of Engineering",
            items: [
              {
                title: "B.Tech Computer Science & Engineering",
                level: "UG",
                duration: "4 Years",
                eligibility: {
                  title: "Eligibility",
                  description:
                    "Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects and obtained at least 45% marks (40% in case of candidate belonging to SC/ST & OBC category) in the above subjects taken together, of any Board recognized by the respective State Governments / Central Government / Union Territories or any other qualification recognized as equivalent thereto.",
                },
              },
              {
                title: "B.Tech Computer Science & Engineering (Data Sciences)",
                level: "UG",
                duration: "4 Years",
              },
              {
                title: "B.Tech Computer Science & Engineering (Cyber Security)",
                level: "UG",
                duration: "4 Years",
              },
              {
                title:
                  "B.Tech Computer Science & Engineering (Artificial Intelligence and Machine Learning)",
                level: "UG",
                duration: "5 Years",
              },
              {
                title: "B.Tech Robotics & AI",
                level: "UG",
                duration: "4 Years",
              },
              {
                title: "B.Tech Electronics & Communication Engineering",
                level: "UG",
                duration: "4 Years",
              },
              {
                title: "B.Tech Mechanical Engineering",
                level: "UG",
                duration: "4 Years",
              },
              {
                title: "B.Tech Computer Science & Technology",
                level: "UG",
                duration: "4 Years",
              },
              {
                title: "B.Tech Aerospace Engineering",
                level: "UG",
                duration: "4 Years",
              },
            ],
          },
          {
            id: "computer-applications",
            name: "School of Computer Applications",
            items: [
              {
                title: "Bachelor of Computer Applications",
                level: "UG",
                duration: "3 Years",
              },
              {
                title: "B.Sc. Data Science",
                level: "UG",
                duration: "3 Years",
              },
            ],
          },
          {
            id: "law",
            name: "School of Law",
            items: [
              { title: "B.A. LL.B.", level: "UG", duration: "5 Years" },
              { title: "B.B.A. LL.B.", level: "UG", duration: "5 Years" },
              { title: "LL.B.", level: "UG", duration: "3 Years" },
            ],
          },
          {
            id: "basic-applied-sciences",
            name: "School of Basic & Applied Sciences",
            items: [
              {
                title: "B.Sc. Biotechnology",
                level: "UG",
                duration: "3 Years",
              },
              { title: "B.Sc. Chemistry", level: "UG", duration: "3 Years" },
              { title: "B.Sc. Physics", level: "UG", duration: "3 Years" },
            ],
          },
          {
            id: "commerce-management",
            name: "School of Commerce & Management",
            items: [
              {
                title: "B.Sc. Biotechnology",
                level: "UG",
                duration: "3 Years",
              },
              { title: "B.Sc. Chemistry", level: "UG", duration: "3 Years" },
              { title: "B.Sc. Physics", level: "UG", duration: "3 Years" },
            ],
          },
          {
            id: "health-sciences",
            name: "School of Health Sciences",
            items: [
              {
                title: "B.Sc. Biotechnology",
                level: "UG",
                duration: "3 Years",
              },
              { title: "B.Sc. Chemistry", level: "UG", duration: "3 Years" },
              { title: "B.Sc. Physics", level: "UG", duration: "3 Years" },
            ],
          },
          {
            id: "arts-design-humanities",
            name: "School of Arts, Design & Humanities",
            items: [
              {
                title: "B.Sc. Biotechnology",
                level: "UG",
                duration: "3 Years",
              },
              { title: "B.Sc. Chemistry", level: "UG", duration: "3 Years" },
              { title: "B.Sc. Physics", level: "UG", duration: "3 Years" },
            ],
          },
          {
            id: "design-digital-transmedia",
            name: "School of Design & Digital Trans-Media",
            items: [
              {
                title: "B.Sc. Biotechnology",
                level: "UG",
                duration: "3 Years",
              },
              { title: "B.Sc. Chemistry", level: "UG", duration: "3 Years" },
              { title: "B.Sc. Physics", level: "UG", duration: "3 Years" },
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
                level: "PG",
                duration: "2 Years",
              },
              {
                title: "M.Tech Structural Engineering",
                level: "PG",
                duration: "2 Years",
              },
            ],
          },
          {
            id: "computer-applications",
            name: "School of Computer Applications",
            items: [
              {
                title: "Master of Computer Applications",
                level: "PG",
                duration: "2 Years",
              },
              {
                title: "M.Sc. Data Science",
                level: "PG",
                duration: "2 Years",
              },
            ],
          },
          {
            id: "law",
            name: "School of Law",
            items: [{ title: "LL.M.", level: "PG", duration: "1 Year" }],
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
                level: "Doctoral",
                duration: "3+ Years",
              },
            ],
          },
          {
            id: "management",
            name: "School of Commerce & Management Studies",
            items: [
              {
                title: "Ph.D. in Management",
                level: "Doctoral",
                duration: "3+ Years",
              },
            ],
          },
          {
            id: "basic-applied-sciences",
            name: "School of Basic & Applied Sciences",
            items: [
              {
                title: "Ph.D. in Basic & Applied Sciences",
                level: "Doctoral",
                duration: "3+ Years",
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
              { title: "Online MBA", level: "PG", duration: "2 Years" },
              { title: "Online BBA", level: "UG", duration: "3 Years" },
              { title: "Online BCA", level: "UG", duration: "3 Years" },
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
              { title: "B.Sc. Nursing", level: "UG", duration: "4 Years" },
              {
                title: "Bachelor of Physiotherapy",
                level: "UG",
                duration: "4.5 Years",
              },
              { title: "M.Sc. Nursing", level: "PG", duration: "2 Years" },
            ],
          },
        ],
      },
    ],
  },
  criteria: {
    subTitle: "Selection criteria",
    title: "How Selection Works",
    description:
      "The admission route depends on the programme. DSU publishes entrance-test and qualifying-examination requirements programme-wise.",
    criterias: [
      {
        id: 1,
        label: "Engineering",
        title: "Entrance / Ranking",
        description:
          "DSU's published eligibility page lists CET and ranking based on JEE Mains / Uni-GAUGE / COMED-K for applicable B.Tech admissions.",
      },
      {
        id: 2,
        label: "DSAT",
        title: "Scholarship Admission Test",
        description:
          "DSAT is used for applicable programmes. DSU describes it as an entrance examination assessing knowledge and aptitude; candidates clearing the threshold are eligible under the scholarship quota.",
      },
      {
        id: 3,
        label: "PG",
        title: "Programme-specific",
        description:
          "PG admissions use the applicable route such as PGCET or other programme-specific requirements listed by DSU.",
      },
    ],
  },
  lateral: {
    subTitle: "Lateral entry",
    title: "Lateral Entry",
    description:
      "Lateral-entry options are available only where the programme rules provide for them.",
    button: {
      label: "Enquire Now",
      link: "/",
    },
    criterias: [
      {
        id: 1,
        title: "B.Tech",
        description:
          "Admission to II year / III Semester B.Tech under lateral entry is open to candidates who have passed a diploma or equivalent qualification recognized by the statutory/regulatory body. DSU regulations also provide for eligible B.Sc graduates with the prescribed marks and bridge courses.",
      },
      {
        id: 2,
        title: "B.Pharm",
        description:
          "DSU's 2026-27 eligibility page states: Diploma holders in Pharmacy from an institution recognized by the Pharmacy Council of India are eligible for lateral entry.",
      },
      {
        id: 3,
        title: "Allied Health",
        description:
          "DSU states that eligible diploma holders may enter the second year in the same subject studied at diploma level. For B.Sc Emergency & Trauma Care Technology, eligible GNM candidates with valid State Nursing Council registration may enter the second year.",
      },
    ],
  },
  entrance: {
    subTitle: "Entrance examinations",
    title: "Entrance Exams & Admission Routes",
    description:
      "Use the examination or admission route applicable to your programme.",
    table: {
      columns: ["Examination / Route", "Use / Programme", "Code"],
      rows: [
        {
          route: "DSAT",
          use: "Dayananda Sagar Scholarship Admission Test; applicable to selected programmes.",
          code: "DSAT",
        },
        {
          route: "COMED-K",
          use: "Admission route listed by DSU for applicable programmes.",
          code: "E182",
        },
        {
          route: "Uni-GAUGE",
          use: "Admission route listed by DSU for applicable programmes.",
          code: "UNI-010",
        },
        {
          route: "CET",
          use: "Karnataka CET route listed by DSU for applicable B.Tech admissions.",
          code: "DSU-E240",
        },
        {
          route: "PGCET – M.Tech",
          use: "PG route listed by DSU for M.Tech, MBA and MCA.",
          code: "T970 · B365MB · C520MC",
        },
        {
          route: "PGCET – MBA",
          use: "PG route listed by DSU for MBA and MCA.",
          code: "B365MB",
        },
      ],
    },
    reservation: {
      subTitle: "Reservation policy",
      title: "Reservation",
      policyTitle: "Applicable Government Reservation Policy",
      description:
        "Reservation Policy of the Central Government (Including EWS) / Respective State Government / UT as the case shall be applicable to all the Programmes. The concerned State Government / UT Admission authority shall decide Modalities of Admission.",
    },
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data.hero} />
      <AdmissionMenubar className="lg:hidden! block" />
      <AdmissionEligibility data={local_data?.admissionEligibility} />
      <AdmissionCriteria data={local_data?.criteria} />
      <AdmissionEntrance data={local_data?.entrance} />
      <AdmissionCriteria data={local_data?.lateral} variant="lateral" />
    </>
  );
}
