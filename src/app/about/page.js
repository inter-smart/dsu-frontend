import { redirect } from "next/navigation";
import AboutPageView from "@/components/sections/about/about-page-view";
import { getAboutPage } from "@/lib/api";

export default async function Page() {
  const pageData = await getAboutPage();

  if (!pageData) return null;

  // the page lives at the slug set in the CMS
  if (pageData.slug && pageData.slug !== "about") redirect(`/${pageData.slug}`);

  return <AboutPageView pageData={pageData} />;
}
