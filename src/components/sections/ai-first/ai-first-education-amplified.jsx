"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ShineBorder } from "@/components/ui/shine-border";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";

export default function EducationAmplified({ data }) {
  const cards = data?.cards || [];

  // loop stays statically true: with <= 1 snap point (items fit within one view)
  // there is nothing to scroll/loop to, so it's a no-op — this is what makes
  // loop + autoplay effectively "on" only when items outnumber the per-view slots.
  const [autoplayPlugin] = useState(() =>
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplayPlugin],
  );
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

  const [academicEmblaRef, academicEmblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      breakpoints: {
        "(min-width: 640px)": { align: "start" },
      },
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  return (
    <section className="w-full h-auto pb-10 sm:pb-17.5 lg:pb-22.5 2xl:pb-25 3xl:pb-35 block">
      <div className="w-full h-auto max-lg:min-h-125 aspect-1920/810 mb-10 lg:mb-12.5 2xl:mb-17.5 3xl:mb-22.5 pb-5 lg:pb-7.5 2xl:pb-10 overflow-hidden flex relative z-0 before:content-[''] before:w-full before:h-1/2 before:bg-linear-to-t before:from-black before:to-black/0 before:pointer-events-none before:absolute before:z-0 before:inset-[auto_0_0_0] after:content-[''] after:size-full after:bg-black after:pointer-events-none after:opacity-20 after:absolute after:z-1 after:inset-0">
        <div className="pointer-events-none absolute inset-x-0 top-[-2%] sm:top-[-3.5%] lg:top-[-7%] z-2 w-full whitespace-nowrap text-center text-[clamp(0.75rem,5.4vw,8rem)] leading-[1.8] tracking-[-2%] font-bold uppercase opacity-40 text-transparent bg-clip-text bg-linear-to-t from-[#919191]/0 to-white">
          Entering a Smarter Learning World
        </div>
        <Image
          src={data.banner.image.url}
          alt={data?.banner?.image?.alternativeText || "Learning commons"}
          width={1920}
          height={810}
          className="size-full object-cover absolute -z-1 inset-0"
        />
        <div className="container flex">
          <div className="w-full h-auto mt-auto relative z-2 flex items-end flex-wrap">
            <div className="w-full lg:w-[35%] lg:pr-12.5 mb-7.5 lg:mb-0">
              <Heading className="text-white mb-2.5 sm:mb-3.75 2xl:mb-6.25 3xl:mb-8.75">
                {data?.banner?.title}
              </Heading>
              <Text className="text-white">{data?.banner?.description}</Text>
            </div>
            <div className="w-full lg:w-[65%]">
              <div
                className="[--slide-gap:10px] sm:[--slide-gap:20px] lg:[--slide-gap:25px] xl:[--slide-gap:35px] 2xl:[--slide-gap:40px] 3xl:[--slide-gap:60px] w-full h-auto sm:overflow-hidden"
                ref={academicEmblaRef}
              >
                <div className="ml-[calc(var(--slide-gap)*-1)] touch-pan-y touch-pinch-zoom flex">
                  {data.banner.pills.map((pill) => (
                    <div
                      key={pill.title}
                      className="min-w-0 translate-x-0 translate-y-0 flex-[0_0_calc(100%/1.4)] sm:flex-[0_0_calc(100%/2)] md:flex-[0_0_calc(100%/3)] pl-(--slide-gap)"
                    >
                      <div className="w-full h-full p-3.75 sm:p-5 lg:p-[20px_15px] 2xl:p-[20px_30px] rounded-[15px] sm:rounded-[20px] lg:rounded-[25px] 2xl:rounded-[30px] 3xl:rounded-[40px] backdrop-blur-[10px] gap-5 sm:gap-7.5 2xl:gap-10 3xl:gap-12.5 relative z-0 flex flex-col justify-between transition-colors duration-500 hover:bg-black/50">
                        <ShineBorder borderWidth={1} shineColor={["#909191"]} />
                        {pill.icon && (
                          <div className="mb-2 flex size-9 items-center justify-center rounded-full bg-[#F97316] 2xl:size-10 3xl:size-12.5">
                            <Image
                              src={pill.icon}
                              alt={pill.title}
                              width={24}
                              height={24}
                              className="size-5 object-contain 2xl:size-5 3xl:size-6.25"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="leading-[1.1] font-bold text-white text-base 2xl:text-xl 3xl:text-[25px] mb-2.5">
                            {pill.title}
                          </h3>
                          <p className="leading-snug text-white/90 text-xs 2xl:text-[15px] 3xl:text-lg">
                            {pill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {(data?.title || data?.description) && (
          <div className="mx-auto mb-5 max-w-[640px] text-center lg:mb-7.5 2xl:mb-10 3xl:mb-14">
            {data.title && <h2 className="cmn_Title">{data.title}</h2>}
            {data.description && (
              <p className="text_1 3xl:text-[18px]">{data.description}</p>
            )}
          </div>
        )}
        {cards.length > 0 && (
          <div className="[--slide-gap:10px] sm:[--slide-gap:15px] xl:[--slide-gap:20px] 2xl:[--slide-gap:25px] relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="ml-[calc(var(--slide-gap)*-1)] flex touch-pan-y touch-pinch-zoom">
                {cards.map((card) => (
                  <div
                    key={card.title}
                    className="min-w-0 flex-[0_0_100%] pl-(--slide-gap) sm:flex-[0_0_50%] lg:flex-[0_0_calc(100%/3)]"
                  >
                    <div className="group relative aspect-560/560 overflow-hidden rounded-[10px]">
                      {card.image?.url && (
                        <Image
                          src={card.image.url}
                          alt={card.image.alternativeText || card.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />
                      <div
                        aria-hidden="true"
                        className="absolute inset-[0_auto_auto_0] z-10 flex w-12.5 2xl:w-15 3xl:w-17.5 h-auto aspect-square p-2.5 3xl:p-3.75 m-5 2xl:m-[30px_20px] flex-col items-center justify-center gap-0.5 rounded-[5px] 2xl:rounded-lg bg-black/55 text-white backdrop-blur-sm"
                      >
                        <Image
                          src={card?.icon?.url}
                          alt={card?.icon?.alternativeText || card.title}
                          width={35}
                          height={35}
                          className="size-full object-contain"
                        />
                      </div>
                      <div className="absolute inset-[auto_auto_0_0] m-5 2xl:m-[30px_20px]">
                        <h3 className="mb-2.5 text-[18px] font-bold text-white lg:text-lg 2xl:text-[23px] 3xl:text-[28px]">
                          {card.title}
                        </h3>
                        <p className="text-[13px] leading-snug text-white/90 2xl:text-[15px] 3xl:text-lg">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
