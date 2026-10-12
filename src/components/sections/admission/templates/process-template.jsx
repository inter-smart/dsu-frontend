import AdmissionProcess from "../AdmissionProcess";
import AdmissionThrough from "../AdmissionThrough";
import AdmissionDocument from "../AdmissionDocument";
import AdmissionSeatcapacity from "../AdmissionSeatcapacity";
import AdmissionPolicies from "../AdmissionPolicies";

export default function ProcessTemplate({ data }) {
  return (
    <>
      {data.Process && <AdmissionProcess data={data.Process} />}
      {data.admissionThrough && (
        <AdmissionThrough data={data.admissionThrough} />
      )}
      {data.document && <AdmissionDocument data={data.document} />}
      {data.seatCapacity && <AdmissionSeatcapacity data={data.seatCapacity} />}
      {data.policies && <AdmissionPolicies data={data.policies} />}
    </>
  );
}
