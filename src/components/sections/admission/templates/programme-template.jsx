import { toProgrammeListing } from "@/lib/schools/admission-programmes";
import AdmissionProgramme from "../admission-programme";

export default function ProgrammeTemplate({ data }) {
  return (
    <>
      {data?.admissionProgramme && (
        <AdmissionProgramme data={toProgrammeListing(data.admissionProgramme)} />
      )}
    </>
  );
}
