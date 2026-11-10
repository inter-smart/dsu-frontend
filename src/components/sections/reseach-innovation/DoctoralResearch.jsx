"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";
import { ctaLinkProps } from "@/lib/schools/link-props";


export default function DoctoralResearch({ data }) {
    if (!data) return null;
    const cards = (Array.isArray(data?.cards) ? data.cards : []).filter(
        (item) => item?.title,
    );

    return (
        <section className="relative py-[40px] xl:py-[55px] 2xl:py-[65px] 3xl:py-[75px] bg-[#F8FAFC] dark:bg-[#101010] transition-colors duration-300">
            <div className="container">
                {data?.heading && (
                    <h2 className="text-[25px] xl:text-[36px] 2xl:text-[44px] 3xl:text-[55px] font-bold leading-[30px] xl:leading-[40px] 2xl:leading-[50px] 3xl:leading-[60px] mb-[25px] xl:mb-[35px] 3xl:mb-[45px] text-black dark:text-white">
                        {data.heading}
                    </h2>
                )}

                {cards.length > 0 && (
                    <Swiper
                        slidesPerView={1.5}
                        spaceBetween={16}
                        grabCursor={true}
                        breakpoints={{
                            640: { slidesPerView: 2.5, spaceBetween: 20 },
                            1024: { slidesPerView: 3.5, spaceBetween: 25 },
                            1280: { slidesPerView: 4, spaceBetween: 25 },
                            1536: { slidesPerView: 4, spaceBetween: 33 },
                        }}
                        className="!w-full"
                    >
                        {cards.map((item, idx) => {
                            const cardInner = (
                                <>
                                    {item?.image?.url && (
                                        <Image
                                            src={item.image.url}
                                            alt={item.image.alternativeText || item.title.replace(/\n/g, " ")}
                                            fill
                                            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                    )}

                                    {/* bottom gradient */}
                                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/80 via-black/35 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

                                    {/* title */}
                                    <div className="absolute left-[18px] bottom-[18px] xl:left-[18px] xl:bottom-[20px] 2xl:left-[22px] 2xl:bottom-[24px] 3xl:left-[28px] 3xl:bottom-[30px] z-[2] max-w-[65%] whitespace-pre-line text-[20px] xl:text-[22px] 2xl:text-[26px] 3xl:text-[32px] font-medium leading-[1.2] text-white transition-transform duration-300 group-hover:-translate-y-[2px]">
                                        {item.title}
                                    </div>

                                    {/* arrow button */}
                                    <div className="absolute right-[16px] bottom-[16px] xl:right-[18px] xl:bottom-[18px] 2xl:right-[20px] 2xl:bottom-[20px] 3xl:right-[26px] 3xl:bottom-[26px] z-[2] flex h-[40px] w-[40px] xl:h-[46px] xl:w-[46px] 2xl:h-[52px] 2xl:w-[52px] 3xl:h-[64px] 3xl:w-[64px] items-center justify-center rounded-full border border-white/25 bg-black/40 backdrop-blur-[2px] shadow-[0_4px_14px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316] group-hover:border-transparent group-hover:scale-110">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-[45%] w-[45%] text-[#F97316] transition-all duration-300 group-hover:text-white group-hover:translate-x-[2px]"
                                            aria-hidden="true"
                                        >
                                            <path d="M9 4l8 8-8 8" />
                                        </svg>
                                    </div>
                                </>
                            );

                            const cardClass =
                                "group relative block w-full aspect-[407/727] overflow-hidden rounded-[12px] xl:rounded-[16px] bg-[#e5e7eb] dark:bg-[#18191B]";

                            return (
                                <SwiperSlide key={idx} className="!h-auto">
                                    {item?.cta?.url ? (
                                        <Link
                                            href={item.cta.url}
                                            {...ctaLinkProps(item.cta)}
                                            aria-label={item.title.replace(/\n/g, " ")}
                                            className={cardClass}
                                        >
                                            {cardInner}
                                        </Link>
                                    ) : (
                                        <div className={cardClass}>{cardInner}</div>
                                    )}
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                )}
            </div>
        </section>
    );
}