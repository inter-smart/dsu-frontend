import AboutPlacementTemplate from "./AboutPlacementTemplate";
import CareerDevelopmentTemplate from "./CareerDevelopmentTemplate";
import InternshipTemplate from "./InternshipTemplate";
import PlacementContactTemplate from "./PlacementContactTemplate";
import PlacementPageTemplate from "./PlacementPageTemplate";
import RecruitersIndustryTemplate from "./RecruitersIndustryTemplate";
import RecruitTemplate from "./RecruitTemplate";
import StudentSuccessTemplate from "./StudentSuccessTemplate";

// Placement templates shown on /placement/[slug]: template -> component (it receives the page API response).
// Add one line here for every new template.
// The entry with slug "placement" is shown at /placement; other about entries are shown here.
const placementTemplates = {
    "about-placement-cell": AboutPlacementTemplate,
    "career-development": CareerDevelopmentTemplate,
    "placement-page": PlacementPageTemplate,
    internship: InternshipTemplate,
    "student-success": StudentSuccessTemplate,
    "recruiters-industry": RecruitersIndustryTemplate,
    recruit: RecruitTemplate,
    "placement-contact": PlacementContactTemplate,
};

export default placementTemplates;
