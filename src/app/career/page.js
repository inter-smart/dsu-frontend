import { redirectToSlug } from "@/lib/page-routes";
import InnerHero from "@/components/layout/common/InnerHero";
import CareerIntro from "@/components/sections/career/career-intro";
import CareerOpenings from "@/components/sections/career/career-openings";
import FloatingContactRail from "@/components/layout/common/floating-contact-rail";
import { jobs } from "@/components/sections/career/jobs-data";
import { getCareersPage, getJobOpenings } from "@/lib/api/career";

export const revalidate = 60;

export async function generateMetadata() {
  const apiData = await getCareersPage();
  return {
    title: apiData?.seo?.metaTitle || "Career | Dayananda Sagar University",
    description: apiData?.seo?.metaDescription || undefined,
  };
}

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

export default async function page({ viaSlug } = {}) {
  await redirectToSlug("careers", viaSlug);
  const apiPage = await getCareersPage();
  const apiJobs = await getJobOpenings();

  const hero = apiPage?.hero || local_data.hero;
  const intro = apiPage?.intro || local_data.intro;
  const openingsTitle = apiPage?.openings?.title || local_data.openings.title;
  const jobList = apiJobs || jobs;

  return (
    <>
      <InnerHero data={hero} />
      {intro?.title && <CareerIntro data={intro} />}
      {jobList.length > 0 && (
        <CareerOpenings data={{ title: openingsTitle, jobs: jobList }} />
      )}
      <FloatingContactRail />
    </>
  );
}