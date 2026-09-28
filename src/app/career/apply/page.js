import { Suspense } from "react";
import InnerHero from "@/components/layout/common/InnerHero";
import ApplyForm from "@/components/sections/career/apply-form/apply-form";
import FloatingContactRail from "@/components/layout/common/floating-contact-rail";
import { jobs } from "@/components/sections/career/jobs-data";

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

export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <Suspense fallback={null}>
        <ApplyForm jobs={jobs} />
      </Suspense>
      <FloatingContactRail />
    </>
  );
}
