// Builds the cards for the school Departments / Programs tabs from the real hierarchy
// (School → Department → Programme), falling back to the tab's curated list when the school has
// no linked records yet. `href` is the public URL; nothing is invented when data is missing.
const LEVEL_CODES = { Undergraduate: "UG", Postgraduate: "PG" };

export const departmentHref = (schoolSlug, departmentSlug) =>
  `/ai-enabled/${schoolSlug}/${departmentSlug}`;

// A department's Library landing page, or one of its sub-pages.
export const libraryHref = (schoolSlug, departmentSlug, pageSlug) =>
  `${departmentHref(schoolSlug, departmentSlug)}/library${pageSlug ? `/${pageSlug}` : ""}`;

// Library side menu: the landing page, then the department's sub-pages in the order set in the CMS.
// `flexSlug`: the menu belongs to a Flexible Page (template "library"): Overview is that page and the sub-pages live under it.
export const librarySidebarItems = (schoolSlug, departmentSlug, sidebar = [], flexSlug) => {
  const base = flexSlug ? `${departmentHref(schoolSlug, departmentSlug)}/${flexSlug}` : libraryHref(schoolSlug, departmentSlug);
  return [
    { label: "Overview", slug: base },
    ...sidebar.filter((p) => p?.slug).map((p) => ({ label: p.title, slug: `${base}/${p.slug}` })),
  ];
};

// A school's Library landing page, or one of its sub-pages.
export const schoolLibraryHref = (schoolSlug, pageSlug) => `/schools/${schoolSlug}/library${pageSlug ? `/${pageSlug}` : ""}`;

// School Library side menu: the landing page, then the school's sub-pages in the order set in the CMS.
// `flexSlug`: the menu belongs to a Flexible Page (template "library"): Overview is that page and the sub-pages live under it.
export const schoolLibrarySidebarItems = (schoolSlug, sidebar = [], flexSlug) => {
  const base = flexSlug ? `/schools/${schoolSlug}/${flexSlug}` : schoolLibraryHref(schoolSlug);
  return [
    { label: "Overview", slug: base },
    ...sidebar.filter((p) => p?.slug).map((p) => ({ label: p.title, slug: `${base}/${p.slug}` })),
  ];
};

// Canonical programme URL: every programme (school-direct or department-owned) lives under its school.
// Tabs are `${programmeBase}/<tab>`; the bare base serves the Overview tab.
export const programmeBase = (schoolSlug, programmeSlug) => `/ai-enabled/${schoolSlug}/programs/${programmeSlug}`;

// Where a programme link (school Programs / Departments tab, department Programs tab) lands: its Overview tab.
export const programmeHref = (schoolSlug, programmeSlug) => `${programmeBase(schoolSlug, programmeSlug)}/overview`;

export function programmeItems(schoolSlug, programmes = []) {
  return programmes
    .filter((p) => p?.slug)
    .map((p) => ({
      id: p.documentId ?? p.id ?? p.slug,
      title: p.title,
      // a programme without an Overview page has no link (every programme link lands on Overview)
      href: p.hasOverview === false ? undefined : programmeHref(schoolSlug, p.slug),
      academicLevel: p.academicLevel ?? LEVEL_CODES[p.level] ?? p.level ?? "",
      meta: p.duration || undefined,
    }));
}

export function departmentItems(schoolSlug, departments = []) {
  return departments
    .filter((d) => d?.slug)
    .map((d) => ({
      id: d.documentId ?? d.id ?? d.slug,
      title: d.name ?? d.title,
      href: `${departmentHref(schoolSlug, d.slug)}/overview`,
      children: programmeItems(schoolSlug, d.programmes),
    }));
}
