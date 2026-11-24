"use client";

import { useState } from "react";
import LibrarySidebar from "./library-sidemenubar";

// The Library page shell: section + container + side menu on the left, the content box(es) on the right.
// `embedded` renders only the content (no section, no side menu) for sections that are stacked inside
// one <LibraryGroup>, which draws the shell and the side menu once.
export default function LibraryFrame({ menu, embedded = false, className = "", children }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    if (embedded) return <>{children}</>;

    // only the "Overview" entry (no sub-pages) means no sidebar: the content takes the full width
    const hasMenu = !Array.isArray(menu) || menu.length > 1; // no menu passed = the sidebar's built-in default list

    return (
        <section className={`relative ${className}`}>
            <div className="container">
                <div className="cmnFlx">
                    <div className={hasMenu ? "leftBx lg:sticky lg:top-[140px] lg:left-0 lg:h-full" : "hidden"}>
                        <LibrarySidebar data={menu} isOpen={isMobileSidebarOpen} onClose={() => setIsMobileSidebarOpen(false)} />
                    </div>
                    <div className={hasMenu ? "rtBx" : "w-full"}>{children}</div>
                </div>
            </div>
        </section>
    );
}

// Consecutive Library sections of a flexible page: one shell, one side menu, the sections stacked on the right.
export function LibraryGroup({ menu, children }) {
    return (
        <LibraryFrame menu={menu} className="py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px] dark:bg-[#101010]">
            <div className="flex flex-col gap-[20px] 2xl:gap-[30px]">{children}</div>
        </LibraryFrame>
    );
}
