"use client";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import { Text } from "@/components/ui/text";
import Autoplay from "embla-carousel-autoplay";
import { Heading } from "@/components/ui/heading";
import useEmblaCarousel from "embla-carousel-react";
import { buttonVariants } from "@/components/ui/button";
import { useEffect, useCallback, useState } from "react";
import { ShineBorder } from "@/components/ui/shine-border";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function HomeResearch({ data }) {
  const [featuredCardEmblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "center",
      breakpoints: {
        "(min-width: 640px)": { align: "start" },
      },
    },
    [
      Autoplay({
        delay: 2500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
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
  }, [emblaApi, onSelect]);

  const tabIconStyles =
    "w-10 sm:w-12.5 lg:w-15 2xl:w-18.75 3xl:w-25 h-auto aspect-square p-2 sm:p-2.5 lg:p-3 2xl:p-3.75 3xl:p-5 dark:bg-white/10 max-sm:dark:bg-white rounded-full border-1 sm:border-2 3xl:border-3 border-(--basecolor2)/50 overflow-hidden transition-all duration-500 flex items-center justify-center group-hover:border-(--basecolor2)/100";
  const tabTextStyles =
    "text-[14px] lg:text-[16px] 2xl:text-[20px] 3xl:text-2xl leading-[1.1] font-bold text-[#212121] dark:text-white sm:pl-3.75 lg:pl-5 2xl:pl-6.25 3xl:pl-8.75 transition-all duration-500 group-hover:text-(--basecolor2) group-hover:dark:text-(--basecolor2)";
  return (
    <section className="w-full h-auto py-[35px_10px] sm:py-12.5 lg:py-17.5 2xl:py-22.5 3xl:py-27.5 dark:bg-[#101010] block overflow-hidden">
      <div className="container">
        <div className="w-full h-auto mb-6.25 lg:mb-8.75 2xl:mb-10 3xl:mb-12.5 text-center">
          <Heading
            aurora
            speed={2}
            align="center"
            className="mb-1.25 lg:mb-2.5"
          >
            {data?.title}
          </Heading>
          <Text>{data?.description}</Text>
        </div>
        <Tabs defaultValue="research" className="w-full h-auto">
          <TabsList
            className={
              "[--line:5px] lg:[--line:6px] 2xl:[--line:7px] 3xl:[--line:9px] w-full h-auto flex-1 p-0 mb-5 sm:mb-7.5 lg:mb-10 2xl:mb-12.5 3xl:mb-20 gap-0 bg-transparent rounded-none [&>button]:h-25 sm:[&>button]:h-20 lg:[&>button]:h-22.5 2xl:[&>button]:h-27.5 3xl:[&>button]:h-35 [&>button]:p-0 [&>button]:gap-0 [&>button]:border-0 [&>button]:rounded-none [&>button]:relative [&>button]:z-0 [&>button::before]:content-[''] [&>button::before]:w-full [&>button::before]:h-(--line) [&>button::before]:absolute [&>button::before]:z-1 [&>button::before]:inset-[auto_0_0_0] [&>button::before]:translate-y-(--line) [&>button::before]:transition-all [&>button::before]:duration-300 [&>button::before]:ease-in-out [&>button[data-active]::before]:bg-linear-to-r [&>button[data-active]::before]:from-(--basecolor) [&>button[data-active]::before]:to-(--basecolor2) [&>button:nth-child(1):not([data-active])::before]:bg-[#8B8B8B]/30 [&>button:nth-child(2):not([data-active])::before]:bg-[#8B8B8B]/10 [&>button:nth-child(3):not([data-active])::before]:bg-[#8B8B8B]/10 [&>button:nth-child(1)[data-active]~button:nth-child(2)::before]:bg-[#8B8B8B]/30 [&>button[data-active]]:bg-transparent [&>button[data-active]]:shadow-none"
            }
          >
            <TabsTrigger
              value="research"
              className={
                "group max-sm:!gap-1.75 flex max-sm:flex-col items-center justify-center"
              }
            >
              <span className={tabIconStyles}>
                <Image
                  src={"/images/home-research-1.svg"}
                  alt={"Research-icon-1"}
                  width={50}
                  height={50}
                  className={"w-full h-full object-contain"}
                />
              </span>
              <span className={tabTextStyles}>Research</span>
            </TabsTrigger>
            <TabsTrigger
              value="incubation"
              className={
                "group max-sm:!gap-1.75 flex max-sm:flex-col items-center justify-center"
              }
            >
              <span className={tabIconStyles}>
                <Image
                  src={"/images/home-research-2.svg"}
                  alt={"Research-icon-1"}
                  width={50}
                  height={50}
                  className={"w-full h-full object-contain"}
                />
              </span>
              <span className={tabTextStyles}>
                Incubation & <br /> Entrepreneurship
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="innovation"
              className={
                "group max-sm:!gap-1.75 flex max-sm:flex-col items-center justify-center"
              }
            >
              <span className={tabIconStyles}>
                <Image
                  src={"/images/home-research-3.svg"}
                  alt={"Research-icon-1"}
                  width={50}
                  height={50}
                  className={"w-full h-full object-contain"}
                />
              </span>
              <span className={tabTextStyles}>Innovation Labs</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="research">
            <div className="w-full h-auto block">
              <div className="w-full h-auto mb-5 lg:mb-6.25 3xl:mb-8.75 flex flex-wrap">
                <div className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-[45px] leading-[1.1] font-bold text-[#212121] dark:text-white w-full sm:w-[35%] max-sm:mb-2.5">
                  {data?.research?.header?.title}
                </div>
                <div className="text-sm sm:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.5] font-normal text-[#4A5565] dark:text-white w-full sm:w-[45%]">
                  {data?.research?.header?.description}
                </div>
                <div className="w-full sm:w-[20%] hidden sm:flex justify-end">
                  <Link
                    href={data?.research?.header?.button?.link}
                    className={buttonVariants({
                      variant: "default",
                      size: "default",
                    })}
                  >
                    {data?.research?.header?.button?.label}
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
              <div className="[--box-size:100%] lg:[--box-size:370px] 2xl:[--box-size:440px] 3xl:[--box-size:560px] w-full h-auto flex flex-wrap">
                <div className="[--navigation-btn-size:35px] w-(--box-size) lg:w-[calc(100%-var(--box-size))] h-auto lg:pr-5 2xl:pr-6.25 3xl:pr-7.5 max-lg:mb-5 relative z-0">
                  {!prevBtnDisabled && (
                    <button
                      onClick={scrollPrev}
                      aria-label="Previous slide"
                      className="w-(--navigation-btn-size) h-auto aspect-square my-auto rounded-full overflow-hidden backdrop-blur-[5px] -translate-x-2.5 flex items-center justify-center absolute z-1 inset-[0_auto_0_0] transition-opacity duration-500 hover:opacity-50"
                    >
                      <Image
                        src={"/images/testimonial-slider-btn-mobile.svg"}
                        alt="left-btn"
                        width={40}
                        height={30}
                        className="w-full h-full object-contain block sm:hidden"
                      />
                    </button>
                  )}
                  {!nextBtnDisabled && (
                    <button
                      onClick={scrollNext}
                      aria-label="Next slide"
                      className="w-(--navigation-btn-size) h-auto aspect-square rounded-full my-auto overflow-hidden backdrop-blur-[5px] translate-x-2.5 flex items-center justify-center absolute z-1 inset-[0_0_0_auto] transition-opacity duration-500 hover:opacity-50"
                    >
                      <Image
                        src={"/images/testimonial-slider-btn-mobile.svg"}
                        alt="right-btn"
                        width={40}
                        height={30}
                        className="w-full h-full object-contain scale-x-[-1] block sm:hidden"
                      />
                    </button>
                  )}
                  <div
                    ref={featuredCardEmblaRef}
                    className="[--slide-gap:10px] xl:[--slide-gap:15px] 3xl:[--slide-gap:20px] w-full h-auto sm:overflow-hidden"
                  >
                    <div className="ml-[calc(var(--slide-gap)*-1)] touch-pan-y touch-pinch-zoom flex">
                      {data?.research?.featuredCards?.map((item, index) => (
                        <div
                          key={item?.id}
                          className="min-w-0 translate-x-0 translate-y-0 flex-[0_0_calc(100%/2.2)] sm:flex-[0_0_calc(100%/4)] lg:flex-[0_0_calc(100%/3)] xl:flex-[0_0_calc(100%/4)] pl-(--slide-gap)"
                        >
                          <Link
                            href={item?.link}
                            aria-label={item?.title}
                            className="group w-full h-full block relative z-0"
                          >
                            <div className="w-full h-auto aspect-270/480 rounded-[5px] sm:rounded-[7px] 2xl:rounded-[10px] overflow-hidden block">
                              <Image
                                src={item?.media?.url}
                                alt={item?.media?.alternativeText}
                                width={270}
                                height={480}
                                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                              />
                            </div>
                            <div className="[--icon-size:25px] sm:[--icon-size:30px] 2xl:[--icon-size:35px] 3xl:[--icon-size:45px] w-full h-auto p-[15px_10px] sm:p-[25px_15px] flex items-center justify-between absolute z-1 inset-[auto_0_0_0]">
                              <div className="text-base 2xl:text-lg 3xl:text-2xl leading-[1.2] font-medium text-white w-[clac(100%-var(--icon-size))] 2xl:max-w-[70%] pr-2.5">
                                {item?.title}
                              </div>
                              <span className="w-(--icon-size) h-auto aspect-square p-1.75 sm:p-2 2xl:p-2.5 bg-[#D9D9D9]/20 rounded-full backdrop-blur-[5px] overflow-hidden transition-colors duration-500 shrink-0 flex items-center justify-center relative z-0 group-hover:bg-black/70">
                                <ShineBorder
                                  borderWidth={1.5}
                                  shineColor={["#909191"]}
                                  duration={8 + index * 4}
                                />
                                <Image
                                  src={"/images/arrow-icon-orange.svg"}
                                  alt={"Arrow"}
                                  width={45}
                                  height={45}
                                  className="w-full h-full object-contain"
                                />
                              </span>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-(--box-size) h-auto p-[30px_15px] 2xl:p-[35px_15px] 3xl:p-[40px_20px] bg-linear-to-t from-[#FFF3E0] to-[#FFF8EE] dark:bg-none dark:bg-white/5 rounded-[7px] 2xl:rounded-[10px] overflow-hidden relative z-0 block">
                  <ShineBorder
                    shineColor={["#909191"]}
                    className="hidden dark:block"
                  />
                  <div className="w-full h-full grid lg:grid-cols-2 gap-2.5 2xl:gap-3.75 3xl:gap-5">
                    {data?.research?.statistics
                      ?.slice(0, 3)
                      .map((item, index) => (
                        <div
                          key={item?.id || index}
                          className={`w-auto h-auto flex items-center justify-center ${
                            index === 0
                              ? "col-span-5"
                              : index === 1
                                ? "col-span-7"
                                : "col-span-12"
                          }`}
                        >
                          <div className="[--icon-size:30px] sm:[--icon-size:25px] lg:[--icon-size:30px] 2xl:[--icon-size:35px] 3xl:[--icon-size:50px] w-full h-full p-3.75 sm:p-[10px_15px] lg:p-[10px_25px] bg-white dark:bg-black/20 rounded-[10px] border border-black/10 overflow-hidden relative z-0 transition-colors duration-500 flex items-center justify-center hover:border-(--basecolor) dark:hover:border-white">
                            <ShineBorder
                              shineColor={["#909191"]}
                              duration={8 + index * 4}
                              className="hidden dark:block"
                            />
                            <div className="w-(--icon-size) h-auto aspect-square shrink-0 flex items-center justify-center">
                              <Image
                                src={item?.icon?.url}
                                alt={item?.icon?.alternativeText}
                                width={40}
                                height={40}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="pl-2.5 2xl:pl-3.75 3xl:pl-5">
                              <div className="text-[25px] 2xl:text-[32px] 3xl:text-[40px] leading-[1.2] font-bold text-[#212121] w-auto h-auto mb-0.5 sm:mb-1.25 dark:bg-linear-to-r dark:from-(--basecolor) dark:to-(--basecolor2) dark:bg-clip-text dark:text-transparent dark:w-fit">
                                {/* {
                                  typeof item?.value === "number" && ( */}

                                    <CountUp
                                    start={0}
                                    end={item?.value || 0}
                                  duration={2.5}
                                  separator=","
                                  suffix={item?.suffix || "+"}
                                  enableScrollSpy={true}
                                  />
                                {/* )
                              } */}
                              </div>
                              <div
                                className="text-sm sm:text-[13px] 2xl:text-[15px] 3xl:text-lg leading-[1.1] font-normal text-[#4A5565] dark:text-white"
                                dangerouslySetInnerHTML={{
                                  __html: item?.label || "",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    <Link
                      href={data?.research?.ctaButton?.link || "/"}
                      className={buttonVariants({
                        variant: "default",
                        size: "default",
                        className:
                          "!text-sm 2xl:!text-base 3xl:!text-xl max-sm:!font-normal !h-auto py-2.5 bg-gradient-to-r from-[#E65100] via-[#FF6D00] via-60% to-[#FF8F00] max-sm:!rounded-[6px] rounded-[10px] !gap-1.25 col-span-12 flex flex-col",
                      })}
                    >
                      <Image
                        src="/images/research-button-icon.svg"
                        alt="home-btn"
                        width={15}
                        height={15}
                        className="size-7.5 sm:size-6.25 3xl:size-8.75"
                        data-icon="inline-end"
                      />
                      {data?.research?.ctaButton?.label}
                    </Link>
                    <div className="w-full h-auto mt-7.5 col-span-12 flex items-center sm:hidden justify-center">
                      <Link
                        href={data?.research?.header?.button?.link}
                        className={buttonVariants({
                          variant: "default",
                          size: "default",
                        })}
                      >
                        {data?.research?.header?.button?.label}
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
            </div>
          </TabsContent>
          <TabsContent value="incubation">
            <div className="w-full h-auto mb-5 lg:mb-6.25 3xl:mb-8.75 flex flex-wrap">
              <div className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-[45px] leading-[1.1] font-bold text-[#212121] dark:text-white w-full sm:w-[35%] max-sm:mb-2.5">
                {data?.incubation?.header?.title}
              </div>
              <div className="text-sm sm:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.5] font-normal text-[#4A5565] dark:text-white w-full sm:w-[45%]">
                {data?.incubation?.header?.description}
              </div>
              <div className="w-full sm:w-[20%] hidden sm:flex justify-end">
                <Link
                  href={data?.incubation?.header?.button?.link}
                  className={buttonVariants({
                    variant: "default",
                    size: "default",
                  })}
                >
                  {data?.incubation?.header?.button?.label}
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
            <div
              ref={featuredCardEmblaRef}
              className="[--slide-gap:10px] xl:[--slide-gap:15px] 3xl:[--slide-gap:20px] w-full h-auto overflow-hidden"
            >
              <div className="ml-[calc(var(--slide-gap)*-1)] touch-pan-y touch-pinch-zoom flex">
                {data?.incubation?.featuredCards?.map((item, index) => (
                  <div
                    key={item?.id}
                    className="min-w-0 translate-x-0 translate-y-0 flex-[0_0_100%] sm:flex-[0_0_calc(100%/1.4)] lg:flex-[0_0_calc(100%/2)] pl-(--slide-gap)"
                  >
                    <Link
                      href={item?.link}
                      aria-label={item?.title}
                      className="group w-full h-full block relative z-0"
                    >
                      <div className="w-full h-auto aspect-860/470 rounded-[5px] sm:rounded-[7px] 2xl:rounded-[10px] overflow-hidden block">
                        <Image
                          src={item?.media?.url}
                          alt={item?.media?.alternativeText}
                          width={270}
                          height={480}
                          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="w-full h-auto p-2.5 sm:p-3.75 lg:p-5 2xl:p-7.5 block absolute z-1 inset-[auto_0_0_0]">
                        <div className="text-xs sm:text-[13px] 2xl:text-base 3xl:text-lg leading-[1.1] font-normal text-white w-fit h-auto p-[5px_10px] mb-2.5 lg:mb-3.75 2xl:mb-5 bg-linear-to-r from-(--basecolor) to-(--basecolor2) rounded-[5px] overflow-hidden">
                          {item?.tag}
                        </div>
                        <div className="text-base lg:text-lg 2xl:text-[22px] 3xl:text-[25px] leading-[1.2] font-bold text-white mb-2.5 3xl:mb-3.75 line-clamp-1">
                          {item?.title}
                        </div>
                        <div className="text-xs 2xl:text-base 3xl:text-lg leading-[1.4] font-normal text-white mb-3.75 lg:mb-5 2xl:mb-6.25 3xl:mb-7.5 line-clamp-2">
                          {item?.description}
                        </div>
                        <div className="text-[13px] 3xl:text-[15px] leading-normal font-bold uppercase bg-gradient-to-r from-(--basecolor) to-(--basecolor2) bg-clip-text text-transparent w-fit">
                          Explore {" > "}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="innovation">
            <div className="w-full h-auto mb-5 lg:mb-6.25 xl:mb-12.5 2xl:mb-17.5 3xl:mb-20 flex flex-wrap">
              <div className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-[45px] leading-[1.1] font-bold text-[#212121] dark:text-white w-full sm:w-[35%] max-sm:mb-2.5">
                {data?.innovation?.header?.title}
              </div>
              <div className="text-sm sm:text-xs 2xl:text-[15px] 3xl:text-lg leading-[1.5] font-normal text-[#4A5565] dark:text-white w-full sm:w-[45%]">
                {data?.innovation?.header?.description}
              </div>
              <div className="w-full sm:w-[20%] hidden sm:flex justify-end">
                <Link
                  href={data?.innovation?.header?.button?.link}
                  className={buttonVariants({
                    variant: "default",
                    size: "default",
                  })}
                >
                  {data?.innovation?.header?.button?.label}
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
            <div
              ref={featuredCardEmblaRef}
              className="[--slide-gap:10px] xl:[--slide-gap:15px] 3xl:[--slide-gap:20px] w-full h-auto sm:overflow-hidden"
            >
              <div className="ml-[calc(var(--slide-gap)*-1)] touch-pan-y touch-pinch-zoom flex">
                {data?.innovation?.featuredCards?.map((item, index) => (
                  <div
                    key={item?.id}
                    className="min-w-0 translate-x-0 translate-y-0 flex-[0_0_calc(100%/1.2)] sm:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] pl-(--slide-gap)"
                  >
                    <Link
                      href={item?.link}
                      aria-label={item?.title}
                      className="group w-full h-full block relative z-0"
                    >
                      <div className="w-full h-auto aspect-560/350 rounded-[5px] sm:rounded-[7px] 2xl:rounded-[10px] overflow-hidden block">
                        <Image
                          src={item?.media?.url}
                          alt={item?.media?.alternativeText}
                          width={270}
                          height={480}
                          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="w-full h-auto p-[15px_10px] lg:p-[30px_20px] 2xl:p-[35px_25px] 3xl:p-[40px_30px] block absolute z-1 inset-[auto_0_0_0]">
                        <div
                          className="text-base lg:text-lg 2xl:text-[22px] 3xl:text-[25px] leading-[1.3] font-bold text-white w-[90%] mb-2.5 3xl:mb-5 line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: item?.title }}
                        />

                        <div className="[--icon-size:25px] sm:[--icon-size:30px] 2xl:[--icon-size:35px] 3xl:[--icon-size:45px] w-full h-auto flex items-center justify-between">
                          <div className="text-[13px] 2xl:text-base 3xl:text-lg leading-[1.2] font-normal text-white w-[clac(100%-var(--icon-size))] pr-2.5 line-clamp-2">
                            {item?.description}
                          </div>
                          <span className="w-(--icon-size) h-auto aspect-square p-1.75 sm:p-2 2xl:p-2.5 bg-[#D9D9D9]/20 rounded-full backdrop-blur-[5px] overflow-hidden transition-colors duration-500 shrink-0 flex items-center justify-center relative z-0 group-hover:bg-black/70">
                            <ShineBorder
                              borderWidth={1.5}
                              shineColor={["#909191"]}
                              duration={8 + index * 4}
                            />
                            <Image
                              src={"/images/arrow-icon-orange.svg"}
                              alt={"Arrow"}
                              width={45}
                              height={45}
                              className="w-full h-full object-contain"
                            />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
