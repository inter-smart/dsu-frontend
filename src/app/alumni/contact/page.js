import { notFound } from "next/navigation";
import AlumniTemplate from "@/components/sections/alumni/alumni-template";
import { getAlumniContactPage } from "@/lib/api/index";

export const revalidate = 60;

export async function generateMetadata() {
  const { pageData } = await getAlumniContactPage();

  return {
    title:
      pageData?.seo?.metaTitle || "Alumni Contact | Dayananda Sagar University",
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page() {
  const { pageData } = await getAlumniContactPage();

  if (!pageData) notFound();

  return <AlumniTemplate pageData={pageData} />;
}
