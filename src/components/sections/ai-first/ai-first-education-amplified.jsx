"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function EducationAmplified({ data }) {
  const cards = data?.cards || [];

  // loop stays statically true: with <= 1 snap point (items fit within one view)
  // there is nothing to scroll/loop to, so it's a no-op — this is what makes
  // loop + autoplay effectively "on" only when items outnumber the per-view slots.
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
  const syncAutoplay = useCallback((api) => {
    if (api.scrollSnapList().length > 1) autoplayPlugin.play();
    else autoplayPlugin.stop();
  }, [autoplayPlugin]);

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
    <section className="w-full pb-10 sm:pb-14 lg:pb-16 xl:pb-20 2xl:pb-24 3xl:pb-28">
      {data?.banner?.image?.url && (
        <div className="relative mb-10 h-[420px] w-full sm:h-[480px] md:h-[540px] xl:h-[600px] 2xl:h-[650px] 3xl:h-[720px]">
          <Image
            src={data.banner.image.url}
            alt={data?.banner?.image?.alternativeText || data?.banner?.title || "Learning commons"}
            fill 
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />
          <div className="container relative z-10 flex h-full flex-col justify-end pb-8 xl:pb-10">
            {data.banner.title && (
              <h2 className="mb-2 max-w-[500px] text-[24px] font-bold leading-tight text-white sm:text-[30px] xl:text-[40px] 3xl:text-[55px]">
                {data.banner.title}
              </h2>
            )}
            {data.banner.description && (
              <p className="mb-6 max-w-[460px] text-[14px] leading-relaxed text-white sm:text-[16px] xl:text-[18px]">
                {data.banner.description}
              </p>
            )}
            {data?.banner?.pills?.length > 0 && (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 xl:gap-5">
                {data.banner.pills.map((pill) => (
                  <div
                    key={pill.title}
                    className="rounded-[30px] bg-black/10 p-5 backdrop-blur-[2px] transition-colors duration-300 hover:bg-black/25 xl:rounded-[40px] xl:p-6"
                  >
                    {pill.icon && (
                      <div className="mb-2 flex size-9 items-center justify-center rounded-full bg-[#F97316] xl:size-10">
                        <Image src={pill.icon} alt={pill.title} width={24} height={24} className="size-5 object-contain xl:size-6" />
                      </div>
                    )}
                    <h3 className="mb-1 text-[16px] font-bold text-white xl:text-[20px]">
                      {pill.title}
                    </h3>
                    <p className="text-[13px] leading-snug text-white/90 xl:text-[15px]">
                      {pill.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="container">
        {(data?.title || data?.description) && (
          <div className="mx-auto mb-10 max-w-[640px] text-center xl:mb-14">
            {data.title && <h2 className="cmn_Title">{data.title}</h2>}
            {data.description && <p className="text_1 3xl:text-[18px]">{data.description}</p>}
          </div>
        )}

        {cards.length > 0 && (
          <div className="[--slide-gap:20px] xl:[--slide-gap:24px] relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="ml-[calc(var(--slide-gap)*-1)] flex touch-pan-y touch-pinch-zoom">
                {cards.map((card) => (
                  <div
                    key={card.title}
                    className="min-w-0 flex-[0_0_100%] pl-(--slide-gap) sm:flex-[0_0_50%] md:flex-[0_0_calc(100%/3)]"
                  >
                    <div className="group relative aspect-[557/458] overflow-hidden rounded-[10px]">
                      {card.image?.url && (
                        <Image
                          src={card.image.url}
                          alt={card.image.alternativeText || card.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                      <div className="absolute right-4 bottom-4 left-4 xl:right-6 xl:bottom-6 xl:left-6">
                        <h3 className="mb-1.5 text-[18px] font-bold text-white xl:text-[24px]">
                          {card.title}
                        </h3>
                        <p className="text-[13px] leading-snug text-white/90 xl:text-[16px]">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {!prevBtnDisabled && (
              <button
                onClick={scrollPrev}
                aria-label="Previous slide"
                className="absolute top-1/2 left-0 z-10 flex size-9 -translate-x-3 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full backdrop-blur-[5px] transition-opacity duration-300 hover:opacity-70 xl:size-10"
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
                className="absolute top-1/2 right-0 z-10 flex size-9 translate-x-3 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full backdrop-blur-[5px] transition-opacity duration-300 hover:opacity-70 xl:size-10"
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
        )}
      </div>
    </section>
  );
}
