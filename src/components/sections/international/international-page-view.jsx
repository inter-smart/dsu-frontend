import InnerHero from "@/components/layout/common/InnerHero";
import FlexibleSections from "@/components/flexible/FlexibleSections";
import InternationalAdmissionView from "@/components/sections/international/international-admission-view";
import { hasContent } from "@/lib/has-content";

// Renders an International entry by its `template`.
// Every International page shows the International menu bar (one pill per International entry),
// in the same design as the Admission / Placement menu bars.
export default async function InternationalPageView({ page }) {
    if (["flexible-page", "undergraduate-masters", "global-partnerships", "study-abroad", "student-exchange"].includes(page.template)) {
        const hero = hasContent(page.hero) ? page.hero : null;
        const sidebar = page.sidebar || [];

        return (
            <>
                {hero && <InnerHero data={hero} />}
                <FlexibleSections sections={page.sections} sidebar={sidebar} menu={sidebar} slug={page.slug} />
            </>
        );
    }

    return <InternationalAdmissionView page={page} />;
}
