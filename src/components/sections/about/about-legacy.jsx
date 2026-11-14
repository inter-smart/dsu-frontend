"use client";

import { useCallback, useEffect, useId, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { BlocksRenderer } from "@/components/ui/blocks-renderer";
import { hasContent } from "@/lib/has-content";
import { cn } from "@/lib/utils";

// One legacy card: icon + title centred. The description opens on hover, keyboard focus or tap (active),
// and the whole card fills with the brand gradient.
function LegacyCard({ item, index, active, onToggle, className }) {
    const uid = useId();
    const hasText = Array.isArray(item.description) && hasContent(item.description);
    return (
        <article
            data-active={active}
            onClick={hasText ? onToggle : undefined}
            className={cn(
                "group relative z-0 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[16px] border border-black/[0.06] bg-white px-[16px] py-[18px] text-center shadow-[0_6px_20px_rgba(120,70,20,0.07)] xl:rounded-[20px] xl:px-[22px] 2xl:px-[28px]",
                "transition-[border-color,box-shadow] duration-500 hover:border-transparent hover:md:shadow-[0_18px_40px_rgba(220,38,38,0.25)]",
                "data-[active=true]:border-transparent data-[active=true]:shadow-[0_18px_40px_rgba(220,38,38,0.25)]",
                "dark:border-white/10 dark:bg-[#18191B] dark:shadow-none",
                hasText && "cursor-pointer",
                className,
            )}
        >
            {/* brand gradient + soft highlight, fades in for hover / active */}
            <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-br from-[#DC2626] to-[#F97316] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100"
            />
            <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_88%_6%,rgba(255,255,255,0.30),transparent_52%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-data-[active=true]:opacity-100"
            />
            {/* front face (number, icon, title): fades out while the description shows */}
            <div className={cn("flex flex-col items-center transition-opacity duration-500", hasText && "group-hover:opacity-0 group-data-[active=true]:opacity-0")}>
                {/* big faint index number — TEMPORARILY HIDDEN: remove "hidden" below to show it again */}
                <span
                    aria-hidden="true"
                    className="hidden pointer-events-none absolute right-[14px] top-[8px] text-[38px] font-extrabold leading-none text-[#F97316]/15 transition-colors duration-500 group-hover:text-white/25 group-data-[active=true]:text-white/25 xl:right-[18px] xl:top-[10px] xl:text-[46px] 2xl:text-[56px] 3xl:text-[72px]"
                >
                    {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#FFF1E0] ring-1 ring-[#F97316]/25 transition-all duration-500 group-hover:h-[40px] group-hover:w-[40px] group-hover:bg-white group-hover:ring-white/60 group-data-[active=true]:h-[40px] group-data-[active=true]:w-[40px] group-data-[active=true]:bg-white group-data-[active=true]:ring-white/60 xl:group-hover:h-[44px] xl:group-hover:w-[44px] xl:group-data-[active=true]:h-[44px] xl:group-data-[active=true]:w-[44px] 2xl:group-hover:h-[48px] 2xl:group-hover:w-[48px] 2xl:group-data-[active=true]:h-[48px] 2xl:group-data-[active=true]:w-[48px] 3xl:group-hover:h-[60px] 3xl:group-hover:w-[60px] 3xl:group-data-[active=true]:h-[60px] 3xl:group-data-[active=true]:w-[60px] dark:bg-white/10 dark:ring-white/15 xl:h-[58px] xl:w-[58px] 2xl:h-[66px] 2xl:w-[66px] 3xl:h-[84px] 3xl:w-[84px]">
                    {item.icon && (
                        <Image
                            src={item.icon}
                            width={78}
                            height={65}
                            alt=""
                            className="max-w-[22px] object-contain transition-[filter] duration-500 dark:brightness-200 dark:invert group-hover:brightness-100 group-hover:invert-0 group-data-[active=true]:brightness-100 group-data-[active=true]:invert-0 xl:max-w-[26px] 2xl:max-w-[30px] 3xl:max-w-[40px]"
                        />
                    )}
                </div>
                <h3 className="mt-[12px] text-[15px] font-bold leading-[1.25] text-[#212121] transition-colors duration-500 group-hover:text-white group-data-[active=true]:text-white dark:text-white xl:mt-[14px] xl:text-[17px] 2xl:mt-[16px] 2xl:text-[20px] 3xl:mt-[20px] 3xl:text-[26px]">
                    {hasText ? (
                        <button
                            type="button"
                            aria-expanded={active}
                            aria-controls={`legacy-desc-${uid}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                onToggle();
                            }}
                            className="rounded-[4px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F97316]"
                        >
                            {item.title}
                        </button>
                    ) : (
                        item.title
                    )}
                </h3>
                {/* accent dash under the title; stretches while the card is open */}
                <span
                    aria-hidden="true"
                    className="mt-[10px] h-[3px] w-[26px] rounded-full bg-gradient-to-r from-[#DC2626] to-[#F97316] transition-all duration-500 group-hover:w-[44px] group-hover:bg-white group-hover:bg-none group-data-[active=true]:w-[44px] group-data-[active=true]:bg-white group-data-[active=true]:bg-none"
                />
            </div>
            {hasText && (
                <div
                    id={`legacy-desc-${uid}`}
                    className="pointer-events-none absolute inset-0 flex items-center justify-center px-[18px] py-[22px] opacity-0 transition-opacity duration-500 group-hover:pointer-events-auto group-hover:opacity-100 group-data-[active=true]:pointer-events-auto group-data-[active=true]:opacity-100 xl:px-[26px] xl:py-[26px] 3xl:px-[36px] 3xl:py-[34px]"
                >
                    <div
                        data-lenis-prevent
                        className="min-h-0 max-h-full w-full touch-pan-y overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&_p]:text-[15px] [&_p]:leading-[1.5] [&_p]:text-white lg:[&_p]:text-[16px] 2xl:[&_p]:text-[16px] 3xl:[&_p]:text-[18px]"
                    >
                        <BlocksRenderer content={item.description} />
                    </div>
                </div>
            )}
        </article>
    );
}

export default function AboutLegacy({ data }) {
    const highlights = (Array.isArray(data?.legacyHighlights) ? data.legacyHighlights : []).filter(
        (item) => item?.title,
    );
    const [activeIdx, setActiveIdx] = useState(-1);
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
    const [selected, setSelected] = useState(0);
    const [snaps, setSnaps] = useState([]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelected(emblaApi.selectedScrollSnap());
        setActiveIdx(-1);
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        const onReInit = () => setSnaps(emblaApi.scrollSnapList());
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onReInit);
        const init = setTimeout(onReInit, 0);
        return () => {
            clearTimeout(init);
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onReInit);
        };
    }, [emblaApi, onSelect]);

    if (!highlights.length) return null;
    const toggle = (idx) => setActiveIdx((cur) => (cur === idx ? -1 : idx));

    return (
        <section className="relative z-0 overflow-hidden rounded-[50px_50px_0_0] bg-gradient-to-b from-[#FFF8EE] to-[#FFF3E0] py-[36px] transition-colors duration-300 dark:rounded-none dark:bg-[#101010] dark:bg-none md:rounded-[80px_80px_0_0] xl:py-[48px] 2xl:py-[60px] 3xl:py-[76px]">
            <div className="container">
                {/* lg and up: a narrower 3 x 2 grid that fits the viewport */}
                <div
                    data-reveal-stagger
                    className="mx-auto hidden auto-rows-[clamp(160px,calc((100svh-200px)/2),270px)] grid-cols-3 gap-[16px] lg:grid lg:max-w-[900px] xl:max-w-[1020px] xl:gap-[20px] 2xl:max-w-[1160px] 2xl:gap-[24px] 3xl:max-w-[1440px] 3xl:auto-rows-[clamp(210px,calc((100svh-240px)/2),330px)] 3xl:gap-[30px]"
                >
                    {highlights.map((item, idx) => (
                        <LegacyCard key={idx} item={item} index={idx} active={activeIdx === idx} onToggle={() => toggle(idx)} />
                    ))}
                </div>

                {/* below lg: swipeable slider */}
                <div data-reveal className="lg:hidden">
                    <div className="overflow-hidden px-[4px] py-[28px] -my-[12px]" ref={emblaRef}>
                        <div className="-ml-[12px] flex touch-pan-y touch-pinch-zoom">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="min-w-0 flex-[0_0_78%] pl-[12px] sm:flex-[0_0_46%] md:flex-[0_0_36%]">
                                    <LegacyCard
                                        item={item}
                                        index={idx}
                                        active={activeIdx === idx}
                                        onToggle={() => toggle(idx)}
                                        className="h-[240px] sm:h-[260px]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {snaps.length > 1 && (
                        <div className="mt-[4px] flex items-center justify-center gap-[2px]">
                            {snaps.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    aria-label={`Go to card ${i + 1}`}
                                    aria-current={selected === i}
                                    onClick={() => emblaApi?.scrollTo(i)}
                                    className="flex h-[24px] items-center justify-center px-[4px]"
                                >
                                    <span
                                        className={cn(
                                            "block h-[6px] rounded-full transition-all duration-300",
                                            selected === i ? "w-[28px] bg-gradient-to-r from-[#DC2626] to-[#F97316]" : "w-[8px] bg-black/20 dark:bg-white/30",
                                        )}
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
