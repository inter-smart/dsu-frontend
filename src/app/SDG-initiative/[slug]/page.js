import InnerHero from "@/components/layout/common/InnerHero";
import SDGInitativeDetails from "@/components/sections/SDG/SDG-initiativeDetails";

const local_hero_data = {
  heroMedia: {
    alternativeText: "SDG Initiatives",
    mime: "image/jpg",
    url: "/images/ugc/ugc-banner.jpg",
  },
  title: "SDG Initiatives",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "About", href: "/why-dsu" },
    { label: "Institutional Framework", href: "/" },
    { label: "SDG Initiatives", href: "/SDG-initiative" },
  ],
};

const sdgTitlesMap = {
  "sdg-1": { heading: "SDG 1: No Poverty", num: 1 },
  "sdg-2": { heading: "SDG 2: Zero Hunger", num: 2 },
  "sdg-3": { heading: "SDG 3: Good Health and Well-being", num: 3 },
  "sdg-4": { heading: "SDG 4: Quality Education", num: 4 },
  "sdg-5": { heading: "SDG 5: Gender Equality", num: 5 },
  "sdg-6": { heading: "SDG 6: Clean Water and Sanitation", num: 6 },
  "sdg-7": { heading: "SDG 7: Affordable and Clean Energy", num: 7 },
  "sdg-8": { heading: "SDG 8: Decent Work and Economic Growth", num: 8 },
  "sdg-9": { heading: "SDG 9: Industry, Innovation and Infrastructure", num: 9 },
  "sdg-10": { heading: "SDG 10: Reduced Inequalities", num: 10 },
  "sdg-11": { heading: "SDG 11: Sustainable Cities and Communities", num: 11 },
  "sdg-12": { heading: "SDG 12: Responsible Consumption and Production", num: 12 },
  "sdg-13": { heading: "SDG 13: Climate Action", num: 13 },
  "sdg-14": { heading: "SDG 14: Life Below Water", num: 14 },
  "sdg-15": { heading: "SDG 15: Life on Land", num: 15 },
  "sdg-16": { heading: "SDG 16: Peace, Justice and Strong Institutions", num: 16 },
  "sdg-17": { heading: "SDG 17: Partnerships for the Goals", num: 17 },
};

const defaultMetricsSDG1 = [
  {
    id: 1,
    title: "Metric 1.2: Proportion of students receiving financial aid",
    indicators: [
      {
        id: 1,
        label: "Indicator 1.2.1: Low-income students receiving financial aid",
        description: "No specific targets currently in place (N/A).",
        evidenceLink: {
          label: "View Evidence",
          url: "/evidence/sdg-1/metric-1-2/indicator-1-2-1.pdf",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Metric 1.3: University anti-poverty programmes",
    indicators: [],
  },
  {
    id: 3,
    title: "Metric 1.4: Community anti-poverty programmes",
    indicators: [
      {
        id: 1,
        label: "Indicator 1.3.1 & 1.3.2: Admission & success targets",
        description: "No specific targets currently in place (N/A).",
        evidenceLink: {
          label: "View Evidence",
          url: "/evidence/sdg-1/metric-1-4/indicator-1-3-1-2.pdf",
        },
      },
      {
        id: 2,
        label: "Indicator 1.3.3: Low-income student support",
        description: "Providing support (e.g. food, housing, legal services) to enable completion of studies.",
        evidenceLink: null,
      },
      {
        id: 3,
        label: "Indicator 1.3.4 & 1.3.5: Support for specific quintiles/countries",
        description: "No direct participation in policy making at this time.",
        evidenceLink: {
          label: "View Evidence",
          url: "/evidence/sdg-1/metric-1-4/indicator-1-3-4-5.pdf",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Metric 1.4: Community anti-poverty programmes",
    indicators: [],
  },
];

function getSdgData(slugKey) {
  const normalizedSlug = slugKey ? slugKey.toLowerCase() : "sdg-1";
  const numMatch = normalizedSlug.match(/\d+/);
  const sdgNum = numMatch ? parseInt(numMatch[0], 10) : 1;
  const lookupKey = `sdg-${sdgNum}`;
  const sdgInfo = sdgTitlesMap[lookupKey] || { heading: `SDG ${sdgNum}`, num: sdgNum };

  if (sdgNum === 1) {
    return {
      heading: sdgInfo.heading,
      description: "The IQAC at Dayananda Sagar University has been consistently proactive in promoting and sustaining quality initiatives.",
      metrics: defaultMetricsSDG1,
    };
  }

  return {
    heading: sdgInfo.heading,
    description: "The IQAC at Dayananda Sagar University has been consistently proactive in promoting and sustaining quality initiatives.",
    metrics: [
      {
        id: 1,
        title: `Metric ${sdgNum}.1: University initiatives and research for ${sdgInfo.heading}`,
        indicators: [
          {
            id: 1,
            label: `Indicator ${sdgNum}.1.1: Academic programmes & policy implementation`,
            description: "Institutional measures and policy frameworks actively supporting this SDG.",
            evidenceLink: {
              label: "View Evidence",
              url: `/evidence/sdg-${sdgNum}/indicator-${sdgNum}-1-1.pdf`,
            },
          },
        ],
      },
      {
        id: 2,
        title: `Metric ${sdgNum}.2: Community engagement & extension activities`,
        indicators: [
          {
            id: 1,
            label: `Indicator ${sdgNum}.2.1: Community outreach targets`,
            description: "Providing campus support and community collaboration programmes.",
            evidenceLink: {
              label: "View Evidence",
              url: `/evidence/sdg-${sdgNum}/indicator-${sdgNum}-2-1.pdf`,
            },
          },
        ],
      },
    ],
  };
}

export default async function page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "sdg-1";
  const sectionData = getSdgData(slug);

  return (
    <>
      <InnerHero data={local_hero_data} />
      <SDGInitativeDetails data={sectionData} />
    </>
  );
}

