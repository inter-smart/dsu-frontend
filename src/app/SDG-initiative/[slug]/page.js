import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import SDGInitativeDetails from "@/components/sections/SDG/SDG-initiativeDetails";
import { getSdgGoalBySlug, getSdgGoals } from "@/lib/api/index";
import { sdgHero } from "@/data/sdg";

export const revalidate = 60;

export async function generateStaticParams() {
  const goals = (await getSdgGoals()) || [];
  return goals.filter((g) => g.slug).map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const goal = await getSdgGoalBySlug(slug);

  return {
    title: goal?.seo?.metaTitle || "SDG Initiatives | Dayananda Sagar University",
    description: goal?.seo?.metaDescription || undefined,
    alternates: goal?.seo?.canonicalUrl
      ? { canonical: goal.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const [goal, goals] = await Promise.all([
    getSdgGoalBySlug(slug),
    getSdgGoals(),
  ]);

  if (!goal) notFound();

  // the goal's own banner; each field falls back to the shared SDG Initiatives banner,
  // with the goal appended to its breadcrumb
  const hero = {
    id: goal.hero?.id || sdgHero.id,
    title: goal.hero?.title || goal.heading || sdgHero.title,
    heroMedia: goal.hero?.heroMedia?.url ? goal.hero.heroMedia : sdgHero.heroMedia,
    breadcrumb: goal.hero?.breadcrumb?.length
      ? goal.hero.breadcrumb
      : [...sdgHero.breadcrumb, { label: goal.title, href: goal.url }],
  };

  // sidebar: every goal, labelled by its title
  const menu = (goals || []).map((g) => ({ label: g.title, slug: g.url }));

  return (
    <>
      <InnerHero data={hero} />
      <SDGInitativeDetails data={goal} menu={menu} />
    </>
  );
}
