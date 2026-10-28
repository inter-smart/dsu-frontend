import { notFound, permanentRedirect } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import NewsEventsDetail from "@/components/sections/news-events/news-events-detail";
import { getAnnouncementBySlug, getAnnouncements } from "@/lib/api";



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
  // only News & Event entries with type "Announcement" belong here
  if (pageData.newsEventsDetail?.type !== "Announcement") {
    const type = pageData.newsEventsDetail?.type;
    permanentRedirect(type === "Alumni"
      ? `/alumni/events/${encodeURIComponent(slug)}`
      : type === "Community Activities"
        ? `/community-activities/${encodeURIComponent(slug)}`
        : `/news-events/${encodeURIComponent(slug)}`);
  }

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
