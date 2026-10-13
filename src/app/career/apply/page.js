import { Suspense } from "react";
import InnerHero from "@/components/layout/common/InnerHero";
import ApplyForm from "@/components/sections/career/apply-form/apply-form";
import FloatingContactRail from "@/components/layout/common/floating-contact-rail";
import { jobs } from "@/components/sections/career/jobs-data";

import { getCareersPage, getJobOpenings } from "@/lib/api/career";

export const revalidate = 60;

const local_data = {
  hero: {
    id: 1,
    heroMedia: {
      url: "/images/media-coverage-hero-644103.png",
      alternativeText: "Apply Now",
      mime: "image/png",
    },
    title: "Apply Now",
    breadcrumb: [
      { label: "Home", href: "/" },
      { label: "Career", href: "/career" },
      { label: "Apply Now" },
    ],
  },
};

export default async function page() {
  const apiPage = await getCareersPage();
  const apiJobs = await getJobOpenings();

  const hero = apiPage?.applyHero || local_data.hero;
  const jobList = apiJobs || jobs;

  return (
    <>
      <InnerHero data={hero} />
      <Suspense fallback={null}>
        <ApplyForm jobs={jobList} />
      </Suspense>
      <FloatingContactRail />
    </>
  );
}
