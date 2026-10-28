import SchoolTabShell from "@/components/sections/academics/school-tab-shell";
import AcademicAchievements from "@/components/sections/academics/academic-achievements";
import AcademicFacultyAchievements from "@/components/sections/academics/academic-faculty-achievements";
import { hasContent, loadSchoolTabData, schoolTabMetadata } from "@/lib/schools/tab-page";

const TAB = "achievements";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    return schoolTabMetadata(slug, TAB);
}

export default async function Page({ params }) {
    const { slug } = await params;
    const { data, hero, hasDepartments } = await loadSchoolTabData(slug, TAB);

    // flat CMS achievements list is shown in the faculty section when it has no list of its own
    const cmsFaculty = data.facultyAchievementsSection;
    const faculty = data.achievements?.length && !cmsFaculty?.achievements?.length
        ? { ...cmsFaculty, monthFilters: [], achievements: data.achievements }
        : cmsFaculty;

    return (
        <SchoolTabShell hero={hero} slug={slug} hasDepartments={hasDepartments}>
            {hasContent(data.achievementSection) && <AcademicAchievements data={data.achievementSection} />}
            {hasContent(faculty) && <AcademicFacultyAchievements data={faculty} />}
        </SchoolTabShell>
    );
}
