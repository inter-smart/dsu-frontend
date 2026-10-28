"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

 
const updateFade = (swiper) => {
    swiper.slides.forEach((slide) => {
        const distance = Math.abs(slide.progress);
        const opacity = distance <= 1 ? 1 : Math.max(0.15, 1 - (distance - 1) * 0.4);
        slide.style.opacity = String(opacity);
    });
};

export default function AwardsSlider({ data }) {
    const { title, items } = data;
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);

    // Loop needs more slides than the widest view (7), so repeat the list when it is short
    const slides = items.length < 14 ? [...items, ...items] : items;

    const navButton =
        "absolute top-1/2 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-(--basecolor) shadow-md transition-colors duration-300 hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2) hover:text-white disabled:opacity-40 lg:size-11 2xl:size-[40px]";

    return (
        <section
            id="awards"
            className="w-full bg-linear-to-b from-[#F1F5FB] to-[#F8FAFD] py-10 lg:py-14 2xl:py-[60px] scroll-mt-24"
        >
            <div className="container">
                <h2 className="mb-6 text-center text-[18px] font-semibold uppercase tracking-[0.02em] text-[#111] lg:mb-8 lg:text-[20px] 2xl:mb-[40px] 2xl:text-[22px]">
                    {title}
                </h2>

                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{ prevEl, nextEl }}
                        loop
                        centeredSlides
                        watchSlidesProgress
                        speed={500}
                        slidesPerView={1.6}
                        spaceBetween={12}
                        breakpoints={{
                            480: { slidesPerView: 2.4, spaceBetween: 14 },
                            768: { slidesPerView: 3.4, spaceBetween: 16 },
                            1024: { slidesPerView: 5, spaceBetween: 18 },
                            1280: { slidesPerView: 7, spaceBetween: 20 },
                        }}
                        onSwiper={updateFade}
                        onProgress={updateFade}
                        onResize={updateFade}
                        onBreakpoint={updateFade}
                        className="[&_.swiper-slide]:transition-opacity [&_.swiper-slide]:duration-300"
                    >
                        {slides.map((item, index) => (
                            <SwiperSlide key={`${item.id}-${index}`} className="!h-auto">
                                <div className="relative aspect-[236/124] w-full overflow-hidden rounded-[10px] border border-black/15 bg-white/70">
                                    <Image
                                        src={item.image.url}
                                        alt={item.image.alternativeText}
                                        fill
                                        sizes="(max-width: 767px) 45vw, (max-width: 1279px) 20vw, 14vw"
                                        className="object-contain p-3 lg:p-4"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Nav buttons (outside Swiper so they stay fixed while slides move) */}
                    <button
                        ref={setPrevEl}
                        type="button"
                        aria-label="Previous award"
                        className={`${navButton} left-0 lg:-left-2 2xl:-left-[26px]`}
                    >
                        <ChevronLeft className="w-5" />
                    </button>
                    <button
                        ref={setNextEl}
                        type="button"
                        aria-label="Next award"
                        className={`${navButton} right-0 lg:-right-2 2xl:-right-[26px]`}
                    >
                        <ChevronRight className="w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}