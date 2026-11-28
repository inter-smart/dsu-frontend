import { FALLBACK_HERO_MEDIA } from "@/lib/schools/entity";
import { notFound, permanentRedirect, redirect } from "next/navigation";
import DepartmentPage, { departmentMetadata } from "@/components/sections/academics/department-page";
import { resolveSchoolChild } from "@/lib/schools/route";
import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import { getFlexiblePageBySlug } from "@/lib/api/flexible-page";
import { getSchoolBySlug } from "@/lib/api";
import { schoolLibrarySidebarItems } from "@/lib/schools/items";
import { usesDepartments } from "@/lib/schools/tab-page";

// /schools/<school>/<x>: a department of the school (Overview tab), or a Flexible Page that belongs to the school
// (<x> = the page slug, shown with the school's tab menu).
async function load(slug, pageSlug) {
    const page = await getFlexiblePageBySlug(pageSlug);
    if (!page?.school?.slug) notFound();
    // wrong school in the URL: send to the page's real address instead of a 404
    if (page.school.slug !== slug) redirect(`/schools/${page.school.slug}/${pageSlug}`);
    const school = await getSchoolBySlug(slug);
    return { page, school };
}

export async function generateMetadata({ params }) {
    const { slug, pageSlug } = await params;
    const target = await resolveSchoolChild(slug, pageSlug);
    if (target.kind === "department") return departmentMetadata(slug, pageSlug);
    if (target.kind === "other-school") return {};
    const page = await getFlexiblePageBySlug(pageSlug);
    if (!page || page.school?.slug !== slug) return {};
    return { title: page.seo?.metaTitle, description: page.seo?.metaDescription };
}

export default async function Page({ params }) {
    const { slug, pageSlug } = await params;
    const target = await resolveSchoolChild(slug, pageSlug);
    if (target.kind === "department") return <DepartmentPage schoolSlug={slug} departmentSlug={pageSlug} />;
    if (target.kind === "other-school") permanentRedirect(`/schools/${target.schoolSlug}/${pageSlug}`);
    const { page, school } = await load(slug, pageSlug);

    const hero = {
        ...page.hero,
        heroMedia: page.hero?.heroMedia?.url ? page.hero.heroMedia : FALLBACK_HERO_MEDIA,
        breadcrumb: page.hero?.breadcrumb?.length
            ? page.hero.breadcrumb
            : [
                { label: "Home", href: "/" },
                { label: "Schools", href: "/schools" },
                { label: page.school.name, href: `/schools/${slug}` },
                { label: page.title, href: `/schools/${slug}/${pageSlug}` },
            ],
    };
    const sidebar = page.sidebar || [];
    // Library sections: this page's own sub-pages only; none = no side menu
    const libraryMenu = page.librarySubpages?.length ? schoolLibrarySidebarItems(slug, page.librarySubpages, pageSlug) : [];

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={usesDepartments(school)}>
            <FlexibleSections sections={page.sections} sidebar={sidebar} menu={libraryMenu} slug={page.slug} />
        </SchoolTabShell>
    );
}
