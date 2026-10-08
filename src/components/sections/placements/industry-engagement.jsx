"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { SliderArrow, FilterPill } from "@/components/sections/placements/slider-controls";

export default function IndustryEngagement({ data }) {
    const [category, setCategory] = useState(data?.categories?.[0]?.value);
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });

    const items = (data?.items || []).filter((item) => item?.category === category);
    const categoryLabel = data?.categories?.find((c) => c?.value === category)?.label;

    useEffect(() => {
        emblaApi?.scrollTo(0, true);
    }, [category, emblaApi]);

    if (!data) return null;

    return (
        <section className="py-[40px] sm:py-[50px] xl:py-[60px] 2xl:py-[75px] 3xl:py-[90px] bg-white dark:bg-[#0f1011] transition-colors duration-300">
            <div className="container">
                <Heading as="h2" className="mb-[8px] 3xl:mb-[16px] dark:text-white">
                    {data?.title}
                </Heading>
                <Text>{data?.description}</Text>

                <div className="flex gap-[10px] 3xl:gap-[16px] mt-[20px] 3xl:mt-[30px] mb-[25px] 3xl:mb-[55px] overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {data?.categories?.map((c) => (
                        <FilterPill key={c?.value} active={category === c?.value} onClick={() => setCategory(c?.value)}>
                            {c?.label}
                        </FilterPill>
                    ))}
                </div>

                {items.length === 0 ? (
                    <p className="py-[40px] text-center">{data?.emptyText}</p>
                ) : (
                    <div className="relative">
                        <SliderArrow dir="prev" label="Previous engagement" onClick={() => emblaApi?.scrollPrev()} className="hidden xl:flex absolute z-1 top-1/2 -translate-y-1/2 -left-[45px] 3xl:-left-[56px]" />
                        <SliderArrow dir="next" label="Next engagement" onClick={() => emblaApi?.scrollNext()} className="hidden xl:flex absolute z-1 top-1/2 -translate-y-1/2 -right-[45px] 3xl:-right-[56px]" />
                        <div ref={emblaRef} className="overflow-hidden">
                            <div className="flex -ml-[20px] touch-pan-y touch-pinch-zoom">
                                {items.map((item) => (
                                    <div key={item?.id} className="min-w-0 pl-[20px] flex-[0_0_88%] sm:flex-[0_0_60%] lg:flex-[0_0_calc(100%/3)]">
                                        <article className="h-full rounded-[10px] overflow-hidden bg-linear-to-b from-[#FFFAF4] to-[#FEF6EC] dark:from-[#1a1a1a] dark:to-[#1a1a1a]">
                                            <div className="relative aspect-586/231">
                                                <Image
                                                    src={item?.image?.url}
                                                    alt={item?.image?.alternativeText || ""}
                                                    fill
                                                    sizes="(min-width: 1024px) 33vw, 88vw"
                                                    className="object-cover"
                                                />
                                                <span className="absolute top-[15px] 3xl:top-[24px] left-0 px-[12px] 3xl:px-[18px] py-[5px] 3xl:py-[8px] rounded-r-[8px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-white text-[12px] 2xl:text-[14px] 3xl:text-[16px]">
                                                    {categoryLabel}
                                                </span>
                                            </div>
                                            <div className="p-[18px_20px_25px] 3xl:p-[28px_28px_40px]">
                                                <time dateTime={item?.date} className="block text_1 mb-[6px] 3xl:mb-[10px]">
                                                    {item?.displayDate}
                                                </time>
                                                <h3 className="text-[17px] 2xl:text-[19px] 3xl:text-[24px] leading-tight font-semibold text-[#212121] dark:text-white mb-[12px] 3xl:mb-[18px]">
                                                    {item?.title}
                                                </h3>
                                                <p>{item?.description}</p>
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
