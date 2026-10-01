import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import NAACAquarSection from "@/components/sections/NAAC/NAAC-AquarSection";
import NAACJourney from "@/components/sections/NAAC/NAAC-journey";
import NBABoard from "@/components/sections/NBA/NBA-board";
import ProfessionalAccredition from "@/components/sections/professional-accredition/professional-accredition";
import { getAccreditationBySlug, getAccreditationPage } from "@/lib/api/index";

export const revalidate = 60;

const DEFAULT_HERO_MEDIA = {
  alternativeText: "Accreditations",
  mime: "image/jpg",
  // if video - mime: "video/mp4",
  url: "/images/ugc/ugc-banner.jpg",
};

export async function generateStaticParams() {
  const pageData = await getAccreditationPage();
  return (pageData?.listSection || [])
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageData = await getAccreditationBySlug(slug);

  return {
    title:
      pageData?.seo?.metaTitle || "Accreditations | Dayananda Sagar University",
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const pageData = await getAccreditationBySlug(slug);

  if (!pageData) notFound();

  // keep the local banner until one is uploaded in Strapi
  const hero = pageData.hero && {
    ...pageData.hero,
    heroMedia: pageData.hero.heroMedia || DEFAULT_HERO_MEDIA,
  };

  return (
    <>
      {hero && <InnerHero data={hero} />}
      {pageData.template === "naac" ? (
        <>
          {pageData.naccAccreditationData && (
            <NBABoard data={pageData.naccAccreditationData} />
          )}
          {pageData.dsuNaacJourneyData && (
            <NAACJourney data={pageData.dsuNaacJourneyData} />
          )}
          {pageData.aqarSection && (
            <NAACAquarSection data={pageData.aqarSection} />
          )}
        </>
      ) : (
        pageData.accreditationsData && (
          <ProfessionalAccredition
            data={pageData.accreditationsData}
            isLink={false}
          />
        )
      )}
    </>
  );
}
