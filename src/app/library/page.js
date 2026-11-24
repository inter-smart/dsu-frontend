import { notFound } from "next/navigation";
import CmsPageView from "@/components/flexible/CmsPageView";
import { getFlexiblePageBySlug } from "@/lib/api/flexible-page";
import { seoMetadata } from "@/lib/seo";

// The Library page is a Flexible Page with the slug "library" (its "About Library" template holds the content)
export async function generateMetadata() {
    const page = await getFlexiblePageBySlug("library");
    return seoMetadata(page?.seo, page?.hero?.title || page?.title || "Library");
}

export default async function Page() {
    const page = await getFlexiblePageBySlug("library");
    if (!page) notFound();

    return <CmsPageView page={page} />;
}
