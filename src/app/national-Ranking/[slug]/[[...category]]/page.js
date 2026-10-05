import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import NIRFRanking from "@/components/sections/NIRF/NIRF-ranking";
import SdgIntroduction from "@/components/sections/SDG/SdgInroduction";
import { getRankingBySlug, getRankings } from "@/lib/api/index";

export const revalidate = 60;

export async function generateStaticParams() {
  const menu = (await getRankings()) || [];
  return menu
    .filter((item) => item.slug)
    .flatMap((item) => [
      { slug: item.slug, category: [] },
      ...(item.subItems || []).map((sub) => ({
        slug: item.slug,
        category: [sub.slug],
      })),
    ]);
}

export async function generateMetadata({ params }) {
  const { slug, category } = await params;
  const pageData = await getRankingBySlug(slug, category?.[0]);

  return {
    title:
      pageData?.seo?.metaTitle ||
      "National Rankings | Dayananda Sagar University",
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page({ params }) {
  const { slug, category } = await params;
  const [pageData, menu] = await Promise.all([
    getRankingBySlug(slug, category?.[0]),
    getRankings(),
  ]);

  if (!pageData) notFound();

  // template: "nirf" (default) | "sdg-initiative"; only NIRF has category sub-pages
  const isSdg = pageData.template === "sdg-initiative";
  if (isSdg && category?.length) notFound();

  return (
    <>
      {pageData.hero && <InnerHero data={pageData.hero} />}
      {isSdg
        ? pageData.sdgInitiative && (
            <SdgIntroduction data={pageData.sdgInitiative} />
          )
        : pageData.collegeRanking && (
            <NIRFRanking data={pageData.collegeRanking} menu={menu || []} />
          )}
    </>
  );
}
