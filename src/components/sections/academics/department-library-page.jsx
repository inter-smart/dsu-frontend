import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import LibraryServices from "@/components/sections/ai-enabled/library/library-services";
import LibraryDownloads from "@/components/sections/ai-enabled/library/library-download";
import LibraryAutomation from "@/components/sections/ai-enabled/library/library-automation";
import LibraryFaq from "@/components/sections/ai-enabled/library/library-Faq";
import LibraryGallery from "@/components/sections/ai-enabled/library/library-gallery";
import { loadDepartmentLibraryPage } from "@/lib/schools/entity";
import * as adapt from "@/lib/schools/department-adapters";

export async function libraryPageMetadata(schoolSlug, departmentSlug, pageSlug) {
    const { school, department, page } = await loadDepartmentLibraryPage(schoolSlug, departmentSlug, pageSlug);
    // the API fills an unset Meta Title with the page title, so anything else was typed in Strapi: use it as is
    const custom = page.seo?.metaTitle && page.seo.metaTitle !== page.title;
    return {
        title: custom ? page.seo.metaTitle : `${page.title} | Library | ${department.name} | ${school.name}`,
        description: page.seo?.metaDescription ?? undefined,
        alternates: page.seo?.canonicalUrl ? { canonical: page.seo.canonicalUrl } : undefined,
    };
}

// The template picked for the sub-page in the CMS decides the component; each takes the side menu as `menu`.
function Template({ page, menu }) {
    const content = page.content ?? {};
    switch (page.template) {
        case "services":
            return <LibraryServices data={adapt.libraryServicesContent(content)} menu={menu} />;
        case "downloads":
        case "abbreviations":
            return <LibraryDownloads data={adapt.libraryFilesContent(content)} menu={menu} />;
        case "automation":
            return <LibraryAutomation data={adapt.libraryAutomationContent(content)} menu={menu} />;
        case "faqs":
            return <LibraryFaq data={adapt.libraryFaqsContent(content)} menu={menu} />;
        case "gallery":
            return <LibraryGallery data={adapt.libraryGalleryContent(content)} menu={menu} />;
        default:
            return null;
    }
}

// One Library sub-page of a department, authored in the department's Library entry (Sub pages).
export default async function DepartmentLibraryPage({ schoolSlug, departmentSlug, pageSlug }) {
    const { school, page, sidebar, hero, menuItems, menuHome } = await loadDepartmentLibraryPage(schoolSlug, departmentSlug, pageSlug);

    return (
        <SchoolTabShell hero={hero} slug={schoolSlug} hasDepartments={school.template === "department"} menuItems={menuItems} menuHome={menuHome} aiMenu>
            <Template page={page} menu={sidebar} />
        </SchoolTabShell>
    );
}
