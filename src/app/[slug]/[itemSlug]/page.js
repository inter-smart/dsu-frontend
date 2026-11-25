import { notFound } from "next/navigation";
import { getPageSlugs } from "@/lib/page-routes";
import CentrePage, { generateMetadata as centreMetadata } from "../../centres-of-excellence/[slug]/page";

// A Centre of Excellence lives under the Centres listing page's CMS slug: /<listing slug>/<centre slug>
async function isCentresBase(slug) {
  return (await getPageSlugs())?.["centres-of-excellence"] === slug;
}

export async function generateMetadata({ params }) {
  const { slug, itemSlug } = await params;
  if (!(await isCentresBase(slug))) return {};
  return centreMetadata({ params: Promise.resolve({ slug: itemSlug }) });
}

export default async function Page({ params }) {
  const { slug, itemSlug } = await params;
  if (!(await isCentresBase(slug))) notFound();
  return <CentrePage params={Promise.resolve({ slug: itemSlug })} viaSlug />;
}
