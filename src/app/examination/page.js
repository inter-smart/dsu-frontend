import InnerHero from "@/components/layout/common/InnerHero";
import Examination from "@/components/sections/examination/examination";

const local_data = {
  hero: {
    id: 25,
    heroMedia: {
      url: "/images/faculty-banner.jpg",
      alternativeText: "Faculty Directory",
      mime: "image/jpg",
    },
    title: "Examination",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Examination",
      },
    ],
  },
};

export default function page({ data }) {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <Examination />
    </>
  );
}
