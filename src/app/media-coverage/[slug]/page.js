import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import NewsEventsDetail from "@/components/sections/news-events/news-events-detail";
import { getMediaCoverageBySlug, getMediaCoverageItems } from "@/lib/api/media-coverage";

export const revalidate = 60;

export async function generateStaticParams() {
  const items = (await getMediaCoverageItems()) || [];
  return items.filter((i) => i.slug).map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageData = await getMediaCoverageBySlug(slug);
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
  const pageData = await getMediaCoverageBySlug(slug);
  if (!pageData) notFound();

  return (
    <>
      {pageData.hero && <InnerHero data={pageData.hero} />}
      {pageData.newsEventsDetail && (
        <NewsEventsDetail
          data={pageData.newsEventsDetail}
          backHref="/media-coverage"
          backLabel="Back to Media Coverage"
        />
      )}
    </>
  );
}