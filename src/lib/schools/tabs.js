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

// `hasDepartments` is true when the Programs tab of the school uses the Department template
// (the API's `template: "department"`); that school lists Departments instead of Programs.
export function getSchoolTabs(hasDepartments = false) {
  return SCHOOL_TABS.filter((t) => {
    if (t.departments === undefined) return true;
    if (t.departments) return Boolean(hasDepartments);
    return !hasDepartments;
  }).map((t) => ({
    key: t.key,
    anchor: t.anchor,
    label: hasDepartments && t.deptLabel ? t.deptLabel : t.label,
  }));
}
