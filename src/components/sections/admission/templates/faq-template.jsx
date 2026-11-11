import AdmissionPolicies from "../AdmissionPolicies";
import AdmissionFaqCategories from "../AdmissionFaqCategories";

export default function FaqTemplate({ data }) {
  if (!data) return null;
  const hasMainFaqs = data.heading || data.accordion?.some((item) => item?.question);

  return (
    <>
      {hasMainFaqs && <AdmissionPolicies data={data} />}
      {data.categorySection && <AdmissionFaqCategories data={data.categorySection} />}
    </>
  );
}
