import InnerHero from "@/components/layout/common/InnerHero";
import CareerIntro from "@/components/sections/career/career-intro";
import CareerOpenings from "@/components/sections/career/career-openings";
import FloatingContactRail from "@/components/layout/common/floating-contact-rail";
import { jobs } from "@/components/sections/career/jobs-data";

const local_data = {
  hero: {
    id: 1,
    heroMedia: {
      url: "/images/media-coverage-hero-644103.png",
      alternativeText: "Career",
      mime: "image/png",
    },
    title: "Career",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Career" },
    ],
  },
  intro: {
    title: "Shape Your Future with Endless Career Opportunities",
    description:
      "At Dayananda Sagar University, we are dedicated to equipping our students with the tools they need to transition seamlessly from academic life to the professional arena. Our approach emphasizes industry-focused learning, providing students with practical exposure through hands-on experiences, comprehensive career guidance, and valuable internships. We pride ourselves on our robust connections with a wide range of industries, ensuring that our students are not only prepared but also empowered to thrive in their chosen fields.",
    email: "careers@dsu.edu.in",
    image: "/images/career-intro-51720a.png",
  },
  openings: {
    title: "Current Openings",
    jobs,
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <CareerIntro data={local_data?.intro} />
      <CareerOpenings data={local_data?.openings} />
      <FloatingContactRail />
    </>
  );
}
