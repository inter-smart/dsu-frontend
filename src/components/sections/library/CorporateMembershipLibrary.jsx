"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import LibrarySidebar from "./LibrarySidebar";

const cell = "border border-[#6B7280] dark:border-white/30";
const th = `${cell} px-3 py-3 text-center text-[15px] md:text-[16px] 2xl:text-[16px] font-medium leading-tight`;
const td = `${cell} px-3 py-4 align-middle text-[15px] md:text-[16px] 2xl:text-[16px] 3xl:text-[18px] leading-relaxed font-medium text-black dark:text-white`;
const linkCls = "text-[15px] md:text-[16px] 2xl:text-[16px] 3xl:text-[18px] font-medium break-all transition-colors duration-300 hover:text-(--basecolor) hover:underline";

/* urls without a protocol (e.g. "www.delnet.in") still need https:// to open as a link */
const toHref = (url) => (/^https?:\/\//i.test(url) ? url : `https://${url}`);

export default function CorporateMembershipLibrary({ data, menu }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const { title, intro, members } = data || {};

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
                                <div className="text_1 mb-6 md:mb-8 lg:mb-10">
                                    <p>{intro}</p>
                                </div>
                            )}

                            {members?.length > 0 && (
                                <div className="w-full overflow-x-auto">
                                    <table className="w-full min-w-[760px] table-fixed border-collapse">
                                        <colgroup>
                                            <col className="w-[10%]" /> {/* Sl No */}
                                            <col className="w-[16%]" /> {/* Institution */}
                                            <col className="w-[37%]" /> {/* URL/Login/Password */}
                                            <col className="w-[37%]" /> {/* Service */}
                                        </colgroup>

                                        <thead>
                                            <tr className="bg-[#F97B22] text-white">
                                                <th className={th}>Sl No</th>
                                                <th className={th}>Institution</th>
                                                <th className={th}>URL/Login/Password</th>
                                                <th className={th}>Service</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {members.map((m, i) => (
                                                <tr key={m?.id ?? i}>
                                                    <td className={`${td} text-center`}>{i + 1}</td>

                                                    <td className={`${td} text-center`}>
                                                        {m.logo?.url && (
                                                            <Image
                                                                src={m.logo.url}
                                                                alt={m.logo.alternativeText || m.institution || "Logo"}
                                                                width={120}
                                                                height={60}
                                                                className="mx-auto mb-2 h-auto max-h-[60px] w-auto max-w-full object-contain"
                                                            />
                                                        )}
                                                        {m.institution && <span>{m.institution}</span>}
                                                    </td>

                                                    <td className={`${td} px-5 lg:px-8`}>
                                                        {m.url && (
                                                            <a
                                                                href={toHref(m.url)}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={linkCls}
                                                            >
                                                                {m.url}
                                                            </a>
                                                        )}
                                                        {m.note && <p className="m-0 font-medium">{m.note}</p>}
                                                    </td>

                                                    <td className={`${td} px-3 lg:px-4`}>
                                                        {m.services?.length > 0 && (
                                                            <ul>
                                                                {m.services.map((s, j) => (
                                                                    <li key={j} className="list-none font-medium">
                                                                        {s}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
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