"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { BlocksRenderer } from "@/components/ui/blocks-renderer"; 
import LibrarySidebar from "./LibrarySidebar";

const externalProps = (b) =>
    b?.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

// the notice is repeated so Swiper's loop always has enough slides to scroll seamlessly
const NOTICE_COPIES = 4;

export default function AboutLibrary({ data, menu }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const noticeSwiperRef = useRef(null);

    const { title, image, description, constituent } = data || {};
    const notices = (data?.notices || (data?.notice ? [data.notice] : [])).filter((n) => n?.text || n?.linkLabel);
    const hasNotice = notices.length > 0;
    const hasConstituent = constituent?.items?.length > 0;
    // description can be a plain string array or Strapi blocks (rich text)
    const isPlainText = typeof description?.[0] === "string";

    // freeze the strip exactly where it is while the mouse is over it
    const pauseNotice = () => {
        const swiper = noticeSwiperRef.current;
        if (!swiper || swiper.destroyed) return;
        const current = swiper.getTranslate(); // live position, even mid-transition
        swiper.autoplay.stop();
        swiper.setTransition(0);
        swiper.setTranslate(current);
    };

    // continue scrolling from the frozen position
    const resumeNotice = () => {
        const swiper = noticeSwiperRef.current;
        if (!swiper || swiper.destroyed) return;
        swiper.autoplay.start();
    };

    return (
        <section className="relative py-[40px_60px] xl:py-[55px_80px] 2xl:py-[65px_100px] 3xl:py-[75px_170px] dark:bg-[#101010]">
            <div className="container">
                {/* MOVED: mobile-only button now sits above cmnFlx, so it is always full width
                    and doesn't depend on the flex columns (hidden from lg up) */}
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
                    {/* CHANGED: max-lg:contents -> below lg this wrapper takes no space (the drawer inside is
                        position: fixed). onClick closes the drawer when a menu link is clicked. */}
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

                            {/* ─── Title + banner image ─── */}
                            {title && (
                                <h2 className="cmn_Title mb-4 md:mb-5 lg:mb-6 3xl:mb-8">
                                    {title}
                                </h2>
                            )}

                            {image?.url && (
                                <div className="relative w-full aspect-16/9 sm:aspect-2/1 lg:aspect-1265/433 overflow-hidden rounded-[8px] lg:rounded-[10px]">
                                    <Image
                                        src={image.url}
                                        alt={image.alternativeText || title || "Library"}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 900px"
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            {/* ─── Scrolling notice strip (Swiper marquee, pauses on hover) ─── */}
                            {hasNotice && (
                                <div
                                    className="w-full overflow-hidden bg-[#FFF4E5] dark:bg-white/5 mt-4 md:mt-5 lg:mt-6"
                                    onMouseEnter={pauseNotice}
                                    onMouseLeave={resumeNotice}
                                >
                                    <Swiper
                                        modules={[Autoplay]}
                                        onSwiper={(swiper) => {
                                            noticeSwiperRef.current = swiper;
                                        }}
                                        slidesPerView="auto"
                                        loop
                                        speed={25000}
                                        allowTouchMove={false}
                                        autoplay={{
                                            delay: 0,
                                            disableOnInteraction: false,
                                        }}
                                        className="w-full [--swiper-wrapper-transition-timing-function:linear]"
                                    >
                                        {Array.from({ length: NOTICE_COPIES }).map((_, copy) => (
                                            <SwiperSlide key={copy} className="w-auto! h-auto">
                                                <div
                                                    aria-hidden={copy > 0}
                                                    className="flex items-center py-4 md:py-5 lg:py-7 whitespace-nowrap text-[14px] md:text-[15px] 2xl:text-[17px] leading-none text-black dark:text-white"
                                                >
                                                    {notices.map((notice, i) => (
                                                        <span key={notice.id ?? i} className="flex items-center gap-3 pr-10 lg:pr-16">
                                                            {notice.linkLabel && (
                                                                <Link
                                                                    href={notice.linkUrl || "#!"}
                                                                    tabIndex={copy > 0 ? -1 : undefined}
                                                                    {...externalProps(notice)}
                                                                    className="underline underline-offset-2 hover:text-(--basecolor) transition-colors duration-300"
                                                                >
                                                                    {notice.linkLabel}
                                                                </Link>
                                                            )}
                                                            {notice.text && <span>{notice.text}</span>}
                                                        </span>
                                                    ))}
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            )}

                            {/* ─── Description ─── */}
                            {description?.length > 0 && (
                                <div className="typography mt-5 md:mt-6 lg:mt-8">
                                    {isPlainText ? (
                                        description.map((para, index) => <p key={index}>{para}</p>)
                                    ) : (
                                        <BlocksRenderer content={description} />
                                    )}
                                </div>
                            )}

                            {/* ─── Constituent Libraries ─── */}
                            {hasConstituent && (
                                <div className="mt-8 md:mt-10 lg:mt-12 2xl:mt-16">
                                    {constituent?.title && (
                                        <h2 className="cmn_Title mb-5 md:mb-6 lg:mb-8 2xl:mb-10">
                                            {constituent.title}
                                        </h2>
                                    )}
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-5 2xl:gap-x-16 gap-y-4 md:gap-y-6 lg:gap-y-8 2xl:gap-y-10 p-0 m-0">
                                        {constituent.items.map((item, index) => (
                                            <li key={item?.id ?? index} className="list-none">
                                                <Link
                                                    href={item?.url || "#!"}
                                                    aria-label={item?.label}
                                                    {...externalProps(item)}
                                                    className="group w-full flex items-center justify-between gap-4 border-b border-[#D1D5DB] dark:border-white/20 pb-3 lg:pb-4 text-[15px] md:text-[16px] 2xl:text-[18px] leading-snug text-black dark:text-white transition-colors duration-300 hover:text-(--basecolor) hover:border-(--basecolor)"
                                                >
                                                    <span className="min-w-0 flex-1">{item?.label}</span>
                                                    <ArrowRight
                                                        strokeWidth={2.5}
                                                        className="size-5 lg:size-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                                                    />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}