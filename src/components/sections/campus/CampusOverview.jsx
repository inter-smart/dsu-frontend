"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Fancybox } from "@fancyapps/ui";
import { cn } from "@/lib/utils";

import "swiper/css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// From lg: (100% - 2 gaps of 14px) split as 0.3072 + 0.3072 + 0.3856 = 1 -> fills the container exactly
// Below lg: peeking slides (the trailing ! beats Swiper's own slide width)
const SLIDE_WIDTH = {
  narrow:
    "w-[82%]! sm:w-[55%]! md:w-[40%]! lg:w-[calc((100%_-_28px)_*_0.3072)]!",
  wide: "w-[88%]! sm:w-[62%]! md:w-[48%]! lg:w-[calc((100%_-_28px)_*_0.3856)]!",
};

const NAV_BTN =
  "absolute top-1/2 -translate-y-1/2 z-10 w-9 h-9 lg:w-11 lg:h-11 2xl:w-12.5 2xl:h-12.5 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-md border border-white/60 dark:border-white/20 shadow-md flex items-center justify-center text-[#212121] dark:text-white hover:bg-(--basecolor) hover:text-white hover:border-(--basecolor) transition-colors duration-300 cursor-pointer [&.swiper-button-disabled]:opacity-40 [&.swiper-button-disabled]:pointer-events-none";

function PlayIcon({ className }) {
  return (
    <svg
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M21.5 0C9.62588 0 0 9.62588 0 21.5C0 33.3741 9.62588 43 21.5 43C33.3741 43 43 33.3741 43 21.5C42.9874 9.63119 33.3689 0.0126877 21.5 0ZM30.5545 22.185C30.4057 22.4836 30.1637 22.7257 29.865 22.8745V22.8821L17.5793 29.025C16.8206 29.4041 15.8983 29.0965 15.5191 28.3377C15.4113 28.1221 15.3558 27.884 15.3571 27.6429V15.3572C15.3567 14.509 16.0439 13.8212 16.8921 13.8207C17.1307 13.8206 17.366 13.8761 17.5793 13.9827L29.865 20.1256C30.6241 20.5039 30.9329 21.4259 30.5545 22.185Z"
        fill="white"
        fillOpacity="0.8"
      />
    </svg>
  );
}

export default function CampusOverview({ data }) {
  const galleryRef = useRef(null);
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [locked, setLocked] = useState(false);

  const items = data?.items || [];
  const paragraphs = data?.description || [];
  const galleryId = `campus-overview-${data?.id || 1}`;

  // Fancybox (image / html5 video / youtube)
  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;

    Fancybox.bind(el, "[data-fancybox]", {
      Hash: false,
    });

    return () => {
      Fancybox.unbind(el);
      Fancybox.close();
    };
  }, [items.length]);

  if (!data) return null;

  return (
    <section className="w-full h-auto py-10 lg:py-12.5 xl:py-15 2xl:py-17.5 3xl:py-20">
      <div className="container">
        {/* Top: heading left, paragraphs right */}
        <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 2xl:gap-20 lg:items-center mb-6 sm:mb-8 lg:mb-10 2xl:mb-14">
          <div className="w-full h-auto">
            {data?.eyebrow && (
              <div className="flex items-center gap-2 mb-1.5 lg:mb-2">
                <span className="w-5 lg:w-6.5 h-0.5 bg-(--basecolor)" />
                <span className="text-xs sm:text-sm lg:text-base 2xl:text-lg leading-none font-normal uppercase tracking-wide bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent">
                  {data.eyebrow}
                </span>
              </div>
            )}
            <h2 className="cmn_Title lg:max-w-[85%]">{data?.title}</h2>
          </div>

          <div className="w-full h-auto flex flex-col gap-4 lg:gap-6 2xl:gap-7.5">
            {paragraphs.map((text, index) => (
              <p
                key={index}
                className="text_1 leading-[1.6] font-normal text-[#4A5565] dark:text-[#9CA3AF]"
              >
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Media slider */}
        <div ref={galleryRef} className="relative w-full h-auto">
          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={10}
            breakpoints={{
              1024: { spaceBetween: 14 },
            }}
            navigation={{ prevEl, nextEl }}
            watchOverflow
            onSwiper={(swiper) => setLocked(swiper.isLocked)}
            onLock={() => setLocked(true)}
            onUnlock={() => setLocked(false)}
            className="w-full"
          >
            {items.map((item) => {
              const href = item?.media?.url;
              const isImage = item?.type === "image";
              const isVideo = item?.type === "video";
              const thumbUrl = item?.thumbnail?.url || (isImage ? href : null);

              if (!href || !thumbUrl) return null;

              return (
                <SwiperSlide
                  key={item?.id}
                  className={SLIDE_WIDTH[item?.size] || SLIDE_WIDTH.narrow}
                >
                  <a
                    href={href}
                    data-fancybox={galleryId}
                    data-type={isVideo ? "html5video" : undefined}
                    data-thumb-src={thumbUrl}
                    data-caption={item?.caption || undefined}
                    aria-label={isImage ? "View image" : "Play video"}
                    className="group relative block w-full h-55 sm:h-65 lg:h-82.5 xl:h-90 2xl:h-100 3xl:h-115 rounded-[5px] sm:rounded-[8px] overflow-hidden"
                  >
                    <Image
                      src={thumbUrl}
                      alt={item?.thumbnail?.alternativeText || ""}
                      fill
                      sizes="(min-width: 1024px) 40vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {!isImage && (
                      <>
                        <span className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />
                        <span className="absolute inset-0 flex items-center justify-center">
                          <PlayIcon className="w-9 sm:w-10 lg:w-[43px] 2xl:w-14 h-auto aspect-square transition-transform duration-300 group-hover:scale-110" />
                        </span>
                      </>
                    )}
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Nav buttons (hidden when all slides fit) */}
          <button
            type="button"
            ref={setPrevEl}
            aria-label="Previous"
            className={cn(NAV_BTN, "left-1 lg:left-3", locked && "hidden")}
          >
            <ChevronLeft className="w-4.5 h-4.5 lg:w-5 lg:h-5" />
          </button>
          <button
            type="button"
            ref={setNextEl}
            aria-label="Next"
            className={cn(NAV_BTN, "right-1 lg:right-3", locked && "hidden")}
          >
            <ChevronRight className="w-4.5 h-4.5 lg:w-5 lg:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}