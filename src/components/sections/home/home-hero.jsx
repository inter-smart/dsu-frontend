"use client";
import Link from "next/link";
import Image from "next/image";
import Fade from "embla-carousel-fade";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { buttonVariants } from "@/components/ui/button";
import { ShineBorder } from "@/components/ui/shine-border";

export default function HomeHero({ data }) {
  const [heroEmblaRef, heroEmblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      breakpoints: {
        "(min-width: 640px)": { align: "start" },
      },
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
      Fade(),
    ],
  );
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  useEffect(() => {
    if (!heroEmblaApi) return;
    const onSelect = () => {
      setActiveHeroIndex(heroEmblaApi.selectedScrollSnap());
    };
    onSelect();
    heroEmblaApi.on("select", onSelect);
    return () => heroEmblaApi.off("select", onSelect);
  }, [heroEmblaApi]);
  const scrollPrev = () => {
    heroEmblaApi?.scrollPrev();
  };
  const scrollNext = () => {
    heroEmblaApi?.scrollNext();
  };

  const [featuredheroEmblaRef] = useEmblaCarousel(
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
    <section className="lg:[--navigation-btn-size:30px] 3xl:[--navigation-btn-size:40px]  w-full h-auto block relative z-0">
      <button
        onClick={scrollPrev}
        aria-label="Previous slide"
        className="w-(--navigation-btn-size) h-auto aspect-40/30 my-auto overflow-hidden translate-x-[25px] 2xl:translate-x-[40px] hidden lg:flex items-center justify-center absolute z-10 inset-[0_auto_0_0] transition-opacity duration-500 hover:opacity-50"
      >
        <Image
          src={"/images/hero-arrow-btn.svg"}
          alt="left-btn"
          width={40}
          height={30}
          className="w-full h-full object-contain"
        />
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next slide"
        className="w-(--navigation-btn-size) h-auto aspect-40/30 my-auto overflow-hidden translate-x-[-25px] 2xl:translate-x-[-40px] hidden lg:flex items-center justify-center absolute z-10 inset-[0_0_0_auto] transition-opacity duration-500 hover:opacity-50"
      >
        <Image
          src={"/images/hero-arrow-btn.svg"}
          alt="right-btn"
          width={40}
          height={30}
          className="w-full h-full object-contain scale-x-[-1]"
        />
      </button>
      <div ref={heroEmblaRef} className="w-full h-full overflow-hidden">
        <div className="touch-pan-y touch-pinch-zoom flex">
          {data?.hero?.map((item) => (
            <div
              key={item?.id}
              className="w-full h-screen min-w-0 translate-x-0 translate-y-0 flex-[0_0_100%]"
            >
              <div className="w-full h-full select-none block">
                <div className="w-full h-full block pointer-events-none relative z-0 before:content-[''] before:w-full before:h-full before:bg-black/20 before:absolute before:z-1 before:inset-0">
                  {item?.media?.type === "video" ? (
                    <video
                      src={item?.media?.url}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <Image
                      src={item?.media?.url}
                      alt={item?.media?.alternativeText || "Hero Image"}
                      width={1920}
                      height={990}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="container py-22.5 2xl:py-30 3xl:py-32.5 absolute z-1 inset-[auto_0_0_0]">
                  <div className="w-full h-full flex flex-wrap items-end">
                    <motion.div
                      key={`${item?.id}-${activeHeroIndex}`}
                      initial={{ opacity: 0, y: 250 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 1.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="w-full md:w-1/2 max-md:mb-5"
                    >
                      <div className="w-full h-auto mb-3.75 lg:mb-5 3xl:mb-7.5 gap-2 flex items-center">
                        <span className="text-xs 2xl:text-sm 3xl:text-base leading-[1.1] font-bold text-white">
                          Powered by :
                        </span>
                        <span className="w-20 lg:w-22.5 2xl:w-30 3xl:w-37.5 h-auto aspect-150/30 overflow-hidden flex items-center justify-center">
                          <Image
                            src={item?.poweredBy?.url}
                            alt={item?.poweredBy?.alternativeText || "Powered By"}
                            width={150}
                            height={30}
                            className="w-full h-full object-contain"
                          />
                        </span>
                      </div>
                      <div className="text-3xl sm:text-[34px] lg:text-[40px] 2xl:text-5xl 3xl:text-6xl leading-[1.1] font-bold text-white mb-5 sm:mb-3.75 2xl:mb-5 3xl:mb-6.25">
                        {item?.title}
                      </div>
                      <div className="text-sm lg:text-base 2xl:text-lg 3xl:text-2xl leading-[1.1] font-normal text-white">
                        {item?.description?.text}
                        <span className="font-bold">
                          {item?.description?.highlightText}
                        </span>
                      </div>
                      <div className="w-full h-auto mt-5 lg:mt-6.25 2xl:mt-7.5 3xl:mt-10 flex gap-[10px] 2xl:gap-[13px] 3xl:gap-4">
                        <Link
                          href="#"
                          className={buttonVariants({
                            variant: "secondary",
                            size: "default",
                          })}
                        >
                          Explore Centres of Excellence
                          <Image
                            src="/images/icon-btn.svg"
                            alt="home-btn"
                            width={15}
                            height={15}
                            className="size-[15px]"
                          />
                        </Link>
                        <Link
                          href="#"
                          className={buttonVariants({
                            variant: "default",
                            size: "default",
                          })}
                        >
                          Apply Now
                          <Image
                            src="/images/icon-btn.svg"
                            alt="home-btn"
                            width={15}
                            height={15}
                            className="size-[15px]"
                            data-icon="inline-end"
                          />
                        </Link>
                      </div>
                    </motion.div>
                    <div className="w-full md:w-1/2">
                      <div
                        ref={featuredheroEmblaRef}
                        className="[--slide-gap:10px] 3xl:[--slide-gap:15px] w-full lg:max-w-80 2xl:max-w-95 3xl:max-w-115 h-auto ml-auto overflow-hidden"
                      >
                        <div className="ml-[calc(var(--slide-gap)*-1)] touch-pan-y touch-pinch-zoom flex">
                          {item?.featuredItems?.map((item, index) => (
                            <div
                              key={item?.id}
                              className="min-w-0 translate-x-0 translate-y-0 flex-[0_0_calc(100%/3)] pl-(--slide-gap)"
                            >
                              <Link
                                href={item?.url}
                                aria-label={item?.title}
                                className="w-full h-full text-center p-2.5 sm:p-[15px_10px_15px_10px] 2xl:p-[20px_10px_15px_10px] 3xl:p-[25px_10px_20px_10px] bg-black/20 rounded-[15px] sm:rounded-[18px] lg:rounded-[22px] 2xl:rounded-[30px] 3xl:rounded-[35px] backdrop-blur-[2px] overflow-hidden flex items-center sm:block transition-colors duration-400 relative z-0 hover:bg-linear-to-r hover:from-(--basecolor)/80 hover:to-(--basecolor2)/80"
                              >
                                <ShineBorder
                                  borderWidth={1.5}
                                  shineColor={["#909191"]}
                                  duration={8 + index * 4}
                                />
                                <div className="w-5 sm:w-7.5 lg:w-8.75 2xl:w-10 3xl:w-12.5 h-auto aspect-square mx-auto sm:mb-3.75 3xl:mb-5 overflow-hidden flex items-center justify-center">
                                  <Image
                                    src={item?.icon?.url}
                                    width={50}
                                    height={50}
                                    alt={item?.icon?.alternativeText || "Icon"}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <div className="text-xs lg:text-sm 2xl:text-base 3xl:text-xl leading-[1.2] font-normal text-white max-sm:w-[calc(100%-20px)] max-sm:pl-1.25">
                                  {item?.title}
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-auto py-3.75 3xl:py-5 bg-linear-to-r from-(--basecolor)/80 to-(--basecolor2)/80 absolute z-1 inset-[auto_0_0_0]">
        <div className="container">
          <div className="w-full h-auto gap-2.5 sm:gap-5 lg:gap-7.5 2xl:gap-10 3xl:gap-12.5 flex items-center">
            <div className="w-6.25 2xl:w-7.5 3xl:w-10 h-auto aspect-square overflow-hidden flex items-center justify-center">
              <Image
                src="/images/icon-marquee.svg"
                alt="icon-marquee"
                width={35}
                height={35}
                className="w-full h-full object-contain"
              />
            </div>
            <Marquee
              pauseOnHover
              className="mask-l-to-transparent mask-l-from-95% mask-r-to-transparent mask-r-from-95% overflow-hidden"
            >
              {data?.heroMarquee?.map((item, index) => (
                <Link
                  key={"marqueeText" + index}
                  href={item?.url}
                  className="[--icon-size:12px] 2xl:[--icon-size:15px] text-sm 3xl:text-base leading-[1.1] font-normal tracking-[-2%] text-center text-white w-auto h-auto pl-[calc(var(--icon-size)+10px)] 2xl:pl-[calc(var(--icon-size)+15px)] pr-2.5 2xl:pr-3.75 flex items-center relative z-0 before:content-[''] before:w-(--icon-size) before:h-auto before:aspect-square before:my-auto before:bg-[url('data:image/svg+xml,%3Csvg%20width=%2212%22%20height=%2212%22%20viewBox=%220%200%2012%2012%22%20fill=%22none%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d=%22M6.49517%202.35386L6%200L5.50483%202.35386C5.34195%203.12816%204.95733%203.83835%204.39784%204.39784C3.83835%204.95733%203.12816%205.34195%202.35386%205.50483L0%206L2.35386%206.49517C3.12815%206.65805%203.83835%207.0427%204.39784%207.60218C4.95733%208.16166%205.34195%208.87183%205.50483%209.64616L6%2012L6.49517%209.64616C6.65805%208.87183%207.04265%208.16166%207.60213%207.60218C8.16166%207.0427%208.87183%206.65805%209.64616%206.49517L12%206L9.64616%205.50483C8.87183%205.34195%208.16161%204.95733%207.60213%204.39784C7.04265%203.83835%206.65805%203.12816%206.49517%202.35386Z%22%20fill=%22white%22/%3E%3C/svg%3E')] before:bg-contain before:bg-center before:bg-no-repeat before:absolute before:z-1 before:inset-[0_auto_0_0]"
                >
                  {item?.label}
                </Link>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
