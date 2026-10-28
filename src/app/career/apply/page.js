import { Suspense } from "react";
import InnerHero from "@/components/layout/common/InnerHero";
import ApplyForm from "@/components/sections/career/apply-form/apply-form";
import FloatingContactRail from "@/components/layout/common/floating-contact-rail";

import { getCareersPage, getJobOpening } from "@/lib/api/career";

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

export default async function page({ searchParams }) {
  const { job: jobSlug } = await searchParams;
  const slug = Array.isArray(jobSlug) ? jobSlug[0] : jobSlug;

  const [apiPage, job] = await Promise.all([getCareersPage(), getJobOpening(slug)]);

  const hero = apiPage?.applyHero || local_data.hero;

  return (
    <>
      <InnerHero data={hero} />
      <Suspense fallback={null}>
        <ApplyForm job={job} />
      </Suspense>
      <FloatingContactRail />
    </>
  );
}
