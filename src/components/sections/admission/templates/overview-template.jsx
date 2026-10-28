import OverviewSection from "../overviewSection";
import WhySection from "../WhySection";
import SchoolCampus from "../SchoolCampus";
import AdmissionSection from "../admissionSection";
import { getDepartments, getProgrammes, getSchools } from "@/lib/api";
import { buildSchoolCards } from "@/lib/schools/admission-schools";

// Heading, description and school title come from overview.schoolSection, campuses from overview.campusesSection.
// The school cards (with every programme under each school) come from the schools / departments / programmes API,
// for the schools picked in overview.schoolSection only.
export default async function OverviewTemplate({ data }) {
  const [schools, departments, programmes] = await Promise.all([
    getSchools(),
    getDepartments(),
    getProgrammes(),
  ]);
  const section = data.schoolSection;

  // picked schools, in the editor's order (a picked school that is not published is skipped)
  const allSchools = Array.isArray(schools) ? schools : [];
  const picked = (section?.schools ?? [])
    .map(({ slug }) => allSchools.find((school) => school?.slug === slug))
    .filter(Boolean);

  const cards = buildSchoolCards(picked, departments, programmes);
  const schoolsSection = cards.length
    ? { heading: section?.schoolTitle, items: cards }
    : undefined;

  return (
    <>
      {data.programOverviewSection && (
        <OverviewSection data={data.programOverviewSection} />
      )}
      {data.whyChoose && <WhySection data={data.whyChoose} />}
      <SchoolCampus
        data={{
          heading: section?.heading,
          description: section?.description,
          schoolsSection,
          campusesSection: data.campusesSection,
        }}
      />
      {data.admission && <AdmissionSection data={data.admission} />}
    </>
  );
}
