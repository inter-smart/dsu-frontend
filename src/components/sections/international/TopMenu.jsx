"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";

export default function TopMenu({ data = [] }) {
    const [activeId, setActiveId] = useState("");
    const navRef = useRef(null);
    const lenis = useLenis();

    useEffect(() => {
        const handleScroll = () => {
            const navHeight = navRef.current?.offsetHeight || 80;
            const scrollPos = window.scrollY + navHeight + 80;

            for (let i = data.length - 1; i >= 0; i--) {
                const item = data[i];
                if (!item.href?.startsWith("#")) continue;
                const el = document.querySelector(item.href);
                if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY;
                    if (scrollPos >= top) {
                        setActiveId(item.href);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [data]);

    const handleScrollTo = (e, href) => {
        if (!href?.startsWith("#")) return;
        e.preventDefault();

        const target = document.querySelector(href);
        if (!target) return;

        const navHeight = navRef.current?.offsetHeight || 80;
        const offset = -navHeight - 16;

        if (lenis) {
            lenis.scrollTo(target, { offset, duration: 1.2 });
        } else {
            const targetPos = target.getBoundingClientRect().top + window.scrollY + offset;
            window.scrollTo({
                top: targetPos,
                behavior: "smooth",
            });
        }

        setActiveId(href);
        window.history.pushState(null, "", href);
    };

    return (
        <nav
            ref={navRef}
            aria-label="Page sections"
            className="sticky top-0 z-30 w-full border-b border-black/10 bg-white/95 backdrop-blur-sm"
        >
            <div className="container">
                <ul className="flex items-stretch overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {data.map((item) => {
                        const isActive = activeId === item.href;

                        return (
                            <li
                                key={item.id}
                                className="relative flex flex-auto shrink-0 after:absolute after:right-0 after:top-1/2 after:h-[55%] after:w-px after:-translate-y-1/2 after:bg-black/10 last:after:hidden"
                            >
                                <Link
                                    href={item.href}
                                    onClick={(e) => handleScrollTo(e, item.href)}
                                    className={`relative flex w-full items-center justify-center whitespace-nowrap px-5 py-4 text-center text-[14px] font-medium transition-colors duration-300 lg:py-5 lg:text-[15px] 2xl:py-[28px] 2xl:text-[18px] ${
                                        isActive
                                            ? "bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent font-semibold after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-linear-to-r after:from-(--basecolor) after:to-(--basecolor2)"
                                            : "text-[#111] hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2) hover:bg-clip-text hover:text-transparent"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
