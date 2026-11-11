import PhdPage from "@/components/sections/reseach-innovation/PhdPage";
import { phdSupervisors } from "@/data/research/phd-admission";

export const metadata = {
  title: "Research Supervisor's List | Dayananda Sagar University",
  description: "Department-wise list of Ph.D. research supervisors at Dayananda Sagar University.",
};

export default function Page() {
  return <PhdPage data={phdSupervisors} />;
}
