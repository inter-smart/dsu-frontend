import ProgramPage, { programMetadata } from "@/components/sections/academics/program-page";

export async function generateMetadata({ params }) {
    const { slug, programSlug } = await params;
    return programMetadata(slug, programSlug);
}

export default async function Page({ params }) {
    const { slug, programSlug } = await params;
    return <ProgramPage schoolSlug={slug} programmeSlug={programSlug} />;
}
