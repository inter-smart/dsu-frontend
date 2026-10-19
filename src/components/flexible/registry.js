import PlacementSections from "@/components/sections/academics/PlacementDashboard";
import AlumniWorld from "@/components/sections/placements/alumni-world";
import Announcement from "@/components/sections/placements/announcement";
import CampusFacility from "@/components/sections/placements/campus-facility";
import CareerGoal from "@/components/sections/placements/Career-Goal";
import CareerJourney from "@/components/sections/placements/Career-journey";
import CareerPartners from "@/components/sections/placements/Career-Partners";
import CareerPlacement from "@/components/sections/placements/Career-Placement";
import CILsection from "@/components/sections/placements/CILSection";
import CorporateConnect from "@/components/sections/placements/corporate-connect";
import DirectorMessage from "@/components/sections/placements/directors-message";
import IndustryEngagement from "@/components/sections/placements/industry-engagement";
import IndustryPartnerships from "@/components/sections/placements/industry-partnerships";
import IndustryProjects from "@/components/sections/placements/IndustryProjects";
import InternshipOpportunities from "@/components/sections/placements/Intership-Opertunities";
import InternshipPartners from "@/components/sections/placements/Placement-Partners";
import KeyFocus from "@/components/sections/placements/Key-Focus";
import PlacementOverview from "@/components/sections/placements/overview";
import CampusDrives from "@/components/sections/placements/placement-campusdrive";
import PlacementConnect from "@/components/sections/placements/placement-connect";
import PlacementContact from "@/components/sections/placements/placementcontact";
import PlacementDocuments from "@/components/sections/placements/PlacementDocuments";
import PlacementExcellence from "@/components/sections/placements/placement-excellence";
import PlacementProcess from "@/components/sections/placements/placement-process";
import PlacementReport from "@/components/sections/placements/Placement-report";
import PlacementTeam from "@/components/sections/placements/placement-team";
import ProfessionalCertification from "@/components/sections/placements/profeesional-section";
import RecruiterTestimonials from "@/components/sections/placements/recruiter-testimonials";
import Recruiters from "@/components/sections/placements/recruiters";
import RecruiteDsu from "@/components/sections/placements/recruteDsu";
import RecruitmentGallery from "@/components/sections/placements/recruitment-gallery";
import StudentSuccess from "@/components/sections/placements/student-success";
import StudentSuccessStories from "@/components/sections/placements/student-success-stories";
import TeamSection from "@/components/sections/placements/Team-section";

// Dynamic zone component uid -> the React component the fixed page uses for it,
// with the extra props that page passes (variant / className).
const flexibleRegistry = {
  // about-placement-cell (src/app/placement/page.js)
  "placement.overview-section": { Component: PlacementOverview },
  "placement.announcements-section": { Component: Announcement },
  "placement.message-section": { Component: DirectorMessage },
  "placement.team-section": { Component: TeamSection },
  "placement.cil-section": { Component: CILsection },
  "placement.contact-section": { Component: PlacementContact },
  "placement.recruiters-section": { Component: Recruiters },

  // career-development (src/app/placement/career/page.js)
  "placement.career-overview-section": { Component: CareerPlacement },
  "placement.career-key-focus-section": { Component: KeyFocus },
  "placement.career-goal-section": { Component: CareerGoal },
  "placement.career-campus-drive-section": { Component: CampusDrives },
  "placement.career-professional-section": { Component: ProfessionalCertification },
  "placement.career-partners-section": { Component: CareerPartners },
  "placement.career-journey-section": { Component: CareerJourney },

  // placement-page (src/app/placement/placement/page.js)
  "placement.pp-process": { Component: PlacementProcess, props: { variant: "whiteBg" } },
  "placement.pp-docs": { Component: PlacementDocuments },
  "placement.pp-dash": { Component: PlacementSections },
  "placement.pp-report": { Component: PlacementReport },

  // internship (src/app/placement/internship/page.js)
  "placement.int-overview-section": { Component: CorporateConnect },
  "placement.int-opps-section": { Component: InternshipOpportunities },
  "placement.int-partners-section": { Component: InternshipPartners },
  "placement.int-projects-section": { Component: IndustryProjects },
  "placement.int-stories-section": { Component: StudentSuccessStories },

  // student-success (src/app/placement/student-success/page.js)
  "placement.ss-success-section": { Component: StudentSuccess },
  "placement.ss-alumni-section": { Component: AlumniWorld },
  "placement.ss-excel-section": { Component: PlacementExcellence },
  "placement.ss-voices-section": { Component: StudentSuccessStories, props: { variant: "bg-gradient" } },

  // recruiters-industry (src/app/placement/recruiters-industry/page.js)
  "placement.ri-recruiters-section": { Component: Recruiters, props: { className: "[--recruiters-bg:#fff]" } },
  "placement.ri-partners-section": { Component: IndustryPartnerships },
  "placement.ri-engage-section": { Component: IndustryEngagement },
  "placement.ri-testi-section": { Component: RecruiterTestimonials },
  "placement.ri-gallery-section": { Component: RecruitmentGallery },

  // recruit (src/app/placement/recruit/page.js)
  "placement.rc-overview-section": { Component: CorporateConnect },
  "placement.rc-process-section": { Component: PlacementProcess, props: { variant: "corporate" } },
  "placement.rc-campus-section": { Component: CampusFacility },
  "placement.rc-docs-section": { Component: PlacementDocuments },
  "placement.rc-team-section": { Component: PlacementTeam },
  "placement.rc-enquiry-section": { Component: RecruiteDsu },

  // placement-contact (src/app/placement/placement-contact/page.js)
  "placement.pc-contact-section": { Component: PlacementConnect },
};

export default flexibleRegistry;
