import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import NewsEventsDetail from "@/components/sections/news-events/news-events-detail";
import { getAnnouncementBySlug, getAnnouncements } from "@/lib/api/index";

export const revalidate = 60;

export async function generateStaticParams() {
  const items = (await getAnnouncements()) || [];
  return items
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageData = await getAnnouncementBySlug(slug);

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
  const pageData = await getAnnouncementBySlug(slug);

  if (!pageData) notFound();

  return (
    <>
      {pageData.hero && <InnerHero data={pageData.hero} />}
      {pageData.newsEventsDetail && (
        <NewsEventsDetail
          data={pageData.newsEventsDetail}
          backHref="/announcements"
          backLabel="Back to Announcements"
        />
      )}
    </>
  );
}
