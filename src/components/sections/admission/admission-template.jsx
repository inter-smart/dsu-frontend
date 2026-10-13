import InnerHero from "@/components/layout/common/InnerHero";
import AdmissionMenubar from "./admissionMenubar";
import OverviewTemplate from "./templates/overview-template";
import ProcessTemplate from "./templates/process-template";
import FeeTemplate from "./templates/fee-template";
import EligibilityTemplate from "./templates/eligibility-template";
import HostelTemplate from "./templates/hostel-template";
import DatesTemplate from "./templates/dates-template";

// One component per Admission `template` value
const TEMPLATES = {
  overview: OverviewTemplate,
  process: ProcessTemplate,
  "admission-fee": FeeTemplate,
  eligibility: EligibilityTemplate,
  hostel: HostelTemplate,
  dates: DatesTemplate,
};

// Renders an Admission entry by its `template`
export default function AdmissionTemplate({ pageData }) {
  const { hero, template } = pageData || {};
  const Template = TEMPLATES[template];
  const templateData = pageData?.[template];

  return (
    <>
      {hero && <InnerHero data={hero} />}
      {hero?.admissionMenubar && (
        <AdmissionMenubar className="lg:!hidden block" />
      )}
      {Template && templateData && <Template data={templateData} />}
    </>
  );
}