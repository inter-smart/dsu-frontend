import { notFound, permanentRedirect } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import NewsEventsDetail from "@/components/sections/news-events/news-events-detail";
import {
  getCommunityActivities,
  getCommunityActivityBySlug,
} from "@/lib/api/index";

export const revalidate = 60;

const COMMUNITY_TYPE = "Community Activities";

export async function generateStaticParams() {
  const items = (await getCommunityActivities()) || [];
  return items
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageData = await getCommunityActivityBySlug(slug);

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
  const pageData = await getCommunityActivityBySlug(slug);

  if (!pageData) notFound();
  // only News & Event entries with type "Community Activities" belong here
  const type = pageData.newsEventsDetail?.type;
  if (type !== COMMUNITY_TYPE) {
    permanentRedirect(type === "Alumni"
      ? `/alumni/events/${encodeURIComponent(slug)}`
      : type === "Announcement"
        ? `/announcements/${encodeURIComponent(slug)}`
        : `/news-events/${encodeURIComponent(slug)}`);
  }

  return (
    <>
      {pageData.hero && <InnerHero data={pageData.hero} />}
      {pageData.newsEventsDetail && (
        <NewsEventsDetail
          data={pageData.newsEventsDetail}
          backHref="/community-activities"
          backLabel="Back to Community Activities"
        />
      )}
    </>
  );
}
