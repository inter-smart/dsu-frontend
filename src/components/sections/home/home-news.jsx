"use client";
import Image from "next/image";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import NewsCard from "@/components/layout/common/news-card";

export default function News({ data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: "trimSnaps",
    skipSnaps: false,
  });
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  return (
    <section className="w-full h-auto py-10 sm:py-12.5 2xl:py-15 3xl:py-20 bg-white dark:bg-[#101010] block">
      <div className="container">
        <div className="w-full h-auto mb-7.5 sm:mb-5 2xl:mb-6.25 3xl:mb-7.5 flex items-center flex-wrap justify-between">
          <div className="text-3xl 3xl:text-[40px] leading-normal font-bold text-[#212121] dark:text-white">
            {data?.title}
          </div>
          <div className="[--size:30px] gap-1.25 flex justify-end">
            <button
              type="button"
              onClick={scrollPrev}
              className="w-(--size) h-(--size) p-[5px_10px] border border-[#D9D9D9] dark:border-white/10 flex items-center justify-center transition-opacity duration-500 hover:opacity-50"
              aria-label="Previous slide"
            >
              <Image
                src="/images/left-arrow-button.svg"
                width={15}
                height={15}
                alt="Previous"
                className="w-full h-full object-contain"
              />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="w-(--size) h-(--size) p-[5px_10px] border border-[#D9D9D9] dark:border-white/10 flex items-center justify-center transition-opacity duration-500 hover:opacity-50"
              aria-label="Next slide"
            >
              <Image
                src="/images/right-arrow-button.svg"
                width={15}
                height={15}
                alt="Next"
                className="w-full h-full object-contain"
              />
            </button>
          </div>
        </div>
        <div className="w-full h-auto overflow-hidden" ref={emblaRef}>
          <div className="[--slide--sapcing:10px] sm:[--slide--sapcing:15px] 2xl:[--slide--sapcing:20px] ml-[calc(var(--slide--sapcing)*-1)] flex touch-pan-y touch-pinch-zoom">
            {data?.news_list?.map((item) => (
              <div
                key={item?.id}
                className="pl-(--slide--sapcing) min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_calc(100%/3)]"
              >
                <NewsCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
