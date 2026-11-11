import InnerHero from "@/components/layout/common/InnerHero";
import AcademicMenubar from "@/components/sections/academics/academicMenubar";
import { PHD_BASE, phdMenuItems } from "@/data/research/phd-admission";

// Hero + menubar + one `.typography` block holding the page's trusted, static HTML (src/data/research/phd-admission.js).
// Each section inside the HTML carries its own vertical padding and full-bleed background.
export default function PhdPage({ data }) {
  return (
    <>
      <InnerHero data={data.hero} />
      <AcademicMenubar className="md:!hidden block" items={phdMenuItems} homeHref={PHD_BASE} />
      <div className="container">
        <div className="typography" dangerouslySetInnerHTML={{ __html: data.html }} />
      </div>
    </>
  );
}
