import { getInternationalPage } from "@/lib/api/international";
import InternationalPageView from "@/components/sections/international/international-page-view";
import { internationalMetadata } from "./metadata";

export async function generateMetadata() {
    return internationalMetadata(await getInternationalPage());
}

export default async function Page() {
    const page = await getInternationalPage();

    // The content lives in Strapi only: without it there is nothing true to show
    if (!page) {
        return (
            <section className="container py-[160px] text-center">
                <h1 className="text-[28px] font-bold text-[#1a1a1a]">International Admission</h1>
                <p className="mt-3 text-[16px] text-[#555]">
                    This page is temporarily unavailable. Please try again in a few minutes.
                </p>
            </section>
        );
    }

    return <InternationalPageView page={page} />;
}
