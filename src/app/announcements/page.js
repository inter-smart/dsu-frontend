import InnerHero from "@/components/layout/common/InnerHero";
import Announcement from "@/components/sections/announcements/announcement";
import { getAnnouncementsPage } from "@/lib/api";

export const revalidate = 60;

export async function generateMetadata() {
  const pageData = await getAnnouncementsPage();

  return {
    title: pageData?.seo?.metaTitle || undefined,
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page() {
  const pageData = await getAnnouncementsPage();

  const hero = pageData?.hero;
  const announcement = pageData?.announcement;

  return (
    <>
      {hero && <InnerHero data={hero} />}
      {announcement && <Announcement data={announcement} />}
    </>
  );
}
