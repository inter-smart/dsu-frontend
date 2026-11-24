"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import LibrarySidebar from "./LibrarySidebar";
import LibraryHtml from "./LibraryHtml";

const cell = "border border-[#6B7280] dark:border-white/30";
const th = `${cell} px-3 py-3 text-center text-[14px] md:text-[15px] 2xl:text-[16px] font-medium leading-tight`;
const td = `${cell} px-3 py-4 xl:py-7 2xl:py-10 text-center align-middle text-[14px] md:text-[15px] 2xl:text-[16px] font-medium leading-relaxed text-black dark:text-white`;
const linkCls = "transition-colors duration-300 hover:text-(--basecolor) hover:underline";

export default function AntiPlagiarismLibrary({ data, menu }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const { title, description, tools } = data || {};

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

                            {description && (
                                <div className="text_1 mb-8 md:mb-10 lg:mb-12 [&_p+p]:mt-4 lg:[&_p+p]:mt-6">
                                    <LibraryHtml value={description} />
                                </div>
                            )}

                            {tools?.length > 0 && (
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full min-w-[640px] table-fixed border-collapse">
                                        <colgroup>
                                            <col className="w-[10%]" /> {/* Sl No */}
                                            <col className="w-[15%]" /> {/* Logo */}
                                            <col className="w-[35%]" /> {/* Provider name */}
                                            <col className="w-[30%]" /> {/* URL */}
                                            <col className="w-[10%]" /> {/* Login Details */}
                                        </colgroup>

                                        <thead>
                                            <tr className="bg-[#F97B22] text-white">
                                                <th className={th}>Sl No</th>
                                                <th className={th} colSpan={2}>Provider</th>
                                                <th className={th}>URL</th>
                                                <th className={th}>Login Details</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {tools.map((t, i) => (
                                                <tr key={t?.id ?? i}>
                                                    <td className={td}>{i + 1}</td>

                                                    <td className={td}>
                                                        {t.logo?.url && (
                                                            <Image
                                                                src={t.logo.url}
                                                                alt={t.logo.alternativeText || t.provider || "Logo"}
                                                                width={150}
                                                                height={70}
                                                                className="mx-auto h-auto max-h-[70px] w-auto max-w-full object-contain"
                                                            />
                                                        )}
                                                    </td>

                                                    <td className={td}>{t.provider}</td>

                                                    <td className={`${td} break-all`}>
                                                        {t.url && (
                                                            <a
                                                                href={t.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={linkCls}
                                                            >
                                                                {t.url}
                                                            </a>
                                                        )}
                                                    </td>

                                                    <td className={td}>{t.loginDetails}</td>
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