import OverviewSection from "../overviewSection";
import WhySection from "../WhySection";
import SchoolCampus from "../SchoolCampus";
import AdmissionSection from "../admissionSection";
import { getDepartments, getProgrammes, getSchools } from "@/lib/api";
import { buildSchoolCards } from "@/lib/schools/admission-schools";

// Schools heading / description are not managed in the CMS yet; the school cards (with every programme
// under each school) come from the schools / departments / programmes API, campuses from overview.campusesSection
const SCHOOL_CAMPUS = {
  heading: "Schools & Campuses",
  description: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Discover the schools shaping learning at DSU, then explore the complete programme list and admission requirements.",
        },
      ],
    },
  ],
};

export default async function OverviewTemplate({ data }) {
  const [schools, departments, programmes] = await Promise.all([
    getSchools(),
    getDepartments(),
    getProgrammes(),
  ]);
  const cards = buildSchoolCards(schools, departments, programmes);
  const schoolsSection = cards.length ? { heading: "Schools", items: cards } : undefined;

  return (
    <>
      {data.programOverviewSection && (
        <OverviewSection data={data.programOverviewSection} />
      )}
      {data.whyChoose && <WhySection data={data.whyChoose} />}
      <SchoolCampus
        data={{ ...SCHOOL_CAMPUS, schoolsSection, campusesSection: data.campusesSection }}
      />
      {data.admission && <AdmissionSection data={data.admission} />}
    </>
  );
}
