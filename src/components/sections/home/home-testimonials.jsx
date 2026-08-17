"use client";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import { Fancybox } from "@fancyapps/ui";
import { Text } from "@/components/ui/text";
import Autoplay from "embla-carousel-autoplay";
import { Heading } from "@/components/ui/heading";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import useEmblaCarousel from "embla-carousel-react";
import { buttonVariants } from "@/components/ui/button";
import { useEffect, useCallback, useState } from "react";
import { ShineBorder } from "@/components/ui/shine-border";

export default function HomeTestimonials({ data }) {
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
  }, [emblaApi, onSelect]);

  // FANCYBOX
  useEffect(() => {
    Fancybox.bind("[data-fancybox='testimonials']", {
      Hash: false,
    });
    return () => {
      Fancybox.unbind("[data-fancybox='testimonials']");
      Fancybox.close();
    };
  }, []);

  return (
    <section className="w-full h-auto py-[35px_70px] sm:py-[40px_50px] lg:py-[40px_60px] 2xl:py-[40px_70px] 3xl:py-[50px_90px] overflow-hidden block">
      <div className="container relative z-0">
        <div className="w-[90%] h-full mx-auto pointer-events-none translate-y-[-5%] block absolute -z-1 inset-0">
          <Image
            src={"/images/home-testimonial-overlay.svg"}
            alt="overlay"
            width={1600}
            height={900}
            className="w-full h-full object-contain light:block dark:hidden"
          />
          <Image
            src={"/images/home-testimonial-overlay-dark.svg"}
            alt="overlay"
            width={1600}
            height={900}
            className="w-full h-full object-contain dark:sm:block light:hidden"
          />
        </div>
        <div className="w-full h-auto mb-3.75 sm:mb-5 lg:mb-7.5 3xl:mb-10 text-center">
          <Heading
            aurora
            speed={2}
            align="center"
            className="mb-1.25 3xl:mb-2.5"
          >
            {data?.title}
          </Heading>
          <Text>{data?.description}</Text>
        </div>
        <div className="w-full h-auto mb-6.25 2xl:mb-7.5 3xl:mb-8.75 gap-1.25 sm:gap-2.5 lg:gap-3.75 2xl:gap-5 3xl:gap-6.25 grid grid-cols-2 lg:grid-cols-4">
          {data?.statistics?.map((item, index) => (
            <div key={item?.id} className="w-full h-auto">
              <div className="group w-full h-full text-center p-[15px_10px] lg:p-[20px_10px] 3xl:p-[30px_10px] bg-white dark:bg-black/10 border border-black/10 dark:border-white/10 rounded-[15px] sm:rounded-[10px] 2xl:rounded-[15px] dark:backdrop-blur-[2px] overflow-hidden block relative z-0 transition-colors duration-500 hover:bg-linear-to-r hover:from-(--basecolor) hover:to-(--basecolor2)">
                <ShineBorder
                  shineColor={["#909191"]}
                  duration={8 + index * 4}
                  className="hidden dark:block"
                />
                <div className="text-[20px] sm:text-[24px] 2xl:text-[28px] 3xl:text-[35px] leading-[1.2] font-bold text-[#212121] dark:text-white mb-1.25 transition-colors duration-500 group-hover:text-white">
                  <CountUp
                    start={0}
                    end={item?.value || 0}
                    duration={2.5}
                    separator=","
                    suffix={item?.suffix || "+"}
                    enableScrollSpy={true}
                  />
                </div>
                <div className="text-[14px] sm:text-[13px] 2xl:text-sm 3xl:text-lg leading-[1.1] font-normal text-[#4A5565] dark:text-white transition-colors duration-500 group-hover:text-white">
                  {item?.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="[--navigation-btn-size:40px] sm:[--navigation-btn-size:25px] xl:[--navigation-btn-size:30px] 2xl:[--navigation-btn-size:40px] w-full h-auto block relative z-0">
          {!prevBtnDisabled && (
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="w-(--navigation-btn-size) h-auto aspect-40/30 my-auto overflow-hidden -translate-x-[calc(var(--navigation-btn-size)/8)]  sm:-translate-x-(--navigation-btn-size) xl:-translate-x-[calc(var(--navigation-btn-size)+5px)] flex items-center justify-center absolute z-1 inset-[0_auto_0_0] transition-opacity duration-500 hover:opacity-50"
            >
              <Image
                src={"/images/testimonial-slider-btn.svg"}
                alt="left-btn"
                width={40}
                height={30}
                className="w-full h-full object-contain hidden sm:block"
              />
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
              className="w-(--navigation-btn-size) h-auto aspect-40/30 my-auto overflow-hidden translate-x-[calc(var(--navigation-btn-size)/8)] sm:translate-x-(--navigation-btn-size) xl:translate-x-[calc(var(--navigation-btn-size)+5px)] flex items-center justify-center absolute z-1 inset-[0_0_0_auto] transition-opacity duration-500 hover:opacity-50"
            >
              <Image
                src={"/images/testimonial-slider-btn.svg"}
                alt="right-btn"
                width={40}
                height={30}
                className="w-full h-full object-contain scale-x-[-1] hidden sm:block"
              />
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
            className="[--slide-gap:10px] 2xl:[--slide-gap:15px] w-full h-auto sm:overflow-hidden"
            ref={emblaRef}
          >
            <div className="ml-[calc(var(--slide-gap)*-1)] touch-pan-y touch-pinch-zoom flex">
              {data?.successStories?.map((item) => (
                <div
                  key={item?.id}
                  className="min-w-0 flex-[0_0_calc(100%/1.3)] sm:flex-[0_0_calc(100%/2.5)] lg:flex-[0_0_calc(100%/3)] xl:flex-[0_0_calc(100%/4)] pl-(--slide-gap)"
                >
                  <Link
                    data-fancybox="testimonials"
                    href={item?.media?.url || "#"}
                    data-caption={item?.name}
                    data-type={
                      item?.media?.type === "video" ? "html5video" : "image"
                    }
                    className="w-full h-full rounded-[7px] 2xl:rounded-[10px] overflow-hidden block relative z-0 before:content-[''] before:w-7.5 2xl:before:w-8.75 3xl:before:w-11.25 before:h-auto before:aspect-square before:rounded-full before:m-3.75 2xl:before:m-5 before:bg-[url('data:image/svg+xml,%3Csvg%20width=%2243%22%20height=%2243%22%20viewBox=%220%200%2043%2043%22%20fill=%22none%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d=%22M21.5%200C9.62588%200%200%209.62588%200%2021.5C0%2033.3741%209.62588%2043%2021.5%2043C33.3741%2043%2043%2033.3741%2043%2021.5%2043.9874%209.63119%2033.3689%200.0126877%2021.5%200ZM30.5545%2022.185C30.4057%2022.4836%2030.1637%2022.7257%2029.865%2022.8745V22.8821L17.5793%2029.025C16.8206%2029.4041%2015.8983%2029.0965%2015.5191%2028.3377C15.4113%2028.1221%2015.3558%2027.884%2015.3571%2027.6429V15.3572C15.3567%2014.509%2016.0439%2013.8212%2016.8921%2013.8207C17.1307%2013.8206%2017.366%2013.8761%2017.5793%2013.9827L29.865%2020.1256C30.6241%2020.5039%2030.9329%2021.4259%2030.5545%2022.185Z%22%20fill=%22white%22%20fill-opacity=%220.8%22/%3E%3C/svg%3E')] before:bg-contain before:bg-no-repeat before:bg-center before:absolute before:z-1 before:inset-[0_0_auto_auto] after:content-[''] after:w-full after:h-[30%] after:bg-linear-to-t after:from-[#090909] after:to-[#0B2148]/0 after:absolute after:z-0 after:inset-[auto_0_0_0] after:transition-colors after:duration-500 hover:after:from-(--basecolor2)"
                  >
                    <div className="w-full h-full aspect-420/530 block">
                      {item?.media?.type === "video" ? (
                        <video
                          src={item?.media?.url}
                          poster={item?.media?.poster}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <Image
                          src={item?.media?.url || "/images/placeholder.jpg"}
                          alt={item?.name || "Testimonial media"}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="w-[90%] h-auto pt-3.75 3xl:pt-5 m-[15px_auto] 3xl:m-[25px_auto] border-t border-[#F3F4F6]/20 absolute z-1 inset-[auto_0_0_0] flex items-center flex-wrap">
                      <div className="w-[75%]">
                        <div className="[--avatar-size:45px] 2xl:[--avatar-size:55px] 3xl:[--avatar-size:70px] w-full h-auto flex items-center">
                          <div className="w-(--avatar-size) h-auto aspect-square rounded-[6px] 2xl:rounded-[8px] 3xl:rounded-[10px] overflow-hidden block">
                            <Image
                              src={
                                item?.avatar?.url || "/images/placeholder.jpg"
                              }
                              width={70}
                              height={70}
                              alt={item?.name || "Testimonial Avatar"}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="w-[calc(100%-(var(--avatar-size))] pl-2.5">
                            <div className="text-sm 2xl:text-base 3xl:text-xl leading-[1] font-medium text-white mb-1.25">
                              {item?.name}
                            </div>
                            <div className="text-[10px] 2xl:text-xs 3xl:text-sm leading-[1] font-normal text-white mb-1.25 3xl:mb-2.5">
                              {item?.designation}
                            </div>
                            <div className="text-[10px] 2xl:text-xs 3xl:text-sm leading-[1] font-normal text-white/50">
                              {item?.education}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[25%]">
                        <div className="w-auto h-full aspect-80/65 p-1.25 2xl:p-2.5 border border-white/10 rounded-[6px] 2xl:rounded-[10px] overflow-hidden flex flex-col items-center justify-center">
                          <div className="w-5 2xl:w-6.25 h-auto aspect-square mb-1.25 2xl:mb-2.5 overflow-hidden block">
                            <Image
                              src={
                                item?.badge?.url || "/images/placeholder.jpg"
                              }
                              width={20}
                              height={20}
                              alt={item?.badge?.alternativeText || "Badge Icon"}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="text-[10px] 2xl:text-[11px] leading-[1] font-normal text-white">
                            {item?.badge?.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-auto sm:mt-7.5 lg:mt-10 2xl:mt-12.5 3xl:mt-15 hidden sm:flex items-center justify-center">
          <Link
            href="/centres-of-excellence"
            className={buttonVariants({
              variant: "default",
              size: "default",
            })}
          >
            View All Success Stories
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
    </section>
  );
}
