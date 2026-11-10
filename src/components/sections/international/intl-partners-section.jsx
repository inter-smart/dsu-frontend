"use client";

import { useState } from "react";
import Image from "@/components/ui/safe-image";
import { safeHref } from "@/lib/utils";

function PartnerCard({ partner }) {
    const body = (
        <>
            <div className="relative flex h-[90px] w-full items-center justify-center xl:h-[110px] 3xl:h-[150px]">
                {partner.logo?.url ? (
                    <Image
                        src={partner.logo.url}
                        alt={partner.logo.alternativeText || partner.name}
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                        className="object-contain"
                    />
                ) : null}
            </div>
            <p className="mt-[10px] text-center text-[13px] font-medium text-black xl:text-[15px] 3xl:text-[20px]">{partner.name}</p>
        </>
    );
    const cls = "group flex flex-col justify-between rounded-[10px] border border-black/10 bg-white p-[14px] transition-shadow hover:shadow-lg xl:p-[18px]";

    return partner.url ? (
        <a href={safeHref(partner.url)} target="_blank" rel="noopener noreferrer" className={cls}>{body}</a>
    ) : (
        <div className={cls}>{body}</div>
    );
}

// International flexible section: partner logos grouped by country, with a country filter.
export default function IntlPartnersSection({ data }) {
    const [active, setActive] = useState("all");
    const groups = data.groups.filter((g) => active === "all" || String(g.id) === active);
    const chip = (on) =>
        `shrink-0 rounded-full border px-[14px] py-[6px] text-[13px] transition-colors xl:text-[15px] 3xl:text-[19px] ${
            on ? "border-transparent bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white" : "border-black/20 bg-white text-black hover:border-[#DC2626]"
        }`;

    return (
        <section className="py-[15px] xl:py-[22px] 2xl:py-[28px] 3xl:py-[40px]">
            <div className="container">
                {data.title && (
                    <div className="mb-[16px] xl:mb-[22px]">
                        <h2 className="text-[19px] font-semibold uppercase tracking-[0.04em] text-black dark:text-white xl:text-[22px] 2xl:text-[24px] 3xl:text-[30px]">{data.title}</h2>
                        <span className="base-gradient mt-[8px] block h-[3px] w-[60px] rounded-full xl:w-[80px]" />
                    </div>
                )}

                {data.groups.length > 1 && (
                    <div className="mb-[20px] flex gap-[8px] overflow-x-auto pb-[6px] xl:mb-[30px] xl:flex-wrap xl:overflow-visible">
                        <button type="button" onClick={() => setActive("all")} className={chip(active === "all")}>All</button>
                        {data.groups.map((g) => (
                            <button key={g.id} type="button" onClick={() => setActive(String(g.id))} className={chip(active === String(g.id))}>
                                {g.country}
                            </button>
                        ))}
                    </div>
                )}

                <div className="flex flex-col gap-[25px] xl:gap-[40px]">
                    {groups.map((g) => (
                        <div key={g.id}>
                            {g.country && <h3 className="mb-[12px] border-b border-black/10 pb-[8px] text-[16px] font-semibold text-[#DC2626] xl:text-[18px] 2xl:text-[20px] 3xl:text-[26px]">{g.country}</h3>}
                            <div className="grid grid-cols-2 gap-[12px] sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-[18px]">
                                {g.partners.map((p) => <PartnerCard key={p.id} partner={p} />)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
