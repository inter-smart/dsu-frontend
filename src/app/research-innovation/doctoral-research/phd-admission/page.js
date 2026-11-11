import PhdPage from "@/components/sections/reseach-innovation/PhdPage";
import { phdAdmission } from "@/data/research/phd-admission";

export const metadata = {
  title: "Ph.D. Admission – December 2026 Session | Dayananda Sagar University",
  description:
    "Apply for the full-time, part-time and Direct Ph.D. programmes at Dayananda Sagar University: eligibility, entrance test, fees, fellowship and important dates.",
};

export default function Page() {
  return <PhdPage data={phdAdmission} />;
}
