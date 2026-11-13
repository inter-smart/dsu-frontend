"use client";

import React from 'react'
import Image from "next/image";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";

/* Grid + list reset live in plain CSS so the global `typography` class and
   Tailwind breakpoint config can't interfere. */
const css = `
.vm-blocks{display:grid;grid-template-columns:minmax(0,1fr);gap:14px;counter-reset:vm;width:100%;max-width:none}
@media (min-width:768px){.vm-blocks{grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}}
.vm-blocks > :not([data-vm-list]){grid-column:1/-1;margin:0}
.vm-blocks [data-vm-list]{display:contents}
.vm-item{margin:0}
.vm-num{display:none}
[data-vm-list="ordered"] > .vm-item{counter-increment:vm;align-items:center}
[data-vm-list="ordered"] > .vm-item .vm-sq{display:none}
[data-vm-list="ordered"] > .vm-item .vm-num{display:flex}
.vm-num::after{content:counter(vm,decimal-leading-zero)}
`;

function ItemCard({ children }) {
    return (
        <div className="vm-item text_1 relative flex items-start gap-[14px] h-full py-[16px] px-[20px] rounded-[12px] border border-[rgba(249,115,22,0.18)] dark:border-white/10 bg-white dark:bg-white/[0.04] text-[#4A5565] dark:text-[#9CA3AF] leading-relaxed shadow-[0_1px_3px_rgba(0,0,0,0.04)] dark:shadow-none transition-all duration-300 hover:border-[rgba(249,115,22,0.45)] hover:shadow-[0_12px_24px_-14px_rgba(249,115,22,0.45)] hover:-translate-y-[2px]">
            <span aria-hidden="true" className="vm-sq mt-[10px] shrink-0 w-[7px] h-[7px] rounded-[2px] bg-gradient-to-br from-[#DC2626] to-[#F97316]" />
            <span aria-hidden="true" className="vm-num shrink-0 items-center justify-center w-[40px] h-[40px] rounded-full bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] text-[#F97316] text-[13px] font-bold" />
            <div className="min-w-0 flex-1 [&_p]:!m-0 [&_p]:!text-inherit">{children}</div>
        </div>
    );
}

const blocksStyle = {
    list: ({ children, format }) => (
        <div role="list" data-vm-list={format === "ordered" ? "ordered" : "unordered"}>
            {children}
        </div>
    ),
    "list-item": ({ children }) => <ItemCard>{children}</ItemCard>,
};

export default function AiVisionMission({ data }) {
    return (
        <section id="vision-mission" className="scroll-mt-[80px] lg:scroll-mt-[120px] relative overflow-hidden py-[50px] xl:py-[64px] 2xl:py-[80px] 3xl:py-[100px] bg-gradient-to-b from-[rgba(255,248,238,0.7)] to-[rgba(255,243,224,0.5)] dark:from-[#131416] dark:to-[#0f1011] transition-colors duration-300">
            <style>{css}</style>
            <span id="vision" className="sr-only" />

            {/* soft brand glows */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-[120px] -left-[120px] w-[320px] h-[320px] rounded-full bg-[#F97316]/10 dark:bg-[#F97316]/5 blur-[100px]" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-[120px] -right-[120px] w-[320px] h-[320px] rounded-full bg-[#DC2626]/10 dark:bg-[#DC2626]/5 blur-[100px]" />

            <div className="container relative z-[1]">
                <div className="flex flex-col-reverse gap-[16px] lg:gap-[22px] 3xl:gap-[30px]">
                    {data?.cards?.filter((item) =>
                        item?.title?.trim() || (Array.isArray(item?.description) ? item.description.length : item?.description?.trim()) || item?.icon?.url
                    ).map((item, id) => (
                        <div
                            key={id}
                            className="w-full"
                        >
                            <div className="w-full relative group overflow-hidden flex flex-col gap-[20px] rounded-[14px] xl:rounded-[16px] 3xl:rounded-[20px] border border-[rgba(249,115,22,0.15)] dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm py-[22px] pr-[22px] pl-[26px] xl:py-[28px] xl:pr-[32px] xl:pl-[36px] 2xl:py-[34px] 2xl:pr-[40px] 2xl:pl-[44px] 3xl:py-[44px] 3xl:pr-[56px] 3xl:pl-[60px] shadow-[0_2px_20px_-8px_rgba(249,115,22,0.15)] dark:shadow-none transition-all duration-300 hover:border-[rgba(249,115,22,0.4)] hover:shadow-[0_20px_40px_-16px_rgba(249,115,22,0.3)] dark:hover:border-[#F97316]/40 dark:hover:bg-white/[0.05] before:absolute before:content-[''] before:top-0 before:left-0 before:h-full before:w-[5px] before:bg-gradient-to-b before:from-[#DC2626] before:to-[#F97316] before:opacity-60 group-hover:before:opacity-100 before:transition-opacity before:duration-300 after:absolute after:content-[''] after:-right-[80px] after:-top-[80px] after:w-[200px] after:h-[200px] after:rounded-full after:bg-[#F97316]/0 group-hover:after:bg-[#F97316]/10 after:blur-[60px] after:transition-colors after:duration-500 after:pointer-events-none">
                                <div className="flex items-center gap-4 pb-[18px] xl:pb-[22px] border-b border-[rgba(249,115,22,0.15)] dark:border-white/10">
                                    {item?.icon?.url &&
                                        <div className="shrink-0 w-[52px] h-[46px] xl:w-[62px] xl:h-[54px] 2xl:w-[72px] 2xl:h-[62px] 3xl:h-[80px] 3xl:w-[92px] bg-white/80 dark:bg-white/5 flex border border-[rgba(249,115,22,0.2)] dark:border-white/10 rounded-[10px] xl:rounded-[12px] 2xl:rounded-[14px] 3xl:rounded-[16px] items-center justify-center shadow-sm dark:shadow-none group-hover:border-transparent group-hover:shadow-[0_8px_20px_-6px_rgba(220,38,38,0.5)] group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316] transition-all duration-300">
                                            <Image
                                                src={item?.icon.url}
                                                width={78}
                                                height={65}
                                                alt={item?.icon.alternativeText || item?.title || "Icon"}
                                                className="max-w-[22px] xl:max-w-[26px] 2xl:max-w-[30px] 3xl:max-w-[40px] group-hover:brightness-0 group-hover:invert transition-all"
                                            />
                                        </div>}
                                    <div className="w-full text-[20px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[34px] leading-tight tracking-[-0.01em] text-black dark:text-white font-bold transition-colors duration-300 group-hover:text-[#DC2626] dark:group-hover:text-[#F97316]">
                                        {item.title}
                                    </div>
                                </div>

                                <div className="w-full">
                                    {Array.isArray(item.description) ? (
                                        item.description.length > 0 && (
                                            <div className="text_1 w-full max-w-none leading-relaxed text-[#4A5565] dark:text-[#9CA3AF] [&_p]:!text-[#4A5565] dark:[&_p]:!text-[#9CA3AF] [&_p]:!max-w-none xl:[&_p]:!text-[17px] [&_p:not(:last-child)]:mb-[12px] typography">
                                                <div className="vm-blocks">
                                                    <BlocksRenderer content={item.description} blocks={blocksStyle} />
                                                </div>
                                            </div>
                                        )
                                    ) : item.description && (
                                        <p className='!text-[#4A5565] dark:!text-[#9CA3AF] leading-relaxed'>{item.description}</p>
                                    )}
                                    {item.items && (
                                        <div role="list" className="vm-blocks mt-[18px] 3xl:mt-[24px]">
                                            <div role="presentation" data-vm-list="unordered">
                                                {item?.items.map((item, id) => (
                                                    <ItemCard key={id}>{item.label}</ItemCard>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}