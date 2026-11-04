import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import AiAcademicMenubar from "@/components/sections/ai-enabled/Ai-academicMenubar";
import AiBSCMenubar from "@/components/sections/ai-enabled/BSC-nursing/bsc-Menubar";
 
export default function SchoolTabShell({ hero, slug, hasDepartments, menuItems, menuHome, aiMenu = false, bscMenu = false, children }) {
    // CMS "menuBar" toggle on the page banner: an explicit false hides the menu (unset keeps the default)
    const showMenu = hero?.menuBar !== false;
    return (
        <>
            <InnerHero
                data={{ ...hero, slug, hasDepartments, menuItems, menuHome, menuBar: showMenu && !bscMenu && !aiMenu, ...(showMenu && bscMenu ? { AiBscmenuBar: true } : showMenu && aiMenu ? { AimenuBar: true } : {}) }}
            />
            {!showMenu ? null : bscMenu ? (
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
