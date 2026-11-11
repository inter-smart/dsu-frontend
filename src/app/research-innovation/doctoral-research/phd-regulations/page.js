import PhdPage from "@/components/sections/reseach-innovation/PhdPage";
import { phdRegulations } from "@/data/research/phd-admission";

export const metadata = {
  title: "Ph.D Regulations | Dayananda Sagar University",
  description: "Ph.D regulations, official circular, templates and research ethics policy of Dayananda Sagar University.",
};

export default function Page() {
  return <PhdPage data={phdRegulations} />;
}
