"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const PlayIcon = () => (
    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" >
        <path
            d="M21.5 0C9.62588 0 0 9.62588 0 21.5C0 33.3741 9.62588 43 21.5 43C33.3741 43 43 33.3741 43 21.5C42.9874 9.63119 33.3689 0.0126877 21.5 0ZM30.5545 22.185C30.4057 22.4836 30.1637 22.7257 29.865 22.8745V22.8821L17.5793 29.025C16.8206 29.4041 15.8983 29.0965 15.5191 28.3377C15.4113 28.1221 15.3558 27.884 15.3571 27.6429V15.3572C15.3567 14.509 16.0439 13.8212 16.8921 13.8207C17.1307 13.8206 17.366 13.8761 17.5793 13.9827L29.865 20.1256C30.6241 20.5039 30.9329 21.4259 30.5545 22.185Z"
            fill="white"
            fillOpacity="0.85"
        />
    </svg>
);

const arrowBtn =
    "w-[26px] h-[26px] xl:w-[30px] xl:h-[30px] rounded-[4px] bg-white dark:bg-[#18191B] border border-[#F97316]/40 text-[#F97316] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-[#DC2626] hover:to-[#F97316] hover:text-white hover:border-transparent disabled:opacity-30 disabled:cursor-not-allowed";

 
function TabSlider({ items, onOpenVideo }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    if (!items?.length) {
        return (
            <p className="text_1 text-[#4A5565] dark:text-[#9CA3AF] py-[20px]">
                No items available.
            </p>
        );
    }

    return (
        <div className="relative"> 
            <div className="absolute right-0 -top-[52px] xl:-top-[60px] flex items-center gap-[8px]">
                <button ref={prevRef} type="button" aria-label="Previous" className={arrowBtn}>
                    <svg className="w-[12px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button ref={nextRef} type="button" aria-label="Next" className={arrowBtn}>
                    <svg className="w-[12px] h-[12px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <Swiper
                modules={[Navigation]}
                slidesPerView={1.1}
                spaceBetween={10}
                speed={500}
                grabCursor
                watchOverflow
                observer
                observeParents
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 12 },
                    1024: { slidesPerView: 3, spaceBetween: 14 },
                }}
                className="w-full"
            >
                {items.map((item) => {
                    const isVideo = item.type === "video";
                    const src = isVideo ? item.media?.thumbnail : item.media?.url;

                    return (
                        <SwiperSlide key={item.id} className="!h-auto">
                            <div
                                onClick={() => isVideo && item.media?.url && onOpenVideo(item.media)}
                                className={`group relative w-full aspect-[16/9] rounded-[6px] xl:rounded-[8px] overflow-hidden bg-neutral-100 dark:bg-neutral-800 ${
                                    isVideo ? "cursor-pointer" : ""
                                }`}
                            >
                                {src && (
                                    <Image
                                        src={src}
                                        alt={item.media?.alternativeText || item.title || "Campus drive"}
                                        fill
                                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}

                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

                                {isVideo && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-[36px] h-[36px] xl:w-[43px] xl:h-[43px] transition-transform duration-300 group-hover:scale-110">
                                            <PlayIcon />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default function CampusDrives({ data }) {
    const [activeVideo, setActiveVideo] = useState(null);

    useEffect(() => {
        if (!activeVideo) return;
        const onKey = (e) => e.key === "Escape" && setActiveVideo(null);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [activeVideo]);

    if (!data?.tabs?.length) return null;

    return (
        <section className="relative bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)] dark:bg-[linear-gradient(135deg,#000_100%,#000_100%)]">
            <div className="container py-[30px] xl:py-[45px] 2xl:py-[60px] 3xl:py-[75px] border-t border-black/10">
                <Tabs defaultValue={String(data.tabs[0].id)} className="w-full">
                  
                    <div className="flex flex-wrap items-center gap-[12px] xl:gap-[20px] mb-[15px] xl:mb-[25px]">
                        <h2 className="cmn_Title dark:text-white !mb-0 max-md:w-full">{data.heading}</h2>
                        <TabsList className="h-auto p-0 bg-transparent rounded-none flex flex-wrap justify-start gap-[8px]">
                            {data.tabs.map((tab) => (
                                <TabsTrigger
                                    key={tab.id}
                                    value={String(tab.id)}
                                    className="text_1 !font-medium text-[#212121] dark:text-white h-[30px] xl:h-[35px] 2xl:h-[36px] 3xl:h-[46px] min-w-[115px] 2xl:min-w-[125px] 3xl:min-w-[135px] px-[18px] xl:px-[24px] 2xl:px-[35px] flex-none rounded-[4px] lg:rounded-[10px] border border-[#F3D8CC] dark:border-white/10 bg-white dark:bg-[#18191B] transition-all duration-300 hover:bg-[#F97316]/10 data-active:border-transparent data-active:bg-gradient-to-r data-active:from-[#DC2626] data-active:to-[#F97316] data-active:!text-white data-active:shadow-none data-[state=active]:border-transparent data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#DC2626] data-[state=active]:to-[#F97316] data-[state=active]:!text-white data-[state=active]:shadow-none"
                                >
                                    {tab.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {data.tabs.map((tab) => (
                        <TabsContent key={tab.id} value={String(tab.id)} className="mt-0">
                            <TabSlider items={tab.items} onOpenVideo={setActiveVideo} />
                        </TabsContent>
                    ))}
                </Tabs>
            </div>

          
            {activeVideo && (
                <div
                    className="fixed inset-0 z-[999999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setActiveVideo(null)}
                >
                    <div
                        className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            aria-label="Close modal"
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all cursor-pointer"
                        >
                            ✕
                        </button>
                        <div className="aspect-video w-full">
                            <video src={activeVideo.url} controls autoPlay className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}