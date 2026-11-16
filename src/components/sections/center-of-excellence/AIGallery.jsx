"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function AIGallery({ data }) {
    const swiperRef = useRef(null);
    // locked = every image fits on screen, so the controls hide
    const [locked, setLocked] = useState(false);
    const [snap, setSnap] = useState({ count: 0, active: 0 });

    if (!data) return null;

    const items = Array.isArray(data?.items) ? data.items : [];

    const syncState = (swiper) => {
        setLocked(swiper.isLocked);
        setSnap({ count: swiper.snapGrid.length, active: swiper.snapIndex });
    };

    const navButton =
        "size-[30px] xl:size-[44px] rounded-full border p-1 border-black/20 flex items-center justify-center text-[#F15A24] transition-colors duration-300 hover:bg-[#F15A24] hover:text-white disabled:opacity-40 disabled:pointer-events-none";

    return (
        <section className="relative py-[20px_40px] xl:py-[20px_60px] 2xl:py-[20px_80px] 3xl:py-[20px_100px] bg-white dark:bg-[#101010] transition-colors duration-300">
            <div className="container">
                {/* hairline above the heading, as in the design */}
                <div className="border-t border-black/10 dark:border-white/10 pt-[35px] xl:pt-[60px]">
                    {data?.heading && (
                        <h2 className="cmn_Title font-bold leading-[1.1] text-center text-[#212121] dark:text-white">
                            {data.heading}
                        </h2>
                    )}

                    {items.length > 0 && (
                        <div className="mt-[25px] xl:mt-[45px]">
                            <Swiper
                                grabCursor
                                watchOverflow
                                slidesPerView={1.12}
                                spaceBetween={14}
                                breakpoints={{
                                    480: { slidesPerView: 1.6, spaceBetween: 16 },
                                    768: { slidesPerView: 2, spaceBetween: 18 },
                                    1024: { slidesPerView: 3, spaceBetween: 20 },
                                }}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                    syncState(swiper);
                                }}
                                onSlideChange={syncState}
                                onResize={syncState}
                                onBreakpoint={syncState}
                                onLock={syncState}
                                onUnlock={syncState}
                                className="w-full"
                            >
                                {items.map((item, index) => (
                                    <SwiperSlide key={item?.id ?? index} className="!h-auto">
                                        <div className="group relative w-full aspect-[563/461] overflow-hidden rounded-[8px] bg-[#e5e7eb] dark:bg-[#18191B]">
                                            {item?.image?.url && (
                                                <Image
                                                    src={item.image.url}
                                                    alt={item.image.alternativeText || `Gallery image ${index + 1}`}
                                                    fill
                                                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                                                    draggable={false}
                                                    className="object-cover select-none transition-transform duration-700 ease-out group-hover:scale-105"
                                                />
                                            )}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* prev / dots / next, hidden when every image fits */}
                            {!locked && (
                                <div className="mt-[25px] xl:mt-[35px] flex items-center justify-center gap-[16px]">
                                    <button
                                        type="button"
                                        aria-label="Previous images"
                                        disabled={snap.active === 0}
                                        onClick={() => swiperRef.current?.slidePrev()}
                                        className={navButton}
                                    >
                                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden="true">
                                            <path d="M7 1L1 7l6 6" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                    <div className="flex items-center gap-[8px]">
                                        {Array.from({ length: snap.count }).map((_, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                aria-label={`Go to image ${index + 1}`}
                                                aria-current={index === snap.active}
                                                onClick={() => swiperRef.current?.slideTo(index)}
                                                className={
                                                    index === snap.active
                                                        ? "h-[8px] w-[24px] rounded-full bg-[#F97316] transition-all duration-300"
                                                        : "h-[8px] w-[8px] rounded-full bg-[#F97316]/30 transition-all duration-300"
                                                }
                                            />
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        aria-label="Next images"
                                        disabled={snap.active >= snap.count - 1}
                                        onClick={() => swiperRef.current?.slideNext()}
                                        className={navButton}
                                    >
                                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden="true">
                                            <path d="M1 1l6 6-6 6" stroke="rgba(0,0,0,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}