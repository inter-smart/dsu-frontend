import { getStudyInIndiaPage } from "@/lib/api/study-in-india";
import { studyInIndiaFallback } from "@/data/studyInIndiaFallback";
import { hasContent } from "@/lib/has-content";
import InternationalBanner from "@/components/sections/international/InternationalBanner";
import InternationalHero from "@/components/sections/international/InternationalHero";
import IntlCourses from "@/components/sections/international/IntlCourses";
import CtaBanner from "@/components/sections/international/CtaBanner";
import ContactDetails from "@/components/sections/international/ContactDetails";

// Strapi first; the static content below only shows while Strapi has no page
async function loadPage() {
    const page = await getStudyInIndiaPage();
    return page || studyInIndiaFallback;
}

export async function generateMetadata() {
    const page = await loadPage();
    const metadata = {
        title: page.seo?.metaTitle || page.title || "Study in India",
    };
    if (page.seo?.metaDescription) metadata.description = page.seo.metaDescription;
    if (page.seo?.canonicalUrl) metadata.alternates = { canonical: page.seo.canonicalUrl };
    return metadata;
}

export default async function Page() {
    const page = await loadPage();
    const catalog = page.catalog;

    const showBanner = hasContent(page.banner);
    const showHero = hasContent(page.hero);
    const showCourses = hasContent(page.courses) && hasContent(catalog?.schools);
    const showCta = hasContent(page.ctaBanner);
    const showContact = hasContent(page.contactDetails);

    return (
        <>
            {showBanner && <InternationalBanner data={page.banner} />}
            {showHero && <InternationalHero data={page.hero} />}
            {showCourses && <IntlCourses data={page.courses} catalog={catalog} />}
            {showCta && <CtaBanner data={page.ctaBanner} />}
            {showContact && <ContactDetails data={page.contactDetails} />}
        </>
    );
}
