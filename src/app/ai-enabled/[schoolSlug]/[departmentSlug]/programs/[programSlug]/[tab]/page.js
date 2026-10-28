import { redirectToProgramPage } from "@/components/sections/academics/program-page";

// Moved to /ai-enabled/[school]/programs/[programme]/[tab]
export default async function Page({ params }) {
    const { schoolSlug, departmentSlug, programSlug, tab } = await params;
    await redirectToProgramPage(schoolSlug, programSlug, tab, departmentSlug);
}
