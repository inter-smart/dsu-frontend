import ProgramPage, { programMetadata } from "@/components/sections/academics/program-page";

export async function generateMetadata({ params }) {
    const { schoolSlug, departmentSlug, programSlug, tab } = await params;
    return programMetadata(schoolSlug, programSlug, tab, departmentSlug);
}

export default async function Page({ params }) {
    const { schoolSlug, departmentSlug, programSlug, tab } = await params;
    return <ProgramPage schoolSlug={schoolSlug} departmentSlug={departmentSlug} programmeSlug={programSlug} tab={tab} />;
}
