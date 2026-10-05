import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import NIRFRanking from "@/components/sections/NIRF/NIRF-ranking";
import { getRankingBySlug, getRankings } from "@/lib/api/index";

export const revalidate = 60;

const SLUG = "nirf";

export async function generateMetadata() {
  const pageData = await getRankingBySlug(SLUG);

  return {
    title: pageData?.seo?.metaTitle || "NIRF Rankings | Dayananda Sagar University",
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page() {
  const [pageData, menu] = await Promise.all([
    getRankingBySlug(SLUG),
    getRankings(),
  ]);

  if (!pageData) notFound();

  return (
    <>
      {pageData.hero && <InnerHero data={pageData.hero} />}
      {pageData.collegeRanking && (
        <NIRFRanking
          data={pageData.collegeRanking}
          menu={menu || []}
          activeSlug={SLUG}
        />
      )}
    </>
  );
}
