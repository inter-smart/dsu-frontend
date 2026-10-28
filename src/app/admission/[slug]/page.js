import { notFound } from "next/navigation";
import AdmissionTemplate from "@/components/sections/admission/admission-template";
import { getAdmissionBySlug, getAdmissions } from "@/lib/api";

export async function generateStaticParams() {
  const entries = (await getAdmissions()) || [];
  return entries
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageData = await getAdmissionBySlug(slug);

  return {
    title: pageData?.seo?.metaTitle || "Admission | Dayananda Sagar University",
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const pageData = await getAdmissionBySlug(slug);

  if (!pageData) return null;

  return <AdmissionTemplate pageData={pageData} />;
}
