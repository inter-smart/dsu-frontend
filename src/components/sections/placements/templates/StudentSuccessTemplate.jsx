import InnerHero from "@/components/layout/common/InnerHero";
import StudentSuccess from "@/components/sections/placements/student-success";
import AlumniWorld from "@/components/sections/placements/alumni-world";
import PlacementExcellence from "@/components/sections/placements/placement-excellence";
import StudentSuccessStories from "@/components/sections/placements/student-success-stories";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import { hasContent } from "@/lib/has-content";

// data: the page API response ({ hero, sidebar, studentSuccessPage, ... })
export default function StudentSuccessTemplate({ data }) {
    const success = data?.studentSuccessPage || {};

    const studentSuccess = success.studentSuccess;
    const alumniWorld = success.alumniWorld;
    const excellence = success.excellence;
    const stories = success.successStoriesSection;

    return (
        <>
            {hasContent(data?.hero) && <InnerHero data={data.hero} placementMenuItems={data?.sidebar} />}
            <PlacementmenuBar items={data?.sidebar} className="lg:hidden! block" />
            {hasContent(studentSuccess) && <StudentSuccess data={studentSuccess} />}
            {hasContent(alumniWorld) && <AlumniWorld data={alumniWorld} />}
            {hasContent(excellence) && <PlacementExcellence data={excellence} />}
            {hasContent(stories) && <StudentSuccessStories data={stories} variant="bg-gradient" />}
        </>
    );
}
