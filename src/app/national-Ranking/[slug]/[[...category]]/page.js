import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import NIRFRanking from "@/components/sections/NIRF/NIRF-ranking";
import SdgIntroduction from "@/components/sections/SDG/SdgInroduction";
import SDGInitativeDetails from "@/components/sections/SDG/SDG-initiativeDetails";
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

// segments: [] | [category | discipline | goal (SDG entry)] | [discipline, goal]
const getPageData = (slug, category = []) =>
  category.length > 2
    ? null
    : getRankingBySlug(slug, category[0], category[1]);

export async function generateMetadata({ params }) {
  const { slug, category } = await params;
  const pageData = await getPageData(slug, category);

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
    getPageData(slug, category),
    getRankings(),
  ]);

  if (!pageData) notFound();

  // template: "nirf" (default) | "sdg-initiative" - the discipline's own template on a
  // NIRF discipline sub-page; only NIRF entries have sub-pages (pageData.category is set).
  // `sdgGoal` is set on an SDG goal detail page (linked from the SDG goal tiles); there
  // `hero` is the goal's own banner (falling back to the discipline / entry banner).
  const isSdg = pageData.template === "sdg-initiative";
  if (isSdg && category?.length && !pageData.category && !pageData.sdgGoal) {
    notFound();
  }

  return (
    <>
      {pageData.hero && <InnerHero data={pageData.hero} />}
      {pageData.sdgGoal ? (
        <SDGInitativeDetails
          data={pageData.sdgGoal}
          menu={pageData.sdgGoalMenu}
        />
      ) : isSdg ? (
        pageData.sdgInitiative && (
          <SdgIntroduction data={pageData.sdgInitiative} />
        )
      ) : (
        pageData.collegeRanking && (
          <NIRFRanking data={pageData.collegeRanking} menu={menu || []} />
        )
      )}
    </>
  );
}
