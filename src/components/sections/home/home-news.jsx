"use client";
import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ShineBorder } from "@/components/ui/shine-border";

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
                <div className="group w-full h-full bg-linear-to-b from-[#FFF8EE]/50 to-[#FFF3E0]/50 dark:bg-none dark:bg-white/5 rounded-md 2xl:rounded-[10px] overflow-hidden block relative z-0">
                  <ShineBorder
                    shineColor={["#909191"]}
                    className="hidden dark:block"
                  />
                  <div className="w-full h-auto block relative z-0">
                    <div className="w-full h-auto aspect-560/220 mb-7.5 2xl:mb-10 3xl:mb-12.5 border-b border-[#909191] overflow-hidden block">
                      <Image
                        src={item?.path}
                        width={560}
                        height={220}
                        alt={item?.title || "News"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                    <div className="w-auto h-auto p-[12px_10px] 2xl:p-[15px_10px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) mx-5 2xl:mx-6.25 3xl:mx-7.5 rounded-md 2xl:rounded-[10px] overflow-hidden flex flex-col items-center justify-center absolute z-1 inset-[auto_auto_-20%_0]">
                      <span className="text-xl 2xl:text-2xl 3xl:text-[28px] leading-normal font-semibold text-white">
                        {item?.date}
                      </span>
                      <span className="text-xs 2xl:text-[13px] 3xl:text-sm leading-normal font-normal text-white">
                        {item?.year}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-auto p-[15px_20px] 2xl:p-[15px_25px] 3xl:p-[20px_30px] flex flex-col justify-between">
                    <div className="text-base 2xl:text-lg 3xl:text-[23px] leading-normal font-bold text-[#212121] dark:text-white w-[90%] mb-5 3xl:mb-7.5">
                      {item?.title}
                    </div>
                    <Link
                      href={item?.link}
                      target="_blank"
                      className="text-sm 3xl:text-[15px] leading-normal font-bold uppercase bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit transition-opacity duration-500 hover:opacity-50"
                    >
                      Read More {" > "}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
