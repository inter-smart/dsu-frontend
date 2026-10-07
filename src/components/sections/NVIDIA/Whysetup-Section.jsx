"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function WhysetupSection({ data }) {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const syncState = (swiper) => {
        if (!swiper || swiper.destroyed) return;
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const goPrev = () => {
        if (swiperRef.current && !swiperRef.current.destroyed) {
            swiperRef.current.slidePrev();
        }
    };

    const goNext = () => {
        if (swiperRef.current && !swiperRef.current.destroyed) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <section className='relative py-[40px] xl:py-[50px] 2xl:py-[70px] 3xl:py-[80px] z-0'>
            <Image src={data?.media?.url} fill className="absolute top-0 left-0 w-full h-full object-cover -z-1" alt={data?.media?.alternativeText} />
            <div className="container relative z-10">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-3/12">
                        <div className="cmn_Title text-white mb-[20px]">
                            {data.heading}
                        </div>
                        {data?.description && (
                            <div className="text_1 ">
                                {Array.isArray(data?.description) ? (
                                    <BlocksRenderer
                                        content={data?.description}
                                        blocks={{
                                            paragraph: ({ children }) => (
                                                <p className="!my-0   leading-relaxed !text-white">
                                                    {children}
                                                </p>
                                            ),
                                        }}
                                    />
                                ) : (
                                    <p className="!my-0 !text-inherit !text-white leading-relaxed">
                                        {data?.description}
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="w-full lg:w-9/12">
                        <div className="relative w-full group/slider lg:ml-6">
                            {/* Navigation Button - Prev */}
                            <button
                                type="button"
                                aria-label="Previous Slide"
                                onClick={goPrev}
                                disabled={isBeginning}
                                className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] xl:w-[48px] xl:h-[48px] rounded-full bg-white/95 dark:bg-[#1E1E1E]/95 backdrop-blur-md border border-[#2121211a] dark:border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.14)] flex items-center justify-center text-[#212121] dark:text-white hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all duration-300 cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#212121] dark:disabled:hover:bg-[#1E1E1E] dark:disabled:hover:text-white disabled:hidden"
                            >
                                <svg
                                    className="w-[14px] h-[14px] sm:w-[17px] sm:h-[17px]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>

                            {/* Navigation Button - Next */}
                            <button
                                type="button"
                                aria-label="Next Slide"
                                onClick={goNext}
                                disabled={isEnd}
                                className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] xl:w-[48px] xl:h-[48px] rounded-full bg-white/95 dark:bg-[#1E1E1E]/95 backdrop-blur-md border border-[#2121211a] dark:border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.14)] flex items-center justify-center text-[#212121] dark:text-white hover:bg-[#F97316] hover:text-white hover:border-[#F97316] transition-all duration-300 cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#212121] dark:disabled:hover:bg-[#1E1E1E] dark:disabled:hover:text-white disabled:hidden"
                            >
                                <svg
                                    className="w-[14px] h-[14px] sm:w-[17px] sm:h-[17px]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>

                            {/* Swiper Component */}
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                slidesPerView={1}
                                spaceBetween={10}
                                speed={600}
                                grabCursor={true}
                                watchOverflow={true}
                                autoplay={{
                                    delay: 4500,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                breakpoints={{
                                    1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 50,
                                    },
                                    1350: {
                                        slidesPerView: 2,
                                        spaceBetween: 65,
                                    },
                                }}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                    syncState(swiper);
                                }}
                                onSlideChange={(swiper) => {
                                    syncState(swiper);
                                }}
                                className="w-full !px-1 !py-3 overflow-visible"
                            >
                                {data?.cards.map((cards, idx) => (
                                    <SwiperSlide
                                        key={cards.id || idx}
                                        className="!h-auto select-none"
                                    >
                                        <div className="w-full h-full p-[30px] rounded-[10px] bg-[linear-gradient(180deg,rgba(255,248,238,0.90)_0%,rgba(255,243,224,0.90)_100%)]">
                                            {cards.icon && (
                                                <div className="w-[36px] h-[36px] lg:w-[42px] lg:h-[42px] 2xl:w-[52px] 2xl:h-[52px] 3xl:w-[62px] 3xl:h-[62px] mb-[15px]">
                                                    <Image
                                                        src={cards.icon.url}
                                                        width={62}
                                                        height={62}
                                                        className="w-full h-full object-contain"
                                                        alt={cards.icon.alternativeText}
                                                    />
                                                </div>
                                            )}
                                            {cards.title && (
                                                <div className="cmn_Txt text-[#212121] font-semibold mb-[15px]">
                                                    {cards.title}
                                                </div>
                                            )}
                                            {cards?.list?.length > 0 && (
                                                <ul className="space-y-[12px]">
                                                    {cards.list.map((point) => (

                                                        <li key={point.id} className="flex items-center gap-[12px] xl:gap-[14px] group">
                                                            {/* Peach Circle Badge with Orange Checkmark */}
                                                            <span className="w-[23px] h-[23px] xl:w-[25px] xl:h-[25px] rounded-full bg-[#FFEFE2] dark:bg-[#F97316]/20 p-[4px] border border-[#212121]/20 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110">
                                                                <svg className="w-full h-full object-contain" viewBox="0 0 16 16" fill="none"  >
                                                                    <path d="M7.02525 13.4934C6.98486 13.4934 6.94492 13.485 6.90792 13.4688C6.87092 13.4526 6.83766 13.429 6.81025 13.3993L1.01334 7.1287C0.974692 7.08689 0.949073 7.03473 0.939616 6.97859C0.930158 6.92245 0.937271 6.86477 0.960085 6.81262C0.982899 6.76046 1.02042 6.71608 1.06807 6.68492C1.11571 6.65376 1.1714 6.63716 1.22833 6.63716H4.01865C4.06054 6.63716 4.10195 6.64615 4.14007 6.66352C4.1782 6.68089 4.21215 6.70624 4.23965 6.73785L6.177 8.9667C6.38638 8.51914 6.79169 7.77392 7.50294 6.86586C8.55442 5.5234 10.5102 3.54907 13.8564 1.76678C13.921 1.73234 13.9963 1.7234 14.0672 1.74173C14.1382 1.76006 14.1997 1.80432 14.2396 1.86578C14.2795 1.92724 14.2949 2.00142 14.2827 2.07368C14.2706 2.14595 14.2318 2.21103 14.1741 2.2561C14.1613 2.26608 12.8711 3.28207 11.3863 5.14303C10.0198 6.85558 8.20325 9.65585 7.30938 13.271C7.29368 13.3345 7.25715 13.3909 7.20564 13.4312C7.15413 13.4716 7.09059 13.4935 7.02516 13.4935L7.02525 13.4934Z" fill="#212121"     />
                                                                </svg>
                                                            </span>

                                                            <span className="text_1 text-[#4A5565] dark:text-[#D1D5DB] font-normal leading-snug">
                                                                {point.label}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}