// Side menu of the Library pages: [{ label, slug }].
// TEMPORARY: the static list below shows every Library page the design has, so it is clear which ones are still to be
// created as "Library" entries in the CMS. An entry added in the CMS (menu from the API) replaces the static item with
// the same link and is added at the end when the list has no such link.
export const LIBRARY_STATIC_MENU = [
  {
    label: "About Library",
    slug: "/library",
  },
  {
    label: "Library Vision & Mission",
    slug: "/library/Vision-Mission",
  },
  {
    label: "Our Team",
    slug: "/library/ourTeam",
  },
  {
    label: "Library Advisory Committee",
    slug: "/library/Advisory-committee",
  },
  {
    label: "Collections",
    slug: "/library/collection",
  },
  {
    label: "E Resources",
    slug: "/library/E-resource",
  },
  {
    label: "Anti-Plagiarism Tools",
    slug: "/library/Anti-Plagiarism",
  },
  {
    label: "Corporate Membership",
    slug: "/library/corporate-membership",
  },
  {
    label: "Useful URL’s",
    slug: "/library/useful-urls",
  },
  {
    label: "Brochure",
    slug: "/library/brochure",
  },
  {
    label: "Constituent Libraries",
    slug: "/library/constituent-libraries",
  },
  {
    label: "Rules & Regulations",
    slug: "/library/rules-regulations",
  },
  {
    label: "Gallery",
    slug: "/library/gallery",
  },
  {
    label: "Ask us",
    slug: "/library/ask-us",
  },
];

export function libraryMenu(cmsMenu = []) {
  const cms = (cmsMenu || []).filter((m) => m?.href).map((m) => ({ label: m.label, slug: m.href }));
  const used = new Set();
  const merged = LIBRARY_STATIC_MENU.map((item) => {
    const hit = cms.find((m) => m.slug.toLowerCase() === item.slug.toLowerCase());
    if (hit) used.add(hit.slug);
    return hit || item;
  });
  return [...merged, ...cms.filter((m) => !used.has(m.slug))];
}
