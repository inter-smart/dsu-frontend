import InnerHero from "@/components/layout/common/InnerHero";
import FacultyDetail from "@/components/sections/faculty/faculty-detail";

const local_data = {
  hero: {
    id: 25,
    heroMedia: {
      url: "/images/faculty-banner.jpg",
      alternativeText: "Faculty Directory",
      mime: "image/jpg",
    },
    title: "Faculty Directory",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "AI Enabled Academics",
        href: "/",
      },
      {
        label: "Faculty Directory",
        href: "/",
      },
      {
        label: "Detail",
      },
    ],
  },
};

export default function page({ data }) {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <FacultyDetail data={local_data?.facultyDetail} />
    </>
  );
}
