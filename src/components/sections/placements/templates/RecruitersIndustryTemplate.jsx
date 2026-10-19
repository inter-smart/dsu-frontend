import InnerHero from "@/components/layout/common/InnerHero";
import Recruiters from "@/components/sections/placements/recruiters";
import IndustryPartnerships from "@/components/sections/placements/industry-partnerships";
import IndustryEngagement from "@/components/sections/placements/industry-engagement";
import RecruiterTestimonials from "@/components/sections/placements/recruiter-testimonials";
import RecruitmentGallery from "@/components/sections/placements/recruitment-gallery";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import { hasContent } from "@/lib/has-content";

// data: the page API response ({ hero, sidebar, recruitersIndustryPage, ... })
export default function RecruitersIndustryTemplate({ data }) {
    const ri = data?.recruitersIndustryPage || {};

    const recruiters = ri.recruitersSection;
    const partnerships = ri.partnershipsSection;
    const engagement = ri.engagementSection;
    const testimonials = ri.testimonialsSection;
    const gallery = ri.gallerySection;

    return (
        <>
            {hasContent(data?.hero) && <InnerHero data={data.hero} placementMenuItems={data?.sidebar} />}
            <PlacementmenuBar items={data?.sidebar} className="lg:!hidden block" />
            {hasContent(recruiters) && <Recruiters data={recruiters} className="[--recruiters-bg:#fff]" />}
            {hasContent(partnerships) && <IndustryPartnerships data={partnerships} />}
            {hasContent(engagement) && <IndustryEngagement data={engagement} />}
            {hasContent(testimonials) && <RecruiterTestimonials data={testimonials} />}
            {hasContent(gallery) && <RecruitmentGallery data={gallery} />}
        </>
    );
}
