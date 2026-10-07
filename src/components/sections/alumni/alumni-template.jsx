import InnerHero from "@/components/layout/common/InnerHero";
import Alumni from "@/components/sections/alumni/alumni";

const DEFAULT_HERO_MEDIA = {
  url: "/images/faculty-banner.jpg",
  alternativeText: "Alumni",
  mime: "image/jpg",
};

// Alumni sub-pages that are not managed in Strapi yet
const STATIC_SIDEBAR = [
  { label: "Mission & Vision", slug: "/alumni#mission-vision" },
  { label: "Alumni Events", slug: "/alumni/events" },
  { label: "Alumni Newsletter", slug: "/alumni/newsletter" },
  { label: "Contact", slug: "/alumni/contact" },
];

/**
 * Renders an Alumni collection entry (GET /api/alumnis/:slug).
 * `landingSlug` is the entry shown on /alumni, so its sidebar link points there.
 */
export default function AlumniTemplate({ pageData, landingSlug }) {
  // keep the local banner until one is uploaded in Strapi
  const hero = pageData?.hero && {
    ...pageData.hero,
    heroMedia: pageData.hero.heroMedia || DEFAULT_HERO_MEDIA,
  };

  const sidebar = [
    ...(pageData?.sidebar || []).map((item) => ({
      ...item,
      slug: item.slug === `/alumni/${landingSlug}` ? "/alumni" : item.slug,
    })),
    ...STATIC_SIDEBAR,
  ];

  return (
    <>
      {hero && <InnerHero data={hero} />}
      {pageData?.template === "alumni" && pageData?.alumni && (
        <Alumni data={{ ...pageData.alumni, sidebar }} />
      )}
  </>
  );
}
