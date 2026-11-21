"use client";

import { useRef, useState } from "react";
import { Globe } from "lucide-react";
import Image from "@/components/ui/safe-image";
import StickyMenubar from "@/components/layout/common/StickyMenubar";
import { safeHref } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { IntlButton } from "./intl-button-section";

function PartnerCard({ partner }) {
    const name = partner.logo?.alternativeText || partner.name || "Partner logo";
    const body = (
        <>
            <span className="relative block h-[56px] w-full xl:h-[72px] 3xl:h-[96px]">
                {partner.logo?.url ? (
                    <Image
                        src={partner.logo.url}
                        alt={name}
                        fill
                        sizes="(min-width: 1200px) 15vw, (min-width: 640px) 25vw, 50vw"
                        className="object-contain transition-transform duration-300 motion-safe:group-hover:scale-105"
                    />
                ) : (
                    <span className="flex h-full items-center justify-center text-center text-[13px] font-semibold text-[#212121] xl:text-[14px]">{partner.name}</span>
                )}
            </span>
            {partner.url && (
                <span aria-hidden="true" className="absolute right-[8px] top-[8px] flex size-[22px] items-center justify-center rounded-full bg-gradient-to-r from-(--basecolor) to-(--basecolor2) text-[12px] leading-none text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">↗</span>
            )}
        </>
    );
    const cls = "group relative flex items-center rounded-[12px] border border-black/10 bg-white p-[14px] transition-all duration-300 hover:border-[#F97316]/40 hover:shadow-[0_8px_20px_rgba(249,115,22,0.12)] motion-safe:hover:-translate-y-1 dark:border-white/10 xl:p-[18px] 3xl:p-[24px]";

    return partner.url ? (
        <a href={safeHref(partner.url)} target="_blank" rel="noopener noreferrer" title={partner.name || undefined} className={`${cls} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--basecolor)`}>{body}</a>
    ) : (
        <div className={cls}>{body}</div>
    );
}

// International flexible section: partner logos grouped by country, with a country filter.
export default function IntlPartnersSection({ data }) {
    const [active, setActive] = useState("all");
    const filterRef = useRef(null);
    // Picked from the pinned bar: the list shrinks, so bring its start back into view
    const pick = (id) => {
        setActive(id);
        if (filterRef.current?.getBoundingClientRect().top < 0) filterRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const groups = data.groups.filter((g) => active === "all" || String(g.id) === active);
    const total = data.groups.reduce((n, g) => n + g.partners.length, 0);
    const activeGroup = data.groups.find((g) => String(g.id) === active);
    const chip = (on) =>
        `inline-flex shrink-0 items-center gap-[8px] rounded-full border px-[14px] py-[6px] text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--basecolor) xl:text-[14px] 3xl:text-[18px] ${
            on ? "border-transparent bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white shadow-[0_4px_12px_rgba(220,38,38,0.25)]" : "border-black/15 bg-white text-[#212121] hover:border-[#F97316] hover:text-[#DC2626] dark:border-white/15 dark:bg-transparent dark:text-white"
        }`;
    const count = (on) => `rounded-full px-[7px] py-[1px] text-[11px] leading-[1.5] xl:text-[12px] 3xl:text-[15px] ${on ? "bg-white/25 text-white" : "bg-[#F97316]/10 text-[#DC2626]"}`;

    return (
        <section className="py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]">
            <div className="container">
                {(data.title || data.buttons?.length > 0) && (
                    <div className="mb-[18px] flex flex-wrap items-end justify-between gap-x-[20px] gap-y-[12px] xl:mb-[24px]">
                        <div>
                            {data.title && <h2 className="cmn_Title relative pb-[12px] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-[56px] after:rounded-full after:bg-gradient-to-r after:from-[#DC2626] after:to-[#F97316] after:content-[''] xl:pb-[16px] xl:after:w-[72px]">{data.title}</h2>}
                            {total > 0 && (
                                <p className="mt-[10px] text-[14px] text-[#555] dark:text-white/70 xl:text-[15px] 3xl:text-[19px]">
                                    <strong className="font-semibold text-[#DC2626]">{total}</strong> universities across <strong className="font-semibold text-[#DC2626]">{data.groups.length}</strong> {data.groups.length === 1 ? "country" : "countries"}
                                </p>
                            )}
                        </div>
                        {data.buttons?.length > 0 && (
                            <div className="flex flex-wrap gap-[12px] md:ml-auto md:justify-end xl:gap-[18px]">
                                {data.buttons.map((button, i) => <IntlButton key={i} button={button} />)}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {data.groups.length > 1 && (
                <div ref={filterRef} className="scroll-mt-(--header-y)">
                <StickyMenubar bound="section">
                <div className="container">
                    <div role="group" aria-label="Filter partners by country" className="mb-[24px] rounded-[12px] border in-[.menubar-stuck]:shadow-[0_8px_20px_rgba(0,0,0,0.08)] border-[#F97316]/20 bg-gradient-to-br from-[#FFF8EE] to-[#FFF1E0] p-[10px] dark:border-white/10 dark:from-[#18191B] dark:to-[#18191B] xl:mb-[36px] xl:rounded-[16px] xl:p-[16px] md:in-[.menubar-stuck]:flex md:in-[.menubar-stuck]:items-center md:in-[.menubar-stuck]:justify-between md:in-[.menubar-stuck]:gap-[24px] xl:in-[.menubar-stuck]:py-[10px]">
                        {/* Pinned on md+: a short summary beside the dropdown */}
                        <p aria-hidden="true" className="hidden min-w-0 items-center gap-[12px] md:in-[.menubar-stuck]:flex">
                            <span className="h-[26px] w-[4px] shrink-0 rounded-full bg-gradient-to-b from-[#DC2626] to-[#F97316]" />
                            <span className="truncate text-[16px] font-semibold text-[#212121] dark:text-white xl:text-[18px] 3xl:text-[22px]">{data.title || "Partner Universities"}</span>
                            <span className="truncate text-[14px] text-[#777] dark:text-white/60 xl:text-[15px] 3xl:text-[19px]">Showing <strong className="font-semibold text-[#DC2626]">{activeGroup ? activeGroup.country : "all countries"}</strong></span>
                        </p>
                        {/* Mobile, and the pinned bar on md+: a dropdown instead of the chip row */}
                        <div className="md:hidden md:in-[.menubar-stuck]:block md:in-[.menubar-stuck]:w-[340px] md:in-[.menubar-stuck]:shrink-0 3xl:in-[.menubar-stuck]:w-[420px]">
                            <Select value={active} onValueChange={pick}>
                                <SelectTrigger aria-label="Filter partners by country" className="!h-[60px] w-full gap-[12px] rounded-[12px] border-[#F97316]/25 bg-white !py-[8px] !pl-[8px] !pr-[10px] shadow-[0_4px_14px_rgba(249,115,22,0.10)] transition-shadow data-popup-open:border-[#F97316] data-popup-open:shadow-[0_6px_20px_rgba(220,38,38,0.18)] dark:border-white/15 dark:bg-[#202124] [&>[data-slot=select-icon]]:!size-[30px] [&>[data-slot=select-icon]]:rounded-full [&>[data-slot=select-icon]]:bg-[#F97316]/10 [&>[data-slot=select-icon]]:p-[7px] [&>[data-slot=select-icon]]:!text-[#DC2626]">
                                    <span aria-hidden="true" className="flex size-[42px] shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#DC2626] to-[#F97316] text-white shadow-[0_4px_12px_rgba(220,38,38,0.3)]">
                                        <Globe className="!size-[20px]" />
                                    </span>
                                    <span className="flex min-w-0 flex-1 flex-col items-start text-left leading-tight">
                                        <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#777] dark:text-white/60">Partner country</span>
                                        <SelectValue className="w-full truncate text-[15px] font-semibold text-[#212121] dark:text-white">{activeGroup ? activeGroup.country : "All countries"}</SelectValue>
                                    </span>
                                    <span className="rounded-full bg-[#F97316]/10 px-[9px] py-[2px] text-[12px] font-semibold text-[#DC2626]">{activeGroup ? activeGroup.partners.length : total}</span>
                                </SelectTrigger>
                                <SelectContent sideOffset={8} className="w-(--anchor-width) !max-h-[340px] rounded-[14px] border border-[#F97316]/20 p-[6px] shadow-[0_16px_40px_rgba(220,38,38,0.18)] ring-0 dark:border-white/10">
                                    {[{ id: "all", country: "All countries", n: total }, ...data.groups.map((g) => ({ id: String(g.id), country: g.country, n: g.partners.length }))].map((o) => (
                                        <SelectItem key={o.id} value={o.id} className="group/opt mb-[2px] rounded-[10px] py-[10px] pl-[12px] text-[14px] text-[#212121] last:mb-0 focus:bg-[#FFF1E0] focus:text-[#DC2626] aria-selected:bg-gradient-to-r aria-selected:from-[#DC2626] aria-selected:to-[#F97316] aria-selected:font-semibold aria-selected:text-white aria-selected:focus:text-white dark:text-white dark:focus:bg-white/10 !pr-[12px] [&>:first-child]:!pr-0 [&>span:last-child:not(:first-child)]:hidden">
                                            <span className="min-w-0 truncate !text-[#212121] group-focus/opt:!text-[#DC2626] group-aria-selected/opt:!text-white dark:!text-white">{o.country}</span>
                                            <span className="ml-auto rounded-full bg-[#F97316]/10 px-[8px] text-[12px] font-semibold !text-[#DC2626] group-aria-selected/opt:bg-white/25 group-aria-selected/opt:!text-white">{o.n}</span>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="hidden gap-[8px] overflow-x-auto pb-[4px] md:flex md:in-[.menubar-stuck]:hidden xl:flex-wrap xl:overflow-visible xl:pb-0">
                            <button type="button" aria-pressed={active === "all"} onClick={() => pick("all")} className={chip(active === "all")}>
                                All <span className={count(active === "all")}>{total}</span>
                            </button>
                            {data.groups.map((g) => {
                                const on = active === String(g.id);
                                return (
                                    <button key={g.id} type="button" aria-pressed={on} onClick={() => pick(String(g.id))} className={chip(on)}>
                                        {g.country} <span className={count(on)}>{g.partners.length}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
                </StickyMenubar>
                </div>
            )}

            <div className="container">
                {/* filtered client-side: scroll-reveal must not hide the groups when the list height changes */}
                <div data-no-reveal className="flex flex-col gap-[28px] xl:gap-[44px] 3xl:gap-[60px]">
                    {groups.map((g) => (
                        <div key={g.id}>
                            {g.country && (
                                <div className="mb-[14px] flex items-center gap-[12px] xl:mb-[18px]">
                                    <span aria-hidden="true" className="h-[22px] w-[4px] shrink-0 rounded-full bg-gradient-to-b from-[#DC2626] to-[#F97316] xl:h-[26px] 3xl:h-[34px]" />
                                    <h3 className="mb-0 text-[17px] leading-[1.3] font-semibold text-[#212121] dark:text-white xl:text-[19px] 2xl:text-[21px] 3xl:text-[27px]">{g.country}</h3>
                                    <span className="text-[13px] text-[#777] dark:text-white/60 xl:text-[14px] 3xl:text-[18px]">{g.partners.length} {g.partners.length === 1 ? "partner" : "partners"}</span>
                                    <span aria-hidden="true" className="h-px flex-1 bg-black/10 dark:bg-white/10" />
                                </div>
                            )}
                            <div className="grid grid-cols-2 gap-[12px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 xl:gap-[18px] 3xl:gap-[24px]">
                                {g.partners.map((p) => <PartnerCard key={p.id} partner={p} />)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
