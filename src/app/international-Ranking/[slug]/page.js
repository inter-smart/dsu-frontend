import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import NIRFRanking from "@/components/sections/NIRF/NIRF-ranking";
import {
  getInternationalRankingBySlug,
  getInternationalRankings,
} from "@/lib/api";

export const revalidate = 60;

const BASE_PATH = "/international-Ranking";

export async function generateStaticParams() {
  const menu = (await getInternationalRankings()) || [];
  return menu
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageData = await getInternationalRankingBySlug(slug);

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

// International Ranking entries always use the NIRF template
export default async function Page({ params }) {
  const { slug } = await params;
  const [pageData, menu] = await Promise.all([
    getInternationalRankingBySlug(slug),
    getInternationalRankings(),
  ]);

  if (!pageData) notFound();

  return (
    <>
      {pageData.hero && <InnerHero data={pageData.hero} />}
      {pageData.collegeRanking && (
        <NIRFRanking
          data={pageData.collegeRanking}
          menu={menu || []}
          basePath={BASE_PATH}
        />
      )}
    </>
  );
}
