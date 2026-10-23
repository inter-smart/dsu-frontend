import { departmentHref, programmeItems } from "./items";

// Cards for the Admission overview "Schools" section, from the real hierarchy: each published school with
// every programme under it - the ones owned by its departments (grouped per department) and its direct ones.
// Inputs are the plain API lists (`/api/schools`, `/api/departments`, `/api/programmes`); anything that is
// not an array counts as empty, so nothing is invented when a call failed.
const asList = (value) => (Array.isArray(value) ? value : []);

const countLabel = (count) => `${String(count).padStart(2, "0")} ${count === 1 ? "Program" : "Programs"}`;

export function buildSchoolCards(schools, departments, programmes) {
  const allDepartments = asList(departments);
  const allProgrammes = asList(programmes);

  return asList(schools)
    .filter((school) => school?.slug)
    .map((school) => {
      const seen = new Set();
      // a programme appears once per school, even if it is listed under both its department and the programme list
      const unseen = (items) => items.filter((i) => !seen.has(i.href) && seen.add(i.href));

      const groups = allDepartments
        .filter((d) => d?.slug && d.school?.slug === school.slug)
        .map((d) => ({
          id: d.documentId ?? d.id ?? d.slug,
          title: d.name,
          href: `${departmentHref(school.slug, d.slug)}/overview`,
          programmes: unseen(programmeItems(school.slug, asList(d.programmes))),
        }))
        .filter((g) => g.programmes.length);

      const direct = unseen(
        programmeItems(
          school.slug,
          allProgrammes.filter((p) => p?.school?.slug === school.slug && !p.department),
        ),
      );
      if (direct.length) groups.push({ id: "direct", title: "Direct programmes", programmes: direct });

      const count = groups.reduce((sum, g) => sum + g.programmes.length, 0);
      return {
        id: school.documentId ?? school.id ?? school.slug,
        title: school.name ?? school.title,
        slug: school.slug,
        href: `/schools/${school.slug}`,
        programCount: countLabel(count),
        groups,
      };
    });
}
