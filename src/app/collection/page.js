import { notFound } from "next/navigation";
import CmsPageView from "@/components/flexible/CmsPageView";
import { getLibraryBySlug } from "@/lib/api/library";
import { seoMetadata } from "@/lib/seo";
import { libraryMenu } from "@/lib/library-menu";

// Library sub-page "collection": a "Library" entry with this slug (template: Collections)
const SLUG = "collection";

export async function generateMetadata() {
    const page = await getLibraryBySlug(SLUG);
    return seoMetadata(page?.seo, page?.hero?.title || page?.title || "Library");
}

export default async function Page() {
    const page = await getLibraryBySlug(SLUG);
    if (!page) notFound();

    return <CmsPageView page={{ ...page, sidebar: libraryMenu(page.menu) }} sidebarLayout={page.template === "flexible-page"} />;
}
