import { notFound } from "next/navigation";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import { hasContent } from "@/lib/has-content";
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
import { plainTitle } from "@/lib/line-breaks";

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

  // template "flexible-page": the centre's own mix of template blocks
  if (d.template === "flexible-page") return <FlexibleSections sections={d.flexiblePage?.sections} slug={d.slug} />;

  return (
    <>
      {hasContent(d.heroSlider?.slides) && <HomeHeroSlider
          data={d.heroSlider}
          breadcrumb={[
            { label: "Home", href: "/" },
            { label: "Centres of Excellence", href: "/center-of-excellence" },
            { label: plainTitle(d.title) || d.title },
          ]}
        />}
      {hasContent(d.showcase) && <AIFactoryShowcase data={d.showcase} />}
      {hasContent(d.innovation) && <AIInnovation data={d.innovation} />}
      {hasContent(d.offer) && <AIOffer data={d.offer} />}
      {hasContent(d.environments) && <AIEnvironments data={d.environments} />}
      {hasContent(d.applications) && <AIApplications data={d.applications} />}
      {hasContent(d.engagement) && <AIEngagement data={d.engagement} />}
      {hasContent(d.benefits) && <AIBenefits data={d.benefits} />}
      {hasContent(d.zones) && <AIZones data={d.zones} />}
      {hasContent(d.gallery) && <AIGallery data={d.gallery} />}
      {hasContent(d.centres) && <AICentres data={d.centres} />}
      {hasContent(d.cta) && <AICta data={d.cta} />}
    </>
  );
}
