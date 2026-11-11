"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";


const navBtnClass =
    "flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white shadow-[0_4px_14px_rgba(220,38,38,0.3)] transition-all duration-300 active:scale-95 [&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:pointer-events-none [&.swiper-button-disabled]:shadow-none";

const tileClass =
    "group relative block w-full aspect-[563/408] overflow-hidden rounded-[8px] xl:rounded-[10px] bg-[#f3f4f6] dark:bg-[#18191B]";


export default function InnovationGallery({ data }) {
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);

    if (!data) return null;

    const images = (Array.isArray(data?.images) ? data.images : []).filter(
        (item) => item?.url,
    );
    if (images.length === 0) return null;

    const renderTile = (item, idx) => (
        <div className={tileClass}>
            <Image
                src={item.url}
                alt={item.alternativeText || `Gallery image ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
        </div>
    );

    return (
        <section className="relative py-[40px] xl:py-[55px] 2xl:py-[85px] 3xl:py-[100px] bg-white dark:bg-[#101010] transition-colors duration-300">
            <div className="container">

                {/* Mobile: Swiper slider (below md) */}
                <div className="md:hidden">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{ prevEl, nextEl }}
                        slidesPerView={1.1}
                        spaceBetween={14}
                        grabCursor={true}
                        breakpoints={{
                            480: { slidesPerView: 1.4, spaceBetween: 16 },
                            640: { slidesPerView: 1.7, spaceBetween: 18 },
                        }}
                        className="!w-full"
                    >
                        {images.map((item, idx) => (
                            <SwiperSlide key={item.id ?? idx} className="!h-auto">
                                {renderTile(item, idx)}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* prev / next buttons */}
                    <div className="mt-[20px] flex items-center justify-center gap-[14px]">
                        <button
                            type="button"
                            ref={setPrevEl}
                            aria-label="Previous"
                            className={navBtnClass}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-[45%] w-[45%]"
                                aria-hidden="true"
                            >
                                <path d="M15 4l-8 8 8 8" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            ref={setNextEl}
                            aria-label="Next"
                            className={navBtnClass}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-[45%] w-[45%]"
                                aria-hidden="true"
                            >
                                <path d="M9 4l8 8-8 8" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* md and up: grid */}
                <div
                    data-reveal-stagger
                    className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[20px] lg:gap-y-[32px] 3xl:gap-x-[24px] 3xl:gap-y-[36px]"
                >
                    {images.map((item, idx) => (
                        <div key={item.id ?? idx}>{renderTile(item, idx)}</div>
                    ))}
                </div>

            </div>
        </section>
    );
}