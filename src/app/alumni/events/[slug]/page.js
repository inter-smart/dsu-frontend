import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import NewsEventsDetail from "@/components/sections/news-events/news-events-detail";
import { getAlumniEventsPage, getNewsEventBySlug } from "@/lib/api";

export const revalidate = 60;

const DEFAULT_HERO_MEDIA = {
  url: "/images/faculty-banner.jpg",
  alternativeText: "Alumni",
  mime: "image/jpg",
};

// Alumni event = a News & Event entry with type "Alumni"
async function getAlumniEvent(slug) {
  const pageData = await getNewsEventBySlug(slug);
  return pageData?.newsEventsDetail?.type === "Alumni" ? pageData : null;
}

export async function generateStaticParams() {
  const { pageData } = await getAlumniEventsPage();
  return (pageData?.alumniEvents?.events || [])
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageData = await getAlumniEvent(slug);

  return {
    title: pageData?.seo?.metaTitle || undefined,
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const pageData = await getAlumniEvent(slug);

  if (!pageData) notFound();

  const hero = pageData.hero && {
    ...pageData.hero,
    heroMedia: pageData.hero.heroMedia || DEFAULT_HERO_MEDIA,
  };

  return (
    <>
      {hero && <InnerHero data={hero} />}
      {pageData.newsEventsDetail && (
        <NewsEventsDetail
          data={pageData.newsEventsDetail}
          backHref="/alumni/events"
        />
      )}
    </>
  );
}
