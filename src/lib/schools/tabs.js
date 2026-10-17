// Tab set for every school page: /schools/[slug]/[tab]. Both school types share the
// same tabs; the only difference is `programs` (schools without departments) vs
// `departments` (schools with departments). An `anchor` entry is not a page: it links to
// a section of the school home page (/schools/[slug]#anchor).
export const SCHOOL_TABS = [
  { key: "overview", label: "Overview" },
  { key: "vision-mission", label: "Vision & Mission", anchor: "vision-mission" },
  { key: "dean-message", label: "Dean's Message", deptLabel: "HoD Message" },
  { key: "why-choose", label: "Why Choose Us" },
  { key: "programs", label: "Programs", departments: false },
  { key: "departments", label: "Departments", departments: true },
  { key: "industry-collaborations", label: "Industry Collaborations" },
  { key: "facilities", label: "Infrastructure & Facilities" },
  { key: "placement-snapshot", label: "Placements Snapshot" },
  { key: "achievements", label: "Achievements" },
  { key: "news-events", label: "News & Events" },
  { key: "contact", label: "Contact" },
];

// `hasPrograms` is true when the school also owns programmes directly. A school with departments
// then shows both tabs; when it is not known (undefined) the original either/or rule applies.
export function getSchoolTabs(hasDepartments = false, hasPrograms) {
  return SCHOOL_TABS.filter((t) => {
    if (t.departments === undefined) return true;
    if (t.departments) return Boolean(hasDepartments);
    return !hasDepartments || Boolean(hasPrograms);
  }).map((t) => ({
    key: t.key,
    anchor: t.anchor,
    label: hasDepartments && t.deptLabel ? t.deptLabel : t.label,
  }));
}
