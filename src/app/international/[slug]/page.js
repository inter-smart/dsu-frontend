import { notFound } from "next/navigation";
import { getInternationalPageBySlug } from "@/lib/api/international";
import InternationalPageView from "@/components/sections/international/international-page-view";
import { internationalMetadata } from "../metadata";

// Every other International entry (a second International Admission design or a Flexible Page) lives at /international/<slug>
export async function generateMetadata({ params }) {
    const { slug } = await params;
    return internationalMetadata(await getInternationalPageBySlug(slug));
}

export default async function Page({ params }) {
    const { slug } = await params;
    const page = await getInternationalPageBySlug(slug);
    if (!page) notFound();

    return <InternationalPageView page={page} />;
}
