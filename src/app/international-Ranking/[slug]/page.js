import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import NIRFRanking from "@/components/sections/NIRF/NIRF-ranking";
import {
  getInternationalRankingBySlug,
  getInternationalRankings,
} from "@/lib/api";



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

// template: "nirf" (default) | "flexible-page"
export default async function Page({ params }) {
  const { slug } = await params;
  const [pageData, menu] = await Promise.all([
    getInternationalRankingBySlug(slug),
    getInternationalRankings(),
  ]);

  if (!pageData) notFound();

  return (
    <>
      {pageData.hero && <InnerHero data={pageData.hero} className="leadership-detail-hero" />}
      {pageData.template === "flexible-page" ? (
        <FlexibleSections sections={pageData.flexiblePage?.sections} menu={menu || []} />
      ) : pageData.collegeRanking && (
        <NIRFRanking
          data={{ ...pageData.collegeRanking, title: "" }}
          menu={menu || []}
          basePath={BASE_PATH}
        />
      )}
    </>
  );
}
