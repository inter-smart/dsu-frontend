import ProgramPage, { programMetadata } from "@/components/sections/academics/program-page";

export async function generateMetadata({ params }) {
    const { slug, programSlug, tab } = await params;
    return programMetadata(slug, programSlug, tab);
}

export default async function Page({ params }) {
    const { slug, programSlug, tab } = await params;
    return <ProgramPage schoolSlug={slug} programmeSlug={programSlug} tab={tab} />;
}
