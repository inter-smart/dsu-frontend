"use client";
import Link from "next/link";
import Image from "next/image";
import ClientCountUp from "@/components/ui/client-count-up";
import Fade from "embla-carousel-fade";
import { Text } from "@/components/ui/text";
import Autoplay from "embla-carousel-autoplay";
import { Heading } from "@/components/ui/heading";
import useEmblaCarousel from "embla-carousel-react";
import { buttonVariants } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/shine-border";
import React, { useState, useEffect, useCallback } from "react";

export default function HomeAbout({ data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 10,
    },
    [Fade(), Autoplay({ delay: 2500, stopOnInteraction: false })],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const getDotState = (snapIdx) => {
    const total = scrollSnaps.length;
    if (total <= 4) return { hidden: false, scaleClass: "" };
    let start = selectedIndex - 1;
    if (start < 0) start = 0;
    if (start > total - 4) start = total - 4;
    const end = start + 3;
    if (snapIdx >= start && snapIdx <= end) {
      return { hidden: false, scaleClass: "" };
    }
    if (start > 0 && snapIdx === start - 1) {
      return { hidden: false, scaleClass: "scale-60 opacity-40" };
    }
    if (end < total - 1 && snapIdx === end + 1) {
      return { hidden: false, scaleClass: "scale-60 opacity-40" };
    }
    return { hidden: true, scaleClass: "" };
  };

  return (
    <section className="w-full h-auto py-[60px_40px] sm:py-[100px_70px] lg:py-[120px_80px] xl:py-[170px_100px] 2xl:py-[200px_120px] 3xl:py-[250px_150px] bg-[#F4F6FA63] dark:bg-[#101010] block">
      <div className="container">
        <div className="[--width:100%] sm:[--width:240px] md:[--width:280px] lg:[--width:355px] xl:[--width:410px] 2xl:[--width:480px] 3xl:[--width:610px] w-full h-auto mb-10 lg:mb-12.5 2xl:mb-15 3xl:mb-20 flex flex-wrap">
          <div className="w-(--width) sm:w-[calc(100%-var(--width))] h-auto sm:pr-3.75 2xl:pr-7.5 max-sm:mb-7.5">
            <div className="w-full h-full max-sm:-mx-[2.5px] sm:gap-2.5 2xl:gap-3.75 sm:grid sm:grid-cols-3 lg:grid-cols-5 max-sm:flex max-sm:flex-wrap max-sm:justify-center">
              {data?.statistics?.map((item, index) => (
                <div
                  key={item?.id}
                  className="w-1/3 sm:w-full h-auto max-sm:p-[2.5px]"
                >
                  <div className="group w-full h-full lg:aspect-square text-center p-[15px_10px] sm:p-[20px_10px] lg:p-[25px_10px] 2xl:p-[30px_15px] 3xl:p-[35px_15px] bg-white dark:bg-black/10 border border-black/10 dark:border-white/10 dark:max-sm:rounded-[15px] rounded-[6px] 2xl:rounded-[10px] dark:backdrop-blur-[2px] overflow-hidden flex flex-col items-center justify-center relative z-0 transition-colors duration-400 hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2)">
                    <ShineBorder
                      shineColor={["#909191"]}
                      duration={8 + index * 4}
                      className="hidden dark:block"
                    />
                    <div className="w-7.5 sm:w-8.75 2xl:w-10 3xl:w-12.5 h-auto aspect-square mb-1.25 2xl:mb-2.5 block">
                      <Image
                        src={item?.icon?.url}
                        alt={item?.icon?.alternativeText || "icon"}
                        width={50}
                        height={50}
                        className="w-full h-full object-contain transition-[filter] duration-400 group-hover:brightness-0 group-hover:invert"
                      />
                    </div>
                    <div className="text-[25px] xl:text-[26px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.2] font-bold text-[#212121] dark:text-white mb-1.25 transition-colors duration-400 group-hover:text-white">
                      <ClientCountUp
                        start={0}
                        end={item?.value || 0}
                        duration={2.5}
                        separator=","
                        suffix={item?.suffix || "+"}
                        enableScrollSpy={true}
                      />
                    </div>
                    <div className="text-sm 2xl:text-base 3xl:text-[22px] leading-[1.1] font-normal text-[#4A5565] dark:text-white transition-colors duration-400 group-hover:text-white">
                      {item?.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-(--width) h-auto">
            <div className="group w-full h-full max-sm:aspect-390/125 bg-amber-200 rounded-[6px] 2xl:rounded-[10px] overflow-hidden block relative z-0">
              <Image
                src={data?.virtualTour?.media?.url}
                alt={data?.virtualTour?.media?.alternativeText || "Virtual Tour"}
                width={390}
                height={125}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <Link
                href={data?.virtualTour?.link || "/"}
                aria-label="Virtual Tour"
                target="_blank"
                className="w-fit h-fit p-[5px_10px] sm:p-[5px_15px] 3xl:p-[5px_20px] m-auto bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[30px] overflow-hidden transition-colors duration-400 absolute z-1 inset-0 inline-flex items-center hover:from-(--basecolor2) hover:to-(--basecolor)"
              >
                <span className="w-5 2xl:w-6.25 3xl:w-7.5 h-auto aspect-square overflow-hidden flex items-center justify-center">
                  <Image
                    src={"/images/360-icon.svg"}
                    alt={"360 Icon"}
                    width={30}
                    height={30}
                    className="w-full h-full object-contain"
                  />
                </span>
                <span className="text-[11px] lg:text-xs 2xl:text-sm 3xl:text-base leading-[1.1] font-normal text-white w-[calc(100%-20px)] 2xl:w-[calc(100%-25px)] 3xl:w-[calc(100%-30px)] pl-1.25 2xl:pl-1.75">
                  {data?.virtualTour?.label}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex flex-wrap">
          <div className="w-full lg:w-1/2 max-lg:mb-10">
            <div className="[--width:100%] sm:[--width:280px] md:[--width:340px] lg:[--width:210px] xl:[--width:250px] 2xl:[--width:300px] 3xl:[--width:375px] w-full h-auto flex flex-wrap">
              <div className="w-full sm:w-[calc(100%-var(--width))] sm:pr-5 xl:pr-10 3xl:pr-15 max-sm:mb-3.75">
                <div className="w-full h-auto mb-5 sm:mb-6.25 2xl:mb-7.5 3xl:mb-10">
                  <Text
                    size="p0"
                    className={"dark:text-white tracking-[25%] w-fit mb-2.5"}
                  >
                    {data?.leadership?.subTitle}
                  </Text>
                  <Heading aurora speed={2}>
                    {data?.leadership?.title}
                  </Heading>
                </div>
                <div className="w-full h-auto block">
                  <div className="w-full h-auto overflow-hidden" ref={emblaRef}>
                    <div className="touch-pan-y touch-pinch-zoom flex">
                      {data?.leadership?.leaders?.map((item) => (
                        <div
                          key={item?.id}
                          className="min-w-0 translate-x-0 translate-y-0 flex-[0_0_100%]"
                        >
                          <div className="w-full h-full p-[20px_25px_25px_15px] 2xl:p-[25px_30px_30px_15px] 3xl:p-[30px_35px_40px_20px] bg-linear-to-b from-[#FFF8EE] to-[#FFF3E0] dark:bg-none dark:bg-white/5 rounded-[15px] sm:rounded-[6px] 2xl:rounded-[10px] border border-black/10 dark:border-white/05 select-none block relative z-0">
                            <ShineBorder
                              shineColor={["#909191"]}
                              className="hidden dark:block"
                            />
                            <div className="[--avatarWidth:85px] sm:[--avatarWidth:70px] 2xl:[--avatarWidth:80px] 3xl:[--avatarWidth:110px] w-full h-auto relative z-0">
                              <div className="w-(--avatarWidth) h-auto aspect-square mb-5 sm:mb-3.75 2xl:mb-5 3xl:mb-6.25 rounded-full overflow-hidden block">
                                <Image
                                  src={item?.avatarImage?.url}
                                  alt={
                                    item?.avatarImage?.alternativeText ||
                                    "Avatar"
                                  }
                                  width={110}
                                  height={110}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <Text
                                className={
                                  "text-sm 3xl:text-lg font-semibold text-[#003463]"
                                }
                              >
                                {item?.name}
                              </Text>
                              <Text
                                className={
                                  "text-sm 3xl:text-lg text-[#003463] mb-3.75 sm:mb-2.5 3xl:mb-3.75"
                                }
                              >
                                {item?.designation}
                              </Text>
                              <Text
                                className={"text-sm 3xl:text-lg text-[#121212]"}
                              >
                                {item?.description}
                              </Text>
                              <div className="w-full h-auto flex items-center justify-end space-x-2.5 absolute z-1 inset-[calc(var(--avatarWidth)-20px)_0_auto_auto]">
                                {scrollSnaps.map((_, snapIdx) => {
                                  const { hidden, scaleClass } =
                                    getDotState(snapIdx);
                                  if (hidden) return null;
                                  return (
                                    <button
                                      key={snapIdx}
                                      type="button"
                                      onClick={() => scrollTo(snapIdx)}
                                      className={`w-3.75 h-3.75 p-0.5 focus:outline-none transition-all duration-300 ${scaleClass}`}
                                      aria-label={`Go to slide ${snapIdx + 1}`}
                                    >
                                      <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        className={`transition-all duration-300 ${
                                          snapIdx === selectedIndex
                                            ? "text-[#0B3A60] dark:text-(--basecolor2) opacity-100"
                                            : "text-[#B0BCC8] dark:text-[#C6C6C6] hover:text-[#0B3A60] opacity-50 hover:opacity-80"
                                        }`}
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M12 0C12 7 7 12 0 12C7 12 12 17 12 24C12 17 17 12 24 12C17 12 12 7 12 0Z"
                                        />
                                      </svg>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-(--width)">
                <div className="w-full h-full max-lg:aspect-390/250 rounded-[10px] sm:rounded-[6px] 2xl:rounded-[10px] overflow-hidden block">
                  <Image
                    src={data?.leadership?.leaderShipImage?.url}
                    alt={data?.leadership?.leaderShipImage?.alternativeText || "Leadership"}
                    width={375}
                    height={470}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-7.5 xl:pl-12.5 2xl:pl-15 3xl:pl-20 flex flex-col justify-between">
            <div>
              <Text
                size="p0"
                className={
                  "dark:text-white tracking-[25%] w-fit mb-2.5 sm:mb-3.75 xl:mb-5 3xl:mb-7.5"
                }
              >
                {data?.aboutInfo?.subTitle}
              </Text>
              <Heading
                aurora
                speed={2}
                className="mb-2.5 sm:mb-3.75 xl:mb-5 2xl:mb-6.25"
              >
                {data?.aboutInfo?.title}
              </Heading>
              <Text className={"mb-3.75 sm:mb-5 2xl:mb-6.25 3xl:mb-7.5"}>
                {data?.aboutInfo?.description}
              </Text>
              <div className="w-full h-auto flex items-center">
                <div className="text-[25px] sm:text-[28px] xl:text-[34px] 2xl:text-[40px] 3xl:text-[50px] leading-[1.2] font-bold bg-linear-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent transition-colors duration-500 group-hover:text-white">
                  <ClientCountUp
                    start={0}
                    end={data?.aboutInfo?.statistics?.value || 0}
                    duration={2.5}
                    separator=","
                    suffix={data?.aboutInfo?.statistics?.suffix || "+"}
                    enableScrollSpy={true}
                  />
                </div>
                <div
                  className="text-[14px] 2xl:text-base 3xl:text-[20px] leading-[1.1] font-normal text-[#050505] dark:text-white pl-2.5 transition-colors duration-500 group-hover:text-white"
                  dangerouslySetInnerHTML={{
                    __html: data?.aboutInfo?.statistics?.label || "",
                  }}
                />
              </div>
            </div>
            <div className="w-full h-auto mt-3.75 sm:mt-7.5 lg:mt-5">
              <Link
                href="/centres-of-excellence"
                className={buttonVariants({
                  variant: "default",
                  size: "default",
                })}
              >
                Explore DSU
                <Image
                  src="/images/icon-btn.svg"
                  alt="home-btn"
                  width={15}
                  height={15}
                  className="size-3.75"
                  data-icon="inline-end"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
