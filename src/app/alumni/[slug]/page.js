import { notFound } from "next/navigation";
import AlumniTemplate from "@/components/sections/alumni/alumni-template";
import { getAlumniBySlug, getAlumnis } from "@/lib/api/index";

export const revalidate = 60;

export async function generateStaticParams() {
  const entries = await getAlumnis();
  return (entries || [])
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageData = await getAlumniBySlug(slug);

  return {
    title: pageData?.seo?.metaTitle || "Alumni | Dayananda Sagar University",
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const [pageData, entries] = await Promise.all([
    getAlumniBySlug(slug),
    getAlumnis(),
  ]);

  if (!pageData) notFound();

  return (
    <AlumniTemplate pageData={pageData} landingSlug={entries?.[0]?.slug} />
  );
}
