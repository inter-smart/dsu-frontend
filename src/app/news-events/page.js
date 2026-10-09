import InnerHero from "@/components/layout/common/InnerHero";
import NewsEvents from "@/components/sections/news-events/news-events";
import { getNewsEventsPage } from "@/lib/api";

export const revalidate = 60;

export async function generateMetadata() {
  const pageData = await getNewsEventsPage();

  return {
    title: pageData?.seo?.metaTitle || undefined,
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page() {
  const pageData = await getNewsEventsPage();

  return (
    <>
      {pageData?.hero && <InnerHero data={pageData.hero} />}
      {pageData?.newsEvents && <NewsEvents data={pageData.newsEvents} />}
    </>
  );
}
