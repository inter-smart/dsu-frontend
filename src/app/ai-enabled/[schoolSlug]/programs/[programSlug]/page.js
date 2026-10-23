import ProgramPage, { programMetadata } from "@/components/sections/academics/program-page";

export async function generateMetadata({ params }) {
    const { schoolSlug, programSlug } = await params;
    return programMetadata(schoolSlug, programSlug);
}

export default async function Page({ params }) {
    const { schoolSlug, programSlug } = await params;
    return <ProgramPage schoolSlug={schoolSlug} programmeSlug={programSlug} />;
}
