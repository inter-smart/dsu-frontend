import ExploreCentres from "@/components/sections/center-of-excellence/ExploreCentres";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import HomeHeroSlider from "@/components/sections/center-of-excellence/HomeHeroSlider";
import IdeaToExecution from "@/components/sections/center-of-excellence/IdeaToExecution";
import InnovationEcosystem from "@/components/sections/center-of-excellence/InnovationEcosystem";
import TakeIdeasForward from "@/components/sections/center-of-excellence/TakeIdeasForward";
import WhoCanEngage from "@/components/sections/center-of-excellence/WhoCanEngage";
import { getCentresPage } from "@/lib/api";

export async function generateMetadata() {
  const pageData = await getCentresPage();

  return {
    title: pageData?.seo?.metaTitle || "Centres of Excellence | Dayananda Sagar University",
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl ? { canonical: pageData.seo.canonicalUrl } : undefined,
  };
}

export default async function Page() {
  const pageData = await getCentresPage();
  if (!pageData) return null;

  const { heroSlider, innovationEcosystem, exploreCentres, ideaToExecution, whoCanEngage, takeIdeasForward } = pageData;

  return (
    <>
      {heroSlider?.slides?.length > 0 && <HomeHeroSlider data={heroSlider} />}
      {innovationEcosystem?.heading && <InnovationEcosystem data={innovationEcosystem} />}
      {(exploreCentres?.centres?.length > 0 || exploreCentres?.heading) && <ExploreCentres data={exploreCentres} />}
      {ideaToExecution?.steps?.length > 0 && <IdeaToExecution data={ideaToExecution} />}
      {whoCanEngage?.items?.length > 0 && <WhoCanEngage data={whoCanEngage} />}
      {takeIdeasForward?.heading && <TakeIdeasForward data={takeIdeasForward} />}
      <FlexibleSections sections={pageData.sections} />
    </>
  );
}
