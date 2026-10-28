import { redirectToProgramPage } from "@/components/sections/academics/program-page";

// Moved to /ai-enabled/[school]/programs/[programme]/[tab]
export default async function Page({ params }) {
    const { slug, programSlug, tab } = await params;
    await redirectToProgramPage(slug, programSlug, tab);
}
