import { notFound } from "next/navigation";
import { getDepartmentLibraryPage, getDepartmentTab, getProgrammeTab } from "@/lib/api";
import { getFlexiblePageBySlug } from "@/lib/api/flexible-page";
import { departmentHref, libraryHref, librarySidebarItems, programmeBase, programmeHref } from "@/lib/schools/items";

// Department and programme pages, resolved from the real hierarchy:
//   /ai-enabled/[school]/[department]/[tab]
//   /ai-enabled/[school]/programs/[programme]/[tab]         (every programme, school-direct or owned by a
//                                                            department; the old /schools/... and
//                                                            /ai-enabled/[school]/[department]/programs/...
//                                                            URLs redirect here)
// A tab is listed in the menu (and reachable) only when the API has something for it.
export const DEPARTMENT_TABS = [
  { key: "overview", label: "Overview" },
  { key: "hod-message", label: "HoD Message" },
  { key: "programs", label: "Programs Offered" },
  { key: "faculty", label: "Faculty" },
  { key: "laboratories", label: "Laboratories" },
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

// Tabs the CMS enables, with the editor's tab title where set.
const shownTabs = (tabs, res) =>
  tabs.filter((t) => (res.availableTabs ?? []).includes(t.key)).map((t) => ({ ...t, label: res.tabLabels?.[t.key] || t.label }));

// Items sorted by the API's menuOrder (tab keys and "page-<slug>"); Vision & Mission follows Overview.
const byMenuOrder = (items, order) => {
  if (!order?.length) return items;
  const rank = (i) => { const r = order.indexOf(i.key === "vision-mission" ? "overview" : i.key); return (r < 0 ? order.length : r) + (i.key === "vision-mission" ? 0.5 : 0); };
  return items.map((i, n) => [i, n]).sort(([a, x], [b, y]) => rank(a) - rank(b) || x - y).map(([i]) => i);
};
const stripKey = ({ key, ...item }) => item;

const menuFor = (tabs, base, extra = [], order) =>
  byMenuOrder([
    ...tabs.map((t) => ({ key: t.key, label: t.label, href: menuHref(base, t.key) })),
    ...extra.map((t) => ({ key: t.key, label: t.label, href: t.href })),
  ], order).map(stripKey);

// Vision & Mission has no page of its own: it is the #vision-mission section of the department Overview.
const VISION_MISSION_ITEM = { label: "Vision & Mission", anchor: "vision-mission" };

// Department menu: the tabs the API has content for, with Vision & Mission right after Overview and the
// Library's sub-pages (Overview + each published sub-page) as the Library item's sub-menu.
function departmentMenu(tabs, base, schoolSlug, departmentSlug, librarySubpages = [], extra = [], order) {
  return byMenuOrder([...tabs.flatMap((t) => {
    const item = { key: t.key, label: t.label, href: menuHref(base, t.key) };
    if (t.key === "library" && librarySubpages.length) {
      item.submenu = librarySidebarItems(schoolSlug, departmentSlug, librarySubpages).map(({ label, slug }) => ({ label, href: slug }));
    }
    return t.key === "overview"
      ? [item, { key: "vision-mission", label: VISION_MISSION_ITEM.label, href: `${menuHref(base, "overview")}#${VISION_MISSION_ITEM.anchor}` }]
      : [item];
  }), ...extra.map((t) => ({ key: t.key, label: t.label, href: t.href }))], order).map(stripKey);
}

// Hero for an entity page: the API hero (its own banner or the school's), full breadcrumb.
// Banner shown when the page has none.
export const FALLBACK_HERO_MEDIA = { url: "/images/media-coverage-hero-644103.png", alternativeText: "DSU campus", mime: "image/png" };
const withBanner = (m) => (m?.url ? m : FALLBACK_HERO_MEDIA);

function buildHero(apiHero, trail, title) {
  return {
    heroMedia: withBanner(apiHero?.heroMedia),
    title,
    menuBar: apiHero?.menuBar,
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Schools", href: "/schools" }, ...trail],
  };
}

// Shell data for a Flexible Page that belongs to a department (/ai-enabled/[school]/[department]/[slug]).
export async function loadDepartmentFlexPage(schoolSlug, departmentSlug, pageSlug) {
  const page = await getFlexiblePageBySlug(pageSlug);
  if (page?.department?.slug !== departmentSlug || page.department.school?.slug !== schoolSlug) notFound();

  const res = await getDepartmentTab(departmentSlug, "overview");
  if (!res?.slug || res.school?.slug !== schoolSlug) notFound();

  const base = departmentHref(schoolSlug, departmentSlug);
  const trail = [
    { label: res.school.name, href: `/schools/${schoolSlug}` },
    { label: res.name, href: base },
    { label: page.title, href: `${base}/${pageSlug}` },
  ];
  return {
    school: res.school,
    page,
    hero: { ...buildHero(page.hero, trail, page.hero?.title || page.title), heroMedia: withBanner(page.hero?.heroMedia) },
    menuItems: departmentMenu(shownTabs(DEPARTMENT_TABS, res), base, schoolSlug, departmentSlug, res.librarySubpages, res.extraTabs, res.menuOrder),
    menuHome: base,
  };
}

export async function loadDepartmentPage(schoolSlug, departmentSlug, tab) {
  const entry = DEPARTMENT_TABS.find((t) => t.key === tab);
  if (!entry) notFound();

  const res = await getDepartmentTab(departmentSlug, tab);
  if (!res?.slug || res.school?.slug !== schoolSlug) notFound();

  const available = new Set(res.availableTabs ?? []);
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
    label: res.tabLabels?.[tab] || entry.label,
    hero: {
      ...buildHero(res.hero, trail, res.hero?.title || res.name),
      // a breadcrumb set on the tab's own Hero wins over the generated trail
      ...(res.hero?.breadcrumb?.length ? { breadcrumb: res.hero.breadcrumb } : {}),
    },
    menuItems: departmentMenu(shownTabs(DEPARTMENT_TABS, res), base, schoolSlug, departmentSlug, res.librarySubpages, res.extraTabs, res.menuOrder),
    menuHome: base,
  };
}

// One Library sub-page of a department (/ai-enabled/[school]/[department]/library/[page]); 404s for an
// unknown department, a department of another school, or a page the Library entry does not list.
export async function loadDepartmentLibraryPage(schoolSlug, departmentSlug, pageSlug) {
  const res = await getDepartmentLibraryPage(departmentSlug, pageSlug);
  if (!res?.slug || res.school?.slug !== schoolSlug || !res.page?.slug) notFound();

  const available = new Set(res.availableTabs ?? []);
  if (!available.has("library")) notFound();

  const base = departmentHref(schoolSlug, departmentSlug);
  const trail = [
    { label: res.school.name, href: `/schools/${schoolSlug}` },
    { label: res.name, href: base },
    { label: "Library", href: libraryHref(schoolSlug, departmentSlug) },
    { label: res.page.title, href: libraryHref(schoolSlug, departmentSlug, pageSlug) },
  ];

  return {
    school: res.school,
    department: res,
    page: res.page,
    sidebar: librarySidebarItems(schoolSlug, departmentSlug, res.sidebar),
    hero: {
      ...buildHero(res.hero, trail, res.hero?.title || res.page.title),
      ...(res.hero?.breadcrumb?.length ? { breadcrumb: res.hero.breadcrumb } : {}),
    },
    menuItems: departmentMenu(shownTabs(DEPARTMENT_TABS, res), base, schoolSlug, departmentSlug, res.librarySubpages, res.extraTabs, res.menuOrder),
    menuHome: base,
  };
}

// Shell data for a Flexible Page that belongs to a programme (/ai-enabled/[school]/programs/[programme]/[slug]).
export async function loadProgramFlexPage(schoolSlug, programmeSlug, pageSlug) {
  const page = await getFlexiblePageBySlug(pageSlug);
  if (page?.programme?.slug !== programmeSlug || page.programme.school?.slug !== schoolSlug) notFound();

  const res = await getProgrammeTab(programmeSlug, "overview");
  if (!res?.slug || res.school?.slug !== schoolSlug) notFound();

  const base = programmeBase(schoolSlug, programmeSlug);
  const owner = res.department;
  const trail = [
    { label: res.school.name, href: `/schools/${schoolSlug}` },
    ...(owner ? [{ label: owner.name, href: departmentHref(schoolSlug, owner.slug) }] : []),
    { label: res.title, href: programmeHref(schoolSlug, programmeSlug) },
    { label: page.title, href: `${base}/${pageSlug}` },
  ];
  return {
    school: res.school,
    page,
    hero: { ...buildHero(page.hero, trail, page.hero?.title || page.title), heroMedia: withBanner(page.hero?.heroMedia) },
    menuItems: menuFor(shownTabs(PROGRAM_TABS, res), base, res.extraTabs, res.menuOrder),
  };
}

// One tab of a programme. Every tab is listed (and clickable) even when its content is empty; the page then
// renders just the hero and menu. `departmentSlug` is only passed by the old department URL, which must match.
export async function loadProgramPage(schoolSlug, programmeSlug, tab, departmentSlug) {
  const entry = PROGRAM_TABS.find((t) => t.key === tab);
  if (!entry) notFound();

  const res = await getProgrammeTab(programmeSlug, tab);
  // the school is the programme's own or, through its department, the department's
  if (!res?.slug || res.school?.slug !== schoolSlug) notFound();
  if (departmentSlug && res.department?.slug !== departmentSlug) notFound();

  const owner = res.department;
  const base = programmeBase(schoolSlug, programmeSlug);
  const trail = [
    { label: res.school.name, href: `/schools/${schoolSlug}` },
    ...(owner ? [{ label: owner.name, href: departmentHref(schoolSlug, owner.slug) }] : []),
    { label: res.title, href: programmeHref(schoolSlug, programmeSlug) },
    ...(tab === "overview" ? [] : [{ label: entry.label, href: menuHref(base, tab) }]),
  ];

  return {
    school: res.school,
    programme: res,
    data: res.tab ?? {},
    label: entry.label,
    canonical: menuHref(base, tab),
    hero: {
      ...buildHero(res.hero, trail, res.hero?.title || res.title),
      // a breadcrumb set on the tab's own Hero wins over the generated trail
      ...(res.hero?.breadcrumb?.length ? { breadcrumb: res.hero.breadcrumb } : {}),
    },
    menuItems: menuFor(shownTabs(PROGRAM_TABS, res), base, res.extraTabs, res.menuOrder),
  };
}

// ── Adapters: API shapes → the props the existing section components already take ──────────────

const LEVEL_CODES = { Undergraduate: "UG", Postgraduate: "PG" };

// Department programmes → AcademicProgram `categories`, as /ai-enabled/program-offered. The Programs
// Offered entry (`section`: title, description, offers → linked programmes) wins when it has offers;
// otherwise the department's programmes are grouped by level.
export function departmentProgramsSection(schoolSlug, department, programmes = department.programmes, section) {
  const programItem = (p) => ({
    id: p.slug,
    title: p.title,
    url: programmeHref(schoolSlug, p.slug),
    degree: p.level,
    duration: p.duration,
  });

  const offers = (section?.offers ?? []).filter((o) => o?.programmes?.some((p) => p?.slug) || o?.label || o?.description);
  if (offers.length) {
    return {
      heading: section.title || "Programs Offered",
      ...(section.description ? { description: section.description } : {}),
      categories: offers.map((o, i) => ({
        id: o.id ?? i,
        badge: o.badge,
        label: o.label,
        description: o.description,
        programs: (o.programmes ?? []).filter((p) => p?.slug).map(programItem),
      })),
    };
  }

  const byLevel = new Map();
  for (const p of programmes ?? []) {
    if (!p?.slug) continue;
    const level = p.level || "Programmes";
    if (!byLevel.has(level)) byLevel.set(level, []);
    byLevel.get(level).push(programItem(p));
  }
  const categories = [...byLevel].map(([level, programs]) => ({
    id: level,
    badge: LEVEL_CODES[level] ?? level.slice(0, 2).toUpperCase(),
    label: level,
    programs,
  }));
  return categories.length ? { heading: "Programs Offered", categories } : null;
}
