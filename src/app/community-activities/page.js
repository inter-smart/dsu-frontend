import InnerHero from "@/components/layout/common/InnerHero";
import CommunityActivities from "@/components/sections/community-activities/community-activities";
import GetInvolved from "@/components/sections/community-activities/get-involved";
import FloatingContactRail from "@/components/layout/common/floating-contact-rail";
import { getCommunityActivitiesPage } from "@/lib/api";

export const revalidate = 60;

// the Get Involved card background is static (not managed in the CMS)
const GET_INVOLVED_BACKGROUND = "/images/community-contact-card-bg.png";

export async function generateMetadata() {
  const pageData = await getCommunityActivitiesPage();

  return {
    title: pageData?.seo?.metaTitle || undefined,
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function page() {
  const pageData = await getCommunityActivitiesPage();
  const getInvolved = pageData?.getInvolved;

  return (
    <>
      {pageData?.hero && <InnerHero data={pageData.hero} />}
      {pageData?.activities?.items?.length > 0 && (
        <CommunityActivities data={pageData.activities} />
      )}
      {(getInvolved?.title || getInvolved?.contacts?.length > 0) && (
        <GetInvolved
          data={{ ...getInvolved, backgroundImage: GET_INVOLVED_BACKGROUND }}
        />
      )}
      <FloatingContactRail />
    </>
  );
}
