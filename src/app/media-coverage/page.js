import InnerHero from "@/components/layout/common/InnerHero";
import MediaCoverage from "@/components/sections/media-coverage/media-coverage";
import MediaCoverageFloatingContact from "@/components/sections/media-coverage/media-coverage-floating-contact";

const local_data = {
  hero: {
    id: 1,
    heroMedia: {
      url: "/images/media-coverage-hero-644103.png",
      alternativeText: "Media Coverage",
      mime: "image/png",
    },
    title: "Media Coverage",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Media Coverage",
      },
    ],
  },
  mediaCoverage: {
    title: "Press & News Mentions",
    description:
      "Community outreach, campus visuals, and press coverage for Dayananda Sagar University — all in one place.",
    loadMoreLink: "#!",
    items: [
      {
        id: 1,
        path: "/images/media-coverage-card-1.png",
        title:
          "DSU launches new AI-driven research centre in partnership with industry leaders",
        source: "The Hindu",
        date: "18 Mar 2026",
        link: "#!",
      },
      {
        id: 2,
        path: "/images/media-coverage-card-3.png",
        title: "DSU students win national-level hackathon for sustainable tech solution",
        source: "Deccan Herald",
        date: "02 Feb 2026",
        link: "#!",
      },
      {
        id: 3,
        path: "/images/media-coverage-card-5.png",
        title:
          "Dayananda Sagar University's NAAC A+ accreditation renewal covered by regional press",
        source: "Times of India — Bengaluru",
        date: "15 Dec 2025",
        link: "#!",
      },
      {
        id: 4,
        path: "/images/media-coverage-card-2.png",
        title: "How DSU is building an \"AI-first\" curriculum across departments",
        source: "Education Times",
        date: "30 Sep 2025",
        link: "#!",
      },
      {
        id: 5,
        path: "/images/media-coverage-card-4.png",
        title: "DSU's community outreach programme recognised at state-level CSR summit",
        source: "Bangalore Mirror",
        date: "08 Aug 2025",
        link: "#!",
      },
      {
        id: 6,
        path: "/images/media-coverage-card-5.png",
        title:
          "Dayananda Sagar University's NAAC A+ accreditation renewal covered by regional press",
        source: "Times of India — Bengaluru",
        date: "15 Dec 2025",
        link: "#!",
      },
    ],
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data?.hero} />
      <MediaCoverage data={local_data?.mediaCoverage} />
      <MediaCoverageFloatingContact />
    </>
  );
}
