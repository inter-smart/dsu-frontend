"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// A card is a link only when it has a real url; otherwise it is a plain block
function InnovationCard({ card, priority, ratio = "aspect-[562/353]" }) {
    const { title, description, url, isExternal, image } = card;
    // Same tile design as /research-innovation/innovation (IndustryCentres)
    const cardClass =
        ratio + " group relative block w-full overflow-hidden rounded-[8px] xl:rounded-[10px] bg-[#1f2937] outline-none focus-visible:ring-2 focus-visible:ring-(--basecolor) focus-visible:ring-offset-2";
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
            )}

            {/* bottom gradient */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent via-[45%]"
            />

            {/* text */}
            <div className="absolute inset-x-0 bottom-0 z-[2] flex flex-col pl-[20px] pr-[70px] pb-[20px] xl:pl-[26px] xl:pr-[80px] xl:pb-[24px] 2xl:pl-[32px] 2xl:pr-[90px] 2xl:pb-[30px] 3xl:pl-[30px] 3xl:pr-[90px] 3xl:pb-[38px] transition-transform duration-300 group-hover:-translate-y-[2px]">
                <h3 className="whitespace-pre-line text-[18px] sm:text-[20px] xl:text-[22px] 2xl:text-[26px] 3xl:text-[32px] font-bold leading-[1.15] text-white mb-[8px] xl:mb-[10px]">
                    {title}
                </h3>
                {description && (
                    <p className="text-[13px] sm:text-[14px] xl:text-[15px] 2xl:text-[17px] 3xl:text-[18px] leading-[1.35] font-normal text-white">
                        {description}
                    </p>
                )}
            </div>

            {/* arrow button (frosted glass) */}
            <div
                aria-hidden="true"
                style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
                className="absolute right-[16px] bottom-[18px] xl:right-[20px] xl:bottom-[22px] 2xl:right-[25px] 2xl:bottom-[28px] 3xl:right-[32px] 3xl:bottom-[36px] z-[2] flex h-[34px] w-[34px] xl:h-[40px] xl:w-[40px] 3xl:h-[45px] 3xl:w-[45px] items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#DC2626] group-hover:to-[#F97316] group-hover:border-transparent group-hover:scale-110"
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

                    {/* Mobile slider only; md and up shows a grid */}
                    {!nav.locked && (
                        <div className="flex shrink-0 gap-3 md:hidden">
                            <NavButton direction="prev" disabled={nav.begin} onClick={() => swiper?.slidePrev()} />
                            <NavButton direction="next" disabled={nav.end} onClick={() => swiper?.slideNext()} />
                        </div>
                    )}
                </div>

                {/* md and up: grid, 2 per row then 3 per row (same as /research-innovation/innovation) */}
                <div className="mt-6 hidden grid-cols-2 gap-[20px] md:grid lg:mt-8 xl:grid-cols-3 xl:gap-[23px] xl:gap-y-[30px] 2xl:mt-[34px] 2xl:gap-[25px] 3xl:gap-[30px]">
                    {cards.map((card, i) => (
                        <InnovationCard key={card.id ?? i} card={card} priority={i < 3} />
                    ))}
                </div>

                {/* Mobile: slider */}
                <Swiper
                    modules={[Autoplay]}
                    className="-mx-1 mt-6 px-1 py-1 md:!hidden [&_.swiper-slide]:h-auto"
                    slidesPerView={1.1}
                    spaceBetween={14}
                    grabCursor
                    watchOverflow
                    rewind
                    autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                    breakpoints={{
                        480: { slidesPerView: 1.4, spaceBetween: 16 },
                        640: { slidesPerView: 1.7, spaceBetween: 18 },
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
                            <InnovationCard card={card} priority={i < 2} ratio="aspect-[4/3]" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}