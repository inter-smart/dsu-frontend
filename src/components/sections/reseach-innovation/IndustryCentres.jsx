"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import { ctaLinkProps } from "@/lib/schools/link-props";
import { hasContent } from "@/lib/has-content";


const renderText = (value) =>
    Array.isArray(value) ? <BlocksRenderer content={value} /> : value;


export default function IndustryCentres({ data }) {
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);

    if (!data) return null;
    const cards = (Array.isArray(data?.cards) ? data.cards : []).filter(
        (item) => item?.title,
    );
    if (cards.length === 0) return null;

    const renderCard = (item, idx, cardClass) => {
        const plainTitle = item.title.replace(/\n/g, " ");
        const hasDesc = Array.isArray(item?.description)
            ? hasContent(item.description)
            : Boolean(item?.description);

        const cardInner = (
            <>
                {item?.image?.url && (
                    <Image
                        src={item.image.url}
                        alt={item.image.alternativeText || plainTitle}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                )}

                {/* bottom gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent via-[45%] transition-opacity duration-500" />

                {/* text */}
                <div className="absolute inset-x-0 bottom-0 z-[2] flex flex-col pl-[20px] pr-[70px] pb-[20px] xl:pl-[26px] xl:pr-[80px] xl:pb-[24px] 2xl:pl-[32px] 2xl:pr-[90px] 2xl:pb-[30px] 3xl:pl-[30px] 3xl:pr-[90px] 3xl:pb-[38px] transition-transform duration-300 group-hover:-translate-y-[2px]">
                    <div className="whitespace-pre-line text-[18px] sm:text-[20px] xl:text-[22px] 2xl:text-[26px] 3xl:text-[32px] font-bold leading-[1.15] text-white mb-[8px] xl:mb-[10px]">
                        {item.title}
                    </div>
                    {hasDesc && (
                        <div className="text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[18px] leading-[1.35] font-normal text-white [&_p]:text-white typography">
                            {renderText(item.description)}
                        </div>
                    )}
                </div>

                {/* arrow button (frosted glass) */}
                <div
                    style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
                    className="absolute right-[16px] bottom-[18px] xl:right-[20px] xl:bottom-[22px] 2xl:right-[25px] 2xl:bottom-[28px] 3xl:right-[32px] 3xl:bottom-[36px] z-[2] flex h-[34px] w-[34px] xl:h-[40px] xl:w-[40px] 2xl:h-[40px] 2xl:w-[40px] 3xl:h-[45px] 3xl:w-[45px] items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316] group-hover:border-transparent group-hover:scale-110"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-[50%] w-[50%] text-[#FF6D00] transition-all duration-300 group-hover:text-white group-hover:translate-x-[2px]"
                        aria-hidden="true"
                    >
                        <path d="M9 4l8 8-8 8" />
                    </svg>
                </div>
            </>
        );

        return item?.cta?.url ? (
            <Link
                href={item.cta.url}
                {...ctaLinkProps(item.cta)}
                aria-label={plainTitle}
                className={cardClass}
            >
                {cardInner}
            </Link>
        ) : (
            <div className={cardClass}>{cardInner}</div>
        );
    };

    const baseCardClass =
        "group relative block w-full overflow-hidden rounded-[8px] xl:rounded-[10px] bg-[#1f2937]";

    const navBtnClass =
        "flex h-[40px] w-[40px] items-center justify-center rounded-full bg-gradient-to-r from-[#DC2626] to-[#F97316] text-white shadow-[0_4px_14px_rgba(220,38,38,0.3)] transition-all duration-300 active:scale-95 [&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:pointer-events-none [&.swiper-button-disabled]:shadow-none";

    return (
        <section className="relative py-[20px_40px] xl:py-[25px_55px] 2xl:py-[30px_65px] 3xl:py-[40px_75px] bg-white dark:bg-[#101010] transition-colors duration-300">
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
                        {cards.map((item, idx) => (
                            <SwiperSlide key={item.id ?? idx} className="!h-auto">
                                {renderCard(item, idx, `${baseCardClass} aspect-[4/3]`)}
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
                    className="hidden md:grid grid-cols-2 xl:grid-cols-3 gap-[20px] xl:gap-[23px] 2xl:gap-[25px] xl:gap-y-[30px] 3xl:gap-[30px]"
                >
                    {cards.map((item, idx) => (
                        <div key={item.id ?? idx}>
                            {renderCard(item, idx, `${baseCardClass} aspect-[562/353]`)}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}