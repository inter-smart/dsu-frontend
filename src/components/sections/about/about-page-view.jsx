import InnerHero from "@/components/layout/common/InnerHero";
import AboutHistory from "@/components/sections/about/about-history";
import AboutLeadership from "@/components/sections/about/about-leadership";
import AboutLegacy from "@/components/sections/about/about-legacy";
import AboutRecognition from "@/components/sections/about/about-recognition";
import AboutVision from "@/components/sections/about/about-vision";
import AboutWelcome from "@/components/sections/about/about-welcome";
import { hasContent } from "@/lib/has-content";

// InnerHero is shared with other pages, so only pass it what it can render safely
function cleanHero(hero) {
  const breadcrumb = Array.isArray(hero?.breadcrumb)
    ? hero.breadcrumb.filter((item) => item?.label)
    : [];
  const heroMedia = hero?.heroMedia?.url ? hero.heroMedia : null;

  return {
    id: hero?.id,
    title: hero?.title,
    menuBar: hero?.menuBar,
    heroMedia,
    breadcrumb,
  };
}

export default function AboutPageView({ pageData }) {
  return (
    <>
      {hasContent(pageData.hero) && <InnerHero data={cleanHero(pageData.hero)} />}
      {hasContent(pageData.welcomeSection) && <AboutWelcome data={pageData.welcomeSection} />}
      {hasContent(pageData.legacySection) && <AboutLegacy data={pageData.legacySection} />}
      {hasContent(pageData.aboutVision) && <AboutVision data={pageData.aboutVision} />}
      {hasContent(pageData.historySection) && <AboutHistory data={pageData.historySection} />}
      {hasContent(pageData.leadershipSection) && <AboutLeadership data={pageData.leadershipSection} />}
      {hasContent(pageData.recognitionSection) && <AboutRecognition data={pageData.recognitionSection} />}
    </>
  );
}
