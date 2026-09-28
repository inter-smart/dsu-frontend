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
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <ExaminationCareer data={local_data?.examinationCareer} />
      <ExaminationOpening />
    </>
  );
}
