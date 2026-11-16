"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";

const sizeClass = {
  wide: "!w-[100%] sm:!w-[50%] md:!w-[65%] lg:!w-[calc((100%-40px)*0.59)]",
  narrow: "!w-[100%] sm:!w-[50%] md:!w-[65%] lg:!w-[calc((100%-40px)*0.41)]",
};

const navBtn =
  "flex size-7 items-center justify-center rounded-full border border-[#B87333] bg-white text-[#B87333] transition-all duration-300 hover:bg-[#B87333] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#B87333] md:size-8";

export default function AIFactorySlider({ data }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [locked, setLocked] = useState(false);

  if (!data) return null;

  const sync = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    setLocked(swiper.isLocked);
  };

  return (
    <section className="w-full bg-white py-10 md:py-14 lg:py-20">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mx-auto text-center">
          <h2 className="font-bold leading-[1.15] tracking-tight text-black cmn_Title">
            {data.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[1360px] text-[clamp(0.9375rem,0.8rem+0.4vw,1.25rem)] leading-relaxed text-slate-600 md:mt-6">
            {data.description}
          </p>
        </div>

        {/* Slider */}
        <div className="mt-8 md:mt-12">
          <Swiper
            modules={[A11y]}
            slidesPerView="auto"
            spaceBetween={16}
            breakpoints={{ 1024: { spaceBetween: 40 } }}
            watchOverflow
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              sync(swiper);
            }}
            onSlideChange={sync}
            onResize={sync}
            onLock={sync}
            onUnlock={sync}
            className="!overflow-hidden"
          >
            {data.slides?.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className={sizeClass[slide.size] || sizeClass.wide}
              >
                <div className="relative h-[200px] overflow-hidden rounded-xl sm:h-[250px] lg:h-[300px] xl:h-[400px] 2xl:h-[500px]">
                  <Image
                    src={slide.image?.url}
                    alt={slide.image?.alternativeText || slide.title || ""}
                    fill
                    sizes="(min-width: 1024px) 59vw, 88vw"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav buttons: hidden when every slide already fits */}
          {!locked && (
            <div className="mt-6 flex items-center justify-center gap-3 md:mt-8 md:gap-4">
              <button
                type="button"
                aria-label="Previous slide"
                disabled={isBeginning}
                onClick={() => swiperRef.current?.slidePrev()}
                className={navBtn}
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                disabled={isEnd}
                onClick={() => swiperRef.current?.slideNext()}
                className={navBtn}
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}