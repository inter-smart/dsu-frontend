// API → existing /ai-enabled section props, one adapter per department section whose shape differs.
// Each returns null when there is nothing to show, so the page can skip the section.

const label = (items) => (items ?? []).map((i) => ({ id: i.id, label: i.text }));

export const highlightsSection = (s) =>
  s?.items?.length ? { heading: s.heading, items: label(s.items) } : null;

// Facility groups follow a fixed order set by the Strapi field description:
// 1 = specialized areas (items are the columns), 2 = simulation labs (items), 3 = community facilities (text).
export function clinicalFacilitiesSection(s) {
  if (!s) return null;
  const [areas, sims, community] = s.groups ?? [];
  return {
    heading: s.heading,
    image: s.image,
    description: s.description,
    specializedAreas: areas && {
      heading: areas.heading,
      subheading: areas.subheading,
      columns: label(areas.items),
      note: areas.note,
    },
    simulationLabs: sims && { heading: sims.heading, items: label(sims.items) },
    communityFacilities: community && { heading: community.heading, description: community.description },
  };
}

// Events: image → path, day → date, monthYear → year (the Ai-recent-clinic field names).
export const recentEngagementSection = (s) =>
  s?.events?.length
    ? {
        heading: s.heading,
        description: s.description,
        events: s.events.map((e) => ({
          id: e.id,
          path: e.image?.url,
          title: e.title,
          description: e.description,
          date: e.day,
          year: e.monthYear,
          partner: e.partner,
          link: e.link,
        })),
      }
    : null;

export const partnerWithUsSection = (s) =>
  s?.heading || s?.buttons?.length
    ? { heading: s.heading, description: s.description, buttons: (s.buttons ?? []).map((b, i) => ({ id: b.id ?? i, type: i === 0 ? "primary" : "secondary", label: b.label, link: b.link })) }
    : null;

export const chaptersSection = (s) =>
  s?.chapters?.length
    ? {
        heading: s.heading,
        description: s.description,
        chapters: s.chapters.map((c) => ({
          id: c.id,
          code: c.code,
          image: c.image,
          title: c.title,
          description: c.description,
          stats: { members: c.members, events: c.events, established: c.established },
          link: c.link,
        })),
      }
    : null;

// Library landing page → LibraryOverview props (which reads every nested group unguarded).
export function librarySection(s) {
  if (!s) return null;
  return {
    heading: s.heading,
    description: s.description,
    image: s.image,
    infoCards: (s.infoCards ?? []).map((c) => ({ id: c.id, title: c.title, items: label(c.items) })),
    libraryCollections: { heading: s.collectionsHeading, statisticsDate: s.statisticsDate, items: s.collections ?? [] },
    membershipSection: {
      heading: s.membershipHeading,
      description: s.membershipDescription,
      membershipTable: { heading: s.membershipHeading, note: s.membershipNote, items: s.membership ?? [] },
      documentsRequired: { description: s.documentsDescription, items: label(s.documentsRequired) },
    },
  };
}
