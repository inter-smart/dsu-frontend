"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// A card is a link only when it has a real url; otherwise it is a plain block
function InnovationCard({ card, priority }) {
    const { title, description, url, isExternal, image } = card;
    // Same tile design as /research-innovation/innovation (IndustryCentres)
    const cardClass =
        "group relative block aspect-[325/292] w-full overflow-hidden rounded-[8px] xl:rounded-[10px] bg-[#1f2937] outline-none focus-visible:ring-2 focus-visible:ring-(--basecolor) focus-visible:ring-offset-2";
    const Wrapper = url ? Link : "div";
    const wrapperProps = url
        ? { href: url, target: isExternal ? "_blank" : undefined, rel: isExternal ? "noopener noreferrer" : undefined }
        : {};

    return (
        <Wrapper {...wrapperProps} className={cardClass}>
            {image?.url && (
                <Image
                    src={image.url}
                    alt={image.alternativeText || title}
                    fill
                    priority={priority}
                    sizes="(max-width: 639px) 85vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, (max-width: 1535px) 25vw, 20vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
            )}

            {/* bottom gradient */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent via-[45%]"
            />

            {/* text */}
            <div className="absolute inset-x-0 bottom-0 z-[2] flex flex-col pl-[20px] pr-[64px] pb-[20px] xl:pl-[22px] xl:pr-[64px] xl:pb-[22px] 2xl:pl-[24px] 2xl:pr-[68px] 2xl:pb-[26px] transition-transform duration-300 group-hover:-translate-y-[2px]">
                <h3 className="whitespace-pre-line text-[18px] sm:text-[20px] xl:text-[20px] 2xl:text-[24px] font-bold leading-[1.15] text-white mb-[8px] xl:mb-[10px]">
                    {title}
                </h3>
                {description && (
                    <p className="text-[13px] sm:text-[14px] xl:text-[14px] 2xl:text-[16px] leading-[1.35] font-normal text-white">
                        {description}
                    </p>
                )}
            </div>

            {/* arrow button (frosted glass) */}
            <div
                aria-hidden="true"
                style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
                className="absolute right-[16px] bottom-[18px] xl:right-[18px] xl:bottom-[20px] 2xl:right-[20px] 2xl:bottom-[24px] z-[2] flex h-[34px] w-[34px] xl:h-[40px] xl:w-[40px] items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316] group-hover:border-transparent group-hover:scale-110"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-[50%] w-[50%] text-[#FF6D00] transition-all duration-300 group-hover:text-white group-hover:translate-x-[2px]"
                >
                    <path d="M9 4l8 8-8 8" />
                </svg>
            </div>
        </Wrapper>
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

export default function IntlInnovation({ data }) {
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
                        {description && (
                            <p className="mt-2 text-[14px] leading-[1.6] text-[#333] 2xl:mt-[10px] lg:text-[17px] xl:text-[17px] 2xl:text-[18px]">
                                {description}
                            </p>
                        )}
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