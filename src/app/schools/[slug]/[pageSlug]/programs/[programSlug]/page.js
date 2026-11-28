import { redirectToProgramPage } from "@/components/sections/academics/program-page";

// Moved to /schools/[school]/programs/[programme]
export default async function Page({ params }) {
    const { slug, pageSlug, programSlug } = await params;
    await redirectToProgramPage(slug, programSlug, "overview", pageSlug);
}
