"use client";
import { withLineBreaks, plainTitle } from "@/lib/line-breaks";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function AIApplications({ data }) {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    if (!data) return null;

    const items = Array.isArray(data?.items) ? data.items : [];

    // same card for the slider and the grid
    const renderCard = (item) => (
        <div className="h-full border-l-[4px] border-[#F97316] bg-white dark:bg-[#18191B] shadow-[0_2px_12px_rgba(0,0,0,0.06)] px-[20px] py-[24px] xl:px-[28px] xl:py-[30px] 2xl:py-[35px]">
            {item?.title && (
                <h3 className="text-[18px] xl:text-[21px] 2xl:text-[24px] font-semibold leading-[1.3] text-[#212121] dark:text-white">
                    {withLineBreaks(item.title)}
                </h3>
            )}
            {item?.description && (
                <p className="!text_1 mt-[8px] xl:mt-[12px] leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF]">
                    {withLineBreaks(item.description)}
                </p>
            )}
        </div>
    );

    return (
        <section className="relative py-[40px] xl:py-[50px] 2xl:py-[60px] 3xl:py-[80px] bg-white dark:bg-[#101010] transition-colors duration-300">
            <div className="container">

                {/* Heading (left) + paragraph (right) */}
                {(data?.heading || data?.description) && (
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[15px] lg:gap-[40px]">
                        {data?.heading && (
                            <h2 className="cmn_Title font-bold leading-[1.1] text-[#212121] dark:text-white whitespace-pre-line">
                                {withLineBreaks(data.heading)}
                            </h2>
                        )}
                        {data?.description && (
                            <p className="!text_1 leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] lg:w-[48%] xl:w-[40%] 2xl:w-[38%] shrink-0">
                                {withLineBreaks(data.description)}
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
                                slidesPerView={1}
                                spaceBetween={14}
                                breakpoints={{ 480: { slidesPerView: 1.6, spaceBetween: 16 } }}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                                // padding keeps the card shadow from being clipped by the slider
                                className="w-full !py-[6px]"
                            >
                                {items.map((item, index) => (
                                    <SwiperSlide key={item?.id ?? index} className="!h-auto">
                                        {renderCard(item)}
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {items.length > 1 && (
                                <div className="mt-[18px] flex items-center justify-center gap-[8px]">
                                    {items.map((item, index) => (
                                        <button
                                            key={item?.id ?? index}
                                            type="button"
                                            aria-label={`Go to card ${index + 1}`}
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

                        {/* md and up: grid (3 columns from lg, last row stays left-aligned) */}
                        <ul className="hidden md:grid list-none p-0 m-0 mt-[30px] xl:mt-[50px] grid-cols-2 lg:grid-cols-3 gap-[18px] xl:gap-[20px]">
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