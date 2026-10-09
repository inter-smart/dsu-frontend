"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { SliderArrow } from "@/components/sections/placements/slider-controls";

export default function RecruitmentGallery({ data }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = (api) => setSelected(api.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        return () => emblaApi.off("select", onSelect);
    }, [emblaApi]);

    if (!data) return null;

    return (
        <section className="py-[40px] xl:py-[60px] 2xl:py-[75px] 3xl:py-[90px] bg-white dark:bg-[#0f1011] overflow-hidden transition-colors duration-300">
            <div className="container mb-[25px] 3xl:mb-[40px]">
                <Heading as="h2" className="text-[25px] leading-[1.1] mb-[8px] 3xl:mb-[16px] dark:text-white">
                    {data?.title}
                </Heading>
                <Text>{data?.description}</Text>
            </div>

            <div className="relative">
                <div ref={emblaRef} className="overflow-hidden">
                    <div className="flex touch-pan-y touch-pinch-zoom">
                        {data?.images?.map((item, index) => {
                            const isActive = index === selected;
                            return (
                                <div key={item?.id} className="min-w-0 flex-[0_0_85%] md:flex-[0_0_62%] aspect-1193/786 flex items-center">
                                    <div
                                        className={`relative w-full overflow-hidden transition-all duration-500 ${isActive ? "h-full rounded-[10px] z-1" : "h-[68%]"
                                            }`}
                                    >
                                        <Image
                                            src={item?.image?.url}
                                            alt={item?.image?.alternativeText || ""}
                                            fill
                                            sizes="(min-width: 768px) 65vw, 85vw"
                                            className="object-cover"
                                        />
                                        {item?.caption && (
                                            <div
                                                className={`absolute inset-x-0 bottom-0 p-[20px] 3xl:p-[40px] bg-linear-to-t from-black/60 to-transparent text-white text-[16px] 2xl:text-[20px] 3xl:text-[30px] font-semibold transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"
                                                    }`}
                                            >
                                                {item.caption}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* Arrows sit on the edges of the centred slide (slide = 85% / 62% of the row) */}
                <SliderArrow dir="prev" label="Previous image" onClick={() => emblaApi?.scrollPrev()} className="absolute z-2 top-1/2 -translate-y-1/2 left-[7.5%] md:left-[19%] -translate-x-1/2 sm:w-[36px] sm:h-[36px] 3xl:w-[68px] 3xl:h-[68px] bg-white/80 dark:bg-white/80 3xl:[&_img]:w-[18px]" />
                <SliderArrow dir="next" label="Next image" onClick={() => emblaApi?.scrollNext()} className="absolute z-2 top-1/2 -translate-y-1/2 right-[7.5%] md:right-[19%] translate-x-1/2 sm:w-[36px] sm:h-[36px] 3xl:w-[68px] 3xl:h-[68px] bg-white/80 dark:bg-white/80 3xl:[&_img]:w-[18px]" />
            </div>
        </section>
    );
}
