import { notFound } from "next/navigation";
import CmsPageView from "@/components/flexible/CmsPageView";
import { getDoctoralResearchPageBySlug } from "@/lib/api/doctoral-research";

// A Doctoral Research entry (built like a Flexible Page) at /research-innovation/<slug>.
// The fixed pages in this folder (doctoral-research, innovation) take precedence over this route.
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const page = await getDoctoralResearchPageBySlug(slug);
    if (!page) return {};
    return { title: page.seo?.metaTitle || page.title, description: page.seo?.metaDescription };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const page = await getDoctoralResearchPageBySlug(slug);
    if (!page) notFound();
    return <CmsPageView page={page} />;
}
