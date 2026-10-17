import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import { SchoolDepartments } from "@/components/sections/academics/school-directory";
import { loadSchoolTabData, schoolTabMetadata } from "@/lib/schools/tab-page";

const local_data = {
    hero: {
        heroMedia: {
            alternativeText: "Departments",
            mime: "image/jpg",
            url: "/images/academic-banner.jpg",
        },
        title: "Departments",
        breadcrumb: [
            { label: "Home", href: "/" },
            { label: "Schools", href: "/schools" },
            { label: "Departments", href: "#" },
        ],
    },
    departments: [],
};

const TAB = "departments";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return schoolTabMetadata(slug, TAB);
}

// Only schools with departments have this tab; loadSchoolTabData 404s for the others.
export default async function Page({ params }) {
    const { slug } = await params;
    const { data, hero, hasDepartments } = await loadSchoolTabData(slug, TAB, local_data);

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={hasDepartments}>
            <SchoolDepartments slug={slug} departments={data.departments} />
        </SchoolTabShell>
    );
}
