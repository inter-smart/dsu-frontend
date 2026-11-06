import { hasContent } from "@/lib/has-content";
import IntlBanner from "@/components/sections/international/IntlBanner";
import EnquiryForm from "@/components/sections/international/EnquiryForm";
import InternationalMenu from "@/components/sections/international/InternationalMenu";
import TopMenu from "@/components/sections/international/TopMenu";
import IntlAbout from "@/components/sections/international/IntlAbout";
import AwardsSlider from "@/components/sections/international/AwardsSlider";
import IntlCourses from "@/components/sections/international/IntlCourses";
import IntlInnovation from "@/components/sections/international/IntlInnovation";
import InstructionsAccordion from "@/components/sections/international/InstructionsAccordion";
import IntlGallery from "@/components/sections/international/IntlGallery";
import IntlAdmissionProcess from "@/components/sections/international/IntlAdmissionProcess";

// The "International Admission" template of an International entry
export default function InternationalAdmissionView({ page }) {
    const catalog = page.catalog;
    const showHero = hasContent(page.hero);
    const showAbout = hasContent(page.about);
    const showAwards = hasContent(page.awards);
    const showCourses = hasContent(page.courses) && hasContent(catalog?.schools);
    const showInnovation = hasContent(page.innovation);
    const showInstructions = hasContent(page.instructions);
    const showGallery = hasContent(page.gallery);
    const showProcess = hasContent(page.admissionProcess);

    let formData = null;
    if (hasContent(page.enquiryForm)) {
        formData = {
            title: page.enquiryForm.title,
            consentText: page.enquiryForm.consentText,
            submitLabel: page.enquiryForm.submitLabel,
            catalog: catalog,
        };
    }

    // The tab menu has a tab only for a section that is on the page
    const tabs = [];
    if (showAbout) tabs.push({ id: "about", label: "About Us", href: "#about-us" });
    if (showAwards) tabs.push({ id: "awards", label: "Awards", href: "#awards" });
    if (showCourses) tabs.push({ id: "courses", label: "Courses Offered", href: "#courses" });
    if (showInnovation) tabs.push({ id: "innovation", label: "Innovation Centres", href: "#innovation-centres" });
    if (showGallery) tabs.push({ id: "gallery", label: "Gallery", href: "#gallery" });
    if (showProcess) tabs.push({ id: "process", label: "Admission Process", href: "#admission-process" });

    return (
        <>
            {showHero && <IntlBanner data={page.hero} formData={formData} />}
            {!showHero && formData && (
                <section className="container pb-10 pt-[130px] lg:pt-[240px]">
                    <EnquiryForm data={formData} />
                </section>
            )}
            <InternationalMenu />
            {tabs.length > 0 && <TopMenu data={tabs} />}
            {showAbout && <IntlAbout data={page.about} />}
            {showAwards && <AwardsSlider data={page.awards} />}
            {showCourses && <IntlCourses data={page.courses} catalog={catalog} />}
            {showInnovation && <IntlInnovation data={page.innovation} />}
            {showInstructions && <InstructionsAccordion data={page.instructions} />}
            {showGallery && <IntlGallery data={page.gallery} />}
            {showProcess && <IntlAdmissionProcess data={page.admissionProcess} />}
        </>
    );
}
