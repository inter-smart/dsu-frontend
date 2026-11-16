"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function AICentres({ data }) {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    if (!data) return null;

    const items = Array.isArray(data?.items) ? data.items : [];

    // same card for the slider and the grid
    const renderCard = (item) => (
        <Link
            href={item?.link || "#!"}
            {...(item?.isExternal && { target: "_blank", rel: "noopener noreferrer" })}
            aria-label={[item?.prefix, item?.title].filter(Boolean).join(" ")}
            className="group relative block w-full aspect-[563/500] overflow-hidden rounded-[6px] bg-[#1f2937]"
        >
            {item?.image?.url && (
                <Image
                    src={item.image.url}
                    alt={item.image.alternativeText || item?.title || "Centre"}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 33vw"
                    draggable={false}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
            )}

            {/* bottom gradient so the text stays readable on any image */}
            <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-black/90 via-black/50 to-transparent"
            />

            {/* text (bottom left) + arrow button (bottom right) */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-[14px] px-[18px] pb-[18px] xl:px-[22px] xl:pb-[22px] 2xl:px-[24px] 2xl:pb-[26px]">
                <div className="min-w-0 text-white">
                    {item?.prefix && (
                        <p className="text-[14px] xl:text-[17px] 2xl:text-[20px] text-white leading-[1.3] font-normal">
                            {item.prefix}
                        </p>
                    )}
                    {item?.title && (
                        <h3 className="mt-[2px] text-[20px] xl:text-[24px] 2xl:text-[28px] font-bold leading-[1.2]">
                            {item.title}
                        </h3>
                    )}
                </div>

                <span
                    aria-hidden="true"
                    className="shrink-0 size-[42px] xl:size-[52px] 2xl:size-[64px] rounded-full border border-[#F97316] flex items-center justify-center text-white transition-colors duration-300 group-hover:bg-linear-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316] group-hover:border-transparent"
                >
                    <svg
                        viewBox="0 0 14 24"
                        fill="none"
                        className="h-[16px] xl:h-[20px] 2xl:h-[24px] w-auto transition-transform duration-300 group-hover:translate-x-[2px]"
                    >
                        <path
                            d="M2 1l10 11L2 23"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </div>
        </Link>
    );

    return (
        <section className="relative py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[100px] bg-linear-to-b from-[#F0F5FF] to-[#F6F9FC] dark:from-[#0f1011] dark:to-[#0f1011] transition-colors duration-300">
            <div className="container">

                {/* Heading (left) + paragraph (right) */}
                {(data?.heading || data?.description) && (
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[15px] lg:gap-[40px]">
                        {data?.heading && (
                            <h2 className="cmn_Title font-bold leading-[1.1] text-[#212121] dark:text-white whitespace-pre-line">
                                {data.heading}
                            </h2>
                        )}
                        {data?.description && (
                            <p className="text_1 leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] lg:w-[48%] xl:w-[45%] 2xl:w-[44%] shrink-0">
                                {data.description}
                            </p>
                        )}
                    </div>
                )}

                {items.length > 0 && (
                    <>
                        {/* Mobile: slider with a peek of the next card + dots */}
                        <div className="md:hidden mt-[25px]">
                            <Swiper
                                grabCursor
                                slidesPerView={1.12}
                                spaceBetween={14}
                                breakpoints={{ 480: { slidesPerView: 1.6, spaceBetween: 16 } }}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                                className="w-full"
                            >
                                {items.map((item, index) => (
                                    <SwiperSlide key={item?.id ?? index} className="!h-auto">
                                        {renderCard(item)}
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {items.length > 1 && (
                                <div className="mt-[20px] flex items-center justify-center gap-[8px]">
                                    {items.map((item, index) => (
                                        <button
                                            key={item?.id ?? index}
                                            type="button"
                                            aria-label={`Go to centre ${index + 1}`}
                                            aria-current={index === activeIndex}
                                            onClick={() => swiperRef.current?.slideTo(index)}
                                            className={
                                                index === activeIndex
                                                    ? "h-[8px] w-[24px] rounded-full bg-[#F97316] transition-all duration-300"
                                                    : "h-[8px] w-[8px] rounded-full bg-[#F97316]/30 transition-all duration-300"
                                            }
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* md and up: grid (2 columns from md, 3 from lg) */}
                        <ul className="hidden md:grid list-none p-0 m-0 mt-[35px] xl:mt-[60px] grid-cols-2 lg:grid-cols-3 gap-[16px] xl:gap-[19px]">
                            {items.map((item, index) => (
                                <li key={item?.id ?? index}>{renderCard(item)}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </section>
    );
}