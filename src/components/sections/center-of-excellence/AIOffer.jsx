"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function AIOffer({ data }) {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    if (!data) return null;

    const items = Array.isArray(data?.items) ? data.items : [];

    // same card for the slider and the grid
    const renderCard = (item) => (
        <div className="h-full rounded-[8px] border border-black/10 dark:border-white/10 bg-white dark:bg-[#18191B] shadow-[0_1px_3px_rgba(0,0,0,0.04)] px-[22px] py-[28px] xl:px-[32px] xl:py-[45px] 2xl:px-[40px] 2xl:py-[60px] 2xl:min-h-[268px]">
            {item?.title && (
                <h3 className="text-[18px] xl:text-[20px] 2xl:text-[24px] font-medium leading-[1.3] text-[#212121] dark:text-white">
                    {item.title}
                </h3>
            )}
            {item?.description && (
                <p className="text_1 2xl:text-[20px] mt-[10px] xl:mt-[14px] leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF]">
                    {item.description}
                </p>
            )}
        </div>
    );

    return (
        <section className="relative py-[40px] xl:py-[60px] 2xl:py-[80px] 3xl:py-[100px] bg-white dark:bg-[#101010] transition-colors duration-300">
            <div className="container">
                {data?.heading && (
                    <h2 className="cmn_Title font-bold leading-[1.1] text-[#212121] dark:text-white">
                        {data.heading}
                    </h2>
                )}
                {data?.description && (
                    <p className="text_1 2xl:text-[20px] mt-[12px] xl:mt-[18px] leading-[1.6] text-[#4A5565] dark:text-[#9CA3AF]">
                        {data.description}
                    </p>
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
                                            aria-label={`Go to card ${index + 1}`}
                                            aria-current={index === activeIndex}
                                            onClick={() => swiperRef.current?.slideTo(index)}
                                            className={
                                                index === activeIndex
                                                    ? "h-[8px] w-[24px] rounded-full bg-[#F15A24] transition-all duration-300"
                                                    : "h-[8px] w-[8px] rounded-full bg-[#F15A24]/30 transition-all duration-300"
                                            }
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* md and up: grid */}
                        <ul className="hidden md:grid list-none p-0 m-0 mt-[30px] xl:mt-[45px] grid-cols-2 lg:grid-cols-3 gap-[18px] xl:gap-[22px]">
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