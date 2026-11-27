import OverviewSection from "../overviewSection";
import WhySection from "../WhySection";
import SchoolCampus from "../SchoolCampus";
import AdmissionSection from "../admissionSection";
import { getDepartments, getProgrammes, getSchools } from "@/lib/api";
import { buildSchoolCards } from "@/lib/schools/admission-schools";
import { hasContent } from "@/lib/has-content";

// Flexible-page slugs that get the compact layout: empty sections are skipped (no padding gap)
// and the Why Choose banner has tighter spacing. Every other page renders exactly as before.
const COMPACT_SLUGS = ["the-cjmc-advantage"];

// Heading, description and school title come from overview.schoolSection, campuses from overview.campusesSection.
// The school cards (with every programme under each school) come from the schools / departments / programmes API,
// for the schools picked in overview.schoolSection only.
export default async function OverviewTemplate({ data, slug }) {
  const [schools, departments, programmes] = await Promise.all([
    getSchools(),
    getDepartments(),
    getProgrammes(),
  ]);
  const section = data.schoolSection;
  const compact = COMPACT_SLUGS.includes(slug);

  // picked schools, in the editor's order (a picked school that is not published is skipped)
  const allSchools = Array.isArray(schools) ? schools : [];
  const picked = (section?.schools ?? [])
    .map(({ slug }) => allSchools.find((school) => school?.slug === slug))
    .filter(Boolean);

  const cards = buildSchoolCards(picked, departments, programmes);
  const schoolsSection = cards.length
    ? { heading: section?.schoolTitle, items: cards }
    : undefined;

  // Strapi returns empty components as objects, so a bare truthiness check still renders the
  // section's padding/background: only show a section that actually holds something.
  const showOverview = hasContent(data.programOverviewSection);
  const showWhy = hasContent(data.whyChoose);
  const showSchoolCampus =
    hasContent(section?.heading) ||
    hasContent(section?.description) ||
    Boolean(schoolsSection) ||
    data.campusesSection?.items?.length > 0;
  const showAdmission = hasContent(data.admission);

  return (
    <>
      {showOverview && <OverviewSection data={data.programOverviewSection} />}
      {showWhy && <WhySection data={data.whyChoose} compact={compact} />}
      {showSchoolCampus && (
        <SchoolCampus
          data={{
            heading: section?.heading,
            description: section?.description,
            schoolsSection,
            campusesSection: data.campusesSection,
          }}
        />
      )}
      {showAdmission && <AdmissionSection data={data.admission} />}
    </>
  );
}
