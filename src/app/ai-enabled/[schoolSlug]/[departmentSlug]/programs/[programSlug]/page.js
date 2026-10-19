import ProgramPage, { programMetadata } from "@/components/sections/academics/program-page";

export async function generateMetadata({ params }) {
    const { schoolSlug, departmentSlug, programSlug } = await params;
    return programMetadata(schoolSlug, programSlug, "overview", departmentSlug);
}

export default async function Page({ params }) {
    const { schoolSlug, departmentSlug, programSlug } = await params;
    return <ProgramPage schoolSlug={schoolSlug} departmentSlug={departmentSlug} programmeSlug={programSlug} />;
}
