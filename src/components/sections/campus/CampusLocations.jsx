"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import "swiper/css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { withLineBreaks } from "@/lib/line-breaks";

// Circle buttons inside the slider below 2xl, plain chevrons outside from 2xl
const NAV_BTN =
    "absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center cursor-pointer text-[#212121] dark:text-white transition-colors duration-300 hover:text-(--basecolor) " +
    "w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white/85 dark:bg-black/50 backdrop-blur-md border border-black/10 dark:border-white/20 shadow-md " +
    "2xl:w-6 2xl:h-12 2xl:rounded-none 2xl:bg-transparent 2xl:dark:bg-transparent 2xl:backdrop-blur-none 2xl:border-0 2xl:shadow-none " +
    "[&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:pointer-events-none";

// Mosaic: row 1 = 2 tiles, row 2 = 3 tiles (12 column grid)
const TILE_SPAN = [
    "col-span-6 sm:col-span-5",
    "col-span-6 sm:col-span-7",
    "col-span-6 sm:col-span-4",
    "col-span-6 sm:col-span-5",
    "col-span-12 sm:col-span-3",
];

const TILE_HEIGHT = [
    "h-35 sm:h-60 lg:h-[300px] 2xl:h-[364px]",
    "h-35 sm:h-60 lg:h-[300px] 2xl:h-[364px]",
    "h-35 sm:h-72 lg:h-[380px] 2xl:h-[455px]",
    "h-35 sm:h-72 lg:h-[380px] 2xl:h-[455px]",
    "h-35 sm:h-72 lg:h-[380px] 2xl:h-[455px]",
];

function Chevron({ dir = "left", className }) {
    return (
        <svg viewBox="0 0 20 40" fill="none" className={className} aria-hidden="true">
            <path
                d={dir === "left" ? "M17 2 3 20l14 18" : "M3 2l14 18L3 38"}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function DotsIcon({ className }) {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" className={className} aria-hidden="true">
            <circle cx="9" cy="3" r="1.3" opacity="0.6" />
            <circle cx="3" cy="9" r="1.3" opacity="0.6" />
            <circle cx="9" cy="9" r="1.3" />
            <circle cx="15" cy="9" r="1.3" opacity="0.6" />
            <circle cx="9" cy="15" r="1.3" opacity="0.6" />
            <circle cx="3" cy="3" r="0.9" opacity="0.35" />
            <circle cx="15" cy="15" r="0.9" opacity="0.35" />
        </svg>
    );
}

function PlayIcon({ className }) {
    return (
        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
            <path
                d="M21.5 0C9.62588 0 0 9.62588 0 21.5C0 33.3741 9.62588 43 21.5 43C33.3741 43 43 33.3741 43 21.5C42.9874 9.63119 33.3689 0.0126877 21.5 0ZM30.5545 22.185C30.4057 22.4836 30.1637 22.7257 29.865 22.8745V22.8821L17.5793 29.025C16.8206 29.4041 15.8983 29.0965 15.5191 28.3377C15.4113 28.1221 15.3558 27.884 15.3571 27.6429V15.3572C15.3567 14.509 16.0439 13.8212 16.8921 13.8207C17.1307 13.8206 17.366 13.8761 17.5793 13.9827L29.865 20.1256C30.6241 20.5039 30.9329 21.4259 30.5545 22.185Z"
                fill="white"
                fillOpacity="0.8"
            />
        </svg>
    );
}

// One tile: image / video / youtube, opens in Fancybox
function MediaTile({ item, galleryId, index }) {
    const type = item?.type || "image";
    const isImage = type === "image";
    const isVideo = type === "video";
    const href = item?.media?.url || item?.thumbnail?.url;
    const thumbUrl = item?.thumbnail?.url || (isImage ? item?.media?.url : null);

    if (!href || !thumbUrl) return null;

    return (
        <a
            href={href}
            data-fancybox={galleryId}
            data-type={isVideo ? "html5video" : undefined}
            data-thumb-src={thumbUrl}
            data-caption={item?.caption || item?.title || undefined}
            aria-label={item?.title || (isImage ? "View image" : "Play video")}
            className={cn(
                "group relative block w-full overflow-hidden rounded-[5px] sm:rounded-[8px] 2xl:rounded-[10px]",
                TILE_SPAN[index] || "col-span-4 sm:col-span-4",
                TILE_HEIGHT[index] || TILE_HEIGHT[2],
            )}
        >
            <Image
                src={thumbUrl}
                alt={item?.thumbnail?.alternativeText || ""}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />

            <span
                className={cn(
                    "absolute inset-0 transition-colors duration-300",
                    isImage ? "bg-black/0 group-hover:bg-black/10" : "bg-black/10 group-hover:bg-black/25",
                )}
            />

            {item?.title && (
                <span className="absolute inset-x-0 bottom-0 pt-16 px-4 lg:px-5 2xl:px-6 pb-4 lg:pb-5 2xl:pb-6 bg-linear-to-t from-black/75 via-black/30 to-transparent">
                    <span className="block text-base lg:text-lg 2xl:text-2xl leading-tight font-bold text-white">
                        {withLineBreaks(item.title)}
                    </span>
                </span>
            )}

            {!isImage && (
                <span className="absolute inset-0 flex items-center justify-center">
                    <PlayIcon className="w-10 lg:w-[43px] 2xl:w-14 h-auto aspect-square transition-transform duration-300 group-hover:scale-110" />
                </span>
            )}
        </a>
    );
}

// Slider + Fancybox for one tab
function LocationGallery({ tab }) {
    const galleryRef = useRef(null);
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);
    const [locked, setLocked] = useState(false);

    const slides = tab?.slides || [];
    const galleryId = `campus-location-${tab?.id}`;

    // Fancybox (image / html5 video / youtube)
    useEffect(() => {
        const el = galleryRef.current;
        if (!el) return;

        Fancybox.bind(el, "[data-fancybox]", { Hash: false });

        return () => {
            Fancybox.unbind(el);
            Fancybox.close();
        };
    }, [slides.length]);

    return (
        <div ref={galleryRef} className="relative w-full h-auto">
            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={16}
                rewind
                navigation={{ prevEl, nextEl }}
                watchOverflow
                onSwiper={(swiper) => setLocked(swiper.isLocked)}
                onLock={() => setLocked(true)}
                onUnlock={() => setLocked(false)}
                className="w-full"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={slide?.id || i}>
                        <div className="grid grid-cols-12 gap-2 sm:gap-3">
                            {slide?.items?.slice(0, 5).map((item, idx) => (
                                <MediaTile
                                    key={item?.id || idx}
                                    item={item}
                                    index={idx}
                                    galleryId={galleryId}
                                />
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Nav buttons (hidden when there is only one slide) */}
            <button
                type="button"
                ref={setPrevEl}
                aria-label="Previous"
                className={cn(NAV_BTN, "left-2 lg:left-3 2xl:-left-10", locked && "hidden")}
            >
                <Chevron dir="left" className="w-2.5 h-5 lg:w-3 lg:h-6 2xl:w-5 2xl:h-9.5" />
            </button>
            <button
                type="button"
                ref={setNextEl}
                aria-label="Next"
                className={cn(NAV_BTN, "right-2 lg:right-3 2xl:-right-10", locked && "hidden")}
            >
                <Chevron dir="right" className="w-2.5 h-5 lg:w-3 lg:h-6 2xl:w-5 2xl:h-9.5" />
            </button>
        </div>
    );
}

export default function CampusLocations({ data }) {
    const tabs = data?.tabs || [];
    const [active, setActive] = useState(String(tabs[0]?.id ?? ""));

    if (!tabs.length) return null;

    return (
        <section className="w-full h-auto py-10 sm:py-12 lg:py-14 2xl:py-20 3xl:py-24 bg-white dark:bg-[#0F1012]">
            <div className="container">
                <Tabs defaultValue={String(tabs[0].id)} onValueChange={setActive} className="w-full gap-0">
                    {/* Header: text left, tab buttons right */}
                    <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 2xl:gap-15 lg:items-end mb-6 sm:mb-8 lg:mb-10 2xl:mb-12">
                        <div className="w-full h-auto">
                            {data?.eyebrow && (
                                <div className="flex items-center gap-2 mb-1.5 lg:mb-2">
                                    <span className="w-5 lg:w-6.5 h-0.5 bg-(--basecolor)" />
                                    <span className="text-xs sm:text-sm lg:text-base 2xl:text-lg leading-none font-normal uppercase tracking-wide bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent">
                                        {data.eyebrow}
                                    </span>
                                </div>
                            )}
                            <h2 className="cmn_Title lg:max-w-[55%] xl:max-w-[50%]">{data?.title}</h2>
                            {data?.description && (
                                <p className="text_1 mt-3 lg:mt-4 leading-[1.6] font-normal text-[#4A5565] dark:text-[#9CA3AF]">
                                    {withLineBreaks(data.description)}
                                </p>
                            )}
                        </div>

                        <TabsList className="flex! h-auto! w-full flex-col sm:flex-row gap-3 lg:gap-5 rounded-none bg-transparent p-0">
                            {tabs.map((tab) => {
                                const isActive = active === String(tab.id);

                                return (
                                    <TabsTrigger
                                        key={tab.id}
                                        value={String(tab.id)}
                                        className={cn(
                                            "h-11! lg:h-12! 2xl:h-12.5! w-full flex-none sm:flex-1 cursor-pointer rounded-[3px] border px-4 text-base lg:text-lg 2xl:text-[22px] leading-none font-semibold shadow-none transition-all duration-300",
                                            isActive
                                                ? "border-transparent! bg-linear-to-r! from-(--basecolor) to-(--basecolor2) text-white!"
                                                : "border-(--basecolor)! bg-white! text-[#212121]! hover:bg-(--basecolor)/5! dark:bg-transparent! dark:text-white!",
                                        )}
                                    >
                                        {withLineBreaks(tab.label)}
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                    </div>

                    {/* One gallery per tab */}
                    {tabs.map((tab) => (
                        <TabsContent key={tab.id} value={String(tab.id)} className="mt-0">
                            <LocationGallery tab={tab} />
                        </TabsContent>
                    ))}
                </Tabs>

                {data?.button?.label && (
                    <div className="w-full flex justify-center mt-8 lg:mt-10 2xl:mt-14">
                        <Link
                            href={data.button.href || "/"}
                            className="group inline-flex items-center gap-3 h-11 lg:h-12 2xl:h-12.5 px-5 rounded-[3px] 2xl:rounded-[4px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-white text-base 2xl:text-lg leading-none font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
                        >
                            {withLineBreaks(data.button.label)}
                            <DotsIcon className="w-4 h-4 2xl:w-4.5 2xl:h-4.5 transition-transform duration-500 group-hover:rotate-90" />
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}