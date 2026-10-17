import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import { schoolHasPrograms } from "@/lib/schools/tab-page";

// Hero + mobile tab menu shared by every /schools/[slug]/<tab> page. Department and programme
// pages pass their own `menuItems` / `menuHome` so the same menu shows their tabs instead.
export default async function SchoolTabShell({ hero, slug, hasDepartments, hasPrograms, menuItems, menuHome, children }) {
    const programs = menuItems ? undefined : (hasPrograms ?? (await schoolHasPrograms(slug, hasDepartments)));

    return (
        <>
            <InnerHero data={{ ...hero, slug, hasDepartments, hasPrograms: programs, menuItems, menuHome, menuBar: true }} />
            <AcademicMenubar
                className="md:!hidden block"
                slug={slug}
                hasDepartments={hasDepartments}
                hasPrograms={programs}
                items={menuItems}
                homeHref={menuHome}
            />
            {children}
        </>
    );
}
