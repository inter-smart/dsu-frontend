"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function DomainCard({ domain }) {
  const isHighlight = domain.variant === "highlight";
  return (
    <div
      className={
        isHighlight
          ? "rounded-[10px] border border-black/10 bg-gradient-to-r from-[#e65100] via-[#ff6d00] to-[#ff8f00] p-5 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg xl:p-6"
          : "rounded-[10px] border border-black/10 bg-gradient-to-r from-(--basecolor)/10 via-[#ff6d00]/10 to-(--basecolor2)/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-(--basecolor2) hover:shadow-lg dark:border-white/10 xl:p-6"
      }
    >
      {domain.icon && (
        <Image
          src={domain.icon}
          alt={domain.title}
          width={48}
          height={48}
          className="mb-3 size-9 object-contain xl:size-12"
        />
      )}
      <h3
        className={
          isHighlight
            ? "mb-2 text-[18px] font-semibold xl:text-[22px]"
            : "mb-2 text-[18px] font-semibold text-[#212121] dark:text-white xl:text-[22px]"
        }
      >
        {domain.title}
      </h3>
      <p className={isHighlight ? "text-[14px] leading-[1.4] text-white/90 3xl:text-[16px]" : "text_1 3xl:text-[16px]"}>
        {domain.description}
      </p>
    </div>
  );
}

function DomainsSlider({ domains }) {
  const [autoplayPlugin] = useState(() =>
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplayPlugin]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const syncButtons = useCallback((api) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  // Purely reactive: reads embla's own state, never writes back to it, so it
  // can't trigger a reInit feedback loop (unlike calling api.reInit() here would).
  const syncAutoplay = useCallback(
    (api) => {
      if (api.scrollSnapList().length > 1) autoplayPlugin.play();
      else autoplayPlugin.stop();
    },
    [autoplayPlugin],
  );

  useEffect(() => {
    if (!emblaApi) return;
    syncButtons(emblaApi);
    syncAutoplay(emblaApi);
    emblaApi.on("reInit", syncButtons);
    emblaApi.on("reInit", syncAutoplay);
    emblaApi.on("select", syncButtons);
    return () => {
      emblaApi.off("reInit", syncButtons);
      emblaApi.off("reInit", syncAutoplay);
      emblaApi.off("select", syncButtons);
    };
  }, [emblaApi, syncButtons, syncAutoplay]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="[--slide-gap:16px] relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="ml-[calc(var(--slide-gap)*-1)] flex touch-pan-y touch-pinch-zoom">
          {domains.map((domain) => (
            <div key={domain.title} className="min-w-0 flex-[0_0_100%] pl-(--slide-gap)">
              <DomainCard domain={domain} />
            </div>
          ))}
        </div>
      </div>

      {!prevBtnDisabled && (
        <button
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="absolute top-1/2 left-0 z-10 flex size-9 -translate-x-3 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full backdrop-blur-[5px] transition-opacity duration-300 hover:opacity-70"
        >
          <Image
            src="/images/testimonial-slider-btn.svg"
            alt="Previous"
            width={40}
            height={30}
            className="h-full w-full rotate-180 object-contain"
          />
        </button>
      )}
      {!nextBtnDisabled && (
        <button
          onClick={scrollNext}
          aria-label="Next slide"
          className="absolute top-1/2 right-0 z-10 flex size-9 translate-x-3 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full backdrop-blur-[5px] transition-opacity duration-300 hover:opacity-70"
        >
          <Image
            src="/images/testimonial-slider-btn.svg"
            alt="Next"
            width={40}
            height={30}
            className="h-full w-full object-contain"
          />
        </button>
      )}
    </div>
  );
}

export default function ResearchDomains({ data }) {
  const domains = data?.domains || [];
  const isMobile = useMediaQuery("(max-width: 639px)", { initializeWithValue: false });

  return (
    <section className="w-full bg-[#fff8ed] py-10 dark:bg-[#111111] sm:py-14 lg:py-16 xl:py-20 2xl:py-24 3xl:py-28">
      <div className="container">
        {(data?.title || data?.description) && (
          <div className="mx-auto mb-10 max-w-[765px] text-center xl:mb-14">
            {data.title && <h2 className="cmn_Title">{data.title}</h2>}
            {data.description && <p className="text_1 3xl:text-[18px]">{data.description}</p>}
          </div>
        )}

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-8 xl:gap-10">
          {domains.length > 0 && (
            <div className="w-full lg:w-1/2">
              {isMobile ? (
                <DomainsSlider domains={domains} />
              ) : (
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:gap-5">
                  {domains.map((domain) => (
                    <DomainCard key={domain.title} domain={domain} />
                  ))}
                </div>
              )}
            </div>
          )}

          {data?.image?.url && (
            <div className="group relative w-full overflow-hidden rounded-[10px] lg:w-1/2">
              <Image
                src={data.image.url}
                alt={data.image.alternativeText || "Research & innovation"}
                width={771}
                height={638}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {data.imageCaption && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-center sm:p-6 xl:p-10">
                  <p className="mx-auto max-w-[90%] text-[13px] leading-snug font-bold tracking-wide text-white uppercase sm:text-[16px] xl:max-w-full xl:text-[22px]">
                    {data.imageCaption}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
