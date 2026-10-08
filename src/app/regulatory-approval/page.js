import InnerHero from "@/components/layout/common/InnerHero";
import RegulatoryApprovalList from "@/components/sections/regulatory-approval/approval-list";
import { getRegulatoryApprovalPage } from "@/lib/api";

export const revalidate = 60;

const DEFAULT_HERO = {
  title: "Regulatory Approvals",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Why DSU", href: "/why-dsu" },
    { label: "Regulatory Approvals" },
  ],
};

export async function generateMetadata() {
  const pageData = await getRegulatoryApprovalPage();

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

export default async function Page() {
  const pageData = await getRegulatoryApprovalPage();

  return (
    <>
      {pageData?.hero && <InnerHero data={pageData.hero} />}
      {pageData?.listSection && (
        <RegulatoryApprovalList items={pageData.listSection} />
      )}
    </>
  );
}
