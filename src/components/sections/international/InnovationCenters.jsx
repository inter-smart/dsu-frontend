"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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

function NavButton({ direction, disabled, onClick }) {
    const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
            className="flex size-10 items-center justify-center rounded-full bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-white transition-opacity duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-35 2xl:size-[48px]"
        >
            <Icon className="size-5 2xl:size-6" strokeWidth={2} />
        </button>
    );
}

export default function InnovationCenters({ data }) {
    const { title, description, cards = [] } = data;

    const [swiper, setSwiper] = useState(null);
    const [nav, setNav] = useState({ begin: true, end: false, locked: false });

    const sync = (s) => setNav({ begin: s.isBeginning, end: s.isEnd, locked: s.isLocked });

    return (
        <section id="innovation-centres" className="w-full bg-[#F4F8FD] py-10 lg:py-14 2xl:py-[60px] scroll-mt-24">
            <div className="container">
                {/* Heading + nav buttons */}
                <div className="flex items-end justify-between gap-6">
                    <div>
                        <h2 className="text-[28px] font-bold leading-tight text-[#1a1a1a] md:text-[30px] lg:text-[35px] 2xl:text-[42px] 3xl:text-[52px]">
                            {title}
                        </h2>
                        <p className="mt-2 text-[14px] leading-[1.6] text-[#333] lg:text-[15px] 2xl:mt-[10px] 2xl:text-[18px]">
                            {description}
                        </p>
                    </div>

                    {/* Hidden automatically when all cards fit (e.g. 5 cards on 2xl) */}
                    {!nav.locked && (
                        <div className="flex shrink-0 gap-3">
                            <NavButton direction="prev" disabled={nav.begin} onClick={() => swiper?.slidePrev()} />
                            <NavButton direction="next" disabled={nav.end} onClick={() => swiper?.slideNext()} />
                        </div>
                    )}
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Autoplay]}
                    className="-mx-1 mt-6 px-1 py-1 lg:mt-8 2xl:mt-[34px] [&_.swiper-slide]:h-auto"
                    slidesPerView={1.15}
                    spaceBetween={16}
                    grabCursor
                    watchOverflow
                    rewind
                    autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 16 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                        1280: { slidesPerView: 4, spaceBetween: 22 },
                        1536: { slidesPerView: 5, spaceBetween: 24 },
                    }}
                    onSwiper={(s) => {
                        setSwiper(s);
                        sync(s);
                    }}
                    onSlideChange={sync}
                    onResize={sync}
                    onBreakpoint={sync}
                    onLock={sync}
                    onUnlock={sync}
                >
                    {cards.map((card, i) => (
                        <SwiperSlide key={card.id ?? i}>
                            <InnovationCard card={card} priority={i < 2} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}