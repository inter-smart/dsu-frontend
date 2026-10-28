import InnerHero from "@/components/layout/common/InnerHero";
import MediaCoverage from "@/components/sections/media-coverage/media-coverage";
import FloatingContactRail from "@/components/layout/common/floating-contact-rail";
import {
  getMediaCoveragePage,
  getMediaCoverageItemsPaged,
  MEDIA_PAGE_SIZE,
} from "@/lib/api/media-coverage";

export const revalidate = 60;

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

export default async function page() {
  const pageData = await getMediaCoveragePage();
  const paged = await getMediaCoverageItemsPaged(1, MEDIA_PAGE_SIZE, {
    next: { revalidate: 60 },
  });
  const hasData = paged?.data?.length > 0;

  const hero = pageData?.hero || local_data.hero;
  const mediaCoverage = {
    ...local_data.mediaCoverage,
    title: pageData?.title || local_data.mediaCoverage.title,
    description: pageData?.description || local_data.mediaCoverage.description,
    items: hasData ? paged.data : local_data.mediaCoverage.items,
    pagination: hasData ? paged.pagination : null,
  };

  return (
    <>
      <InnerHero data={hero} />
      <MediaCoverage data={mediaCoverage} />
      <FloatingContactRail />
    </>
  );
}
