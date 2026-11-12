import { notFound } from "next/navigation";
import CmsPageView from "@/components/flexible/CmsPageView";
import { getDoctoralResearchPageBySlug } from "@/lib/api/doctoral-research";
import { getInnovationListingSlug } from "@/lib/api/innovation";
import InnovationListing, { generateMetadata as innovationMetadata } from "../innovation/page";

// A Doctoral Research entry (built like a Flexible Page) at /research-innovation/<slug>, or the
// Innovation listing when its slug was changed in the CMS.
// The fixed pages in this folder (doctoral-research, innovation) take precedence over this route.
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const page = await getDoctoralResearchPageBySlug(slug);
    if (page) return { title: page.seo?.metaTitle || page.title, description: page.seo?.metaDescription };
    if (slug === (await getInnovationListingSlug())) return innovationMetadata();
    return {};
}

export default async function Page({ params }) {
    const { slug } = await params;
    const page = await getDoctoralResearchPageBySlug(slug);
    if (page) return <CmsPageView page={page} />;
    if (slug === (await getInnovationListingSlug())) return <InnovationListing viaSlug />;
    notFound();
}
