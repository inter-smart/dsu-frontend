import ProgramPage, { programMetadata } from "@/components/sections/academics/program-page";

export async function generateMetadata({ params }) {
    const { slug, departmentSlug, programSlug, tab } = await params;
    return programMetadata(slug, programSlug, tab, departmentSlug);
}

export default async function Page({ params }) {
    const { slug, departmentSlug, programSlug, tab } = await params;
    return <ProgramPage schoolSlug={slug} departmentSlug={departmentSlug} programmeSlug={programSlug} tab={tab} />;
}
