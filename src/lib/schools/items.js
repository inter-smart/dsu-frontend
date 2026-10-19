// Builds the cards for the school Departments / Programs tabs from the real hierarchy
// (School → Department → Programme), falling back to the tab's curated list when the school has
// no linked records yet. `href` is the public URL; nothing is invented when data is missing.
const LEVEL_CODES = { Undergraduate: "UG", Postgraduate: "PG" };

export const departmentHref = (schoolSlug, departmentSlug) =>
  `/ai-enabled/${schoolSlug}/${departmentSlug}`;

// Canonical programme URL: under its department when it has one, otherwise under the school.
export const programmeHref = (schoolSlug, programmeSlug, departmentSlug) =>
  departmentSlug
    ? `${departmentHref(schoolSlug, departmentSlug)}/programs/${programmeSlug}`
    : `/schools/${schoolSlug}/programs/${programmeSlug}`;

export function programmeItems(schoolSlug, programmes = [], departmentSlug) {
  return programmes
    .filter((p) => p?.slug)
    .map((p) => ({
      id: p.documentId ?? p.id ?? p.slug,
      title: p.title,
      href: programmeHref(schoolSlug, p.slug, departmentSlug),
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
      href: departmentHref(schoolSlug, d.slug),
      children: programmeItems(schoolSlug, d.programmes, d.slug),
    }));
}
