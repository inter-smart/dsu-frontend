"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/effect-fade";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { withLineBreaks } from "@/lib/line-breaks";

// Tile widths inside a slide (wide + narrow pair, like the design)
const TILE_WIDTH = {
  wide: "w-[62%] sm:w-[65.8%]",
  narrow: "flex-1 min-w-0",
};

// Start offsets for the scroll reveal
const FROM = {
  up: "translate-y-6 lg:translate-y-8",
  right: "translate-x-8 lg:translate-x-16",
};

function DotsIcon({ className }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <circle cx="9" cy="3" r="1.3" opacity="0.6" />
      <circle cx="3" cy="9" r="1.3" opacity="0.6" />
      <circle cx="9" cy="9" r="1.3" />
      <circle cx="15" cy="9" r="1.3" opacity="0.6" />
      <circle cx="9" cy="15" r="1.3" opacity="0.6" />
      <circle cx="3" cy="3" r="0.9" opacity="0.35" />
      <circle cx="15" cy="15" r="0.9" opacity="0.35" />
    </svg>
  );
}

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

// Fires once when the section enters the viewport
function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}

// Scroll reveal wrapper (fade + slide). Delay only applies while revealing.
function Reveal({ children, inView, delay = 0, from = "up", className }) {
  return (
    <div
      className={cn(
        "transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:opacity-100 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:transition-none",
        inView
          ? "opacity-100 translate-x-0 translate-y-0"
          : cn("opacity-0", FROM[from]),
        className,
      )}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

export default function CampusSmart({ data }) {
  const [sectionRef, inView] = useInView();
  const galleryRef = useRef(null);
  const [swiper, setSwiper] = useState(null);
  const [active, setActive] = useState(0);

  const slides = data?.slides || [];
  const paragraphs = data?.description || [];
  const multi = slides.length > 1;
  const galleryId = `campus-smart-${data?.id || 1}`;

  // Autoplay only runs once the section is visible
  useEffect(() => {
    if (!swiper || !multi || !swiper.autoplay) return;
    if (inView) swiper.autoplay.start();
    else swiper.autoplay.stop();
  }, [swiper, inView, multi]);

  // Fancybox (image / html5 video / youtube) + pause autoplay while open
  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;

    Fancybox.bind(el, "[data-fancybox]", {
      Hash: false,
      on: {
        init: () => {
          if (multi) swiper?.autoplay?.stop?.();
        },
        destroy: () => {
          if (multi && inView) swiper?.autoplay?.start?.();
        },
      },
    });

    return () => {
      Fancybox.unbind(el);
      Fancybox.close();
    };
  }, [swiper, multi, inView, slides.length]);

  if (!data) return null;

  return (
    <section
      ref={sectionRef}
      data-no-reveal
      className="w-full h-auto relative overflow-hidden bg-[#FFF6EB] dark:bg-[#18191B] py-10 sm:py-12 lg:py-14 2xl:py-18 3xl:py-22"
    >
      <div className="container">
        <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-[minmax(0,35%)_minmax(0,1fr)] gap-6 lg:gap-9 2xl:gap-10 items-center">
          {/* Left: content */}
          <div className="w-full h-auto">
            {data?.eyebrow && (
              <Reveal inView={inView} delay={0}>
                <div className="flex items-center gap-2 mb-1.5 lg:mb-2">
                  <span
                    className={cn(
                      "w-5 lg:w-6.5 h-0.5 bg-(--basecolor) origin-left transition-transform duration-700 ease-out delay-200 motion-reduce:scale-x-100 motion-reduce:transition-none",
                      inView ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                  <span className="text-xs sm:text-sm lg:text-base 2xl:text-lg leading-none font-normal uppercase tracking-wide bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent">
                    {data.eyebrow}
                  </span>
                </div>
              </Reveal>
            )}

            <Reveal
              inView={inView}
              delay={100}
              className="mb-4 lg:mb-6 2xl:mb-7.5"
            >
              <h2 className="cmn_Title">{data?.title}</h2>
            </Reveal>

            <div className="w-full h-auto flex flex-col gap-4 lg:gap-6 2xl:gap-7.5">
              {paragraphs.map((text, index) => (
                <Reveal key={index} inView={inView} delay={200 + index * 100}>
                  <p className="text_1 leading-[1.6] font-normal text-[#4A5565] dark:text-[#9CA3AF]">
                    {text}
                  </p>
                </Reveal>
              ))}
            </div>

            {data?.button?.label && (
              <Reveal
                inView={inView}
                delay={200 + paragraphs.length * 100}
                className="mt-6 lg:mt-8 2xl:mt-10"
              >
                <Link
                  href={data?.button?.href || "/"}
                  className="group inline-flex items-center gap-3 h-11 lg:h-12 2xl:h-12.5 px-4 lg:px-5 rounded-[3px] 2xl:rounded-[4px] bg-linear-to-r from-(--basecolor) to-(--basecolor2) text-white text-base 2xl:text-lg leading-none font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
                >
                  {withLineBreaks(data.button.label)}
                  <DotsIcon className="w-4 h-4 2xl:w-4.5 2xl:h-4.5 transition-transform duration-500 group-hover:rotate-90" />
                </Link>
              </Reveal>
            )}
          </div>

          {/* Right: fade slider */}
          <Reveal inView={inView} from="right" delay={150} className="w-full">
            <div ref={galleryRef} className="relative w-full h-auto">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={1200}
                rewind={multi}
                allowTouchMove={multi}
                grabCursor={multi}
                autoplay={
                  multi
                    ? {
                        delay: 4500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }
                    : false
                }
                onSwiper={setSwiper}
                onSlideChange={(s) => setActive(s.activeIndex)}
                className="w-full"
              >
                {slides.map((slide, sIndex) => (
                  <SwiperSlide key={slide?.id || sIndex}>
                    {({ isActive }) => (
                      <div className="w-full h-55 sm:h-75 lg:h-95 xl:h-115 2xl:h-136.75 3xl:h-155 flex gap-2.5 sm:gap-3 lg:gap-4 2xl:gap-5">
                        {slide?.items?.map((item, i) => {
                          const type = item?.type || "image";
                          const isImage = type === "image";
                          const isVideo = type === "video";
                          const href = item?.media?.url || item?.thumbnail?.url;
                          const thumbUrl =
                            item?.thumbnail?.url ||
                            (isImage ? item?.media?.url : null);

                          if (!href || !thumbUrl) return null;

                          return (
                            <div
                              key={item?.id || i}
                              className={cn(
                                "relative h-full overflow-hidden rounded-[5px] sm:rounded-[8px] 2xl:rounded-[10px]",
                                TILE_WIDTH[item?.size] || "flex-1 min-w-0",
                              )}
                            >
                              <a
                                href={href}
                                data-fancybox={galleryId}
                                data-type={isVideo ? "html5video" : undefined}
                                data-thumb-src={thumbUrl}
                                data-caption={item?.caption || undefined}
                                aria-label={
                                  isImage ? "View image" : "Play video"
                                }
                                className="group relative block w-full h-full"
                              >
                                <Image
                                  src={thumbUrl}
                                  alt={item?.thumbnail?.alternativeText || ""}
                                  fill
                                  sizes={
                                    item?.size === "wide"
                                      ? "(min-width: 1024px) 45vw, 70vw"
                                      : "(min-width: 1024px) 25vw, 40vw"
                                  }
                                  className={cn(
                                    "object-cover transition-transform duration-[2800ms] ease-out motion-reduce:scale-100 motion-reduce:transition-none",
                                    isActive && inView
                                      ? "scale-100"
                                      : "scale-110",
                                  )}
                                  style={{
                                    transitionDelay:
                                      isActive && inView
                                        ? `${i * 200}ms`
                                        : "0ms",
                                  }}
                                />

                                <span
                                  className={cn(
                                    "absolute inset-0 transition-colors duration-300",
                                    isImage
                                      ? "bg-black/0 group-hover:bg-black/10"
                                      : "bg-black/10 group-hover:bg-black/25",
                                  )}
                                />

                                {!isImage && (
                                  <span className="absolute inset-0 flex items-center justify-center">
                                    <PlayIcon className="w-9 sm:w-10 lg:w-[43px] 2xl:w-14 h-auto aspect-square transition-transform duration-300 group-hover:scale-110" />
                                  </span>
                                )}
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Dots */}
              {multi && (
                <div className="absolute bottom-2.5 lg:bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/25 backdrop-blur-sm">
                  {slides.map((slide, i) => (
                    <button
                      key={slide?.id || i}
                      type="button"
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => swiper?.slideTo(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                        active === i ? "w-5 bg-white" : "w-1.5 bg-white/60",
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}