import { redirectToProgramPage } from "@/components/sections/academics/program-page";

// Moved to /ai-enabled/[school]/programs/[programme]
export default async function Page({ params }) {
    const { schoolSlug, departmentSlug, programSlug } = await params;
    await redirectToProgramPage(schoolSlug, programSlug, "overview", departmentSlug);
}
