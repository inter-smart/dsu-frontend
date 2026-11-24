"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import LibrarySidebar from "./LibrarySidebar";
import LibraryHtml from "./LibraryHtml";

const cell = "border border-[#6B7280] dark:border-white/30";
const th = `${cell} px-3 py-3 text-center text-[14px] md:text-[15px] 2xl:text-[16px] font-medium leading-tight`;
const td = `${cell} px-3 py-4 text-center align-middle text-[14px] md:text-[15px] 2xl:text-[16px] leading-relaxed text-black dark:text-white`;
const linkCls = "transition-colors duration-300 hover:text-(--basecolor) hover:underline";

/* text that becomes a link only when a url is given */
function MaybeLink({ label, url }) {
    if (!label) return null;
    if (!url) return <span>{label}</span>;
    const isExternal = /^https?:\/\//.test(url);
    return (
        <a
            href={url}
            className={linkCls}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
            {label}
        </a>
    );
}

export default function EResourcesLibrary({ data, menu }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const { title, intro, resources } = data || {};

    return (
        <section className="relative py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px] dark:bg-[#101010]">
            <div className="container">
                <button
                    type="button"
                    onClick={() => setIsMobileSidebarOpen(true)}
                    aria-haspopup="dialog"
                    aria-expanded={isMobileSidebarOpen}
                    aria-label="Open library menu"
                    className="lg:hidden w-fit mb-5 flex items-center justify-between gap-3 rounded-[6px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) px-4 py-3 text-[14px] md:text-[15px] font-semibold text-white cursor-pointer transition-opacity duration-300 hover:opacity-90"
                >
                    <Menu className="size-5 shrink-0" strokeWidth={2.25} />
                    <span>Library Menu</span>
                </button>

                <div className="cmnFlx">
                    <div
                        className="leftBx max-lg:contents lg:sticky lg:top-[140px] lg:left-0 lg:h-full"
                        onClick={(e) => {
                            if (e.target.closest("a")) setIsMobileSidebarOpen(false);
                        }}
                    >
                        <LibrarySidebar
                            data={menu}
                            isOpen={isMobileSidebarOpen}
                            onClose={() => setIsMobileSidebarOpen(false)}
                        />
                    </div>

                    <div className="rtBx">
                        <div className="w-full lg:h-full rounded-[10px] border border-black/10 dark:border-white/10 p-[15px] md:p-[20px] lg:p-[25px] xl:p-[35px_30px] 2xl:p-[40px_40px] 3xl:p-[50px]">
                            {title && <h2 className="cmn_Title mb-3 md:mb-4">{title}</h2>}

                            {intro && (
                                <div className="text_1 mb-5 md:mb-6 lg:mb-8">
                                    <LibraryHtml value={intro} />
                                </div>
                            )}

                            {resources?.length > 0 && (
                                /* wide table scrolls sideways on small screens */
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full min-w-[900px] border-collapse">
                                        <thead>
                                            <tr className="bg-[#F97B22] text-white">
                                                <th className={`${th} w-[6%]`}>Sl No</th>
                                                <th className={`${th} w-[28%]`} colSpan={2}>Publisher</th>
                                                <th className={`${th} w-[22%]`}>URL</th>
                                                <th className={`${th} w-[12%]`}>Login Details</th>
                                                <th className={`${th} w-[13%]`}>User Manual</th>
                                                <th className={`${th} w-[19%]`}>User Manual Self-help video</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {resources.map((r, i) => (
                                                <tr key={r?.id ?? i}>
                                                    <td className={td}>{i + 1}</td>

                                                    <td className={`${td} w-[12%]`}>
                                                        {r.logo?.url && (
                                                            <Image
                                                                src={r.logo.url}
                                                                alt={r.logo.alternativeText || r.publisher || "Logo"}
                                                                width={150}
                                                                height={70}
                                                                className="mx-auto h-auto max-h-[70px] w-auto max-w-[120px] object-contain"
                                                            />
                                                        )}
                                                    </td>

                                                    <td className={`${td} whitespace-pre-line`}>{r.publisher}</td>

                                                    <td className={`${td} break-all`}>
                                                        <MaybeLink label={r.url} url={r.url} />
                                                    </td>

                                                    <td className={td}>{r.loginDetails}</td>

                                                    <td className={td}>
                                                        <MaybeLink label={r.userManual?.label} url={r.userManual?.url} />
                                                    </td>

                                                    <td className={td}>
                                                        <MaybeLink label={r.selfHelpVideo?.label} url={r.selfHelpVideo?.url} />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}