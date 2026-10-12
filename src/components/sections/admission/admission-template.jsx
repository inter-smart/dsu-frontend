import InnerHero from "@/components/layout/common/InnerHero";
import AdmissionMenubar from "./admissionMenubar";
import OverviewSection from "./overviewSection";
import WhySection from "./WhySection";
import SchoolCampus from "./SchoolCampus";
import AdmissionSection from "./admissionSection";
import AdmissionProcess from "./AdmissionProcess";
import AdmissionThrough from "./AdmissionThrough";
import AdmissionDocument from "./AdmissionDocument";
import AdmissionSeatcapacity from "./AdmissionSeatcapacity";
import AdmissionPolicies from "./AdmissionPolicies";

// Schools (heading, description, school list) are not managed in the CMS yet;
// campuses come from overview.campusesSection
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
    schoolsSection: {
        heading: "Schools",
        items: [
            {
                id: 1,
                title: "School of Engineering",
                programCount: "19 Programs",
                href: "#",
            },
            {
                id: 2,
                title: "School of Computer Applications",
                programCount: "07 Programs",
                href: "#",
            },
            {
                id: 3,
                title: "School of Law",
                programCount: "04 Programs",
                href: "#",
            },
            {
                id: 4,
                title: "School of Basic & Applied Sciences",
                programCount: "07 Programs",
                href: "#",
            },
            {
                id: 5,
                title: "School of Commerce & Management",
                programCount: "5 Programs",
                href: "#",
            },
            {
                id: 6,
                title: "School of Health Sciences",
                programCount: "17 Programs",
                href: "#",
            },
            {
                id: 7,
                title: "School of Arts, Design & Humanities",
                programCount: "01 Programs",
                href: "#",
            },
            {
                id: 8,
                title: "School of Design & Digital Trans Media",
                programCount: "04 Programs",
                href: "#",
            },
        ],
    },
};

// Renders an Admission entry by its `template` (inactive templates are null)
export default function AdmissionTemplate({ pageData }) {
  const { hero, overview, process } = pageData || {};

  return (
    <>
      {hero && <InnerHero data={hero} />}
      <AdmissionMenubar className="lg:!hidden block" />
      {overview && (
        <>
          <OverviewSection data={overview.programOverviewSection} />
          <WhySection data={overview.whyChoose} />
          <SchoolCampus
            data={{ ...SCHOOL_CAMPUS, campusesSection: overview.campusesSection }}
          />
          <AdmissionSection data={overview.admission} />
        </>
      )}
      {process && (
        <>
          <AdmissionProcess data={process.Process} />
          <AdmissionThrough data={process.admissionThrough} />
          <AdmissionDocument data={process.document} />
          <AdmissionSeatcapacity data={process.seatCapacity} />
          <AdmissionPolicies data={process.policies} />
        </>
      )}
    </>
  );
}
