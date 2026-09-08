import InnerHero from "@/components/layout/common/InnerHero";
import NewsEventsDetail from "@/components/sections/news-events/news-events-detail";

const local_data = {
  hero: {
    id: 25,
    heroMedia: {
      url: "/images/news-events-banner.jpg",
      alternativeText: "News & Events",
      mime: "image/jpg",
    },
    title: "News & Events",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "News & Events",
      },
    ],
  },
};
export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <NewsEventsDetail data={local_data?.newsEventsDetail} />
    </>
  );
}
