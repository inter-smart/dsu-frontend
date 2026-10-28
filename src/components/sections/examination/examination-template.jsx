import InnerHero from "@/components/layout/common/InnerHero";
import Examination from "./examination";
import ExaminationResult from "./examination-result";
import ExaminationTimeTable from "./examination-time-table";
import ExaminationContact from "./examination-contact";

// Renders an Examination entry by its `template`
export default function ExaminationTemplate({ pageData }) {
  // common sidebar shared by every section
  const sidebar = pageData?.sidebar || [];

  return (
    <>
      {pageData?.hero && <InnerHero data={pageData.hero} />}
      {pageData?.template === "examination" && pageData.examination && (
        <Examination data={pageData.examination} sidebar={sidebar} />
      )}
      {pageData?.template === "results" && pageData.results && (
        <ExaminationResult data={pageData.results} sidebar={sidebar} />
      )}
      {pageData?.template === "timetables" && pageData.timetables && (
        <ExaminationTimeTable
          slug={pageData.slug}
          data={pageData.timetables}
          sidebar={sidebar}
        />
      )}
      {pageData?.template === "contact" && pageData.contact && (
        <ExaminationContact data={pageData.contact} sidebar={sidebar} />
      )}
    </>
  );
}
