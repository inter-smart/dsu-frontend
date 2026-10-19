import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import NewsEvents from "@/components/sections/news-events/news-events";
import { hasContent, loadSchoolTabData, schoolTabMetadata } from "@/lib/schools/tab-page";

const TAB = "news-events";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return schoolTabMetadata(slug, TAB);
}

export default async function Page({ params }) {
    const { slug } = await params;
    const { data, hero, hasDepartments } = await loadSchoolTabData(slug, TAB);

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={hasDepartments}>
            {hasContent(data.newsEvents) && <NewsEvents data={data.newsEvents} schoolSlug={slug} />}
        </SchoolTabShell>
    );
}
