import AdmissionFee from "../admission-fee";
import AdmissionHostelFee from "../admission-hostel-fee";
import AdmissionScholarship from "../admission-scholarship";
import AdmissionFeePayment from "../admission-fee-payment";

export default function FeeTemplate({ data }) {
  return (
    <>
      {data.admissionFee && <AdmissionFee data={data.admissionFee} />}
      {data.admissionHostelFee && (
        <AdmissionHostelFee data={data.admissionHostelFee} />
      )}
      {data.admissionScholarship && (
        <AdmissionScholarship data={data.admissionScholarship} />
      )}
      {data.admissionFeePayment && (
        <AdmissionFeePayment data={data.admissionFeePayment} />
      )}
    </>
  );
}
