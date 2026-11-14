import { notFound } from "next/navigation";
import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import { getFlexiblePageBySlug } from "@/lib/api/flexible-page";
import { getSchoolBySlug } from "@/lib/api";
import { usesDepartments } from "@/lib/schools/tab-page";

// A Flexible Page that belongs to a school: /schools/<school>/<page-slug>, with the school's tab menu.
async function load(slug, pageSlug) {
    const page = await getFlexiblePageBySlug(pageSlug);
    if (!page || page.school?.slug !== slug) notFound();
    const school = await getSchoolBySlug(slug);
    return { page, school };
}

export async function generateMetadata({ params }) {
    const { slug, pageSlug } = await params;
    const page = await getFlexiblePageBySlug(pageSlug);
    if (!page || page.school?.slug !== slug) return {};
    return { title: page.seo?.metaTitle, description: page.seo?.metaDescription };
}

export default async function Page({ params }) {
    const { slug, pageSlug } = await params;
    const { page, school } = await load(slug, pageSlug);

    const hero = {
        ...page.hero,
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Schools", href: "/schools" },
            { label: page.school.name, href: `/schools/${slug}` },
            { label: page.title, href: `/schools/${slug}/${pageSlug}` },
        ],
    };
    const sidebar = page.sidebar || [];

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={usesDepartments(school)}>
            <FlexibleSections sections={page.sections} sidebar={sidebar} menu={sidebar} slug={page.slug} />
        </SchoolTabShell>
    );
}
