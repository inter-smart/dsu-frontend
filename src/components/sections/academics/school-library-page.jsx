import { notFound } from "next/navigation";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import LibraryOverview from "@/components/sections/ai-enabled/library/library-overview";
import LibraryServices from "@/components/sections/ai-enabled/library/library-services";
import LibraryDownloads from "@/components/sections/ai-enabled/library/library-download";
import LibraryAutomation from "@/components/sections/ai-enabled/library/library-automation";
import LibraryFaq from "@/components/sections/ai-enabled/library/library-Faq";
import LibraryGallery from "@/components/sections/ai-enabled/library/library-gallery";
import { getSchoolLibraryPage } from "@/lib/api";
import { FALLBACK_HERO_MEDIA } from "@/lib/schools/entity";
import { schoolLibraryHref, schoolLibrarySidebarItems } from "@/lib/schools/items";
import { loadSchoolTabData, schoolTabMetadata, usesDepartments } from "@/lib/schools/tab-page";
import * as adapt from "@/lib/schools/department-adapters";
import { seoMetadata } from "@/lib/seo";

// Library landing page of a school (/schools/[slug]/library): the same Library layout as a department's.
export const schoolLibraryMetadata = (slug) => schoolTabMetadata(slug, "library");

export async function SchoolLibraryOverview({ slug }) {
    const { data, hero, hasDepartments } = await loadSchoolTabData(slug, "library");
    const library = adapt.librarySection(data.librarySection);
    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={hasDepartments}>
            {library && <LibraryOverview data={library} menu={schoolLibrarySidebarItems(slug, data.sidebar)} />}
        </SchoolTabShell>
    );
}

async function loadSubpage(slug, pageSlug, flexSlug) {
    const res = await getSchoolLibraryPage(slug, pageSlug, flexSlug ? { flex: flexSlug } : undefined);
    if (!res?.slug || !res.page?.slug) notFound();
    return res;
}

export async function schoolLibraryPageMetadata(slug, pageSlug, flexSlug) {
    const res = await loadSubpage(slug, pageSlug, flexSlug);
    // the API fills an unset Meta Title with the page title, so anything else was typed in Strapi: use it as is
    const custom = res.page.seo?.metaTitle && res.page.seo.metaTitle !== res.page.title;
    return seoMetadata({
        ...res.page.seo,
        metaTitle: custom ? res.page.seo.metaTitle : `${res.page.title} | Library | ${res.name}`,
    });
}

// The template picked for the sub-page in the CMS decides the component; each takes the side menu as `menu`.
function Template({ page, menu, schoolSlug, flexSlug }) {
    const content = page.content ?? {};
    switch (page.template) {
        case "flexible-page":
            return <FlexibleSections sections={page.sections} menu={menu} libraryLayout />;
        case "services":
            return <LibraryServices data={adapt.libraryServicesContent(content)} menu={menu} />;
        case "downloads":
        case "abbreviations":
            return <LibraryDownloads data={adapt.libraryFilesContent(content)} menu={menu} />;
        case "automation":
            return <LibraryAutomation data={adapt.libraryAutomationContent(content)} menu={menu} />;
        case "faqs":
            return <LibraryFaq data={adapt.libraryFaqsContent(content)} menu={menu} />;
        case "gallery":
            return <LibraryGallery data={adapt.libraryGalleryContent(content)} menu={menu} schoolSlug={schoolSlug} pageSlug={page.slug} flexSlug={flexSlug} />;
        default:
            return null;
    }
}

// One Library sub-page of a school, authored in the school's Library entry (Subpages).
export async function SchoolLibrarySubpage({ slug, pageSlug, flexSlug }) {
    const res = await loadSubpage(slug, pageSlug, flexSlug);
    const hero = {
        ...res.hero,
        heroMedia: res.hero?.heroMedia?.url ? res.hero.heroMedia : FALLBACK_HERO_MEDIA,
        breadcrumb: res.hero?.breadcrumb?.length
            ? res.hero.breadcrumb
            : [
                  { label: "Home", href: "/" },
                  { label: "Schools", href: "/schools" },
                  { label: res.name, href: `/schools/${slug}` },
                  ...(flexSlug
                      ? [{ label: res.page.title, href: `/schools/${slug}/${flexSlug}/${pageSlug}` }]
                      : [
                            { label: "Library", href: schoolLibraryHref(slug) },
                            { label: res.page.title, href: schoolLibraryHref(slug, pageSlug) },
                        ]),
              ],
    };
    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={usesDepartments(res)}>
            <Template page={res.page} menu={schoolLibrarySidebarItems(slug, res.sidebar, flexSlug)} schoolSlug={slug} flexSlug={flexSlug} />
        </SchoolTabShell>
    );
}
