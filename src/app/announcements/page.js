import InnerHero from "@/components/layout/common/InnerHero";
import Announcement from "@/components/sections/announcements/announcement";
import { getAnnouncementsPage } from "@/lib/api/index";

export const revalidate = 60;

const local_data = {
  hero: {
    id: 25,
    heroMedia: {
      url: "/images/news-events-banner.jpg",
      alternativeText: "News & Events",
      mime: "image/jpg",
    },
    title: "Announcements",
    breadcrumb: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Announcements",
      },
    ],
  },
  announcement: {
    title: "Announcements",
    announcements: [
      {
        id: 1,
        announcement_image: {
          url: "/images/home-announcement-1.webp",
          alternativeText: "Media image",
        },
        title: "PGCET & DSAT",
        description:
          "School of commerce and Management studies welcomes the full time MBA students from DSAT & PGCET.",
        link: "#!",
      },
      {
        id: 2,
        announcement_image: {
          url: "/images/home-announcement-2.webp",
          alternativeText: "Media image",
        },
        title: "AIC-DSU Innovation",
        description:
          "Your Success is our Success, AIC-DSU Innovation Foundation is an Innovation Center that strives to",
        link: "#!",
      },
      {
        id: 3,
        announcement_image: {
          url: "/images/home-announcement-3.webp",
          alternativeText: "Media image",
        },
        title: "BUSINESS APPLICATIONS OF",
        description:
          "The only program that provides a unique 'Reverse Engineer Pedagogy' that teaches hands-on AI, ML,",
        link: "#!",
      },
      {
        id: 4,
        announcement_image: {
          url: "/images/announcement-4.jpg",
          alternativeText: "Media image",
        },
        title: "CJMC Admissions",
        description:
          "Admissions open for: Journalism Advertising & PR Video Production",
        link: "#!",
      },
    ],
  },
};

export async function generateMetadata() {
  const pageData = await getAnnouncementsPage();

  return {
    title:
      pageData?.seo?.metaTitle || "Announcements | Dayananda Sagar University",
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl
      ? { canonical: pageData.seo.canonicalUrl }
      : undefined,
  };
}

export default async function Page() {
  const pageData = await getAnnouncementsPage();

  const hero = pageData?.hero;
  const announcement = pageData.announcement;

  return (
    <>
      {hero && <InnerHero data={hero} />}
      {announcement && <Announcement data={announcement} />}
    </>
  );
}
