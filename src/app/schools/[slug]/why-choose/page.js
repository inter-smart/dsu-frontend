import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import WhyChoose from "@/components/sections/academics/why-choose";
import { hasContent, loadSchoolTabData, schoolTabMetadata } from "@/lib/schools/tab-page";

const TAB = "why-choose";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return schoolTabMetadata(slug, TAB);
}

export default async function Page({ params }) {
    const { slug } = await params;
    const { data, hero, hasDepartments } = await loadSchoolTabData(slug, TAB);

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={hasDepartments}>
            {hasContent(data.whyChooseThisSchool) && <WhyChoose data={data.whyChooseThisSchool} />}
        </SchoolTabShell>
    );
}
