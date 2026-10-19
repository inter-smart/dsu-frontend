import { notFound } from "next/navigation";
import { getDepartmentTab, getProgrammeBySlug } from "@/lib/api";
import { departmentHref, programmeHref } from "@/lib/schools/items";

// Department and programme pages, resolved from the real hierarchy:
//   /ai-enabled/[school]/[department]/[tab]
//   /ai-enabled/[school]/[department]/programs/[programme]/[tab]
//   /schools/[school]/programs/[programme]/[tab]            (programme owned by the school or, as an
//                                                            alias, by one of its departments)
// A tab is listed in the menu (and reachable) only when the API has something for it.
export const DEPARTMENT_TABS = [
  { key: "overview", label: "Overview" },
  { key: "hod-message", label: "HoD Message" },
  { key: "programs", label: "Programs Offered" },
  { key: "faculty", label: "Faculty" },
  { key: "laboratories", label: "Laboratories" },
  { key: "research-areas", label: "Research Areas" },
  { key: "industry-connect", label: "Industry Connect" },
  { key: "library", label: "Library" },
  { key: "student-chapters", label: "Student Chapters" },
  { key: "placements", label: "Placements" },
  { key: "achievements", label: "Achievements" },
  { key: "news-events", label: "News & Events" },
  { key: "contact", label: "Contact" },
];

export const PROGRAM_TABS = [
  { key: "overview", label: "Overview" },
  { key: "eligibility", label: "Eligibility" },
  { key: "curriculum", label: "Curriculum" },
  { key: "peo", label: "PEO" },
  { key: "po-pso", label: "PO & PSO" },
  { key: "faculty", label: "Faculty" },
  { key: "career-opportunities", label: "Career Opportunities" },
  { key: "admissions", label: "Admissions" },
  { key: "downloads", label: "Downloads" },
];

const tabHref = (base, tab) => (tab === "overview" ? base : `${base}/${tab}`);
// Menu links use /overview explicitly: the bare base path is a prefix of every tab URL, which would keep Overview active.
const menuHref = (base, tab) => `${base}/${tab}`;

const menuFor = (tabs, base) => tabs.map((t) => ({ label: t.label, href: menuHref(base, t.key) }));

// An API HTML field is only usable as a non-empty string (an empty field arrives as []).
export const htmlOrNull = (v) => (typeof v === "string" && v.trim() ? v : null);

// Every programme tab is listed (and clickable), even when its content is empty.
const programmeTabKeys = () => PROGRAM_TABS.map((t) => t.key);

// Hero for an entity page: the API hero (its own banner or the school's), full breadcrumb.
function buildHero(apiHero, trail, title) {
  return {
    heroMedia: apiHero?.heroMedia,
    title,
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Schools", href: "/schools" }, ...trail],
  };
}

export async function loadDepartmentPage(schoolSlug, departmentSlug, tab) {
  const entry = DEPARTMENT_TABS.find((t) => t.key === tab);
  if (!entry) notFound();

  const res = await getDepartmentTab(departmentSlug, tab);
  if (!res?.slug || res.school?.slug !== schoolSlug) notFound();

  const available = new Set(["overview", ...(res.availableTabs ?? [])]);
  if (!available.has(tab)) notFound();

  const base = departmentHref(schoolSlug, departmentSlug);
  const trail = [
    { label: res.school.name, href: `/schools/${schoolSlug}` },
    { label: res.name, href: base },
    ...(tab === "overview" ? [] : [{ label: entry.label, href: tabHref(base, tab) }]),
  ];

  return {
    school: res.school,
    department: res,
    data: res.tab ?? {},
    label: entry.label,
    hero: {
      ...buildHero(res.hero, trail, res.hero?.title || res.name),
      // a breadcrumb set on the tab's own Hero wins over the generated trail
      ...(res.hero?.breadcrumb?.length ? { breadcrumb: res.hero.breadcrumb } : {}),
    },
    menuItems: menuFor(DEPARTMENT_TABS.filter((t) => available.has(t.key)), base),
    menuHome: base,
  };
}

export async function loadProgramPage(schoolSlug, programmeSlug, tab, departmentSlug) {
  const entry = PROGRAM_TABS.find((t) => t.key === tab);
  if (!entry) notFound();

  const programme = await getProgrammeBySlug(programmeSlug);
  // the school is the programme's own or, through its department, the department's
  if (!programme?.slug || programme.school?.slug !== schoolSlug) notFound();
  if (departmentSlug && programme.department?.slug !== departmentSlug) notFound();

  const available = new Set(programmeTabKeys());
  if (!available.has(tab)) notFound();

  const owner = programme.department;
  const base = programmeHref(schoolSlug, programmeSlug, owner?.slug);
  const trail = [
    { label: programme.school.name, href: `/schools/${schoolSlug}` },
    ...(owner ? [{ label: owner.name, href: departmentHref(schoolSlug, owner.slug) }] : []),
    { label: programme.title, href: base },
    ...(tab === "overview" ? [] : [{ label: entry.label, href: tabHref(base, tab) }]),
  ];

  return {
    school: programme.school,
    programme,
    label: entry.label,
    canonical: tabHref(base, tab),
    hero: buildHero(programme.hero, trail, programme.title),
    menuItems: menuFor(PROGRAM_TABS.filter((t) => available.has(t.key)), base),
    menuHome: owner ? departmentHref(schoolSlug, owner.slug) : `/schools/${schoolSlug}`,
  };
}

// ── Adapters: API shapes → the props the existing section components already take ──────────────

const LEVEL_CODES = { Undergraduate: "UG", Postgraduate: "PG" };

// Department programmes → AcademicProgram `categories` (one per level), as /ai-enabled/program-offered.
export function departmentProgramsSection(schoolSlug, department, programmes = department.programmes) {
  const byLevel = new Map();
  for (const p of programmes ?? []) {
    if (!p?.slug) continue;
    const level = p.level || "Programmes";
    if (!byLevel.has(level)) byLevel.set(level, []);
    byLevel.get(level).push({
      id: p.slug,
      title: p.title,
      url: programmeHref(schoolSlug, p.slug, department.slug),
      degree: p.level,
      duration: p.duration,
    });
  }
  const categories = [...byLevel].map(([level, programs]) => ({
    id: level,
    badge: LEVEL_CODES[level] ?? level.slice(0, 2).toUpperCase(),
    label: level,
    programs,
  }));
  return categories.length ? { heading: "Programs Offered", categories } : null;
}

const blockText = (node) =>
  Array.isArray(node?.children) ? node.children.map((c) => (c.type === "text" ? c.text ?? "" : blockText(c))).join("") : "";

// Strapi Blocks → one subject string per list item / paragraph.
function blocksToLines(blocks) {
  if (!Array.isArray(blocks)) return [];
  return blocks
    .flatMap((b) => (b.type === "list" ? (b.children ?? []).map(blockText) : [blockText(b)]))
    .map((line) => line.trim())
    .filter(Boolean);
}

// Programme curriculum items ({ semester, courses: blocks }) → BscCurriculum `semesters`.
export function curriculumSection(programme) {
  const semesters = (programme.curriculum ?? [])
    .map((c, i) => ({
      id: c.id ?? i,
      slug: `sem-${i + 1}`,
      label: c.semester || `Semester ${i + 1}`,
      subjects: blocksToLines(c.courses),
    }))
    .filter((s) => s.subjects.length);
  return semesters.length ? { heading: "Curriculum", semesters } : null;
}
