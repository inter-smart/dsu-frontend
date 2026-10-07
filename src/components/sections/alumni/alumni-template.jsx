import InnerHero from "@/components/layout/common/InnerHero";
import Alumni from "@/components/sections/alumni/alumni";
import AlumniEvents from "@/components/sections/alumni/alumni-events";
import AlumniNewsletter from "@/components/sections/alumni/alumni-newsletter";
import AlumniContact from "@/components/sections/alumni/alumni-contact";

const DEFAULT_HERO_MEDIA = {
  url: "/images/faculty-banner.jpg",
  alternativeText: "Alumni",
  mime: "image/jpg",
};

// Alumni sub-pages that are not managed in Strapi yet
const STATIC_SIDEBAR = [
  { label: "Mission & Vision", slug: "/alumni#mission-vision" },
];

/**
 * Renders an Alumni collection entry (GET /api/alumnis/:slug).
 * Sidebar links come from Strapi (the "alumni" template entry links to /alumni).
 */
export default function AlumniTemplate({ pageData }) {
  // keep the local banner until one is uploaded in Strapi
  const hero = pageData?.hero && {
    ...pageData.hero,
    heroMedia: pageData.hero.heroMedia || DEFAULT_HERO_MEDIA,
  };

  const strapiSidebar = pageData?.sidebar || [];
  // "alumni" template entry (/alumni) first, Mission & Vision second, then the rest
  const alumniLink = strapiSidebar.filter((s) => s.slug === "/alumni");
  const otherLinks = strapiSidebar.filter((s) => s.slug !== "/alumni");
  // static links not already served by a Strapi entry
  const staticLinks = STATIC_SIDEBAR.filter(
    (item) => !strapiSidebar.some((s) => s.slug === item.slug),
  );
  const sidebar = [...alumniLink, ...staticLinks, ...otherLinks];
  return (
    <>
      {hero && <InnerHero data={hero} />}
      {pageData?.template === "alumni" && pageData?.alumni && (
        <Alumni data={{ ...pageData.alumni, sidebar }} />
      )}
      {pageData?.template === "alumni-events" && pageData?.alumniEvents && (
        <AlumniEvents data={{ ...pageData.alumniEvents, sidebar }} />
      )}
      {pageData?.template === "alumni-newsletter" &&
        pageData?.alumniNewsletter && (
          <AlumniNewsletter data={{ ...pageData.alumniNewsletter, sidebar }} />
        )}
      {pageData?.template === "alumni-contact" && pageData?.alumniContact && (
        <AlumniContact data={{ ...pageData.alumniContact, sidebar }} />
      )}
    </>
  );
}
