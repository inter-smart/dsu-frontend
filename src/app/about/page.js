import InnerHero from "@/components/layout/common/InnerHero";
import AboutHistory from "@/components/sections/about/about-history";
import AboutLeadership from "@/components/sections/about/about-leadership";
import AboutLegacy from "@/components/sections/about/about-legacy";
import AboutRecognition from "@/components/sections/about/about-recognition";
import AboutVision from "@/components/sections/about/about-vision";
import AboutWelcome from "@/components/sections/about/about-welcome";
import { getAboutPage } from "@/lib/api/about";

export default async function Page() {
  const data = await getAboutPage();

  // Fallback to local_data if Strapi is unavailable or has no data
  const pageData = data;

  if (!pageData) return null;

  return (
    <>
      {pageData.hero && <InnerHero data={pageData.hero} />}
      {pageData.welcomeSection && <AboutWelcome data={pageData.welcomeSection} />}
      {pageData.legacySection && <AboutLegacy data={pageData.legacySection} />}
      {pageData.aboutVision && <AboutVision data={pageData.aboutVision} />}
      {pageData.historySection && <AboutHistory data={pageData.historySection} />}
      {pageData.leadershipSection && <AboutLeadership data={pageData.leadershipSection} />}
      {pageData.recognitionSection && <AboutRecognition data={pageData.recognitionSection} />}
    </>
  );
}
