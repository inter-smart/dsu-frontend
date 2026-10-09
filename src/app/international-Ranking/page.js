import InnerHero from "@/components/layout/common/InnerHero";
import NationalRanking from "@/components/sections/national-Ranking/national-Ranking";
import NationalRankingStats from "@/components/sections/national-Ranking/national-Ranking-stats";
import { getInternationalRankingPage } from "@/lib/api";



export async function generateMetadata() {
  const pageData = await getInternationalRankingPage();

  return {
    title:
      pageData?.seo?.metaTitle ||
      "International Rankings | Dayananda Sagar University",
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

// agency cards and stats reuse the National Rankings sections (same data shape)
export default async function Page() {
  const pageData = await getInternationalRankingPage();


  if (!pageData) return null;

  return (
    <>
      {pageData.hero && <InnerHero data={pageData.hero} />}
      {pageData.internationalRankingsData && (
        <NationalRanking data={pageData.internationalRankingsData} />
      )}
      {pageData.stats?.length > 0 && (
        <NationalRankingStats data={pageData.stats} />
      )}
    </>
  );
}
