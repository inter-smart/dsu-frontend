import { notFound, redirect } from "next/navigation";
import { getAdmissions } from "@/lib/api";

// /admission is linked from the floating "Apply Now" button and the admission breadcrumbs
// ("Admission @ DSU"). The admission pages themselves live at /admission/<slug> (CMS entries), so
// send visitors to the Overview entry, or the first entry in menu order when there is no Overview.
const TEMPLATE_ORDER = [
  "overview",
  "programme",
  "process",
  "eligibility",
  "admission-fee",
  "hostel",
  "dates",
  "download",
  "faqs",
  "contact",
];

export default async function AdmissionIndexPage() {
  const entries = ((await getAdmissions()) || []).filter((e) => e?.slug);
  const rank = (e) => {
    const i = TEMPLATE_ORDER.indexOf(e.template);
    return i === -1 ? TEMPLATE_ORDER.length : i;
  };
  const target = [...entries].sort((a, b) => rank(a) - rank(b))[0];

  if (!target) notFound();
  redirect(`/admission/${encodeURIComponent(target.slug)}`);
}
