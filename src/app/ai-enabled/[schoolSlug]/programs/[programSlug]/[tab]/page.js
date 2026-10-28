import ProgramPage, { programMetadata } from "@/components/sections/academics/program-page";

export async function generateMetadata({ params }) {
    const { schoolSlug, programSlug, tab } = await params;
    return programMetadata(schoolSlug, programSlug, tab);
}

export default async function Page({ params }) {
    const { schoolSlug, programSlug, tab } = await params;
    return <ProgramPage schoolSlug={schoolSlug} programmeSlug={programSlug} tab={tab} />;
}
