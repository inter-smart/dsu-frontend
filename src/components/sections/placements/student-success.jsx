"use client";
import Image from "next/image";
import { Text } from "@/components/ui/text";
import Autoplay from "embla-carousel-autoplay";
import { Heading } from "@/components/ui/heading";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";

/* Each story group gets its own carousel instance */
function StoriesCarousel({ item, index }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "center",
      breakpoints: {
        "(min-width: 640px)": { align: "start" },
      },
    },
    [
      Autoplay({
        delay: 4000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    ],
  );

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((api) => {
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full lg:w-[65%]">
      <div className="[--navigation-btn-size:25px] 2xl:[--navigation-btn-size:35px] 3xl:[--navigation-btn-size:40px] w-full h-auto block relative z-0">
        {!prevBtnDisabled && (
          <button
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="w-(--navigation-btn-size) h-auto p-1.25 2xl:p-2 3xl:p-2.5 bg-linear-to-r from-(--basecolor) to-(--basecolor2) aspect-30/30 my-auto overflow-hidden border border-black/10 dark:border-white/20 -translate-x-1/2 flex items-center justify-center absolute z-1 inset-[0_auto_0_0] transition-opacity duration-500 hover:opacity-50"
          >
            <Image
              src={"/images/success-stories-btn.svg"}
              alt="left-btn"
              width={40}
              height={30}
              className="w-full h-full object-contain"
            />
          </button>
        )}
        {!nextBtnDisabled && (
          <button
            onClick={scrollNext}
            aria-label="Next slide"
            className="w-(--navigation-btn-size) h-auto p-1.25 2xl:p-2 3xl:p-2.5 bg-linear-to-r from-(--basecolor) to-(--basecolor2) aspect-30/30 my-auto overflow-hidden border border-black/10 dark:border-white/20 translate-x-1/2 flex items-center justify-center absolute z-1 inset-[0_0_0_auto] transition-opacity duration-500 hover:opacity-50"
          >
            <Image
              src={"/images/success-stories-btn.svg"}
              alt="right-btn"
              width={40}
              height={30}
              className="w-full h-full object-contain scale-x-[-1]"
            />
          </button>
        )}
        <div
          className="[--slide-gap:5px] 2xl:[--slide-gap:10px] w-full h-auto overflow-visible [clip-path:inset(0_-100vw_0_0)]"
          ref={emblaRef}
        >
          <div className="ml-[calc(var(--slide-gap)*-1)] touch-pan-y touch-pinch-zoom flex">
            {item?.stories?.map((item) => (
              <div
                key={item?.id}
                className="min-w-0 flex-[0_0_calc(100%/1.3)] sm:flex-[0_0_calc(100%/2.5)] md:flex-[0_0_calc(100%/3)] xl:flex-[0_0_calc(100%/3.3)] pl-(--slide-gap)"
              >
                <div
                  className={`w-full h-full rounded-md 2xl:rounded-[10px] overflow-hidden block ${
                    index % 2 == 0
                      ? "bg-linear-to-br from-[#EFF6FF] to-[#F9FAFB] dark:from-[#18191B] dark:to-[#18191B]"
                      : "bg-linear-to-t from-[#FFF3E0] to-[#FFF8EE] dark:from-[#F97316]/15 dark:to-[#F97316]/10"
                  } dark:border dark:border-white/10`}
                >
                  <div className="w-full h-auto aspect-340/250 overflow-hidden block">
                    <Image
                      src={item?.media?.url}
                      alt={item?.media?.alternativeText || item?.media?.alt || ""}
                      width={340}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full h-auto p-[10px_15px] 2xl:p-[15px_20px] space-y-1.25 2xl:space-y-2.5">
                    <div className="text-base 2xl:text-lg 3xl:text-xl leading-[1.2] font-medium text-[#212121] dark:text-white">
                      {item?.title}
                    </div>
                    <div className="text-xs 2xl:text-[13px] 3xl:text-sm leading-[1.2] font-medium text-[#4A5565] dark:text-[#9CA3AF]">
                      {item?.description}
                    </div>
                    <div className="w-20 2xl:w-25 3xl:w-30 h-auto p-2.5 2xl:p-3.75 aspect-120/65 bg-white rounded-md 2xl:rounded-[10px] overflow-hidden">
                      <Image
                        src={item?.logo?.url}
                        alt={item?.logo?.alternativeText || item?.logo?.alt || ""}
                        width={120}
                        height={65}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StudentSuccess({ data }) {
  return (
    <section className="w-full h-auto overflow-hidden block">
      <div className="w-full h-auto block">
        {data?.sucessStories?.map((item, index) => (
          <div
            key={item?.id}
            className={`w-full h-auto py-7.5 sm:py-10 lg:py-17.5 2xl:py-25 3xl:py-30 block dark:bg-[#101010] ${
              index % 2 !== 0
                ? "bg-linear-to-br from-[#EFF6FF] to-[#F9FAFB] dark:from-[#111111] dark:to-[#101010]"
                : "dark:bg-[#212121]/40"
            }`}
          >
            <div className="container w-full h-full flex flex-wrap items-center">
              <div
                className={
                  item?.stories?.length
                    ? "w-full lg:w-[35%] lg:pr-5 max-lg:mb-6.25"
                    : "w-full pr-0"
                }
              >
                <div className="[--before-size:20px] 2xl:[--before-size:25px] text-sm 2xl:text-base 3xl:text-xl leading-[1.1] font-normal bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit h-auto pl-[calc(var(--before-size)+5px)] 2xl:pl-[calc(var(--before-size)+10px)] mb-2.5 relative z-0 before:content-[''] before:w-(--before-size) before:h-0.5 2xl:before:h-0.75 before:my-auto before:bg-linear-to-r before:from-(--basecolor) before:to-(--basecolor2) before:absolute before:z-1 before:inset-[0_auto_0_0]">
                  {item?.label}
                </div>
                <Heading className="mb-2.5 lg:mb-3.75 2xl:mb-5 3xl:mb-6.25 dark:text-white">
                  {item?.title}
                </Heading>
                <Text className="dark:text-[#9CA3AF]">{item?.description}</Text>
              </div>
              {item?.stories?.length ? (
                <StoriesCarousel item={item} index={index} />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}