import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import FacultyPublications from "@/components/sections/faculty/faculty-publications";
import FacultyAchievements from "@/components/sections/faculty/faculty-achievements";
import FacultyProfessorInfo from "@/components/sections/faculty/faculty-professor-info";
import { getFacultyBySlug } from "@/lib/api";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageData = await getFacultyBySlug(slug);

  return {
    title: pageData?.seo?.metaTitle || undefined,
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const pageData = await getFacultyBySlug(slug);

  if (!pageData) notFound();

  const publications = pageData.facultyPublications;
  const achievements = pageData.facultyAchievements;

  return (
    <>
      {pageData.hero && <InnerHero data={pageData.hero} />}
      <FacultyProfessorInfo data={pageData.professorInfo} />
      {(publications?.description || publications?.publications?.length > 0) && (
        <FacultyPublications data={publications} />
      )}
      {achievements?.description && <FacultyAchievements data={achievements} />}
    </>
  );
}
