import { notFound } from "next/navigation";
import AlumniTemplate from "@/components/sections/alumni/alumni-template";
import { getAlumniLandingPage } from "@/lib/api";

export const revalidate = 60;

export async function generateMetadata() {
  const { pageData } = await getAlumniLandingPage();

  return {
    title: pageData?.seo?.metaTitle || "Alumni | Dayananda Sagar University",
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page() {
  const { pageData } = await getAlumniLandingPage();

  if (!pageData) notFound();

  return <AlumniTemplate pageData={pageData} />;
}
