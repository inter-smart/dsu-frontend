import InnerHero from "@/components/layout/common/InnerHero";
import AlumniNewsletter from "@/components/sections/alumni/alumni-newsletter";

const local_data = {
  hero: {
    id: 25,
    heroMedia: {
      url: "/images/faculty-banner.jpg",
      alternativeText: "Faculty Directory",
      mime: "image/jpg",
    },
    title: "Alumni",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Alumni",
        href: "/",
      },
      {
        label: "Alumni Events",
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <AlumniNewsletter />
    </>
  );
}
