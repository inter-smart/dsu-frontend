// API → existing /ai-enabled section props, one adapter per department section whose shape differs.
// Each returns null when there is nothing to show, so the page can skip the section.

const label = (items) => (items ?? []).map((i) => ({ id: i.id, label: i.text }));

export const highlightsSection = (s) =>
  s?.items?.length ? { heading: s.heading, items: label(s.items) } : null;

// Every facility group renders the same way (heading, subheading, description, items, note), in CMS order.
export function clinicalFacilitiesSection(s) {
  if (!s) return null;
  return {
    heading: s.heading,
    image: s.image,
    description: s.description,
    groups: (s.groups ?? []).map((g) => ({
      id: g.id,
      heading: g.heading,
      subheading: g.subheading,
      description: g.description,
      items: label(g.items),
      note: g.note,
    })),
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
    ? { heading: s.heading, description: s.description, buttons: (s.buttons ?? []).map((b, i) => ({ id: b.id ?? i, type: i === 0 ? "primary" : "secondary", label: b.label, link: b.link, isExternal: b.isExternal })) }
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

// Library table: the multi-column rows (label + any number of values) when filled, else the old 2-column
// list. Returns { columns: [heading], rows: [{ id, label, values: [text] }] }; null when no row has a real
// value (empty or "-" only), so the table is not shown at all.
const isReal = (v) => typeof v === "string" && v.trim() !== "" && v.trim() !== "-";
function libraryTable(rows, legacy, columns) {
  const list = (rows ?? []).length
    ? rows.map((r, i) => ({ id: r.id ?? i, label: r.label, values: (r.values ?? []).map((v) => v.text ?? "") }))
    : (legacy ?? []).map((r, i) => ({ id: r.id ?? i, label: r.label, values: [r.value ?? ""] }));
  const kept = list.filter((r) => r.label || r.values.some(isReal));
  if (!kept.some((r) => r.values.some(isReal))) return null;
  const width = Math.max(1, ...kept.map((r) => r.values.length));
  return {
    columns: (columns ?? []).map((c) => c.text ?? ""),
    rows: kept.map((r) => ({ ...r, values: Array.from({ length: width }, (_, i) => r.values[i] ?? "") })),
  };
}

// Membership table from the fixed 5-column fields (header 1-5, rows label + value..value4). Only as many columns as hold
// something are shown, so filling a 3rd / 4th / 5th column in the CMS adds it to the table.
function membershipItemsTable(s) {
  const heads = [1, 2, 3, 4, 5].map((i) => (s[`membershipColumn${i}`] ?? "").trim());
  const rows = (s.membershipItems ?? [])
    .map((r, i) => ({ id: r.id ?? i, cells: [r.label, r.value, r.value2, r.value3, r.value4].map((v) => (v ?? "").trim()) }))
    .filter((r) => r.cells.some(Boolean));
  if (!rows.some((r) => r.cells.slice(1).some(isReal))) return null;
  const width = Math.max(2, ...heads.map((h, i) => (h ? i + 1 : 0)), ...rows.map((r) => r.cells.reduce((w, c, i) => (c ? i + 1 : w), 0)));
  return {
    columns: heads.slice(0, width),
    rows: rows.map((r) => ({ id: r.id, label: r.cells[0], values: r.cells.slice(1, width) })),
  };
}

// Library landing page → LibraryOverview props (which reads every nested group unguarded).
export function librarySection(s) {
  if (!s) return null;
  return {
    heading: s.heading,
    description: s.description,
    mediaType: s.mediaType ?? "image",
    image: s.image,
    video: s.video,
    youtubeUrl: s.youtubeUrl,
    infoCards: (s.infoCards ?? []).map((c) => ({ id: c.id, title: c.title, items: label(c.items) })),
    libraryCollections: { heading: s.collectionsHeading, statisticsDate: s.statisticsDate, table: libraryTable(s.collectionRows, s.collections, s.collectionsColumns) },
    extraContent: s.extraContent,
    membershipSection: {
      heading: s.membershipHeading,
      description: s.membershipDescription,
      membershipTable: { heading: s.membershipHeading, note: s.membershipNote, table: membershipItemsTable(s) ?? libraryTable(s.membershipRows, s.membership, s.membershipColumns) },
      documentsRequired: { description: s.documentsDescription, items: label(s.documentsRequired) },
    },
  };
}

// ── Library sub-pages: each template's API content → the props its existing component takes ──────────

const texts = (items) => (items ?? []).map((i) => i.text).filter(Boolean);

export function libraryServicesContent(c) {
  if (!c) return null;
  const { journals: j, dailies: d } = c;
  return {
    heading: c.heading,
    description: c.description,
    image: c.image,
    sections: (c.sections ?? []).map((s, i) => ({
      id: i,
      title: s.title,
      content: s.content,
    })),
    journalsSection: j && {
      heading: j.heading,
      items: label(j.items),
      printJournals: {
        heading: j.printHeading,
        columns: texts(j.printColumns),
        rows: j.rows ?? [],
        total: j.totalLabel || j.totalCount ? { label: j.totalLabel, count: j.totalCount } : undefined,
      },
    },
    dailiesSection: d && {
      heading: d.heading,
      description: d.description,
      columns: texts(d.columns),
      rows: d.rows ?? [],
    },
    nursingUsefulLinks: c.usefulLinks?.length ? { heading: c.usefulLinksHeading, links: c.usefulLinks } : undefined,
    informationLiteracy:
      c.literacyHeading || c.literacyDescription
        ? { heading: c.literacyHeading, description: c.literacyDescription }
        : undefined,
    newArrivals:
      c.newArrivalsHeading || c.newArrivalsLink
        ? { heading: c.newArrivalsHeading, cta: { label: c.newArrivalsLabel, link: c.newArrivalsLink } }
        : undefined,
  };
}

// Downloads and Quick Abbreviations share one component: `files[].file.url` is the file or the external link.
export const libraryFilesContent = (c) =>
  c && {
    heading: c.heading,
    description: c.description,
    files: (c.files ?? []).filter((f) => f.url).map((f, i) => ({ id: i, label: f.label, file: { url: f.url, isExternal: f.isExternal } })),
  };

export const libraryAutomationContent = (c) =>
  c && {
    heading: c.heading,
    subheading: c.subheading,
    description: c.description,
    webOpac: c.webOpacItems?.length || c.webOpacHeading ? { heading: c.webOpacHeading, items: label(c.webOpacItems) } : undefined,
  };

export const libraryFaqsContent = (c) =>
  c && { heading: c.heading, faq: (c.faq ?? []).map((f, i) => ({ id: f.id ?? i, question: f.question, answer: f.answer })) };

// `c.images` is one page of the gallery (the API paginates); ids are offset by the page so later pages never collide.
export const libraryGalleryContent = (c) =>
  c && {
    heading: c.heading,
    loadMoreLink: c.loadMoreLink,
    gallery: toGalleryItems(c.images, c.pagination),
    pagination: c.pagination,
  };

export const toGalleryItems = (images, pagination) =>
  (images ?? []).map((image, i) => ({ id: ((pagination?.page ?? 1) - 1) * (pagination?.pageSize ?? 0) + i, image }));
