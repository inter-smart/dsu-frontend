"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const arrowBtn =
    "w-[30px] h-[30px] xl:w-[34px] xl:h-[34px] rounded-full bg-white dark:bg-[#18191B] border border-[#F97316]/40 text-[#F97316] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-[#DC2626] hover:to-[#F97316] hover:text-white hover:border-transparent disabled:opacity-30 disabled:cursor-not-allowed";

export default function PlacementDocuments({ data }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [canSlide, setCanSlide] = useState(false);

    if (!data?.cards?.length) return null;

    return (
        <section className="relative py-[30px] xl:py-[45px] 2xl:py-[60px] 3xl:py-[75px] bg-[linear-gradient(135deg,#EFF6FF_0%,#F9FAFB_100%)] dark:bg-none dark:bg-[#0a0909]">
            <div className="container">
                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={1.05}
                        spaceBetween={12}
                        speed={500}
                        grabCursor
                        watchOverflow
                        observer
                        observeParents
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        onSwiper={(s) => setCanSlide(!s.isLocked)}
                        onResize={(s) => setCanSlide(!s.isLocked)}
                        onBreakpoint={(s) => setCanSlide(!s.isLocked)}
                        onObserverUpdate={(s) => setCanSlide(!s.isLocked)}
                        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                        breakpoints={{
                            768: { slidesPerView: 2, spaceBetween: 16 },
                            1280: { slidesPerView: 2, spaceBetween: 20 },
                        }}
                        className="w-full !py-3"
                    >
                        {data.cards.map((card) => (
                            <SwiperSlide key={card.id} className="!h-auto">
                                <div className="w-full h-full bg-white dark:bg-[#18191B] relative rounded-[8px] border border-transparent dark:border-white/10  p-[20px] xl:p-[25px] 2xl:p-[30px] 3xl:p-[40px] flex items-center gap-[15px] xl:gap-[25px] 2xl:gap-[40px]">
                                    {/* Document icon */}
                                    <div className="shrink-0 max-sm:absolute top-0 bottom-0 right-3 max-sm:opacity-9 sm:relative w-[75px] sm:w-[45px] xl:w-[55px] 2xl:w-[65px] 3xl:w-[100px]">
                                        <svg className="w-full h-full object-cover"  viewBox="0 0 103 116" fill="none"  >
                                            <path d="M75.5488 116H27.4606C22.9106 116 18.5469 113.964 15.3295 110.341C12.1122 106.717 10.3047 101.803 10.3047 96.6787V19.3212C10.3047 14.1969 12.1122 9.2825 15.3295 5.65906C18.5469 2.03563 22.9106 0 27.4606 0L53.6613 0C57.4757 0.0148719 61.1778 1.45566 64.1866 4.09625L86.0741 23.2362C88.1443 25.0372 89.819 27.3503 90.9687 29.9966C92.1185 32.6428 92.7124 35.5514 92.7047 38.4975V96.4975C92.726 99.05 92.2979 101.582 91.4453 103.947C90.5926 106.312 89.3323 108.464 87.7371 110.277C86.1419 112.09 84.2435 113.53 82.1514 114.512C80.0594 115.494 77.8153 116 75.5488 116ZM27.4606 7.72125C24.7289 7.72125 22.1091 8.94339 20.1774 11.1188C18.2458 13.2942 17.1606 16.2447 17.1606 19.3212V96.6787C17.1606 99.7553 18.2458 102.706 20.1774 104.881C22.1091 107.057 24.7289 108.279 27.4606 108.279H75.5488C78.2805 108.279 80.9003 107.057 82.832 104.881C84.7636 102.706 85.8488 99.7553 85.8488 96.6787V38.6787C85.8539 36.9075 85.4964 35.1587 84.8042 33.5681C84.1121 31.9776 83.1037 30.5881 81.8575 29.5075L59.97 10.3312C58.1326 8.71516 55.8638 7.84643 53.5325 7.86625L27.4606 7.72125Z" fill="#4A5565" />
                                            <path d="M68.653 42.5206H34.3411C33.863 42.5729 33.3805 42.5119 32.9246 42.3416C32.4687 42.1714 32.0494 41.8956 31.6938 41.5321C31.3381 41.1685 31.0539 40.7252 30.8594 40.2305C30.6649 39.7359 30.5645 39.2009 30.5645 38.66C30.5645 38.1191 30.6649 37.5841 30.8594 37.0895C31.0539 36.5948 31.3381 36.1515 31.6938 35.7879C32.0494 35.4244 32.4687 35.1486 32.9246 34.9784C33.3805 34.8081 33.863 34.7471 34.3411 34.7994H68.653C69.131 34.7471 69.6135 34.8081 70.0694 34.9784C70.5254 35.1486 70.9446 35.4244 71.3003 35.7879C71.6559 36.1515 71.9401 36.5948 72.1346 37.0895C72.3291 37.5841 72.4296 38.1191 72.4296 38.66C72.4296 39.2009 72.3291 39.7359 72.1346 40.2305C71.9401 40.7252 71.6559 41.1685 71.3003 41.5321C70.9446 41.8956 70.5254 42.1714 70.0694 42.3416C69.6135 42.5119 69.131 42.5729 68.653 42.5206Z" fill="#4A5565" />
                                            <path d="M68.6539 61.8814H34.342C33.4901 61.7883 32.6996 61.3414 32.1243 60.6277C31.5491 59.914 31.2305 58.9846 31.2305 58.0208C31.2305 57.0569 31.5491 56.1276 32.1243 55.4139C32.6996 54.7002 33.4901 54.2532 34.342 54.1602H68.6539C69.5057 54.2532 70.2963 54.7002 70.8715 55.4139C71.4467 56.1276 71.7654 57.0569 71.7654 58.0208C71.7654 58.9846 71.4467 59.914 70.8715 60.6277C70.2963 61.3414 69.5057 61.7883 68.6539 61.8814Z" fill="#4A5565" />
                                            <path d="M61.8004 96.6766H41.2004C38.4687 96.6766 35.8488 95.4544 33.9172 93.279C31.9856 91.1036 30.9004 88.1531 30.9004 85.0766C30.9004 82 31.9856 79.0495 33.9172 76.8741C35.8488 74.6987 38.4687 73.4766 41.2004 73.4766H61.8004C64.5321 73.4766 67.152 74.6987 69.0836 76.8741C71.0152 79.0495 72.1004 82 72.1004 85.0766C72.1004 88.1531 71.0152 91.1036 69.0836 93.279C67.152 95.4544 64.5321 96.6766 61.8004 96.6766ZM41.2004 81.1978C40.3485 81.2909 39.558 81.7378 38.9828 82.4515C38.4075 83.1652 38.0889 84.0946 38.0889 85.0584C38.0889 86.0223 38.4075 86.9516 38.9828 87.6654C39.558 88.3791 40.3485 88.826 41.2004 88.9191H61.8004C62.6522 88.826 63.4428 88.3791 64.018 87.6654C64.5932 86.9516 64.9119 86.0223 64.9119 85.0584C64.9119 84.0946 64.5932 83.1652 64.018 82.4515C63.4428 81.7378 62.6522 81.2909 61.8004 81.1978H41.2004Z" fill="#4A5565" />
                                        </svg>

                                    </div>

                                    {/* Content */}
                                    <div className="w-full">
                                        <div className="text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[35px] font-semibold leading-[1.2] text-[#212121] dark:text-white mb-[6px] xl:mb-[8px]">
                                            {card.title}
                                        </div>
                                        <p className="text_1 text-[#4A5565] dark:text-[#9CA3AF] leading-[1.5] mb-[10px] xl:mb-[12px]">
                                            {card.description}
                                        </p>
                                        {card.cta?.file?.url && (
                                            <Link
                                                href={card.cta.file.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center gap-[10px] w-fit"
                                            >
                                                <span className="inline-block text_1 font-normal tracking-tighter bg-gradient-to-r from-[#DC2626] from-[50%] to-[#F97316] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                                    {card.cta.label}
                                                </span>
                                                <svg
                                                    width="18"
                                                    height="14"
                                                    viewBox="0 0 20 18"
                                                    fill="none"
                                                    className="text-[#F97316] transition-transform duration-300 group-hover:translate-x-[4px]"
                                                >
                                                    <path d="M19.1973 7.80308L12.1519 0.330392C11.9508 0.117084 11.6827 0 11.3969 0C11.1108 0 10.8429 0.117252 10.6418 0.330392L10.0021 1.00901C9.80113 1.22198 9.69042 1.50645 9.69042 1.80976C9.69042 2.1129 9.80113 2.40695 10.0021 2.61993L14.1123 6.98888H1.05396C0.465202 6.98888 0 7.47774 0 8.10236V9.06174C0 9.68635 0.465202 10.2245 1.05396 10.2245H14.1589L10.0022 14.6179C9.80128 14.8312 9.69057 15.1079 9.69057 15.4112C9.69057 15.7142 9.80128 15.9949 10.0022 16.2081L10.6419 16.8845C10.843 17.0978 11.1109 17.2141 11.3971 17.2141C11.6829 17.2141 11.9509 17.0963 12.152 16.883L19.1975 9.41047C19.3991 9.19649 19.5099 8.91084 19.5091 8.6072C19.5098 8.30254 19.3991 8.01673 19.1973 7.80308Z" fill="currentColor" />
                                                </svg>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Arrows only show when the slider can scroll */}
                    <div className={`flex items-center justify-center md:justify-end gap-[8px] mt-[10px] ${canSlide ? "" : "hidden"}`}>
                        <button ref={prevRef} type="button" aria-label="Previous" className={arrowBtn}>
                            <svg className="w-[13px] h-[13px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button ref={nextRef} type="button" aria-label="Next" className={arrowBtn}>
                            <svg className="w-[13px] h-[13px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}