import InnerHero from "@/components/layout/common/InnerHero";
import ExaminationCareer from "@/components/sections/examination/examination-career";
import ExaminationOpening from "@/components/sections/examination/examination-opening";

const local_data = {
  hero: {
    id: 25,
    heroMedia: {
      url: "/images/faculty-banner.jpg",
      alternativeText: "Faculty Directory",
      mime: "image/jpg",
    },
    title: "Career",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Career",
      },
    ],
  },
  examinationCareer: {
    title: "Shape Your Future with Endless Career Opportunities",
    description:
      "At Dayananda Sagar University, we are dedicated to equipping our students with the tools they need to transition seamlessly from academic life to the professional arena. Our approach emphasizes industry-focused learning, providing students with practical exposure through hands-on experiences, comprehensive career guidance, and valuable internships. We pride ourselves on our robust connections with a wide range of industries, ensuring that our students are not only prepared but also empowered to thrive in their chosen fields. ",
    mail: "careers@dsu.edu.in",
    media: {
      url: "/images/examination-career.jpg",
      alternativeText: "Examination Career",
    },
  },
  examinationOpening: {
    title: "Current Openings",
    openings: [
      {
        id: 1,
        title: "Assistant Professor",
        description: "Department of Computer Science",
        requirements: [
          "5+ Years of Teaching Experience",
          "No of Positions : 3",
          "DSU Main Campus, Bangalore",
        ],
        qualifications: [
          "Ph.D. in Computer Science / Computer Science & Engineering from a recognized university.",
          "M.Tech / M.E. in Computer Science, Artificial Intelligence, Data Science, Information Technology, or related discipline.",
        ],
        jobDescription:
          "The Assistant Professor will play a vital role in the Department of Computer Science, contributing significantly to teaching, research, and academic development. This position entails delivering high-quality education to students, fostering their intellectual growth, and providing guidance throughout their academic journey. Additionally, the Assistant Professor will support the department's growth by engaging in innovative research projects, collaborating with colleagues, and participating in community outreach initiatives. This role is essential for shaping the future of the department and ensuring that students receive a comprehensive and enriching educational experience.",
      },
      {
        id: 2,
        title: "Associate Professor",
        description: "Department of Commerce",
        requirements: [
          "3+ Years of Teaching Experience",
          "No of Positions : 2",
          "DSU Main Campus, Bangalore",
        ],
        qualifications: [
          "A Ph.D. in Commerce, Management, or a closely related discipline from a recognized university.",
          "A relevant postgraduate degree with a strong record of teaching and research in Commerce.",
        ],
        jobDescription:
          "The Associate Professor will contribute to teaching, research, and academic development in the Department of Commerce. The role includes mentoring students, supporting curriculum development, and collaborating with colleagues on research and departmental initiatives.",
      },
      {
        id: 3,
        title: "Lecturer",
        description: "Department of Mechanical Engineering",
        requirements: [
          "1+ Years of Teaching Experience",
          "No of Positions : 4",
          "DSU Main Campus, Bangalore",
        ],
        qualifications: [
          "A postgraduate degree in Mechanical Engineering or a closely related discipline.",
          "Relevant subject expertise and a commitment to effective teaching and student development.",
        ],
        jobDescription:
          "The Lecturer will deliver engaging instruction in the Department of Mechanical Engineering, support practical learning, and guide students in their academic work. The role also involves contributing to course development and departmental activities.",
      },
      {
        id: 4,
        title: "Associate Professor",
        description: "Department of Mathematics",
        requirements: [
          "7+ Years of Teaching Experience",
          "No of Positions : 2",
          "DSU Main Campus, Bangalore",
        ],
        qualifications: [
          "A Ph.D. in Mathematics or a closely related discipline from a recognized university.",
          "A strong record of teaching, research, and academic contribution in Mathematics.",
        ],
        jobDescription:
          "The Associate Professor will lead high-quality teaching and research in the Department of Mathematics, mentor students and colleagues, and contribute to curriculum development and academic leadership.",
      },
      {
        id: 5,
        title: "Lecturer",
        description: "Department of Physics",
        requirements: [
          "3+ Years of Teaching Experience",
          "No of Positions : 4",
          "DSU Main Campus, Bangalore",
        ],
        qualifications: [
          "A postgraduate degree in Physics or a closely related discipline from a recognized university.",
          "Relevant teaching experience and the ability to support practical and research-led learning.",
        ],
        jobDescription:
          "The Lecturer will teach and support learning in the Department of Physics, guide students through theoretical and practical coursework, and contribute to curriculum and departmental activities.",
      },
      {
        id: 6,
        title: "Research Fellow",
        description: "Department of Chemistry",
        requirements: [
          "PhD Required",
          "No of Positions : 1",
          "DSU Main Campus, Bangalore",
        ],
        qualifications: [
          "A Ph.D. in Chemistry or a closely related discipline from a recognized university.",
          "Experience in research methods, laboratory practice, and scholarly communication.",
        ],
        jobDescription:
          "The Research Fellow will contribute to research projects in the Department of Chemistry, conduct laboratory and literature-based work, and collaborate with faculty on analysis, reporting, and dissemination of findings.",
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <ExaminationCareer data={local_data?.examinationCareer} />
      <ExaminationOpening data={local_data?.examinationOpening} />
    </>
  );
}
