import { notFound } from "next/navigation";
import AlumniTemplate from "@/components/sections/alumni/alumni-template";
import { getAlumniBySlug } from "@/lib/api";

// Alumni entries that have no fixed route (e.g. the "flexible-page" template) are shown here.
// /alumni/events, /alumni/newsletter and /alumni/contact keep their own routes.
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
  const pageData = await getAlumniBySlug(slug);

  if (!pageData) notFound();

  return <AlumniTemplate pageData={pageData} />;
}
