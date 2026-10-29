import AdmissionContactTemplate from "@/components/sections/admission/templates/contact-template";
import AdmissionDatesTemplate from "@/components/sections/admission/templates/dates-template";
import AdmissionDownloadTemplate from "@/components/sections/admission/templates/download-template";
import AdmissionEligibilityTemplate from "@/components/sections/admission/templates/eligibility-template";
import AdmissionFaqTemplate from "@/components/sections/admission/templates/faq-template";
import AdmissionFeeTemplate from "@/components/sections/admission/templates/fee-template";
import AdmissionHostelTemplate from "@/components/sections/admission/templates/hostel-template";
import AdmissionOverviewTemplate from "@/components/sections/admission/templates/overview-template";
import AdmissionProcessTemplate from "@/components/sections/admission/templates/process-template";
import AdmissionProgrammeTemplate from "@/components/sections/admission/templates/programme-template";
import Alumni from "@/components/sections/alumni/alumni";
import AlumniContact from "@/components/sections/alumni/alumni-contact";
import AlumniEvents from "@/components/sections/alumni/alumni-events";
import AlumniNewsletter from "@/components/sections/alumni/alumni-newsletter";
import Examination from "@/components/sections/examination/examination";
import ExaminationContact from "@/components/sections/examination/examination-contact";
import ExaminationResult from "@/components/sections/examination/examination-result";
import ExaminationTimeTable from "@/components/sections/examination/examination-time-table";
import NIRFRanking from "@/components/sections/NIRF/NIRF-ranking";
import OtherApproval from "@/components/sections/regulatory-approval/other-approval";
import UgcRecognition from "@/components/sections/regulatory-approval/ugc-recognition";
import SdgIntroduction from "@/components/sections/SDG/SdgInroduction";
import DSUDEADC from "@/components/sections/why-us/DSU-DEADC";
import DSUOmbudsman from "@/components/sections/why-us/DSU-Ombudsman";
import DSUWomenRedressal from "@/components/sections/why-us/DSU-womenredressal";
import IQAC from "@/components/sections/why-us/IQAC";
import IQACReport from "@/components/sections/why-us/IQAC-reports";
import AcademicAchievements from "@/components/sections/academics/academic-achievements";
import AcademicCollaboration from "@/components/sections/academics/academic-collaboration";
import AcademicContact from "@/components/sections/academics/academic-contact";
import AcademicFacultyAchievements from "@/components/sections/academics/academic-faculty-achievements";
import AcademicHomeOverview from "@/components/sections/academics/academic-home-overview";
import AcademicInfrastructure from "@/components/sections/academics/academic-infrastructure";
import AcademicOverview from "@/components/sections/academics/academic-overview";
import AcademicPartners from "@/components/sections/academics/academic-partners";
import AcademicPlacementReport from "@/components/sections/academics/academic-placement-report";
import AcademicProgram from "@/components/sections/academics/academic-program";
import AcademicVisionMission from "@/components/sections/academics/academic-vision-mission";
import AcademicWhychoose from "@/components/sections/academics/academic-whychoose";
import DeanMessage from "@/components/sections/academics/dean-message";
import AiAcademicChapters from "@/components/sections/ai-enabled/Ai-academicChapters";
import AiAcademicCollaboration from "@/components/sections/ai-enabled/Ai-academic-collaboration";
import AiClinicalFacility from "@/components/sections/ai-enabled/Ai-clinical-facility";
import AiFacility from "@/components/sections/ai-enabled/Ai-facility";
import AiHighlights from "@/components/sections/ai-enabled/Ai-highlights";
import AiLaboratory from "@/components/sections/ai-enabled/Ai-laboratory";
import AiPartnerwithus from "@/components/sections/ai-enabled/Ai-partnerwithus";
import AiRecentClinic from "@/components/sections/ai-enabled/Ai-recent-clinic";
import AiVisionMission from "@/components/sections/ai-enabled/Ai-vision-mission";
import NewsEvents from "@/components/sections/news-events/news-events";
import * as adapt from "@/lib/schools/department-adapters";
import AboutHistory from "@/components/sections/about/about-history";
import AboutLeadership from "@/components/sections/about/about-leadership";
import AboutLegacy from "@/components/sections/about/about-legacy";
import AboutRecognition from "@/components/sections/about/about-recognition";
import AboutVision from "@/components/sections/about/about-vision";
import AboutWelcome from "@/components/sections/about/about-welcome";
import AiFirstHero from "@/components/sections/ai-first/ai-first-hero";
import AboutInitiative from "@/components/sections/ai-first/ai-first-about-initiative";
import BePartOfFuture from "@/components/sections/ai-first/ai-first-be-part-of-future";
import EducationAmplified from "@/components/sections/ai-first/ai-first-education-amplified";
import AiLeadership from "@/components/sections/ai-first/ai-first-leadership";
import ReadyCta from "@/components/sections/ai-first/ai-first-ready-cta";
import ResearchDomains from "@/components/sections/ai-first/ai-first-research-domains";
import ResearchEngagement from "@/components/sections/ai-first/ai-first-research-engagement";
import ShapeFuture from "@/components/sections/ai-first/ai-first-shape-future";
import Contact from "@/components/sections/contact/contact";
import HistoryDetails from "@/components/sections/history/history-Details";
import HistoryNewpahse from "@/components/sections/history/history-newpahse";
import HistoryPillers from "@/components/sections/history/history-pillers";
import HistoryTimeline from "@/components/sections/history/history-Timeline";
import HomeAbout from "@/components/sections/home/home-about";
import HomeAcademic from "@/components/sections/home/home-academic";
import HomeCampusLife from "@/components/sections/home/home-campus-life";
import HomeCollaborations from "@/components/sections/home/home-collaborations";
import HomeExcellence from "@/components/sections/home/home-excellence";
import HomeHero from "@/components/sections/home/home-hero";
import HomeIndustry from "@/components/sections/home/home-industry";
import HomeResearch from "@/components/sections/home/home-research-innovation";
import HomeTestimonials from "@/components/sections/home/home-testimonials";
import Journey from "@/components/layout/common/journey";
import ArchitectureSection from "@/components/sections/NVIDIA/architecture-section";
import BannerSection from "@/components/sections/NVIDIA/banner-section";
import BuildSection from "@/components/sections/NVIDIA/build-section";
import GatewaySection from "@/components/sections/NVIDIA/gateway-section";
import JourneySection from "@/components/sections/NVIDIA/journey-section";
import MasterAi from "@/components/sections/NVIDIA/MasterAi";
import StackSection from "@/components/sections/NVIDIA/stack-section";
import TechnologySection from "@/components/sections/NVIDIA/technology-section";
import AiTools from "@/components/sections/NVIDIA/ai-Tools";
import AiTrainingSection from "@/components/sections/NVIDIA/ai-training-section";
import WhysetupSection from "@/components/sections/NVIDIA/Whysetup-Section";
import { HomeEvents, HomeNews } from "./home-sections";
import GovernanceFinancecommittte from "@/components/sections/governance/governance-financecommittte";
import AcademicQualitySection from "@/components/sections/why-us/AcademicQualitySection";
import WhyusAQAR from "@/components/sections/why-us/Whyus-AQAR";
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

// Alumni components read the sidebar from their data
function withSidebar(Component) {
    return function WithSidebar({ data, sidebar }) {
        return <Component data={{ ...data, sidebar }} />;
    };
}

// Department sections whose API shape differs from the component's props (see lib/schools/department-adapters)
function adapted(Component, adapter) {
    return function Adapted({ data }) {
        const props = adapter(data);
        return props ? <Component data={props} /> : null;
    };
}

// Dynamic zone component uid -> the React component the fixed page uses for it,
// with the extra props that page passes (variant / className).
// Every page type's "flexible-page" template renders its `flexibleSections` with this (see FlexibleSections).
const flexibleRegistry = {
  // about-placement-cell (src/app/placement/page.js)
  "placement.overview-section": { Component: PlacementOverview },
  "placement.announcements-section": { Component: Announcement },
  "placement.message-section": { Component: DirectorMessage },
  "placement.team-section": { Component: TeamSection },
  "placement.cil-section": { Component: CILsection },
  "placement.contact-section": { Component: PlacementContact },
  "placement.recruiters-section": { Component: Recruiters },

  // career-development (src/app/placement/[slug]/page.js)
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

  // admission templates (src/components/sections/admission/admission-template.jsx)
  "admission.overview-template": { Component: AdmissionOverviewTemplate },
  "admission.process-template": { Component: AdmissionProcessTemplate },
  "admission.admission-fee-template": { Component: AdmissionFeeTemplate },
  "admission.eligibility-template": { Component: AdmissionEligibilityTemplate },
  "admission.hostel-template": { Component: AdmissionHostelTemplate },
  "admission.dates-template": { Component: AdmissionDatesTemplate },
  "admission.download-template": { Component: AdmissionDownloadTemplate },
  "admission.admission-faq": { Component: AdmissionFaqTemplate },
  "admission.contact-template": { Component: AdmissionContactTemplate },
  "admission.programme-template": { Component: AdmissionProgrammeTemplate },

  // student support (src/app/why-us/[slug]/page.js); these get the student support menu
  "student-support.wr-page-template": { Component: DSUWomenRedressal },
  "student-support.squad-template": { Component: DSUWomenRedressal },
  "student-support.ombudsman-page-template": { Component: DSUOmbudsman },
  "student-support.ceadc-page-template": { Component: DSUDEADC },

  // alumni (src/components/sections/alumni/alumni-template.jsx); these get the sidebar inside data
  "alumni.alumni-template": { Component: withSidebar(Alumni) },
  "alumni.alumni-events-template": { Component: withSidebar(AlumniEvents) },
  "alumni.alumni-newsletter-template": { Component: withSidebar(AlumniNewsletter) },
  "alumni.alumni-contact-template": { Component: withSidebar(AlumniContact) },

  // examination (src/components/sections/examination/examination-template.jsx)
  "examination.examination-template": { Component: Examination },
  "examination.results-template": { Component: ExaminationResult },
  "examination.timetables-template": { Component: ExaminationTimeTable },
  "examination.contact-template": { Component: ExaminationContact },

  // regulatory approval (src/app/regulatory-approval/[slug]/page.js)
  "regulatory-approvals.recognition": { Component: UgcRecognition },
  "regulatory-approvals.other-approval-section": { Component: OtherApproval },

  // IQAC (src/app/why-us/[slug]/page.js)
  "iqac.iqac-template": { Component: IQAC },
  "iqac.reports-template": { Component: IQACReport },

  // national ranking (src/app/national-Ranking/[slug]/[[...category]]/page.js)
  "rankings.nirf-template": { Component: NIRFRanking },
  "rankings.sdg-template": { Component: SdgIntroduction },

  // school sections (src/app/schools/[slug]/...); no school context, so links that need one are left out
  "school.program-overview-section": { Component: AcademicHomeOverview },
  "school.overview-section": { Component: AcademicOverview },
  "school.vision-mission-section": { Component: AcademicVisionMission },
  "school.dean-message-section": { Component: DeanMessage },
  "school.why-choose-section": { Component: AcademicWhychoose },
  "school.programs-section": { Component: AcademicProgram },
  "school.collaborations-section": { Component: AcademicCollaboration },
  "school.partners-section": { Component: AcademicPartners },
  "school.modern-spaces-section": { Component: AcademicInfrastructure },
  "school.news-events-section": { Component: NewsEvents },
  "school.contact-section": { Component: AcademicContact },
  "school.placement-reports-section": { Component: AcademicPlacementReport },
  "school.achievement-section": { Component: AcademicAchievements },
  "school.faculty-achievements-section": { Component: AcademicFacultyAchievements },

  // department sections (src/components/sections/academics/department-page.jsx)
  "department.overview-section": { Component: AcademicOverview },
  "department.highlights-section": { Component: AiHighlights },
  "department.mission-vision-section": { Component: AiVisionMission },
  "department.hod-message-section": { Component: DeanMessage },
  "department.labs-intro-section": { Component: AiLaboratory },
  "department.specialized-labs-section": { Component: AiFacility },
  "department.facilities-section": { Component: adapted(AiClinicalFacility, adapt.clinicalFacilitiesSection) },
  "department.key-collaborations-section": { Component: AiAcademicCollaboration },
  "department.engagement-section": { Component: adapted(AiRecentClinic, adapt.recentEngagementSection) },
  "department.partner-with-us-section": { Component: adapted(AiPartnerwithus, adapt.partnerWithUsSection) },
  "department.chapters-section": { Component: adapted(AiAcademicChapters, adapt.chaptersSection) },
  "department.placement-collaborations-section": { Component: AcademicCollaboration },
  "department.placement-partners-section": { Component: AcademicPartners },

  // home page (src/app/page.jsx)
  "home.hero-slides": { Component: HomeHero },
  "home.centres-of-excellence": { Component: HomeExcellence },
  "home.academic-programs": { Component: HomeAcademic },
  "home.research-innovation": { Component: HomeResearch },
  "home.industry-section": { Component: HomeIndustry },
  "home.home-about": { Component: HomeAbout },
  "home.student-success": { Component: HomeTestimonials },
  "home.campus-life": { Component: HomeCampusLife },
  "home.international-collaboration": { Component: HomeCollaborations },
  "home.events-section": { Component: HomeEvents },
  "home.latest-news": { Component: HomeNews },
  "shared.journey": { Component: Journey },

  // about page (src/components/sections/about/about-page-view.jsx)
  "about.welcome-section": { Component: AboutWelcome },
  "about.legacy-section": { Component: AboutLegacy },
  "about.vision-section": { Component: AboutVision },
  "about.history-section": { Component: AboutHistory },
  "about.leadership-section": { Component: AboutLeadership },
  "about.recognition-section": { Component: AboutRecognition },

  // history page (src/app/history/page.js)
  "about.history-timeline": { Component: HistoryTimeline },
  "about.history-institutions": { Component: HistoryDetails },
  "about.founding-pillars": { Component: HistoryPillers },
  "about.history-new-phase": { Component: HistoryNewpahse },

  // contact page (src/app/contact/page.js)
  "contact.contact-section": { Component: Contact },

  // AI First page (src/app/ai-first/page.js)
  "ai-first.hero": { Component: AiFirstHero },
  "ai-first.about-section": { Component: AboutInitiative },
  "ai-first.education-section": { Component: EducationAmplified },
  "ai-first.domains-section": { Component: ResearchDomains },
  "ai-first.engagement-section": { Component: ResearchEngagement },
  "ai-first.leadership-section": { Component: AiLeadership },
  "ai-first.future-section": { Component: BePartOfFuture },
  "ai-first.shape-section": { Component: ShapeFuture },
  "ai-first.ready-section": { Component: ReadyCta },

  // NVIDIA page (src/app/NVIDIA/page.js)
  "nvidia.hero-banner": { Component: BannerSection },
  "nvidia.technology-section": { Component: TechnologySection },
  "nvidia.architecture-section": { Component: ArchitectureSection },
  "nvidia.stack-section": { Component: StackSection },
  "nvidia.journey-section": { Component: JourneySection },
  "nvidia.ai-training-section": { Component: AiTrainingSection },
  "nvidia.ai-tools-section": { Component: AiTools },
  "nvidia.build-section": { Component: BuildSection },
  "nvidia.why-setup-section": { Component: WhysetupSection },
  "nvidia.gateway-section": { Component: GatewaySection },
  "nvidia.ready-section": { Component: MasterAi },

  // academic quality, AQAR and governance (src/app/why-us/[slug]/page.js, src/app/governance/[slug]/page.js)
  "academic-quality.quality-section": { Component: AcademicQualitySection },
  "aqar.reports-section": { Component: WhyusAQAR },
  "governance.finance-committee-data": { Component: GovernanceFinancecommittte },
};

export default flexibleRegistry;
