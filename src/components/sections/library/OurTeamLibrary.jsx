"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import LibrarySidebar from "./LibrarySidebar";

const cell = "border border-[#6B7280] dark:border-white/30";

function TeamTable({ title, members }) {
    return (
        <div>
            {title && (
                <h3 className="mb-4 md:mb-5 lg:mb-6 text-[18px] md:text-[20px] 2xl:text-[22px] font-semibold uppercase leading-tight text-[#1F1F1F] dark:text-white">
                    {title}
                </h3>
            )}

            {/* wrapper scrolls sideways on small screens so the 3 columns never get crushed */}
            <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left">
                    <thead>
                        <tr className="bg-[#F97B22] text-white">
                            <th className={`${cell} w-[12%] px-3 py-3 text-center text-[14px] md:text-[15px] 2xl:text-[16px] font-medium`}>
                                Sl No
                            </th>
                            <th className={`${cell} w-[44%] px-3 py-3 text-center text-[14px] md:text-[15px] 2xl:text-[16px] font-medium`}>
                                Details
                            </th>
                            <th className={`${cell} w-[44%] px-3 py-3 text-center text-[14px] md:text-[15px] 2xl:text-[16px] font-medium`}>
                                Photo
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {members.map((m, index) => (
                            <tr key={m?.id ?? index}>
                                <td className={`${cell} px-3 py-4 text-center align-middle text-[14px] md:text-[15px] text-black dark:text-white`}>
                                    {index + 1}
                                </td>

                                <td className={`${cell} px-4 md:px-8 py-4 align-middle`}>
                                    <ul className="m-0 flex flex-col gap-y-2 md:gap-y-3 p-0 text-[14px] md:text-[15px] 2xl:text-[16px] leading-snug text-black dark:text-white">
                                        {m.name && <li className="list-none font-semibold">{m.name}</li>}
                                        {m.qualification && <li className="list-none">{m.qualification}</li>}
                                        {m.designation && <li className="list-none">{m.designation}</li>}
                                        {m.contactFor && <li className="list-none">Contact for: {m.contactFor}</li>}
                                        {m.phone && (
                                            <li className="list-none">
                                                Phone:{" "}
                                                <a
                                                    href={`tel:${m.phone.replace(/[^\d+]/g, "")}`}
                                                    className="transition-colors duration-300 hover:text-(--basecolor)"
                                                >
                                                    {m.phone}
                                                </a>
                                            </li>
                                        )}
                                        {m.email && (
                                            <li className="list-none break-all">
                                                Email:{" "}
                                                <a
                                                    href={`mailto:${m.email}`}
                                                    className="transition-colors duration-300 hover:text-(--basecolor)"
                                                >
                                                    {m.email}
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </td>

                                <td className={`${cell} px-3 py-4 align-middle`}>
                                    {m.photo?.url && (
                                        <div className="relative mx-auto w-[120px] md:w-[150px] xl:w-[173px] aspect-173/184 overflow-hidden">
                                            <Image
                                                src={m.photo.url}
                                                alt={m.photo.alternativeText || m.name || "Team member"}
                                                fill
                                                sizes="173px"
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default function OurTeamLibrary({ data, menu }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const { title, groups } = data || {};

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
                            {title && (
                                <h2 className="cmn_Title mb-6 md:mb-8 lg:mb-10 3xl:mb-12">{title}</h2>
                            )}

                            {groups?.length > 0 && (
                                <div className="flex flex-col gap-y-10 md:gap-y-12 lg:gap-y-16 2xl:gap-y-20">
                                    {groups.map((group, i) =>
                                        group?.members?.length > 0 ? (
                                            <TeamTable
                                                key={group?.id ?? i}
                                                title={group.title}
                                                members={group.members}
                                            />
                                        ) : null
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}