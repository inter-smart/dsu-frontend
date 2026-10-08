"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { SliderArrow } from "@/components/sections/placements/slider-controls";

export default function RecruiterTestimonials({ data }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });

    if (!data) return null;

    return (
        <section className="py-[40px] sm:py-[50px] xl:py-[60px] 2xl:py-[75px] 3xl:py-[90px] bg-linear-to-b from-[#FEF7EE] to-[#FFF1DE] dark:from-[#0f1011] dark:to-[#0f1011] transition-colors duration-300">
            <div className="container">
                <div className="flex items-end justify-between gap-[20px] mb-[25px] 3xl:mb-[40px]">
                    <div>
                        <Heading as="h2" className="mb-[8px] 3xl:mb-[16px] dark:text-white">
                            {data?.title}
                        </Heading>
                        <Text>{data?.description}</Text>
                    </div>
                    <div className="flex gap-[6px] shrink-0">
                        <SliderArrow dir="prev" label="Previous testimonial" onClick={() => emblaApi?.scrollPrev()} />
                        <SliderArrow dir="next" label="Next testimonial" onClick={() => emblaApi?.scrollNext()} />
                    </div>
                </div>

                <div ref={emblaRef} className="overflow-hidden">
                    <div className="flex -ml-[20px] touch-pan-y touch-pinch-zoom">
                        {data?.testimonials?.map((item) => (
                            <div key={item?.id} className="min-w-0 pl-[20px] flex-[0_0_88%] sm:flex-[0_0_60%] lg:flex-[0_0_calc(100%/3)]">
                                <figure className="h-full flex flex-col p-[25px_20px] 3xl:p-[45px_33px] rounded-[10px] bg-linear-to-br from-[#EDF3FD] to-[#F6F7FB] dark:from-[#1a1a1a] dark:to-[#1a1a1a]">
                                    <Image
                                        src={item?.logo?.url}
                                        alt={item?.logo?.alternativeText || ""}
                                        width={210}
                                        height={50}
                                        className="h-[34px] 3xl:h-[50px] w-auto object-contain object-left mb-[25px] 3xl:mb-[42px]"
                                    />
                                    <Image
                                        src="/images/recruiters-industry/icon-quote.png"
                                        alt=""
                                        width={54}
                                        height={43}
                                        className="w-[38px] 3xl:w-[54px] h-auto mb-[20px] 3xl:mb-[45px]"
                                    />
                                    <blockquote className="flex-1 pb-[20px] 3xl:pb-[35px] mb-[20px] 3xl:mb-[45px] border-b border-black/10 dark:border-white/10">
                                        <p>&quot;{item?.quote}&quot;</p>
                                    </blockquote>
                                    <figcaption>
                                        <div className="text-[15px] 2xl:text-[17px] 3xl:text-[20px] font-medium text-[#212121] dark:text-white">
                                            {item?.name}
                                        </div>
                                        <div className="text-[12px] 3xl:text-[14px] text-[#212121] dark:text-[#CBD5E1] mt-[4px]">
                                            {item?.company}
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
