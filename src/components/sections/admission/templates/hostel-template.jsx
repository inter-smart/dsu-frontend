import AcademicAchievements from "@/components/sections/academics/academic-achievements";
import AdmissionAccomodation from "../AdmissionAccomodation";
import AdmissionHostelFacility from "../admissionHostelFacility";
import AdmissionDining from "../AdmissionDining";
import AdmissionTransportation from "../AdmissionTransportation";
import AdmissionSafety from "../AdmissionSafety";
import AdmissionPlanning from "../AdmissionPlanning";

export default function HostelTemplate({ data }) {
  return (
    <>
      {data.achievementSection && (
        <AcademicAchievements data={data.achievementSection} variant="hostel" />
      )}
      {data.accomodation && <AdmissionAccomodation data={data.accomodation} />}
      {data.facility && <AdmissionHostelFacility data={data.facility} />}
      {data.dining && <AdmissionDining data={data.dining} />}
      {data.transportation && (
        <AdmissionTransportation data={data.transportation} />
      )}
      {data.safety && <AdmissionSafety data={data.safety} />}
      {data.planning && <AdmissionPlanning data={data.planning} />}
    </>
  );
}
