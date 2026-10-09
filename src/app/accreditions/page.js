import InnerHero from "@/components/layout/common/InnerHero";
import ProfessionalAccredition from "@/components/sections/professional-accredition/professional-accredition";
import { getAccreditationPage } from "@/lib/api";



const DEFAULT_HERO = {
  heroMedia: {
    alternativeText: "Accreditations",
    mime: "image/jpg",
    // if video - mime: "video/mp4",
    url: "/images/ugc/ugc-banner.jpg",
  },
  title: "Accreditations",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Why DSU", href: "/why-dsu" },
    { label: "Recognition, Accreditation & Rankings", href: "/" },
    { label: "Accreditations" },
  ],
};

export async function generateMetadata() {
  const pageData = await getAccreditationPage();

  return {
    title:
      pageData?.seo?.metaTitle ||
      "Accreditations | Dayananda Sagar University",
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page() {
  const pageData = await getAccreditationPage();

  // keep the local banner until one is uploaded in Strapi
  const hero = {
    ...DEFAULT_HERO,
    ...pageData?.hero,
    heroMedia: pageData?.hero?.heroMedia || DEFAULT_HERO.heroMedia,
  };

  // listSection: [{ id, icon, title, slug, description }]
  const cards = (pageData?.listSection || [])
    .filter((item) => item?.slug)
    .map((item) => ({
      ...item,
      logo: item.icon?.url || null,
      link: `/accreditions/${item.slug}`,
    }));

  return (
    <>
      <InnerHero data={hero} />
      {cards.length > 0 && <ProfessionalAccredition data={{ cards }} />}
    </>
  );
}
