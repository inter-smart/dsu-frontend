import InnerHero from "@/components/layout/common/InnerHero";
import HistoryDetails from "@/components/sections/history/history-Details";
import HistoryNewpahse from "@/components/sections/history/history-newpahse";
import HistoryPillers from "@/components/sections/history/history-pillers";
import HistoryTimeline from "@/components/sections/history/history-Timeline";
import { getHistoryPage } from "@/lib/api";

const FALLBACK_BANNER = "/images/about-Banner.jpg";

const hasText = (v) => typeof v === "string" && v.trim().length > 0;

// Strapi blocks: true if any node holds non-empty text (or is a non-text block like an image)
const hasBlocks = (blocks) =>
    Array.isArray(blocks) &&
    blocks.some((b) =>
        b?.type === "image" ||
        (Array.isArray(b?.children) && b.children.some((c) => hasText(c?.text) || (c?.children && hasBlocks([c]))))
    );

// HTML string: strip tags/nbsp and check something is left
const hasHtml = (html) => hasText(html) && hasText(html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " "));

function getValidSections(page) {
    const timeline = page.historyTimeline;
    const decades = (timeline?.decades || [])
        .map((d) => ({
            ...d,
            events: (d?.events || []).filter((e) => hasText(e?.title) || hasText(e?.description)),
        }))
        .filter((d) => hasText(d.decadeLabel) && d.events.length > 0);

    const pillars = page.foundingPillars;
    const pillarItems = (pillars?.items || []).filter(
        (i) => hasText(i?.name) || hasText(i?.designation) || i?.image || hasBlocks(i?.description)
    );
    const pillarsValid =
        hasText(pillars?.title) || hasText(pillars?.titleContinuation) || hasBlocks(pillars?.description) || pillarItems.length > 0;

    const phase = page.newPahseSection;
    const phaseValid = hasText(phase?.title) || hasBlocks(phase?.description);

    const about = page.aboutInstitutions;

    return {
        timeline: decades.length > 0 ? { ...timeline, decades } : null,
        about: hasHtml(about?.description) ? about : null,
        pillars: pillarsValid ? { ...pillars, items: pillarItems } : null,
        phase: phaseValid ? phase : null,
    };
}

export async function generateMetadata() {
    const pageData = await getHistoryPage();

    return {
        title: pageData?.seo?.metaTitle || "History | Dayananda Sagar University",
        description: pageData?.seo?.metaDescription || undefined,
        alternates: pageData?.seo?.canonicalUrl
            ? { canonical: pageData.seo.canonicalUrl }
            : undefined,
    };
}

export default async function Page() {
    const pageData = await getHistoryPage();

    if (!pageData) return null;

    const sections = getValidSections(pageData);

    return (
        <>
            {pageData.hero && (
                <InnerHero
                    data={{
                        ...pageData.hero,
                        heroMedia: pageData.hero.heroMedia?.url
                            ? pageData.hero.heroMedia
                            : { url: FALLBACK_BANNER, mime: "image/jpeg", alternativeText: pageData.hero.title || "History" },
                    }}
                />
            )}
            {sections.timeline && <HistoryTimeline data={sections.timeline} />}
            {sections.about && <HistoryDetails data={sections.about} />}
            {sections.pillars && <HistoryPillers data={sections.pillars} />}
            {sections.phase && <HistoryNewpahse data={sections.phase} />}
        </>
    );
}