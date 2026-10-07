import { notFound } from "next/navigation";
import InnerHero from "@/components/layout/common/InnerHero";
import OtherApproval from "@/components/sections/regulatory-approval/other-approval";
import UgcRegnition from "@/components/sections/regulatory-approval/ugc-recognition";
import {
  getRegulatoryApprovalBySlug,
  getRegulatoryApprovals,
} from "@/lib/api/index";

export const revalidate = 60;

export async function generateStaticParams() {
  const menu = (await getRegulatoryApprovals()) || [];
  return menu
    .filter((item) => item.slug)
    .map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageData = await getRegulatoryApprovalBySlug(slug);

  return {
    title:
      pageData?.seo?.metaTitle ||
      "Regulatory Approvals | Dayananda Sagar University",
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const [pageData, menu] = await Promise.all([
    getRegulatoryApprovalBySlug(slug),
    getRegulatoryApprovals(),
  ]);

  if (!pageData) notFound();

  return (
    <>
      {pageData.hero && <InnerHero data={pageData.hero} />}
      {pageData.ugcRecognition && (
        <UgcRegnition data={pageData.ugcRecognition} menu={menu || []} />
      )}
      {pageData.otherApproval && (
        <OtherApproval data={pageData.otherApproval} menu={menu || []} />
      )}
    </>
  );
}
