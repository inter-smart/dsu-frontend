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

// Plain const (no export): a file can only have one default export.
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
      children: [{ type: "text", text: "Key areas of support include:" }],
    },
    {
      type: "list",
      format: "unordered",
      children: [
        { type: "list-item", children: [{ type: "text", text: "Career goal setting and career-path exploration." }] },
        { type: "list-item", children: [{ type: "text", text: "Understanding industry roles and job profiles." }] },
        { type: "list-item", children: [{ type: "text", text: "Identification of skill gaps and development priorities." }] },
        { type: "list-item", children: [{ type: "text", text: "Resume and interview preparation guidance." }] },
        { type: "list-item", children: [{ type: "text", text: "Guidance on internships and early-career opportunities." }] },
        { type: "list-item", children: [{ type: "text", text: "Exposure to entrepreneurship, research and higher education pathways." }] },
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

// 2.4 Professional Certifications + 2.5 Career Resources (headings are inside `content`).
// Plain const, used as a fallback until the API returns `careerSections`.
const careerSectionsData = {
  id: "career-certifications-resources",
  content: [
    // ───────── 2.4 Professional Certifications ─────────
    {
      type: "heading",
      level: 2,
      children: [{ type: "text", text: "Professional Certifications" }],
    },
    {
      type: "paragraph",
      children: [
        { type: "text", text: "Strengthening Professional Competence", italic: true },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Professional certifications can help students demonstrate specialised knowledge, practical skills and a commitment to continuous learning. DSU encourages students to explore relevant certifications based on their academic discipline, career goals and industry requirements.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [{ type: "text", text: "Certification areas include:" }],
    },
    {
      type: "list",
      format: "unordered",
      children: [
        { type: "list-item", children: [{ type: "text", text: "Cloud computing and digital technologies." }] },
        { type: "list-item", children: [{ type: "text", text: "Artificial intelligence, machine learning and data analytics." }] },
        { type: "list-item", children: [{ type: "text", text: "Cybersecurity and networking." }] },
        { type: "list-item", children: [{ type: "text", text: "Software development and programming." }] },
        { type: "list-item", children: [{ type: "text", text: "Project management and business analytics." }] },
        { type: "list-item", children: [{ type: "text", text: "Finance, accounting and business operations." }] },
        { type: "list-item", children: [{ type: "text", text: "Digital marketing and communication." }] },
        { type: "list-item", children: [{ type: "text", text: "Discipline-specific professional qualifications." }] },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Certification opportunities may be offered through recognised industry partners, professional bodies, technology platforms or approved training providers.",
        },
      ],
    },

    // ───────── 2.5 Career Resources ─────────
    {
      type: "heading",
      level: 2,
      children: [{ type: "text", text: "Career Resources" }],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "The Career Resources section provides students with practical guidance and reference materials to support career planning, application preparation and professional development.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [{ type: "text", text: "Resource categories:" }],
    },
    {
      type: "list",
      format: "unordered",
      children: [
        { type: "list-item", children: [{ type: "text", text: "Resume and cover-letter preparation." }] },
        { type: "list-item", children: [{ type: "text", text: "Interview preparation guides." }] },
        { type: "list-item", children: [{ type: "text", text: "Aptitude and reasoning practice resources." }] },
        { type: "list-item", children: [{ type: "text", text: "Technical interview preparation." }] },
        { type: "list-item", children: [{ type: "text", text: "Group discussion and presentation guidance." }] },
        { type: "list-item", children: [{ type: "text", text: "Professional networking and personal branding." }] },
        { type: "list-item", children: [{ type: "text", text: "Internship search and application guidance." }] },
        { type: "list-item", children: [{ type: "text", text: "Workplace etiquette and professional communication." }] },
        { type: "list-item", children: [{ type: "text", text: "Higher education and competitive examination guidance." }] },
        { type: "list-item", children: [{ type: "text", text: "Entrepreneurship and startup resources." }] },
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
  // falls back to the local data above when the API has no careerCounseling yet
  const careerCounseling = hasContent(career.careerCounseling)
    ? career.careerCounseling
    : careerCounsellingData;
  // falls back to the local data above when the API has no careerSections yet
  const careerSections = hasContent(career.careerSections)
    ? career.careerSections
    : careerSectionsData;
  const campusDrive = career.campusDrive;
  const professional = career.professional;
  const partners = career.partnersSection;
  const journey = career.careerJorney;

  return (
    <>
      {hasContent(data?.hero) && (
        <InnerHero data={data.hero} placementMenuItems={data?.sidebar} />
      )}
      <PlacementmenuBar items={data?.sidebar} className="lg:!hidden block" />
      {hasContent(overview) && <CareerPlacement data={overview} />}
      {hasContent(keyFocus) && <KeyFocus data={keyFocus} />}
      {hasContent(careerCounseling) && <CareerCounselling data={careerCounseling} />}
      {hasContent(careerGoal) && <CareerGoal data={careerGoal} />}
      {hasContent(careerSections) && <CareerCounselling data={careerSections} />}
      {hasContent(campusDrive) && <CampusDrives data={campusDrive} />}
      {hasContent(professional) && <ProfessionalCertification data={professional} />}
      {hasContent(partners) && <CareerPartners data={partners} />}
      {hasContent(journey) && <CareerJourney data={journey} />}
    </>
  );
}