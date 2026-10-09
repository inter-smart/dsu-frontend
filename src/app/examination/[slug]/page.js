import { notFound } from "next/navigation";
import ExaminationTemplate from "@/components/sections/examination/examination-template";
import { getExaminationBySlug, getExaminations } from "@/lib/api";

export async function generateStaticParams() {
  const entries = (await getExaminations()) || [];
  return entries
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageData = await getExaminationBySlug(slug);

  return {
    title:
      pageData?.seo?.metaTitle || "Examination | Dayananda Sagar University",
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const pageData = await getExaminationBySlug(slug);

  if (!pageData) notFound();

  return <ExaminationTemplate pageData={pageData} />;
}
