"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Menu, Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import LibrarySidebar from "./LibrarySidebar";

const PAGE_SIZE = 9;

const getYoutubeId = (url = "") => {
    const m = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    return m ? m[1] : null;
};

/* the picture shown in the grid / slider for each type */
function Thumb({ item }) {
    const alt = item.alt || item.caption || "Gallery item";

    if (item.type === "youtube") {
        const id = getYoutubeId(item.src);
        const thumb = item.thumb || (id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "");
        // eslint-disable-next-line @next/next/no-img-element
        return <img src={thumb} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />;
    }

    if (item.type === "video") {
        return item.thumb ? (
            <Image src={item.thumb} alt={alt} fill sizes="(max-width: 768px) 90vw, 420px" className="object-cover" />
        ) : (
            // no poster given: use the first frame of the video
            <video
                src={`${item.src}#t=0.1`}
                preload="metadata"
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            />
        );
    }

    return <Image src={item.src} alt={alt} fill sizes="(max-width: 768px) 90vw, 420px" className="object-cover" />;
}

/* one clickable tile, Fancybox picks it up through the data attributes */
function GalleryItem({ item }) {
    const isMedia = item.type === "video" || item.type === "youtube";
    return (
        <a
            href={item.src}
            data-fancybox="library-gallery"
            data-caption={item.caption || ""}
            {...(item.type === "video" ? { "data-type": "html5video" } : {})}
            aria-label={item.caption || item.alt || "Open gallery item"}
            className="group relative block aspect-411/271 w-full overflow-hidden rounded-[6px] lg:rounded-[8px]"
        >
            <Thumb item={item} />
            <span className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
            {isMedia && (
                <span className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-(--basecolor) shadow-md transition-transform duration-300 group-hover:scale-110 lg:size-14">
                    <Play className="ml-0.5 size-5 fill-current lg:size-6" />
                </span>
            )}
        </a>
    );
}

/* true below the md breakpoint (768px) */
function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia("(max-width: 767px)");
        const update = () => setIsMobile(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);
    return isMobile;
}

export default function GalleryLibrary({ data, menu }) {
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const [visible, setVisible] = useState(PAGE_SIZE);
    const wrapRef = useRef(null);
    const isMobile = useIsMobile();

    const { title, items = [] } = data || {};
    const hasMore = visible < items.length;

    // one Fancybox for the wrapper. It listens for clicks, so grid <-> slider switches and Load More need no re-bind
    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;
        Fancybox.bind(el, "[data-fancybox]", {
            Thumbs: { type: "classic" },
        });
        return () => {
            Fancybox.unbind(el);
            Fancybox.close();
        };
    }, []);

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

                            <div ref={wrapRef}>
                                {items.length > 0 && !isMobile && (
                                    <>
                                        {/* ─── Desktop / tablet: grid + Load More ─── */}
                                        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4 2xl:gap-[18px]">
                                            {items.slice(0, visible).map((item, i) => (
                                                <GalleryItem key={item?.id ?? i} item={item} />
                                            ))}
                                        </div>

                                        {hasMore && (
                                            <div className="mt-8 text-center lg:mt-10 2xl:mt-12">
                                                <button
                                                    type="button"
                                                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                                                    className="cursor-pointer text-[15px] font-medium text-[#F97B22] transition-opacity duration-300 hover:opacity-75 2xl:text-[17px]"
                                                >
                                                    Load More &gt;&gt;
                                                </button>
                                            </div>
                                        )}
                                    </>
                                )}

                                {items.length > 0 && isMobile && (
                                    /* ─── Mobile: Swiper with arrows + dots ─── */
                                    <div className="relative [--swiper-pagination-color:var(--basecolor)] [--swiper-pagination-bullet-inactive-color:#9CA3AF] [--swiper-pagination-bullet-inactive-opacity:0.5]">
                                        <Swiper
                                            modules={[Navigation, Pagination]}
                                            slidesPerView={1}
                                            spaceBetween={12}
                                            navigation={{
                                                prevEl: ".gallery-prev",
                                                nextEl: ".gallery-next",
                                            }}
                                            pagination={{
                                                el: ".gallery-dots",
                                                clickable: true,
                                                // keeps only ~5 dots on screen however many items there are
                                                dynamicBullets: true,
                                                dynamicMainBullets: 5,
                                            }}
                                            className="w-full"
                                        >
                                            {items.map((item, i) => (
                                                <SwiperSlide key={item?.id ?? i}>
                                                    <GalleryItem item={item} />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>

                                        <button
                                            type="button"
                                            aria-label="Previous"
                                            className="gallery-prev absolute left-2 top-[calc(50%-14px)] z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black shadow-md transition-opacity duration-300 disabled:opacity-40 swiper-button-disabled:opacity-40"
                                        >
                                            <ChevronLeft className="size-5" />
                                        </button>
                                        <button
                                            type="button"
                                            aria-label="Next"
                                            className="gallery-next absolute right-2 top-[calc(50%-14px)] z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black shadow-md transition-opacity duration-300 disabled:opacity-40 swiper-button-disabled:opacity-40"
                                        >
                                            <ChevronRight className="size-5" />
                                        </button>

                                        {/* dots sit under the slider, not on top of the photo */}
                                        <div className="gallery-dots mx-auto mt-4 flex !w-[80px] justify-center !static" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}