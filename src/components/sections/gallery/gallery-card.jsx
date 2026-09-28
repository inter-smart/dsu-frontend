"use client";

import Image from "next/image";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function GalleryCard({ item }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="group w-full h-full rounded-md 2xl:rounded-[10px] overflow-hidden">
      <div className="w-full h-auto aspect-562/370 overflow-hidden relative z-0 rounded-md 2xl:rounded-[10px]">
        {item?.category && (
          <span className="absolute z-2 top-3 left-3 xl:top-4 xl:left-4 px-3.5 py-2 xl:px-4.5 xl:py-2.5 rounded-[8px] xl:rounded-[12px] text-xs xl:text-sm font-semibold text-white bg-linear-to-r from-(--basecolor) to-(--basecolor2) backdrop-blur-md">
            {item.category}
          </span>
        )}

        {item?.isVideo && (
          <span className="absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8 xl:size-9 3xl:size-11">
            <Image
              src="/images/icon-gallery-play.svg"
              alt=""
              width={43}
              height={43}
              className="w-full h-full object-contain"
            />
          </span>
        )}

        <div ref={emblaRef} className="w-full h-full overflow-hidden">
          <div className="w-full h-full flex">
            {item?.images?.map((image, index) => (
              <div key={index} className="min-w-0 flex-[0_0_100%]">
                <Image
                  src={image}
                  width={562}
                  height={370}
                  alt={item?.title || "Gallery"}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous image"
          className="absolute z-2 top-1/2 left-2.5 xl:left-3.5 -translate-y-1/2 opacity-90 transition-opacity duration-300 hover:opacity-100"
        >
          <Image
            src="/images/icon-gallery-arrow-left.svg"
            alt=""
            width={18}
            height={27}
            className="w-2.5 h-auto xl:w-3"
          />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next image"
          className="absolute z-2 top-1/2 right-2.5 xl:right-3.5 -translate-y-1/2 opacity-90 transition-opacity duration-300 hover:opacity-100"
        >
          <Image
            src="/images/icon-gallery-arrow-right.svg"
            alt=""
            width={18}
            height={27}
            className="w-2.5 h-auto xl:w-3"
          />
        </button>
      </div>
      <div className="text-base 2xl:text-lg 3xl:text-[23px] leading-normal font-bold text-[#212121] dark:text-white pt-4 xl:pt-5 3xl:pt-6">
        {item?.title}
      </div>
    </div>
  );
}
