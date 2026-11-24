"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import LibrarySidebar from "./LibrarySidebar";
import LibraryHtml from "./LibraryHtml";

const infoCard =
    "rounded-[8px] border-l-[5px] border-[#DC2626] bg-linear-to-br from-[#FFF6E9] to-[#FFEFD9] dark:from-white/5 dark:to-white/5";

const cardTitle =
    "text-[18px] md:text-[20px] 2xl:text-[24px] font-semibold leading-tight text-[#1F1F1F] dark:text-white";

const linkCls =
    "inline-block text-[14px] md:text-[15px] 2xl:text-[17px] font-semibold text-[#F97B22] transition-colors duration-300 hover:text-(--basecolor2) hover:underline underline-offset-2";

const externalProps = (b) =>
    b?.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

/* the link under a card: email -> mailto, otherwise a normal link */
function CardLink({ link }) {
    if (!link?.label) return null;
    const href = link.email ? `mailto:${link.email}` : link.url || "#!";
    return (
        <Link href={href} {...externalProps(link)} className={linkCls}>
            {link.label}
        </Link>
    );
}

export default function AskUsLibrary({ data, menu }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const { title, intro, topCards, infoCards } = data || {};

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
                        <div className="w-full lg:h-full rounded-[10px] border border-black/10 dark:border-white/10 p-[15px] md:p-[20px] lg:p-[25px] xl:p-[35px_30px] 2xl:p-[40px_40px] 3xl:p-[40px]">
                            {title && <h2 className="cmn_Title mb-3 md:mb-4">{title}</h2>}

                            {intro && (
                                <div className="text_1 mb-6 md:mb-8 lg:mb-10 text-[#4A5565]">
                                    <LibraryHtml value={intro} />
                                </div>
                            )}

                            {/* ─── Ask Librarian / Feedback ─── */}
                            {topCards?.length > 0 && (
                                <div className="flex flex-col gap-y-5 md:gap-y-6 lg:gap-y-7">
                                    {topCards.map((card, i) => (
                                        <div
                                            key={card?.id ?? i}
                                            className={`${infoCard} px-5 py-4 md:px-5 md:py-5 lg:py-6`}
                                        >
                                            {card.title && <h3 className={cardTitle}>{card.title}</h3>}
                                            {card.lines?.length > 0 && (
                                                <div className="text_1 mt-1 md:mt-1.5 text-[#4A5565]">
                                                    {card.lines.map((line, j) => (
                                                        <p key={j}>{line}</p>
                                                    ))}
                                                </div>
                                            )}
                                            {card.link && (
                                                <div className="mt-3 md:mt-4">
                                                    <CardLink link={card.link} />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* ─── Address / Contact / Email ─── */}
                            {infoCards?.length > 0 && (
                                <>
                                    <hr className="my-6 border-0 border-t border-black/10 md:my-8 lg:my-10 dark:border-white/10" />

                                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
                                        {infoCards.map((card, i) => (
                                            <div
                                                key={card?.id ?? i}
                                                className={`${infoCard} px-5 py-4 md:px-6 md:py-5 lg:py-6`}
                                            >
                                                {card.title && <h3 className={cardTitle}>{card.title}</h3>}
                                                {card.lines?.length > 0 && (
                                                    <div className="text_1 mt-2 md:mt-3">
                                                        {card.lines.map((line, j) => (
                                                            <p key={j}>{line}</p>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}