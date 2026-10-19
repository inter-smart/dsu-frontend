import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";

// Hero + mobile tab menu shared by every /schools/[slug]/<tab> page. Department and programme
// pages pass their own `menuItems` / `menuHome` so the same menu shows their tabs instead.
// `aiMenu` swaps in AiAcademicMenubar (no Home item), as used on /ai-enabled/overview.
export default function SchoolTabShell({ hero, slug, hasDepartments, menuItems, menuHome, aiMenu = false, children }) {
    return (
        <>
            <InnerHero
                data={{ ...hero, slug, hasDepartments, menuItems, menuHome, ...(aiMenu ? { AimenuBar: true } : { menuBar: true }) }}
            />
            {aiMenu ? (
                <AiAcademicMenubar className="lg:!hidden block" data={menuItems} />
            ) : (
                <AcademicMenubar
                    className="md:!hidden block"
                    slug={slug}
                    hasDepartments={hasDepartments}
                    items={menuItems}
                    homeHref={menuHome}
                />
            )}
            {children}
        </>
    );
}
