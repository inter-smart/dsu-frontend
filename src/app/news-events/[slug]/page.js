import { notFound, permanentRedirect } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import NewsEventsDetail from "@/components/sections/news-events/news-events-detail";
import { getNewsEventBySlug, getNewsEvents } from "@/lib/api";



export async function generateStaticParams() {
  const items = (await getNewsEvents()) || [];
  return items
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageData = await getNewsEventBySlug(slug);

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
  const pageData = await getNewsEventBySlug(slug);

  if (!pageData) notFound();
  // Alumni events live under the Alumni section
  if (pageData.newsEventsDetail?.type === "Alumni") {
    permanentRedirect(`/alumni/events/${encodeURIComponent(slug)}`);
  }
  // Announcements live under /announcements
  if (pageData.newsEventsDetail?.type === "Announcement") {
    permanentRedirect(`/announcements/${encodeURIComponent(slug)}`);
  }
  // Community Activities live under /community-activities
  if (pageData.newsEventsDetail?.type === "Community Activities") {
    permanentRedirect(`/community-activities/${encodeURIComponent(slug)}`);
  }

  return (
    <>
      {pageData.hero && <InnerHero data={pageData.hero} />}
      {pageData.newsEventsDetail && (
        <NewsEventsDetail data={pageData.newsEventsDetail} />
      )}
    </>
  );
}
