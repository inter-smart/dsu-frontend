import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar"; 
import AcademicOverview from "@/components/sections/academics/academic-overview";
import AcademicContact from "@/components/sections/academics/academic-contact";
import { getSchoolTab } from "@/lib/api";
import { hasContent, usesDepartments } from "@/lib/schools/tab-page";




export async function generateMetadata({ params }) {
    const { slug } = await params;
    const school = await getSchoolTab(slug, "overview");
    return school?.seo ? { title: school.seo.metaTitle, description: school.seo.metaDescription } : {};
}

export default async function Page({ params }) {
    const { slug } = await params;
    const school = await getSchoolTab(slug, "overview");
    if (!school?.slug) notFound();
    const pageData = { ...school, ...school.tab };

    const data = pageData;
    const hasDepartments = usesDepartments(pageData);

    return (
        <>
            <InnerHero data={{ ...data.hero, slug, hasDepartments, menuBar: true }} />
            <AcademicMenubar className="md:!hidden block" slug={slug} hasDepartments={hasDepartments} />
            {hasContent(data.programOverviewSection) && <AcademicOverview data={data.programOverviewSection} />}
            {hasContent(data.contact) && <AcademicContact data={data.contact} schoolSlug={slug} />}
        </>
    )
}
