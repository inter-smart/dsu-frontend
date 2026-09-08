import InnerHero from "@/components/layout/common/InnerHero";
import NewsEvents from "@/components/sections/news-events/news-events";

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
  newsEvents: {
    title: "News & Events",
    newsEvents: [
      {
        id: 1,
        path: "/images/news-event-1.jpg",
        title:
          "AI Adoption in Higher Education: Key for Building a Net-Zero Future Enabled Viksit Bharat 2047   ",
        date: "29th",
        year: "Dec 2025",
        link: "#!",
      },
      {
        id: 2,
        path: "/images/news-event-2.jpg",
        title:
          "DSU is hosting FICCI-MERCEDES BENZ roadshow on 16th Dec 2025, at DSU Main campus, Harohalli",
        date: "29th",
        year: "Dec 2025",
        link: "#!",
      },
      {
        id: 3,
        path: "/images/news-event-3.jpg",
        title:
          "DSU is participating as EDUTECH Sponsor in the Bengaluru Tech Summit-2025",
        date: "29th",
        year: "Dec 2025",
        link: "#!",
      },
      {
        id: 4,
        path: "/images/news-event-4.jpg",
        title:
          "Five Days Faculty Development Program on“Entangle 25: A Hands-on workshop on Quantum Computing & its emerging paradigms",
        date: "15th",
        year: "Dec 2025",
        link: "#!",
      },
      {
        id: 5,
        path: "/images/news-event-5.jpg",
        title:
          "International Conference on Translational and Technological Advances in Health Sciences",
        date: "15th",
        year: "Dec 2025",
        link: "#!",
      },
      {
        id: 6,
        path: "/images/news-event-6.jpg",
        title: "5th National Pharmacovigilance Week Celebrations",
        date: "15th",
        year: "Dec 2025",
        link: "#!",
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <NewsEvents data={local_data?.newsEvents} />
    </>
  );
}
