"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { Heading } from "@/components/ui/heading";
import { SliderArrow, FilterPill } from "@/components/sections/placements/slider-controls";

export default function IndustryPartnerships({ data }) {
    const [school, setSchool] = useState("all");
    const tabsRef = useRef(null);
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });

    const partners = (data?.partners || []).filter((p) => school === "all" || p?.school === school);

    useEffect(() => {
        emblaApi?.scrollTo(0, true);
    }, [school, emblaApi]);

    const scrollTabs = (dir) => tabsRef.current?.scrollBy({ left: dir * 250, behavior: "smooth" });

    if (!data) return null;

    return (
        <section className="py-[40px] sm:py-[50px] xl:py-[60px] 2xl:py-[75px] 3xl:py-[90px] bg-[#F1F5FC] dark:bg-[#0f1011] transition-colors duration-300">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-[30px] xl:gap-[50px] 3xl:gap-[70px] items-start">
                    <div>
                        {data?.eyebrow && (
                            <div className="flex items-center gap-[10px] mb-[8px] text-[13px] 2xl:text-[15px] 3xl:text-[20px] tracking-[0.05em] uppercase text-(--basecolor2) before:content-[''] before:w-[28px] before:h-[3px] before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2)">
                                {data.eyebrow}
                            </div>
                        )}
                        <Heading as="h2" className="mb-[12px] 3xl:mb-[16px] max-w-[560px] dark:text-white">
                            {data?.title}
                        </Heading>
                        <div className="typography text_1 space-y-[16px] 3xl:space-y-[28px]">
                            <BlocksRenderer content={data?.description || []} />
                        </div>
                    </div>

                    <ul className="grid sm:grid-cols-2 gap-[15px] 3xl:gap-x-[56px] 3xl:gap-y-[25px]">
                        {data?.features?.map((item) => (
                            <li
                                key={item?.id}
                                className="flex items-start gap-[12px] 3xl:gap-[16px] p-[16px] 3xl:p-[18px_20px] bg-white dark:bg-[#1a1a1a] border border-[#FAD2BC] dark:border-white/10 rounded-[8px] 3xl:rounded-[10px]"
                            >
                                <Image
                                    src={item?.icon?.url}
                                    width={56}
                                    height={56}
                                    alt=""
                                    className="w-[40px] 3xl:w-[56px] h-auto shrink-0"
                                />
                                <div>
                                    <h3 className="text-[16px] 2xl:text-[19px] 3xl:text-[25px] leading-tight font-bold text-[#212121] dark:text-white mb-[4px] 3xl:mb-[8px]">
                                        {item?.title}
                                    </h3>
                                    <p>{item?.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-[10px] 3xl:gap-[14px] mt-[35px] 2xl:mt-[45px] 3xl:mt-[60px] mb-[25px] 3xl:mb-[45px]">
                    <SliderArrow dir="prev" label="Scroll schools left" onClick={() => scrollTabs(-1)} className="max-sm:hidden" />
                    <div ref={tabsRef} className="flex gap-[10px] 3xl:gap-[16px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {data?.schools?.map((s) => (
                            <FilterPill key={s?.value} active={school === s?.value} onClick={() => setSchool(s?.value)}>
                                {s?.label}
                            </FilterPill>
                        ))}
                    </div>
                    <SliderArrow dir="next" label="Scroll schools right" onClick={() => scrollTabs(1)} className="max-sm:hidden" />
                </div>

                {partners.length === 0 ? (
                    <p className="py-[40px] text-center">{data?.emptyText}</p>
                ) : (
                    <div className="relative">
                        <SliderArrow dir="prev" label="Previous partner" onClick={() => emblaApi?.scrollPrev()} className="hidden xl:flex absolute z-1 top-1/2 -translate-y-1/2 -left-[45px] 3xl:-left-[56px]" />
                        <SliderArrow dir="next" label="Next partner" onClick={() => emblaApi?.scrollNext()} className="hidden xl:flex absolute z-1 top-1/2 -translate-y-1/2 -right-[45px] 3xl:-right-[56px]" />
                        <div ref={emblaRef} className="overflow-hidden">
                            <div className="flex -ml-[20px] touch-pan-y touch-pinch-zoom">
                                {partners.map((item) => (
                                    <div key={item?.id} className="min-w-0 pl-[20px] flex-[0_0_88%] sm:flex-[0_0_60%] lg:flex-[0_0_calc(100%/3)]">
                                        <article className="h-full rounded-[10px] overflow-hidden bg-linear-to-b from-[#FEF6EB] to-[#FDF0DF] dark:from-[#1a1a1a] dark:to-[#1a1a1a]">
                                            <div className="relative aspect-586/328">
                                                <Image
                                                    src={item?.image?.url}
                                                    alt={item?.image?.alternativeText || ""}
                                                    fill
                                                    sizes="(min-width: 1024px) 33vw, 88vw"
                                                    className="object-cover"
                                                />
                                                <div className="absolute -bottom-[40px] 3xl:-bottom-[55px] left-[20px] 3xl:left-[55px] w-[100px] 3xl:w-[126px] aspect-126/125 bg-white flex items-center justify-center p-[10px]">
                                                    <Image
                                                        src={item?.logo?.url}
                                                        alt={item?.logo?.alternativeText || ""}
                                                        width={110}
                                                        height={40}
                                                        className="w-full h-auto object-contain"
                                                    />
                                                </div>
                                            </div>
                                            <div className="p-[55px_15px_25px] 3xl:p-[70px_15px_60px]">
                                                <h3 className="text-[22px] 2xl:text-[26px] 3xl:text-[36px] leading-tight font-bold text-[#212121] dark:text-white">
                                                    {item?.name}
                                                </h3>
                                                <div className="text-[13px] 2xl:text-[15px] 3xl:text-[18px] font-semibold text-[#4A5565] dark:text-[#CBD5E1] mt-[4px] pb-[16px] 3xl:pb-[24px] mb-[16px] 3xl:mb-[24px] border-b border-black/10 dark:border-white/10">
                                                    {item?.school_label}
                                                </div>
                                                <p className="mb-[16px] 3xl:mb-[24px]">{item?.description}</p>
                                                <ul className="flex flex-wrap gap-[10px] 3xl:gap-[18px]">
                                                    {item?.tags?.map((tag) => (
                                                        <li
                                                            key={tag}
                                                            className="px-[12px] py-[5px] 3xl:py-[10px] border border-black/10 dark:border-white/15 rounded-[8px] text-[12px] 2xl:text-[14px] 3xl:text-[18px] text-[#4A5565] dark:text-[#CBD5E1]"
                                                        >
                                                            {tag}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
