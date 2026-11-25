import { notFound } from "next/navigation";
import CmsPageView from "@/components/flexible/CmsPageView";
import { getLibraryBySlug } from "@/lib/api/library";
import { seoMetadata } from "@/lib/seo";
import { libraryMenu } from "@/lib/library-menu";

// The Library page: the "Library" entry with the slug "library" (About Library template, or flexible sections)
export async function generateMetadata() {
    const page = await getLibraryBySlug("library");
    return seoMetadata(page?.seo, page?.hero?.title || page?.title || "Library");
}

export default async function Page() {
    const page = await getLibraryBySlug("library");
    if (!page) notFound();

    return <CmsPageView page={{ ...page, sidebar: libraryMenu(page.menu) }} sidebarLayout={page.template === "flexible-page"} />;
}
