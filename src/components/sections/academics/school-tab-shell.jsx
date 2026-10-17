import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";

// Hero + mobile tab menu shared by every /schools/[slug]/<tab> page.
export default function SchoolTabShell({ hero, slug, hasDepartments, children }) {
    return (
        <>
            <InnerHero data={{ ...hero, slug, hasDepartments, menuBar: true }} />
            <AcademicMenubar className="md:!hidden block" slug={slug} hasDepartments={hasDepartments} />
            {children}
        </>
    );
}
