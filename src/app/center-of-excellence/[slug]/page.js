import { notFound } from "next/navigation";
import AIApplications from "@/components/sections/center-of-excellence/AIApplications";
import AIBenefits from "@/components/sections/center-of-excellence/AIBenefits";
import AICentres from "@/components/sections/center-of-excellence/AICentres";
import AICta from "@/components/sections/center-of-excellence/AICta";
import AIEngagement from "@/components/sections/center-of-excellence/AIEngagement";
import AIEnvironments from "@/components/sections/center-of-excellence/AIEnvironments";
import AIFactoryShowcase from "@/components/sections/center-of-excellence/AIFactoryShowcase";
import AIGallery from "@/components/sections/center-of-excellence/AIGallery";
import AIInnovation from "@/components/sections/center-of-excellence/AIInnovation";
import AIOffer from "@/components/sections/center-of-excellence/AIOffer";
import AIZones from "@/components/sections/center-of-excellence/AIZones";
import HomeHeroSlider from "@/components/sections/center-of-excellence/HomeHeroSlider";
import { getCentreBySlug } from "@/lib/api";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const pageData = await getCentreBySlug(slug);

  return {
    title: pageData?.seo?.metaTitle || "Centres of Excellence | Dayananda Sagar University",
    description: pageData?.seo?.metaDescription || undefined,
    alternates: pageData?.seo?.canonicalUrl ? { canonical: pageData.seo.canonicalUrl } : undefined,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const d = await getCentreBySlug(slug);

  if (!d) notFound();

  return (
    <>
      {d.heroSlider?.slides?.length > 0 && <HomeHeroSlider data={d.heroSlider} />}
      {d.showcase && <AIFactoryShowcase data={d.showcase} />}
      {d.innovation && <AIInnovation data={d.innovation} />}
      {d.offer && <AIOffer data={d.offer} />}
      {d.environments && <AIEnvironments data={d.environments} />}
      {d.applications && <AIApplications data={d.applications} />}
      {d.benefits && <AIBenefits data={d.benefits} />}
      {d.zones && <AIZones data={d.zones} />}
      {d.gallery && <AIGallery data={d.gallery} />}
      {d.centres && <AICentres data={d.centres} />}
      {d.engagement && <AIEngagement data={d.engagement} />}
      {d.cta && <AICta data={d.cta} />}
    </>
  );
}
