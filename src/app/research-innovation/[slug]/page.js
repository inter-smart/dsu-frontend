import { notFound } from "next/navigation";
import CmsPageView from "@/components/flexible/CmsPageView";
import { getDoctoralResearchPageBySlug } from "@/lib/api/doctoral-research";
import { getInnovationListingSlug } from "@/lib/api/innovation";
import { PHD_BASE, phdMenuItems } from "@/data/research/phd-admission";
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

// Doctoral Research menu bar: the entry's Sidebar links when it has any; the Ph.D. Admission page
// falls back to the Ph.D. menu (Eligibility, Admission Process, ...), other entries show none.
const PHD_MENU_DEFAULT_SLUGS = new Set(["phd-admission"]);
const doctoralMenuBar = (page) => {
    const own = (page.sidebar || []).filter((link) => link?.label && link?.href);
    const items = own.length ? own : PHD_MENU_DEFAULT_SLUGS.has(page.slug) ? phdMenuItems : [];
    return items.length ? { items, home: PHD_BASE } : null;
};

export default async function Page({ params }) {
    const { slug } = await params;
    const page = await getDoctoralResearchPageBySlug(slug);
    if (page) return <CmsPageView page={page} menuBar={doctoralMenuBar(page)} />;
    if (slug === (await getInnovationListingSlug())) return <InnovationListing viaSlug />;
    notFound();
}
