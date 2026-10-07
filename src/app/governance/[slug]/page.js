import InnerHero from "@/components/layout/common/InnerHero";
import GovernanceFinancecommittte from "@/components/sections/governance/governance-financecommittte";
import { getGovernancePageBySlug, getGovernancePages } from "@/lib/api/index";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageData = await getGovernancePageBySlug(slug);
  const seo = pageData?.seo;

  return {
    title: seo?.metaTitle || pageData?.name || "Governance | DSU",
    ...(seo?.metaDescription ? { description: seo.metaDescription } : {}),
    ...(seo?.canonicalUrl
      ? { alternates: { canonical: seo.canonicalUrl } }
      : {}),
  };
}

export default async function GovernancePage({ params }) {
  const { slug } = await params;

  const [pageData, governancePages] = await Promise.all([
    getGovernancePageBySlug(slug),
    getGovernancePages(),
  ]);


  if (!pageData) return null;

  return (
    <>
      {pageData.hero && <InnerHero data={pageData.hero} />}
      <GovernanceFinancecommittte
        data={pageData.financeCommitteeData}
        title={pageData.name}
        governancePages={governancePages || []}
      />
    </>
  );
}