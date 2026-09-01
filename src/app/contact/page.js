import InnerHero from "@/components/layout/common/InnerHero";
import Contact from "@/components/sections/contact/contact";

const local_data = {
  hero: {
    id: 25,
    heroMedia: {
      url: "/images/contact-banner.webp",
      alternativeText: "Contact page title",
      mime: "image/jpg",
    },
    title: "Contact us",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Locate us",
        href: "/why-dsu",
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data.hero} />
      <Contact />
    </>
  );
}
