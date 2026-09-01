import InnerHero from "@/components/layout/common/InnerHero";

const local_data = {
  hero: {
    id: 25,
    heroMedia: {
      alternativeText: "History page title",
      mime: "image/jpg",
      url: "/images/history/Banner.jpg",
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
    </>
  );
}
