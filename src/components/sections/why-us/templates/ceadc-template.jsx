import InnerHero from "@/components/layout/common/InnerHero";
import DSUDEADC from "@/components/sections/why-us/DSU-DEADC";
import { hasContent } from "@/lib/has-content";

// CEADC design of Student Support & Welfare: hero + side menu + the cells accordion.
// `page` is the /api/student-supports/:slug response, `menu` the /api/student-supports list.
export default function CeadcTemplate({ page, menu }) {
  const content = page?.capabilityEnhancementCells;

  return (
    <>
      {hasContent(page?.hero) && <InnerHero data={page.hero} />}
      {hasContent(content) && <DSUDEADC data={content} menu={menu} />}
    </>
  );
}
