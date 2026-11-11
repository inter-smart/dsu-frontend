import InnerHero from "@/components/layout/common/InnerHero";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import InternationalAdmissionView from "@/components/sections/international/international-admission-view";
import { hasContent } from "@/lib/has-content";
import IntlTextCTASection from "@/components/sections/international/IntlTextCTASection";

const STATIC_CTA_SLUGS = ["undergraduate-and-masters"];

// Renders an International entry by its `template`.
// Every International page shows the International menu bar (one pill per International entry),
// in the same design as the Admission / Placement menu bars.
export default async function InternationalPageView({ page }) {
    if (["flexible-page", "undergraduate-masters", "global-partnerships", "study-abroad", "student-exchange"].includes(page.template)) {
        const hero = hasContent(page.hero) ? page.hero : null;
        const sidebar = page.sidebar || [];
        const hasStrapiCta = (page.sections || []).some((s) => ["international.text-cta-section", "international.IntlTextCTASection"].includes(s.component));

        return (
            <>
                {hero && <InnerHero data={hero} />}
                <FlexibleSections sections={page.sections} sidebar={sidebar} menu={sidebar} slug={page.slug} />
                {/* Static CTA (src/data/research/intl-text-cta.json). Fallback only: skipped once the editor adds the "Text + CTA" section in Strapi */}
                {STATIC_CTA_SLUGS.includes(page.slug) && !hasStrapiCta && <IntlTextCTASection />}
            </>
        );
    }

    return <InternationalAdmissionView page={page} />;
}
