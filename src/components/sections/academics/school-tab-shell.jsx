import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
import AiBSCMenubar from "@/components/sections/ai-enabled/BSC-nursing/bsc-Menubar";
 
export default function SchoolTabShell({ hero, slug, hasDepartments, menuItems, menuHome, aiMenu = false, bscMenu = false, children }) {
    return (
        <>
            <InnerHero
                data={{ ...hero, slug, hasDepartments, menuItems, menuHome, ...(bscMenu ? { AiBscmenuBar: true } : aiMenu ? { AimenuBar: true } : { menuBar: true }) }}
            />
            {bscMenu ? (
                <AiBSCMenubar className="lg:!hidden block" items={menuItems} title={hero?.title} />
            ) : aiMenu ? (
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
