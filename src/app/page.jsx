import { cache } from "react";
import { getHomePage, getNewsEvents, getAnnouncements } from "@/lib/api";
import { hasContent } from "@/lib/has-content";
import News from "@/components/sections/home/home-news";
import Events from "@/components/sections/home/home-events";
import Journey from "@/components/layout/common/journey";
import HomeAbout from "@/components/sections/home/home-about";
import HomeExcellence from "@/components/sections/home/home-excellence";
import HomeCampusLife from "@/components/sections/home/home-campus-life";
import HomeTestimonials from "@/components/sections/home/home-testimonials";
import HomeIndustry from "@/components/sections/home/home-industry";
import HomeAcademic from "@/components/sections/home/home-academic";
import HomeHero from "@/components/sections/home/home-hero";
import HomeResearch from "@/components/sections/home/home-research-innovation";
import HomeCollaborations from "@/components/sections/home/home-collaborations";

// Shared by the metadata and the page so Strapi is queried once per request.
const loadHome = cache(getHomePage);

export async function generateMetadata() {
  const seo = (await loadHome())?.seo;
  return {
    ...(seo?.metaTitle && { title: seo.metaTitle }),
    ...(seo?.metaDescription && { description: seo.metaDescription }),
  };
}

export default async function Home() {
  const [cms, newsList, announcementList] = await Promise.all([
    loadHome(),
    getNewsEvents(),
    getAnnouncements(),
  ]);

  // The CMS sends { showSection: false } for a section switched off with "Show This Section".
  // A section with nothing in it is skipped, so no empty padding/background is rendered.
  const show = (key) => cms?.[key]?.showSection !== false && hasContent(cms?.[key]);

  const hero = (cms?.heroSlides?.hero || []).filter(hasContent);
  const heroMarquee = (cms?.heroSlides?.heroMarquee || []).filter((item) => item?.label);

  // Announcements and News & Events cards come from the News & Events entries; Latest Happenings from the
  // entries marked "Show in Home Latest Happenings".
  const events = {
    ...cms?.events,
    latest_list: cms?.events?.latest_list || [],
    announcements_list: announcementList || [],
  };
  const news = { title: cms?.latestNews?.title, news_list: newsList || [], button: cms?.latestNews?.button };

  return (
    <main className="flex flex-col min-h-screen">
      {hasContent(hero) && <HomeHero data={{ hero, heroMarquee }} />}
      {show("centresOfExcellence") && <HomeExcellence data={cms.centresOfExcellence} />}
      {show("academicPrograms") && <HomeAcademic data={cms.academicPrograms} />}
      {show("researchInnovation") && <HomeResearch data={cms.researchInnovation} />}
      {show("industryCollaboration") && <HomeIndustry data={cms.industryCollaboration} />}
      {show("homeAbout") && <HomeAbout data={cms.homeAbout} />}
      {show("studentSuccess") && <HomeTestimonials data={cms.studentSuccess} />}
      {show("campusLife") && <HomeCampusLife data={cms.campusLife} />}
      {show("internationalCollaboration") && <HomeCollaborations data={cms.internationalCollaboration} />}
      {cms?.events?.showSection !== false && <Events data={events} />}
      {cms?.latestNews?.showSection !== false && <News data={news} />}
      {show("journey") && <Journey data={cms.journey} />}
    </main>
  );
}
