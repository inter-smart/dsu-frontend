import { programmeHref } from "./items";

// Maps the `admissionProgramme` section of an Admission "programme" page onto what the listing component
// reads: each row's linked programme (`{ slug, schoolSlug }`) becomes a `link` built by `programmeHref`.
// Rows without a linked programme keep no `link`, so nothing is invented.
export function toProgrammeListing(admissionProgramme) {
  if (!admissionProgramme) return admissionProgramme;
  return {
    ...admissionProgramme,
    categories: (admissionProgramme.categories ?? []).map((category) => ({
      ...category,
      courses: (category.courses ?? []).map((course) => ({
        ...course,
        items: (course.items ?? []).map(({ programme, ...item }) => ({
          ...item,
          link: programme?.slug && programme?.schoolSlug ? programmeHref(programme.schoolSlug, programme.slug) : undefined,
        })),
      })),
    })),
  };
}
