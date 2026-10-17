import ProgramPage, { programMetadata } from "@/components/sections/academics/program-page";

export async function generateMetadata({ params }) {
    const { slug, departmentSlug, programSlug } = await params;
    return programMetadata(slug, programSlug, "overview", departmentSlug);
}

export default async function Page({ params }) {
    const { slug, departmentSlug, programSlug } = await params;
    return <ProgramPage schoolSlug={slug} departmentSlug={departmentSlug} programmeSlug={programSlug} />;
}
