import { notFound } from "next/navigation";
import { getInnovationListingSlug } from "@/lib/api/innovation";
import InnovationPage, { generateMetadata as innovationMetadata } from "../../innovation/[slug]/page";

// An Innovation detail page at /research-innovation/<listing slug>/<slug> when the listing slug was
// changed in the CMS (the default /research-innovation/innovation/<slug> is its own folder).
const isListing = async (slug) => slug === (await getInnovationListingSlug());

export async function generateMetadata({ params }) {
    const { slug, itemSlug } = await params;
    if (!(await isListing(slug))) return {};
    return innovationMetadata({ params: Promise.resolve({ slug: itemSlug }) });
}

export default async function Page({ params }) {
    const { slug, itemSlug } = await params;
    if (!(await isListing(slug))) notFound();
    return <InnovationPage params={Promise.resolve({ slug: itemSlug })} viaSlug />;
}
