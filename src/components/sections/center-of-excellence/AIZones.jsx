"use client";
import { withLineBreaks, plainTitle } from "@/lib/line-breaks";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function AIZones({ data }) {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    if (!data) return null;

    const items = Array.isArray(data?.items) ? data.items : [];
    // two columns on desktop, filled top to bottom: 5 items -> 3 left, 2 right
    const rowsPerColumn = Math.ceil(items.length / 2);

    // same item for the slider and the grid
    const renderItem = (item) => (
        <div className="relative h-full pl-[20px] xl:pl-[25px] py-[2px] before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[4px] before:bg-linear-to-b before:from-[#DC2626] before:to-[#F97316]">
            {item?.title && (
                <h3 className="text-[18px] xl:text-[22px] 2xl:text-[26px] font-medium leading-[1.3] text-[#212121] dark:text-white">
                    {withLineBreaks(item.title)}
                </h3>
            )}
            {item?.description && (
                <p className="text_1 mt-[6px] xl:mt-[8px] leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] 2xl:max-w-[92%]">
                    {item.description}
                </p>
            )}
        </div>
    );

    return (
        <section className="relative py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[100px] bg-white dark:bg-[#101010] transition-colors duration-300">
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
                            <p className="text_1 leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF] lg:w-[48%] xl:w-[45%] 2xl:w-[44%] shrink-0">
                                {data.description}
                            </p>
                        )}
                    </div>
                )}

                {items.length > 0 && (
                    <>
                        {/* Mobile: slider with a peek of the next item + dots */}
                        <div className="md:hidden mt-[25px]">
                            <Swiper
                                grabCursor
                                slidesPerView={1.12}
                                spaceBetween={20}
                                breakpoints={{ 480: { slidesPerView: 1.6, spaceBetween: 24 } }}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                                className="w-full"
                            >
                                {items.map((item, index) => (
                                    <SwiperSlide key={item?.id ?? index} className="!h-auto">
                                        {renderItem(item)}
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {items.length > 1 && (
                                <div className="mt-[20px] flex items-center justify-center gap-[8px]">
                                    {items.map((item, index) => (
                                        <button
                                            key={item?.id ?? index}
                                            type="button"
                                            aria-label={`Go to zone ${index + 1}`}
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

                        {/* md and up: two columns, filled column by column */}
                        <ul
                            className="hidden md:grid list-none p-0 m-0 mt-[35px] xl:mt-[60px] grid-flow-col grid-cols-2 gap-x-[40px] xl:gap-x-[80px] gap-y-[30px] xl:gap-y-[40px]"
                            style={{ gridTemplateRows: `repeat(${rowsPerColumn}, auto)` }}
                        >
                            {items.map((item, index) => (
                                <li key={item?.id ?? index}>{renderItem(item)}</li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </section>
    );
}