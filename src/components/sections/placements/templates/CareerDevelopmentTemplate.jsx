import InnerHero from "@/components/layout/common/InnerHero";
import CareerPlacement from "@/components/sections/placements/Career-Placement";
import KeyFocus from "@/components/sections/placements/Key-Focus";
import CareerGoal from "@/components/sections/placements/Career-Goal";
import CampusDrives from "@/components/sections/placements/placement-campusdrive";
import ProfessionalCertification from "@/components/sections/placements/profeesional-section";
import CareerPartners from "@/components/sections/placements/Career-Partners";
import CareerJourney from "@/components/sections/placements/Career-journey";
import PlacementmenuBar from "@/components/sections/placements/PlacementmenuBar";
import CareerCounselling from "@/components/sections/placements/Career-Counseling"; // CHANGED: alias path like the other sections
import { hasContent } from "@/lib/has-content";

// CHANGED: plain const (no `export default`) - a file can only have one default export.
// Used as a fallback until the Strapi API returns `careerCounseling`.
const careerCounsellingData = {
  id: "career-counselling-mentoring", 
  heading: "Career Counselling & Mentoring",
  subheading: "Guidance for Informed Career Decisions",
  content: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Career counselling and mentoring help students make informed decisions about their professional goals, areas of specialisation and future opportunities.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Through individual guidance, group sessions, faculty mentoring, alumni interactions and industry engagement, students can explore their interests, recognise their strengths and identify areas for development.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Key areas of support include:",
        },
      ],
    },
    {
      type: "list",
      format: "unordered",
      children: [
        {
          type: "list-item",
          children: [
            { type: "text", text: "Career goal setting and career-path exploration." },
          ],
        },
        {
          type: "list-item",
          children: [
            { type: "text", text: "Understanding industry roles and job profiles." },
          ],
        },
        {
          type: "list-item",
          children: [
            { type: "text", text: "Identification of skill gaps and development priorities." },
          ],
        },
        {
          type: "list-item",
          children: [
            { type: "text", text: "Resume and interview preparation guidance." },
          ],
        },
        {
          type: "list-item",
          children: [
            { type: "text", text: "Guidance on internships and early-career opportunities." },
          ],
        },
        {
          type: "list-item",
          children: [
            { type: "text", text: "Exposure to entrepreneurship, research and higher education pathways." },
          ],
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Students are encouraged to take an active role in their career development by setting clear goals, seeking feedback and continuously improving their professional capabilities.",
        },
      ],
    },
  ],
};

// data: the page API response ({ hero, sidebar, careerDevelopment, ... })
export default function CareerDevelopmentTemplate({ data }) {
    const career = data?.careerDevelopment || {};

    const overview = career.programOverviewSection;
    const keyFocus = career.KeyFocus;
    const careerGoal = career.careerGoal;
    // CHANGED: falls back to the local data above when the API has no careerCounseling yet
    const careerCounseling = hasContent(career.careerCounseling)
        ? career.careerCounseling
        : careerCounsellingData;
    const campusDrive = career.campusDrive;
    const professional = career.professional;
    const partners = career.partnersSection;
    const journey = career.careerJorney;

    return (
        <>
            {hasContent(data?.hero) && <InnerHero data={data.hero} placementMenuItems={data?.sidebar} />}
            <PlacementmenuBar items={data?.sidebar} className="lg:!hidden block" />
            {hasContent(overview) && <CareerPlacement data={overview} />}
            {hasContent(keyFocus) && <KeyFocus data={keyFocus} />}
            {hasContent(careerGoal) && <CareerGoal data={careerGoal} />}
            {hasContent(careerCounseling) && <CareerCounselling data={careerCounseling} />}
            {hasContent(campusDrive) && <CampusDrives data={campusDrive} />}
            {hasContent(professional) && <ProfessionalCertification data={professional} />}
            {hasContent(partners) && <CareerPartners data={partners} />}
            {hasContent(journey) && <CareerJourney data={journey} />}
        </>
    );
}