import { redirectToProgramPage } from "@/components/sections/academics/program-page";

// Moved to /schools/[school]/programs/[programme]/[tab]
export default async function Page({ params }) {
    const { slug, pageSlug, programSlug, tab } = await params;
    await redirectToProgramPage(slug, programSlug, tab, pageSlug);
}
