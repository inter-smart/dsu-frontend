import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "@/components/ui/safe-image";
import { safeHref } from "@/lib/utils";
import TableScrollBox from "@/components/layout/common/TableScrollBox";

// People without links but with a description (Scholars in Residence, student testimonials):
// portrait cards ("Name, Role" title + text below), so faces and text are never cropped
function ScholarCards({ items }) {
    return (
        <ul className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-[20px] 3xl:gap-[28px]">
            {items.map((item) => {
                const cut = item.title?.lastIndexOf(", ") ?? -1;
                const name = cut > 0 ? item.title.slice(0, cut) : item.title;
                const role = cut > 0 ? item.title.slice(cut + 2) : "";
                return (
                    <li key={item.id} className="group flex overflow-hidden rounded-[14px] sm:flex-col border border-black/10 bg-white transition-all duration-300 hover:border-[#F97316]/40 hover:shadow-[0_12px_30px_rgba(249,115,22,0.14)] motion-safe:hover:-translate-y-1 dark:border-white/10 dark:bg-[#18191B] xl:rounded-[18px]">
                        <span className="relative block aspect-[4/5] w-[112px] shrink-0 overflow-hidden bg-gradient-to-b sm:w-auto from-[#FFF8EE] to-[#FFE4CC] dark:from-white/5 dark:to-white/10">
                            {item.image?.url && (
                                <Image src={item.image.url} alt={item.image.alternativeText || name} fill sizes="(min-width: 1200px) 25vw, (min-width: 768px) 33vw, (min-width: 576px) 50vw, 112px" className="object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-105" />
                            )}
                            <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[4px] origin-left scale-x-0 bg-gradient-to-r from-[#DC2626] to-[#F97316] transition-transform duration-500 group-hover:scale-x-100" />
                        </span>
                        <span className="flex min-w-0 flex-1 flex-col justify-center p-[14px] sm:justify-start sm:p-[12px] xl:p-[18px] 3xl:p-[24px]">
                            {role && <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#DC2626] xl:text-[12px] 3xl:text-[15px]">{role}</span>}
                            <h3 className="mb-0 mt-[4px] text-[15px] font-semibold leading-snug text-[#212121] dark:text-white xl:text-[17px] 3xl:text-[22px]">{name}</h3>
                            {item.description && <p className="mb-0 mt-[8px] border-t border-black/10 pt-[8px] text-[13px] leading-[1.5] text-[#555] dark:border-white/10 dark:text-white/70 xl:text-[14px] 3xl:text-[18px]">{item.description}</p>}
                        </span>
                    </li>
                );
            })}
        </ul>
    );
}

// Pages whose card titles are long headlines: image on top, the full title below it
const ARTICLE_PAGES = ["achievements", "masters-abroad"];

const host = (url = "") => {
    try {
        return new URL(url).hostname.replace(/^www\./, "");
    } catch {
        return "";
    }
};

// Rows sit centred under a centred heading, otherwise on the content edge
function ArticleCards({ items, centered }) {
    return (
        <ul className={`flex flex-wrap gap-[14px] xl:gap-[22px] 3xl:gap-[30px] ${centered ? "justify-center" : ""}`}>
            {items.map((item) => {
                // dsu.edu.in links are the university's own pages, not press articles
                const site = host(item.url);
                const own = /(^|\.)dsu\.edu\.in$/.test(site);
                const article = /^https?:/.test(item.url || "") && !own;
                const external = item.isExternal || article;
                const source = own ? "" : site;
                const body = (
                    <>
                        <span className="relative block aspect-[16/10] overflow-hidden bg-gradient-to-b from-[#FFF8EE] to-[#FFE4CC] dark:from-white/5 dark:to-white/10">
                            {item.image?.url && (
                                <Image src={item.image.url} alt={item.image.alternativeText || ""} fill sizes="(min-width: 1024px) 33vw, (min-width: 576px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105" />
                            )}
                            <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[4px] origin-left scale-x-0 bg-gradient-to-r from-[#DC2626] to-[#F97316] transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                        </span>
                        <span className="flex flex-1 flex-col p-[14px] xl:p-[20px] 3xl:p-[26px] [&>*:nth-last-child(2)]:mb-[16px]">
                            {source && <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#DC2626] xl:text-[12px] 3xl:text-[15px]">{source}</span>}
                            <span className="mt-[6px] block text-[15px] font-semibold leading-snug text-[#212121] transition-colors group-hover:text-[#DC2626] dark:text-white xl:text-[17px] 3xl:text-[22px]">{item.title}</span>
                            {item.description && <span className="mt-[6px] block text-[13px] leading-[1.5] text-[#555] dark:text-white/70 xl:text-[14px]">{item.description}</span>}
                            {item.url && (
                                <span className="mt-auto flex items-center justify-between gap-[12px] border-t border-black/10 pt-[12px] text-[13px] font-semibold text-[#DC2626] dark:border-white/10 xl:pt-[14px] xl:text-[14px]">
                                    {article ? "Read article" : "Explore"}
                                    <span aria-hidden="true" className="flex size-[32px] shrink-0 items-center justify-center rounded-full bg-[#F97316]/10 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-(--basecolor) group-hover:to-(--basecolor2) group-hover:text-white xl:size-[36px]">
                                        {article ? <ArrowUpRight className="size-[16px]" /> : <ArrowRight className="size-[16px]" />}
                                    </span>
                                </span>
                            )}
                        </span>
                    </>
                );
                const cls = "group flex h-full flex-col overflow-hidden rounded-[14px] border border-black/10 bg-white transition-all duration-300 hover:border-[#F97316]/40 hover:shadow-[0_12px_30px_rgba(249,115,22,0.14)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--basecolor) motion-safe:hover:-translate-y-1 dark:border-white/10 dark:bg-[#18191B] xl:rounded-[18px]";
                return (
                    <li key={item.id} className="w-full sm:w-[calc(50%-7px)] lg:w-[calc(33.333%-10px)] xl:w-[calc(33.333%-15px)] 3xl:w-[calc(33.333%-20px)]">
                        {item.url ? (
                            <Link href={safeHref(item.url)} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={cls}>
                                {body}
                            </Link>
                        ) : (
                            <div className={cls}>{body}</div>
                        )}
                    </li>
                );
            })}
        </ul>
    );
}

// International flexible section: cards with an image, a title and a link.
export default function IntlLinkCardsSection({ data, slug }) {
    return (
        <section className="py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]">
            <div className="container">
                {data.title && (
                    <h2 className="relative mx-auto mb-[22px] pb-[14px] text-center text-[24px] font-bold leading-[1.25] text-[#212121] after:absolute after:bottom-0 after:left-1/2 after:h-[3px] after:w-[56px] after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-(--basecolor) after:to-(--basecolor2) after:content-[''] dark:text-white xl:mb-[32px] xl:text-[32px] xl:after:w-[72px] 2xl:text-[38px] 3xl:text-[52px]">
                        {data.title}
                    </h2>
                )}
                {ARTICLE_PAGES.includes(slug) && data.display === "cards" ? (
                    <ArticleCards items={data.items} centered={!!data.title} />
                ) : data.items.every((item) => !item.url && item.description?.trim()) ? (
                    <ScholarCards items={data.items} />
                ) : data.display === "people" ? (
                    <ul className="mx-auto flex max-w-[1120px] flex-wrap justify-center gap-[12px] xl:gap-[20px] 3xl:max-w-[1440px] 3xl:gap-[28px]">
                        {data.items.map((item) => (
                            <li key={item.id} className="group flex w-[calc(50%-6px)] flex-col overflow-hidden rounded-[14px] border border-black/10 bg-white transition-all duration-300 hover:border-[#F97316]/40 hover:shadow-[0_12px_30px_rgba(249,115,22,0.14)] motion-safe:hover:-translate-y-1 dark:border-white/10 dark:bg-[#18191B] md:w-[calc(33.333%-8px)] lg:w-[calc(25%-9px)] xl:w-[calc(25%-15px)] xl:rounded-[18px] 3xl:w-[calc(25%-21px)]">
                                <span className="relative block aspect-[4/5] overflow-hidden bg-gradient-to-b from-[#FFF8EE] to-[#FFE4CC] dark:from-white/5 dark:to-white/10">
                                    {item.image?.url && (
                                        <Image src={item.image.url} alt={item.image.alternativeText || item.title} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="object-cover object-top transition-transform duration-700 ease-out motion-safe:group-hover:scale-105" />
                                    )}
                                    <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[4px] origin-left scale-x-0 bg-gradient-to-r from-[#DC2626] to-[#F97316] transition-transform duration-500 group-hover:scale-x-100" />
                                </span>
                                <span className="flex flex-1 flex-col p-[12px] xl:p-[18px] 3xl:p-[24px]">
                                    {item.description && <span className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#DC2626] xl:text-[12px] 3xl:text-[15px]">{item.description}</span>}
                                    <h3 className="mb-0 mt-[4px] text-[15px] font-semibold leading-snug text-[#212121] dark:text-white xl:text-[17px] 3xl:text-[22px]">{item.title}</h3>
                                </span>
                            </li>
                        ))}
                    </ul>
                ) : data.display === "icons" ? (
                    <ul className={`flex flex-wrap items-start gap-x-[20px] gap-y-[16px] xl:gap-x-[32px] ${data.title ? "justify-center" : ""}`}>
                        {data.items.map((item) => (
                            <li key={item.id}>
                                <Link
                                    href={safeHref(item.url || "#")}
                                    target={item.isExternal ? "_blank" : undefined}
                                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                                    className="group flex w-[64px] flex-col items-center gap-[6px] text-center xl:w-[80px] 3xl:w-[110px]"
                                >
                                    {item.image?.url && (
                                        <span className="relative block size-[48px] overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110 xl:size-[56px] 3xl:size-[80px]">
                                            <Image src={item.image.url} alt={item.image.alternativeText || item.title} fill sizes="80px" className="object-contain" />
                                        </span>
                                    )}
                                    <span className="text-[12px] font-medium text-black transition-colors group-hover:text-[#DC2626] dark:text-white xl:text-[14px] 3xl:text-[18px]">{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="grid grid-cols-1 gap-[15px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-[25px] 3xl:gap-[35px]">
                        {data.items.map((item) => {
                            const card = (
                                <>
                                    {item.image?.url && (
                                        <Image
                                            src={item.image.url}
                                            alt={item.image.alternativeText || ""}
                                            fill
                                            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    )}
                                    <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                                    <span className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-(--basecolor2) to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                    {/* CHANGED: new dark layer over the orange on hover (always on for touch screens, where the text is always shown) */}
                                    <span className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100" />
                                    <span className="absolute inset-0 flex items-end justify-between gap-[12px] p-[18px] xl:p-[24px]">
                                        <TableScrollBox className="min-w-0 max-h-full overflow-y-auto overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                                            <span className="block min-w-0">
                                                {/* CHANGED: added text-shadow */}
                                                <span className="block text-[18px] font-bold leading-tight text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.6)] xl:text-[22px] 2xl:text-[26px] 3xl:text-[34px]">{item.title}</span>
                                                {item.description && (
                                                    // Shown on hover/keyboard focus; touch screens (no hover) always show it
                                                    <span className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100 [@media(hover:none)]:grid-rows-[1fr] [@media(hover:none)]:opacity-100">
                                                        <span className="overflow-hidden">
                                                            {/* CHANGED: added text-shadow */}
                                                            <span className="mt-[6px] block text_1 leading-[1.5] text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">{item.description}</span>
                                                        </span>
                                                    </span>
                                                )}
                                            </span>
                                        </TableScrollBox>
                                        {item.url && (
                                            <span aria-hidden="true" className="flex size-[36px] shrink-0 items-center justify-center rounded-full bg-white text-[18px] text-(--basecolor) transition-transform duration-300 group-hover:translate-x-[4px] xl:size-[44px]">→</span>
                                        )}
                                    </span>
                                </>
                            );
                            const cls = "group relative block aspect-[4/3] overflow-hidden rounded-[16px] bg-black shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_14px_36px_rgba(249,115,22,0.3)] xl:aspect-[5/4]";

                            return item.url ? (
                                <Link
                                    key={item.id}
                                    href={safeHref(item.url)}
                                    target={item.isExternal ? "_blank" : undefined}
                                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                                    className={cls}
                                >
                                    {card}
                                </Link>
                            ) : (
                                <div key={item.id} className={cls}>{card}</div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}
