import { SchoolLibraryOverview, schoolLibraryMetadata } from "@/components/sections/academics/school-library-page";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return schoolLibraryMetadata(slug);
}

export default async function Page({ params }) {
    const { slug } = await params;
    return <SchoolLibraryOverview slug={slug} />;
}
