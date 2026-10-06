import InnerHero from "@/components/layout/common/InnerHero";
import AdmissionFee from "@/components/sections/admission/admission-fee";
import AdmissionMenubar from "@/components/sections/admission/admissionMenubar";

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
        label: "Fees & Scholarships",
      },
    ],
    admissionMenubar: true,
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data.hero} />
      <AdmissionMenubar className="lg:hidden! block" />
      <AdmissionFee />
    </>
  );
}
