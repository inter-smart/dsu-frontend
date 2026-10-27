"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

function InnovationCard({ card, priority }) {
    const { title, description, href = "#", image } = card;

    return (
        <Link
            href={href}
            className="group relative block aspect-[325/292] w-full overflow-hidden rounded-[6px] bg-[#111] shadow-[0_2px_8px_rgba(0,0,0,0.25)] outline-none focus-visible:ring-2 focus-visible:ring-(--basecolor) focus-visible:ring-offset-2"
        >
            <Image
                src={image.url}
                alt={image.alternativeText || title}
                fill
                priority={priority}
                sizes="(max-width: 639px) 85vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, (max-width: 1535px) 25vw, 20vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
            />

            {/* Dark gradient so text stays readable on every photo */}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-black/90 via-black/55 to-black/5"
            />

            <div className="absolute inset-x-0 bottom-0 px-5 pb-5 lg:px-6 lg:pb-6">
                <h3 className="max-w-[9ch] text-[20px] font-semibold leading-[1.3] text-white lg:text-[22px] 2xl:text-[26px] 2xl:leading-[34px]">
                    {title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-white/95 lg:text-[15px] 2xl:mt-[18px] 2xl:text-[18px] 2xl:leading-[29px]">
                    {description}
                </p>
            </div>
        </Link>
    );
}

export default function InnovationCenters({ data }) {
    const { title, description, cards = [] } = data;
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);

    // swiper-button-lock is added by Swiper when every card fits (5 cards on 2xl),
    // so the buttons hide themselves on the full-width desktop layout
    const navButton =
        "absolute top-1/2 z-20 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-(--basecolor) shadow-md transition-colors duration-300 hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2) hover:text-white disabled:opacity-40 [&.swiper-button-lock]:hidden 2xl:size-[40px]";

    return (
        <section id="innovation-centres" className="w-full bg-[#F4F8FD] py-10 lg:py-14 2xl:py-[60px]">
            <div className="container">
                <h2 className="text-[28px] font-bold leading-tight text-[#1a1a1a] md:text-[30px] lg:text-[35px] 2xl:text-[42px] 3xl:text-[52px]">
                    {title}
                </h2>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#333] lg:text-[15px] 2xl:mt-[10px] 2xl:text-[18px]">
                    {description}
                </p>

                <div className="relative mt-6 lg:mt-8 2xl:mt-[34px]">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{ prevEl, nextEl }}
                        watchOverflow
                        grabCursor
                        speed={500}
                        slidesPerView={1.15}
                        spaceBetween={16}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 16 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                            1280: { slidesPerView: 4, spaceBetween: 22 },
                            1536: { slidesPerView: 5, spaceBetween: 24 },
                        }}
                        className="-mx-1 px-1 py-1 [&_.swiper-slide]:h-auto"
                    >
                        {cards.map((card, i) => (
                            <SwiperSlide key={card.id ?? i}>
                                <InnovationCard card={card} priority={i < 2} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Nav buttons (outside Swiper so they stay fixed while slides move) */}
                    <button
                        ref={setPrevEl}
                        type="button"
                        aria-label="Previous centre"
                        className={`${navButton} left-0 lg:-left-2 2xl:-left-[26px]`}
                    >
                        <ChevronLeft className="w-5" />
                    </button>
                    <button
                        ref={setNextEl}
                        type="button"
                        aria-label="Next centre"
                        className={`${navButton} right-0 lg:-right-2 2xl:-right-[26px]`}
                    >
                        <ChevronRight className="w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}