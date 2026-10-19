import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";

// Hero + mobile tab menu shared by every /schools/[slug]/<tab> page. Department and programme
// pages pass their own `menuItems` / `menuHome` so the same menu shows their tabs instead.
export default function SchoolTabShell({ hero, slug, hasDepartments, menuItems, menuHome, children }) {
    return (
        <>
            <InnerHero data={{ ...hero, slug, hasDepartments, menuItems, menuHome, menuBar: true }} />
            <AcademicMenubar
                className="md:!hidden block"
                slug={slug}
                hasDepartments={hasDepartments}
                items={menuItems}
                homeHref={menuHome}
            />
            {children}
        </>
    );
}
