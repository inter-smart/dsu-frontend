import { notFound } from "next/navigation";
import CmsPageView from "@/components/flexible/CmsPageView";
import { getIncubationBySlug } from "@/lib/api/incubation";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const cms = await getIncubationBySlug(slug);
    return cms ? { title: cms.seo?.metaTitle || cms.title, description: cms.seo?.metaDescription } : {};
}

// A published "Incubation & Entrepreneurship" entry, built like a Flexible Page
export default async function Page({ params }) {
    const { slug } = await params;
    const cms = await getIncubationBySlug(slug);
    if (!cms) notFound();
    return <CmsPageView page={cms} />;
}
